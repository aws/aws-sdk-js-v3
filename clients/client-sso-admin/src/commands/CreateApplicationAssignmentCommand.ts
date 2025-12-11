// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateApplicationAssignmentRequest, CreateApplicationAssignmentResponse } from "../models/models_0";
import { CreateApplicationAssignment } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApplicationAssignmentCommand}.
 */
export interface CreateApplicationAssignmentCommandInput extends CreateApplicationAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateApplicationAssignmentCommand}.
 */
export interface CreateApplicationAssignmentCommandOutput
  extends CreateApplicationAssignmentResponse,
    __MetadataBearer {}

/**
 * <p>Grant application access to a user or group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, CreateApplicationAssignmentCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, CreateApplicationAssignmentCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // CreateApplicationAssignmentRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   PrincipalId: "STRING_VALUE", // required
 *   PrincipalType: "USER" || "GROUP", // required
 * };
 * const command = new CreateApplicationAssignmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateApplicationAssignmentCommandInput - {@link CreateApplicationAssignmentCommandInput}
 * @returns {@link CreateApplicationAssignmentCommandOutput}
 * @see {@link CreateApplicationAssignmentCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationAssignmentCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Indicates that the principal has crossed the permitted number of resources that can be created.</p>
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
export class CreateApplicationAssignmentCommand extends $Command
  .classBuilder<
    CreateApplicationAssignmentCommandInput,
    CreateApplicationAssignmentCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "CreateApplicationAssignment", {})
  .n("SSOAdminClient", "CreateApplicationAssignmentCommand")
  .sc(CreateApplicationAssignment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApplicationAssignmentRequest;
      output: {};
    };
    sdk: {
      input: CreateApplicationAssignmentCommandInput;
      output: CreateApplicationAssignmentCommandOutput;
    };
  };
}
