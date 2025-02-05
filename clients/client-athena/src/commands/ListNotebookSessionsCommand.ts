// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListNotebookSessionsRequest, ListNotebookSessionsResponse } from "../models/models_0";
import { de_ListNotebookSessionsCommand, se_ListNotebookSessionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNotebookSessionsCommand}.
 */
export interface ListNotebookSessionsCommandInput extends ListNotebookSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListNotebookSessionsCommand}.
 */
export interface ListNotebookSessionsCommandOutput extends ListNotebookSessionsResponse, __MetadataBearer {}

/**
 * <p>Lists, in descending order, the sessions that have been created in a notebook that are
 *             in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code>
 *             or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed
 *             later.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListNotebookSessionsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListNotebookSessionsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AthenaClient(config);
 * const input = { // ListNotebookSessionsRequest
 *   NotebookId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListNotebookSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListNotebookSessionsResponse
 * //   NotebookSessionsList: [ // NotebookSessionsList // required
 * //     { // NotebookSessionSummary
 * //       SessionId: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNotebookSessionsCommandInput - {@link ListNotebookSessionsCommandInput}
 * @returns {@link ListNotebookSessionsCommandOutput}
 * @see {@link ListNotebookSessionsCommandInput} for command's `input` shape.
 * @see {@link ListNotebookSessionsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 * @public
 */
export class ListNotebookSessionsCommand extends $Command
  .classBuilder<
    ListNotebookSessionsCommandInput,
    ListNotebookSessionsCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "ListNotebookSessions", {})
  .n("AthenaClient", "ListNotebookSessionsCommand")
  .f(void 0, void 0)
  .ser(se_ListNotebookSessionsCommand)
  .de(de_ListNotebookSessionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNotebookSessionsRequest;
      output: ListNotebookSessionsResponse;
    };
    sdk: {
      input: ListNotebookSessionsCommandInput;
      output: ListNotebookSessionsCommandOutput;
    };
  };
}
