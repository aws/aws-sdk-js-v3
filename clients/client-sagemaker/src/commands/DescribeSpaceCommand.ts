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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DescribeSpaceRequest, DescribeSpaceResponse } from "../models/models_2";
import { de_DescribeSpaceCommand, se_DescribeSpaceCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSpaceCommand}.
 */
export interface DescribeSpaceCommandInput extends DescribeSpaceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSpaceCommand}.
 */
export interface DescribeSpaceCommandOutput extends DescribeSpaceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeSpaceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeSpaceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeSpaceRequest
 *   DomainId: "STRING_VALUE", // required
 *   SpaceName: "STRING_VALUE", // required
 * };
 * const command = new DescribeSpaceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSpaceResponse
 * //   DomainId: "STRING_VALUE",
 * //   SpaceArn: "STRING_VALUE",
 * //   SpaceName: "STRING_VALUE",
 * //   HomeEfsFileSystemUid: "STRING_VALUE",
 * //   Status: "Deleting" || "Failed" || "InService" || "Pending" || "Updating" || "Update_Failed" || "Delete_Failed",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   FailureReason: "STRING_VALUE",
 * //   SpaceSettings: { // SpaceSettings
 * //     JupyterServerAppSettings: { // JupyterServerAppSettings
 * //       DefaultResourceSpec: { // ResourceSpec
 * //         SageMakerImageArn: "STRING_VALUE",
 * //         SageMakerImageVersionArn: "STRING_VALUE",
 * //         InstanceType: "system" || "ml.t3.micro" || "ml.t3.small" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.geospatial.interactive" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge",
 * //         LifecycleConfigArn: "STRING_VALUE",
 * //       },
 * //       LifecycleConfigArns: [ // LifecycleConfigArns
 * //         "STRING_VALUE",
 * //       ],
 * //       CodeRepositories: [ // CodeRepositories
 * //         { // CodeRepository
 * //           RepositoryUrl: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     KernelGatewayAppSettings: { // KernelGatewayAppSettings
 * //       DefaultResourceSpec: {
 * //         SageMakerImageArn: "STRING_VALUE",
 * //         SageMakerImageVersionArn: "STRING_VALUE",
 * //         InstanceType: "system" || "ml.t3.micro" || "ml.t3.small" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.geospatial.interactive" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge",
 * //         LifecycleConfigArn: "STRING_VALUE",
 * //       },
 * //       CustomImages: [ // CustomImages
 * //         { // CustomImage
 * //           ImageName: "STRING_VALUE", // required
 * //           ImageVersionNumber: Number("int"),
 * //           AppImageConfigName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       LifecycleConfigArns: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSpaceCommandInput - {@link DescribeSpaceCommandInput}
 * @returns {@link DescribeSpaceCommandOutput}
 * @see {@link DescribeSpaceCommandInput} for command's `input` shape.
 * @see {@link DescribeSpaceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeSpaceCommand extends $Command<
  DescribeSpaceCommandInput,
  DescribeSpaceCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: DescribeSpaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSpaceCommandInput, DescribeSpaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeSpaceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeSpaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeSpace",
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
  private serialize(input: DescribeSpaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSpaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSpaceCommandOutput> {
    return de_DescribeSpaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
