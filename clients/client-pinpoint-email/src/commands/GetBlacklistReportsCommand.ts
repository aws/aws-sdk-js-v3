// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetBlacklistReportsRequest, GetBlacklistReportsResponse } from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { de_GetBlacklistReportsCommand, se_GetBlacklistReportsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieve a list of the blacklists that your dedicated IP addresses appear on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetBlacklistReportsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetBlacklistReportsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 * @public
 */
export class GetBlacklistReportsCommand extends $Command
  .classBuilder<
    GetBlacklistReportsCommandInput,
    GetBlacklistReportsCommandOutput,
    PinpointEmailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointEmailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPinpointEmailService", "GetBlacklistReports", {})
  .n("PinpointEmailClient", "GetBlacklistReportsCommand")
  .f(void 0, void 0)
  .ser(se_GetBlacklistReportsCommand)
  .de(de_GetBlacklistReportsCommand)
  .build() {
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
