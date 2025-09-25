// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSchemaRequest, CreateSchemaResponse } from "../models/models_0";
import { CreateSchema } from "../schemas/schemas_3_Schema";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSchemaCommand}.
 */
export interface CreateSchemaCommandInput extends CreateSchemaRequest {}
/**
 * @public
 *
 * The output of {@link CreateSchemaCommand}.
 */
export interface CreateSchemaCommandOutput extends CreateSchemaResponse, __MetadataBearer {}

/**
 * <p>Creates a new schema in a development state. A schema can exist in three
 *       phases:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>Development:</i> This is a mutable phase of the schema. All new
 *           schemas are in the development phase. Once the schema is finalized, it can be
 *           published.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Published:</i> Published schemas are immutable and have a version
 *           associated with them.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Applied:</i> Applied schemas are mutable in a way that allows you
 *           to add new schema facets. You can also add new, nonrequired attributes to existing schema
 *           facets. You can apply only published schemas to directories. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, CreateSchemaCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, CreateSchemaCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // CreateSchemaRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new CreateSchemaCommand(input);
 * const response = await client.send(command);
 * // { // CreateSchemaResponse
 * //   SchemaArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSchemaCommandInput - {@link CreateSchemaCommandInput}
 * @returns {@link CreateSchemaCommandOutput}
 * @see {@link CreateSchemaCommandInput} for command's `input` shape.
 * @see {@link CreateSchemaCommandOutput} for command's `response` shape.
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
 * @example To create a schema
 * ```javascript
 * //
 * const input = {
 *   Name: "Customers"
 * };
 * const command = new CreateSchemaCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SchemaArn: "arn:aws:clouddirectory:us-west-2:45132example:schema/development/Customers"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateSchemaCommand extends $Command
  .classBuilder<
    CreateSchemaCommandInput,
    CreateSchemaCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonCloudDirectory_20170111", "CreateSchema", {})
  .n("CloudDirectoryClient", "CreateSchemaCommand")
  .sc(CreateSchema)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSchemaRequest;
      output: CreateSchemaResponse;
    };
    sdk: {
      input: CreateSchemaCommandInput;
      output: CreateSchemaCommandOutput;
    };
  };
}
