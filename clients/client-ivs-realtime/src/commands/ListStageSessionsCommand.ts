// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { ListStageSessionsRequest, ListStageSessionsResponse } from "../models/models_0";
import { de_ListStageSessionsCommand, se_ListStageSessionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStageSessionsCommand}.
 */
export interface ListStageSessionsCommandInput extends ListStageSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListStageSessionsCommand}.
 */
export interface ListStageSessionsCommandOutput extends ListStageSessionsResponse, __MetadataBearer {}

/**
 * <p>Gets all sessions for a specified stage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, ListStageSessionsCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, ListStageSessionsCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IVSRealTimeClient(config);
 * const input = { // ListStageSessionsRequest
 *   stageArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListStageSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListStageSessionsResponse
 * //   stageSessions: [ // StageSessionList // required
 * //     { // StageSessionSummary
 * //       sessionId: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStageSessionsCommandInput - {@link ListStageSessionsCommandInput}
 * @returns {@link ListStageSessionsCommandOutput}
 * @see {@link ListStageSessionsCommandInput} for command's `input` shape.
 * @see {@link ListStageSessionsCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 * @public
 */
export class ListStageSessionsCommand extends $Command
  .classBuilder<
    ListStageSessionsCommandInput,
    ListStageSessionsCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "ListStageSessions", {})
  .n("IVSRealTimeClient", "ListStageSessionsCommand")
  .f(void 0, void 0)
  .ser(se_ListStageSessionsCommand)
  .de(de_ListStageSessionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStageSessionsRequest;
      output: ListStageSessionsResponse;
    };
    sdk: {
      input: ListStageSessionsCommandInput;
      output: ListStageSessionsCommandOutput;
    };
  };
}
