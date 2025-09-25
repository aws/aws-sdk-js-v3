// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAudienceExportJobsRequest, ListAudienceExportJobsResponse } from "../models/models_0";
import { ListAudienceExportJobs } from "../schemas/schemas_10_Audience";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAudienceExportJobsCommand}.
 */
export interface ListAudienceExportJobsCommandInput extends ListAudienceExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListAudienceExportJobsCommand}.
 */
export interface ListAudienceExportJobsCommandOutput extends ListAudienceExportJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the audience export jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, ListAudienceExportJobsCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, ListAudienceExportJobsCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // ListAudienceExportJobsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   audienceGenerationJobArn: "STRING_VALUE",
 * };
 * const command = new ListAudienceExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListAudienceExportJobsResponse
 * //   nextToken: "STRING_VALUE",
 * //   audienceExportJobs: [ // AudienceExportJobList // required
 * //     { // AudienceExportJobSummary
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       name: "STRING_VALUE", // required
 * //       audienceGenerationJobArn: "STRING_VALUE", // required
 * //       audienceSize: { // AudienceSize
 * //         type: "ABSOLUTE" || "PERCENTAGE", // required
 * //         value: Number("int"), // required
 * //       },
 * //       description: "STRING_VALUE",
 * //       status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "ACTIVE", // required
 * //       statusDetails: { // StatusDetails
 * //         statusCode: "STRING_VALUE",
 * //         message: "STRING_VALUE",
 * //       },
 * //       outputLocation: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAudienceExportJobsCommandInput - {@link ListAudienceExportJobsCommandInput}
 * @returns {@link ListAudienceExportJobsCommandOutput}
 * @see {@link ListAudienceExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListAudienceExportJobsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListAudienceExportJobsCommand extends $Command
  .classBuilder<
    ListAudienceExportJobsCommandInput,
    ListAudienceExportJobsCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStarkControlService", "ListAudienceExportJobs", {})
  .n("CleanRoomsMLClient", "ListAudienceExportJobsCommand")
  .sc(ListAudienceExportJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAudienceExportJobsRequest;
      output: ListAudienceExportJobsResponse;
    };
    sdk: {
      input: ListAudienceExportJobsCommandInput;
      output: ListAudienceExportJobsCommandOutput;
    };
  };
}
