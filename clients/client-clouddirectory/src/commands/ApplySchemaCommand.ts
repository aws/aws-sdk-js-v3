// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudDirectoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ApplySchemaRequest, ApplySchemaResponse } from "../models/models_0";
import { ApplySchema } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ApplySchemaCommand}.
 */
export interface ApplySchemaCommandInput extends ApplySchemaRequest {}
/**
 * @public
 *
 * The output of {@link ApplySchemaCommand}.
 */
export interface ApplySchemaCommandOutput extends ApplySchemaResponse, __MetadataBearer {}

/**
 * <p>Copies the input published schema, at the specified version, into the <a>Directory</a> with the same
 *       name and version as that of the published schema.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ApplySchemaCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ApplySchemaCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // ApplySchemaRequest
 *   PublishedSchemaArn: "STRING_VALUE", // required
 *   DirectoryArn: "STRING_VALUE", // required
 * };
 * const command = new ApplySchemaCommand(input);
 * const response = await client.send(command);
 * // { // ApplySchemaResponse
 * //   AppliedSchemaArn: "STRING_VALUE",
 * //   DirectoryArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ApplySchemaCommandInput - {@link ApplySchemaCommandInput}
 * @returns {@link ApplySchemaCommandOutput}
 * @see {@link ApplySchemaCommandInput} for command's `input` shape.
 * @see {@link ApplySchemaCommandOutput} for command's `response` shape.
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
 *
 * @example To apply a schema
 * ```javascript
 * //
 * const input = {
 *   DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AfMr4qym1kZTvwqOafAYfqI",
 *   PublishedSchemaArn: "arn:aws:clouddirectory:us-west-2:45132example:schema/published/org/1"
 * };
 * const command = new ApplySchemaCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AppliedSchemaArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AfMr4qym1kZTvwqOafAYfqI/schema/org/1",
 *   DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AfMr4qym1kZTvwqOafAYfqI"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ApplySchemaCommand extends $Command
  .classBuilder<
    ApplySchemaCommandInput,
    ApplySchemaCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonCloudDirectory_20170111", "ApplySchema", {})
  .n("CloudDirectoryClient", "ApplySchemaCommand")
  .sc(ApplySchema)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ApplySchemaRequest;
      output: ApplySchemaResponse;
    };
    sdk: {
      input: ApplySchemaCommandInput;
      output: ApplySchemaCommandOutput;
    };
  };
}
