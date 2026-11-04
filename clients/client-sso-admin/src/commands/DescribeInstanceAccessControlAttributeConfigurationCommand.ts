// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeInstanceAccessControlAttributeConfigurationRequest,
  DescribeInstanceAccessControlAttributeConfigurationResponse,
} from "../models/models_0";
import { DescribeInstanceAccessControlAttributeConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeInstanceAccessControlAttributeConfigurationCommand}.
 */
export interface DescribeInstanceAccessControlAttributeConfigurationCommandInput extends DescribeInstanceAccessControlAttributeConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceAccessControlAttributeConfigurationCommand}.
 */
export interface DescribeInstanceAccessControlAttributeConfigurationCommandOutput extends DescribeInstanceAccessControlAttributeConfigurationResponse, __MetadataBearer {}

/**
 * Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see [Attribute-Based Access Control](/singlesignon/latest/userguide/abac.html) in the *IAM Identity Center User Guide*.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Indicates that a requested resource is not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates that the principal has crossed the throttling limits of the API operations.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed because it contains a syntax error.
 *
 * @throws {@link SSOAdminServiceException}
 *
 * Base exception class for all service exceptions from SSOAdmin service.
 *
 * @public
 */
export class DescribeInstanceAccessControlAttributeConfigurationCommand extends command<DescribeInstanceAccessControlAttributeConfigurationCommandInput, DescribeInstanceAccessControlAttributeConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeInstanceAccessControlAttributeConfiguration",
  DescribeInstanceAccessControlAttributeConfiguration$
) {
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
