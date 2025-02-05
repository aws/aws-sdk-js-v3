// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSolutionVersionsRequest, ListSolutionVersionsResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_ListSolutionVersionsCommand, se_ListSolutionVersionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSolutionVersionsCommand}.
 */
export interface ListSolutionVersionsCommandInput extends ListSolutionVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSolutionVersionsCommand}.
 */
export interface ListSolutionVersionsCommandOutput extends ListSolutionVersionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of solution versions for the given solution. When a solution is not
 *       specified, all the solution versions associated with the account are listed. The response
 *       provides the properties for each solution version, including the Amazon Resource Name (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListSolutionVersionsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListSolutionVersionsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PersonalizeClient(config);
 * const input = { // ListSolutionVersionsRequest
 *   solutionArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSolutionVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSolutionVersionsResponse
 * //   solutionVersions: [ // SolutionVersions
 * //     { // SolutionVersionSummary
 * //       solutionVersionArn: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       trainingMode: "FULL" || "UPDATE" || "AUTOTRAIN",
 * //       trainingType: "AUTOMATIC" || "MANUAL",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       failureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSolutionVersionsCommandInput - {@link ListSolutionVersionsCommandInput}
 * @returns {@link ListSolutionVersionsCommandOutput}
 * @see {@link ListSolutionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListSolutionVersionsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 * @public
 */
export class ListSolutionVersionsCommand extends $Command
  .classBuilder<
    ListSolutionVersionsCommandInput,
    ListSolutionVersionsCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalize", "ListSolutionVersions", {})
  .n("PersonalizeClient", "ListSolutionVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListSolutionVersionsCommand)
  .de(de_ListSolutionVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSolutionVersionsRequest;
      output: ListSolutionVersionsResponse;
    };
    sdk: {
      input: ListSolutionVersionsCommandInput;
      output: ListSolutionVersionsCommandOutput;
    };
  };
}
