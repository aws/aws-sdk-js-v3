// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetApplicationAssignmentConfigurationRequest,
  GetApplicationAssignmentConfigurationResponse,
} from "../models/models_0";
import {
  de_GetApplicationAssignmentConfigurationCommand,
  se_GetApplicationAssignmentConfigurationCommand,
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
 * The input for {@link GetApplicationAssignmentConfigurationCommand}.
 */
export interface GetApplicationAssignmentConfigurationCommandInput
  extends GetApplicationAssignmentConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationAssignmentConfigurationCommand}.
 */
export interface GetApplicationAssignmentConfigurationCommandOutput
  extends GetApplicationAssignmentConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the configuration of <a>PutApplicationAssignmentConfiguration</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, GetApplicationAssignmentConfigurationCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, GetApplicationAssignmentConfigurationCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // GetApplicationAssignmentConfigurationRequest
 *   ApplicationArn: "STRING_VALUE", // required
 * };
 * const command = new GetApplicationAssignmentConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationAssignmentConfigurationResponse
 * //   AssignmentRequired: true || false, // required
 * // };
 *
 * ```
 *
 * @param GetApplicationAssignmentConfigurationCommandInput - {@link GetApplicationAssignmentConfigurationCommandInput}
 * @returns {@link GetApplicationAssignmentConfigurationCommandOutput}
 * @see {@link GetApplicationAssignmentConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetApplicationAssignmentConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *             with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API
 *             operations.</p>
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
export class GetApplicationAssignmentConfigurationCommand extends $Command
  .classBuilder<
    GetApplicationAssignmentConfigurationCommandInput,
    GetApplicationAssignmentConfigurationCommandOutput,
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
  .s("SWBExternalService", "GetApplicationAssignmentConfiguration", {})
  .n("SSOAdminClient", "GetApplicationAssignmentConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetApplicationAssignmentConfigurationCommand)
  .de(de_GetApplicationAssignmentConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationAssignmentConfigurationRequest;
      output: GetApplicationAssignmentConfigurationResponse;
    };
    sdk: {
      input: GetApplicationAssignmentConfigurationCommandInput;
      output: GetApplicationAssignmentConfigurationCommandOutput;
    };
  };
}
