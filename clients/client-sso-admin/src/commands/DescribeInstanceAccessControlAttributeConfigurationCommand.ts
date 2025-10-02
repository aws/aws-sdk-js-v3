// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeInstanceAccessControlAttributeConfigurationRequest,
  DescribeInstanceAccessControlAttributeConfigurationResponse,
} from "../models/models_0";
import {
  de_DescribeInstanceAccessControlAttributeConfigurationCommand,
  se_DescribeInstanceAccessControlAttributeConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceAccessControlAttributeConfigurationCommand}.
 */
export interface DescribeInstanceAccessControlAttributeConfigurationCommandInput
  extends DescribeInstanceAccessControlAttributeConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceAccessControlAttributeConfigurationCommand}.
 */
export interface DescribeInstanceAccessControlAttributeConfigurationCommandOutput
  extends DescribeInstanceAccessControlAttributeConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeInstanceAccessControlAttributeConfigurationCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeInstanceAccessControlAttributeConfigurationCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // DescribeInstanceAccessControlAttributeConfigurationRequest
 *   InstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeInstanceAccessControlAttributeConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceAccessControlAttributeConfigurationResponse
 * //   Status: "ENABLED" || "CREATION_IN_PROGRESS" || "CREATION_FAILED",
 * //   StatusReason: "STRING_VALUE",
 * //   InstanceAccessControlAttributeConfiguration: { // InstanceAccessControlAttributeConfiguration
 * //     AccessControlAttributes: [ // AccessControlAttributeList // required
 * //       { // AccessControlAttribute
 * //         Key: "STRING_VALUE", // required
 * //         Value: { // AccessControlAttributeValue
 * //           Source: [ // AccessControlAttributeValueSourceList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeInstanceAccessControlAttributeConfigurationCommandInput - {@link DescribeInstanceAccessControlAttributeConfigurationCommandInput}
 * @returns {@link DescribeInstanceAccessControlAttributeConfigurationCommandOutput}
 * @see {@link DescribeInstanceAccessControlAttributeConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceAccessControlAttributeConfigurationCommandOutput} for command's `response` shape.
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
export class DescribeInstanceAccessControlAttributeConfigurationCommand extends $Command
  .classBuilder<
    DescribeInstanceAccessControlAttributeConfigurationCommandInput,
    DescribeInstanceAccessControlAttributeConfigurationCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SWBExternalService", "DescribeInstanceAccessControlAttributeConfiguration", {})
  .n("SSOAdminClient", "DescribeInstanceAccessControlAttributeConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInstanceAccessControlAttributeConfigurationCommand)
  .de(de_DescribeInstanceAccessControlAttributeConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstanceAccessControlAttributeConfigurationRequest;
      output: DescribeInstanceAccessControlAttributeConfigurationResponse;
    };
    sdk: {
      input: DescribeInstanceAccessControlAttributeConfigurationCommandInput;
      output: DescribeInstanceAccessControlAttributeConfigurationCommandOutput;
    };
  };
}
