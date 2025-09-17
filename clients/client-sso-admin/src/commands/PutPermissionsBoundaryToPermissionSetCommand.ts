// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutPermissionsBoundaryToPermissionSetRequest,
  PutPermissionsBoundaryToPermissionSetResponse,
} from "../models/models_0";
import {
  de_PutPermissionsBoundaryToPermissionSetCommand,
  se_PutPermissionsBoundaryToPermissionSetCommand,
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
 * The input for {@link PutPermissionsBoundaryToPermissionSetCommand}.
 */
export interface PutPermissionsBoundaryToPermissionSetCommandInput
  extends PutPermissionsBoundaryToPermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link PutPermissionsBoundaryToPermissionSetCommand}.
 */
export interface PutPermissionsBoundaryToPermissionSetCommandOutput
  extends PutPermissionsBoundaryToPermissionSetResponse,
    __MetadataBearer {}

/**
 * <p>Attaches an Amazon Web Services managed or customer managed policy to the specified <a>PermissionSet</a> as a permissions boundary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, PutPermissionsBoundaryToPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, PutPermissionsBoundaryToPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // PutPermissionsBoundaryToPermissionSetRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 *   PermissionsBoundary: { // PermissionsBoundary
 *     CustomerManagedPolicyReference: { // CustomerManagedPolicyReference
 *       Name: "STRING_VALUE", // required
 *       Path: "STRING_VALUE",
 *     },
 *     ManagedPolicyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new PutPermissionsBoundaryToPermissionSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutPermissionsBoundaryToPermissionSetCommandInput - {@link PutPermissionsBoundaryToPermissionSetCommandInput}
 * @returns {@link PutPermissionsBoundaryToPermissionSetCommandOutput}
 * @see {@link PutPermissionsBoundaryToPermissionSetCommandInput} for command's `input` shape.
 * @see {@link PutPermissionsBoundaryToPermissionSetCommandOutput} for command's `response` shape.
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
export class PutPermissionsBoundaryToPermissionSetCommand extends $Command
  .classBuilder<
    PutPermissionsBoundaryToPermissionSetCommandInput,
    PutPermissionsBoundaryToPermissionSetCommandOutput,
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
  .s("SWBExternalService", "PutPermissionsBoundaryToPermissionSet", {})
  .n("SSOAdminClient", "PutPermissionsBoundaryToPermissionSetCommand")
  .f(void 0, void 0)
  .ser(se_PutPermissionsBoundaryToPermissionSetCommand)
  .de(de_PutPermissionsBoundaryToPermissionSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutPermissionsBoundaryToPermissionSetRequest;
      output: {};
    };
    sdk: {
      input: PutPermissionsBoundaryToPermissionSetCommandInput;
      output: PutPermissionsBoundaryToPermissionSetCommandOutput;
    };
  };
}
