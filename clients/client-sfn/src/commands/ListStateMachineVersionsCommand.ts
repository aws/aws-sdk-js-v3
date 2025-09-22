// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListStateMachineVersionsInput, ListStateMachineVersionsOutput } from "../models/models_0";
import { ListStateMachineVersions } from "../schemas/schemas_11_StateMachine";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStateMachineVersionsCommand}.
 */
export interface ListStateMachineVersionsCommandInput extends ListStateMachineVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListStateMachineVersionsCommand}.
 */
export interface ListStateMachineVersionsCommandOutput extends ListStateMachineVersionsOutput, __MetadataBearer {}

/**
 * <p>Lists <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">versions</a> for the specified state machine Amazon Resource Name (ARN).</p>
 *          <p>The results are sorted in descending order of the version creation time.</p>
 *          <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
 *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>PublishStateMachineVersion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteStateMachineVersion</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, ListStateMachineVersionsCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, ListStateMachineVersionsCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // ListStateMachineVersionsInput
 *   stateMachineArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListStateMachineVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListStateMachineVersionsOutput
 * //   stateMachineVersions: [ // StateMachineVersionList // required
 * //     { // StateMachineVersionListItem
 * //       stateMachineVersionArn: "STRING_VALUE", // required
 * //       creationDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStateMachineVersionsCommandInput - {@link ListStateMachineVersionsCommandInput}
 * @returns {@link ListStateMachineVersionsCommandOutput}
 * @see {@link ListStateMachineVersionsCommandInput} for command's `input` shape.
 * @see {@link ListStateMachineVersionsCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link InvalidToken} (client fault)
 *  <p>The provided token is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 *
 * @public
 */
export class ListStateMachineVersionsCommand extends $Command
  .classBuilder<
    ListStateMachineVersionsCommandInput,
    ListStateMachineVersionsCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStepFunctions", "ListStateMachineVersions", {})
  .n("SFNClient", "ListStateMachineVersionsCommand")
  .sc(ListStateMachineVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStateMachineVersionsInput;
      output: ListStateMachineVersionsOutput;
    };
    sdk: {
      input: ListStateMachineVersionsCommandInput;
      output: ListStateMachineVersionsCommandOutput;
    };
  };
}
