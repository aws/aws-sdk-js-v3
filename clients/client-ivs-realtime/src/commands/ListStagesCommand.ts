// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { ListStagesRequest, ListStagesResponse } from "../models/models_0";
import { de_ListStagesCommand, se_ListStagesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStagesCommand}.
 */
export interface ListStagesCommandInput extends ListStagesRequest {}
/**
 * @public
 *
 * The output of {@link ListStagesCommand}.
 */
export interface ListStagesCommandOutput extends ListStagesResponse, __MetadataBearer {}

/**
 * <p>Gets summary information about all stages in your account, in the AWS region where the
 *          API request is processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, ListStagesCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, ListStagesCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IVSRealTimeClient(config);
 * const input = { // ListStagesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListStagesCommand(input);
 * const response = await client.send(command);
 * // { // ListStagesResponse
 * //   stages: [ // StageSummaryList // required
 * //     { // StageSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       activeSessionId: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStagesCommandInput - {@link ListStagesCommandInput}
 * @returns {@link ListStagesCommandOutput}
 * @see {@link ListStagesCommandInput} for command's `input` shape.
 * @see {@link ListStagesCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
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
export class ListStagesCommand extends $Command
  .classBuilder<
    ListStagesCommandInput,
    ListStagesCommandOutput,
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
  .s("AmazonInteractiveVideoServiceRealTime", "ListStages", {})
  .n("IVSRealTimeClient", "ListStagesCommand")
  .f(void 0, void 0)
  .ser(se_ListStagesCommand)
  .de(de_ListStagesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStagesRequest;
      output: ListStagesResponse;
    };
    sdk: {
      input: ListStagesCommandInput;
      output: ListStagesCommandOutput;
    };
  };
}
