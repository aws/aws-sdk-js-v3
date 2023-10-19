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

import { DescribeProductAsAdminInput, DescribeProductAsAdminOutput } from "../models/models_0";
import { de_DescribeProductAsAdminCommand, se_DescribeProductAsAdminCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeProductAsAdminCommand}.
 */
export interface DescribeProductAsAdminCommandInput extends DescribeProductAsAdminInput {}
/**
 * @public
 *
 * The output of {@link DescribeProductAsAdminCommand}.
 */
export interface DescribeProductAsAdminCommandOutput extends DescribeProductAsAdminOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the specified product. This operation is run with administrator access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProductAsAdminCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProductAsAdminCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribeProductAsAdminInput
 *   AcceptLanguage: "STRING_VALUE",
 *   Id: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   SourcePortfolioId: "STRING_VALUE",
 * };
 * const command = new DescribeProductAsAdminCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProductAsAdminOutput
 * //   ProductViewDetail: { // ProductViewDetail
 * //     ProductViewSummary: { // ProductViewSummary
 * //       Id: "STRING_VALUE",
 * //       ProductId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       ShortDescription: "STRING_VALUE",
 * //       Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE" || "TERRAFORM_OPEN_SOURCE" || "TERRAFORM_CLOUD" || "EXTERNAL",
 * //       Distributor: "STRING_VALUE",
 * //       HasDefaultPath: true || false,
 * //       SupportEmail: "STRING_VALUE",
 * //       SupportDescription: "STRING_VALUE",
 * //       SupportUrl: "STRING_VALUE",
 * //     },
 * //     Status: "AVAILABLE" || "CREATING" || "FAILED",
 * //     ProductARN: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     SourceConnection: { // SourceConnectionDetail
 * //       Type: "CODESTAR",
 * //       ConnectionParameters: { // SourceConnectionParameters
 * //         CodeStar: { // CodeStarParameters
 * //           ConnectionArn: "STRING_VALUE", // required
 * //           Repository: "STRING_VALUE", // required
 * //           Branch: "STRING_VALUE", // required
 * //           ArtifactPath: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       LastSync: { // LastSync
 * //         LastSyncTime: new Date("TIMESTAMP"),
 * //         LastSyncStatus: "SUCCEEDED" || "FAILED",
 * //         LastSyncStatusMessage: "STRING_VALUE",
 * //         LastSuccessfulSyncTime: new Date("TIMESTAMP"),
 * //         LastSuccessfulSyncProvisioningArtifactId: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   ProvisioningArtifactSummaries: [ // ProvisioningArtifactSummaries
 * //     { // ProvisioningArtifactSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       ProvisioningArtifactMetadata: { // ProvisioningArtifactInfo
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Tags: [ // Tags
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   TagOptions: [ // TagOptionDetails
 * //     { // TagOptionDetail
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //       Active: true || false,
 * //       Id: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Budgets: [ // Budgets
 * //     { // BudgetDetail
 * //       BudgetName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeProductAsAdminCommandInput - {@link DescribeProductAsAdminCommandInput}
 * @returns {@link DescribeProductAsAdminCommandOutput}
 * @see {@link DescribeProductAsAdminCommandInput} for command's `input` shape.
 * @see {@link DescribeProductAsAdminCommandOutput} for command's `response` shape.
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
export class DescribeProductAsAdminCommand extends $Command<
  DescribeProductAsAdminCommandInput,
  DescribeProductAsAdminCommandOutput,
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
  constructor(readonly input: DescribeProductAsAdminCommandInput) {
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
  ): Handler<DescribeProductAsAdminCommandInput, DescribeProductAsAdminCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeProductAsAdminCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribeProductAsAdminCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWS242ServiceCatalogService",
        operation: "DescribeProductAsAdmin",
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
  private serialize(input: DescribeProductAsAdminCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeProductAsAdminCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeProductAsAdminCommandOutput> {
    return de_DescribeProductAsAdminCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
