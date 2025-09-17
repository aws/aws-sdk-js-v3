// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { GetStorageConfigurationRequest, GetStorageConfigurationResponse } from "../models/models_0";
import { de_GetStorageConfigurationCommand, se_GetStorageConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStorageConfigurationCommand}.
 */
export interface GetStorageConfigurationCommandInput extends GetStorageConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetStorageConfigurationCommand}.
 */
export interface GetStorageConfigurationCommandOutput extends GetStorageConfigurationResponse, __MetadataBearer {}

/**
 * <p>Gets the storage configuration for the specified ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, GetStorageConfigurationCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, GetStorageConfigurationCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // GetStorageConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetStorageConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetStorageConfigurationResponse
 * //   storageConfiguration: { // StorageConfiguration
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     s3: { // S3StorageConfiguration
 * //       bucketName: "STRING_VALUE", // required
 * //     },
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStorageConfigurationCommandInput - {@link GetStorageConfigurationCommandInput}
 * @returns {@link GetStorageConfigurationCommandOutput}
 * @see {@link GetStorageConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetStorageConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 *
 * @public
 */
export class GetStorageConfigurationCommand extends $Command
  .classBuilder<
    GetStorageConfigurationCommandInput,
    GetStorageConfigurationCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "GetStorageConfiguration", {})
  .n("IVSRealTimeClient", "GetStorageConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetStorageConfigurationCommand)
  .de(de_GetStorageConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStorageConfigurationRequest;
      output: GetStorageConfigurationResponse;
    };
    sdk: {
      input: GetStorageConfigurationCommandInput;
      output: GetStorageConfigurationCommandOutput;
    };
  };
}
