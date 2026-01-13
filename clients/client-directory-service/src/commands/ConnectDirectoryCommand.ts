// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DirectoryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ConnectDirectoryRequest, ConnectDirectoryResult } from "../models/models_0";
import { ConnectDirectory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConnectDirectoryCommand}.
 */
export interface ConnectDirectoryCommandInput extends ConnectDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link ConnectDirectoryCommand}.
 */
export interface ConnectDirectoryCommandOutput extends ConnectDirectoryResult, __MetadataBearer {}

/**
 * <p>Creates an AD Connector to connect to a self-managed directory.</p>
 *          <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions
 *       have been explicitly granted through a policy. For details about what permissions are required
 *       to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ConnectDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ConnectDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // ConnectDirectoryRequest
 *   Name: "STRING_VALUE", // required
 *   ShortName: "STRING_VALUE",
 *   Password: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Size: "Small" || "Large", // required
 *   ConnectSettings: { // DirectoryConnectSettings
 *     VpcId: "STRING_VALUE", // required
 *     SubnetIds: [ // SubnetIds // required
 *       "STRING_VALUE",
 *     ],
 *     CustomerDnsIps: [ // DnsIpAddrs
 *       "STRING_VALUE",
 *     ],
 *     CustomerDnsIpsV6: [ // DnsIpv6Addrs
 *       "STRING_VALUE",
 *     ],
 *     CustomerUserName: "STRING_VALUE", // required
 *   },
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   NetworkType: "Dual-stack" || "IPv4" || "IPv6",
 * };
 * const command = new ConnectDirectoryCommand(input);
 * const response = await client.send(command);
 * // { // ConnectDirectoryResult
 * //   DirectoryId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ConnectDirectoryCommandInput - {@link ConnectDirectoryCommandInput}
 * @returns {@link ConnectDirectoryCommandOutput}
 * @see {@link ConnectDirectoryCommandInput} for command's `input` shape.
 * @see {@link ConnectDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryLimitExceededException} (client fault)
 *  <p>The maximum number of directories in the region has been reached. You can use the
 *                 <a>GetDirectoryLimits</a> operation to determine your directory limits in
 *             the region.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To connect to an on-premises directory
 * ```javascript
 * // The following example creates an AD Connector to connect to an on-premises directory.
 * const input = {
 *   ConnectSettings: {
 *     CustomerDnsIps: [
 *       "172.30.21.228"
 *     ],
 *     CustomerUserName: "Administrator",
 *     SubnetIds: [
 *       "subnet-ba0146de",
 *       "subnet-bef46bc8"
 *     ],
 *     VpcId: "vpc-45025421"
 *   },
 *   Description: "Connector to corp",
 *   Name: "corp.example.com",
 *   Password: "Str0ngP@ssw0rd",
 *   ShortName: "corp",
 *   Size: "Small"
 * };
 * const command = new ConnectDirectoryCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DirectoryId: "d-92654abfed"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ConnectDirectoryCommand extends $Command
  .classBuilder<
    ConnectDirectoryCommandInput,
    ConnectDirectoryCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "ConnectDirectory", {})
  .n("DirectoryServiceClient", "ConnectDirectoryCommand")
  .sc(ConnectDirectory$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConnectDirectoryRequest;
      output: ConnectDirectoryResult;
    };
    sdk: {
      input: ConnectDirectoryCommandInput;
      output: ConnectDirectoryCommandOutput;
    };
  };
}
