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

import { UpdateProvisionedProductInput, UpdateProvisionedProductOutput } from "../models/models_0";
import { de_UpdateProvisionedProductCommand, se_UpdateProvisionedProductCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateProvisionedProductCommand}.
 */
export interface UpdateProvisionedProductCommandInput extends UpdateProvisionedProductInput {}
/**
 * @public
 *
 * The output of {@link UpdateProvisionedProductCommand}.
 */
export interface UpdateProvisionedProductCommandOutput extends UpdateProvisionedProductOutput, __MetadataBearer {}

/**
 * @public
 * <p>Requests updates to the configuration of the specified provisioned product.</p>
 *          <p>If there are tags associated with the object, they cannot be updated or added.
 *          Depending on the specific updates requested, this operation can update with no
 *          interruption, with some interruption, or replace the provisioned product entirely.</p>
 *          <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateProvisionedProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // UpdateProvisionedProductInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProvisionedProductName: "STRING_VALUE",
 *   ProvisionedProductId: "STRING_VALUE",
 *   ProductId: "STRING_VALUE",
 *   ProductName: "STRING_VALUE",
 *   ProvisioningArtifactId: "STRING_VALUE",
 *   ProvisioningArtifactName: "STRING_VALUE",
 *   PathId: "STRING_VALUE",
 *   PathName: "STRING_VALUE",
 *   ProvisioningParameters: [ // UpdateProvisioningParameters
 *     { // UpdateProvisioningParameter
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       UsePreviousValue: true || false,
 *     },
 *   ],
 *   ProvisioningPreferences: { // UpdateProvisioningPreferences
 *     StackSetAccounts: [ // StackSetAccounts
 *       "STRING_VALUE",
 *     ],
 *     StackSetRegions: [ // StackSetRegions
 *       "STRING_VALUE",
 *     ],
 *     StackSetFailureToleranceCount: Number("int"),
 *     StackSetFailureTolerancePercentage: Number("int"),
 *     StackSetMaxConcurrencyCount: Number("int"),
 *     StackSetMaxConcurrencyPercentage: Number("int"),
 *     StackSetOperationType: "CREATE" || "UPDATE" || "DELETE",
 *   },
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   UpdateToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateProvisionedProductCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProvisionedProductOutput
 * //   RecordDetail: { // RecordDetail
 * //     RecordId: "STRING_VALUE",
 * //     ProvisionedProductName: "STRING_VALUE",
 * //     Status: "CREATED" || "IN_PROGRESS" || "IN_PROGRESS_IN_ERROR" || "SUCCEEDED" || "FAILED",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     UpdatedTime: new Date("TIMESTAMP"),
 * //     ProvisionedProductType: "STRING_VALUE",
 * //     RecordType: "STRING_VALUE",
 * //     ProvisionedProductId: "STRING_VALUE",
 * //     ProductId: "STRING_VALUE",
 * //     ProvisioningArtifactId: "STRING_VALUE",
 * //     PathId: "STRING_VALUE",
 * //     RecordErrors: [ // RecordErrors
 * //       { // RecordError
 * //         Code: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //       },
 * //     ],
 * //     RecordTags: [ // RecordTags
 * //       { // RecordTag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LaunchRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateProvisionedProductCommandInput - {@link UpdateProvisionedProductCommandInput}
 * @returns {@link UpdateProvisionedProductCommandOutput}
 * @see {@link UpdateProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link UpdateProvisionedProductCommandOutput} for command's `response` shape.
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
export class UpdateProvisionedProductCommand extends $Command<
  UpdateProvisionedProductCommandInput,
  UpdateProvisionedProductCommandOutput,
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
  constructor(readonly input: UpdateProvisionedProductCommandInput) {
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
  ): Handler<UpdateProvisionedProductCommandInput, UpdateProvisionedProductCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateProvisionedProductCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "UpdateProvisionedProductCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWS242ServiceCatalogService",
        operation: "UpdateProvisionedProduct",
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
  private serialize(input: UpdateProvisionedProductCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateProvisionedProductCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateProvisionedProductCommandOutput> {
    return de_UpdateProvisionedProductCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
