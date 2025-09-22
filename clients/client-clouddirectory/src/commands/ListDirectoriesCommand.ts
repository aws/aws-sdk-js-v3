// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDirectoriesRequest, ListDirectoriesResponse } from "../models/models_0";
import { ListDirectories } from "../schemas/schemas_11_Directory";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDirectoriesCommand}.
 */
export interface ListDirectoriesCommandInput extends ListDirectoriesRequest {}
/**
 * @public
 *
 * The output of {@link ListDirectoriesCommand}.
 */
export interface ListDirectoriesCommandOutput extends ListDirectoriesResponse, __MetadataBearer {}

/**
 * <p>Lists directories created within an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListDirectoriesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListDirectoriesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // ListDirectoriesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   state: "ENABLED" || "DISABLED" || "DELETED",
 * };
 * const command = new ListDirectoriesCommand(input);
 * const response = await client.send(command);
 * // { // ListDirectoriesResponse
 * //   Directories: [ // DirectoryList // required
 * //     { // Directory
 * //       Name: "STRING_VALUE",
 * //       DirectoryArn: "STRING_VALUE",
 * //       State: "ENABLED" || "DISABLED" || "DELETED",
 * //       CreationDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDirectoriesCommandInput - {@link ListDirectoriesCommandInput}
 * @returns {@link ListDirectoriesCommandOutput}
 * @see {@link ListDirectoriesCommandInput} for command's `input` shape.
 * @see {@link ListDirectoriesCommandOutput} for command's `response` shape.
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
 * @example To list all directories in your AWS account
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListDirectoriesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Directories: [
 *     {
 *       CreationDateTime: 1.506121791167E9,
 *       DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/Ae89hOKmw0bRpvYgW8EAsus",
 *       Name: "ExampleCD4",
 *       State: "ENABLED"
 *     },
 *     {
 *       CreationDateTime: 1.485473189746E9,
 *       DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AXQXDXvdgkOWktRXV4HnRa8",
 *       Name: "testCD",
 *       State: "DELETED"
 *     },
 *     {
 *       CreationDateTime: 1.506115781186E9,
 *       DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY",
 *       Name: "ExampleCD",
 *       State: "ENABLED"
 *     },
 *     {
 *       CreationDateTime: 1.506118003859E9,
 *       DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AfMr4qym1kZTvwqOafAYfqI",
 *       Name: "ExampleCD2",
 *       State: "ENABLED"
 *     },
 *     {
 *       CreationDateTime: 1.485477107925E9,
 *       DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AWeI1yjiB0SylWVTvQklCD0",
 *       Name: "testCD2",
 *       State: "DELETED"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListDirectoriesCommand extends $Command
  .classBuilder<
    ListDirectoriesCommandInput,
    ListDirectoriesCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonCloudDirectory_20170111", "ListDirectories", {})
  .n("CloudDirectoryClient", "ListDirectoriesCommand")
  .sc(ListDirectories)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDirectoriesRequest;
      output: ListDirectoriesResponse;
    };
    sdk: {
      input: ListDirectoriesCommandInput;
      output: ListDirectoriesCommandOutput;
    };
  };
}
