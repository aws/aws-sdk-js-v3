// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ListAssociatedResourcesRequest, ListAssociatedResourcesResponse } from "../models/models_0";
import { de_ListAssociatedResourcesCommand, se_ListAssociatedResourcesCommand } from "../protocols/Aws_restJson1";
import {
  ServiceCatalogAppRegistryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogAppRegistryClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAssociatedResourcesCommand}.
 */
export interface ListAssociatedResourcesCommandInput extends ListAssociatedResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociatedResourcesCommand}.
 */
export interface ListAssociatedResourcesCommandOutput extends ListAssociatedResourcesResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // ListAssociatedResourcesRequest
 *   application: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssociatedResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociatedResourcesResponse
 * //   resources: [ // Resources
 * //     { // ResourceInfo
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       resourceType: "CFN_STACK" || "RESOURCE_TAG_VALUE",
 * //       resourceDetails: { // ResourceDetails
 * //         tagValue: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociatedResourcesCommandInput - {@link ListAssociatedResourcesCommandInput}
 * @returns {@link ListAssociatedResourcesCommandOutput}
 * @see {@link ListAssociatedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedResourcesCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for ServiceCatalogAppRegistryClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service is experiencing internal problems.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link ServiceCatalogAppRegistryServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalogAppRegistry service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWS242AppRegistry",
        operation: "ListAssociatedResources",
      },
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
  private serialize(input: ListAssociatedResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAssociatedResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssociatedResourcesCommandOutput> {
    return de_ListAssociatedResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
