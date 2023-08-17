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
} from "@smithy/types";

import { GetMultiRegionAccessPointRequest, GetMultiRegionAccessPointResult } from "../models/models_0";
import { de_GetMultiRegionAccessPointCommand, se_GetMultiRegionAccessPointCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMultiRegionAccessPointCommand}.
 */
export interface GetMultiRegionAccessPointCommandInput extends GetMultiRegionAccessPointRequest {}
/**
 * @public
 *
 * The output of {@link GetMultiRegionAccessPointCommand}.
 */
export interface GetMultiRegionAccessPointCommandOutput extends GetMultiRegionAccessPointResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns configuration information about the specified Multi-Region Access Point.</p>
 *          <p>This action will always be routed to the US West (Oregon) Region. For more information
 *          about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing
 *             Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following actions are related to <code>GetMultiRegionAccessPoint</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a>
 *                </p>
 *             </li>
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
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html">ListMultiRegionAccessPoints</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetMultiRegionAccessPointCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetMultiRegionAccessPointCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // GetMultiRegionAccessPointRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetMultiRegionAccessPointCommand(input);
 * const response = await client.send(command);
 * // { // GetMultiRegionAccessPointResult
 * //   AccessPoint: { // MultiRegionAccessPointReport
 * //     Name: "STRING_VALUE",
 * //     Alias: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     PublicAccessBlock: { // PublicAccessBlockConfiguration
 * //       BlockPublicAcls: true || false,
 * //       IgnorePublicAcls: true || false,
 * //       BlockPublicPolicy: true || false,
 * //       RestrictPublicBuckets: true || false,
 * //     },
 * //     Status: "READY" || "INCONSISTENT_ACROSS_REGIONS" || "CREATING" || "PARTIALLY_CREATED" || "PARTIALLY_DELETED" || "DELETING",
 * //     Regions: [ // RegionReportList
 * //       { // RegionReport
 * //         Bucket: "STRING_VALUE",
 * //         Region: "STRING_VALUE",
 * //         BucketAccountId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMultiRegionAccessPointCommandInput - {@link GetMultiRegionAccessPointCommandInput}
 * @returns {@link GetMultiRegionAccessPointCommandOutput}
 * @see {@link GetMultiRegionAccessPointCommandInput} for command's `input` shape.
 * @see {@link GetMultiRegionAccessPointCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class GetMultiRegionAccessPointCommand extends $Command<
  GetMultiRegionAccessPointCommandInput,
  GetMultiRegionAccessPointCommandOutput,
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
  constructor(readonly input: GetMultiRegionAccessPointCommandInput) {
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
  ): Handler<GetMultiRegionAccessPointCommandInput, GetMultiRegionAccessPointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMultiRegionAccessPointCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetMultiRegionAccessPointCommand";
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
  private serialize(input: GetMultiRegionAccessPointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMultiRegionAccessPointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMultiRegionAccessPointCommandOutput> {
    return de_GetMultiRegionAccessPointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
