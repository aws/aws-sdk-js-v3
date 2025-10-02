// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { ListStreamSessionsRequest, ListStreamSessionsResponse } from "../models/models_0";
import { de_ListStreamSessionsCommand, se_ListStreamSessionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStreamSessionsCommand}.
 */
export interface ListStreamSessionsCommandInput extends ListStreamSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListStreamSessionsCommand}.
 */
export interface ListStreamSessionsCommandOutput extends ListStreamSessionsResponse, __MetadataBearer {}

/**
 * <p>Gets a summary of current and previous streams for a specified channel in your account, in
 *       the AWS region where the API request is processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, ListStreamSessionsCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, ListStreamSessionsCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // ListStreamSessionsRequest
 *   channelArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListStreamSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListStreamSessionsResponse
 * //   streamSessions: [ // StreamSessionList // required
 * //     { // StreamSessionSummary
 * //       streamId: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       hasErrorEvent: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStreamSessionsCommandInput - {@link ListStreamSessionsCommandInput}
 * @returns {@link ListStreamSessionsCommandOutput}
 * @see {@link ListStreamSessionsCommandInput} for command's `input` shape.
 * @see {@link ListStreamSessionsCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class ListStreamSessionsCommand extends $Command
  .classBuilder<
    ListStreamSessionsCommandInput,
    ListStreamSessionsCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoService", "ListStreamSessions", {})
  .n("IvsClient", "ListStreamSessionsCommand")
  .f(void 0, void 0)
  .ser(se_ListStreamSessionsCommand)
  .de(de_ListStreamSessionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStreamSessionsRequest;
      output: ListStreamSessionsResponse;
    };
    sdk: {
      input: ListStreamSessionsCommandInput;
      output: ListStreamSessionsCommandOutput;
    };
  };
}
