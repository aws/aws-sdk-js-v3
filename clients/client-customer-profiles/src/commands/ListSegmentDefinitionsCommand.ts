// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListSegmentDefinitionsRequest,
  ListSegmentDefinitionsResponse,
  ListSegmentDefinitionsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListSegmentDefinitionsCommand, se_ListSegmentDefinitionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSegmentDefinitionsCommand}.
 */
export interface ListSegmentDefinitionsCommandInput extends ListSegmentDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSegmentDefinitionsCommand}.
 */
export interface ListSegmentDefinitionsCommandOutput extends ListSegmentDefinitionsResponse, __MetadataBearer {}

/**
 * <p>Lists all segment definitions under a domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListSegmentDefinitionsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListSegmentDefinitionsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListSegmentDefinitionsRequest
 *   DomainName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSegmentDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSegmentDefinitionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Items: [ // SegmentDefinitionsList
 * //     { // SegmentDefinitionItem
 * //       SegmentDefinitionName: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       SegmentDefinitionArn: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSegmentDefinitionsCommandInput - {@link ListSegmentDefinitionsCommandInput}
 * @returns {@link ListSegmentDefinitionsCommandOutput}
 * @see {@link ListSegmentDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListSegmentDefinitionsCommandOutput} for command's `response` shape.
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
export class ListSegmentDefinitionsCommand extends $Command
  .classBuilder<
    ListSegmentDefinitionsCommandInput,
    ListSegmentDefinitionsCommandOutput,
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
  .s("CustomerProfiles_20200815", "ListSegmentDefinitions", {})
  .n("CustomerProfilesClient", "ListSegmentDefinitionsCommand")
  .f(void 0, ListSegmentDefinitionsResponseFilterSensitiveLog)
  .ser(se_ListSegmentDefinitionsCommand)
  .de(de_ListSegmentDefinitionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSegmentDefinitionsRequest;
      output: ListSegmentDefinitionsResponse;
    };
    sdk: {
      input: ListSegmentDefinitionsCommandInput;
      output: ListSegmentDefinitionsCommandOutput;
    };
  };
}
