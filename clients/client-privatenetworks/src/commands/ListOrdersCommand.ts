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

import { ListOrdersRequest, ListOrdersResponse, ListOrdersResponseFilterSensitiveLog } from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import {
  deserializeAws_restJson1ListOrdersCommand,
  serializeAws_restJson1ListOrdersCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListOrdersCommand}.
 */
export interface ListOrdersCommandInput extends ListOrdersRequest {}
/**
 * @public
 *
 * The output of {@link ListOrdersCommand}.
 */
export interface ListOrdersCommandOutput extends ListOrdersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists orders.  Add filters to your request to return a more
 *             specific list of results. Use filters to match the Amazon Resource Name (ARN) of the network site or
 *             the status of the order.</p>
 *          <p>If you specify multiple filters, filters are joined with an OR, and the request
 * returns results that match all of the specified filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, ListOrdersCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, ListOrdersCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const command = new ListOrdersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListOrdersCommandInput - {@link ListOrdersCommandInput}
 * @returns {@link ListOrdersCommandOutput}
 * @see {@link ListOrdersCommandInput} for command's `input` shape.
 * @see {@link ListOrdersCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Information about an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation.</p>
 *
 *
 */
export class ListOrdersCommand extends $Command<
  ListOrdersCommandInput,
  ListOrdersCommandOutput,
  PrivateNetworksClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: ListOrdersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PrivateNetworksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOrdersCommandInput, ListOrdersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListOrdersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "ListOrdersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListOrdersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListOrdersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListOrdersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOrdersCommandOutput> {
    return deserializeAws_restJson1ListOrdersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
