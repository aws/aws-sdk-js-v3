// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "NotifyProvisionProductEngineWorkflowResult", {})
  .n("ServiceCatalogClient", "NotifyProvisionProductEngineWorkflowResultCommand")
  .f(void 0, void 0)
  .ser(se_NotifyProvisionProductEngineWorkflowResultCommand)
  .de(de_NotifyProvisionProductEngineWorkflowResultCommand)
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
