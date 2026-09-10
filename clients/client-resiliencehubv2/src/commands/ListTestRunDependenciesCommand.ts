// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTestRunDependenciesRequest, ListTestRunDependenciesResponse } from "../models/models_0";
import { ListTestRunDependencies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTestRunDependenciesCommand}.
 */
export interface ListTestRunDependenciesCommandInput extends ListTestRunDependenciesRequest {}
/**
 * @public
 *
 * The output of {@link ListTestRunDependenciesCommand}.
 */
export interface ListTestRunDependenciesCommandOutput extends ListTestRunDependenciesResponse, __MetadataBearer {}

/**
 * <p>Lists the dependencies that a test run blocked. Each dependency reflects the discovered classification captured when the run started, so results do not change if a dependency is reclassified after the run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListTestRunDependenciesCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListTestRunDependenciesCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListTestRunDependenciesRequest
 *   testRunId: "STRING_VALUE", // required
 *   serviceArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestRunDependenciesCommand(input);
 * const response = await client.send(command);
 * // { // ListTestRunDependenciesResponse
 * //   dependencies: [ // TestRunDependencySummaryList // required
 * //     { // TestRunDependencySummary
 * //       dependencyId: "STRING_VALUE",
 * //       dependencyName: "STRING_VALUE", // required
 * //       dnsName: "STRING_VALUE", // required
 * //       criticality: "HARD" || "SOFT" || "UNKNOWN", // required
 * //       source: "DISCOVERED" || "MANUAL", // required
 * //       location: "STRING_VALUE",
 * //       sourceRegions: [ // RegionList
 * //         "STRING_VALUE",
 * //       ],
 * //       provider: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestRunDependenciesCommandInput - {@link ListTestRunDependenciesCommandInput}
 * @returns {@link ListTestRunDependenciesCommandOutput}
 * @see {@link ListTestRunDependenciesCommandInput} for command's `input` shape.
 * @see {@link ListTestRunDependenciesCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class ListTestRunDependenciesCommand extends command<ListTestRunDependenciesCommandInput, ListTestRunDependenciesCommandOutput>(
  _ep0,
  _mw0,
  "ListTestRunDependencies",
  ListTestRunDependencies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestRunDependenciesRequest;
      output: ListTestRunDependenciesResponse;
    };
    sdk: {
      input: ListTestRunDependenciesCommandInput;
      output: ListTestRunDependenciesCommandOutput;
    };
  };
}
