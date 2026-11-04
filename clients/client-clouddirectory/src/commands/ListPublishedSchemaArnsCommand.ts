// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPublishedSchemaArnsRequest, ListPublishedSchemaArnsResponse } from "../models/models_0";
import { ListPublishedSchemaArns$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPublishedSchemaArnsCommand}.
 */
export interface ListPublishedSchemaArnsCommandInput extends ListPublishedSchemaArnsRequest {}
/**
 * @public
 *
 * The output of {@link ListPublishedSchemaArnsCommand}.
 */
export interface ListPublishedSchemaArnsCommandOutput extends ListPublishedSchemaArnsResponse, __MetadataBearer {}

/**
 * Lists the major version families of each published schema. If a major version ARN is provided as `SchemaArn`, the minor version revisions in that family are listed instead.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListPublishedSchemaArnsCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListPublishedSchemaArnsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // ListPublishedSchemaArnsRequest
 *   SchemaArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPublishedSchemaArnsCommand(input);
 * const response = await client.send(command);
 * // { // ListPublishedSchemaArnsResponse
 * //   SchemaArns: [ // Arns
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPublishedSchemaArnsCommandInput - {@link ListPublishedSchemaArnsCommandInput}
 * @returns {@link ListPublishedSchemaArnsCommandOutput}
 * @see {@link ListPublishedSchemaArnsCommandInput} for command's `input` shape.
 * @see {@link ListPublishedSchemaArnsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListPublishedSchemaArnsCommand extends command<ListPublishedSchemaArnsCommandInput, ListPublishedSchemaArnsCommandOutput>(
  _ep0,
  _mw0,
  "ListPublishedSchemaArns",
  ListPublishedSchemaArns$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPublishedSchemaArnsRequest;
      output: ListPublishedSchemaArnsResponse;
    };
    sdk: {
      input: ListPublishedSchemaArnsCommandInput;
      output: ListPublishedSchemaArnsCommandOutput;
    };
  };
}
