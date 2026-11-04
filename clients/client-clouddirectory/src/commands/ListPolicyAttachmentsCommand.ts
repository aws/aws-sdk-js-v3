// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPolicyAttachmentsRequest, ListPolicyAttachmentsResponse } from "../models/models_0";
import { ListPolicyAttachments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPolicyAttachmentsCommand}.
 */
export interface ListPolicyAttachmentsCommandInput extends ListPolicyAttachmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListPolicyAttachmentsCommand}.
 */
export interface ListPolicyAttachmentsCommandOutput extends ListPolicyAttachmentsResponse, __MetadataBearer {}

/**
 * Returns all of the `ObjectIdentifiers` to which a given policy is attached.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListPolicyAttachmentsCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListPolicyAttachmentsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // ListPolicyAttachmentsRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   PolicyReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ConsistencyLevel: "SERIALIZABLE" || "EVENTUAL",
 * };
 * const command = new ListPolicyAttachmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListPolicyAttachmentsResponse
 * //   ObjectIdentifiers: [ // ObjectIdentifierList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPolicyAttachmentsCommandInput - {@link ListPolicyAttachmentsCommandInput}
 * @returns {@link ListPolicyAttachmentsCommandOutput}
 * @see {@link ListPolicyAttachmentsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyAttachmentsCommandOutput} for command's `response` shape.
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
 * @throws {@link NotPolicyException} (client fault)
 *
 * Indicates that the requested operation can only operate on policy objects.
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
export class ListPolicyAttachmentsCommand extends command<ListPolicyAttachmentsCommandInput, ListPolicyAttachmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListPolicyAttachments",
  ListPolicyAttachments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPolicyAttachmentsRequest;
      output: ListPolicyAttachmentsResponse;
    };
    sdk: {
      input: ListPolicyAttachmentsCommandInput;
      output: ListPolicyAttachmentsCommandOutput;
    };
  };
}
