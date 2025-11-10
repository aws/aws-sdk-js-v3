// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  NotifyTerminateProvisionedProductEngineWorkflowResultInput,
  NotifyTerminateProvisionedProductEngineWorkflowResultOutput,
} from "../models/models_0";
import { NotifyTerminateProvisionedProductEngineWorkflowResult } from "../schemas/schemas_0";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link NotifyTerminateProvisionedProductEngineWorkflowResultCommand}.
 */
export interface NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput
  extends NotifyTerminateProvisionedProductEngineWorkflowResultInput {}
/**
 * @public
 *
 * The output of {@link NotifyTerminateProvisionedProductEngineWorkflowResultCommand}.
 */
export interface NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput
  extends NotifyTerminateProvisionedProductEngineWorkflowResultOutput,
    __MetadataBearer {}

/**
 * <p>
 *          Notifies the result
 *          of the terminate engine execution.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, NotifyTerminateProvisionedProductEngineWorkflowResultCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, NotifyTerminateProvisionedProductEngineWorkflowResultCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // NotifyTerminateProvisionedProductEngineWorkflowResultInput
 *   WorkflowToken: "STRING_VALUE", // required
 *   RecordId: "STRING_VALUE", // required
 *   Status: "SUCCEEDED" || "FAILED", // required
 *   FailureReason: "STRING_VALUE",
 *   IdempotencyToken: "STRING_VALUE", // required
 * };
 * const command = new NotifyTerminateProvisionedProductEngineWorkflowResultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput - {@link NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput}
 * @returns {@link NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput}
 * @see {@link NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput} for command's `input` shape.
 * @see {@link NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class NotifyTerminateProvisionedProductEngineWorkflowResultCommand extends $Command
  .classBuilder<
    NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput,
    NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "NotifyTerminateProvisionedProductEngineWorkflowResult", {})
  .n("ServiceCatalogClient", "NotifyTerminateProvisionedProductEngineWorkflowResultCommand")
  .sc(NotifyTerminateProvisionedProductEngineWorkflowResult)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: NotifyTerminateProvisionedProductEngineWorkflowResultInput;
      output: {};
    };
    sdk: {
      input: NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput;
      output: NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput;
    };
  };
}
