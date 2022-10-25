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
  ListCatalogItemsInput,
  ListCatalogItemsInputFilterSensitiveLog,
  ListCatalogItemsOutput,
  ListCatalogItemsOutputFilterSensitiveLog,
} from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import {
  deserializeAws_restJson1ListCatalogItemsCommand,
  serializeAws_restJson1ListCatalogItemsCommand,
} from "../protocols/Aws_restJson1";

export interface ListCatalogItemsCommandInput extends ListCatalogItemsInput {}
export interface ListCatalogItemsCommandOutput extends ListCatalogItemsOutput, __MetadataBearer {}

/**
 * <p>Lists the items in the catalog.</p>
 *          <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match
 *  all of the specified filters. For a filter where you can specify multiple values, the results include
 *  items that match any of the values that you specify for the filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, ListCatalogItemsCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, ListCatalogItemsCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new ListCatalogItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCatalogItemsCommandInput} for command's `input` shape.
 * @see {@link ListCatalogItemsCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 */
export class ListCatalogItemsCommand extends $Command<
  ListCatalogItemsCommandInput,
  ListCatalogItemsCommandOutput,
  OutpostsClientResolvedConfig
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

  constructor(readonly input: ListCatalogItemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCatalogItemsCommandInput, ListCatalogItemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCatalogItemsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "ListCatalogItemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCatalogItemsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListCatalogItemsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCatalogItemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListCatalogItemsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCatalogItemsCommandOutput> {
    return deserializeAws_restJson1ListCatalogItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
