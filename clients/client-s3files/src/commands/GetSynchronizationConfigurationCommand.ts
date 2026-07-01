// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetSynchronizationConfigurationRequest,
  GetSynchronizationConfigurationResponse,
} from "../models/models_0";
import { GetSynchronizationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSynchronizationConfigurationCommand}.
 */
export interface GetSynchronizationConfigurationCommandInput extends GetSynchronizationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetSynchronizationConfigurationCommand}.
 */
export interface GetSynchronizationConfigurationCommandOutput extends GetSynchronizationConfigurationResponse, __MetadataBearer {}

/**
 * <p>Returns the synchronization configuration for the specified S3 File System, including import data rules and expiration data rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3FilesClient, GetSynchronizationConfigurationCommand } from "@aws-sdk/client-s3files"; // ES Modules import
 * // const { S3FilesClient, GetSynchronizationConfigurationCommand } = require("@aws-sdk/client-s3files"); // CommonJS import
 * // import type { S3FilesClientConfig } from "@aws-sdk/client-s3files";
 * const config = {}; // type is S3FilesClientConfig
 * const client = new S3FilesClient(config);
 * const input = { // GetSynchronizationConfigurationRequest
 *   fileSystemId: "STRING_VALUE", // required
 * };
 * const command = new GetSynchronizationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetSynchronizationConfigurationResponse
 * //   latestVersionNumber: Number("int"),
 * //   importDataRules: [ // ImportDataRuleList // required
 * //     { // ImportDataRule
 * //       prefix: "STRING_VALUE", // required
 * //       trigger: "ON_DIRECTORY_FIRST_ACCESS" || "ON_FILE_ACCESS", // required
 * //       sizeLessThan: Number("long"), // required
 * //     },
 * //   ],
 * //   expirationDataRules: [ // ExpirationDataRuleList // required
 * //     { // ExpirationDataRule
 * //       daysAfterLastAccess: Number("int"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSynchronizationConfigurationCommandInput - {@link GetSynchronizationConfigurationCommandInput}
 * @returns {@link GetSynchronizationConfigurationCommandOutput}
 * @see {@link GetSynchronizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetSynchronizationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3FilesClientResolvedConfig | config} for S3FilesClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource exists and that you have permission to access it.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters are not valid. Check the parameter values and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Retry your request using exponential backoff.</p>
 *
 * @throws {@link S3FilesServiceException}
 * <p>Base exception class for all service exceptions from S3Files service.</p>
 *
 *
 * @public
 */
export class GetSynchronizationConfigurationCommand extends command<GetSynchronizationConfigurationCommandInput, GetSynchronizationConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetSynchronizationConfiguration",
  GetSynchronizationConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSynchronizationConfigurationRequest;
      output: GetSynchronizationConfigurationResponse;
    };
    sdk: {
      input: GetSynchronizationConfigurationCommandInput;
      output: GetSynchronizationConfigurationCommandOutput;
    };
  };
}
