// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRecoveryPlansRequest, ListRecoveryPlansResponse } from "../models/models_0";
import { ListRecoveryPlans$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRecoveryPlansCommand}.
 */
export interface ListRecoveryPlansCommandInput extends ListRecoveryPlansRequest {}
/**
 * @public
 *
 * The output of {@link ListRecoveryPlansCommand}.
 */
export interface ListRecoveryPlansCommandOutput extends ListRecoveryPlansResponse, __MetadataBearer {}

/**
 * <p>Lists all Recovery Plans in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ListRecoveryPlansCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ListRecoveryPlansCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // ListRecoveryPlansRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRecoveryPlansCommand(input);
 * const response = await client.send(command);
 * // { // ListRecoveryPlansResponse
 * //   recoveryPlans: [ // RecoveryPlanSummaryList // required
 * //     { // RecoveryPlanSummary
 * //       recoveryPlanArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       createdAt: "STRING_VALUE", // required
 * //       updatedAt: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecoveryPlansCommandInput - {@link ListRecoveryPlansCommandInput}
 * @returns {@link ListRecoveryPlansCommandOutput}
 * @see {@link ListRecoveryPlansCommandInput} for command's `input` shape.
 * @see {@link ListRecoveryPlansCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class ListRecoveryPlansCommand extends command<ListRecoveryPlansCommandInput, ListRecoveryPlansCommandOutput>(
  _ep0,
  _mw0,
  "ListRecoveryPlans",
  ListRecoveryPlans$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecoveryPlansRequest;
      output: ListRecoveryPlansResponse;
    };
    sdk: {
      input: ListRecoveryPlansCommandInput;
      output: ListRecoveryPlansCommandOutput;
    };
  };
}
