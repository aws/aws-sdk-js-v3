// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetStorageConfigurationRequest, GetStorageConfigurationResponse } from "../models/models_0";
import { GetStorageConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 *
 * @public
 */
export class GetStorageConfigurationCommand extends command<GetStorageConfigurationCommandInput, GetStorageConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetStorageConfiguration",
  GetStorageConfiguration$
) {
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
