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
  StartChangeRequestExecutionRequest,
  StartChangeRequestExecutionRequestFilterSensitiveLog,
  StartChangeRequestExecutionResult,
  StartChangeRequestExecutionResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1StartChangeRequestExecutionCommand,
  serializeAws_json1_1StartChangeRequestExecutionCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface StartChangeRequestExecutionCommandInput extends StartChangeRequestExecutionRequest {}
export interface StartChangeRequestExecutionCommandOutput extends StartChangeRequestExecutionResult, __MetadataBearer {}

/**
 * <p>Creates a change request for Change Manager. The Automation runbooks specified in the
 *    change request run only after all required approvals for the change request have been
 *    received.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartChangeRequestExecutionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartChangeRequestExecutionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new StartChangeRequestExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartChangeRequestExecutionCommandInput} for command's `input` shape.
 * @see {@link StartChangeRequestExecutionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class StartChangeRequestExecutionCommand extends $Command<
  StartChangeRequestExecutionCommandInput,
  StartChangeRequestExecutionCommandOutput,
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

  constructor(readonly input: StartChangeRequestExecutionCommandInput) {
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
  ): Handler<StartChangeRequestExecutionCommandInput, StartChangeRequestExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartChangeRequestExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "StartChangeRequestExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartChangeRequestExecutionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartChangeRequestExecutionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartChangeRequestExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartChangeRequestExecutionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartChangeRequestExecutionCommandOutput> {
    return deserializeAws_json1_1StartChangeRequestExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
