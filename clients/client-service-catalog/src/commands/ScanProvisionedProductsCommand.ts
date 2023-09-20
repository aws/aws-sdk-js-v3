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

import { ScanProvisionedProductsInput, ScanProvisionedProductsOutput } from "../models/models_0";
import { de_ScanProvisionedProductsCommand, se_ScanProvisionedProductsCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ScanProvisionedProductsCommand}.
 */
export interface ScanProvisionedProductsCommandInput extends ScanProvisionedProductsInput {}
/**
 * @public
 *
 * The output of {@link ScanProvisionedProductsCommand}.
 */
export interface ScanProvisionedProductsCommandOutput extends ScanProvisionedProductsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the provisioned products that are available (not terminated).</p>
 *          <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ScanProvisionedProductsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ScanProvisionedProductsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // ScanProvisionedProductsInput
 *   AcceptLanguage: "STRING_VALUE",
 *   AccessLevelFilter: { // AccessLevelFilter
 *     Key: "Account" || "Role" || "User",
 *     Value: "STRING_VALUE",
 *   },
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new ScanProvisionedProductsCommand(input);
 * const response = await client.send(command);
 * // { // ScanProvisionedProductsOutput
 * //   ProvisionedProducts: [ // ProvisionedProductDetails
 * //     { // ProvisionedProductDetail
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Status: "AVAILABLE" || "UNDER_CHANGE" || "TAINTED" || "ERROR" || "PLAN_IN_PROGRESS",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       IdempotencyToken: "STRING_VALUE",
 * //       LastRecordId: "STRING_VALUE",
 * //       LastProvisioningRecordId: "STRING_VALUE",
 * //       LastSuccessfulProvisioningRecordId: "STRING_VALUE",
 * //       ProductId: "STRING_VALUE",
 * //       ProvisioningArtifactId: "STRING_VALUE",
 * //       LaunchRoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ScanProvisionedProductsCommandInput - {@link ScanProvisionedProductsCommandInput}
 * @returns {@link ScanProvisionedProductsCommandOutput}
 * @see {@link ScanProvisionedProductsCommandInput} for command's `input` shape.
 * @see {@link ScanProvisionedProductsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class ScanProvisionedProductsCommand extends $Command<
  ScanProvisionedProductsCommandInput,
  ScanProvisionedProductsCommandOutput,
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
  constructor(readonly input: ScanProvisionedProductsCommandInput) {
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
  ): Handler<ScanProvisionedProductsCommandInput, ScanProvisionedProductsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ScanProvisionedProductsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ScanProvisionedProductsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWS242ServiceCatalogService",
        operation: "ScanProvisionedProducts",
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
  private serialize(input: ScanProvisionedProductsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ScanProvisionedProductsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ScanProvisionedProductsCommandOutput> {
    return de_ScanProvisionedProductsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
