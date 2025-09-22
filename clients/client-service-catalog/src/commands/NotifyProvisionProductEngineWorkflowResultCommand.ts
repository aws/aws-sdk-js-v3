// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  NotifyProvisionProductEngineWorkflowResultInput,
  NotifyProvisionProductEngineWorkflowResultOutput,
} from "../models/models_0";
import { NotifyProvisionProductEngineWorkflowResult } from "../schemas/schemas_15_Describe";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>
 *          Notifies the result
 *          of the provisioning engine execution.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, NotifyProvisionProductEngineWorkflowResultCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, NotifyProvisionProductEngineWorkflowResultCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
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
 *
 * @public
 */
export class NotifyProvisionProductEngineWorkflowResultCommand extends $Command
  .classBuilder<
    NotifyProvisionProductEngineWorkflowResultCommandInput,
    NotifyProvisionProductEngineWorkflowResultCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "NotifyProvisionProductEngineWorkflowResult", {})
  .n("ServiceCatalogClient", "NotifyProvisionProductEngineWorkflowResultCommand")
  .sc(NotifyProvisionProductEngineWorkflowResult)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: NotifyProvisionProductEngineWorkflowResultInput;
      output: {};
    };
    sdk: {
      input: NotifyProvisionProductEngineWorkflowResultCommandInput;
      output: NotifyProvisionProductEngineWorkflowResultCommandOutput;
    };
  };
}
