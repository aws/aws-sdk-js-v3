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

import { CopyProductInput, CopyProductOutput } from "../models/models_0";
import { de_CopyProductCommand, se_CopyProductCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CopyProductCommand}.
 */
export interface CopyProductCommandInput extends CopyProductInput {}
/**
 * @public
 *
 * The output of {@link CopyProductCommand}.
 */
export interface CopyProductCommandOutput extends CopyProductOutput, __MetadataBearer {}

/**
 * @public
 * <p>Copies the specified source product to the specified target product or a new
 *          product.</p>
 *          <p>You can copy a product to the same account or another account. You can copy a product
 *          to the same Region or another Region. If you copy a product to another account, you must
 *          first share the product in a portfolio using <a>CreatePortfolioShare</a>.</p>
 *          <p>This operation is performed asynchronously. To track the progress of the
 *          operation, use <a>DescribeCopyProductStatus</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CopyProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CopyProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // CopyProductInput
 *   AcceptLanguage: "STRING_VALUE",
 *   SourceProductArn: "STRING_VALUE", // required
 *   TargetProductId: "STRING_VALUE",
 *   TargetProductName: "STRING_VALUE",
 *   SourceProvisioningArtifactIdentifiers: [ // SourceProvisioningArtifactProperties
 *     { // SourceProvisioningArtifactPropertiesMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   ],
 *   CopyOptions: [ // CopyOptions
 *     "CopyTags",
 *   ],
 *   IdempotencyToken: "STRING_VALUE", // required
 * };
 * const command = new CopyProductCommand(input);
 * const response = await client.send(command);
 * // { // CopyProductOutput
 * //   CopyProductToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CopyProductCommandInput - {@link CopyProductCommandInput}
 * @returns {@link CopyProductCommandOutput}
 * @see {@link CopyProductCommandInput} for command's `input` shape.
 * @see {@link CopyProductCommandOutput} for command's `response` shape.
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
export class CopyProductCommand extends $Command<
  CopyProductCommandInput,
  CopyProductCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
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
  constructor(readonly input: CopyProductCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyProductCommandInput, CopyProductCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CopyProductCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "CopyProductCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWS242ServiceCatalogService",
        operation: "CopyProduct",
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
  private serialize(input: CopyProductCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CopyProductCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyProductCommandOutput> {
    return de_CopyProductCommand(output, context);
  }
}
