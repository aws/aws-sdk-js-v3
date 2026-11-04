// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutUserPermissionsBoundaryRequest } from "../models/models_0";
import { PutUserPermissionsBoundary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutUserPermissionsBoundaryCommand}.
 */
export interface PutUserPermissionsBoundaryCommandInput extends PutUserPermissionsBoundaryRequest {}
/**
 * @public
 *
 * The output of {@link PutUserPermissionsBoundaryCommand}.
 */
export interface PutUserPermissionsBoundaryCommandOutput extends __MetadataBearer {}

/**
 * Adds or updates the policy that is specified as the IAM user's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a user. Use the boundary to control the maximum permissions that the user can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the user.
 *
 * > **Important:** Policies that are used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the user. To learn how the effective permissions for a user are evaluated, see [IAM JSON policy evaluation logic](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html) in the IAM User Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutUserPermissionsBoundaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutUserPermissionsBoundaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // PutUserPermissionsBoundaryRequest
 *   UserName: "STRING_VALUE", // required
 *   PermissionsBoundary: "STRING_VALUE", // required
 * };
 * const command = new PutUserPermissionsBoundaryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutUserPermissionsBoundaryCommandInput - {@link PutUserPermissionsBoundaryCommandInput}
 * @returns {@link PutUserPermissionsBoundaryCommandOutput}
 * @see {@link PutUserPermissionsBoundaryCommandInput} for command's `input` shape.
 * @see {@link PutUserPermissionsBoundaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link PolicyNotAttachableException} (client fault)
 *
 * The request failed because Amazon Web Services service role policies can only be attached to the service-linked role for that service.
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
export class PutUserPermissionsBoundaryCommand extends command<PutUserPermissionsBoundaryCommandInput, PutUserPermissionsBoundaryCommandOutput>(
  _ep0,
  _mw0,
  "PutUserPermissionsBoundary",
  PutUserPermissionsBoundary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutUserPermissionsBoundaryRequest;
      output: {};
    };
    sdk: {
      input: PutUserPermissionsBoundaryCommandInput;
      output: PutUserPermissionsBoundaryCommandOutput;
    };
  };
}
