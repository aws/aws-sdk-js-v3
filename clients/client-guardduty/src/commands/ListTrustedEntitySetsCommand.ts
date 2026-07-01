// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTrustedEntitySetsRequest, ListTrustedEntitySetsResponse } from "../models/models_1";
import { ListTrustedEntitySets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTrustedEntitySetsCommand}.
 */
export interface ListTrustedEntitySetsCommandInput extends ListTrustedEntitySetsRequest {}
/**
 * @public
 *
 * The output of {@link ListTrustedEntitySetsCommand}.
 */
export interface ListTrustedEntitySetsCommandOutput extends ListTrustedEntitySetsResponse, __MetadataBearer {}

/**
 * <p>Lists the trusted entity sets associated with the specified GuardDuty detector ID. If you use this operation from a member account, the trusted entity sets that are returned as a response, belong to the administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListTrustedEntitySetsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListTrustedEntitySetsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // ListTrustedEntitySetsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTrustedEntitySetsCommand(input);
 * const response = await client.send(command);
 * // { // ListTrustedEntitySetsResponse
 * //   TrustedEntitySetIds: [ // TrustedEntitySetIds // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTrustedEntitySetsCommandInput - {@link ListTrustedEntitySetsCommandInput}
 * @returns {@link ListTrustedEntitySetsCommandOutput}
 * @see {@link ListTrustedEntitySetsCommandInput} for command's `input` shape.
 * @see {@link ListTrustedEntitySetsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 *
 * @public
 */
export class ListTrustedEntitySetsCommand extends command<ListTrustedEntitySetsCommandInput, ListTrustedEntitySetsCommandOutput>(
  _ep0,
  _mw0,
  "ListTrustedEntitySets",
  ListTrustedEntitySets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrustedEntitySetsRequest;
      output: ListTrustedEntitySetsResponse;
    };
    sdk: {
      input: ListTrustedEntitySetsCommandInput;
      output: ListTrustedEntitySetsCommandOutput;
    };
  };
}
