// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SetDefaultPermissionVersionRequest, SetDefaultPermissionVersionResponse } from "../models/models_0";
import {
  de_SetDefaultPermissionVersionCommand,
  se_SetDefaultPermissionVersionCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetDefaultPermissionVersionCommand}.
 */
export interface SetDefaultPermissionVersionCommandInput extends SetDefaultPermissionVersionRequest {}
/**
 * @public
 *
 * The output of {@link SetDefaultPermissionVersionCommand}.
 */
export interface SetDefaultPermissionVersionCommandOutput
  extends SetDefaultPermissionVersionResponse,
    __MetadataBearer {}

/**
 * <p>Designates the specified version number as the default version for the specified
 *             customer managed permission. New resource shares automatically use this new default permission. Existing
 *             resource shares continue to use their original permission version, but you can use <a>ReplacePermissionAssociations</a> to update them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, SetDefaultPermissionVersionCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, SetDefaultPermissionVersionCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // SetDefaultPermissionVersionRequest
 *   permissionArn: "STRING_VALUE", // required
 *   permissionVersion: Number("int"), // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new SetDefaultPermissionVersionCommand(input);
 * const response = await client.send(command);
 * // { // SetDefaultPermissionVersionResponse
 * //   returnValue: true || false,
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SetDefaultPermissionVersionCommandInput - {@link SetDefaultPermissionVersionCommandInput}
 * @returns {@link SetDefaultPermissionVersionCommandOutput}
 * @see {@link SetDefaultPermissionVersionCommandInput} for command's `input` shape.
 * @see {@link SetDefaultPermissionVersionCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The operation failed because the client token input parameter matched one that was
 *             used with a previous call to the operation, but at least one of the other input
 *             parameters is different from the previous call.</p>
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *  <p>The operation failed because the specified client token isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The operation failed because a specified resource couldn't be found.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 * @public
 */
export class SetDefaultPermissionVersionCommand extends $Command
  .classBuilder<
    SetDefaultPermissionVersionCommandInput,
    SetDefaultPermissionVersionCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonResourceSharing", "SetDefaultPermissionVersion", {})
  .n("RAMClient", "SetDefaultPermissionVersionCommand")
  .f(void 0, void 0)
  .ser(se_SetDefaultPermissionVersionCommand)
  .de(de_SetDefaultPermissionVersionCommand)
  .build() {}
