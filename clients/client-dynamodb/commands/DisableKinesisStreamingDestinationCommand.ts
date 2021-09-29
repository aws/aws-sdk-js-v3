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

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { KinesisStreamingDestinationInput, KinesisStreamingDestinationOutput } from "../models/models_0";
import {
  deserializeAws_json1_0DisableKinesisStreamingDestinationCommand,
  serializeAws_json1_0DisableKinesisStreamingDestinationCommand,
} from "../protocols/Aws_json1_0";

export interface DisableKinesisStreamingDestinationCommandInput extends KinesisStreamingDestinationInput {}
export interface DisableKinesisStreamingDestinationCommandOutput
  extends KinesisStreamingDestinationOutput,
    __MetadataBearer {}

/**
 * <p>Stops replication from the DynamoDB table to the Kinesis data stream. This is done
 *             without deleting either of the resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DisableKinesisStreamingDestinationCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DisableKinesisStreamingDestinationCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DisableKinesisStreamingDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableKinesisStreamingDestinationCommandInput} for command's `input` shape.
 * @see {@link DisableKinesisStreamingDestinationCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisableKinesisStreamingDestinationCommand extends $Command<
  DisableKinesisStreamingDestinationCommandInput,
  DisableKinesisStreamingDestinationCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableKinesisStreamingDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableKinesisStreamingDestinationCommandInput, DisableKinesisStreamingDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DisableKinesisStreamingDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: KinesisStreamingDestinationInput.filterSensitiveLog,
      outputFilterSensitiveLog: KinesisStreamingDestinationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisableKinesisStreamingDestinationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0DisableKinesisStreamingDestinationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableKinesisStreamingDestinationCommandOutput> {
    return deserializeAws_json1_0DisableKinesisStreamingDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
