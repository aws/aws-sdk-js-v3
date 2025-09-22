// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { JoinDomainInput, JoinDomainOutput } from "../models/models_0";
import { JoinDomain } from "../schemas/schemas_20_FileSystem";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link JoinDomainCommand}.
 */
export interface JoinDomainCommandInput extends JoinDomainInput {}
/**
 * @public
 *
 * The output of {@link JoinDomainCommand}.
 */
export interface JoinDomainCommandOutput extends JoinDomainOutput, __MetadataBearer {}

/**
 * <p>Adds a file gateway to an Active Directory domain. This operation is only supported for
 *          file gateways that support the SMB file protocol.</p>
 *          <note>
 *             <p>Joining a domain creates an Active Directory computer account in the default
 *             organizational unit, using the gateway's <b>Gateway ID</b> as
 *             the account name (for example, SGW-1234ADE). If your Active Directory environment
 *             requires that you pre-stage accounts to facilitate the join domain process, you will
 *             need to create this account ahead of time.</p>
 *             <p>To create the gateway's computer account in an organizational unit other than the
 *             default, you must specify the organizational unit when joining the domain.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, JoinDomainCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, JoinDomainCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // JoinDomainInput
 *   GatewayARN: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 *   OrganizationalUnit: "STRING_VALUE",
 *   DomainControllers: [ // Hosts
 *     "STRING_VALUE",
 *   ],
 *   TimeoutInSeconds: Number("int"),
 *   UserName: "STRING_VALUE", // required
 *   Password: "STRING_VALUE", // required
 * };
 * const command = new JoinDomainCommand(input);
 * const response = await client.send(command);
 * // { // JoinDomainOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   ActiveDirectoryStatus: "ACCESS_DENIED" || "DETACHED" || "JOINED" || "JOINING" || "NETWORK_ERROR" || "TIMEOUT" || "UNKNOWN_ERROR" || "INSUFFICIENT_PERMISSIONS",
 * // };
 *
 * ```
 *
 * @param JoinDomainCommandInput - {@link JoinDomainCommandInput}
 * @returns {@link JoinDomainCommandOutput}
 * @see {@link JoinDomainCommandInput} for command's `input` shape.
 * @see {@link JoinDomainCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 *
 * @public
 */
export class JoinDomainCommand extends $Command
  .classBuilder<
    JoinDomainCommandInput,
    JoinDomainCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "JoinDomain", {})
  .n("StorageGatewayClient", "JoinDomainCommand")
  .sc(JoinDomain)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: JoinDomainInput;
      output: JoinDomainOutput;
    };
    sdk: {
      input: JoinDomainCommandInput;
      output: JoinDomainCommandOutput;
    };
  };
}
