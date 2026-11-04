// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddIpRoutesRequest, AddIpRoutesResult } from "../models/models_0";
import { AddIpRoutes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * If the DNS server for your self-managed domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. *AddIpRoutes* adds this address block. You can also use *AddIpRoutes* to facilitate routing traffic that uses public IP ranges from your Microsoft AD on Amazon Web Services to a peer VPC.
 *
 * Before you call *AddIpRoutes*, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the *AddIpRoutes* operation, see [Directory Service API Permissions: Actions, Resources, and Conditions Reference](http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html).
 *
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
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *
 * The specified directory is unavailable.
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *
 * The specified entity already exists.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link IpRouteLimitExceededException} (client fault)
 *
 * The maximum allowed number of IP addresses was exceeded. The default limit is 100 IP address blocks.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
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
export class AddIpRoutesCommand extends command<AddIpRoutesCommandInput, AddIpRoutesCommandOutput>(
  _ep0,
  _mw0,
  "AddIpRoutes",
  AddIpRoutes$
) {
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
