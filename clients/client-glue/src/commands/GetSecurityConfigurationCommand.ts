// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetSecurityConfigurationRequest, GetSecurityConfigurationResponse } from "../models/models_2";
import { de_GetSecurityConfigurationCommand, se_GetSecurityConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSecurityConfigurationCommand}.
 */
export interface GetSecurityConfigurationCommandInput extends GetSecurityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetSecurityConfigurationCommand}.
 */
export interface GetSecurityConfigurationCommandOutput extends GetSecurityConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves a specified security configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSecurityConfigurationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSecurityConfigurationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetSecurityConfigurationRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetSecurityConfigurationResponse
 * //   SecurityConfiguration: { // SecurityConfiguration
 * //     Name: "STRING_VALUE",
 * //     CreatedTimeStamp: new Date("TIMESTAMP"),
 * //     EncryptionConfiguration: { // EncryptionConfiguration
 * //       S3Encryption: [ // S3EncryptionList
 * //         { // S3Encryption
 * //           S3EncryptionMode: "DISABLED" || "SSE-KMS" || "SSE-S3",
 * //           KmsKeyArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CloudWatchEncryption: { // CloudWatchEncryption
 * //         CloudWatchEncryptionMode: "DISABLED" || "SSE-KMS",
 * //         KmsKeyArn: "STRING_VALUE",
 * //       },
 * //       JobBookmarksEncryption: { // JobBookmarksEncryption
 * //         JobBookmarksEncryptionMode: "DISABLED" || "CSE-KMS",
 * //         KmsKeyArn: "STRING_VALUE",
 * //       },
 * //       DataQualityEncryption: { // DataQualityEncryption
 * //         DataQualityEncryptionMode: "DISABLED" || "SSE-KMS",
 * //         KmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSecurityConfigurationCommandInput - {@link GetSecurityConfigurationCommandInput}
 * @returns {@link GetSecurityConfigurationCommandOutput}
 * @see {@link GetSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class GetSecurityConfigurationCommand extends $Command
  .classBuilder<
    GetSecurityConfigurationCommandInput,
    GetSecurityConfigurationCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetSecurityConfiguration", {})
  .n("GlueClient", "GetSecurityConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetSecurityConfigurationCommand)
  .de(de_GetSecurityConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSecurityConfigurationRequest;
      output: GetSecurityConfigurationResponse;
    };
    sdk: {
      input: GetSecurityConfigurationCommandInput;
      output: GetSecurityConfigurationCommandOutput;
    };
  };
}
