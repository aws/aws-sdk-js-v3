// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EnableCAEnrollmentPolicyRequest, EnableCAEnrollmentPolicyResult } from "../models/models_0";
import { EnableCAEnrollmentPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableCAEnrollmentPolicyCommand}.
 */
export interface EnableCAEnrollmentPolicyCommandInput extends EnableCAEnrollmentPolicyRequest {}
/**
 * @public
 *
 * The output of {@link EnableCAEnrollmentPolicyCommand}.
 */
export interface EnableCAEnrollmentPolicyCommandOutput extends EnableCAEnrollmentPolicyResult, __MetadataBearer {}

/**
 * Enables certificate authority (CA) enrollment policy for the specified directory. This allows domain-joined clients to automatically request and receive certificates from the specified Amazon Web Services Private Certificate Authority.
 *
 * > **Note:** Before enabling CA enrollment, ensure that the PCA connector is properly configured and accessible from the directory. The connector must be in an active state and have the necessary permissions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, EnableCAEnrollmentPolicyCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, EnableCAEnrollmentPolicyCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // EnableCAEnrollmentPolicyRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   PcaConnectorArn: "STRING_VALUE", // required
 * };
 * const command = new EnableCAEnrollmentPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableCAEnrollmentPolicyCommandInput - {@link EnableCAEnrollmentPolicyCommandInput}
 * @returns {@link EnableCAEnrollmentPolicyCommandOutput}
 * @see {@link EnableCAEnrollmentPolicyCommandInput} for command's `input` shape.
 * @see {@link EnableCAEnrollmentPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link EnableAlreadyInProgressException} (client fault)
 *
 * An enable operation for CA enrollment policy is already in progress for this directory.
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *
 * The specified entity already exists.
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
export class EnableCAEnrollmentPolicyCommand extends command<EnableCAEnrollmentPolicyCommandInput, EnableCAEnrollmentPolicyCommandOutput>(
  _ep0,
  _mw0,
  "EnableCAEnrollmentPolicy",
  EnableCAEnrollmentPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableCAEnrollmentPolicyRequest;
      output: {};
    };
    sdk: {
      input: EnableCAEnrollmentPolicyCommandInput;
      output: EnableCAEnrollmentPolicyCommandOutput;
    };
  };
}
