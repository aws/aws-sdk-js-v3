// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetThreatsInput, BatchGetThreatsOutput } from "../models/models_0";
import { BatchGetThreats$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetThreatsCommand}.
 */
export interface BatchGetThreatsCommandInput extends BatchGetThreatsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetThreatsCommand}.
 */
export interface BatchGetThreatsCommandOutput extends BatchGetThreatsOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about one or more threats.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, BatchGetThreatsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, BatchGetThreatsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // BatchGetThreatsInput
 *   threatIds: [ // ThreatIdList // required
 *     "STRING_VALUE",
 *   ],
 *   agentSpaceId: "STRING_VALUE", // required
 * };
 * const command = new BatchGetThreatsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetThreatsOutput
 * //   threats: [ // ThreatList
 * //     { // Threat
 * //       threatId: "STRING_VALUE",
 * //       threatJobId: "STRING_VALUE",
 * //       title: "STRING_VALUE",
 * //       statement: "STRING_VALUE",
 * //       severity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFO",
 * //       status: "OPEN" || "RESOLVED" || "DISMISSED",
 * //       comments: "STRING_VALUE",
 * //       threatSource: "STRING_VALUE",
 * //       prerequisites: "STRING_VALUE",
 * //       threatAction: "STRING_VALUE",
 * //       threatImpact: "STRING_VALUE",
 * //       impactedGoal: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       impactedAssets: [
 * //         "STRING_VALUE",
 * //       ],
 * //       anchor: { // ThreatAnchorShape
 * //         kind: "STRING_VALUE",
 * //         id: "STRING_VALUE",
 * //         packageId: "STRING_VALUE",
 * //       },
 * //       evidence: [ // ThreatEvidenceList
 * //         { // ThreatEvidenceShape
 * //           packageId: "STRING_VALUE",
 * //           path: "STRING_VALUE",
 * //         },
 * //       ],
 * //       stride: [ // StrideCategoryList
 * //         "SPOOFING" || "TAMPERING" || "REPUDIATION" || "INFORMATION_DISCLOSURE" || "DENIAL_OF_SERVICE" || "ELEVATION_OF_PRIVILEGE",
 * //       ],
 * //       recommendation: "STRING_VALUE",
 * //       createdBy: "CUSTOMER" || "AGENT",
 * //       updatedBy: "CUSTOMER" || "AGENT",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   notFound: [ // ThreatIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetThreatsCommandInput - {@link BatchGetThreatsCommandInput}
 * @returns {@link BatchGetThreatsCommandOutput}
 * @see {@link BatchGetThreatsCommandInput} for command's `input` shape.
 * @see {@link BatchGetThreatsCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class BatchGetThreatsCommand extends $Command
  .classBuilder<
    BatchGetThreatsCommandInput,
    BatchGetThreatsCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "BatchGetThreats", {})
  .n("SecurityAgentClient", "BatchGetThreatsCommand")
  .sc(BatchGetThreats$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetThreatsInput;
      output: BatchGetThreatsOutput;
    };
    sdk: {
      input: BatchGetThreatsCommandInput;
      output: BatchGetThreatsCommandOutput;
    };
  };
}
