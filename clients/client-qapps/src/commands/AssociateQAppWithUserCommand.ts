// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateQAppWithUserInput } from "../models/models_0";
import { de_AssociateQAppWithUserCommand, se_AssociateQAppWithUserCommand } from "../protocols/Aws_restJson1";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateQAppWithUserCommand}.
 */
export interface AssociateQAppWithUserCommandInput extends AssociateQAppWithUserInput {}
/**
 * @public
 *
 * The output of {@link AssociateQAppWithUserCommand}.
 */
export interface AssociateQAppWithUserCommandOutput extends __MetadataBearer {}

/**
 * <p>This operation creates a link between the user's identity calling the operation and a
 *       specific Q App. This is useful to mark the Q App as a <i>favorite</i> for the
 *       user if the user doesn't own the Amazon Q App so they can still run it and see it in their
 *       inventory of Q Apps.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, AssociateQAppWithUserCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, AssociateQAppWithUserCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QAppsClient(config);
 * const input = { // AssociateQAppWithUserInput
 *   instanceId: "STRING_VALUE", // required
 *   appId: "STRING_VALUE", // required
 * };
 * const command = new AssociateQAppWithUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateQAppWithUserCommandInput - {@link AssociateQAppWithUserCommandInput}
 * @returns {@link AssociateQAppWithUserCommandOutput}
 * @see {@link AssociateQAppWithUserCommandInput} for command's `input` shape.
 * @see {@link AssociateQAppWithUserCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The requested operation could not be completed because it would exceed the service's quota
 *       or limit.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The requested operation could not be completed because too many requests were sent at
 *       once. Wait a bit and try again later.</p>
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
 * @public
 * @example Links an Amazon Q App to the invoker's list of apps
 * ```javascript
 * //
 * const input = {
 *   "appId": "393e77fb-0a30-4f47-ad30-75d71aeaed8a",
 *   "instanceId": "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f"
 * };
 * const command = new AssociateQAppWithUserCommand(input);
 * await client.send(command);
 * // example id: example-1
 * ```
 *
 */
export class AssociateQAppWithUserCommand extends $Command
  .classBuilder<
    AssociateQAppWithUserCommandInput,
    AssociateQAppWithUserCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QAppsService", "AssociateQAppWithUser", {})
  .n("QAppsClient", "AssociateQAppWithUserCommand")
  .f(void 0, void 0)
  .ser(se_AssociateQAppWithUserCommand)
  .de(de_AssociateQAppWithUserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateQAppWithUserInput;
      output: {};
    };
    sdk: {
      input: AssociateQAppWithUserCommandInput;
      output: AssociateQAppWithUserCommandOutput;
    };
  };
}
