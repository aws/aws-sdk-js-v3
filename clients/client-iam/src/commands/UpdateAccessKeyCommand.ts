// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAccessKeyRequest } from "../models/models_1";
import { UpdateAccessKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAccessKeyCommand}.
 */
export interface UpdateAccessKeyCommandInput extends UpdateAccessKeyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccessKeyCommand}.
 */
export interface UpdateAccessKeyCommandOutput extends __MetadataBearer {}

/**
 * Changes the status of the specified access key from Active to Inactive, or vice versa. This operation can be used to disable a user's key as part of a key rotation workflow.
 *
 * If the `UserName` is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then `UserName` is required. If a long-term key is assigned to the user, then `UserName` is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.
 *
 * For information about rotating keys, see [Managing keys and certificates](https://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateAccessKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateAccessKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UpdateAccessKeyRequest
 *   UserName: "STRING_VALUE",
 *   AccessKeyId: "STRING_VALUE", // required
 *   Status: "Active" || "Inactive" || "Expired", // required
 * };
 * const command = new UpdateAccessKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAccessKeyCommandInput - {@link UpdateAccessKeyCommandInput}
 * @returns {@link UpdateAccessKeyCommandOutput}
 * @see {@link UpdateAccessKeyCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessKeyCommandOutput} for command's `response` shape.
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
 * @example To activate or deactivate an access key for an IAM user
 * ```javascript
 * // The following command deactivates the specified access key (access key ID and secret access key) for the IAM user named Bob.
 * const input = {
 *   AccessKeyId: "AKIAIOSFODNN7EXAMPLE",
 *   Status: "Inactive",
 *   UserName: "Bob"
 * };
 * const command = new UpdateAccessKeyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateAccessKeyCommand extends command<UpdateAccessKeyCommandInput, UpdateAccessKeyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAccessKey",
  UpdateAccessKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccessKeyRequest;
      output: {};
    };
    sdk: {
      input: UpdateAccessKeyCommandInput;
      output: UpdateAccessKeyCommandOutput;
    };
  };
}
