import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { StopReplicationToReplicaRequest, StopReplicationToReplicaResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StopReplicationToReplicaCommand,
  serializeAws_json1_1StopReplicationToReplicaCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface StopReplicationToReplicaCommandInput extends StopReplicationToReplicaRequest {}
export interface StopReplicationToReplicaCommandOutput extends StopReplicationToReplicaResponse, __MetadataBearer {}

/**
 * <p>Removes the secret from replication and promotes the secret to a regional secret in the replica Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, StopReplicationToReplicaCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, StopReplicationToReplicaCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new StopReplicationToReplicaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopReplicationToReplicaCommandInput} for command's `input` shape.
 * @see {@link StopReplicationToReplicaCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StopReplicationToReplicaCommand extends $Command<
  StopReplicationToReplicaCommandInput,
  StopReplicationToReplicaCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopReplicationToReplicaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecretsManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopReplicationToReplicaCommandInput, StopReplicationToReplicaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "StopReplicationToReplicaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopReplicationToReplicaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopReplicationToReplicaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopReplicationToReplicaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopReplicationToReplicaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopReplicationToReplicaCommandOutput> {
    return deserializeAws_json1_1StopReplicationToReplicaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
