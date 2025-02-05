// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AddIpRoutesRequest, AddIpRoutesResult } from "../models/models_0";
import { de_AddIpRoutesCommand, se_AddIpRoutesCommand } from "../protocols/Aws_json1_1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DirectoryServiceClient(config);
 * const input = { // AddIpRoutesRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   IpRoutes: [ // IpRoutes // required
 *     { // IpRoute
 *       CidrIp: "STRING_VALUE",
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "AddIpRoutes", {})
  .n("DirectoryServiceClient", "AddIpRoutesCommand")
  .f(void 0, void 0)
  .ser(se_AddIpRoutesCommand)
  .de(de_AddIpRoutesCommand)
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
