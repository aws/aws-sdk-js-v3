// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateResourceSharePermissionRequest, AssociateResourceSharePermissionResponse } from "../models/models_0";
import {
  de_AssociateResourceSharePermissionCommand,
  se_AssociateResourceSharePermissionCommand,
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
 * The input for {@link AssociateResourceSharePermissionCommand}.
 */
export interface AssociateResourceSharePermissionCommandInput extends AssociateResourceSharePermissionRequest {}
/**
 * @public
 *
 * The output of {@link AssociateResourceSharePermissionCommand}.
 */
export interface AssociateResourceSharePermissionCommandOutput
  extends AssociateResourceSharePermissionResponse,
    __MetadataBearer {}

/**
 * <p>Adds or replaces the RAM permission for a resource type included in a resource share. You can
 *             have exactly one permission associated with each resource type in the resource share. You can add
 *             a new RAM permission only if there are currently no resources of that resource type
 *             currently in the resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, AssociateResourceSharePermissionCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, AssociateResourceSharePermissionCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RAMClient(config);
 * const input = { // AssociateResourceSharePermissionRequest
 *   resourceShareArn: "STRING_VALUE", // required
 *   permissionArn: "STRING_VALUE", // required
 *   replace: true || false,
 *   clientToken: "STRING_VALUE",
 *   permissionVersion: Number("int"),
 * };
 * const command = new AssociateResourceSharePermissionCommand(input);
 * const response = await client.send(command);
 * // { // AssociateResourceSharePermissionResponse
 * //   returnValue: true || false,
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateResourceSharePermissionCommandInput - {@link AssociateResourceSharePermissionCommandInput}
 * @returns {@link AssociateResourceSharePermissionCommandOutput}
 * @see {@link AssociateResourceSharePermissionCommandInput} for command's `input` shape.
 * @see {@link AssociateResourceSharePermissionCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
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
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The operation failed because the requested operation isn't permitted.</p>
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
export class AssociateResourceSharePermissionCommand extends $Command
  .classBuilder<
    AssociateResourceSharePermissionCommandInput,
    AssociateResourceSharePermissionCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonResourceSharing", "AssociateResourceSharePermission", {})
  .n("RAMClient", "AssociateResourceSharePermissionCommand")
  .f(void 0, void 0)
  .ser(se_AssociateResourceSharePermissionCommand)
  .de(de_AssociateResourceSharePermissionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateResourceSharePermissionRequest;
      output: AssociateResourceSharePermissionResponse;
    };
    sdk: {
      input: AssociateResourceSharePermissionCommandInput;
      output: AssociateResourceSharePermissionCommandOutput;
    };
  };
}
