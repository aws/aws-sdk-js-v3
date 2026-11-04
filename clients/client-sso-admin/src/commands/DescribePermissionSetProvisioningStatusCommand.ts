// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribePermissionSetProvisioningStatusRequest,
  DescribePermissionSetProvisioningStatusResponse,
} from "../models/models_0";
import { DescribePermissionSetProvisioningStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribePermissionSetProvisioningStatusCommand}.
 */
export interface DescribePermissionSetProvisioningStatusCommandInput extends DescribePermissionSetProvisioningStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribePermissionSetProvisioningStatusCommand}.
 */
export interface DescribePermissionSetProvisioningStatusCommandOutput extends DescribePermissionSetProvisioningStatusResponse, __MetadataBearer {}

/**
 * Describes the status for the given permission set provisioning request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribePermissionSetProvisioningStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribePermissionSetProvisioningStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
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
export class DescribePermissionSetProvisioningStatusCommand extends command<DescribePermissionSetProvisioningStatusCommandInput, DescribePermissionSetProvisioningStatusCommandOutput>(
  _ep0,
  _mw0,
  "DescribePermissionSetProvisioningStatus",
  DescribePermissionSetProvisioningStatus$
) {
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
