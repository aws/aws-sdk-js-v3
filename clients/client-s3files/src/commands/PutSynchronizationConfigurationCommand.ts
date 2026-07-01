// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutSynchronizationConfigurationRequest,
  PutSynchronizationConfigurationResponse,
} from "../models/models_0";
import { PutSynchronizationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutSynchronizationConfigurationCommand}.
 */
export interface PutSynchronizationConfigurationCommandInput extends PutSynchronizationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutSynchronizationConfigurationCommand}.
 */
export interface PutSynchronizationConfigurationCommandOutput extends PutSynchronizationConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates or updates the synchronization configuration for the specified S3 File System, including import data rules and expiration data rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3FilesClient, PutSynchronizationConfigurationCommand } from "@aws-sdk/client-s3files"; // ES Modules import
 * // const { S3FilesClient, PutSynchronizationConfigurationCommand } = require("@aws-sdk/client-s3files"); // CommonJS import
 * // import type { S3FilesClientConfig } from "@aws-sdk/client-s3files";
 * const config = {}; // type is S3FilesClientConfig
 * const client = new S3FilesClient(config);
 * const input = { // PutSynchronizationConfigurationRequest
 *   fileSystemId: "STRING_VALUE", // required
 *   latestVersionNumber: Number("int"),
 *   importDataRules: [ // ImportDataRuleList // required
 *     { // ImportDataRule
 *       prefix: "STRING_VALUE", // required
 *       trigger: "ON_DIRECTORY_FIRST_ACCESS" || "ON_FILE_ACCESS", // required
 *       sizeLessThan: Number("long"), // required
 *     },
 *   ],
 *   expirationDataRules: [ // ExpirationDataRuleList // required
 *     { // ExpirationDataRule
 *       daysAfterLastAccess: Number("int"), // required
 *     },
 *   ],
 * };
 * const command = new PutSynchronizationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutSynchronizationConfigurationCommandInput - {@link PutSynchronizationConfigurationCommandInput}
 * @returns {@link PutSynchronizationConfigurationCommandOutput}
 * @see {@link PutSynchronizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutSynchronizationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3FilesClientResolvedConfig | config} for S3FilesClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. This can occur when trying to create a resource that already exists or delete a resource that is in use.</p>
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
export class PutSynchronizationConfigurationCommand extends command<PutSynchronizationConfigurationCommandInput, PutSynchronizationConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutSynchronizationConfiguration",
  PutSynchronizationConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSynchronizationConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutSynchronizationConfigurationCommandInput;
      output: PutSynchronizationConfigurationCommandOutput;
    };
  };
}
