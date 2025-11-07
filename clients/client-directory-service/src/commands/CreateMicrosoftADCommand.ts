// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateMicrosoftADRequest, CreateMicrosoftADResult } from "../models/models_0";
import { CreateMicrosoftAD } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMicrosoftADCommand}.
 */
export interface CreateMicrosoftADCommandInput extends CreateMicrosoftADRequest {}
/**
 * @public
 *
 * The output of {@link CreateMicrosoftADCommand}.
 */
export interface CreateMicrosoftADCommandOutput extends CreateMicrosoftADResult, __MetadataBearer {}

/**
 * <p>Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a> in the <i>Directory Service Admin Guide</i>.</p>
 *          <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required
 *       permissions have been explicitly granted through a policy. For details about what permissions
 *       are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateMicrosoftADCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateMicrosoftADCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // CreateMicrosoftADRequest
 *   Name: "STRING_VALUE", // required
 *   ShortName: "STRING_VALUE",
 *   Password: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   VpcSettings: { // DirectoryVpcSettings
 *     VpcId: "STRING_VALUE", // required
 *     SubnetIds: [ // SubnetIds // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Edition: "Enterprise" || "Standard" || "Hybrid",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   NetworkType: "Dual-stack" || "IPv4" || "IPv6",
 * };
 * const command = new CreateMicrosoftADCommand(input);
 * const response = await client.send(command);
 * // { // CreateMicrosoftADResult
 * //   DirectoryId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMicrosoftADCommandInput - {@link CreateMicrosoftADCommandInput}
 * @returns {@link CreateMicrosoftADCommandOutput}
 * @see {@link CreateMicrosoftADCommandInput} for command's `input` shape.
 * @see {@link CreateMicrosoftADCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To create a Microsoft AD directory
 * ```javascript
 * // The following example creates a Microsoft AD directory in the AWS cloud.
 * const input = {
 *   Description: "Corporate AD directory",
 *   Name: "ad.example.com",
 *   Password: "Str0ngP@ssw0rd",
 *   ShortName: "ad",
 *   VpcSettings: {
 *     SubnetIds: [
 *       "subnet-ba0146de",
 *       "subnet-bef46bc8"
 *     ],
 *     VpcId: "vpc-45025421"
 *   }
 * };
 * const command = new CreateMicrosoftADCommand(input);
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
export class CreateMicrosoftADCommand extends $Command
  .classBuilder<
    CreateMicrosoftADCommandInput,
    CreateMicrosoftADCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "CreateMicrosoftAD", {})
  .n("DirectoryServiceClient", "CreateMicrosoftADCommand")
  .sc(CreateMicrosoftAD)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMicrosoftADRequest;
      output: CreateMicrosoftADResult;
    };
    sdk: {
      input: CreateMicrosoftADCommandInput;
      output: CreateMicrosoftADCommandOutput;
    };
  };
}
