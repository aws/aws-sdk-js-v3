// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCollectorsInput, ListCollectorsOutput } from "../models/models_0";
import { ListCollectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCollectorsCommand}.
 */
export interface ListCollectorsCommandInput extends ListCollectorsInput {}
/**
 * @public
 *
 * The output of {@link ListCollectorsCommand}.
 */
export interface ListCollectorsCommandOutput extends ListCollectorsOutput, __MetadataBearer {}

/**
 * Lists the Collectors owned by the authenticated caller's account, including a Collector whose deletion is in progress. A Collector that is still being created is omitted. The account-scoped Collector quota currently permits at most one result, so no result ordering applies.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, ListCollectorsCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, ListCollectorsCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = {};
 * const command = new ListCollectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListCollectorsOutput
 * //   items: [ // CollectorSummaries // required
 * //     { // CollectorSummary
 * //       collectorId: "STRING_VALUE", // required
 * //       collectorArn: "STRING_VALUE", // required
 * //       type: "AWS_COLLECTOR", // required
 * //       status: "ACTIVE" || "PENDING_DELETION", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCollectorsCommandInput - {@link ListCollectorsCommandInput}
 * @returns {@link ListCollectorsCommandOutput}
 * @see {@link ListCollectorsCommandInput} for command's `input` shape.
 * @see {@link ListCollectorsCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link ContinuumServiceException}
 * <p>Base exception class for all service exceptions from Continuum service.</p>
 *
 *
 * @public
 */
export class ListCollectorsCommand extends command<ListCollectorsCommandInput, ListCollectorsCommandOutput>(
  _ep0,
  _mw0,
  "ListCollectors",
  ListCollectors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: ListCollectorsOutput;
    };
    sdk: {
      input: ListCollectorsCommandInput;
      output: ListCollectorsCommandOutput;
    };
  };
}
