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
  ListAttributeGroupsForApplicationRequest,
  ListAttributeGroupsForApplicationRequestFilterSensitiveLog,
  ListAttributeGroupsForApplicationResponse,
  ListAttributeGroupsForApplicationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListAttributeGroupsForApplicationCommand,
  serializeAws_restJson1ListAttributeGroupsForApplicationCommand,
} from "../protocols/Aws_restJson1";
import {
  ServiceCatalogAppRegistryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogAppRegistryClient";

export interface ListAttributeGroupsForApplicationCommandInput extends ListAttributeGroupsForApplicationRequest {}
export interface ListAttributeGroupsForApplicationCommandOutput
  extends ListAttributeGroupsForApplicationResponse,
    __MetadataBearer {}

/**
 * <p>Lists the details of all attribute groups associated with a specific application. The results display in pages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, ListAttributeGroupsForApplicationCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, ListAttributeGroupsForApplicationCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new ListAttributeGroupsForApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttributeGroupsForApplicationCommandInput} for command's `input` shape.
 * @see {@link ListAttributeGroupsForApplicationCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for ServiceCatalogAppRegistryClient's `config` shape.
 *
 */
export class ListAttributeGroupsForApplicationCommand extends $Command<
  ListAttributeGroupsForApplicationCommandInput,
  ListAttributeGroupsForApplicationCommandOutput,
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

  constructor(readonly input: ListAttributeGroupsForApplicationCommandInput) {
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
  ): Handler<ListAttributeGroupsForApplicationCommandInput, ListAttributeGroupsForApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAttributeGroupsForApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogAppRegistryClient";
    const commandName = "ListAttributeGroupsForApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAttributeGroupsForApplicationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAttributeGroupsForApplicationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAttributeGroupsForApplicationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAttributeGroupsForApplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAttributeGroupsForApplicationCommandOutput> {
    return deserializeAws_restJson1ListAttributeGroupsForApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
