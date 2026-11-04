// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDetectorsRequest, ListDetectorsResponse } from "../models/models_1";
import { ListDetectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDetectorsCommand}.
 */
export interface ListDetectorsCommandInput extends ListDetectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListDetectorsCommand}.
 */
export interface ListDetectorsCommandOutput extends ListDetectorsResponse, __MetadataBearer {}

/**
 * Lists detectorIds of all the existing Amazon GuardDuty detector resources.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListDetectorsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListDetectorsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // ListDetectorsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDetectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListDetectorsResponse
 * //   DetectorIds: [ // DetectorIds // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDetectorsCommandInput - {@link ListDetectorsCommandInput}
 * @returns {@link ListDetectorsCommandOutput}
 * @see {@link ListDetectorsCommandInput} for command's `input` shape.
 * @see {@link ListDetectorsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * A bad request exception object.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * An internal server error exception object.
 *
 * @throws {@link GuardDutyServiceException}
 *
 * Base exception class for all service exceptions from GuardDuty service.
 *
 * @public
 */
export class ListDetectorsCommand extends command<ListDetectorsCommandInput, ListDetectorsCommandOutput>(
  _ep0,
  _mw0,
  "ListDetectors",
  ListDetectors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDetectorsRequest;
      output: ListDetectorsResponse;
    };
    sdk: {
      input: ListDetectorsCommandInput;
      output: ListDetectorsCommandOutput;
    };
  };
}
