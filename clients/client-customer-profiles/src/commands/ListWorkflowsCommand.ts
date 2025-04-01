// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListWorkflowsRequest, ListWorkflowsResponse } from "../models/models_0";
import { de_ListWorkflowsCommand, se_ListWorkflowsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkflowsCommand}.
 */
export interface ListWorkflowsCommandInput extends ListWorkflowsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowsCommand}.
 */
export interface ListWorkflowsCommandOutput extends ListWorkflowsResponse, __MetadataBearer {}

/**
 * <p>Query to list all workflows.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListWorkflowsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListWorkflowsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListWorkflowsRequest
 *   DomainName: "STRING_VALUE", // required
 *   WorkflowType: "APPFLOW_INTEGRATION",
 *   Status: "NOT_STARTED" || "IN_PROGRESS" || "COMPLETE" || "FAILED" || "SPLIT" || "RETRY" || "CANCELLED",
 *   QueryStartDate: new Date("TIMESTAMP"),
 *   QueryEndDate: new Date("TIMESTAMP"),
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListWorkflowsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowsResponse
 * //   Items: [ // WorkflowList
 * //     { // ListWorkflowsItem
 * //       WorkflowType: "APPFLOW_INTEGRATION", // required
 * //       WorkflowId: "STRING_VALUE", // required
 * //       Status: "NOT_STARTED" || "IN_PROGRESS" || "COMPLETE" || "FAILED" || "SPLIT" || "RETRY" || "CANCELLED", // required
 * //       StatusDescription: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkflowsCommandInput - {@link ListWorkflowsCommandInput}
 * @returns {@link ListWorkflowsCommandOutput}
 * @see {@link ListWorkflowsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowsCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class ListWorkflowsCommand extends $Command
  .classBuilder<
    ListWorkflowsCommandInput,
    ListWorkflowsCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "ListWorkflows", {})
  .n("CustomerProfilesClient", "ListWorkflowsCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkflowsCommand)
  .de(de_ListWorkflowsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkflowsRequest;
      output: ListWorkflowsResponse;
    };
    sdk: {
      input: ListWorkflowsCommandInput;
      output: ListWorkflowsCommandOutput;
    };
  };
}
