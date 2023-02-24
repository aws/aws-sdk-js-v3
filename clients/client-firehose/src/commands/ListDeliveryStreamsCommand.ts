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

import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import {
  ListDeliveryStreamsInput,
  ListDeliveryStreamsInputFilterSensitiveLog,
  ListDeliveryStreamsOutput,
  ListDeliveryStreamsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListDeliveryStreamsCommand,
  serializeAws_json1_1ListDeliveryStreamsCommand,
} from "../protocols/Aws_json1_1";

export interface ListDeliveryStreamsCommandInput extends ListDeliveryStreamsInput {}
export interface ListDeliveryStreamsCommandOutput extends ListDeliveryStreamsOutput, __MetadataBearer {}

/**
 * <p>Lists your delivery streams in alphabetical order of their names.</p>
 *          <p>The number of delivery streams might be too large to return using a single call to
 *             <code>ListDeliveryStreams</code>. You can limit the number of delivery streams returned,
 *          using the <code>Limit</code> parameter. To determine whether there are more delivery
 *          streams to list, check the value of <code>HasMoreDeliveryStreams</code> in the output. If
 *          there are more delivery streams to list, you can request them by calling this operation
 *          again and setting the <code>ExclusiveStartDeliveryStreamName</code> parameter to the name
 *          of the last delivery stream returned in the last call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, ListDeliveryStreamsCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, ListDeliveryStreamsCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const command = new ListDeliveryStreamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeliveryStreamsCommandInput} for command's `input` shape.
 * @see {@link ListDeliveryStreamsCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 */
export class ListDeliveryStreamsCommand extends $Command<
  ListDeliveryStreamsCommandInput,
  ListDeliveryStreamsCommandOutput,
  FirehoseClientResolvedConfig
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

  constructor(readonly input: ListDeliveryStreamsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeliveryStreamsCommandInput, ListDeliveryStreamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDeliveryStreamsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FirehoseClient";
    const commandName = "ListDeliveryStreamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDeliveryStreamsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListDeliveryStreamsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDeliveryStreamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDeliveryStreamsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeliveryStreamsCommandOutput> {
    return deserializeAws_json1_1ListDeliveryStreamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
