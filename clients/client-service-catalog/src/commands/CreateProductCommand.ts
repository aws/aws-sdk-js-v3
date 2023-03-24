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

import { CreateProductInput, CreateProductOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateProductCommand,
  serializeAws_json1_1CreateProductCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

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
 * const input = {
 *   AcceptLanguage: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Owner: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Distributor: "STRING_VALUE",
 *   SupportDescription: "STRING_VALUE",
 *   SupportEmail: "STRING_VALUE",
 *   SupportUrl: "STRING_VALUE",
 *   ProductType: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE", // required
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ProvisioningArtifactParameters: {
 *     Name: "STRING_VALUE",
 *     Description: "STRING_VALUE",
 *     Info: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE_AMI" || "MARKETPLACE_CAR",
 *     DisableTemplateValidation: true || false,
 *   },
 *   IdempotencyToken: "STRING_VALUE", // required
 *   SourceConnection: {
 *     Type: "CODESTAR",
 *     ConnectionParameters: {
 *       CodeStar: {
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
    return serializeAws_json1_1CreateProductCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateProductCommandOutput> {
    return deserializeAws_json1_1CreateProductCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
