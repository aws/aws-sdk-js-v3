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

import { DescribeStudioLifecycleConfigRequest, DescribeStudioLifecycleConfigResponse } from "../models/models_2";
import {
  de_DescribeStudioLifecycleConfigCommand,
  se_DescribeStudioLifecycleConfigCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStudioLifecycleConfigCommand}.
 */
export interface DescribeStudioLifecycleConfigCommandInput extends DescribeStudioLifecycleConfigRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStudioLifecycleConfigCommand}.
 */
export interface DescribeStudioLifecycleConfigCommandOutput
  extends DescribeStudioLifecycleConfigResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the Studio Lifecycle Configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeStudioLifecycleConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeStudioLifecycleConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeStudioLifecycleConfigRequest
 *   StudioLifecycleConfigName: "STRING_VALUE", // required
 * };
 * const command = new DescribeStudioLifecycleConfigCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStudioLifecycleConfigResponse
 * //   StudioLifecycleConfigArn: "STRING_VALUE",
 * //   StudioLifecycleConfigName: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   StudioLifecycleConfigContent: "STRING_VALUE",
 * //   StudioLifecycleConfigAppType: "JupyterServer" || "KernelGateway",
 * // };
 *
 * ```
 *
 * @param DescribeStudioLifecycleConfigCommandInput - {@link DescribeStudioLifecycleConfigCommandInput}
 * @returns {@link DescribeStudioLifecycleConfigCommandOutput}
 * @see {@link DescribeStudioLifecycleConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeStudioLifecycleConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeStudioLifecycleConfigCommand extends $Command<
  DescribeStudioLifecycleConfigCommandInput,
  DescribeStudioLifecycleConfigCommandOutput,
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
  constructor(readonly input: DescribeStudioLifecycleConfigCommandInput) {
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
  ): Handler<DescribeStudioLifecycleConfigCommandInput, DescribeStudioLifecycleConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStudioLifecycleConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeStudioLifecycleConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeStudioLifecycleConfig",
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
  private serialize(input: DescribeStudioLifecycleConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStudioLifecycleConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStudioLifecycleConfigCommandOutput> {
    return de_DescribeStudioLifecycleConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
