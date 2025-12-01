// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeApplicationRequest, DescribeApplicationResponse } from "../models/models_0";
import { DescribeApplication } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationCommand}.
 */
export interface DescribeApplicationCommandInput extends DescribeApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationCommand}.
 */
export interface DescribeApplicationCommandOutput extends DescribeApplicationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of an application associated with an instance of IAM Identity Center.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeApplicationCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeApplicationCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // DescribeApplicationRequest
 *   ApplicationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeApplicationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationResponse
 * //   ApplicationArn: "STRING_VALUE",
 * //   ApplicationProviderArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   ApplicationAccount: "STRING_VALUE",
 * //   InstanceArn: "STRING_VALUE",
 * //   Status: "ENABLED" || "DISABLED",
 * //   PortalOptions: { // PortalOptions
 * //     SignInOptions: { // SignInOptions
 * //       Origin: "IDENTITY_CENTER" || "APPLICATION", // required
 * //       ApplicationUrl: "STRING_VALUE",
 * //     },
 * //     Visibility: "ENABLED" || "DISABLED",
 * //   },
 * //   Description: "STRING_VALUE",
 * //   CreatedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeApplicationCommandInput - {@link DescribeApplicationCommandInput}
 * @returns {@link DescribeApplicationCommandOutput}
 * @see {@link DescribeApplicationCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 *
 * @public
 */
export class DescribeApplicationCommand extends $Command
  .classBuilder<
    DescribeApplicationCommandInput,
    DescribeApplicationCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "DescribeApplication", {})
  .n("SSOAdminClient", "DescribeApplicationCommand")
  .sc(DescribeApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationRequest;
      output: DescribeApplicationResponse;
    };
    sdk: {
      input: DescribeApplicationCommandInput;
      output: DescribeApplicationCommandOutput;
    };
  };
}
