// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvsClient";
import type { ListVmEntitlementsRequest, ListVmEntitlementsResponse } from "../models/models_0";
import { ListVmEntitlements$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVmEntitlementsCommand}.
 */
export interface ListVmEntitlementsCommandInput extends ListVmEntitlementsRequest {}
/**
 * @public
 *
 * The output of {@link ListVmEntitlementsCommand}.
 */
export interface ListVmEntitlementsCommandOutput extends ListVmEntitlementsResponse, __MetadataBearer {}

/**
 * <p>Lists the Windows Server License entitlements for virtual machines in an Amazon EVS environment. Returns existing entitlements for virtual machines associated with the specified environment and connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, ListVmEntitlementsCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, ListVmEntitlementsCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * // import type { EvsClientConfig } from "@aws-sdk/client-evs";
 * const config = {}; // type is EvsClientConfig
 * const client = new EvsClient(config);
 * const input = { // ListVmEntitlementsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   environmentId: "STRING_VALUE", // required
 *   connectorId: "STRING_VALUE", // required
 *   entitlementType: "WINDOWS_SERVER", // required
 * };
 * const command = new ListVmEntitlementsCommand(input);
 * const response = await client.send(command);
 * // { // ListVmEntitlementsResponse
 * //   nextToken: "STRING_VALUE",
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
 * @param ListVmEntitlementsCommandInput - {@link ListVmEntitlementsCommandInput}
 * @returns {@link ListVmEntitlementsCommandOutput}
 * @see {@link ListVmEntitlementsCommandInput} for command's `input` shape.
 * @see {@link ListVmEntitlementsCommandOutput} for command's `response` shape.
 * @see {@link EvsClientResolvedConfig | config} for EvsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A service resource associated with the request could not be found. The resource might not be specified correctly, or it may have a <code>state</code> of <code>DELETED</code>.</p>
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
export class ListVmEntitlementsCommand extends $Command
  .classBuilder<
    ListVmEntitlementsCommandInput,
    ListVmEntitlementsCommandOutput,
    EvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticVMwareService", "ListVmEntitlements", {})
  .n("EvsClient", "ListVmEntitlementsCommand")
  .sc(ListVmEntitlements$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVmEntitlementsRequest;
      output: ListVmEntitlementsResponse;
    };
    sdk: {
      input: ListVmEntitlementsCommandInput;
      output: ListVmEntitlementsCommandOutput;
    };
  };
}
