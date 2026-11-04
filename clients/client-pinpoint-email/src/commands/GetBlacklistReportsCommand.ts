// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBlacklistReportsRequest, GetBlacklistReportsResponse } from "../models/models_0";
import { GetBlacklistReports$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBlacklistReportsCommand}.
 */
export interface GetBlacklistReportsCommandInput extends GetBlacklistReportsRequest {}
/**
 * @public
 *
 * The output of {@link GetBlacklistReportsCommand}.
 */
export interface GetBlacklistReportsCommandOutput extends GetBlacklistReportsResponse, __MetadataBearer {}

/**
 * Retrieve a list of the blacklists that your dedicated IP addresses appear on.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetBlacklistReportsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetBlacklistReportsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
 * const input = { // GetBlacklistReportsRequest
 *   BlacklistItemNames: [ // BlacklistItemNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetBlacklistReportsCommand(input);
 * const response = await client.send(command);
 * // { // GetBlacklistReportsResponse
 * //   BlacklistReport: { // BlacklistReport // required
 * //     "<keys>": [ // BlacklistEntries
 * //       { // BlacklistEntry
 * //         RblName: "STRING_VALUE",
 * //         ListingTime: new Date("TIMESTAMP"),
 * //         Description: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBlacklistReportsCommandInput - {@link GetBlacklistReportsCommandInput}
 * @returns {@link GetBlacklistReportsCommandOutput}
 * @see {@link GetBlacklistReportsCommandInput} for command's `input` shape.
 * @see {@link GetBlacklistReportsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource you attempted to access doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Too many requests have been made to the operation.
 *
 * @throws {@link PinpointEmailServiceException}
 *
 * Base exception class for all service exceptions from PinpointEmail service.
 *
 * @public
 */
export class GetBlacklistReportsCommand extends command<GetBlacklistReportsCommandInput, GetBlacklistReportsCommandOutput>(
  _ep0,
  _mw0,
  "GetBlacklistReports",
  GetBlacklistReports$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBlacklistReportsRequest;
      output: GetBlacklistReportsResponse;
    };
    sdk: {
      input: GetBlacklistReportsCommandInput;
      output: GetBlacklistReportsCommandOutput;
    };
  };
}
