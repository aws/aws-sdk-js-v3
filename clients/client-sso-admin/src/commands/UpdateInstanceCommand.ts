// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateInstanceRequest, UpdateInstanceResponse } from "../models/models_0";
import { UpdateInstance } from "../schemas/schemas_22_Instance";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateInstanceCommand}.
 */
export interface UpdateInstanceCommandInput extends UpdateInstanceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInstanceCommand}.
 */
export interface UpdateInstanceCommandOutput extends UpdateInstanceResponse, __MetadataBearer {}

/**
 * <p>Update the details for the instance of IAM Identity Center that is owned by the Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, UpdateInstanceCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, UpdateInstanceCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // UpdateInstanceRequest
 *   Name: "STRING_VALUE",
 *   InstanceArn: "STRING_VALUE", // required
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KeyType: "AWS_OWNED_KMS_KEY" || "CUSTOMER_MANAGED_KEY", // required
 *     KmsKeyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateInstanceCommandInput - {@link UpdateInstanceCommandInput}
 * @returns {@link UpdateInstanceCommandOutput}
 * @see {@link UpdateInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceCommandOutput} for command's `response` shape.
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
export class UpdateInstanceCommand extends $Command
  .classBuilder<
    UpdateInstanceCommandInput,
    UpdateInstanceCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "UpdateInstance", {})
  .n("SSOAdminClient", "UpdateInstanceCommand")
  .sc(UpdateInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInstanceRequest;
      output: {};
    };
    sdk: {
      input: UpdateInstanceCommandInput;
      output: UpdateInstanceCommandOutput;
    };
  };
}
