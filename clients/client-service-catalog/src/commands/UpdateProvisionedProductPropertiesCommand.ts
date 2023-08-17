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

import { UpdateProvisionedProductPropertiesInput, UpdateProvisionedProductPropertiesOutput } from "../models/models_0";
import {
  de_UpdateProvisionedProductPropertiesCommand,
  se_UpdateProvisionedProductPropertiesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateProvisionedProductPropertiesCommand}.
 */
export interface UpdateProvisionedProductPropertiesCommandInput extends UpdateProvisionedProductPropertiesInput {}
/**
 * @public
 *
 * The output of {@link UpdateProvisionedProductPropertiesCommand}.
 */
export interface UpdateProvisionedProductPropertiesCommandOutput
  extends UpdateProvisionedProductPropertiesOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Requests updates to the properties of the specified provisioned product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateProvisionedProductPropertiesCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateProvisionedProductPropertiesCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // UpdateProvisionedProductPropertiesInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProvisionedProductId: "STRING_VALUE", // required
 *   ProvisionedProductProperties: { // ProvisionedProductProperties // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   IdempotencyToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateProvisionedProductPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProvisionedProductPropertiesOutput
 * //   ProvisionedProductId: "STRING_VALUE",
 * //   ProvisionedProductProperties: { // ProvisionedProductProperties
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   RecordId: "STRING_VALUE",
 * //   Status: "CREATED" || "IN_PROGRESS" || "IN_PROGRESS_IN_ERROR" || "SUCCEEDED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param UpdateProvisionedProductPropertiesCommandInput - {@link UpdateProvisionedProductPropertiesCommandInput}
 * @returns {@link UpdateProvisionedProductPropertiesCommandOutput}
 * @see {@link UpdateProvisionedProductPropertiesCommandInput} for command's `input` shape.
 * @see {@link UpdateProvisionedProductPropertiesCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>An attempt was made to modify a resource that is in a state that is not valid.
 *          Check your resources to ensure that they are in valid states before retrying the operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class UpdateProvisionedProductPropertiesCommand extends $Command<
  UpdateProvisionedProductPropertiesCommandInput,
  UpdateProvisionedProductPropertiesCommandOutput,
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
  constructor(readonly input: UpdateProvisionedProductPropertiesCommandInput) {
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
  ): Handler<UpdateProvisionedProductPropertiesCommandInput, UpdateProvisionedProductPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateProvisionedProductPropertiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "UpdateProvisionedProductPropertiesCommand";
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
    input: UpdateProvisionedProductPropertiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateProvisionedProductPropertiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateProvisionedProductPropertiesCommandOutput> {
    return de_UpdateProvisionedProductPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
