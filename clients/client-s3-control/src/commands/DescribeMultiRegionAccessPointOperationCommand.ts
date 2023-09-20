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

import {
  DescribeMultiRegionAccessPointOperationRequest,
  DescribeMultiRegionAccessPointOperationResult,
} from "../models/models_0";
import {
  de_DescribeMultiRegionAccessPointOperationCommand,
  se_DescribeMultiRegionAccessPointOperationCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMultiRegionAccessPointOperationCommand}.
 */
export interface DescribeMultiRegionAccessPointOperationCommandInput
  extends DescribeMultiRegionAccessPointOperationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMultiRegionAccessPointOperationCommand}.
 */
export interface DescribeMultiRegionAccessPointOperationCommandOutput
  extends DescribeMultiRegionAccessPointOperationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the status of an asynchronous request to manage a Multi-Region Access Point. For more information
 *          about managing Multi-Region Access Points and how asynchronous requests work, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing
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
 * import { S3ControlClient, DescribeMultiRegionAccessPointOperationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DescribeMultiRegionAccessPointOperationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // DescribeMultiRegionAccessPointOperationRequest
 *   AccountId: "STRING_VALUE",
 *   RequestTokenARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeMultiRegionAccessPointOperationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMultiRegionAccessPointOperationResult
 * //   AsyncOperation: { // AsyncOperation
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Operation: "CreateMultiRegionAccessPoint" || "DeleteMultiRegionAccessPoint" || "PutMultiRegionAccessPointPolicy",
 * //     RequestTokenARN: "STRING_VALUE",
 * //     RequestParameters: { // AsyncRequestParameters
 * //       CreateMultiRegionAccessPointRequest: { // CreateMultiRegionAccessPointInput
 * //         Name: "STRING_VALUE", // required
 * //         PublicAccessBlock: { // PublicAccessBlockConfiguration
 * //           BlockPublicAcls: true || false,
 * //           IgnorePublicAcls: true || false,
 * //           BlockPublicPolicy: true || false,
 * //           RestrictPublicBuckets: true || false,
 * //         },
 * //         Regions: [ // RegionCreationList // required
 * //           { // Region
 * //             Bucket: "STRING_VALUE", // required
 * //             BucketAccountId: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       DeleteMultiRegionAccessPointRequest: { // DeleteMultiRegionAccessPointInput
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //       PutMultiRegionAccessPointPolicyRequest: { // PutMultiRegionAccessPointPolicyInput
 * //         Name: "STRING_VALUE", // required
 * //         Policy: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     RequestStatus: "STRING_VALUE",
 * //     ResponseDetails: { // AsyncResponseDetails
 * //       MultiRegionAccessPointDetails: { // MultiRegionAccessPointsAsyncResponse
 * //         Regions: [ // MultiRegionAccessPointRegionalResponseList
 * //           { // MultiRegionAccessPointRegionalResponse
 * //             Name: "STRING_VALUE",
 * //             RequestStatus: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       ErrorDetails: { // AsyncErrorDetails
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //         Resource: "STRING_VALUE",
 * //         RequestId: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeMultiRegionAccessPointOperationCommandInput - {@link DescribeMultiRegionAccessPointOperationCommandInput}
 * @returns {@link DescribeMultiRegionAccessPointOperationCommandOutput}
 * @see {@link DescribeMultiRegionAccessPointOperationCommandInput} for command's `input` shape.
 * @see {@link DescribeMultiRegionAccessPointOperationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class DescribeMultiRegionAccessPointOperationCommand extends $Command<
  DescribeMultiRegionAccessPointOperationCommandInput,
  DescribeMultiRegionAccessPointOperationCommandOutput,
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
  constructor(readonly input: DescribeMultiRegionAccessPointOperationCommandInput) {
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
  ): Handler<
    DescribeMultiRegionAccessPointOperationCommandInput,
    DescribeMultiRegionAccessPointOperationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeMultiRegionAccessPointOperationCommand.getEndpointParameterInstructions()
      )
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "DescribeMultiRegionAccessPointOperationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSS3ControlServiceV20180820",
        operation: "DescribeMultiRegionAccessPointOperation",
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
  private serialize(
    input: DescribeMultiRegionAccessPointOperationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeMultiRegionAccessPointOperationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMultiRegionAccessPointOperationCommandOutput> {
    return de_DescribeMultiRegionAccessPointOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
