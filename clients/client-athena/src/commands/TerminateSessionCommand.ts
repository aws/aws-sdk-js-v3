// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import {
  TerminateSessionRequest,
  TerminateSessionRequestFilterSensitiveLog,
  TerminateSessionResponse,
  TerminateSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1TerminateSessionCommand,
  serializeAws_json1_1TerminateSessionCommand,
} from "../protocols/Aws_json1_1";

export interface TerminateSessionCommandInput extends TerminateSessionRequest {}
export interface TerminateSessionCommandOutput extends TerminateSessionResponse, __MetadataBearer {}

/**
 * <p>Terminates an active session. A <code>TerminateSession</code> call on a session that
 *             is already inactive (for example, in a <code>FAILED</code>, <code>TERMINATED</code> or
 *                 <code>TERMINATING</code> state) succeeds but has no effect. Calculations running in
 *             the session when <code>TerminateSession</code> is called are forcefully stopped, but may
 *             display as <code>FAILED</code> instead of <code>STOPPED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, TerminateSessionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, TerminateSessionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new TerminateSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateSessionCommandInput} for command's `input` shape.
 * @see {@link TerminateSessionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 */
export class TerminateSessionCommand extends $Command<
  TerminateSessionCommandInput,
  TerminateSessionCommandOutput,
  AthenaClientResolvedConfig
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

  constructor(readonly input: TerminateSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TerminateSessionCommandInput, TerminateSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TerminateSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "TerminateSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TerminateSessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: TerminateSessionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TerminateSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TerminateSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TerminateSessionCommandOutput> {
    return deserializeAws_json1_1TerminateSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
