// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListReadSetImportJobsRequest, ListReadSetImportJobsResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { ListReadSetImportJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReadSetImportJobsCommand}.
 */
export interface ListReadSetImportJobsCommandInput extends ListReadSetImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListReadSetImportJobsCommand}.
 */
export interface ListReadSetImportJobsCommandOutput extends ListReadSetImportJobsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of read set import jobs and returns the data in JSON format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListReadSetImportJobsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListReadSetImportJobsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListReadSetImportJobsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sequenceStoreId: "STRING_VALUE", // required
 *   filter: { // ImportReadSetFilter
 *     status: "STRING_VALUE",
 *     createdAfter: new Date("TIMESTAMP"),
 *     createdBefore: new Date("TIMESTAMP"),
 *   },
 * };
 * const command = new ListReadSetImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListReadSetImportJobsResponse
 * //   nextToken: "STRING_VALUE",
 * //   importJobs: [ // ImportReadSetJobList
 * //     { // ImportReadSetJobItem
 * //       id: "STRING_VALUE", // required
 * //       sequenceStoreId: "STRING_VALUE", // required
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
 * @param ListReadSetImportJobsCommandInput - {@link ListReadSetImportJobsCommandInput}
 * @returns {@link ListReadSetImportJobsCommandOutput}
 * @see {@link ListReadSetImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListReadSetImportJobsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListReadSetImportJobsCommand extends $Command
  .classBuilder<
    ListReadSetImportJobsCommandInput,
    ListReadSetImportJobsCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "ListReadSetImportJobs", {})
  .n("OmicsClient", "ListReadSetImportJobsCommand")
  .sc(ListReadSetImportJobs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReadSetImportJobsRequest;
      output: ListReadSetImportJobsResponse;
    };
    sdk: {
      input: ListReadSetImportJobsCommandInput;
      output: ListReadSetImportJobsCommandOutput;
    };
  };
}
