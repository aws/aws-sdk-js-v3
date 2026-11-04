// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { DeleteAcmeDomainValidationRequest } from "../models/models_0";
import { DeleteAcmeDomainValidation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAcmeDomainValidationCommand}.
 */
export interface DeleteAcmeDomainValidationCommandInput extends DeleteAcmeDomainValidationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAcmeDomainValidationCommand}.
 */
export interface DeleteAcmeDomainValidationCommandOutput extends __MetadataBearer {}

/**
 * Deletes a domain validation. After deletion, the ACME endpoint can no longer issue certificates for the associated domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, DeleteAcmeDomainValidationCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, DeleteAcmeDomainValidationCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // DeleteAcmeDomainValidationRequest
 *   AcmeDomainValidationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAcmeDomainValidationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAcmeDomainValidationCommandInput - {@link DeleteAcmeDomainValidationCommandInput}
 * @returns {@link DeleteAcmeDomainValidationCommandOutput}
 * @see {@link DeleteAcmeDomainValidationCommandInput} for command's `input` shape.
 * @see {@link DeleteAcmeDomainValidationCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have access required to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * You are trying to update a resource or configuration that is already being created or updated. Wait for the previous operation to finish and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded a quota.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The supplied input failed to satisfy constraints of an Amazon Web Services service.
 *
 * @throws {@link ACMServiceException}
 *
 * Base exception class for all service exceptions from ACM service.
 *
 * @public
 */
export class DeleteAcmeDomainValidationCommand extends command<DeleteAcmeDomainValidationCommandInput, DeleteAcmeDomainValidationCommandOutput>(
  _ep1,
  _mw0,
  "DeleteAcmeDomainValidation",
  DeleteAcmeDomainValidation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAcmeDomainValidationRequest;
      output: {};
    };
    sdk: {
      input: DeleteAcmeDomainValidationCommandInput;
      output: DeleteAcmeDomainValidationCommandOutput;
    };
  };
}
