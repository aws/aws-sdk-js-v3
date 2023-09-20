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

import { DescribeAppImageConfigRequest, DescribeAppImageConfigResponse } from "../models/models_2";
import { de_DescribeAppImageConfigCommand, se_DescribeAppImageConfigCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppImageConfigCommand}.
 */
export interface DescribeAppImageConfigCommandInput extends DescribeAppImageConfigRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppImageConfigCommand}.
 */
export interface DescribeAppImageConfigCommandOutput extends DescribeAppImageConfigResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes an AppImageConfig.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeAppImageConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeAppImageConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeAppImageConfigRequest
 *   AppImageConfigName: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppImageConfigCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppImageConfigResponse
 * //   AppImageConfigArn: "STRING_VALUE",
 * //   AppImageConfigName: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   KernelGatewayImageConfig: { // KernelGatewayImageConfig
 * //     KernelSpecs: [ // KernelSpecs // required
 * //       { // KernelSpec
 * //         Name: "STRING_VALUE", // required
 * //         DisplayName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     FileSystemConfig: { // FileSystemConfig
 * //       MountPath: "STRING_VALUE",
 * //       DefaultUid: Number("int"),
 * //       DefaultGid: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAppImageConfigCommandInput - {@link DescribeAppImageConfigCommandInput}
 * @returns {@link DescribeAppImageConfigCommandOutput}
 * @see {@link DescribeAppImageConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeAppImageConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeAppImageConfigCommand extends $Command<
  DescribeAppImageConfigCommandInput,
  DescribeAppImageConfigCommandOutput,
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
  constructor(readonly input: DescribeAppImageConfigCommandInput) {
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
  ): Handler<DescribeAppImageConfigCommandInput, DescribeAppImageConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAppImageConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeAppImageConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeAppImageConfig",
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
  private serialize(input: DescribeAppImageConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAppImageConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAppImageConfigCommandOutput> {
    return de_DescribeAppImageConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
