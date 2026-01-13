// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetMembershipDatasourcesRequest, BatchGetMembershipDatasourcesResponse } from "../models/models_0";
import { BatchGetMembershipDatasources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetMembershipDatasourcesCommand}.
 */
export interface BatchGetMembershipDatasourcesCommandInput extends BatchGetMembershipDatasourcesRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetMembershipDatasourcesCommand}.
 */
export interface BatchGetMembershipDatasourcesCommandOutput extends BatchGetMembershipDatasourcesResponse, __MetadataBearer {}

/**
 * <p>Gets information on the data source package history for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, BatchGetMembershipDatasourcesCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, BatchGetMembershipDatasourcesCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // BatchGetMembershipDatasourcesRequest
 *   GraphArns: [ // GraphArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetMembershipDatasourcesCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetMembershipDatasourcesResponse
 * //   MembershipDatasources: [ // MembershipDatasourcesList
 * //     { // MembershipDatasources
 * //       AccountId: "STRING_VALUE",
 * //       GraphArn: "STRING_VALUE",
 * //       DatasourcePackageIngestHistory: { // DatasourcePackageIngestHistory
 * //         "<keys>": { // LastIngestStateChangeDates
 * //           "<keys>": { // TimestampForCollection
 * //             Timestamp: new Date("TIMESTAMP"),
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   UnprocessedGraphs: [ // UnprocessedGraphList
 * //     { // UnprocessedGraph
 * //       GraphArn: "STRING_VALUE",
 * //       Reason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetMembershipDatasourcesCommandInput - {@link BatchGetMembershipDatasourcesCommandInput}
 * @returns {@link BatchGetMembershipDatasourcesCommandOutput}
 * @see {@link BatchGetMembershipDatasourcesCommandInput} for command's `input` shape.
 * @see {@link BatchGetMembershipDatasourcesCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request refers to a nonexistent resource.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 *
 * @public
 */
export class BatchGetMembershipDatasourcesCommand extends $Command
  .classBuilder<
    BatchGetMembershipDatasourcesCommandInput,
    BatchGetMembershipDatasourcesCommandOutput,
    DetectiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DetectiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDetective", "BatchGetMembershipDatasources", {})
  .n("DetectiveClient", "BatchGetMembershipDatasourcesCommand")
  .sc(BatchGetMembershipDatasources$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetMembershipDatasourcesRequest;
      output: BatchGetMembershipDatasourcesResponse;
    };
    sdk: {
      input: BatchGetMembershipDatasourcesCommandInput;
      output: BatchGetMembershipDatasourcesCommandOutput;
    };
  };
}
