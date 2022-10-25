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

import {
  ListLedgersRequest,
  ListLedgersRequestFilterSensitiveLog,
  ListLedgersResponse,
  ListLedgersResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListLedgersCommand,
  serializeAws_restJson1ListLedgersCommand,
} from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

export interface ListLedgersCommandInput extends ListLedgersRequest {}
export interface ListLedgersCommandOutput extends ListLedgersResponse, __MetadataBearer {}

/**
 * <p>Returns an array of ledger summaries that are associated with the current Amazon Web Services account
 *          and Region.</p>
 *          <p>This action returns a maximum of 100 items and is paginated so that you can
 *          retrieve all the items by calling <code>ListLedgers</code> multiple times.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, ListLedgersCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, ListLedgersCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new ListLedgersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLedgersCommandInput} for command's `input` shape.
 * @see {@link ListLedgersCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 */
export class ListLedgersCommand extends $Command<
  ListLedgersCommandInput,
  ListLedgersCommandOutput,
  QLDBClientResolvedConfig
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

  constructor(readonly input: ListLedgersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QLDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLedgersCommandInput, ListLedgersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListLedgersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "ListLedgersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLedgersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListLedgersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLedgersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListLedgersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLedgersCommandOutput> {
    return deserializeAws_restJson1ListLedgersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
