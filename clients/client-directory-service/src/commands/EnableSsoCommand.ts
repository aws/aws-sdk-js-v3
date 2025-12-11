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
import type { EnableSsoRequest, EnableSsoResult } from "../models/models_0";
import { EnableSso } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableSsoCommand}.
 */
export interface EnableSsoCommandInput extends EnableSsoRequest {}
/**
 * @public
 *
 * The output of {@link EnableSsoCommand}.
 */
export interface EnableSsoCommandOutput extends EnableSsoResult, __MetadataBearer {}

/**
 * <p>Enables single sign-on for a directory. Single sign-on allows users in your directory to
 *       access certain Amazon Web Services services from a computer joined to the directory without having to enter
 *       their credentials separately.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, EnableSsoCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, EnableSsoCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // EnableSsoRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE",
 *   Password: "STRING_VALUE",
 * };
 * const command = new EnableSsoCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableSsoCommandInput - {@link EnableSsoCommandInput}
 * @returns {@link EnableSsoCommandOutput}
 * @see {@link EnableSsoCommandInput} for command's `input` shape.
 * @see {@link EnableSsoCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link AuthenticationFailedException} (client fault)
 *  <p>An authentication error occurred.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InsufficientPermissionsException} (client fault)
 *  <p>The account does not have sufficient permission to perform the operation.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To enable SSO
 * ```javascript
 * // To enable single sign-on for a specified directory.
 * const input = {
 *   DirectoryId: "d-92654abfed",
 *   Password: "Str0ngP@ssw0rd",
 *   UserName: "Admin"
 * };
 * const command = new EnableSsoCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class EnableSsoCommand extends $Command
  .classBuilder<
    EnableSsoCommandInput,
    EnableSsoCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "EnableSso", {})
  .n("DirectoryServiceClient", "EnableSsoCommand")
  .sc(EnableSso)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableSsoRequest;
      output: {};
    };
    sdk: {
      input: EnableSsoCommandInput;
      output: EnableSsoCommandOutput;
    };
  };
}
