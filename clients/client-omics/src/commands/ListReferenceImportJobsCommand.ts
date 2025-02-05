// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListReferenceImportJobsRequest, ListReferenceImportJobsResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_ListReferenceImportJobsCommand, se_ListReferenceImportJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReferenceImportJobsCommand}.
 */
export interface ListReferenceImportJobsCommandInput extends ListReferenceImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListReferenceImportJobsCommand}.
 */
export interface ListReferenceImportJobsCommandOutput extends ListReferenceImportJobsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of reference import jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListReferenceImportJobsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListReferenceImportJobsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OmicsClient(config);
 * const input = { // ListReferenceImportJobsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   referenceStoreId: "STRING_VALUE", // required
 *   filter: { // ImportReferenceFilter
 *     status: "STRING_VALUE",
 *     createdAfter: new Date("TIMESTAMP"),
 *     createdBefore: new Date("TIMESTAMP"),
 *   },
 * };
 * const command = new ListReferenceImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListReferenceImportJobsResponse
 * //   nextToken: "STRING_VALUE",
 * //   importJobs: [ // ImportReferenceJobList
 * //     { // ImportReferenceJobItem
 * //       id: "STRING_VALUE", // required
 * //       referenceStoreId: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       completionTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReferenceImportJobsCommandInput - {@link ListReferenceImportJobsCommandInput}
 * @returns {@link ListReferenceImportJobsCommandOutput}
 * @see {@link ListReferenceImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListReferenceImportJobsCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 * @public
 */
export class ListReferenceImportJobsCommand extends $Command
  .classBuilder<
    ListReferenceImportJobsCommandInput,
    ListReferenceImportJobsCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "ListReferenceImportJobs", {})
  .n("OmicsClient", "ListReferenceImportJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListReferenceImportJobsCommand)
  .de(de_ListReferenceImportJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReferenceImportJobsRequest;
      output: ListReferenceImportJobsResponse;
    };
    sdk: {
      input: ListReferenceImportJobsCommandInput;
      output: ListReferenceImportJobsCommandOutput;
    };
  };
}
