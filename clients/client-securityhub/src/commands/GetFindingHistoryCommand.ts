// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetFindingHistoryRequest, GetFindingHistoryResponse } from "../models/models_2";
import { GetFindingHistory } from "../schemas/schemas_0";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFindingHistoryCommand}.
 */
export interface GetFindingHistoryCommandInput extends GetFindingHistoryRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingHistoryCommand}.
 */
export interface GetFindingHistoryCommandOutput extends GetFindingHistoryResponse, __MetadataBearer {}

/**
 * <p>
 *          Returns the history of a Security Hub finding. The history includes changes made to any fields in
 *          the Amazon Web Services Security Finding Format (ASFF) except top-level timestamp fields, such as the <code>CreatedAt</code> and
 *          <code>UpdatedAt</code> fields.
 *       </p>
 *          <p>This operation might return fewer results than the maximum number of results (<code>MaxResults</code>) specified in a request, even
 *          when more results are available. If this occurs, the response includes a <code>NextToken</code> value, which you should use to retrieve
 *          the next set of results in the response. The presence of a <code>NextToken</code> value in a response doesn't necessarily indicate
 *          that the results are incomplete. However, you should continue to specify a <code>NextToken</code> value until you receive a
 *          response that doesn't include this value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetFindingHistoryCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetFindingHistoryCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // GetFindingHistoryRequest
 *   FindingIdentifier: { // AwsSecurityFindingIdentifier
 *     Id: "STRING_VALUE", // required
 *     ProductArn: "STRING_VALUE", // required
 *   },
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetFindingHistoryCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingHistoryResponse
 * //   Records: [ // FindingHistoryRecordList
 * //     { // FindingHistoryRecord
 * //       FindingIdentifier: { // AwsSecurityFindingIdentifier
 * //         Id: "STRING_VALUE", // required
 * //         ProductArn: "STRING_VALUE", // required
 * //       },
 * //       UpdateTime: new Date("TIMESTAMP"),
 * //       FindingCreated: true || false,
 * //       UpdateSource: { // FindingHistoryUpdateSource
 * //         Type: "BATCH_UPDATE_FINDINGS" || "BATCH_IMPORT_FINDINGS",
 * //         Identity: "STRING_VALUE",
 * //       },
 * //       Updates: [ // FindingHistoryUpdatesList
 * //         { // FindingHistoryUpdate
 * //           UpdatedField: "STRING_VALUE",
 * //           OldValue: "STRING_VALUE",
 * //           NewValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //       NextToken: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFindingHistoryCommandInput - {@link GetFindingHistoryCommandInput}
 * @returns {@link GetFindingHistoryCommandOutput}
 * @see {@link GetFindingHistoryCommandInput} for command's `input` shape.
 * @see {@link GetFindingHistoryCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @public
 */
export class GetFindingHistoryCommand extends $Command
  .classBuilder<
    GetFindingHistoryCommandInput,
    GetFindingHistoryCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "GetFindingHistory", {})
  .n("SecurityHubClient", "GetFindingHistoryCommand")
  .sc(GetFindingHistory)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFindingHistoryRequest;
      output: GetFindingHistoryResponse;
    };
    sdk: {
      input: GetFindingHistoryCommandInput;
      output: GetFindingHistoryCommandOutput;
    };
  };
}
