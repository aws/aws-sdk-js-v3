// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListPermissionSetProvisioningStatusRequest,
  ListPermissionSetProvisioningStatusResponse,
} from "../models/models_0";
import { ListPermissionSetProvisioningStatus$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPermissionSetProvisioningStatusCommand}.
 */
export interface ListPermissionSetProvisioningStatusCommandInput extends ListPermissionSetProvisioningStatusRequest {}
/**
 * @public
 *
 * The output of {@link ListPermissionSetProvisioningStatusCommand}.
 */
export interface ListPermissionSetProvisioningStatusCommandOutput
  extends ListPermissionSetProvisioningStatusResponse,
    __MetadataBearer {}

/**
 * <p>Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListPermissionSetProvisioningStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListPermissionSetProvisioningStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // ListPermissionSetProvisioningStatusRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filter: { // OperationStatusFilter
 *     Status: "IN_PROGRESS" || "FAILED" || "SUCCEEDED",
 *   },
 * };
 * const command = new ListPermissionSetProvisioningStatusCommand(input);
 * const response = await client.send(command);
 * // { // ListPermissionSetProvisioningStatusResponse
 * //   PermissionSetsProvisioningStatus: [ // PermissionSetProvisioningStatusList
 * //     { // PermissionSetProvisioningStatusMetadata
 * //       Status: "IN_PROGRESS" || "FAILED" || "SUCCEEDED",
 * //       RequestId: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPermissionSetProvisioningStatusCommandInput - {@link ListPermissionSetProvisioningStatusCommandInput}
 * @returns {@link ListPermissionSetProvisioningStatusCommandOutput}
 * @see {@link ListPermissionSetProvisioningStatusCommandInput} for command's `input` shape.
 * @see {@link ListPermissionSetProvisioningStatusCommandOutput} for command's `response` shape.
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
export class ListPermissionSetProvisioningStatusCommand extends $Command
  .classBuilder<
    ListPermissionSetProvisioningStatusCommandInput,
    ListPermissionSetProvisioningStatusCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "ListPermissionSetProvisioningStatus", {})
  .n("SSOAdminClient", "ListPermissionSetProvisioningStatusCommand")
  .sc(ListPermissionSetProvisioningStatus$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPermissionSetProvisioningStatusRequest;
      output: ListPermissionSetProvisioningStatusResponse;
    };
    sdk: {
      input: ListPermissionSetProvisioningStatusCommandInput;
      output: ListPermissionSetProvisioningStatusCommandOutput;
    };
  };
}
