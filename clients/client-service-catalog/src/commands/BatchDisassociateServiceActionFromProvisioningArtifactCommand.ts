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

import {
  BatchDisassociateServiceActionFromProvisioningArtifactInput,
  BatchDisassociateServiceActionFromProvisioningArtifactOutput,
} from "../models/models_0";
import {
  de_BatchDisassociateServiceActionFromProvisioningArtifactCommand,
  se_BatchDisassociateServiceActionFromProvisioningArtifactCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDisassociateServiceActionFromProvisioningArtifactCommand}.
 */
export interface BatchDisassociateServiceActionFromProvisioningArtifactCommandInput
  extends BatchDisassociateServiceActionFromProvisioningArtifactInput {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateServiceActionFromProvisioningArtifactCommand}.
 */
export interface BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput
  extends BatchDisassociateServiceActionFromProvisioningArtifactOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Disassociates a batch of self-service actions from the specified provisioning artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, BatchDisassociateServiceActionFromProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, BatchDisassociateServiceActionFromProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // BatchDisassociateServiceActionFromProvisioningArtifactInput
 *   ServiceActionAssociations: [ // ServiceActionAssociations // required
 *     { // ServiceActionAssociation
 *       ServiceActionId: "STRING_VALUE", // required
 *       ProductId: "STRING_VALUE", // required
 *       ProvisioningArtifactId: "STRING_VALUE", // required
 *     },
 *   ],
 *   AcceptLanguage: "STRING_VALUE",
 * };
 * const command = new BatchDisassociateServiceActionFromProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisassociateServiceActionFromProvisioningArtifactOutput
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
 * @param BatchDisassociateServiceActionFromProvisioningArtifactCommandInput - {@link BatchDisassociateServiceActionFromProvisioningArtifactCommandInput}
 * @returns {@link BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput}
 * @see {@link BatchDisassociateServiceActionFromProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class BatchDisassociateServiceActionFromProvisioningArtifactCommand extends $Command<
  BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
  BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput,
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
  constructor(readonly input: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput) {
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
    BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
    BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        BatchDisassociateServiceActionFromProvisioningArtifactCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "BatchDisassociateServiceActionFromProvisioningArtifactCommand";
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
  private serialize(
    input: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchDisassociateServiceActionFromProvisioningArtifactCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput> {
    return de_BatchDisassociateServiceActionFromProvisioningArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
