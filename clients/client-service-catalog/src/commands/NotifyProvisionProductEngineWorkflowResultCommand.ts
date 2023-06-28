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
  NotifyProvisionProductEngineWorkflowResultInput,
  NotifyProvisionProductEngineWorkflowResultOutput,
} from "../models/models_0";
import {
  de_NotifyProvisionProductEngineWorkflowResultCommand,
  se_NotifyProvisionProductEngineWorkflowResultCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link NotifyProvisionProductEngineWorkflowResultCommand}.
 */
export interface NotifyProvisionProductEngineWorkflowResultCommandInput
  extends NotifyProvisionProductEngineWorkflowResultInput {}
/**
 * @public
 *
 * The output of {@link NotifyProvisionProductEngineWorkflowResultCommand}.
 */
export interface NotifyProvisionProductEngineWorkflowResultCommandOutput
  extends NotifyProvisionProductEngineWorkflowResultOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *          Notifies the result
 *          of the provisioning engine execution.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, NotifyProvisionProductEngineWorkflowResultCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, NotifyProvisionProductEngineWorkflowResultCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // NotifyProvisionProductEngineWorkflowResultInput
 *   WorkflowToken: "STRING_VALUE", // required
 *   RecordId: "STRING_VALUE", // required
 *   Status: "SUCCEEDED" || "FAILED", // required
 *   FailureReason: "STRING_VALUE",
 *   ResourceIdentifier: { // EngineWorkflowResourceIdentifier
 *     UniqueTag: { // UniqueTagResourceIdentifier
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   },
 *   Outputs: [ // RecordOutputs
 *     { // RecordOutput
 *       OutputKey: "STRING_VALUE",
 *       OutputValue: "STRING_VALUE",
 *       Description: "STRING_VALUE",
 *     },
 *   ],
 *   IdempotencyToken: "STRING_VALUE", // required
 * };
 * const command = new NotifyProvisionProductEngineWorkflowResultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NotifyProvisionProductEngineWorkflowResultCommandInput - {@link NotifyProvisionProductEngineWorkflowResultCommandInput}
 * @returns {@link NotifyProvisionProductEngineWorkflowResultCommandOutput}
 * @see {@link NotifyProvisionProductEngineWorkflowResultCommandInput} for command's `input` shape.
 * @see {@link NotifyProvisionProductEngineWorkflowResultCommandOutput} for command's `response` shape.
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
export class NotifyProvisionProductEngineWorkflowResultCommand extends $Command<
  NotifyProvisionProductEngineWorkflowResultCommandInput,
  NotifyProvisionProductEngineWorkflowResultCommandOutput,
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
  constructor(readonly input: NotifyProvisionProductEngineWorkflowResultCommandInput) {
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
    NotifyProvisionProductEngineWorkflowResultCommandInput,
    NotifyProvisionProductEngineWorkflowResultCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        NotifyProvisionProductEngineWorkflowResultCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "NotifyProvisionProductEngineWorkflowResultCommand";
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
    input: NotifyProvisionProductEngineWorkflowResultCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_NotifyProvisionProductEngineWorkflowResultCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<NotifyProvisionProductEngineWorkflowResultCommandOutput> {
    return de_NotifyProvisionProductEngineWorkflowResultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
