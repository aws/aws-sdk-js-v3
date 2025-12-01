// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DirectoryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisableCAEnrollmentPolicyRequest, DisableCAEnrollmentPolicyResult } from "../models/models_0";
import { DisableCAEnrollmentPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Disables the certificate authority (CA) enrollment policy for the specified directory. This stops
 *       automatic certificate enrollment and management for domain-joined clients, but does not affect
 *       existing certificates.</p>
 *          <important>
 *             <p>Disabling the CA enrollment policy prevents new certificates from being automatically
 *         enrolled, but existing certificates remain valid and functional until they expire.</p>
 *          </important>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable.</p>
 *
 * @throws {@link DisableAlreadyInProgressException} (client fault)
 *  <p>A disable operation for CA enrollment policy is already in progress for this directory.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class DisableCAEnrollmentPolicyCommand extends $Command
  .classBuilder<
    DisableCAEnrollmentPolicyCommandInput,
    DisableCAEnrollmentPolicyCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "DisableCAEnrollmentPolicy", {})
  .n("DirectoryServiceClient", "DisableCAEnrollmentPolicyCommand")
  .sc(DisableCAEnrollmentPolicy)
  .build() {
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
