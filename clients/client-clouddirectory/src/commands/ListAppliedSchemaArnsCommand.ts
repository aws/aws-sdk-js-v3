// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAppliedSchemaArnsRequest, ListAppliedSchemaArnsResponse } from "../models/models_0";
import { ListAppliedSchemaArns$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAppliedSchemaArnsCommand}.
 */
export interface ListAppliedSchemaArnsCommandInput extends ListAppliedSchemaArnsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppliedSchemaArnsCommand}.
 */
export interface ListAppliedSchemaArnsCommandOutput extends ListAppliedSchemaArnsResponse, __MetadataBearer {}

/**
 * Lists schema major versions applied to a directory. If `SchemaArn` is provided, lists the minor version.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListAppliedSchemaArnsCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListAppliedSchemaArnsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // ListAppliedSchemaArnsRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   SchemaArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAppliedSchemaArnsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppliedSchemaArnsResponse
 * //   SchemaArns: [ // Arns
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppliedSchemaArnsCommandInput - {@link ListAppliedSchemaArnsCommandInput}
 * @returns {@link ListAppliedSchemaArnsCommandOutput}
 * @see {@link ListAppliedSchemaArnsCommandInput} for command's `input` shape.
 * @see {@link ListAppliedSchemaArnsCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling ListDirectories and check your permissions.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the [AWS Service Health Dashboard](http://status.aws.amazon.com/) site to see if there are any operational issues with the service.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * Indicates that the provided ARN value is not valid.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * Indicates that the `NextToken` value is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Indicates that limits are exceeded. See [Limits](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html) for more information.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link RetryableConflictException} (client fault)
 *
 * Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates that your request is malformed in some manner. See the exception message.
 *
 * @throws {@link CloudDirectoryServiceException}
 *
 * Base exception class for all service exceptions from CloudDirectory service.
 *
 * @example To list applied schema ARNs for a specified directory
 * ```javascript
 * //
 * const input = {
 *   DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY"
 * };
 * const command = new ListAppliedSchemaArnsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SchemaArns: [
 *     "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY/schema/org/1"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAppliedSchemaArnsCommand extends command<ListAppliedSchemaArnsCommandInput, ListAppliedSchemaArnsCommandOutput>(
  _ep0,
  _mw0,
  "ListAppliedSchemaArns",
  ListAppliedSchemaArns$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAppliedSchemaArnsRequest;
      output: ListAppliedSchemaArnsResponse;
    };
    sdk: {
      input: ListAppliedSchemaArnsCommandInput;
      output: ListAppliedSchemaArnsCommandOutput;
    };
  };
}
