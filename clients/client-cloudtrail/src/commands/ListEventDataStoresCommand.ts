// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEventDataStoresRequest, ListEventDataStoresResponse } from "../models/models_0";
import { de_ListEventDataStoresCommand, se_ListEventDataStoresCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventDataStoresCommand}.
 */
export interface ListEventDataStoresCommandInput extends ListEventDataStoresRequest {}
/**
 * @public
 *
 * The output of {@link ListEventDataStoresCommand}.
 */
export interface ListEventDataStoresCommandOutput extends ListEventDataStoresResponse, __MetadataBearer {}

/**
 * <p>Returns information about all event data stores in the account, in the current
 *          Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, ListEventDataStoresCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, ListEventDataStoresCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudTrailClient(config);
 * const input = { // ListEventDataStoresRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEventDataStoresCommand(input);
 * const response = await client.send(command);
 * // { // ListEventDataStoresResponse
 * //   EventDataStores: [ // EventDataStores
 * //     { // EventDataStore
 * //       EventDataStoreArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       TerminationProtectionEnabled: true || false,
 * //       Status: "CREATED" || "ENABLED" || "PENDING_DELETION" || "STARTING_INGESTION" || "STOPPING_INGESTION" || "STOPPED_INGESTION",
 * //       AdvancedEventSelectors: [ // AdvancedEventSelectors
 * //         { // AdvancedEventSelector
 * //           Name: "STRING_VALUE",
 * //           FieldSelectors: [ // AdvancedFieldSelectors // required
 * //             { // AdvancedFieldSelector
 * //               Field: "STRING_VALUE", // required
 * //               Equals: [ // Operator
 * //                 "STRING_VALUE",
 * //               ],
 * //               StartsWith: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               EndsWith: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               NotEquals: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               NotStartsWith: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               NotEndsWith: "<Operator>",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       MultiRegionEnabled: true || false,
 * //       OrganizationEnabled: true || false,
 * //       RetentionPeriod: Number("int"),
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventDataStoresCommandInput - {@link ListEventDataStoresCommandInput}
 * @returns {@link ListEventDataStoresCommandOutput}
 * @see {@link ListEventDataStoresCommandInput} for command's `input` shape.
 * @see {@link ListEventDataStoresCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *  <p>This exception is thrown if the limit specified is not valid.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>A token that is not valid, or a token that was previously used in a request with
 *          different parameters. This exception is thrown if the token is not valid.</p>
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *  <p> This exception is thrown when the management account does not have a service-linked
 *          role. </p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 * @public
 */
export class ListEventDataStoresCommand extends $Command
  .classBuilder<
    ListEventDataStoresCommandInput,
    ListEventDataStoresCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudTrail_20131101", "ListEventDataStores", {})
  .n("CloudTrailClient", "ListEventDataStoresCommand")
  .f(void 0, void 0)
  .ser(se_ListEventDataStoresCommand)
  .de(de_ListEventDataStoresCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventDataStoresRequest;
      output: ListEventDataStoresResponse;
    };
    sdk: {
      input: ListEventDataStoresCommandInput;
      output: ListEventDataStoresCommandOutput;
    };
  };
}
