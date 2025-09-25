// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAppliedSchemaVersionRequest, GetAppliedSchemaVersionResponse } from "../models/models_0";
import { GetAppliedSchemaVersion } from "../schemas/schemas_17_GetAppliedSchemaVersion";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAppliedSchemaVersionCommand}.
 */
export interface GetAppliedSchemaVersionCommandInput extends GetAppliedSchemaVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetAppliedSchemaVersionCommand}.
 */
export interface GetAppliedSchemaVersionCommandOutput extends GetAppliedSchemaVersionResponse, __MetadataBearer {}

/**
 * <p>Returns current applied schema version ARN, including the minor version in use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetAppliedSchemaVersionCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetAppliedSchemaVersionCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // GetAppliedSchemaVersionRequest
 *   SchemaArn: "STRING_VALUE", // required
 * };
 * const command = new GetAppliedSchemaVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetAppliedSchemaVersionResponse
 * //   AppliedSchemaArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAppliedSchemaVersionCommandInput - {@link GetAppliedSchemaVersionCommandInput}
 * @returns {@link GetAppliedSchemaVersionCommandOutput}
 * @see {@link GetAppliedSchemaVersionCommandInput} for command's `input` shape.
 * @see {@link GetAppliedSchemaVersionCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling <a>ListDirectories</a> and check your permissions.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>Indicates that the provided ARN value is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link RetryableConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that your request is malformed in some manner. See the exception
 *       message.</p>
 *
 * @throws {@link CloudDirectoryServiceException}
 * <p>Base exception class for all service exceptions from CloudDirectory service.</p>
 *
 *
 * @public
 */
export class GetAppliedSchemaVersionCommand extends $Command
  .classBuilder<
    GetAppliedSchemaVersionCommandInput,
    GetAppliedSchemaVersionCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonCloudDirectory_20170111", "GetAppliedSchemaVersion", {})
  .n("CloudDirectoryClient", "GetAppliedSchemaVersionCommand")
  .sc(GetAppliedSchemaVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAppliedSchemaVersionRequest;
      output: GetAppliedSchemaVersionResponse;
    };
    sdk: {
      input: GetAppliedSchemaVersionCommandInput;
      output: GetAppliedSchemaVersionCommandOutput;
    };
  };
}
