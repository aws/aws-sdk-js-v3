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

import {
  ListProvisioningArtifactsForServiceActionInput,
  ListProvisioningArtifactsForServiceActionOutput,
} from "../models/models_0";
import {
  de_ListProvisioningArtifactsForServiceActionCommand,
  se_ListProvisioningArtifactsForServiceActionCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListProvisioningArtifactsForServiceActionCommand}.
 */
export interface ListProvisioningArtifactsForServiceActionCommandInput
  extends ListProvisioningArtifactsForServiceActionInput {}
/**
 * @public
 *
 * The output of {@link ListProvisioningArtifactsForServiceActionCommand}.
 */
export interface ListProvisioningArtifactsForServiceActionCommandOutput
  extends ListProvisioningArtifactsForServiceActionOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists all provisioning artifacts (also known as versions) for the specified self-service action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListProvisioningArtifactsForServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListProvisioningArtifactsForServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListProvisioningArtifactsForServiceActionInput
 *   ServiceActionId: "STRING_VALUE", // required
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 *   AcceptLanguage: "STRING_VALUE",
 * };
 * const command = new ListProvisioningArtifactsForServiceActionCommand(input);
 * const response = await client.send(command);
 * // { // ListProvisioningArtifactsForServiceActionOutput
 * //   ProvisioningArtifactViews: [ // ProvisioningArtifactViews
 * //     { // ProvisioningArtifactView
 * //       ProductViewSummary: { // ProductViewSummary
 * //         Id: "STRING_VALUE",
 * //         ProductId: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         Owner: "STRING_VALUE",
 * //         ShortDescription: "STRING_VALUE",
 * //         Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE" || "TERRAFORM_OPEN_SOURCE" || "TERRAFORM_CLOUD" || "EXTERNAL",
 * //         Distributor: "STRING_VALUE",
 * //         HasDefaultPath: true || false,
 * //         SupportEmail: "STRING_VALUE",
 * //         SupportDescription: "STRING_VALUE",
 * //         SupportUrl: "STRING_VALUE",
 * //       },
 * //       ProvisioningArtifact: { // ProvisioningArtifact
 * //         Id: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         CreatedTime: new Date("TIMESTAMP"),
 * //         Guidance: "DEFAULT" || "DEPRECATED",
 * //       },
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProvisioningArtifactsForServiceActionCommandInput - {@link ListProvisioningArtifactsForServiceActionCommandInput}
 * @returns {@link ListProvisioningArtifactsForServiceActionCommandOutput}
 * @see {@link ListProvisioningArtifactsForServiceActionCommandInput} for command's `input` shape.
 * @see {@link ListProvisioningArtifactsForServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class ListProvisioningArtifactsForServiceActionCommand extends $Command<
  ListProvisioningArtifactsForServiceActionCommandInput,
  ListProvisioningArtifactsForServiceActionCommandOutput,
  ServiceCatalogClientResolvedConfig
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
  constructor(readonly input: ListProvisioningArtifactsForServiceActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListProvisioningArtifactsForServiceActionCommandInput,
    ListProvisioningArtifactsForServiceActionCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListProvisioningArtifactsForServiceActionCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListProvisioningArtifactsForServiceActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWS242ServiceCatalogService",
        operation: "ListProvisioningArtifactsForServiceAction",
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
  private serialize(
    input: ListProvisioningArtifactsForServiceActionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListProvisioningArtifactsForServiceActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListProvisioningArtifactsForServiceActionCommandOutput> {
    return de_ListProvisioningArtifactsForServiceActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
