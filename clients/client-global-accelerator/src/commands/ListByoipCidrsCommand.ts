// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { ListByoipCidrsRequest, ListByoipCidrsResponse } from "../models/models_0";
import { ListByoipCidrs } from "../schemas/schemas_11_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListByoipCidrsCommand}.
 */
export interface ListByoipCidrsCommandInput extends ListByoipCidrsRequest {}
/**
 * @public
 *
 * The output of {@link ListByoipCidrsCommand}.
 */
export interface ListByoipCidrsCommandOutput extends ListByoipCidrsResponse, __MetadataBearer {}

/**
 * <p>Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including
 * 			the current state and a history of state changes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListByoipCidrsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListByoipCidrsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // ListByoipCidrsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListByoipCidrsCommand(input);
 * const response = await client.send(command);
 * // { // ListByoipCidrsResponse
 * //   ByoipCidrs: [ // ByoipCidrs
 * //     { // ByoipCidr
 * //       Cidr: "STRING_VALUE",
 * //       State: "PENDING_PROVISIONING" || "READY" || "PENDING_ADVERTISING" || "ADVERTISING" || "PENDING_WITHDRAWING" || "PENDING_DEPROVISIONING" || "DEPROVISIONED" || "FAILED_PROVISION" || "FAILED_ADVERTISING" || "FAILED_WITHDRAW" || "FAILED_DEPROVISION",
 * //       Events: [ // ByoipCidrEvents
 * //         { // ByoipCidrEvent
 * //           Message: "STRING_VALUE",
 * //           Timestamp: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListByoipCidrsCommandInput - {@link ListByoipCidrsCommandInput}
 * @returns {@link ListByoipCidrsCommandOutput}
 * @see {@link ListByoipCidrsCommandInput} for command's `input` shape.
 * @see {@link ListByoipCidrsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>There isn't another item to return.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 *
 * @public
 */
export class ListByoipCidrsCommand extends $Command
  .classBuilder<
    ListByoipCidrsCommandInput,
    ListByoipCidrsCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "ListByoipCidrs", {})
  .n("GlobalAcceleratorClient", "ListByoipCidrsCommand")
  .sc(ListByoipCidrs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListByoipCidrsRequest;
      output: ListByoipCidrsResponse;
    };
    sdk: {
      input: ListByoipCidrsCommandInput;
      output: ListByoipCidrsCommandOutput;
    };
  };
}
