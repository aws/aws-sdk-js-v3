import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { ListDiscoveredResourcesRequest, ListDiscoveredResourcesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListDiscoveredResourcesCommand,
  serializeAws_json1_1ListDiscoveredResourcesCommand,
} from "../protocols/Aws_json1_1";
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

export interface ListDiscoveredResourcesCommandInput extends ListDiscoveredResourcesRequest {}
export interface ListDiscoveredResourcesCommandOutput extends ListDiscoveredResourcesResponse, __MetadataBearer {}

/**
 * <p>Accepts a resource type and returns a list of resource
 * 			identifiers for the resources of that type. A resource identifier
 * 			includes the resource type, ID, and (if available) the custom
 * 			resource name. The results consist of resources that Config has
 * 			discovered, including those that Config is not currently
 * 			recording. You can narrow the results to include only resources that
 * 			have specific resource IDs or a resource name.</p>
 * 		       <note>
 * 			         <p>You can specify either resource IDs or a resource name, but
 * 				not both, in the same request.</p>
 * 		       </note>
 * 		       <p>The response is paginated. By default, Config lists 100
 * 			resource identifiers on each page. You can customize this number
 * 			with the <code>limit</code> parameter. The response includes a
 * 				<code>nextToken</code> string. To get the next page of results,
 * 			run the request again and specify the string for the
 * 				<code>nextToken</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, ListDiscoveredResourcesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, ListDiscoveredResourcesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new ListDiscoveredResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDiscoveredResourcesCommandInput} for command's `input` shape.
 * @see {@link ListDiscoveredResourcesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListDiscoveredResourcesCommand extends $Command<
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDiscoveredResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDiscoveredResourcesCommandInput, ListDiscoveredResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "ListDiscoveredResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDiscoveredResourcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDiscoveredResourcesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDiscoveredResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDiscoveredResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDiscoveredResourcesCommandOutput> {
    return deserializeAws_json1_1ListDiscoveredResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
