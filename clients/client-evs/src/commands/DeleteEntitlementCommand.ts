// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvsClient";
import type { DeleteEntitlementRequest, DeleteEntitlementResponse } from "../models/models_0";
import { DeleteEntitlement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEntitlementCommand}.
 */
export interface DeleteEntitlementCommandInput extends DeleteEntitlementRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEntitlementCommand}.
 */
export interface DeleteEntitlementCommandOutput extends DeleteEntitlementResponse, __MetadataBearer {}

/**
 * <p>Deletes a Windows Server License entitlement for virtual machines in an Amazon EVS environment. Deleting an entitlement stops usage tracking for the specified virtual machines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, DeleteEntitlementCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, DeleteEntitlementCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * // import type { EvsClientConfig } from "@aws-sdk/client-evs";
 * const config = {}; // type is EvsClientConfig
 * const client = new EvsClient(config);
 * const input = { // DeleteEntitlementRequest
 *   clientToken: "STRING_VALUE",
 *   environmentId: "STRING_VALUE", // required
 *   connectorId: "STRING_VALUE", // required
 *   entitlementType: "WINDOWS_SERVER", // required
 *   vmIds: [ // VmIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteEntitlementCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEntitlementResponse
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
 * @param DeleteEntitlementCommandInput - {@link DeleteEntitlementCommandInput}
 * @returns {@link DeleteEntitlementCommandOutput}
 * @see {@link DeleteEntitlementCommandInput} for command's `input` shape.
 * @see {@link DeleteEntitlementCommandOutput} for command's `response` shape.
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
export class DeleteEntitlementCommand extends $Command
  .classBuilder<
    DeleteEntitlementCommandInput,
    DeleteEntitlementCommandOutput,
    EvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticVMwareService", "DeleteEntitlement", {})
  .n("EvsClient", "DeleteEntitlementCommand")
  .sc(DeleteEntitlement$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEntitlementRequest;
      output: DeleteEntitlementResponse;
    };
    sdk: {
      input: DeleteEntitlementCommandInput;
      output: DeleteEntitlementCommandOutput;
    };
  };
}
