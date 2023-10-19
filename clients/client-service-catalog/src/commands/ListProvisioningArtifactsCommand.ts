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

import { ListProvisioningArtifactsInput, ListProvisioningArtifactsOutput } from "../models/models_0";
import { de_ListProvisioningArtifactsCommand, se_ListProvisioningArtifactsCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListProvisioningArtifactsCommand}.
 */
export interface ListProvisioningArtifactsCommandInput extends ListProvisioningArtifactsInput {}
/**
 * @public
 *
 * The output of {@link ListProvisioningArtifactsCommand}.
 */
export interface ListProvisioningArtifactsCommandOutput extends ListProvisioningArtifactsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists all provisioning artifacts (also known as versions) for the specified product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListProvisioningArtifactsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListProvisioningArtifactsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListProvisioningArtifactsInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProductId: "STRING_VALUE", // required
 * };
 * const command = new ListProvisioningArtifactsCommand(input);
 * const response = await client.send(command);
 * // { // ListProvisioningArtifactsOutput
 * //   ProvisioningArtifactDetails: [ // ProvisioningArtifactDetails
 * //     { // ProvisioningArtifactDetail
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE_AMI" || "MARKETPLACE_CAR" || "TERRAFORM_OPEN_SOURCE" || "TERRAFORM_CLOUD" || "EXTERNAL",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       Active: true || false,
 * //       Guidance: "DEFAULT" || "DEPRECATED",
 * //       SourceRevision: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProvisioningArtifactsCommandInput - {@link ListProvisioningArtifactsCommandInput}
 * @returns {@link ListProvisioningArtifactsCommandOutput}
 * @see {@link ListProvisioningArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListProvisioningArtifactsCommandOutput} for command's `response` shape.
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
export class ListProvisioningArtifactsCommand extends $Command<
  ListProvisioningArtifactsCommandInput,
  ListProvisioningArtifactsCommandOutput,
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
  constructor(readonly input: ListProvisioningArtifactsCommandInput) {
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
  ): Handler<ListProvisioningArtifactsCommandInput, ListProvisioningArtifactsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListProvisioningArtifactsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListProvisioningArtifactsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWS242ServiceCatalogService",
        operation: "ListProvisioningArtifacts",
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
  private serialize(input: ListProvisioningArtifactsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListProvisioningArtifactsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListProvisioningArtifactsCommandOutput> {
    return de_ListProvisioningArtifactsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
