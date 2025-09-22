// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSegmentSnapshotRequest, CreateSegmentSnapshotResponse } from "../models/models_0";
import { CreateSegmentSnapshot } from "../schemas/schemas_29_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSegmentSnapshotCommand}.
 */
export interface CreateSegmentSnapshotCommandInput extends CreateSegmentSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link CreateSegmentSnapshotCommand}.
 */
export interface CreateSegmentSnapshotCommandOutput extends CreateSegmentSnapshotResponse, __MetadataBearer {}

/**
 * <p>Triggers a job to export a segment to a specified destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, CreateSegmentSnapshotCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, CreateSegmentSnapshotCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // CreateSegmentSnapshotRequest
 *   DomainName: "STRING_VALUE", // required
 *   SegmentDefinitionName: "STRING_VALUE", // required
 *   DataFormat: "CSV" || "JSONL" || "ORC", // required
 *   EncryptionKey: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE",
 *   DestinationUri: "STRING_VALUE",
 * };
 * const command = new CreateSegmentSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreateSegmentSnapshotResponse
 * //   SnapshotId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateSegmentSnapshotCommandInput - {@link CreateSegmentSnapshotCommandInput}
 * @returns {@link CreateSegmentSnapshotCommandOutput}
 * @see {@link CreateSegmentSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateSegmentSnapshotCommandOutput} for command's `response` shape.
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
export class CreateSegmentSnapshotCommand extends $Command
  .classBuilder<
    CreateSegmentSnapshotCommandInput,
    CreateSegmentSnapshotCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "CreateSegmentSnapshot", {})
  .n("CustomerProfilesClient", "CreateSegmentSnapshotCommand")
  .sc(CreateSegmentSnapshot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSegmentSnapshotRequest;
      output: CreateSegmentSnapshotResponse;
    };
    sdk: {
      input: CreateSegmentSnapshotCommandInput;
      output: CreateSegmentSnapshotCommandOutput;
    };
  };
}
