// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListCodegenJobsRequest, ListCodegenJobsResponse } from "../models/models_0";
import { de_ListCodegenJobsCommand, se_ListCodegenJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCodegenJobsCommand}.
 */
export interface ListCodegenJobsCommandInput extends ListCodegenJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListCodegenJobsCommand}.
 */
export interface ListCodegenJobsCommandOutput extends ListCodegenJobsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of code generation jobs for a specified Amplify app and backend environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, ListCodegenJobsCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, ListCodegenJobsCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // ListCodegenJobsRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCodegenJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListCodegenJobsResponse
 * //   entities: [ // CodegenJobSummaryList // required
 * //     { // CodegenJobSummary
 * //       appId: "STRING_VALUE", // required
 * //       environmentName: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"),
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCodegenJobsCommandInput - {@link ListCodegenJobsCommandInput}
 * @returns {@link ListCodegenJobsCommandOutput}
 * @see {@link ListCodegenJobsCommandInput} for command's `input` shape.
 * @see {@link ListCodegenJobsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An invalid or out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link AmplifyUIBuilderServiceException}
 * <p>Base exception class for all service exceptions from AmplifyUIBuilder service.</p>
 *
 * @public
 */
export class ListCodegenJobsCommand extends $Command
  .classBuilder<
    ListCodegenJobsCommandInput,
    ListCodegenJobsCommandOutput,
    AmplifyUIBuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyUIBuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmplifyUIBuilder", "ListCodegenJobs", {})
  .n("AmplifyUIBuilderClient", "ListCodegenJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListCodegenJobsCommand)
  .de(de_ListCodegenJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCodegenJobsRequest;
      output: ListCodegenJobsResponse;
    };
    sdk: {
      input: ListCodegenJobsCommandInput;
      output: ListCodegenJobsCommandOutput;
    };
  };
}
