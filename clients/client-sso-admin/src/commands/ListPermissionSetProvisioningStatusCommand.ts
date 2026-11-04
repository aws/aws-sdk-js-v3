// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListPermissionSetProvisioningStatusRequest,
  ListPermissionSetProvisioningStatusResponse,
} from "../models/models_0";
import { ListPermissionSetProvisioningStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListPermissionSetProvisioningStatusCommandOutput extends ListPermissionSetProvisioningStatusResponse, __MetadataBearer {}

/**
 * Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.
 *
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
export class ListPermissionSetProvisioningStatusCommand extends command<ListPermissionSetProvisioningStatusCommandInput, ListPermissionSetProvisioningStatusCommandOutput>(
  _ep0,
  _mw0,
  "ListPermissionSetProvisioningStatus",
  ListPermissionSetProvisioningStatus$
) {
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
