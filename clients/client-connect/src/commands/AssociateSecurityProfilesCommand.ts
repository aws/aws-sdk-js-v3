// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateSecurityProfilesRequest } from "../models/models_0";
import { AssociateSecurityProfiles } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateSecurityProfilesCommand}.
 */
export interface AssociateSecurityProfilesCommandInput extends AssociateSecurityProfilesRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSecurityProfilesCommand}.
 */
export interface AssociateSecurityProfilesCommandOutput extends __MetadataBearer {}

/**
 * <p> Associate security profiles with an Entity in an Amazon Connect instance. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateSecurityProfilesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateSecurityProfilesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // AssociateSecurityProfilesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   SecurityProfiles: [ // SecurityProfiles // required
 *     { // SecurityProfileItem
 *       Id: "STRING_VALUE",
 *     },
 *   ],
 *   EntityType: "USER" || "AI_AGENT", // required
 *   EntityArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateSecurityProfilesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateSecurityProfilesCommandInput - {@link AssociateSecurityProfilesCommandInput}
 * @returns {@link AssociateSecurityProfilesCommandOutput}
 * @see {@link AssociateSecurityProfilesCommandInput} for command's `input` shape.
 * @see {@link AssociateSecurityProfilesCommandOutput} for command's `response` shape.
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
export class AssociateSecurityProfilesCommand extends $Command
  .classBuilder<
    AssociateSecurityProfilesCommandInput,
    AssociateSecurityProfilesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "AssociateSecurityProfiles", {})
  .n("ConnectClient", "AssociateSecurityProfilesCommand")
  .sc(AssociateSecurityProfiles)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSecurityProfilesRequest;
      output: {};
    };
    sdk: {
      input: AssociateSecurityProfilesCommandInput;
      output: AssociateSecurityProfilesCommandOutput;
    };
  };
}
