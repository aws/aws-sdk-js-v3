// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListComplianceItemsRequest, ListComplianceItemsResult } from "../models/models_1";
import { ListComplianceItems } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListComplianceItemsCommand}.
 */
export interface ListComplianceItemsCommandInput extends ListComplianceItemsRequest {}
/**
 * @public
 *
 * The output of {@link ListComplianceItemsCommand}.
 */
export interface ListComplianceItemsCommandOutput extends ListComplianceItemsResult, __MetadataBearer {}

/**
 * <p>For a specified resource ID, this API operation returns a list of compliance statuses for
 *    different resource types. Currently, you can only specify one resource ID per call. List results
 *    depend on the criteria specified in the filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListComplianceItemsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListComplianceItemsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ListComplianceItemsRequest
 *   Filters: [ // ComplianceStringFilterList
 *     { // ComplianceStringFilter
 *       Key: "STRING_VALUE",
 *       Values: [ // ComplianceStringFilterValueList
 *         "STRING_VALUE",
 *       ],
 *       Type: "EQUAL" || "NOT_EQUAL" || "BEGIN_WITH" || "LESS_THAN" || "GREATER_THAN",
 *     },
 *   ],
 *   ResourceIds: [ // ComplianceResourceIdList
 *     "STRING_VALUE",
 *   ],
 *   ResourceTypes: [ // ComplianceResourceTypeList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListComplianceItemsCommand(input);
 * const response = await client.send(command);
 * // { // ListComplianceItemsResult
 * //   ComplianceItems: [ // ComplianceItemList
 * //     { // ComplianceItem
 * //       ComplianceType: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       Status: "COMPLIANT" || "NON_COMPLIANT",
 * //       Severity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNSPECIFIED",
 * //       ExecutionSummary: { // ComplianceExecutionSummary
 * //         ExecutionTime: new Date("TIMESTAMP"), // required
 * //         ExecutionId: "STRING_VALUE",
 * //         ExecutionType: "STRING_VALUE",
 * //       },
 * //       Details: { // ComplianceItemDetails
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListComplianceItemsCommandInput - {@link ListComplianceItemsCommandInput}
 * @returns {@link ListComplianceItemsCommandOutput}
 * @see {@link ListComplianceItemsCommandInput} for command's `input` shape.
 * @see {@link ListComplianceItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidFilter} (client fault)
 *  <p>The filter name isn't valid. Verify that you entered the correct name and try again.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link InvalidResourceId} (client fault)
 *  <p>The resource ID isn't valid. Verify that you entered the correct ID and try again.</p>
 *
 * @throws {@link InvalidResourceType} (client fault)
 *  <p>The resource type isn't valid. For example, if you are attempting to tag an EC2 instance,
 *    the instance must be a registered managed node.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class ListComplianceItemsCommand extends $Command
  .classBuilder<
    ListComplianceItemsCommandInput,
    ListComplianceItemsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "ListComplianceItems", {})
  .n("SSMClient", "ListComplianceItemsCommand")
  .sc(ListComplianceItems)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListComplianceItemsRequest;
      output: ListComplianceItemsResult;
    };
    sdk: {
      input: ListComplianceItemsCommandInput;
      output: ListComplianceItemsCommandOutput;
    };
  };
}
