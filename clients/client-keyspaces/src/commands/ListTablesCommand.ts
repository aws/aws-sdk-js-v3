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

import { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import {
  ListTablesRequest,
  ListTablesRequestFilterSensitiveLog,
  ListTablesResponse,
  ListTablesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListTablesCommand,
  serializeAws_json1_0ListTablesCommand,
} from "../protocols/Aws_json1_0";

export interface ListTablesCommandInput extends ListTablesRequest {}
export interface ListTablesCommandOutput extends ListTablesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of tables for a specified keyspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, ListTablesCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, ListTablesCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * const client = new KeyspacesClient(config);
 * const command = new ListTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTablesCommandInput} for command's `input` shape.
 * @see {@link ListTablesCommandOutput} for command's `response` shape.
 * @see {@link KeyspacesClientResolvedConfig | config} for KeyspacesClient's `config` shape.
 *
 */
export class ListTablesCommand extends $Command<
  ListTablesCommandInput,
  ListTablesCommandOutput,
  KeyspacesClientResolvedConfig
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

  constructor(readonly input: ListTablesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KeyspacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTablesCommandInput, ListTablesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListTablesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KeyspacesClient";
    const commandName = "ListTablesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTablesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListTablesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTablesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListTablesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTablesCommandOutput> {
    return deserializeAws_json1_0ListTablesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
