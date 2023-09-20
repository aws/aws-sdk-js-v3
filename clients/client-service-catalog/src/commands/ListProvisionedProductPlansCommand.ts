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

import { ListProvisionedProductPlansInput, ListProvisionedProductPlansOutput } from "../models/models_0";
import { de_ListProvisionedProductPlansCommand, se_ListProvisionedProductPlansCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListProvisionedProductPlansCommand}.
 */
export interface ListProvisionedProductPlansCommandInput extends ListProvisionedProductPlansInput {}
/**
 * @public
 *
 * The output of {@link ListProvisionedProductPlansCommand}.
 */
export interface ListProvisionedProductPlansCommandOutput extends ListProvisionedProductPlansOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the plans for the specified provisioned product or all plans to which the user has access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListProvisionedProductPlansCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListProvisionedProductPlansCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListProvisionedProductPlansInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProvisionProductId: "STRING_VALUE",
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 *   AccessLevelFilter: { // AccessLevelFilter
 *     Key: "Account" || "Role" || "User",
 *     Value: "STRING_VALUE",
 *   },
 * };
 * const command = new ListProvisionedProductPlansCommand(input);
 * const response = await client.send(command);
 * // { // ListProvisionedProductPlansOutput
 * //   ProvisionedProductPlans: [ // ProvisionedProductPlans
 * //     { // ProvisionedProductPlanSummary
 * //       PlanName: "STRING_VALUE",
 * //       PlanId: "STRING_VALUE",
 * //       ProvisionProductId: "STRING_VALUE",
 * //       ProvisionProductName: "STRING_VALUE",
 * //       PlanType: "CLOUDFORMATION",
 * //       ProvisioningArtifactId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProvisionedProductPlansCommandInput - {@link ListProvisionedProductPlansCommandInput}
 * @returns {@link ListProvisionedProductPlansCommandOutput}
 * @see {@link ListProvisionedProductPlansCommandInput} for command's `input` shape.
 * @see {@link ListProvisionedProductPlansCommandOutput} for command's `response` shape.
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
export class ListProvisionedProductPlansCommand extends $Command<
  ListProvisionedProductPlansCommandInput,
  ListProvisionedProductPlansCommandOutput,
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
  constructor(readonly input: ListProvisionedProductPlansCommandInput) {
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
  ): Handler<ListProvisionedProductPlansCommandInput, ListProvisionedProductPlansCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListProvisionedProductPlansCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListProvisionedProductPlansCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWS242ServiceCatalogService",
        operation: "ListProvisionedProductPlans",
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
  private serialize(input: ListProvisionedProductPlansCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListProvisionedProductPlansCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListProvisionedProductPlansCommandOutput> {
    return de_ListProvisionedProductPlansCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
