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

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { StopFlowRequest, StopFlowResponse } from "../models/models_0";
import { de_StopFlowCommand, se_StopFlowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopFlowCommand}.
 */
export interface StopFlowCommandInput extends StopFlowRequest {}
/**
 * @public
 *
 * The output of {@link StopFlowCommand}.
 */
export interface StopFlowCommandOutput extends StopFlowResponse, __MetadataBearer {}

/**
 * @public
 * <p> Deactivates the existing flow. For on-demand flows, this operation returns an
 *         <code>unsupportedOperationException</code> error message. For schedule and event-triggered
 *       flows, this operation deactivates the flow. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, StopFlowCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, StopFlowCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const input = { // StopFlowRequest
 *   flowName: "STRING_VALUE", // required
 * };
 * const command = new StopFlowCommand(input);
 * const response = await client.send(command);
 * // { // StopFlowResponse
 * //   flowArn: "STRING_VALUE",
 * //   flowStatus: "Active" || "Deprecated" || "Deleted" || "Draft" || "Errored" || "Suspended",
 * // };
 *
 * ```
 *
 * @param StopFlowCommandInput - {@link StopFlowCommandInput}
 * @returns {@link StopFlowCommandOutput}
 * @see {@link StopFlowCommandInput} for command's `input` shape.
 * @see {@link StopFlowCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict when processing the request (for example, a flow with the given name
 *       already exists within the account. Check for conflicting resource names and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p> The requested operation is not supported for the current flow. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
 *
 */
export class StopFlowCommand extends $Command<
  StopFlowCommandInput,
  StopFlowCommandOutput,
  AppflowClientResolvedConfig
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
  constructor(readonly input: StopFlowCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopFlowCommandInput, StopFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StopFlowCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "StopFlowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SandstoneConfigurationServiceLambda",
        operation: "StopFlow",
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
  private serialize(input: StopFlowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopFlowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopFlowCommandOutput> {
    return de_StopFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
