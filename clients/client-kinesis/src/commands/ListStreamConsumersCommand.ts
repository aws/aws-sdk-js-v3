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

import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import {
  ListStreamConsumersInput,
  ListStreamConsumersInputFilterSensitiveLog,
  ListStreamConsumersOutput,
  ListStreamConsumersOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListStreamConsumersCommand,
  serializeAws_json1_1ListStreamConsumersCommand,
} from "../protocols/Aws_json1_1";

export interface ListStreamConsumersCommandInput extends ListStreamConsumersInput {}
export interface ListStreamConsumersCommandOutput extends ListStreamConsumersOutput, __MetadataBearer {}

/**
 * <p>Lists the consumers registered to receive data from a stream using enhanced fan-out,
 *             and provides information about each consumer.</p>
 *          <p>This operation has a limit of 5 transactions per second per stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, ListStreamConsumersCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, ListStreamConsumersCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new ListStreamConsumersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStreamConsumersCommandInput} for command's `input` shape.
 * @see {@link ListStreamConsumersCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 */
export class ListStreamConsumersCommand extends $Command<
  ListStreamConsumersCommandInput,
  ListStreamConsumersCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      OperationType: { type: "staticContextParams", value: `control` },
      StreamARN: { type: "contextParams", name: "StreamARN" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: ListStreamConsumersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStreamConsumersCommandInput, ListStreamConsumersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStreamConsumersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "ListStreamConsumersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStreamConsumersInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListStreamConsumersOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStreamConsumersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListStreamConsumersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStreamConsumersCommandOutput> {
    return deserializeAws_json1_1ListStreamConsumersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
