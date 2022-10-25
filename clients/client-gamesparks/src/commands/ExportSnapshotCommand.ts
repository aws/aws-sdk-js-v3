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

import { GameSparksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameSparksClient";
import {
  ExportSnapshotRequest,
  ExportSnapshotRequestFilterSensitiveLog,
  ExportSnapshotResult,
  ExportSnapshotResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ExportSnapshotCommand,
  serializeAws_restJson1ExportSnapshotCommand,
} from "../protocols/Aws_restJson1";

export interface ExportSnapshotCommandInput extends ExportSnapshotRequest {}
export interface ExportSnapshotCommandOutput extends ExportSnapshotResult, __MetadataBearer {}

/**
 * <p>Exports a game configuration snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, ExportSnapshotCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, ExportSnapshotCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const command = new ExportSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportSnapshotCommandInput} for command's `input` shape.
 * @see {@link ExportSnapshotCommandOutput} for command's `response` shape.
 * @see {@link GameSparksClientResolvedConfig | config} for GameSparksClient's `config` shape.
 *
 */
export class ExportSnapshotCommand extends $Command<
  ExportSnapshotCommandInput,
  ExportSnapshotCommandOutput,
  GameSparksClientResolvedConfig
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

  constructor(readonly input: ExportSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameSparksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportSnapshotCommandInput, ExportSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExportSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "ExportSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportSnapshotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExportSnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ExportSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportSnapshotCommandOutput> {
    return deserializeAws_restJson1ExportSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
