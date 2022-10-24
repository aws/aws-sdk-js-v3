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

import {
  ResumeSessionRequest,
  ResumeSessionRequestFilterSensitiveLog,
  ResumeSessionResponse,
  ResumeSessionResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1ResumeSessionCommand,
  serializeAws_json1_1ResumeSessionCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface ResumeSessionCommandInput extends ResumeSessionRequest {}
export interface ResumeSessionCommandOutput extends ResumeSessionResponse, __MetadataBearer {}

/**
 * <p>Reconnects a session to a managed node after it has been disconnected. Connections can be
 *    resumed for disconnected sessions, but not terminated sessions.</p>
 *          <note>
 *             <p>This command is primarily for use by client machines to automatically reconnect during
 *     intermittent network issues. It isn't intended for any other use.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ResumeSessionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ResumeSessionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ResumeSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResumeSessionCommandInput} for command's `input` shape.
 * @see {@link ResumeSessionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class ResumeSessionCommand extends $Command<
  ResumeSessionCommandInput,
  ResumeSessionCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: ResumeSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResumeSessionCommandInput, ResumeSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ResumeSessionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ResumeSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResumeSessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ResumeSessionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResumeSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResumeSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResumeSessionCommandOutput> {
    return deserializeAws_json1_1ResumeSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
