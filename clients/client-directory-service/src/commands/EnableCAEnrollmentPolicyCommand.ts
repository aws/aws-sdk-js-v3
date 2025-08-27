// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableCAEnrollmentPolicyRequest, EnableCAEnrollmentPolicyResult } from "../models/models_0";
import { de_EnableCAEnrollmentPolicyCommand, se_EnableCAEnrollmentPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Enables certificate authority (CA) enrollment policy for the specified directory. This allows
 *       domain-joined clients to automatically request and receive certificates from the specified
 *       Amazon Web Services Private Certificate Authority.</p>
 *          <note>
 *             <p>Before enabling CA enrollment, ensure that the PCA connector is properly configured and
 *         accessible from the directory. The connector must be in an active state and have the
 *         necessary permissions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, EnableCAEnrollmentPolicyCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, EnableCAEnrollmentPolicyCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
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
 * @throws {@link EnableAlreadyInProgressException} (client fault)
 *  <p>An enable operation for CA enrollment policy is already in progress for this directory.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The specified entity already exists.</p>
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
export class EnableCAEnrollmentPolicyCommand extends $Command
  .classBuilder<
    EnableCAEnrollmentPolicyCommandInput,
    EnableCAEnrollmentPolicyCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "EnableCAEnrollmentPolicy", {})
  .n("DirectoryServiceClient", "EnableCAEnrollmentPolicyCommand")
  .f(void 0, void 0)
  .ser(se_EnableCAEnrollmentPolicyCommand)
  .de(de_EnableCAEnrollmentPolicyCommand)
  .build() {
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
