// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DisassociateResourceSharePermissionRequest,
  DisassociateResourceSharePermissionResponse,
} from "../models/models_0";
import type { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { DisassociateResourceSharePermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateResourceSharePermissionCommand}.
 */
export interface DisassociateResourceSharePermissionCommandInput extends DisassociateResourceSharePermissionRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateResourceSharePermissionCommand}.
 */
export interface DisassociateResourceSharePermissionCommandOutput
  extends DisassociateResourceSharePermissionResponse,
    __MetadataBearer {}

/**
 * <p>Removes a managed permission from a resource share. Permission changes take effect immediately. You can
 *             remove a managed permission from a resource share only if there are currently no resources of the relevant
 *             resource type currently attached to the resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, DisassociateResourceSharePermissionCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, DisassociateResourceSharePermissionCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // DisassociateResourceSharePermissionRequest
 *   resourceShareArn: "STRING_VALUE", // required
 *   permissionArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DisassociateResourceSharePermissionCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateResourceSharePermissionResponse
 * //   returnValue: true || false,
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateResourceSharePermissionCommandInput - {@link DisassociateResourceSharePermissionCommandInput}
 * @returns {@link DisassociateResourceSharePermissionCommandOutput}
 * @see {@link DisassociateResourceSharePermissionCommandInput} for command's `input` shape.
 * @see {@link DisassociateResourceSharePermissionCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *  <p>The operation failed because the specified client token isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link InvalidStateTransitionException} (client fault)
 *  <p>The operation failed because the requested operation isn't valid for the resource
 *             share in its current state.</p>
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
 *
 * @public
 */
export class DisassociateResourceSharePermissionCommand extends $Command
  .classBuilder<
    DisassociateResourceSharePermissionCommandInput,
    DisassociateResourceSharePermissionCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonResourceSharing", "DisassociateResourceSharePermission", {})
  .n("RAMClient", "DisassociateResourceSharePermissionCommand")
  .sc(DisassociateResourceSharePermission$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateResourceSharePermissionRequest;
      output: DisassociateResourceSharePermissionResponse;
    };
    sdk: {
      input: DisassociateResourceSharePermissionCommandInput;
      output: DisassociateResourceSharePermissionCommandOutput;
    };
  };
}
