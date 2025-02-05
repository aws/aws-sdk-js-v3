// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSegmentSnapshotRequest, GetSegmentSnapshotResponse } from "../models/models_0";
import { de_GetSegmentSnapshotCommand, se_GetSegmentSnapshotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSegmentSnapshotCommand}.
 */
export interface GetSegmentSnapshotCommandInput extends GetSegmentSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link GetSegmentSnapshotCommand}.
 */
export interface GetSegmentSnapshotCommandOutput extends GetSegmentSnapshotResponse, __MetadataBearer {}

/**
 * <p>Retrieve the latest status of a segment snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetSegmentSnapshotCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetSegmentSnapshotCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetSegmentSnapshotRequest
 *   DomainName: "STRING_VALUE", // required
 *   SegmentDefinitionName: "STRING_VALUE", // required
 *   SnapshotId: "STRING_VALUE", // required
 * };
 * const command = new GetSegmentSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // GetSegmentSnapshotResponse
 * //   SnapshotId: "STRING_VALUE", // required
 * //   Status: "COMPLETED" || "IN_PROGRESS" || "FAILED", // required
 * //   StatusMessage: "STRING_VALUE",
 * //   DataFormat: "CSV" || "JSONL" || "ORC", // required
 * //   EncryptionKey: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * //   DestinationUri: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSegmentSnapshotCommandInput - {@link GetSegmentSnapshotCommandInput}
 * @returns {@link GetSegmentSnapshotCommandOutput}
 * @see {@link GetSegmentSnapshotCommandInput} for command's `input` shape.
 * @see {@link GetSegmentSnapshotCommandOutput} for command's `response` shape.
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
export class GetSegmentSnapshotCommand extends $Command
  .classBuilder<
    GetSegmentSnapshotCommandInput,
    GetSegmentSnapshotCommandOutput,
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
  .s("CustomerProfiles_20200815", "GetSegmentSnapshot", {})
  .n("CustomerProfilesClient", "GetSegmentSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_GetSegmentSnapshotCommand)
  .de(de_GetSegmentSnapshotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSegmentSnapshotRequest;
      output: GetSegmentSnapshotResponse;
    };
    sdk: {
      input: GetSegmentSnapshotCommandInput;
      output: GetSegmentSnapshotCommandOutput;
    };
  };
}
