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
  UpdateSnapshotRequest,
  UpdateSnapshotRequestFilterSensitiveLog,
  UpdateSnapshotResult,
  UpdateSnapshotResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateSnapshotCommand,
  serializeAws_restJson1UpdateSnapshotCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateSnapshotCommandInput extends UpdateSnapshotRequest {}
export interface UpdateSnapshotCommandOutput extends UpdateSnapshotResult, __MetadataBearer {}

/**
 * <p>Updates the metadata of a GameSparks snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, UpdateSnapshotCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, UpdateSnapshotCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const command = new UpdateSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSnapshotCommandInput} for command's `input` shape.
 * @see {@link UpdateSnapshotCommandOutput} for command's `response` shape.
 * @see {@link GameSparksClientResolvedConfig | config} for GameSparksClient's `config` shape.
 *
 */
export class UpdateSnapshotCommand extends $Command<
  UpdateSnapshotCommandInput,
  UpdateSnapshotCommandOutput,
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

  constructor(readonly input: UpdateSnapshotCommandInput) {
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
  ): Handler<UpdateSnapshotCommandInput, UpdateSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "UpdateSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSnapshotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateSnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSnapshotCommandOutput> {
    return deserializeAws_restJson1UpdateSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
