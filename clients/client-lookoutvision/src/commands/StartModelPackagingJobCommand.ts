// smithy-typescript generated code
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

import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { StartModelPackagingJobRequest, StartModelPackagingJobResponse } from "../models/models_0";
import { de_StartModelPackagingJobCommand, se_StartModelPackagingJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartModelPackagingJobCommand}.
 */
export interface StartModelPackagingJobCommandInput extends StartModelPackagingJobRequest {}
/**
 * @public
 *
 * The output of {@link StartModelPackagingJobCommand}.
 */
export interface StartModelPackagingJobCommandOutput extends StartModelPackagingJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts an Amazon Lookout for Vision model packaging job. A model packaging job creates an AWS IoT Greengrass component for
 *    a Lookout for Vision model. You can use the component to deploy your model to an edge device managed by Greengrass.
 * </p>
 *
 *          <p>Use the <a>DescribeModelPackagingJob</a> API to determine the current status of the job.
 *
 *   The model packaging job is complete if the value of <code>Status</code> is <code>SUCCEEDED</code>.</p>
 *          <p>To deploy the component
 *       to the target device, use the component name and component version
 *       with the AWS IoT Greengrass <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_CreateDeployment.html">CreateDeployment</a> API.</p>
 *
 *          <p>This operation requires the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>lookoutvision:StartModelPackagingJob</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>s3:PutObject</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>s3:GetBucketLocation</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>kms:GenerateDataKey</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>greengrass:CreateComponentVersion</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>greengrass:DescribeComponent</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>(Optional) <code>greengrass:TagResource</code>. Only required if you want to tag the component.</p>
 *             </li>
 *          </ul>
 *
 *
 *          <p>For more information, see
 *       <i>Using your Amazon Lookout for Vision model on an edge device</i> in the  Amazon Lookout for Vision Developer Guide. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, StartModelPackagingJobCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, StartModelPackagingJobCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const input = { // StartModelPackagingJobRequest
 *   ProjectName: "STRING_VALUE", // required
 *   ModelVersion: "STRING_VALUE", // required
 *   JobName: "STRING_VALUE",
 *   Configuration: { // ModelPackagingConfiguration
 *     Greengrass: { // GreengrassConfiguration
 *       CompilerOptions: "STRING_VALUE",
 *       TargetDevice: "jetson_xavier",
 *       TargetPlatform: { // TargetPlatform
 *         Os: "LINUX", // required
 *         Arch: "ARM64" || "X86_64", // required
 *         Accelerator: "NVIDIA",
 *       },
 *       S3OutputLocation: { // S3Location
 *         Bucket: "STRING_VALUE", // required
 *         Prefix: "STRING_VALUE",
 *       },
 *       ComponentName: "STRING_VALUE", // required
 *       ComponentVersion: "STRING_VALUE",
 *       ComponentDescription: "STRING_VALUE",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   Description: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new StartModelPackagingJobCommand(input);
 * const response = await client.send(command);
 * // { // StartModelPackagingJobResponse
 * //   JobName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartModelPackagingJobCommandInput - {@link StartModelPackagingJobCommandInput}
 * @returns {@link StartModelPackagingJobCommandOutput}
 * @see {@link StartModelPackagingJobCommandInput} for command's `input` shape.
 * @see {@link StartModelPackagingJobCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The update or deletion of a resource caused an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Lookout for Vision experienced a service issue. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota was exceeded the allowed limit. For more information, see
 *         Limits in Amazon Lookout for Vision in the Amazon Lookout for Vision Developer Guide. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Amazon Lookout for Vision is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occured. For example, invalid characters in a project name,
 *       or if a pagination token is invalid.</p>
 *
 * @throws {@link LookoutVisionServiceException}
 * <p>Base exception class for all service exceptions from LookoutVision service.</p>
 *
 */
export class StartModelPackagingJobCommand extends $Command<
  StartModelPackagingJobCommandInput,
  StartModelPackagingJobCommandOutput,
  LookoutVisionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: StartModelPackagingJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutVisionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartModelPackagingJobCommandInput, StartModelPackagingJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartModelPackagingJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
    const commandName = "StartModelPackagingJobCommand";
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
  private serialize(input: StartModelPackagingJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartModelPackagingJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartModelPackagingJobCommandOutput> {
    return de_StartModelPackagingJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
