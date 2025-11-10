// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateProvisionedProductPropertiesInput, UpdateProvisionedProductPropertiesOutput } from "../models/models_0";
import { UpdateProvisionedProductProperties } from "../schemas/schemas_0";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Requests updates to the properties of the specified provisioned product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateProvisionedProductPropertiesCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateProvisionedProductPropertiesCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
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
 *
 * @public
 */
export class UpdateProvisionedProductPropertiesCommand extends $Command
  .classBuilder<
    UpdateProvisionedProductPropertiesCommandInput,
    UpdateProvisionedProductPropertiesCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "UpdateProvisionedProductProperties", {})
  .n("ServiceCatalogClient", "UpdateProvisionedProductPropertiesCommand")
  .sc(UpdateProvisionedProductProperties)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProvisionedProductPropertiesInput;
      output: UpdateProvisionedProductPropertiesOutput;
    };
    sdk: {
      input: UpdateProvisionedProductPropertiesCommandInput;
      output: UpdateProvisionedProductPropertiesCommandOutput;
    };
  };
}
