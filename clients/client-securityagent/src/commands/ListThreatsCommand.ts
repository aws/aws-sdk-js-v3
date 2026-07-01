// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListThreatsInput, ListThreatsOutput } from "../models/models_0";
import { ListThreats$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListThreatsCommand}.
 */
export interface ListThreatsCommandInput extends ListThreatsInput {}
/**
 * @public
 *
 * The output of {@link ListThreatsCommand}.
 */
export interface ListThreatsCommandOutput extends ListThreatsOutput, __MetadataBearer {}

/**
 * <p>Returns a paginated list of threats for a threat model job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, ListThreatsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, ListThreatsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // ListThreatsInput
 *   threatJobId: "STRING_VALUE", // required
 *   agentSpaceId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListThreatsCommand(input);
 * const response = await client.send(command);
 * // { // ListThreatsOutput
 * //   threats: [ // ThreatSummaryList
 * //     { // ThreatSummary
 * //       threatId: "STRING_VALUE",
 * //       threatJobId: "STRING_VALUE",
 * //       title: "STRING_VALUE",
 * //       statement: "STRING_VALUE",
 * //       severity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFO",
 * //       status: "OPEN" || "RESOLVED" || "DISMISSED",
 * //       stride: [ // StrideCategoryList
 * //         "SPOOFING" || "TAMPERING" || "REPUDIATION" || "INFORMATION_DISCLOSURE" || "DENIAL_OF_SERVICE" || "ELEVATION_OF_PRIVILEGE",
 * //       ],
 * //       createdBy: "CUSTOMER" || "AGENT",
 * //       updatedBy: "CUSTOMER" || "AGENT",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThreatsCommandInput - {@link ListThreatsCommandInput}
 * @returns {@link ListThreatsCommandOutput}
 * @see {@link ListThreatsCommandInput} for command's `input` shape.
 * @see {@link ListThreatsCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class ListThreatsCommand extends command<ListThreatsCommandInput, ListThreatsCommandOutput>(
  _ep0,
  _mw0,
  "ListThreats",
  ListThreats$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThreatsInput;
      output: ListThreatsOutput;
    };
    sdk: {
      input: ListThreatsCommandInput;
      output: ListThreatsCommandOutput;
    };
  };
}
