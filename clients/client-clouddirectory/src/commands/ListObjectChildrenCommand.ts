// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListObjectChildrenRequest, ListObjectChildrenResponse } from "../models/models_0";
import { ListObjectChildren$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListObjectChildrenCommand}.
 */
export interface ListObjectChildrenCommandInput extends ListObjectChildrenRequest {}
/**
 * @public
 *
 * The output of {@link ListObjectChildrenCommand}.
 */
export interface ListObjectChildrenCommandOutput extends ListObjectChildrenResponse, __MetadataBearer {}

/**
 * Returns a paginated list of child objects that are associated with a given object.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListObjectChildrenCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListObjectChildrenCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // ListObjectChildrenRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   ObjectReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ConsistencyLevel: "SERIALIZABLE" || "EVENTUAL",
 * };
 * const command = new ListObjectChildrenCommand(input);
 * const response = await client.send(command);
 * // { // ListObjectChildrenResponse
 * //   Children: { // LinkNameToObjectIdentifierMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListObjectChildrenCommandInput - {@link ListObjectChildrenCommandInput}
 * @returns {@link ListObjectChildrenCommandOutput}
 * @see {@link ListObjectChildrenCommandInput} for command's `input` shape.
 * @see {@link ListObjectChildrenCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling ListDirectories and check your permissions.
 *
 * @throws {@link DirectoryNotEnabledException} (client fault)
 *
 * Operations are only permitted on enabled directories.
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
 * @throws {@link NotNodeException} (client fault)
 *
 * Occurs when any invalid operations are performed on an object that is not a node, such as calling `ListObjectChildren` for a leaf node object.
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
 * @example To list an objects children
 * ```javascript
 * //
 * const input = {
 *   DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY",
 *   ObjectReference: {
 *     Selector: "$AQGG_ADlfNZBzYHY_JgDt3TWcU7IARvOTeaR09zme1sVsw"
 *   }
 * };
 * const command = new ListObjectChildrenCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Children: {
 *     link2: "AQGG_ADlfNZBzYHY_JgDt3TWSvfuEnDqTdmeCuTs6YBNUA"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListObjectChildrenCommand extends command<ListObjectChildrenCommandInput, ListObjectChildrenCommandOutput>(
  _ep0,
  _mw0,
  "ListObjectChildren",
  ListObjectChildren$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListObjectChildrenRequest;
      output: ListObjectChildrenResponse;
    };
    sdk: {
      input: ListObjectChildrenCommandInput;
      output: ListObjectChildrenCommandOutput;
    };
  };
}
