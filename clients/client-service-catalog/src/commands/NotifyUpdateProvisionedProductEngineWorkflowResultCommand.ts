// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  NotifyUpdateProvisionedProductEngineWorkflowResultInput,
  NotifyUpdateProvisionedProductEngineWorkflowResultOutput,
} from "../models/models_0";
import { NotifyUpdateProvisionedProductEngineWorkflowResult } from "../schemas/schemas_0";
import type {
  ServiceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link NotifyUpdateProvisionedProductEngineWorkflowResultCommand}.
 */
export interface NotifyUpdateProvisionedProductEngineWorkflowResultCommandInput
  extends NotifyUpdateProvisionedProductEngineWorkflowResultInput {}
/**
 * @public
 *
 * The output of {@link NotifyUpdateProvisionedProductEngineWorkflowResultCommand}.
 */
export interface NotifyUpdateProvisionedProductEngineWorkflowResultCommandOutput
  extends NotifyUpdateProvisionedProductEngineWorkflowResultOutput,
    __MetadataBearer {}

/**
 * <p>
 *          Notifies the result
 *          of the update engine execution.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, NotifyUpdateProvisionedProductEngineWorkflowResultCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, NotifyUpdateProvisionedProductEngineWorkflowResultCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // NotifyUpdateProvisionedProductEngineWorkflowResultInput
 *   WorkflowToken: "STRING_VALUE", // required
 *   RecordId: "STRING_VALUE", // required
 *   Status: "SUCCEEDED" || "FAILED", // required
 *   FailureReason: "STRING_VALUE",
 *   Outputs: [ // RecordOutputs
 *     { // RecordOutput
 *       OutputKey: "STRING_VALUE",
 *       OutputValue: "STRING_VALUE",
 *       Description: "STRING_VALUE",
 *     },
 *   ],
 *   IdempotencyToken: "STRING_VALUE", // required
 * };
 * const command = new NotifyUpdateProvisionedProductEngineWorkflowResultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NotifyUpdateProvisionedProductEngineWorkflowResultCommandInput - {@link NotifyUpdateProvisionedProductEngineWorkflowResultCommandInput}
 * @returns {@link NotifyUpdateProvisionedProductEngineWorkflowResultCommandOutput}
 * @see {@link NotifyUpdateProvisionedProductEngineWorkflowResultCommandInput} for command's `input` shape.
 * @see {@link NotifyUpdateProvisionedProductEngineWorkflowResultCommandOutput} for command's `response` shape.
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
export class NotifyUpdateProvisionedProductEngineWorkflowResultCommand extends $Command
  .classBuilder<
    NotifyUpdateProvisionedProductEngineWorkflowResultCommandInput,
    NotifyUpdateProvisionedProductEngineWorkflowResultCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "NotifyUpdateProvisionedProductEngineWorkflowResult", {})
  .n("ServiceCatalogClient", "NotifyUpdateProvisionedProductEngineWorkflowResultCommand")
  .sc(NotifyUpdateProvisionedProductEngineWorkflowResult)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: NotifyUpdateProvisionedProductEngineWorkflowResultInput;
      output: {};
    };
    sdk: {
      input: NotifyUpdateProvisionedProductEngineWorkflowResultCommandInput;
      output: NotifyUpdateProvisionedProductEngineWorkflowResultCommandOutput;
    };
  };
}
