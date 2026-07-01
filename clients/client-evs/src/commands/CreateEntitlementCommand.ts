// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEntitlementRequest, CreateEntitlementResponse } from "../models/models_0";
import { CreateEntitlement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEntitlementCommand}.
 */
export interface CreateEntitlementCommandInput extends CreateEntitlementRequest {}
/**
 * @public
 *
 * The output of {@link CreateEntitlementCommand}.
 */
export interface CreateEntitlementCommandOutput extends CreateEntitlementResponse, __MetadataBearer {}

/**
 * <p>Creates a Windows Server License entitlement for virtual machines in an Amazon EVS environment using the provided vCenter Server connector. This is an asynchronous operation. Amazon EVS validates the specified virtual machines before starting usage tracking.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, CreateEntitlementCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, CreateEntitlementCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * // import type { EvsClientConfig } from "@aws-sdk/client-evs";
 * const config = {}; // type is EvsClientConfig
 * const client = new EvsClient(config);
 * const input = { // CreateEntitlementRequest
 *   clientToken: "STRING_VALUE",
 *   environmentId: "STRING_VALUE", // required
 *   connectorId: "STRING_VALUE", // required
 *   entitlementType: "WINDOWS_SERVER", // required
 *   vmIds: [ // VmIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateEntitlementCommand(input);
 * const response = await client.send(command);
 * // { // CreateEntitlementResponse
 * //   entitlements: [ // VmEntitlementList
 * //     { // VmEntitlement
 * //       vmId: "STRING_VALUE",
 * //       environmentId: "STRING_VALUE",
 * //       connectorId: "STRING_VALUE",
 * //       vmName: "STRING_VALUE",
 * //       type: "WINDOWS_SERVER",
 * //       status: "CREATING" || "CREATED" || "DELETED" || "AT_RISK" || "ENTITLEMENT_REMOVED" || "CREATE_FAILED",
 * //       lastSyncedAt: new Date("TIMESTAMP"),
 * //       startedAt: new Date("TIMESTAMP"),
 * //       stoppedAt: new Date("TIMESTAMP"),
 * //       errorDetail: { // ErrorDetail
 * //         errorCode: "STRING_VALUE", // required
 * //         errorMessage: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateEntitlementCommandInput - {@link CreateEntitlementCommandInput}
 * @returns {@link CreateEntitlementCommandOutput}
 * @see {@link CreateEntitlementCommandInput} for command's `input` shape.
 * @see {@link CreateEntitlementCommandOutput} for command's `response` shape.
 * @see {@link EvsClientResolvedConfig | config} for EvsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A service resource associated with the request could not be found. The resource might not be specified correctly, or it may have a <code>state</code> of <code>DELETED</code>.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The operation could not be performed because the service is throttling requests. This exception is thrown when the service endpoint receives too many concurrent requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints. You will see this exception if invalid inputs are provided for any of the Amazon EVS environment operations, or if a list operation is performed on an environment resource that is still initializing.</p>
 *
 * @throws {@link EvsServiceException}
 * <p>Base exception class for all service exceptions from Evs service.</p>
 *
 *
 * @public
 */
export class CreateEntitlementCommand extends command<CreateEntitlementCommandInput, CreateEntitlementCommandOutput>(
  _ep0,
  _mw0,
  "CreateEntitlement",
  CreateEntitlement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEntitlementRequest;
      output: CreateEntitlementResponse;
    };
    sdk: {
      input: CreateEntitlementCommandInput;
      output: CreateEntitlementCommandOutput;
    };
  };
}
