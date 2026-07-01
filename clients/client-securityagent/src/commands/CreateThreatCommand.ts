// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateThreatInput, CreateThreatOutput } from "../models/models_0";
import { CreateThreat$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateThreatCommand}.
 */
export interface CreateThreatCommandInput extends CreateThreatInput {}
/**
 * @public
 *
 * The output of {@link CreateThreatCommand}.
 */
export interface CreateThreatCommandOutput extends CreateThreatOutput, __MetadataBearer {}

/**
 * <p>Creates a new threat under a threat model job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, CreateThreatCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, CreateThreatCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // CreateThreatInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   threatJobId: "STRING_VALUE", // required
 *   title: "STRING_VALUE",
 *   statement: "STRING_VALUE",
 *   severity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFO",
 *   comments: "STRING_VALUE",
 *   stride: [ // StrideCategoryList
 *     "SPOOFING" || "TAMPERING" || "REPUDIATION" || "INFORMATION_DISCLOSURE" || "DENIAL_OF_SERVICE" || "ELEVATION_OF_PRIVILEGE",
 *   ],
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
 * const command = new CreateThreatCommand(input);
 * const response = await client.send(command);
 * // { // CreateThreatOutput
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
 * @param CreateThreatCommandInput - {@link CreateThreatCommandInput}
 * @returns {@link CreateThreatCommandOutput}
 * @see {@link CreateThreatCommandInput} for command's `input` shape.
 * @see {@link CreateThreatCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class CreateThreatCommand extends command<CreateThreatCommandInput, CreateThreatCommandOutput>(
  _ep0,
  _mw0,
  "CreateThreat",
  CreateThreat$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateThreatInput;
      output: CreateThreatOutput;
    };
    sdk: {
      input: CreateThreatCommandInput;
      output: CreateThreatCommandOutput;
    };
  };
}
