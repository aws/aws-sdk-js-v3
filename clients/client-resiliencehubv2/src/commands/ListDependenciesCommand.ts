// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDependenciesRequest, ListDependenciesResponse } from "../models/models_0";
import { ListDependencies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDependenciesCommand}.
 */
export interface ListDependenciesCommandInput extends ListDependenciesRequest {}
/**
 * @public
 *
 * The output of {@link ListDependenciesCommand}.
 */
export interface ListDependenciesCommandOutput extends ListDependenciesResponse, __MetadataBearer {}

/**
 * <p>Lists dependencies discovered for services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListDependenciesCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListDependenciesCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListDependenciesRequest
 *   serviceArn: "STRING_VALUE",
 *   queryRangeStartTime: new Date("TIMESTAMP"),
 *   queryRangeEndTime: new Date("TIMESTAMP"),
 *   queryRangeGranularity: "HOURLY" || "DAILY",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDependenciesCommand(input);
 * const response = await client.send(command);
 * // { // ListDependenciesResponse
 * //   dependencySummaries: [ // DependencySummaryList // required
 * //     { // DependencySummary
 * //       dependencyId: "STRING_VALUE", // required
 * //       serviceArn: "STRING_VALUE", // required
 * //       dependencyName: "STRING_VALUE", // required
 * //       dnsName: "STRING_VALUE", // required
 * //       location: "STRING_VALUE", // required
 * //       lastDetectedTime: new Date("TIMESTAMP"), // required
 * //       sourceRegions: [ // RegionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       provider: "STRING_VALUE",
 * //       queryRange: { // QueryRange
 * //         startTime: new Date("TIMESTAMP"), // required
 * //         endTime: new Date("TIMESTAMP"), // required
 * //         granularity: "HOURLY" || "DAILY", // required
 * //         dataPoints: [ // QueryDataPointList // required
 * //           { // QueryDataPoint
 * //             timestamp: new Date("TIMESTAMP"), // required
 * //             queryCount: Number("long"), // required
 * //           },
 * //         ],
 * //       },
 * //       criticality: "HARD" || "SOFT" || "UNKNOWN", // required
 * //       comment: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDependenciesCommandInput - {@link ListDependenciesCommandInput}
 * @returns {@link ListDependenciesCommandOutput}
 * @see {@link ListDependenciesCommandInput} for command's `input` shape.
 * @see {@link ListDependenciesCommandOutput} for command's `response` shape.
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
export class ListDependenciesCommand extends command<ListDependenciesCommandInput, ListDependenciesCommandOutput>(
  _ep0,
  _mw0,
  "ListDependencies",
  ListDependencies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDependenciesRequest;
      output: ListDependenciesResponse;
    };
    sdk: {
      input: ListDependenciesCommandInput;
      output: ListDependenciesCommandOutput;
    };
  };
}
