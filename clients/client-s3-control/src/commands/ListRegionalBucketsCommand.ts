// smithy-typescript generated code
import { getRedirectFromPostIdPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { ListRegionalBucketsRequest, ListRegionalBucketsResult } from "../models/models_0";
import { de_ListRegionalBucketsCommand, se_ListRegionalBucketsCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRegionalBucketsCommand}.
 */
export interface ListRegionalBucketsCommandInput extends ListRegionalBucketsRequest {}
/**
 * @public
 *
 * The output of {@link ListRegionalBucketsCommand}.
 */
export interface ListRegionalBucketsCommandOutput extends ListRegionalBucketsResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of all Outposts buckets in an Outpost that are owned by the authenticated
 *          sender of the request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts
 *          endpoint hostname prefix and <code>x-amz-outpost-id</code> in your request, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListRegionalBuckets.html#API_control_ListRegionalBuckets_Examples">Examples</a> section.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListRegionalBucketsCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListRegionalBucketsCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // ListRegionalBucketsRequest
 *   AccountId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   OutpostId: "STRING_VALUE",
 * };
 * const command = new ListRegionalBucketsCommand(input);
 * const response = await client.send(command);
 * // { // ListRegionalBucketsResult
 * //   RegionalBucketList: [ // RegionalBucketList
 * //     { // RegionalBucket
 * //       Bucket: "STRING_VALUE", // required
 * //       BucketArn: "STRING_VALUE",
 * //       PublicAccessBlockEnabled: true || false, // required
 * //       CreationDate: new Date("TIMESTAMP"), // required
 * //       OutpostId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRegionalBucketsCommandInput - {@link ListRegionalBucketsCommandInput}
 * @returns {@link ListRegionalBucketsCommandOutput}
 * @see {@link ListRegionalBucketsCommandInput} for command's `input` shape.
 * @see {@link ListRegionalBucketsCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class ListRegionalBucketsCommand extends $Command<
  ListRegionalBucketsCommandInput,
  ListRegionalBucketsCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      RequiresAccountId: { type: "staticContextParams", value: true },
      OutpostId: { type: "contextParams", name: "OutpostId" },
      AccountId: { type: "contextParams", name: "AccountId" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListRegionalBucketsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRegionalBucketsCommandInput, ListRegionalBucketsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRegionalBucketsCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getRedirectFromPostIdPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "ListRegionalBucketsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListRegionalBucketsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRegionalBucketsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRegionalBucketsCommandOutput> {
    return de_ListRegionalBucketsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
