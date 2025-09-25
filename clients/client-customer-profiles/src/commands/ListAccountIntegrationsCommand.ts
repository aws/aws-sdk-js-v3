// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAccountIntegrationsRequest, ListAccountIntegrationsResponse } from "../models/models_0";
import { ListAccountIntegrations } from "../schemas/schemas_7_Integration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccountIntegrationsCommand}.
 */
export interface ListAccountIntegrationsCommandInput extends ListAccountIntegrationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountIntegrationsCommand}.
 */
export interface ListAccountIntegrationsCommandOutput extends ListAccountIntegrationsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the integrations associated to a specific URI in the AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListAccountIntegrationsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListAccountIntegrationsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListAccountIntegrationsRequest
 *   Uri: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   IncludeHidden: true || false,
 * };
 * const command = new ListAccountIntegrationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountIntegrationsResponse
 * //   Items: [ // IntegrationList
 * //     { // ListIntegrationItem
 * //       DomainName: "STRING_VALUE", // required
 * //       Uri: "STRING_VALUE", // required
 * //       ObjectTypeName: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ObjectTypeNames: { // ObjectTypeNames
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       WorkflowId: "STRING_VALUE",
 * //       IsUnstructured: true || false,
 * //       RoleArn: "STRING_VALUE",
 * //       EventTriggerNames: [ // EventTriggerNames
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountIntegrationsCommandInput - {@link ListAccountIntegrationsCommandInput}
 * @returns {@link ListAccountIntegrationsCommandOutput}
 * @see {@link ListAccountIntegrationsCommandInput} for command's `input` shape.
 * @see {@link ListAccountIntegrationsCommandOutput} for command's `response` shape.
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
export class ListAccountIntegrationsCommand extends $Command
  .classBuilder<
    ListAccountIntegrationsCommandInput,
    ListAccountIntegrationsCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "ListAccountIntegrations", {})
  .n("CustomerProfilesClient", "ListAccountIntegrationsCommand")
  .sc(ListAccountIntegrations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountIntegrationsRequest;
      output: ListAccountIntegrationsResponse;
    };
    sdk: {
      input: ListAccountIntegrationsCommandInput;
      output: ListAccountIntegrationsCommandOutput;
    };
  };
}
