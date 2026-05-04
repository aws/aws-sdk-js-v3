// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateApplicationRequest, CreateApplicationResponse } from "../models/models_0";
import { CreateApplication$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandInput extends CreateApplicationRequest {}
/**
 * @public
 *
 * The output of {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandOutput extends CreateApplicationResponse, __MetadataBearer {}

/**
 * <p>Creates a new application. An application is the top-level organizational unit that supports IAM Identity Center integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, CreateApplicationCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, CreateApplicationCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // CreateApplicationRequest
 *   idcInstanceArn: "STRING_VALUE",
 *   roleArn: "STRING_VALUE",
 *   defaultKmsKeyId: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateApplicationResponse
 * //   applicationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateApplicationCommandInput - {@link CreateApplicationCommandInput}
 * @returns {@link CreateApplicationCommandOutput}
 * @see {@link CreateApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class CreateApplicationCommand extends $Command
  .classBuilder<
    CreateApplicationCommandInput,
    CreateApplicationCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "CreateApplication", {})
  .n("SecurityAgentClient", "CreateApplicationCommand")
  .sc(CreateApplication$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApplicationRequest;
      output: CreateApplicationResponse;
    };
    sdk: {
      input: CreateApplicationCommandInput;
      output: CreateApplicationCommandOutput;
    };
  };
}
