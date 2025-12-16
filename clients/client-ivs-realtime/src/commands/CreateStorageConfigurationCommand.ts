// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import type { CreateStorageConfigurationRequest, CreateStorageConfigurationResponse } from "../models/models_0";
import { CreateStorageConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStorageConfigurationCommand}.
 */
export interface CreateStorageConfigurationCommandInput extends CreateStorageConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateStorageConfigurationCommand}.
 */
export interface CreateStorageConfigurationCommandOutput extends CreateStorageConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates a new storage configuration, used to enable recording to Amazon S3.
 * 	  When a StorageConfiguration is created, IVS will modify the S3 bucketPolicy of the provided bucket.
 * 	  This will ensure that IVS has sufficient permissions to write content to the provided bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, CreateStorageConfigurationCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, CreateStorageConfigurationCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // CreateStorageConfigurationRequest
 *   name: "STRING_VALUE",
 *   s3: { // S3StorageConfiguration
 *     bucketName: "STRING_VALUE", // required
 *   },
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateStorageConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateStorageConfigurationResponse
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
 * @param CreateStorageConfigurationCommandInput - {@link CreateStorageConfigurationCommandInput}
 * @returns {@link CreateStorageConfigurationCommandOutput}
 * @see {@link CreateStorageConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateStorageConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link PendingVerification} (client fault)
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
export class CreateStorageConfigurationCommand extends $Command
  .classBuilder<
    CreateStorageConfigurationCommandInput,
    CreateStorageConfigurationCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "CreateStorageConfiguration", {})
  .n("IVSRealTimeClient", "CreateStorageConfigurationCommand")
  .sc(CreateStorageConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStorageConfigurationRequest;
      output: CreateStorageConfigurationResponse;
    };
    sdk: {
      input: CreateStorageConfigurationCommandInput;
      output: CreateStorageConfigurationCommandOutput;
    };
  };
}
