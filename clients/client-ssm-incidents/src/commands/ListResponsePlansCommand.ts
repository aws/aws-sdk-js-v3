// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResponsePlansInput, ListResponsePlansOutput } from "../models/models_0";
import { ListResponsePlans$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResponsePlansCommand}.
 */
export interface ListResponsePlansCommandInput extends ListResponsePlansInput {}
/**
 * @public
 *
 * The output of {@link ListResponsePlansCommand}.
 */
export interface ListResponsePlansCommandOutput extends ListResponsePlansOutput, __MetadataBearer {}

/**
 * <p>Lists all response plans in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListResponsePlansCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListResponsePlansCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // ListResponsePlansInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListResponsePlansCommand(input);
 * const response = await client.send(command);
 * // { // ListResponsePlansOutput
 * //   responsePlanSummaries: [ // ResponsePlanSummaryList // required
 * //     { // ResponsePlanSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResponsePlansCommandInput - {@link ListResponsePlansCommandInput}
 * @returns {@link ListResponsePlansCommandOutput}
 * @see {@link ListResponsePlansCommandInput} for command's `input` shape.
 * @see {@link ListResponsePlansCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link SSMIncidentsServiceException}
 * <p>Base exception class for all service exceptions from SSMIncidents service.</p>
 *
 *
 * @public
 */
export class ListResponsePlansCommand extends command<ListResponsePlansCommandInput, ListResponsePlansCommandOutput>(
  _ep0,
  _mw0,
  "ListResponsePlans",
  ListResponsePlans$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResponsePlansInput;
      output: ListResponsePlansOutput;
    };
    sdk: {
      input: ListResponsePlansCommandInput;
      output: ListResponsePlansCommandOutput;
    };
  };
}
