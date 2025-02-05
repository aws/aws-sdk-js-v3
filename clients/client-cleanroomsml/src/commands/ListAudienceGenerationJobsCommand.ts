// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAudienceGenerationJobsRequest, ListAudienceGenerationJobsResponse } from "../models/models_0";
import { de_ListAudienceGenerationJobsCommand, se_ListAudienceGenerationJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAudienceGenerationJobsCommand}.
 */
export interface ListAudienceGenerationJobsCommandInput extends ListAudienceGenerationJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListAudienceGenerationJobsCommand}.
 */
export interface ListAudienceGenerationJobsCommandOutput extends ListAudienceGenerationJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of audience generation jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, ListAudienceGenerationJobsCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, ListAudienceGenerationJobsCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CleanRoomsMLClient(config);
 * const input = { // ListAudienceGenerationJobsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   configuredAudienceModelArn: "STRING_VALUE",
 *   collaborationId: "STRING_VALUE",
 * };
 * const command = new ListAudienceGenerationJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListAudienceGenerationJobsResponse
 * //   nextToken: "STRING_VALUE",
 * //   audienceGenerationJobs: [ // AudienceGenerationJobList // required
 * //     { // AudienceGenerationJobSummary
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       audienceGenerationJobArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "ACTIVE" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_FAILED", // required
 * //       configuredAudienceModelArn: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE",
 * //       startedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAudienceGenerationJobsCommandInput - {@link ListAudienceGenerationJobsCommandInput}
 * @returns {@link ListAudienceGenerationJobsCommandOutput}
 * @see {@link ListAudienceGenerationJobsCommandInput} for command's `input` shape.
 * @see {@link ListAudienceGenerationJobsCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 * @public
 */
export class ListAudienceGenerationJobsCommand extends $Command
  .classBuilder<
    ListAudienceGenerationJobsCommandInput,
    ListAudienceGenerationJobsCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStarkControlService", "ListAudienceGenerationJobs", {})
  .n("CleanRoomsMLClient", "ListAudienceGenerationJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListAudienceGenerationJobsCommand)
  .de(de_ListAudienceGenerationJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAudienceGenerationJobsRequest;
      output: ListAudienceGenerationJobsResponse;
    };
    sdk: {
      input: ListAudienceGenerationJobsCommandInput;
      output: ListAudienceGenerationJobsCommandOutput;
    };
  };
}
