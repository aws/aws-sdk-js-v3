// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListCalculatedAttributeDefinitionsRequest,
  ListCalculatedAttributeDefinitionsResponse,
  ListCalculatedAttributeDefinitionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListCalculatedAttributeDefinitionsCommand,
  se_ListCalculatedAttributeDefinitionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCalculatedAttributeDefinitionsCommand}.
 */
export interface ListCalculatedAttributeDefinitionsCommandInput extends ListCalculatedAttributeDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListCalculatedAttributeDefinitionsCommand}.
 */
export interface ListCalculatedAttributeDefinitionsCommandOutput
  extends ListCalculatedAttributeDefinitionsResponse,
    __MetadataBearer {}

/**
 * <p>Lists calculated attribute definitions for Customer Profiles</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListCalculatedAttributeDefinitionsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListCalculatedAttributeDefinitionsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListCalculatedAttributeDefinitionsRequest
 *   DomainName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCalculatedAttributeDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListCalculatedAttributeDefinitionsResponse
 * //   Items: [ // CalculatedAttributeDefinitionsList
 * //     { // ListCalculatedAttributeDefinitionItem
 * //       CalculatedAttributeName: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCalculatedAttributeDefinitionsCommandInput - {@link ListCalculatedAttributeDefinitionsCommandInput}
 * @returns {@link ListCalculatedAttributeDefinitionsCommandOutput}
 * @see {@link ListCalculatedAttributeDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListCalculatedAttributeDefinitionsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListCalculatedAttributeDefinitionsCommand extends $Command
  .classBuilder<
    ListCalculatedAttributeDefinitionsCommandInput,
    ListCalculatedAttributeDefinitionsCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "ListCalculatedAttributeDefinitions", {})
  .n("CustomerProfilesClient", "ListCalculatedAttributeDefinitionsCommand")
  .f(void 0, ListCalculatedAttributeDefinitionsResponseFilterSensitiveLog)
  .ser(se_ListCalculatedAttributeDefinitionsCommand)
  .de(de_ListCalculatedAttributeDefinitionsCommand)
  .build() {}
