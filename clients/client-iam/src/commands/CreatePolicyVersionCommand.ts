// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePolicyVersionRequest, CreatePolicyVersionResponse } from "../models/models_0";
import { CreatePolicyVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePolicyVersionCommand}.
 */
export interface CreatePolicyVersionCommandInput extends CreatePolicyVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreatePolicyVersionCommand}.
 */
export interface CreatePolicyVersionCommandOutput extends CreatePolicyVersionResponse, __MetadataBearer {}

/**
 * Creates a new version of the specified managed policy. To update a managed policy, you create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must delete an existing version using [DeletePolicyVersion](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicyVersion.html) before you create a new version.
 *
 * Optionally, you can set the new version as the policy's default version. The default version is the version that is in effect for the IAM users, groups, and roles to which the policy is attached.
 *
 * For more information about managed policy versions, see [Versioning for managed policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreatePolicyVersionCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreatePolicyVersionCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // CreatePolicyVersionRequest
 *   PolicyArn: "STRING_VALUE", // required
 *   PolicyDocument: "STRING_VALUE", // required
 *   SetAsDefault: true || false,
 * };
 * const command = new CreatePolicyVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreatePolicyVersionResponse
 * //   PolicyVersion: { // PolicyVersion
 * //     Document: "STRING_VALUE",
 * //     VersionId: "STRING_VALUE",
 * //     IsDefaultVersion: true || false,
 * //     CreateDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreatePolicyVersionCommandInput - {@link CreatePolicyVersionCommandInput}
 * @returns {@link CreatePolicyVersionCommandOutput}
 * @see {@link CreatePolicyVersionCommandInput} for command's `input` shape.
 * @see {@link CreatePolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *
 * The request was rejected because the policy document was malformed. The error message describes the specific error.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @public
 */
export class CreatePolicyVersionCommand extends command<CreatePolicyVersionCommandInput, CreatePolicyVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreatePolicyVersion",
  CreatePolicyVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePolicyVersionRequest;
      output: CreatePolicyVersionResponse;
    };
    sdk: {
      input: CreatePolicyVersionCommandInput;
      output: CreatePolicyVersionCommandOutput;
    };
  };
}
