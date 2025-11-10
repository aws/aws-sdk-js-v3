// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetGraphMemberDatasourcesRequest, BatchGetGraphMemberDatasourcesResponse } from "../models/models_0";
import { BatchGetGraphMemberDatasources } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetGraphMemberDatasourcesCommand}.
 */
export interface BatchGetGraphMemberDatasourcesCommandInput extends BatchGetGraphMemberDatasourcesRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetGraphMemberDatasourcesCommand}.
 */
export interface BatchGetGraphMemberDatasourcesCommandOutput
  extends BatchGetGraphMemberDatasourcesResponse,
    __MetadataBearer {}

/**
 * <p>Gets data source package information for the behavior graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, BatchGetGraphMemberDatasourcesCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, BatchGetGraphMemberDatasourcesCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // BatchGetGraphMemberDatasourcesRequest
 *   GraphArn: "STRING_VALUE", // required
 *   AccountIds: [ // AccountIdExtendedList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetGraphMemberDatasourcesCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetGraphMemberDatasourcesResponse
 * //   MemberDatasources: [ // MembershipDatasourcesList
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
 * //   UnprocessedAccounts: [ // UnprocessedAccountList
 * //     { // UnprocessedAccount
 * //       AccountId: "STRING_VALUE",
 * //       Reason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetGraphMemberDatasourcesCommandInput - {@link BatchGetGraphMemberDatasourcesCommandInput}
 * @returns {@link BatchGetGraphMemberDatasourcesCommandOutput}
 * @see {@link BatchGetGraphMemberDatasourcesCommandInput} for command's `input` shape.
 * @see {@link BatchGetGraphMemberDatasourcesCommandOutput} for command's `response` shape.
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
export class BatchGetGraphMemberDatasourcesCommand extends $Command
  .classBuilder<
    BatchGetGraphMemberDatasourcesCommandInput,
    BatchGetGraphMemberDatasourcesCommandOutput,
    DetectiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DetectiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDetective", "BatchGetGraphMemberDatasources", {})
  .n("DetectiveClient", "BatchGetGraphMemberDatasourcesCommand")
  .sc(BatchGetGraphMemberDatasources)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetGraphMemberDatasourcesRequest;
      output: BatchGetGraphMemberDatasourcesResponse;
    };
    sdk: {
      input: BatchGetGraphMemberDatasourcesCommandInput;
      output: BatchGetGraphMemberDatasourcesCommandOutput;
    };
  };
}
