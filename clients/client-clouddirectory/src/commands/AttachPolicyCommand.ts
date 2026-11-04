// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AttachPolicyRequest, AttachPolicyResponse } from "../models/models_0";
import { AttachPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AttachPolicyCommand}.
 */
export interface AttachPolicyCommandInput extends AttachPolicyRequest {}
/**
 * @public
 *
 * The output of {@link AttachPolicyCommand}.
 */
export interface AttachPolicyCommandOutput extends AttachPolicyResponse, __MetadataBearer {}

/**
 * Attaches a policy object to a regular object. An object can have a limited number of attached policies.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, AttachPolicyCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, AttachPolicyCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // AttachPolicyRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   PolicyReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 *   ObjectReference: {
 *     Selector: "STRING_VALUE",
 *   },
 * };
 * const command = new AttachPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachPolicyCommandInput - {@link AttachPolicyCommandInput}
 * @returns {@link AttachPolicyCommandOutput}
 * @see {@link AttachPolicyCommandInput} for command's `input` shape.
 * @see {@link AttachPolicyCommandOutput} for command's `response` shape.
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
 * @example To attach a policy to an object
 * ```javascript
 * //
 * const input = {
 *   DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY",
 *   ObjectReference: {
 *     Selector: "$AQGG_ADlfNZBzYHY_JgDt3TWQoovm1s3Ts2v0NKrzdVnPw"
 *   },
 *   PolicyReference: {
 *     Selector: "$AQGG_ADlfNZBzYHY_JgDt3TWgcBsTVmcQEWs6jlygfhuew"
 *   }
 * };
 * const command = new AttachPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AttachPolicyCommand extends command<AttachPolicyCommandInput, AttachPolicyCommandOutput>(
  _ep0,
  _mw0,
  "AttachPolicy",
  AttachPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachPolicyRequest;
      output: {};
    };
    sdk: {
      input: AttachPolicyCommandInput;
      output: AttachPolicyCommandOutput;
    };
  };
}
