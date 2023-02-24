// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getRedirectFromPostIdPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ListRegionalBucketsRequest,
  ListRegionalBucketsRequestFilterSensitiveLog,
  ListRegionalBucketsResult,
  ListRegionalBucketsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlListRegionalBucketsCommand,
  serializeAws_restXmlListRegionalBucketsCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

export interface ListRegionalBucketsCommandInput extends ListRegionalBucketsRequest {}
export interface ListRegionalBucketsCommandOutput extends ListRegionalBucketsResult, __MetadataBearer {}

/**
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
 * const command = new ListRegionalBucketsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRegionalBucketsCommandInput} for command's `input` shape.
 * @see {@link ListRegionalBucketsCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
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
      inputFilterSensitiveLog: ListRegionalBucketsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListRegionalBucketsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRegionalBucketsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListRegionalBucketsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRegionalBucketsCommandOutput> {
    return deserializeAws_restXmlListRegionalBucketsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
