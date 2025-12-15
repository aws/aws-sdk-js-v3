// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateQAppFromUserInput } from "../models/models_0";
import type { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";
import { DisassociateQAppFromUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateQAppFromUserCommand}.
 */
export interface DisassociateQAppFromUserCommandInput extends DisassociateQAppFromUserInput {}
/**
 * @public
 *
 * The output of {@link DisassociateQAppFromUserCommand}.
 */
export interface DisassociateQAppFromUserCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociates a Q App from a user removing the user's access to run the Q App.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, DisassociateQAppFromUserCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, DisassociateQAppFromUserCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // DisassociateQAppFromUserInput
 *   instanceId: "STRING_VALUE", // required
 *   appId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateQAppFromUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateQAppFromUserCommandInput - {@link DisassociateQAppFromUserCommandInput}
 * @returns {@link DisassociateQAppFromUserCommandOutput}
 * @see {@link DisassociateQAppFromUserCommandInput} for command's `input` shape.
 * @see {@link DisassociateQAppFromUserCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The requested operation could not be completed because too many requests were sent at once. Wait a bit and try again later.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client is not authenticated or authorized to perform the requested operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link QAppsServiceException}
 * <p>Base exception class for all service exceptions from QApps service.</p>
 *
 *
 * @example Unlinks an Amazon Q App from the invoker's list of apps
 * ```javascript
 * //
 * const input = {
 *   appId: "393e77fb-0a30-4f47-ad30-75d71aeaed8a",
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f"
 * };
 * const command = new DisassociateQAppFromUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DisassociateQAppFromUserCommand extends $Command
  .classBuilder<
    DisassociateQAppFromUserCommandInput,
    DisassociateQAppFromUserCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QAppsService", "DisassociateQAppFromUser", {})
  .n("QAppsClient", "DisassociateQAppFromUserCommand")
  .sc(DisassociateQAppFromUser$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateQAppFromUserInput;
      output: {};
    };
    sdk: {
      input: DisassociateQAppFromUserCommandInput;
      output: DisassociateQAppFromUserCommandOutput;
    };
  };
}
