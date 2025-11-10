// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PublishSchemaRequest, PublishSchemaResponse } from "../models/models_0";
import { PublishSchema } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PublishSchemaCommand}.
 */
export interface PublishSchemaCommandInput extends PublishSchemaRequest {}
/**
 * @public
 *
 * The output of {@link PublishSchemaCommand}.
 */
export interface PublishSchemaCommandOutput extends PublishSchemaResponse, __MetadataBearer {}

/**
 * <p>Publishes a development schema with a major version and a recommended minor version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, PublishSchemaCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, PublishSchemaCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // PublishSchemaRequest
 *   DevelopmentSchemaArn: "STRING_VALUE", // required
 *   Version: "STRING_VALUE", // required
 *   MinorVersion: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 * };
 * const command = new PublishSchemaCommand(input);
 * const response = await client.send(command);
 * // { // PublishSchemaResponse
 * //   PublishedSchemaArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PublishSchemaCommandInput - {@link PublishSchemaCommandInput}
 * @returns {@link PublishSchemaCommandOutput}
 * @see {@link PublishSchemaCommandInput} for command's `input` shape.
 * @see {@link PublishSchemaCommandOutput} for command's `response` shape.
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
 * @throws {@link SchemaAlreadyPublishedException} (client fault)
 *  <p>Indicates that a schema is already published.</p>
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
export class PublishSchemaCommand extends $Command
  .classBuilder<
    PublishSchemaCommandInput,
    PublishSchemaCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonCloudDirectory_20170111", "PublishSchema", {})
  .n("CloudDirectoryClient", "PublishSchemaCommand")
  .sc(PublishSchema)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PublishSchemaRequest;
      output: PublishSchemaResponse;
    };
    sdk: {
      input: PublishSchemaCommandInput;
      output: PublishSchemaCommandOutput;
    };
  };
}
