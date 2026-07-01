// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartQueryPlanningRequest, StartQueryPlanningResponse } from "../models/models_0";
import { StartQueryPlanning$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartQueryPlanningCommand}.
 */
export interface StartQueryPlanningCommandInput extends StartQueryPlanningRequest {}
/**
 * @public
 *
 * The output of {@link StartQueryPlanningCommand}.
 */
export interface StartQueryPlanningCommandOutput extends StartQueryPlanningResponse, __MetadataBearer {}

/**
 * <p>Submits a request to process a query statement.</p>
 *          <p>This operation generates work units that can be retrieved with the <code>GetWorkUnits</code> operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, StartQueryPlanningCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, StartQueryPlanningCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // StartQueryPlanningRequest
 *   QueryPlanningContext: { // QueryPlanningContext
 *     CatalogId: "STRING_VALUE",
 *     DatabaseName: "STRING_VALUE", // required
 *     QueryAsOfTime: new Date("TIMESTAMP"),
 *     QueryParameters: { // QueryParameterMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     TransactionId: "STRING_VALUE",
 *   },
 *   QueryString: "STRING_VALUE", // required
 * };
 * const command = new StartQueryPlanningCommand(input);
 * const response = await client.send(command);
 * // { // StartQueryPlanningResponse
 * //   QueryId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartQueryPlanningCommandInput - {@link StartQueryPlanningCommandInput}
 * @returns {@link StartQueryPlanningCommandOutput}
 * @see {@link StartQueryPlanningCommandInput} for command's `input` shape.
 * @see {@link StartQueryPlanningCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>Contains details about an error where the query request was throttled.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class StartQueryPlanningCommand extends command<StartQueryPlanningCommandInput, StartQueryPlanningCommandOutput>(
  _ep0,
  _mw0,
  "StartQueryPlanning",
  StartQueryPlanning$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartQueryPlanningRequest;
      output: StartQueryPlanningResponse;
    };
    sdk: {
      input: StartQueryPlanningCommandInput;
      output: StartQueryPlanningCommandOutput;
    };
  };
}
