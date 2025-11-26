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
import type { CreateDirectoryRequest, CreateDirectoryResult } from "../models/models_0";
import { CreateDirectory } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDirectoryCommand}.
 */
export interface CreateDirectoryCommandInput extends CreateDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link CreateDirectoryCommand}.
 */
export interface CreateDirectoryCommandOutput extends CreateDirectoryResult, __MetadataBearer {}

/**
 * <p>Creates a Simple AD directory. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html">Simple Active Directory</a> in the <i>Directory Service Admin Guide</i>.</p>
 *          <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions
 *       have been explicitly granted through a policy. For details about what permissions are required
 *       to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // CreateDirectoryRequest
 *   Name: "STRING_VALUE", // required
 *   ShortName: "STRING_VALUE",
 *   Password: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Size: "Small" || "Large", // required
 *   VpcSettings: { // DirectoryVpcSettings
 *     VpcId: "STRING_VALUE", // required
 *     SubnetIds: [ // SubnetIds // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   NetworkType: "Dual-stack" || "IPv4" || "IPv6",
 * };
 * const command = new CreateDirectoryCommand(input);
 * const response = await client.send(command);
 * // { // CreateDirectoryResult
 * //   DirectoryId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDirectoryCommandInput - {@link CreateDirectoryCommandInput}
 * @returns {@link CreateDirectoryCommandOutput}
 * @see {@link CreateDirectoryCommandInput} for command's `input` shape.
 * @see {@link CreateDirectoryCommandOutput} for command's `response` shape.
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
 * @example To create a Simple AD directory
 * ```javascript
 * // The following example creates a Simple AD directory.
 * const input = {
 *   Description: "Regional directory for example.com",
 *   Name: "seattle.example.com",
 *   Password: "Str0ngP@ssw0rd",
 *   ShortName: "seattle",
 *   Size: "Small",
 *   VpcSettings: {
 *     SubnetIds: [
 *       "subnet-ba0146de",
 *       "subnet-bef46bc8"
 *     ],
 *     VpcId: "vpc-45025421"
 *   }
 * };
 * const command = new CreateDirectoryCommand(input);
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
export class CreateDirectoryCommand extends $Command
  .classBuilder<
    CreateDirectoryCommandInput,
    CreateDirectoryCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "CreateDirectory", {})
  .n("DirectoryServiceClient", "CreateDirectoryCommand")
  .sc(CreateDirectory)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDirectoryRequest;
      output: CreateDirectoryResult;
    };
    sdk: {
      input: CreateDirectoryCommandInput;
      output: CreateDirectoryCommandOutput;
    };
  };
}
