// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribePermissionSetProvisioningStatusRequest,
  DescribePermissionSetProvisioningStatusResponse,
} from "../models/models_0";
import {
  de_DescribePermissionSetProvisioningStatusCommand,
  se_DescribePermissionSetProvisioningStatusCommand,
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
 * The input for {@link DescribePermissionSetProvisioningStatusCommand}.
 */
export interface DescribePermissionSetProvisioningStatusCommandInput
  extends DescribePermissionSetProvisioningStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribePermissionSetProvisioningStatusCommand}.
 */
export interface DescribePermissionSetProvisioningStatusCommandOutput
  extends DescribePermissionSetProvisioningStatusResponse,
    __MetadataBearer {}

/**
 * <p>Describes the status for the given permission set provisioning request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribePermissionSetProvisioningStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribePermissionSetProvisioningStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // DescribePermissionSetProvisioningStatusRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   ProvisionPermissionSetRequestId: "STRING_VALUE", // required
 * };
 * const command = new DescribePermissionSetProvisioningStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribePermissionSetProvisioningStatusResponse
 * //   PermissionSetProvisioningStatus: { // PermissionSetProvisioningStatus
 * //     Status: "IN_PROGRESS" || "FAILED" || "SUCCEEDED",
 * //     RequestId: "STRING_VALUE",
 * //     AccountId: "STRING_VALUE",
 * //     PermissionSetArn: "STRING_VALUE",
 * //     FailureReason: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePermissionSetProvisioningStatusCommandInput - {@link DescribePermissionSetProvisioningStatusCommandInput}
 * @returns {@link DescribePermissionSetProvisioningStatusCommandOutput}
 * @see {@link DescribePermissionSetProvisioningStatusCommandInput} for command's `input` shape.
 * @see {@link DescribePermissionSetProvisioningStatusCommandOutput} for command's `response` shape.
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
export class DescribePermissionSetProvisioningStatusCommand extends $Command
  .classBuilder<
    DescribePermissionSetProvisioningStatusCommandInput,
    DescribePermissionSetProvisioningStatusCommandOutput,
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
  .s("SWBExternalService", "DescribePermissionSetProvisioningStatus", {})
  .n("SSOAdminClient", "DescribePermissionSetProvisioningStatusCommand")
  .f(void 0, void 0)
  .ser(se_DescribePermissionSetProvisioningStatusCommand)
  .de(de_DescribePermissionSetProvisioningStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePermissionSetProvisioningStatusRequest;
      output: DescribePermissionSetProvisioningStatusResponse;
    };
    sdk: {
      input: DescribePermissionSetProvisioningStatusCommandInput;
      output: DescribePermissionSetProvisioningStatusCommandOutput;
    };
  };
}
