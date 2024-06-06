// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { ListComplianceStatusRequest, ListComplianceStatusResponse } from "../models/models_0";
import { de_ListComplianceStatusCommand, se_ListComplianceStatusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListComplianceStatusCommand}.
 */
export interface ListComplianceStatusCommandInput extends ListComplianceStatusRequest {}
/**
 * @public
 *
 * The output of {@link ListComplianceStatusCommand}.
 */
export interface ListComplianceStatusCommandOutput extends ListComplianceStatusResponse, __MetadataBearer {}

/**
 * <p>Returns an array of <code>PolicyComplianceStatus</code> objects. Use
 *         <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected
 *       by the specified policy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListComplianceStatusCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListComplianceStatusCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const input = { // ListComplianceStatusRequest
 *   PolicyId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListComplianceStatusCommand(input);
 * const response = await client.send(command);
 * // { // ListComplianceStatusResponse
 * //   PolicyComplianceStatusList: [ // PolicyComplianceStatusList
 * //     { // PolicyComplianceStatus
 * //       PolicyOwner: "STRING_VALUE",
 * //       PolicyId: "STRING_VALUE",
 * //       PolicyName: "STRING_VALUE",
 * //       MemberAccount: "STRING_VALUE",
 * //       EvaluationResults: [ // EvaluationResults
 * //         { // EvaluationResult
 * //           ComplianceStatus: "COMPLIANT" || "NON_COMPLIANT",
 * //           ViolatorCount: Number("long"),
 * //           EvaluationLimitExceeded: true || false,
 * //         },
 * //       ],
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       IssueInfoMap: { // IssueInfoMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListComplianceStatusCommandInput - {@link ListComplianceStatusCommandInput}
 * @returns {@link ListComplianceStatusCommandOutput}
 * @see {@link ListComplianceStatusCommandInput} for command's `input` shape.
 * @see {@link ListComplianceStatusCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 * @public
 */
export class ListComplianceStatusCommand extends $Command
  .classBuilder<
    ListComplianceStatusCommandInput,
    ListComplianceStatusCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSFMS_20180101", "ListComplianceStatus", {})
  .n("FMSClient", "ListComplianceStatusCommand")
  .f(void 0, void 0)
  .ser(se_ListComplianceStatusCommand)
  .de(de_ListComplianceStatusCommand)
  .build() {}
