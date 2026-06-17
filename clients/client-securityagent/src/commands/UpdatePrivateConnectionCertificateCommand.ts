// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdatePrivateConnectionCertificateInput,
  UpdatePrivateConnectionCertificateOutput,
} from "../models/models_0";
import { UpdatePrivateConnectionCertificate$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePrivateConnectionCertificateCommand}.
 */
export interface UpdatePrivateConnectionCertificateCommandInput extends UpdatePrivateConnectionCertificateInput {}
/**
 * @public
 *
 * The output of {@link UpdatePrivateConnectionCertificateCommand}.
 */
export interface UpdatePrivateConnectionCertificateCommandOutput extends UpdatePrivateConnectionCertificateOutput, __MetadataBearer {}

/**
 * <p>Updates the certificate associated with a private connection. Certificates can be added or replaced but not removed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, UpdatePrivateConnectionCertificateCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, UpdatePrivateConnectionCertificateCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // UpdatePrivateConnectionCertificateInput
 *   privateConnectionName: "STRING_VALUE", // required
 *   certificate: "STRING_VALUE", // required
 * };
 * const command = new UpdatePrivateConnectionCertificateCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePrivateConnectionCertificateOutput
 * //   name: "STRING_VALUE", // required
 * //   type: "SERVICE_MANAGED" || "SELF_MANAGED", // required
 * //   status: "ACTIVE" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED", // required
 * //   resourceGatewayId: "STRING_VALUE",
 * //   hostAddress: "STRING_VALUE",
 * //   vpcId: "STRING_VALUE",
 * //   resourceConfigurationId: "STRING_VALUE",
 * //   certificateExpiryTime: new Date("TIMESTAMP"),
 * //   dnsResolution: "PUBLIC" || "IN_VPC",
 * //   failureMessage: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePrivateConnectionCertificateCommandInput - {@link UpdatePrivateConnectionCertificateCommandInput}
 * @returns {@link UpdatePrivateConnectionCertificateCommandOutput}
 * @see {@link UpdatePrivateConnectionCertificateCommandInput} for command's `input` shape.
 * @see {@link UpdatePrivateConnectionCertificateCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource identifier is correct and that the resource exists in the specified agent space or account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class UpdatePrivateConnectionCertificateCommand extends $Command
  .classBuilder<
    UpdatePrivateConnectionCertificateCommandInput,
    UpdatePrivateConnectionCertificateCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "UpdatePrivateConnectionCertificate", {})
  .n("SecurityAgentClient", "UpdatePrivateConnectionCertificateCommand")
  .sc(UpdatePrivateConnectionCertificate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePrivateConnectionCertificateInput;
      output: UpdatePrivateConnectionCertificateOutput;
    };
    sdk: {
      input: UpdatePrivateConnectionCertificateCommandInput;
      output: UpdatePrivateConnectionCertificateCommandOutput;
    };
  };
}
