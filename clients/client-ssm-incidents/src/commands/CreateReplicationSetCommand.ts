import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { CreateReplicationSetInput, CreateReplicationSetOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateReplicationSetCommand,
  serializeAws_restJson1CreateReplicationSetCommand,
} from "../protocols/Aws_restJson1";
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

export interface CreateReplicationSetCommandInput extends CreateReplicationSetInput {}
export interface CreateReplicationSetCommandOutput extends CreateReplicationSetOutput, __MetadataBearer {}

/**
 * <p>A replication set replicates and encrypts your data to the provided Regions with the
 *             provided KMS key. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, CreateReplicationSetCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, CreateReplicationSetCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new CreateReplicationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplicationSetCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationSetCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateReplicationSetCommand extends $Command<
  CreateReplicationSetCommandInput,
  CreateReplicationSetCommandOutput,
  SSMIncidentsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateReplicationSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMIncidentsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReplicationSetCommandInput, CreateReplicationSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMIncidentsClient";
    const commandName = "CreateReplicationSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReplicationSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateReplicationSetOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateReplicationSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateReplicationSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateReplicationSetCommandOutput> {
    return deserializeAws_restJson1CreateReplicationSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
