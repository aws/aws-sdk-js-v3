// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import type { GetDelegatedAdminAccountRequest, GetDelegatedAdminAccountResponse } from "../models/models_0";
import { GetDelegatedAdminAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDelegatedAdminAccountCommand}.
 */
export interface GetDelegatedAdminAccountCommandInput extends GetDelegatedAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetDelegatedAdminAccountCommand}.
 */
export interface GetDelegatedAdminAccountCommandOutput extends GetDelegatedAdminAccountResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the Amazon Inspector delegated administrator for your
 *          organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, GetDelegatedAdminAccountCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, GetDelegatedAdminAccountCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = {};
 * const command = new GetDelegatedAdminAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetDelegatedAdminAccountResponse
 * //   delegatedAdmin: { // DelegatedAdmin
 * //     accountId: "STRING_VALUE",
 * //     relationshipStatus: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDelegatedAdminAccountCommandInput - {@link GetDelegatedAdminAccountCommandInput}
 * @returns {@link GetDelegatedAdminAccountCommandOutput}
 * @see {@link GetDelegatedAdminAccountCommandInput} for command's `input` shape.
 * @see {@link GetDelegatedAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified
 *          correctly.</p>
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
 *
 * @public
 */
export class GetDelegatedAdminAccountCommand extends $Command
  .classBuilder<
    GetDelegatedAdminAccountCommandInput,
    GetDelegatedAdminAccountCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "GetDelegatedAdminAccount", {})
  .n("Inspector2Client", "GetDelegatedAdminAccountCommand")
  .sc(GetDelegatedAdminAccount$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetDelegatedAdminAccountResponse;
    };
    sdk: {
      input: GetDelegatedAdminAccountCommandInput;
      output: GetDelegatedAdminAccountCommandOutput;
    };
  };
}
