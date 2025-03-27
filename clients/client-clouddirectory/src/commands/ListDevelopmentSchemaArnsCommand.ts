// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDevelopmentSchemaArnsRequest, ListDevelopmentSchemaArnsResponse } from "../models/models_0";
import { de_ListDevelopmentSchemaArnsCommand, se_ListDevelopmentSchemaArnsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDevelopmentSchemaArnsCommand}.
 */
export interface ListDevelopmentSchemaArnsCommandInput extends ListDevelopmentSchemaArnsRequest {}
/**
 * @public
 *
 * The output of {@link ListDevelopmentSchemaArnsCommand}.
 */
export interface ListDevelopmentSchemaArnsCommandOutput extends ListDevelopmentSchemaArnsResponse, __MetadataBearer {}

/**
 * <p>Retrieves each Amazon Resource Name (ARN) of schemas in the development
 *       state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListDevelopmentSchemaArnsCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListDevelopmentSchemaArnsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const input = { // ListDevelopmentSchemaArnsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDevelopmentSchemaArnsCommand(input);
 * const response = await client.send(command);
 * // { // ListDevelopmentSchemaArnsResponse
 * //   SchemaArns: [ // Arns
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDevelopmentSchemaArnsCommandInput - {@link ListDevelopmentSchemaArnsCommandInput}
 * @returns {@link ListDevelopmentSchemaArnsCommandOutput}
 * @see {@link ListDevelopmentSchemaArnsCommandInput} for command's `input` shape.
 * @see {@link ListDevelopmentSchemaArnsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>Indicates that the <code>NextToken</code> value is not valid.</p>
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
 * @example To list all development schema arns in your AWS account
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListDevelopmentSchemaArnsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SchemaArns: [
 *     "arn:aws:clouddirectory:us-west-2:45132example:schema/development/typedlinkschematest",
 *     "arn:aws:clouddirectory:us-west-2:45132example:schema/development/testCDschema",
 *     "arn:aws:clouddirectory:us-west-2:45132example:schema/development/Customers",
 *     "arn:aws:clouddirectory:us-west-2:45132example:schema/development/CourseCatalog",
 *     "arn:aws:clouddirectory:us-west-2:45132example:schema/development/Consumers",
 *     "arn:aws:clouddirectory:us-west-2:45132example:schema/development/exampleorg"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListDevelopmentSchemaArnsCommand extends $Command
  .classBuilder<
    ListDevelopmentSchemaArnsCommandInput,
    ListDevelopmentSchemaArnsCommandOutput,
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
  .s("AmazonCloudDirectory_20170111", "ListDevelopmentSchemaArns", {})
  .n("CloudDirectoryClient", "ListDevelopmentSchemaArnsCommand")
  .f(void 0, void 0)
  .ser(se_ListDevelopmentSchemaArnsCommand)
  .de(de_ListDevelopmentSchemaArnsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDevelopmentSchemaArnsRequest;
      output: ListDevelopmentSchemaArnsResponse;
    };
    sdk: {
      input: ListDevelopmentSchemaArnsCommandInput;
      output: ListDevelopmentSchemaArnsCommandOutput;
    };
  };
}
