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

import { CreateStudioLifecycleConfigRequest, CreateStudioLifecycleConfigResponse } from "../models/models_1";
import { de_CreateStudioLifecycleConfigCommand, se_CreateStudioLifecycleConfigCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateStudioLifecycleConfigCommand}.
 */
export interface CreateStudioLifecycleConfigCommandInput extends CreateStudioLifecycleConfigRequest {}
/**
 * @public
 *
 * The output of {@link CreateStudioLifecycleConfigCommand}.
 */
export interface CreateStudioLifecycleConfigCommandOutput
  extends CreateStudioLifecycleConfigResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a new Studio Lifecycle Configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateStudioLifecycleConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateStudioLifecycleConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateStudioLifecycleConfigRequest
 *   StudioLifecycleConfigName: "STRING_VALUE", // required
 *   StudioLifecycleConfigContent: "STRING_VALUE", // required
 *   StudioLifecycleConfigAppType: "JupyterServer" || "KernelGateway", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateStudioLifecycleConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateStudioLifecycleConfigResponse
 * //   StudioLifecycleConfigArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateStudioLifecycleConfigCommandInput - {@link CreateStudioLifecycleConfigCommandInput}
 * @returns {@link CreateStudioLifecycleConfigCommandOutput}
 * @see {@link CreateStudioLifecycleConfigCommandInput} for command's `input` shape.
 * @see {@link CreateStudioLifecycleConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class CreateStudioLifecycleConfigCommand extends $Command<
  CreateStudioLifecycleConfigCommandInput,
  CreateStudioLifecycleConfigCommandOutput,
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
  constructor(readonly input: CreateStudioLifecycleConfigCommandInput) {
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
  ): Handler<CreateStudioLifecycleConfigCommandInput, CreateStudioLifecycleConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateStudioLifecycleConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateStudioLifecycleConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "CreateStudioLifecycleConfig",
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
  private serialize(input: CreateStudioLifecycleConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateStudioLifecycleConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateStudioLifecycleConfigCommandOutput> {
    return de_CreateStudioLifecycleConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
