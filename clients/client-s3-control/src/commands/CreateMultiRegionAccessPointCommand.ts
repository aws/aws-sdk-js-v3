// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CreateMultiRegionAccessPointRequest, CreateMultiRegionAccessPointResult } from "../models/models_0";
import {
  de_CreateMultiRegionAccessPointCommand,
  se_CreateMultiRegionAccessPointCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateMultiRegionAccessPointCommand}.
 */
export interface CreateMultiRegionAccessPointCommandInput extends CreateMultiRegionAccessPointRequest {}
/**
 * @public
 *
 * The output of {@link CreateMultiRegionAccessPointCommand}.
 */
export interface CreateMultiRegionAccessPointCommandOutput
  extends CreateMultiRegionAccessPointResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a Multi-Region Access Point and associates it with the specified buckets. For more information
 *          about creating Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html">Creating
 *             Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>This action will always be routed to the US West (Oregon) Region. For more information
 *          about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing
 *             Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>This request is asynchronous, meaning that you might receive a response before the
 *          command has completed. When this request provides a response, it provides a token that you
 *          can use to monitor the status of the request with
 *             <code>DescribeMultiRegionAccessPointOperation</code>.</p>
 *          <p>The following actions are related to <code>CreateMultiRegionAccessPoint</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPoint.html">GetMultiRegionAccessPoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html">ListMultiRegionAccessPoints</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, CreateMultiRegionAccessPointCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, CreateMultiRegionAccessPointCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // CreateMultiRegionAccessPointRequest
 *   AccountId: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE", // required
 *   Details: { // CreateMultiRegionAccessPointInput
 *     Name: "STRING_VALUE", // required
 *     PublicAccessBlock: { // PublicAccessBlockConfiguration
 *       BlockPublicAcls: true || false,
 *       IgnorePublicAcls: true || false,
 *       BlockPublicPolicy: true || false,
 *       RestrictPublicBuckets: true || false,
 *     },
 *     Regions: [ // RegionCreationList // required
 *       { // Region
 *         Bucket: "STRING_VALUE", // required
 *         BucketAccountId: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateMultiRegionAccessPointCommand(input);
 * const response = await client.send(command);
 * // { // CreateMultiRegionAccessPointResult
 * //   RequestTokenARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMultiRegionAccessPointCommandInput - {@link CreateMultiRegionAccessPointCommandInput}
 * @returns {@link CreateMultiRegionAccessPointCommandOutput}
 * @see {@link CreateMultiRegionAccessPointCommandInput} for command's `input` shape.
 * @see {@link CreateMultiRegionAccessPointCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class CreateMultiRegionAccessPointCommand extends $Command<
  CreateMultiRegionAccessPointCommandInput,
  CreateMultiRegionAccessPointCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      RequiresAccountId: { type: "staticContextParams", value: true },
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
  constructor(readonly input: CreateMultiRegionAccessPointCommandInput) {
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
  ): Handler<CreateMultiRegionAccessPointCommandInput, CreateMultiRegionAccessPointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMultiRegionAccessPointCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "CreateMultiRegionAccessPointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSS3ControlServiceV20180820",
        operation: "CreateMultiRegionAccessPoint",
      },
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
  private serialize(input: CreateMultiRegionAccessPointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateMultiRegionAccessPointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMultiRegionAccessPointCommandOutput> {
    return de_CreateMultiRegionAccessPointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
