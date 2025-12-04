// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateSecurityProfilesRequest } from "../models/models_1";
import { DisassociateSecurityProfiles } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateSecurityProfilesCommand}.
 */
export interface DisassociateSecurityProfilesCommandInput extends DisassociateSecurityProfilesRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateSecurityProfilesCommand}.
 */
export interface DisassociateSecurityProfilesCommandOutput extends __MetadataBearer {}

/**
 * <p> Disassociates a security profile attached to a Q in Connect AI Agent Entity in an Amazon Connect instance.
 *   </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateSecurityProfilesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateSecurityProfilesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DisassociateSecurityProfilesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   SecurityProfiles: [ // SecurityProfiles // required
 *     { // SecurityProfileItem
 *       Id: "STRING_VALUE",
 *     },
 *   ],
 *   EntityType: "USER" || "AI_AGENT", // required
 *   EntityArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateSecurityProfilesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateSecurityProfilesCommandInput - {@link DisassociateSecurityProfilesCommandInput}
 * @returns {@link DisassociateSecurityProfilesCommandOutput}
 * @see {@link DisassociateSecurityProfilesCommandInput} for command's `input` shape.
 * @see {@link DisassociateSecurityProfilesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConditionalOperationFailedException} (client fault)
 *  <p>Request processing failed because dependent condition failed.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DisassociateSecurityProfilesCommand extends $Command
  .classBuilder<
    DisassociateSecurityProfilesCommandInput,
    DisassociateSecurityProfilesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DisassociateSecurityProfiles", {})
  .n("ConnectClient", "DisassociateSecurityProfilesCommand")
  .sc(DisassociateSecurityProfiles)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateSecurityProfilesRequest;
      output: {};
    };
    sdk: {
      input: DisassociateSecurityProfilesCommandInput;
      output: DisassociateSecurityProfilesCommandOutput;
    };
  };
}
