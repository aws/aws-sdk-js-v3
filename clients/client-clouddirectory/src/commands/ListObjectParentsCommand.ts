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
import type { ListObjectParentsRequest, ListObjectParentsResponse } from "../models/models_0";
import { ListObjectParents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListObjectParentsCommand}.
 */
export interface ListObjectParentsCommandInput extends ListObjectParentsRequest {}
/**
 * @public
 *
 * The output of {@link ListObjectParentsCommand}.
 */
export interface ListObjectParentsCommandOutput extends ListObjectParentsResponse, __MetadataBearer {}

/**
 * <p>Lists parent objects that are associated with a given object in pagination
 *       fashion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListObjectParentsCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListObjectParentsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // ListObjectParentsRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   ObjectReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ConsistencyLevel: "SERIALIZABLE" || "EVENTUAL",
 *   IncludeAllLinksToEachParent: true || false,
 * };
 * const command = new ListObjectParentsCommand(input);
 * const response = await client.send(command);
 * // { // ListObjectParentsResponse
 * //   Parents: { // ObjectIdentifierToLinkNameMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   NextToken: "STRING_VALUE",
 * //   ParentLinks: [ // ObjectIdentifierAndLinkNameList
 * //     { // ObjectIdentifierAndLinkNameTuple
 * //       ObjectIdentifier: "STRING_VALUE",
 * //       LinkName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListObjectParentsCommandInput - {@link ListObjectParentsCommandInput}
 * @returns {@link ListObjectParentsCommandOutput}
 * @see {@link ListObjectParentsCommandInput} for command's `input` shape.
 * @see {@link ListObjectParentsCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling <a>ListDirectories</a> and check your permissions.</p>
 *
 * @throws {@link CannotListParentOfRootException} (client fault)
 *  <p>Cannot list the parents of a <a>Directory</a> root.</p>
 *
 * @throws {@link DirectoryNotEnabledException} (client fault)
 *  <p>Operations are only permitted on enabled directories.</p>
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
 * @public
 */
export class ListObjectParentsCommand extends $Command
  .classBuilder<
    ListObjectParentsCommandInput,
    ListObjectParentsCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonCloudDirectory_20170111", "ListObjectParents", {})
  .n("CloudDirectoryClient", "ListObjectParentsCommand")
  .sc(ListObjectParents$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListObjectParentsRequest;
      output: ListObjectParentsResponse;
    };
    sdk: {
      input: ListObjectParentsCommandInput;
      output: ListObjectParentsCommandOutput;
    };
  };
}
