// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateThreatInput, UpdateThreatOutput } from "../models/models_0";
import { UpdateThreat$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateThreatCommand}.
 */
export interface UpdateThreatCommandInput extends UpdateThreatInput {}
/**
 * @public
 *
 * The output of {@link UpdateThreatCommand}.
 */
export interface UpdateThreatCommandOutput extends UpdateThreatOutput, __MetadataBearer {}

/**
 * <p>Updates a threat.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, UpdateThreatCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, UpdateThreatCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // UpdateThreatInput
 *   threatId: "STRING_VALUE", // required
 *   agentSpaceId: "STRING_VALUE", // required
 *   title: "STRING_VALUE",
 *   status: "OPEN" || "RESOLVED" || "DISMISSED",
 *   comments: "STRING_VALUE",
 *   statement: "STRING_VALUE",
 *   severity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFO",
 *   threatSource: "STRING_VALUE",
 *   prerequisites: "STRING_VALUE",
 *   threatAction: "STRING_VALUE",
 *   threatImpact: "STRING_VALUE",
 *   impactedGoal: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   impactedAssets: [
 *     "STRING_VALUE",
 *   ],
 *   anchor: { // ThreatAnchorShape
 *     kind: "STRING_VALUE",
 *     id: "STRING_VALUE",
 *     packageId: "STRING_VALUE",
 *   },
 *   evidence: [ // ThreatEvidenceList
 *     { // ThreatEvidenceShape
 *       packageId: "STRING_VALUE",
 *       path: "STRING_VALUE",
 *     },
 *   ],
 *   recommendation: "STRING_VALUE",
 * };
 * const command = new UpdateThreatCommand(input);
 * const response = await client.send(command);
 * // { // UpdateThreatOutput
 * //   threatId: "STRING_VALUE", // required
 * //   threatJobId: "STRING_VALUE", // required
 * //   title: "STRING_VALUE",
 * //   statement: "STRING_VALUE",
 * //   severity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFO",
 * //   status: "OPEN" || "RESOLVED" || "DISMISSED",
 * //   comments: "STRING_VALUE",
 * //   stride: [ // StrideCategoryList
 * //     "SPOOFING" || "TAMPERING" || "REPUDIATION" || "INFORMATION_DISCLOSURE" || "DENIAL_OF_SERVICE" || "ELEVATION_OF_PRIVILEGE",
 * //   ],
 * //   threatSource: "STRING_VALUE",
 * //   prerequisites: "STRING_VALUE",
 * //   threatAction: "STRING_VALUE",
 * //   threatImpact: "STRING_VALUE",
 * //   impactedGoal: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   impactedAssets: [
 * //     "STRING_VALUE",
 * //   ],
 * //   anchor: { // ThreatAnchorShape
 * //     kind: "STRING_VALUE",
 * //     id: "STRING_VALUE",
 * //     packageId: "STRING_VALUE",
 * //   },
 * //   evidence: [ // ThreatEvidenceList
 * //     { // ThreatEvidenceShape
 * //       packageId: "STRING_VALUE",
 * //       path: "STRING_VALUE",
 * //     },
 * //   ],
 * //   recommendation: "STRING_VALUE",
 * //   createdBy: "CUSTOMER" || "AGENT",
 * //   updatedBy: "CUSTOMER" || "AGENT",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateThreatCommandInput - {@link UpdateThreatCommandInput}
 * @returns {@link UpdateThreatCommandOutput}
 * @see {@link UpdateThreatCommandInput} for command's `input` shape.
 * @see {@link UpdateThreatCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class UpdateThreatCommand extends $Command
  .classBuilder<
    UpdateThreatCommandInput,
    UpdateThreatCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "UpdateThreat", {})
  .n("SecurityAgentClient", "UpdateThreatCommand")
  .sc(UpdateThreat$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateThreatInput;
      output: UpdateThreatOutput;
    };
    sdk: {
      input: UpdateThreatCommandInput;
      output: UpdateThreatCommandOutput;
    };
  };
}
