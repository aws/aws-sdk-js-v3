// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchEmailAddressesResponse, SearchEmailAddressesResponseFilterSensitiveLog } from "../models/models_2";
import { SearchEmailAddressesRequest } from "../models/models_3";
import { de_SearchEmailAddressesCommand, se_SearchEmailAddressesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchEmailAddressesCommand}.
 */
export interface SearchEmailAddressesCommandInput extends SearchEmailAddressesRequest {}
/**
 * @public
 *
 * The output of {@link SearchEmailAddressesCommand}.
 */
export interface SearchEmailAddressesCommandOutput extends SearchEmailAddressesResponse, __MetadataBearer {}

/**
 * <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchEmailAddressesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchEmailAddressesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // SearchEmailAddressesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SearchCriteria: { // EmailAddressSearchCriteria
 *     OrConditions: [ // EmailAddressSearchConditionList
 *       {
 *         OrConditions: [
 *           "<EmailAddressSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<EmailAddressSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<EmailAddressSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *   },
 *   SearchFilter: { // EmailAddressSearchFilter
 *     TagFilter: { // ControlPlaneTagFilter
 *       OrConditions: [ // TagOrConditionList
 *         [ // TagAndConditionList
 *           { // TagCondition
 *             TagKey: "STRING_VALUE",
 *             TagValue: "STRING_VALUE",
 *           },
 *         ],
 *       ],
 *       AndConditions: [
 *         {
 *           TagKey: "STRING_VALUE",
 *           TagValue: "STRING_VALUE",
 *         },
 *       ],
 *       TagCondition: "<TagCondition>",
 *     },
 *   },
 * };
 * const command = new SearchEmailAddressesCommand(input);
 * const response = await client.send(command);
 * // { // SearchEmailAddressesResponse
 * //   NextToken: "STRING_VALUE",
 * //   EmailAddresses: [ // EmailAddressList
 * //     { // EmailAddressMetadata
 * //       EmailAddressId: "STRING_VALUE",
 * //       EmailAddressArn: "STRING_VALUE",
 * //       EmailAddress: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchEmailAddressesCommandInput - {@link SearchEmailAddressesCommandInput}
 * @returns {@link SearchEmailAddressesCommandOutput}
 * @see {@link SearchEmailAddressesCommandInput} for command's `input` shape.
 * @see {@link SearchEmailAddressesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class SearchEmailAddressesCommand extends $Command
  .classBuilder<
    SearchEmailAddressesCommandInput,
    SearchEmailAddressesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "SearchEmailAddresses", {})
  .n("ConnectClient", "SearchEmailAddressesCommand")
  .f(void 0, SearchEmailAddressesResponseFilterSensitiveLog)
  .ser(se_SearchEmailAddressesCommand)
  .de(de_SearchEmailAddressesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchEmailAddressesRequest;
      output: SearchEmailAddressesResponse;
    };
    sdk: {
      input: SearchEmailAddressesCommandInput;
      output: SearchEmailAddressesCommandOutput;
    };
  };
}
