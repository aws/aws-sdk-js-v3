// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { ListAccountPermissionsRequest, ListAccountPermissionsResponse } from "../models/models_0";
import { de_ListAccountPermissionsCommand, se_ListAccountPermissionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccountPermissionsCommand}.
 */
export interface ListAccountPermissionsCommandInput extends ListAccountPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountPermissionsCommand}.
 */
export interface ListAccountPermissionsCommandOutput extends ListAccountPermissionsResponse, __MetadataBearer {}

/**
 * <p>Lists the permissions an account has to configure Amazon Inspector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListAccountPermissionsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListAccountPermissionsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // ListAccountPermissionsRequest
 *   service: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAccountPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountPermissionsResponse
 * //   permissions: [ // Permissions // required
 * //     { // Permission
 * //       service: "STRING_VALUE", // required
 * //       operation: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountPermissionsCommandInput - {@link ListAccountPermissionsCommandInput}
 * @returns {@link ListAccountPermissionsCommandOutput}
 * @see {@link ListAccountPermissionsCommandInput} for command's `input` shape.
 * @see {@link ListAccountPermissionsCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 * @public
 */
export class ListAccountPermissionsCommand extends $Command
  .classBuilder<
    ListAccountPermissionsCommandInput,
    ListAccountPermissionsCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "ListAccountPermissions", {})
  .n("Inspector2Client", "ListAccountPermissionsCommand")
  .f(void 0, void 0)
  .ser(se_ListAccountPermissionsCommand)
  .de(de_ListAccountPermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountPermissionsRequest;
      output: ListAccountPermissionsResponse;
    };
    sdk: {
      input: ListAccountPermissionsCommandInput;
      output: ListAccountPermissionsCommandOutput;
    };
  };
}
