// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePermissionSetRequest, CreatePermissionSetResponse } from "../models/models_0";
import { de_CreatePermissionSetCommand, se_CreatePermissionSetCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePermissionSetCommand}.
 */
export interface CreatePermissionSetCommandInput extends CreatePermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link CreatePermissionSetCommand}.
 */
export interface CreatePermissionSetCommandOutput extends CreatePermissionSetResponse, __MetadataBearer {}

/**
 * <p>Creates a permission set within a specified IAM Identity Center instance.</p> <note> <p>To grant users and groups access to Amazon Web Services account resources, use <code> <a>CreateAccountAssignment</a> </code>.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, CreatePermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, CreatePermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // CreatePermissionSetRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   InstanceArn: "STRING_VALUE", // required
 *   SessionDuration: "STRING_VALUE",
 *   RelayState: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreatePermissionSetCommand(input);
 * const response = await client.send(command);
 * // { // CreatePermissionSetResponse
 * //   PermissionSet: { // PermissionSet
 * //     Name: "STRING_VALUE",
 * //     PermissionSetArn: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //     SessionDuration: "STRING_VALUE",
 * //     RelayState: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreatePermissionSetCommandInput - {@link CreatePermissionSetCommandInput}
 * @returns {@link CreatePermissionSetCommandOutput}
 * @see {@link CreatePermissionSetCommandInput} for command's `input` shape.
 * @see {@link CreatePermissionSetCommandOutput} for command's `response` shape.
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
export class CreatePermissionSetCommand extends $Command
  .classBuilder<
    CreatePermissionSetCommandInput,
    CreatePermissionSetCommandOutput,
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
  .s("SWBExternalService", "CreatePermissionSet", {})
  .n("SSOAdminClient", "CreatePermissionSetCommand")
  .f(void 0, void 0)
  .ser(se_CreatePermissionSetCommand)
  .de(de_CreatePermissionSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePermissionSetRequest;
      output: CreatePermissionSetResponse;
    };
    sdk: {
      input: CreatePermissionSetCommandInput;
      output: CreatePermissionSetCommandOutput;
    };
  };
}
