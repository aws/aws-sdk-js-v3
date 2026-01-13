// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListOrganizationsRequest, ListOrganizationsResponse } from "../models/models_0";
import { ListOrganizations$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOrganizationsCommand}.
 */
export interface ListOrganizationsCommandInput extends ListOrganizationsRequest {}
/**
 * @public
 *
 * The output of {@link ListOrganizationsCommand}.
 */
export interface ListOrganizationsCommandOutput extends ListOrganizationsResponse, __MetadataBearer {}

/**
 * <p>Returns summaries of the customer's organizations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListOrganizationsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListOrganizationsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // ListOrganizationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListOrganizationsCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationsResponse
 * //   OrganizationSummaries: [ // OrganizationSummaries
 * //     { // OrganizationSummary
 * //       OrganizationId: "STRING_VALUE",
 * //       Alias: "STRING_VALUE",
 * //       DefaultMailDomain: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOrganizationsCommandInput - {@link ListOrganizationsCommandInput}
 * @returns {@link ListOrganizationsCommandOutput}
 * @see {@link ListOrganizationsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class ListOrganizationsCommand extends $Command
  .classBuilder<
    ListOrganizationsCommandInput,
    ListOrganizationsCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "ListOrganizations", {})
  .n("WorkMailClient", "ListOrganizationsCommand")
  .sc(ListOrganizations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOrganizationsRequest;
      output: ListOrganizationsResponse;
    };
    sdk: {
      input: ListOrganizationsCommandInput;
      output: ListOrganizationsCommandOutput;
    };
  };
}
