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

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import {
  UpdateDefaultAutoScalingConfigurationRequest,
  UpdateDefaultAutoScalingConfigurationResponse,
} from "../models/models_0";
import {
  de_UpdateDefaultAutoScalingConfigurationCommand,
  se_UpdateDefaultAutoScalingConfigurationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDefaultAutoScalingConfigurationCommand}.
 */
export interface UpdateDefaultAutoScalingConfigurationCommandInput
  extends UpdateDefaultAutoScalingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDefaultAutoScalingConfigurationCommand}.
 */
export interface UpdateDefaultAutoScalingConfigurationCommandOutput
  extends UpdateDefaultAutoScalingConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Update an auto scaling configuration to be the default. The existing default auto scaling configuration will be set to non-default
 *       automatically.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, UpdateDefaultAutoScalingConfigurationCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, UpdateDefaultAutoScalingConfigurationCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const input = { // UpdateDefaultAutoScalingConfigurationRequest
 *   AutoScalingConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateDefaultAutoScalingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDefaultAutoScalingConfigurationResponse
 * //   AutoScalingConfiguration: { // AutoScalingConfiguration
 * //     AutoScalingConfigurationArn: "STRING_VALUE",
 * //     AutoScalingConfigurationName: "STRING_VALUE",
 * //     AutoScalingConfigurationRevision: Number("int"),
 * //     Latest: true || false,
 * //     Status: "ACTIVE" || "INACTIVE",
 * //     MaxConcurrency: Number("int"),
 * //     MinSize: Number("int"),
 * //     MaxSize: Number("int"),
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     DeletedAt: new Date("TIMESTAMP"),
 * //     HasAssociatedService: true || false,
 * //     IsDefault: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDefaultAutoScalingConfigurationCommandInput - {@link UpdateDefaultAutoScalingConfigurationCommandInput}
 * @returns {@link UpdateDefaultAutoScalingConfigurationCommandOutput}
 * @see {@link UpdateDefaultAutoScalingConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateDefaultAutoScalingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource doesn't exist for the specified Amazon Resource Name (ARN) in your Amazon Web Services account.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 */
export class UpdateDefaultAutoScalingConfigurationCommand extends $Command<
  UpdateDefaultAutoScalingConfigurationCommandInput,
  UpdateDefaultAutoScalingConfigurationCommandOutput,
  AppRunnerClientResolvedConfig
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
  constructor(readonly input: UpdateDefaultAutoScalingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDefaultAutoScalingConfigurationCommandInput, UpdateDefaultAutoScalingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDefaultAutoScalingConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "UpdateDefaultAutoScalingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AppRunner",
        operation: "UpdateDefaultAutoScalingConfiguration",
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
    input: UpdateDefaultAutoScalingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateDefaultAutoScalingConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDefaultAutoScalingConfigurationCommandOutput> {
    return de_UpdateDefaultAutoScalingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
