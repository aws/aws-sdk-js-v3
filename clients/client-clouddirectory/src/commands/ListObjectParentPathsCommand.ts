// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListObjectParentPathsRequest, ListObjectParentPathsResponse } from "../models/models_0";
import { ListObjectParentPaths$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListObjectParentPathsCommand}.
 */
export interface ListObjectParentPathsCommandInput extends ListObjectParentPathsRequest {}
/**
 * @public
 *
 * The output of {@link ListObjectParentPathsCommand}.
 */
export interface ListObjectParentPathsCommandOutput extends ListObjectParentPathsResponse, __MetadataBearer {}

/**
 * Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see [Directory Structure](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html).
 *
 * Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined `MaxResults`, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListObjectParentPathsCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListObjectParentPathsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // ListObjectParentPathsRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   ObjectReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListObjectParentPathsCommand(input);
 * const response = await client.send(command);
 * // { // ListObjectParentPathsResponse
 * //   PathToObjectIdentifiersList: [ // PathToObjectIdentifiersList
 * //     { // PathToObjectIdentifiers
 * //       Path: "STRING_VALUE",
 * //       ObjectIdentifiers: [ // ObjectIdentifierList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListObjectParentPathsCommandInput - {@link ListObjectParentPathsCommandInput}
 * @returns {@link ListObjectParentPathsCommandOutput}
 * @see {@link ListObjectParentPathsCommandInput} for command's `input` shape.
 * @see {@link ListObjectParentPathsCommandOutput} for command's `response` shape.
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
export class ListObjectParentPathsCommand extends command<ListObjectParentPathsCommandInput, ListObjectParentPathsCommandOutput>(
  _ep0,
  _mw0,
  "ListObjectParentPaths",
  ListObjectParentPaths$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListObjectParentPathsRequest;
      output: ListObjectParentPathsResponse;
    };
    sdk: {
      input: ListObjectParentPathsCommandInput;
      output: ListObjectParentPathsCommandOutput;
    };
  };
}
