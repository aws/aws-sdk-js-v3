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
  BatchAssociateServiceActionWithProvisioningArtifactInput,
  BatchAssociateServiceActionWithProvisioningArtifactOutput,
} from "../models/models_0";
import {
  de_BatchAssociateServiceActionWithProvisioningArtifactCommand,
  se_BatchAssociateServiceActionWithProvisioningArtifactCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchAssociateServiceActionWithProvisioningArtifactCommand}.
 */
export interface BatchAssociateServiceActionWithProvisioningArtifactCommandInput
  extends BatchAssociateServiceActionWithProvisioningArtifactInput {}
/**
 * @public
 *
 * The output of {@link BatchAssociateServiceActionWithProvisioningArtifactCommand}.
 */
export interface BatchAssociateServiceActionWithProvisioningArtifactCommandOutput
  extends BatchAssociateServiceActionWithProvisioningArtifactOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Associates multiple self-service actions with provisioning artifacts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, BatchAssociateServiceActionWithProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, BatchAssociateServiceActionWithProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // BatchAssociateServiceActionWithProvisioningArtifactInput
 *   ServiceActionAssociations: [ // ServiceActionAssociations // required
 *     { // ServiceActionAssociation
 *       ServiceActionId: "STRING_VALUE", // required
 *       ProductId: "STRING_VALUE", // required
 *       ProvisioningArtifactId: "STRING_VALUE", // required
 *     },
 *   ],
 *   AcceptLanguage: "STRING_VALUE",
 * };
 * const command = new BatchAssociateServiceActionWithProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * // { // BatchAssociateServiceActionWithProvisioningArtifactOutput
 * //   FailedServiceActionAssociations: [ // FailedServiceActionAssociations
 * //     { // FailedServiceActionAssociation
 * //       ServiceActionId: "STRING_VALUE",
 * //       ProductId: "STRING_VALUE",
 * //       ProvisioningArtifactId: "STRING_VALUE",
 * //       ErrorCode: "DUPLICATE_RESOURCE" || "INTERNAL_FAILURE" || "LIMIT_EXCEEDED" || "RESOURCE_NOT_FOUND" || "THROTTLING" || "INVALID_PARAMETER",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchAssociateServiceActionWithProvisioningArtifactCommandInput - {@link BatchAssociateServiceActionWithProvisioningArtifactCommandInput}
 * @returns {@link BatchAssociateServiceActionWithProvisioningArtifactCommandOutput}
 * @see {@link BatchAssociateServiceActionWithProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateServiceActionWithProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class BatchAssociateServiceActionWithProvisioningArtifactCommand extends $Command<
  BatchAssociateServiceActionWithProvisioningArtifactCommandInput,
  BatchAssociateServiceActionWithProvisioningArtifactCommandOutput,
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
  constructor(readonly input: BatchAssociateServiceActionWithProvisioningArtifactCommandInput) {
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
    BatchAssociateServiceActionWithProvisioningArtifactCommandInput,
    BatchAssociateServiceActionWithProvisioningArtifactCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        BatchAssociateServiceActionWithProvisioningArtifactCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "BatchAssociateServiceActionWithProvisioningArtifactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWS242ServiceCatalogService",
        operation: "BatchAssociateServiceActionWithProvisioningArtifact",
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
    input: BatchAssociateServiceActionWithProvisioningArtifactCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchAssociateServiceActionWithProvisioningArtifactCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchAssociateServiceActionWithProvisioningArtifactCommandOutput> {
    return de_BatchAssociateServiceActionWithProvisioningArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
