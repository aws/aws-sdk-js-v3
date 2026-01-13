// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CustomerProfilesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListEventTriggersRequest, ListEventTriggersResponse } from "../models/models_0";
import { ListEventTriggers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventTriggersCommand}.
 */
export interface ListEventTriggersCommandInput extends ListEventTriggersRequest {}
/**
 * @public
 *
 * The output of {@link ListEventTriggersCommand}.
 */
export interface ListEventTriggersCommandOutput extends ListEventTriggersResponse, __MetadataBearer {}

/**
 * <p>List all Event Triggers under a domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListEventTriggersCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListEventTriggersCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListEventTriggersRequest
 *   DomainName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEventTriggersCommand(input);
 * const response = await client.send(command);
 * // { // ListEventTriggersResponse
 * //   Items: [ // EventTriggerSummaryList
 * //     { // EventTriggerSummaryItem
 * //       ObjectTypeName: "STRING_VALUE",
 * //       EventTriggerName: "STRING_VALUE",
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
 * @param ListEventTriggersCommandInput - {@link ListEventTriggersCommandInput}
 * @returns {@link ListEventTriggersCommandOutput}
 * @see {@link ListEventTriggersCommandInput} for command's `input` shape.
 * @see {@link ListEventTriggersCommandOutput} for command's `response` shape.
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
export class ListEventTriggersCommand extends $Command
  .classBuilder<
    ListEventTriggersCommandInput,
    ListEventTriggersCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "ListEventTriggers", {})
  .n("CustomerProfilesClient", "ListEventTriggersCommand")
  .sc(ListEventTriggers$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventTriggersRequest;
      output: ListEventTriggersResponse;
    };
    sdk: {
      input: ListEventTriggersCommandInput;
      output: ListEventTriggersCommandOutput;
    };
  };
}
