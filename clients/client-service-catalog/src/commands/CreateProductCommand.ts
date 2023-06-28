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
} from "@smithy/types";

import { CreateProductInput, CreateProductOutput } from "../models/models_0";
import { de_CreateProductCommand, se_CreateProductCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateProductCommand}.
 */
export interface CreateProductCommandInput extends CreateProductInput {}
/**
 * @public
 *
 * The output of {@link CreateProductCommand}.
 */
export interface CreateProductCommandOutput extends CreateProductOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a product.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 *          <p>The user or role that performs this operation must have the
 *             <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is
 *          required when using the <code>ImportFromPhysicalId</code> template source in the
 *          information data section.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreateProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // CreateProductInput
 *   AcceptLanguage: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Owner: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Distributor: "STRING_VALUE",
 *   SupportDescription: "STRING_VALUE",
 *   SupportEmail: "STRING_VALUE",
 *   SupportUrl: "STRING_VALUE",
 *   ProductType: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE" || "TERRAFORM_OPEN_SOURCE", // required
 *   Tags: [ // AddTags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ProvisioningArtifactParameters: { // ProvisioningArtifactProperties
 *     Name: "STRING_VALUE",
 *     Description: "STRING_VALUE",
 *     Info: { // ProvisioningArtifactInfo
 *       "<keys>": "STRING_VALUE",
 *     },
 *     Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE_AMI" || "MARKETPLACE_CAR" || "TERRAFORM_OPEN_SOURCE",
 *     DisableTemplateValidation: true || false,
 *   },
 *   IdempotencyToken: "STRING_VALUE", // required
 *   SourceConnection: { // SourceConnection
 *     Type: "CODESTAR",
 *     ConnectionParameters: { // SourceConnectionParameters
 *       CodeStar: { // CodeStarParameters
 *         ConnectionArn: "STRING_VALUE", // required
 *         Repository: "STRING_VALUE", // required
 *         Branch: "STRING_VALUE", // required
 *         ArtifactPath: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 * };
 * const command = new CreateProductCommand(input);
 * const response = await client.send(command);
 * // { // CreateProductOutput
 * //   ProductViewDetail: { // ProductViewDetail
 * //     ProductViewSummary: { // ProductViewSummary
 * //       Id: "STRING_VALUE",
 * //       ProductId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       ShortDescription: "STRING_VALUE",
 * //       Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE" || "TERRAFORM_OPEN_SOURCE",
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
 * //   ProvisioningArtifactDetail: { // ProvisioningArtifactDetail
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE_AMI" || "MARKETPLACE_CAR" || "TERRAFORM_OPEN_SOURCE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     Active: true || false,
 * //     Guidance: "DEFAULT" || "DEPRECATED",
 * //     SourceRevision: "STRING_VALUE",
 * //   },
 * //   Tags: [ // Tags
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateProductCommandInput - {@link CreateProductCommandInput}
 * @returns {@link CreateProductCommandOutput}
 * @see {@link CreateProductCommandInput} for command's `input` shape.
 * @see {@link CreateProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The current limits of the service would have been exceeded by this operation. Decrease your
 *          resource use or increase your service limits and retry the operation.</p>
 *
 * @throws {@link TagOptionNotMigratedException} (client fault)
 *  <p>An operation requiring TagOptions failed because the TagOptions migration process has
 *          not been performed for this account. Use the Amazon Web Services Management Console to perform the migration
 *          process before retrying the operation.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class CreateProductCommand extends $Command<
  CreateProductCommandInput,
  CreateProductCommandOutput,
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
  constructor(readonly input: CreateProductCommandInput) {
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
  ): Handler<CreateProductCommandInput, CreateProductCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateProductCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "CreateProductCommand";
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
  private serialize(input: CreateProductCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateProductCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateProductCommandOutput> {
    return de_CreateProductCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
