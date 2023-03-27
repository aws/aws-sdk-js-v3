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

import { ListNetworkSitesRequest, ListNetworkSitesResponse } from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import {
  deserializeAws_restJson1ListNetworkSitesCommand,
  serializeAws_restJson1ListNetworkSitesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListNetworkSitesCommand}.
 */
export interface ListNetworkSitesCommandInput extends ListNetworkSitesRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkSitesCommand}.
 */
export interface ListNetworkSitesCommandOutput extends ListNetworkSitesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists network sites. Add filters to your request to return a more
 *             specific list of results. Use filters to match the status of the network site.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, ListNetworkSitesCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, ListNetworkSitesCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // ListNetworkSitesRequest
 *   filters: { // NetworkSiteFilters
 *     "<keys>": [ // NetworkSiteFilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   networkArn: "STRING_VALUE", // required
 *   startToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListNetworkSitesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListNetworkSitesCommandInput - {@link ListNetworkSitesCommandInput}
 * @returns {@link ListNetworkSitesCommandOutput}
 * @see {@link ListNetworkSitesCommandInput} for command's `input` shape.
 * @see {@link ListNetworkSitesCommandOutput} for command's `response` shape.
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
export class ListNetworkSitesCommand extends $Command<
  ListNetworkSitesCommandInput,
  ListNetworkSitesCommandOutput,
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
  constructor(readonly input: ListNetworkSitesCommandInput) {
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
  ): Handler<ListNetworkSitesCommandInput, ListNetworkSitesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListNetworkSitesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "ListNetworkSitesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ListNetworkSitesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListNetworkSitesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNetworkSitesCommandOutput> {
    return deserializeAws_restJson1ListNetworkSitesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
