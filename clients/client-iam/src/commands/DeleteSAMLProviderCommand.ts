// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSAMLProviderRequest } from "../models/models_0";
import { DeleteSAMLProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSAMLProviderCommand}.
 */
export interface DeleteSAMLProviderCommandInput extends DeleteSAMLProviderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSAMLProviderCommand}.
 */
export interface DeleteSAMLProviderCommandOutput extends __MetadataBearer {}

/**
 * Deletes a SAML provider resource in IAM.
 *
 * Deleting the provider resource from IAM does not update any roles that reference the SAML provider resource's ARN as a principal in their trust policies. Any attempt to assume a role that references a non-existent provider resource ARN fails.
 *
 * > **Note:** This operation requires [Signature Version 4](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteSAMLProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteSAMLProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // DeleteSAMLProviderRequest
 *   SAMLProviderArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteSAMLProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSAMLProviderCommandInput - {@link DeleteSAMLProviderCommandInput}
 * @returns {@link DeleteSAMLProviderCommandOutput}
 * @see {@link DeleteSAMLProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteSAMLProviderCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteSAMLProviderCommand extends command<DeleteSAMLProviderCommandInput, DeleteSAMLProviderCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSAMLProvider",
  DeleteSAMLProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSAMLProviderRequest;
      output: {};
    };
    sdk: {
      input: DeleteSAMLProviderCommandInput;
      output: DeleteSAMLProviderCommandOutput;
    };
  };
}
