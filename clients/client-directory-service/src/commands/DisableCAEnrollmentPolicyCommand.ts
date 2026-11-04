// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableCAEnrollmentPolicyRequest, DisableCAEnrollmentPolicyResult } from "../models/models_0";
import { DisableCAEnrollmentPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableCAEnrollmentPolicyCommand}.
 */
export interface DisableCAEnrollmentPolicyCommandInput extends DisableCAEnrollmentPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DisableCAEnrollmentPolicyCommand}.
 */
export interface DisableCAEnrollmentPolicyCommandOutput extends DisableCAEnrollmentPolicyResult, __MetadataBearer {}

/**
 * Disables the certificate authority (CA) enrollment policy for the specified directory. This stops automatic certificate enrollment and management for domain-joined clients, but does not affect existing certificates.
 *
 * > **Important:** Disabling the CA enrollment policy prevents new certificates from being automatically enrolled, but existing certificates remain valid and functional until they expire.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DisableCAEnrollmentPolicyCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DisableCAEnrollmentPolicyCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DisableCAEnrollmentPolicyRequest
 *   DirectoryId: "STRING_VALUE", // required
 * };
 * const command = new DisableCAEnrollmentPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableCAEnrollmentPolicyCommandInput - {@link DisableCAEnrollmentPolicyCommandInput}
 * @returns {@link DisableCAEnrollmentPolicyCommandOutput}
 * @see {@link DisableCAEnrollmentPolicyCommandInput} for command's `input` shape.
 * @see {@link DisableCAEnrollmentPolicyCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *
 * The specified directory does not exist in the system.
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *
 * The specified directory is unavailable.
 *
 * @throws {@link DisableAlreadyInProgressException} (client fault)
 *
 * A disable operation for CA enrollment policy is already in progress for this directory.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @public
 */
export class DisableCAEnrollmentPolicyCommand extends command<DisableCAEnrollmentPolicyCommandInput, DisableCAEnrollmentPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DisableCAEnrollmentPolicy",
  DisableCAEnrollmentPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableCAEnrollmentPolicyRequest;
      output: {};
    };
    sdk: {
      input: DisableCAEnrollmentPolicyCommandInput;
      output: DisableCAEnrollmentPolicyCommandOutput;
    };
  };
}
