// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetWorkGroupInput, GetWorkGroupOutput } from "../models/models_0";
import { de_GetWorkGroupCommand, se_GetWorkGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkGroupCommand}.
 */
export interface GetWorkGroupCommandInput extends GetWorkGroupInput {}
/**
 * @public
 *
 * The output of {@link GetWorkGroupCommand}.
 */
export interface GetWorkGroupCommandOutput extends GetWorkGroupOutput, __MetadataBearer {}

/**
 * <p>Returns information about the workgroup with the specified name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetWorkGroupCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetWorkGroupCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // GetWorkGroupInput
 *   WorkGroup: "STRING_VALUE", // required
 * };
 * const command = new GetWorkGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkGroupOutput
 * //   WorkGroup: { // WorkGroup
 * //     Name: "STRING_VALUE", // required
 * //     State: "ENABLED" || "DISABLED",
 * //     Configuration: { // WorkGroupConfiguration
 * //       ResultConfiguration: { // ResultConfiguration
 * //         OutputLocation: "STRING_VALUE",
 * //         EncryptionConfiguration: { // EncryptionConfiguration
 * //           EncryptionOption: "SSE_S3" || "SSE_KMS" || "CSE_KMS", // required
 * //           KmsKey: "STRING_VALUE",
 * //         },
 * //         ExpectedBucketOwner: "STRING_VALUE",
 * //         AclConfiguration: { // AclConfiguration
 * //           S3AclOption: "BUCKET_OWNER_FULL_CONTROL", // required
 * //         },
 * //       },
 * //       ManagedQueryResultsConfiguration: { // ManagedQueryResultsConfiguration
 * //         Enabled: true || false, // required
 * //         EncryptionConfiguration: { // ManagedQueryResultsEncryptionConfiguration
 * //           KmsKey: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       EnforceWorkGroupConfiguration: true || false,
 * //       PublishCloudWatchMetricsEnabled: true || false,
 * //       BytesScannedCutoffPerQuery: Number("long"),
 * //       RequesterPaysEnabled: true || false,
 * //       EngineVersion: { // EngineVersion
 * //         SelectedEngineVersion: "STRING_VALUE",
 * //         EffectiveEngineVersion: "STRING_VALUE",
 * //       },
 * //       AdditionalConfiguration: "STRING_VALUE",
 * //       ExecutionRole: "STRING_VALUE",
 * //       CustomerContentEncryptionConfiguration: { // CustomerContentEncryptionConfiguration
 * //         KmsKey: "STRING_VALUE", // required
 * //       },
 * //       EnableMinimumEncryptionConfiguration: true || false,
 * //       IdentityCenterConfiguration: { // IdentityCenterConfiguration
 * //         EnableIdentityCenter: true || false,
 * //         IdentityCenterInstanceArn: "STRING_VALUE",
 * //       },
 * //       QueryResultsS3AccessGrantsConfiguration: { // QueryResultsS3AccessGrantsConfiguration
 * //         EnableS3AccessGrants: true || false, // required
 * //         CreateUserLevelPrefix: true || false,
 * //         AuthenticationType: "DIRECTORY_IDENTITY", // required
 * //       },
 * //     },
 * //     Description: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     IdentityCenterApplicationArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWorkGroupCommandInput - {@link GetWorkGroupCommandInput}
 * @returns {@link GetWorkGroupCommandOutput}
 * @see {@link GetWorkGroupCommandInput} for command's `input` shape.
 * @see {@link GetWorkGroupCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class GetWorkGroupCommand extends $Command
  .classBuilder<
    GetWorkGroupCommandInput,
    GetWorkGroupCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "GetWorkGroup", {})
  .n("AthenaClient", "GetWorkGroupCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkGroupCommand)
  .de(de_GetWorkGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkGroupInput;
      output: GetWorkGroupOutput;
    };
    sdk: {
      input: GetWorkGroupCommandInput;
      output: GetWorkGroupCommandOutput;
    };
  };
}
