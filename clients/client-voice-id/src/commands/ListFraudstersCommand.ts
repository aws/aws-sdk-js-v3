// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListFraudstersRequest, ListFraudstersResponse } from "../models/models_0";
import { de_ListFraudstersCommand, se_ListFraudstersCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFraudstersCommand}.
 */
export interface ListFraudstersCommandInput extends ListFraudstersRequest {}
/**
 * @public
 *
 * The output of {@link ListFraudstersCommand}.
 */
export interface ListFraudstersCommandOutput extends ListFraudstersResponse, __MetadataBearer {}

/**
 * <p>Lists all fraudsters in a specified watchlist or domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, ListFraudstersCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, ListFraudstersCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
 * const client = new VoiceIDClient(config);
 * const input = { // ListFraudstersRequest
 *   DomainId: "STRING_VALUE", // required
 *   WatchlistId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFraudstersCommand(input);
 * const response = await client.send(command);
 * // { // ListFraudstersResponse
 * //   FraudsterSummaries: [ // FraudsterSummaries
 * //     { // FraudsterSummary
 * //       DomainId: "STRING_VALUE",
 * //       GeneratedFraudsterId: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       WatchlistIds: [ // ResponseWatchlistIds
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFraudstersCommandInput - {@link ListFraudstersCommandInput}
 * @returns {@link ListFraudstersCommandOutput}
 * @see {@link ListFraudstersCommandInput} for command's `input` shape.
 * @see {@link ListFraudstersCommandOutput} for command's `response` shape.
 * @see {@link VoiceIDClientResolvedConfig | config} for VoiceIDClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. Check the error message
 *             and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an unknown error on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the <code>ResourceType</code> and error
 *             message for more details.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please slow down your request rate.
 *             Refer to <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html##voiceid-api-quotas">
 *                 Amazon Connect Voice ID Service API throttling quotas </a> and try your
 *             request again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed one or more validations; check the error message for more
 *             details.</p>
 *
 * @throws {@link VoiceIDServiceException}
 * <p>Base exception class for all service exceptions from VoiceID service.</p>
 *
 *
 * @public
 */
export class ListFraudstersCommand extends $Command
  .classBuilder<
    ListFraudstersCommandInput,
    ListFraudstersCommandOutput,
    VoiceIDClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VoiceIDClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("VoiceID", "ListFraudsters", {})
  .n("VoiceIDClient", "ListFraudstersCommand")
  .f(void 0, void 0)
  .ser(se_ListFraudstersCommand)
  .de(de_ListFraudstersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFraudstersRequest;
      output: ListFraudstersResponse;
    };
    sdk: {
      input: ListFraudstersCommandInput;
      output: ListFraudstersCommandOutput;
    };
  };
}
