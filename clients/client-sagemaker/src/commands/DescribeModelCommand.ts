// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { DescribeModelInput, DescribeModelOutput } from "../models/models_2";
import { de_DescribeModelCommand, se_DescribeModelCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeModelCommand}.
 */
export interface DescribeModelCommandInput extends DescribeModelInput {}
/**
 * @public
 *
 * The output of {@link DescribeModelCommand}.
 */
export interface DescribeModelCommandOutput extends DescribeModelOutput, __MetadataBearer {}

/**
 * @public
 * <p>Describes a model that you created using the <code>CreateModel</code>
 *             API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeModelCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeModelCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeModelInput
 *   ModelName: "STRING_VALUE", // required
 * };
 * const command = new DescribeModelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeModelOutput
 * //   ModelName: "STRING_VALUE", // required
 * //   PrimaryContainer: { // ContainerDefinition
 * //     ContainerHostname: "STRING_VALUE",
 * //     Image: "STRING_VALUE",
 * //     ImageConfig: { // ImageConfig
 * //       RepositoryAccessMode: "Platform" || "Vpc", // required
 * //       RepositoryAuthConfig: { // RepositoryAuthConfig
 * //         RepositoryCredentialsProviderArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     Mode: "SingleModel" || "MultiModel",
 * //     ModelDataUrl: "STRING_VALUE",
 * //     Environment: { // EnvironmentMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     ModelPackageName: "STRING_VALUE",
 * //     InferenceSpecificationName: "STRING_VALUE",
 * //     MultiModelConfig: { // MultiModelConfig
 * //       ModelCacheSetting: "Enabled" || "Disabled",
 * //     },
 * //   },
 * //   Containers: [ // ContainerDefinitionList
 * //     {
 * //       ContainerHostname: "STRING_VALUE",
 * //       Image: "STRING_VALUE",
 * //       ImageConfig: {
 * //         RepositoryAccessMode: "Platform" || "Vpc", // required
 * //         RepositoryAuthConfig: {
 * //           RepositoryCredentialsProviderArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       Mode: "SingleModel" || "MultiModel",
 * //       ModelDataUrl: "STRING_VALUE",
 * //       Environment: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ModelPackageName: "STRING_VALUE",
 * //       InferenceSpecificationName: "STRING_VALUE",
 * //       MultiModelConfig: {
 * //         ModelCacheSetting: "Enabled" || "Disabled",
 * //       },
 * //     },
 * //   ],
 * //   InferenceExecutionConfig: { // InferenceExecutionConfig
 * //     Mode: "Serial" || "Direct", // required
 * //   },
 * //   ExecutionRoleArn: "STRING_VALUE", // required
 * //   VpcConfig: { // VpcConfig
 * //     SecurityGroupIds: [ // VpcSecurityGroupIds // required
 * //       "STRING_VALUE",
 * //     ],
 * //     Subnets: [ // Subnets // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   ModelArn: "STRING_VALUE", // required
 * //   EnableNetworkIsolation: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeModelCommandInput - {@link DescribeModelCommandInput}
 * @returns {@link DescribeModelCommandOutput}
 * @see {@link DescribeModelCommandInput} for command's `input` shape.
 * @see {@link DescribeModelCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeModelCommand extends $Command<
  DescribeModelCommandInput,
  DescribeModelCommandOutput,
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
  constructor(readonly input: DescribeModelCommandInput) {
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
  ): Handler<DescribeModelCommandInput, DescribeModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeModelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeModelCommand";
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
  private serialize(input: DescribeModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeModelCommandOutput> {
    return de_DescribeModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
