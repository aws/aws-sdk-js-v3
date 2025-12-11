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
import type { AddIpRoutesRequest, AddIpRoutesResult } from "../models/models_0";
import { AddIpRoutes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddIpRoutesCommand}.
 */
export interface AddIpRoutesCommandInput extends AddIpRoutesRequest {}
/**
 * @public
 *
 * The output of {@link AddIpRoutesCommand}.
 */
export interface AddIpRoutesCommandOutput extends AddIpRoutesResult, __MetadataBearer {}

/**
 * <p>If the DNS server for your self-managed domain uses a publicly addressable IP address,
 *          you must add a CIDR address block to correctly route traffic to and from your Microsoft AD
 *          on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can
 *          also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP
 *          ranges from your Microsoft AD on Amazon Web Services to a peer VPC. </p>
 *          <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required
 *          permissions have been explicitly granted through a policy. For details about what
 *          permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, AddIpRoutesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, AddIpRoutesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // AddIpRoutesRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   IpRoutes: [ // IpRoutes // required
 *     { // IpRoute
 *       CidrIp: "STRING_VALUE",
 *       CidrIpv6: "STRING_VALUE",
 *       Description: "STRING_VALUE",
 *     },
 *   ],
 *   UpdateSecurityGroupForDirectoryControllers: true || false,
 * };
 * const command = new AddIpRoutesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddIpRoutesCommandInput - {@link AddIpRoutesCommandInput}
 * @returns {@link AddIpRoutesCommandOutput}
 * @see {@link AddIpRoutesCommandInput} for command's `input` shape.
 * @see {@link AddIpRoutesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The specified entity already exists.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link IpRouteLimitExceededException} (client fault)
 *  <p>The maximum allowed number of IP addresses was exceeded. The default limit is 100 IP
 *          address blocks.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To add a CIDR address block that routes traffic for Microsoft AD
 * ```javascript
 * // The following example adds a CIDR address block to correctly route traffic to and from your Microsoft AD on AWS.
 * const input = {
 *   DirectoryId: "d-92654abfed",
 *   IpRoutes: [
 *     {
 *       CidrIp: "12.12.12.12/32",
 *       Description: "my IpRoute"
 *     }
 *   ]
 * };
 * const command = new AddIpRoutesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AddIpRoutesCommand extends $Command
  .classBuilder<
    AddIpRoutesCommandInput,
    AddIpRoutesCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "AddIpRoutes", {})
  .n("DirectoryServiceClient", "AddIpRoutesCommand")
  .sc(AddIpRoutes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddIpRoutesRequest;
      output: {};
    };
    sdk: {
      input: AddIpRoutesCommandInput;
      output: AddIpRoutesCommandOutput;
    };
  };
}
