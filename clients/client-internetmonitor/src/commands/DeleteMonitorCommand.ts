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

import { InternetMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InternetMonitorClient";
import { DeleteMonitorInput, DeleteMonitorOutput } from "../models/models_0";
import { de_DeleteMonitorCommand, se_DeleteMonitorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteMonitorCommand}.
 */
export interface DeleteMonitorCommandInput extends DeleteMonitorInput {}
/**
 * @public
 *
 * The output of {@link DeleteMonitorCommand}.
 */
export interface DeleteMonitorCommandOutput extends DeleteMonitorOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a monitor in Amazon CloudWatch Internet Monitor. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, DeleteMonitorCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, DeleteMonitorCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * const client = new InternetMonitorClient(config);
 * const input = { // DeleteMonitorInput
 *   MonitorName: "STRING_VALUE", // required
 * };
 * const command = new DeleteMonitorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMonitorCommandInput - {@link DeleteMonitorCommandInput}
 * @returns {@link DeleteMonitorCommandOutput}
 * @see {@link DeleteMonitorCommandInput} for command's `input` shape.
 * @see {@link DeleteMonitorCommandOutput} for command's `response` shape.
 * @see {@link InternetMonitorClientResolvedConfig | config} for InternetMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Invalid request.</p>
 *
 * @throws {@link InternetMonitorServiceException}
 * <p>Base exception class for all service exceptions from InternetMonitor service.</p>
 *
 */
export class DeleteMonitorCommand extends $Command<
  DeleteMonitorCommandInput,
  DeleteMonitorCommandOutput,
  InternetMonitorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DeleteMonitorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InternetMonitorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMonitorCommandInput, DeleteMonitorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteMonitorCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InternetMonitorClient";
    const commandName = "DeleteMonitorCommand";
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
  private serialize(input: DeleteMonitorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteMonitorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMonitorCommandOutput> {
    return de_DeleteMonitorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
