// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateApplicationRequest, UpdateApplicationResponse } from "../models/models_0";
import { UpdateApplication$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandInput extends UpdateApplicationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandOutput extends UpdateApplicationResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of an existing application, including the IAM role and default KMS key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, UpdateApplicationCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, UpdateApplicationCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // UpdateApplicationRequest
 *   applicationId: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE",
 *   defaultKmsKeyId: "STRING_VALUE",
 * };
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApplicationResponse
 * //   applicationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateApplicationCommandInput - {@link UpdateApplicationCommandInput}
 * @returns {@link UpdateApplicationCommandOutput}
 * @see {@link UpdateApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class UpdateApplicationCommand extends $Command
  .classBuilder<
    UpdateApplicationCommandInput,
    UpdateApplicationCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "UpdateApplication", {})
  .n("SecurityAgentClient", "UpdateApplicationCommand")
  .sc(UpdateApplication$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApplicationRequest;
      output: UpdateApplicationResponse;
    };
    sdk: {
      input: UpdateApplicationCommandInput;
      output: UpdateApplicationCommandOutput;
    };
  };
}
