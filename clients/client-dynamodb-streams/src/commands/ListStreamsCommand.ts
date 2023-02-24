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

import { DynamoDBStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBStreamsClient";
import {
  ListStreamsInput,
  ListStreamsInputFilterSensitiveLog,
  ListStreamsOutput,
  ListStreamsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListStreamsCommand,
  serializeAws_json1_0ListStreamsCommand,
} from "../protocols/Aws_json1_0";

export interface ListStreamsCommandInput extends ListStreamsInput {}
export interface ListStreamsCommandOutput extends ListStreamsOutput, __MetadataBearer {}

/**
 * <p>Returns an array of stream ARNs associated with the current account and endpoint. If the
 *         <code>TableName</code> parameter is present, then <code>ListStreams</code> will return only the
 *       streams ARNs for that table.</p>
 *          <note>
 *             <p>You can call <code>ListStreams</code> at a maximum rate of 5 times per second.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBStreamsClient, ListStreamsCommand } from "@aws-sdk/client-dynamodb-streams"; // ES Modules import
 * // const { DynamoDBStreamsClient, ListStreamsCommand } = require("@aws-sdk/client-dynamodb-streams"); // CommonJS import
 * const client = new DynamoDBStreamsClient(config);
 * const command = new ListStreamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStreamsCommandInput} for command's `input` shape.
 * @see {@link ListStreamsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBStreamsClientResolvedConfig | config} for DynamoDBStreamsClient's `config` shape.
 *
 */
export class ListStreamsCommand extends $Command<
  ListStreamsCommandInput,
  ListStreamsCommandOutput,
  DynamoDBStreamsClientResolvedConfig
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

  constructor(readonly input: ListStreamsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBStreamsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStreamsCommandInput, ListStreamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListStreamsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBStreamsClient";
    const commandName = "ListStreamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStreamsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListStreamsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStreamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListStreamsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStreamsCommandOutput> {
    return deserializeAws_json1_0ListStreamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
