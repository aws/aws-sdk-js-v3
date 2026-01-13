// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListImportJobsRequest, ListImportJobsResponse } from "../models/models_1";
import type { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { ListImportJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListImportJobsCommand}.
 */
export interface ListImportJobsCommandInput extends ListImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListImportJobsCommand}.
 */
export interface ListImportJobsCommandOutput extends ListImportJobsResponse, __MetadataBearer {}

/**
 * <p>Lists information about import jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, ListImportJobsCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, ListImportJobsCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // ListImportJobsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   knowledgeBaseId: "STRING_VALUE", // required
 * };
 * const command = new ListImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListImportJobsResponse
 * //   importJobSummaries: [ // ImportJobList // required
 * //     { // ImportJobSummary
 * //       importJobId: "STRING_VALUE", // required
 * //       knowledgeBaseId: "STRING_VALUE", // required
 * //       uploadId: "STRING_VALUE", // required
 * //       knowledgeBaseArn: "STRING_VALUE", // required
 * //       importJobType: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       createdTime: new Date("TIMESTAMP"), // required
 * //       lastModifiedTime: new Date("TIMESTAMP"), // required
 * //       metadata: { // ContentMetadata
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       externalSourceConfiguration: { // ExternalSourceConfiguration
 * //         source: "STRING_VALUE", // required
 * //         configuration: { // Configuration Union: only one key present
 * //           connectConfiguration: { // ConnectConfiguration
 * //             instanceId: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImportJobsCommandInput - {@link ListImportJobsCommandInput}
 * @returns {@link ListImportJobsCommandOutput}
 * @see {@link ListImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListImportJobsCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 *
 * @public
 */
export class ListImportJobsCommand extends $Command
  .classBuilder<
    ListImportJobsCommandInput,
    ListImportJobsCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "ListImportJobs", {})
  .n("QConnectClient", "ListImportJobsCommand")
  .sc(ListImportJobs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImportJobsRequest;
      output: ListImportJobsResponse;
    };
    sdk: {
      input: ListImportJobsCommandInput;
      output: ListImportJobsCommandOutput;
    };
  };
}
