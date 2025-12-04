// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetEventDataStoreRequest, GetEventDataStoreResponse } from "../models/models_0";
import { GetEventDataStore } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEventDataStoreCommand}.
 */
export interface GetEventDataStoreCommandInput extends GetEventDataStoreRequest {}
/**
 * @public
 *
 * The output of {@link GetEventDataStoreCommand}.
 */
export interface GetEventDataStoreCommandOutput extends GetEventDataStoreResponse, __MetadataBearer {}

/**
 * <p>Returns information about an event data store specified as either an ARN or the ID
 *          portion of the ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetEventDataStoreCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetEventDataStoreCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // GetEventDataStoreRequest
 *   EventDataStore: "STRING_VALUE", // required
 * };
 * const command = new GetEventDataStoreCommand(input);
 * const response = await client.send(command);
 * // { // GetEventDataStoreResponse
 * //   EventDataStoreArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Status: "CREATED" || "ENABLED" || "PENDING_DELETION" || "STARTING_INGESTION" || "STOPPING_INGESTION" || "STOPPED_INGESTION",
 * //   AdvancedEventSelectors: [ // AdvancedEventSelectors
 * //     { // AdvancedEventSelector
 * //       Name: "STRING_VALUE",
 * //       FieldSelectors: [ // AdvancedFieldSelectors // required
 * //         { // AdvancedFieldSelector
 * //           Field: "STRING_VALUE", // required
 * //           Equals: [ // Operator
 * //             "STRING_VALUE",
 * //           ],
 * //           StartsWith: [
 * //             "STRING_VALUE",
 * //           ],
 * //           EndsWith: [
 * //             "STRING_VALUE",
 * //           ],
 * //           NotEquals: [
 * //             "STRING_VALUE",
 * //           ],
 * //           NotStartsWith: [
 * //             "STRING_VALUE",
 * //           ],
 * //           NotEndsWith: "<Operator>",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   MultiRegionEnabled: true || false,
 * //   OrganizationEnabled: true || false,
 * //   RetentionPeriod: Number("int"),
 * //   TerminationProtectionEnabled: true || false,
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   KmsKeyId: "STRING_VALUE",
 * //   BillingMode: "EXTENDABLE_RETENTION_PRICING" || "FIXED_RETENTION_PRICING",
 * //   FederationStatus: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED",
 * //   FederationRoleArn: "STRING_VALUE",
 * //   PartitionKeys: [ // PartitionKeyList
 * //     { // PartitionKey
 * //       Name: "STRING_VALUE", // required
 * //       Type: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetEventDataStoreCommandInput - {@link GetEventDataStoreCommandInput}
 * @returns {@link GetEventDataStoreCommandOutput}
 * @see {@link GetEventDataStoreCommandInput} for command's `input` shape.
 * @see {@link GetEventDataStoreCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *  <p>The specified event data store ARN is not valid or does not map to an event data store
 *          in your account.</p>
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *  <p>The specified event data store was not found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
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
 *
 * @public
 */
export class GetEventDataStoreCommand extends $Command
  .classBuilder<
    GetEventDataStoreCommandInput,
    GetEventDataStoreCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudTrail_20131101", "GetEventDataStore", {})
  .n("CloudTrailClient", "GetEventDataStoreCommand")
  .sc(GetEventDataStore)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventDataStoreRequest;
      output: GetEventDataStoreResponse;
    };
    sdk: {
      input: GetEventDataStoreCommandInput;
      output: GetEventDataStoreCommandOutput;
    };
  };
}
