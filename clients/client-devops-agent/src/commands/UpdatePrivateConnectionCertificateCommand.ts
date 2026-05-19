// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdatePrivateConnectionCertificateInput,
  UpdatePrivateConnectionCertificateOutput,
} from "../models/models_0";
import { UpdatePrivateConnectionCertificate$ } from "../schemas/schemas_0";

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
 * <p>Updates the certificate associated with a Private Connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, UpdatePrivateConnectionCertificateCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, UpdatePrivateConnectionCertificateCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // UpdatePrivateConnectionCertificateInput
 *   name: "STRING_VALUE", // required
 *   certificate: "STRING_VALUE", // required
 * };
 * const command = new UpdatePrivateConnectionCertificateCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePrivateConnectionCertificateOutput
 * //   name: "STRING_VALUE", // required
 * //   type: "SELF_MANAGED" || "SERVICE_MANAGED", // required
 * //   resourceGatewayId: "STRING_VALUE",
 * //   hostAddress: "STRING_VALUE",
 * //   vpcId: "STRING_VALUE",
 * //   resourceConfigurationId: "STRING_VALUE",
 * //   status: "ACTIVE" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED", // required
 * //   certificateExpiryTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdatePrivateConnectionCertificateCommandInput - {@link UpdatePrivateConnectionCertificateCommandInput}
 * @returns {@link UpdatePrivateConnectionCertificateCommandOutput}
 * @see {@link UpdatePrivateConnectionCertificateCommandInput} for command's `input` shape.
 * @see {@link UpdatePrivateConnectionCertificateCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the requested resource is denied due to insufficient permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an unexpected error occurs in the processing of a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Please slow down and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  <p>This exception is thrown when the content size exceeds the allowed limit.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters provided in the request are invalid.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed the service quota limit.</p>
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class UpdatePrivateConnectionCertificateCommand extends $Command
  .classBuilder<
    UpdatePrivateConnectionCertificateCommandInput,
    UpdatePrivateConnectionCertificateCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "UpdatePrivateConnectionCertificate", {})
  .n("DevOpsAgentClient", "UpdatePrivateConnectionCertificateCommand")
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
