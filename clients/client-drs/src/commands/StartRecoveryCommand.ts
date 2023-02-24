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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import {
  StartRecoveryRequest,
  StartRecoveryRequestFilterSensitiveLog,
  StartRecoveryResponse,
  StartRecoveryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartRecoveryCommand,
  serializeAws_restJson1StartRecoveryCommand,
} from "../protocols/Aws_restJson1";

export interface StartRecoveryCommandInput extends StartRecoveryRequest {}
export interface StartRecoveryCommandOutput extends StartRecoveryResponse, __MetadataBearer {}

/**
 * <p>Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, StartRecoveryCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, StartRecoveryCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const command = new StartRecoveryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartRecoveryCommandInput} for command's `input` shape.
 * @see {@link StartRecoveryCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 */
export class StartRecoveryCommand extends $Command<
  StartRecoveryCommandInput,
  StartRecoveryCommandOutput,
  DrsClientResolvedConfig
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

  constructor(readonly input: StartRecoveryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartRecoveryCommandInput, StartRecoveryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartRecoveryCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "StartRecoveryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartRecoveryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartRecoveryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartRecoveryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartRecoveryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartRecoveryCommandOutput> {
    return deserializeAws_restJson1StartRecoveryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
