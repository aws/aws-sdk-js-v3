// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListReadSetExportJobsRequest, ListReadSetExportJobsResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { ListReadSetExportJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReadSetExportJobsCommand}.
 */
export interface ListReadSetExportJobsCommandInput extends ListReadSetExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListReadSetExportJobsCommand}.
 */
export interface ListReadSetExportJobsCommandOutput extends ListReadSetExportJobsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of read set export jobs in a JSON formatted response. This API operation is used to check the status of a read set export job initiated by the <code>StartReadSetExportJob</code> API operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListReadSetExportJobsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListReadSetExportJobsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListReadSetExportJobsRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filter: { // ExportReadSetFilter
 *     status: "STRING_VALUE",
 *     createdAfter: new Date("TIMESTAMP"),
 *     createdBefore: new Date("TIMESTAMP"),
 *   },
 * };
 * const command = new ListReadSetExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListReadSetExportJobsResponse
 * //   nextToken: "STRING_VALUE",
 * //   exportJobs: [ // ExportReadSetJobDetailList
 * //     { // ExportReadSetJobDetail
 * //       id: "STRING_VALUE", // required
 * //       sequenceStoreId: "STRING_VALUE", // required
 * //       destination: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       completionTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReadSetExportJobsCommandInput - {@link ListReadSetExportJobsCommandInput}
 * @returns {@link ListReadSetExportJobsCommandOutput}
 * @see {@link ListReadSetExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListReadSetExportJobsCommandOutput} for command's `response` shape.
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
export class ListReadSetExportJobsCommand extends $Command
  .classBuilder<
    ListReadSetExportJobsCommandInput,
    ListReadSetExportJobsCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "ListReadSetExportJobs", {})
  .n("OmicsClient", "ListReadSetExportJobsCommand")
  .sc(ListReadSetExportJobs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReadSetExportJobsRequest;
      output: ListReadSetExportJobsResponse;
    };
    sdk: {
      input: ListReadSetExportJobsCommandInput;
      output: ListReadSetExportJobsCommandOutput;
    };
  };
}
