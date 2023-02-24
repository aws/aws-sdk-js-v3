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
  ListAssociatedResourcesRequest,
  ListAssociatedResourcesRequestFilterSensitiveLog,
  ListAssociatedResourcesResponse,
  ListAssociatedResourcesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListAssociatedResourcesCommand,
  serializeAws_restJson1ListAssociatedResourcesCommand,
} from "../protocols/Aws_restJson1";
import {
  ServiceCatalogAppRegistryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogAppRegistryClient";

export interface ListAssociatedResourcesCommandInput extends ListAssociatedResourcesRequest {}
export interface ListAssociatedResourcesCommandOutput extends ListAssociatedResourcesResponse, __MetadataBearer {}

/**
 * <p>
 *        Lists all
 *        of the resources
 *        that are associated
 *        with the specified application.
 *        Results are paginated.
 *      </p>
 *          <note>
 *             <p>
 *          If you share an application,
 *          and a consumer account associates a tag query
 *          to the application,
 *          all of the users
 *          who can access the application
 *          can also view the tag values
 *          in all accounts
 *          that are associated
 *          with it
 *          using this API.
 *        </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, ListAssociatedResourcesCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, ListAssociatedResourcesCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new ListAssociatedResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociatedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedResourcesCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for ServiceCatalogAppRegistryClient's `config` shape.
 *
 */
export class ListAssociatedResourcesCommand extends $Command<
  ListAssociatedResourcesCommandInput,
  ListAssociatedResourcesCommandOutput,
  ServiceCatalogAppRegistryClientResolvedConfig
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

  constructor(readonly input: ListAssociatedResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogAppRegistryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssociatedResourcesCommandInput, ListAssociatedResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssociatedResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogAppRegistryClient";
    const commandName = "ListAssociatedResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssociatedResourcesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAssociatedResourcesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAssociatedResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAssociatedResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssociatedResourcesCommandOutput> {
    return deserializeAws_restJson1ListAssociatedResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
