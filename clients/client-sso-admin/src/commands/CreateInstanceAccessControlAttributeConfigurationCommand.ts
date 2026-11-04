// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateInstanceAccessControlAttributeConfigurationRequest,
  CreateInstanceAccessControlAttributeConfigurationResponse,
} from "../models/models_0";
import { CreateInstanceAccessControlAttributeConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateInstanceAccessControlAttributeConfigurationCommand}.
 */
export interface CreateInstanceAccessControlAttributeConfigurationCommandInput extends CreateInstanceAccessControlAttributeConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateInstanceAccessControlAttributeConfigurationCommand}.
 */
export interface CreateInstanceAccessControlAttributeConfigurationCommandOutput extends CreateInstanceAccessControlAttributeConfigurationResponse, __MetadataBearer {}

/**
 * Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see [Attribute-Based Access Control](/singlesignon/latest/userguide/abac.html) in the *IAM Identity Center User Guide*.
 *
 * > **Note:** After a successful response, call `DescribeInstanceAccessControlAttributeConfiguration` to validate that `InstanceAccessControlAttributeConfiguration` was created.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, CreateInstanceAccessControlAttributeConfigurationCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, CreateInstanceAccessControlAttributeConfigurationCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // CreateInstanceAccessControlAttributeConfigurationRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   InstanceAccessControlAttributeConfiguration: { // InstanceAccessControlAttributeConfiguration
 *     AccessControlAttributes: [ // AccessControlAttributeList // required
 *       { // AccessControlAttribute
 *         Key: "STRING_VALUE", // required
 *         Value: { // AccessControlAttributeValue
 *           Source: [ // AccessControlAttributeValueSourceList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateInstanceAccessControlAttributeConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateInstanceAccessControlAttributeConfigurationCommandInput - {@link CreateInstanceAccessControlAttributeConfigurationCommandInput}
 * @returns {@link CreateInstanceAccessControlAttributeConfigurationCommandOutput}
 * @see {@link CreateInstanceAccessControlAttributeConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceAccessControlAttributeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Occurs when a conflict with a previous successful write is detected. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.
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
export class CreateInstanceAccessControlAttributeConfigurationCommand extends command<CreateInstanceAccessControlAttributeConfigurationCommandInput, CreateInstanceAccessControlAttributeConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateInstanceAccessControlAttributeConfiguration",
  CreateInstanceAccessControlAttributeConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInstanceAccessControlAttributeConfigurationRequest;
      output: {};
    };
    sdk: {
      input: CreateInstanceAccessControlAttributeConfigurationCommandInput;
      output: CreateInstanceAccessControlAttributeConfigurationCommandOutput;
    };
  };
}
