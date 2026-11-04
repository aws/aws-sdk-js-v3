// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { LookupPolicyRequest, LookupPolicyResponse } from "../models/models_0";
import { LookupPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link LookupPolicyCommand}.
 */
export interface LookupPolicyCommandInput extends LookupPolicyRequest {}
/**
 * @public
 *
 * The output of {@link LookupPolicyCommand}.
 */
export interface LookupPolicyCommandOutput extends LookupPolicyResponse, __MetadataBearer {}

/**
 * Lists all policies from the root of the Directory to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the `ObjectIdentifier` for such objects. If policies are present, it returns `ObjectIdentifier`, `policyId`, and `policyType`. Paths that don't lead to the root from the target object are ignored. For more information, see [Policies](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, LookupPolicyCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, LookupPolicyCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // LookupPolicyRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   ObjectReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new LookupPolicyCommand(input);
 * const response = await client.send(command);
 * // { // LookupPolicyResponse
 * //   PolicyToPathList: [ // PolicyToPathList
 * //     { // PolicyToPath
 * //       Path: "STRING_VALUE",
 * //       Policies: [ // PolicyAttachmentList
 * //         { // PolicyAttachment
 * //           PolicyId: "STRING_VALUE",
 * //           ObjectIdentifier: "STRING_VALUE",
 * //           PolicyType: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param LookupPolicyCommandInput - {@link LookupPolicyCommandInput}
 * @returns {@link LookupPolicyCommandOutput}
 * @see {@link LookupPolicyCommandInput} for command's `input` shape.
 * @see {@link LookupPolicyCommandOutput} for command's `response` shape.
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
export class LookupPolicyCommand extends command<LookupPolicyCommandInput, LookupPolicyCommandOutput>(
  _ep0,
  _mw0,
  "LookupPolicy",
  LookupPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: LookupPolicyRequest;
      output: LookupPolicyResponse;
    };
    sdk: {
      input: LookupPolicyCommandInput;
      output: LookupPolicyCommandOutput;
    };
  };
}
