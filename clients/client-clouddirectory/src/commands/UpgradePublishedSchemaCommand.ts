// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpgradePublishedSchemaRequest, UpgradePublishedSchemaResponse } from "../models/models_0";
import { UpgradePublishedSchema } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpgradePublishedSchemaCommand}.
 */
export interface UpgradePublishedSchemaCommandInput extends UpgradePublishedSchemaRequest {}
/**
 * @public
 *
 * The output of {@link UpgradePublishedSchemaCommand}.
 */
export interface UpgradePublishedSchemaCommandOutput extends UpgradePublishedSchemaResponse, __MetadataBearer {}

/**
 * <p>Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, UpgradePublishedSchemaCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, UpgradePublishedSchemaCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // UpgradePublishedSchemaRequest
 *   DevelopmentSchemaArn: "STRING_VALUE", // required
 *   PublishedSchemaArn: "STRING_VALUE", // required
 *   MinorVersion: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new UpgradePublishedSchemaCommand(input);
 * const response = await client.send(command);
 * // { // UpgradePublishedSchemaResponse
 * //   UpgradedSchemaArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpgradePublishedSchemaCommandInput - {@link UpgradePublishedSchemaCommandInput}
 * @returns {@link UpgradePublishedSchemaCommandOutput}
 * @see {@link UpgradePublishedSchemaCommandInput} for command's `input` shape.
 * @see {@link UpgradePublishedSchemaCommandOutput} for command's `response` shape.
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
export class UpgradePublishedSchemaCommand extends $Command
  .classBuilder<
    UpgradePublishedSchemaCommandInput,
    UpgradePublishedSchemaCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonCloudDirectory_20170111", "UpgradePublishedSchema", {})
  .n("CloudDirectoryClient", "UpgradePublishedSchemaCommand")
  .sc(UpgradePublishedSchema)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpgradePublishedSchemaRequest;
      output: UpgradePublishedSchemaResponse;
    };
    sdk: {
      input: UpgradePublishedSchemaCommandInput;
      output: UpgradePublishedSchemaCommandOutput;
    };
  };
}
