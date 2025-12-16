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
import type { DisableSsoRequest, DisableSsoResult } from "../models/models_0";
import { DisableSso$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableSsoCommand}.
 */
export interface DisableSsoCommandInput extends DisableSsoRequest {}
/**
 * @public
 *
 * The output of {@link DisableSsoCommand}.
 */
export interface DisableSsoCommandOutput extends DisableSsoResult, __MetadataBearer {}

/**
 * <p>Disables single-sign on for a directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DisableSsoCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DisableSsoCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DisableSsoRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE",
 *   Password: "STRING_VALUE",
 * };
 * const command = new DisableSsoCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableSsoCommandInput - {@link DisableSsoCommandInput}
 * @returns {@link DisableSsoCommandOutput}
 * @see {@link DisableSsoCommandInput} for command's `input` shape.
 * @see {@link DisableSsoCommandOutput} for command's `response` shape.
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
 * @example To disable SSO
 * ```javascript
 * // The following example disables single sign-on for a specified directory.
 * const input = {
 *   DirectoryId: "d-92654abfed",
 *   Password: "Str0ngP@ssw0rd",
 *   UserName: "Admin"
 * };
 * const command = new DisableSsoCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DisableSsoCommand extends $Command
  .classBuilder<
    DisableSsoCommandInput,
    DisableSsoCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "DisableSso", {})
  .n("DirectoryServiceClient", "DisableSsoCommand")
  .sc(DisableSso$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableSsoRequest;
      output: {};
    };
    sdk: {
      input: DisableSsoCommandInput;
      output: DisableSsoCommandOutput;
    };
  };
}
