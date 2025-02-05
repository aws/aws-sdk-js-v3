// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpgradeAppliedSchemaRequest, UpgradeAppliedSchemaResponse } from "../models/models_0";
import { de_UpgradeAppliedSchemaCommand, se_UpgradeAppliedSchemaCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpgradeAppliedSchemaCommand}.
 */
export interface UpgradeAppliedSchemaCommandInput extends UpgradeAppliedSchemaRequest {}
/**
 * @public
 *
 * The output of {@link UpgradeAppliedSchemaCommand}.
 */
export interface UpgradeAppliedSchemaCommandOutput extends UpgradeAppliedSchemaResponse, __MetadataBearer {}

/**
 * <p>Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, UpgradeAppliedSchemaCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, UpgradeAppliedSchemaCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudDirectoryClient(config);
 * const input = { // UpgradeAppliedSchemaRequest
 *   PublishedSchemaArn: "STRING_VALUE", // required
 *   DirectoryArn: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new UpgradeAppliedSchemaCommand(input);
 * const response = await client.send(command);
 * // { // UpgradeAppliedSchemaResponse
 * //   UpgradedSchemaArn: "STRING_VALUE",
 * //   DirectoryArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpgradeAppliedSchemaCommandInput - {@link UpgradeAppliedSchemaCommandInput}
 * @returns {@link UpgradeAppliedSchemaCommandOutput}
 * @see {@link UpgradeAppliedSchemaCommandInput} for command's `input` shape.
 * @see {@link UpgradeAppliedSchemaCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling <a>ListDirectories</a> and check your permissions.</p>
 *
 * @throws {@link IncompatibleSchemaException} (client fault)
 *  <p>Indicates a failure occurred while performing a check for backward compatibility between the specified schema and the schema that is currently applied to the directory.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>Indicates that the provided ARN value is not valid.</p>
 *
 * @throws {@link InvalidAttachmentException} (client fault)
 *  <p>Indicates that an attempt to make an attachment was invalid. For example, attaching two nodes
 *       with a link type that is not applicable to the nodes or attempting to apply a schema to a directory a second time.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link RetryableConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 *
 * @throws {@link SchemaAlreadyExistsException} (client fault)
 *  <p>Indicates that a schema could not be created due to a naming conflict. Please select a
 *       different name and then try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that your request is malformed in some manner. See the exception
 *       message.</p>
 *
 * @throws {@link CloudDirectoryServiceException}
 * <p>Base exception class for all service exceptions from CloudDirectory service.</p>
 *
 * @public
 */
export class UpgradeAppliedSchemaCommand extends $Command
  .classBuilder<
    UpgradeAppliedSchemaCommandInput,
    UpgradeAppliedSchemaCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonCloudDirectory_20170111", "UpgradeAppliedSchema", {})
  .n("CloudDirectoryClient", "UpgradeAppliedSchemaCommand")
  .f(void 0, void 0)
  .ser(se_UpgradeAppliedSchemaCommand)
  .de(de_UpgradeAppliedSchemaCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpgradeAppliedSchemaRequest;
      output: UpgradeAppliedSchemaResponse;
    };
    sdk: {
      input: UpgradeAppliedSchemaCommandInput;
      output: UpgradeAppliedSchemaCommandOutput;
    };
  };
}
