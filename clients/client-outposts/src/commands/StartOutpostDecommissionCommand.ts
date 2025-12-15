// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartOutpostDecommissionInput, StartOutpostDecommissionOutput } from "../models/models_0";
import type { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { StartOutpostDecommission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartOutpostDecommissionCommand}.
 */
export interface StartOutpostDecommissionCommandInput extends StartOutpostDecommissionInput {}
/**
 * @public
 *
 * The output of {@link StartOutpostDecommissionCommand}.
 */
export interface StartOutpostDecommissionCommandOutput extends StartOutpostDecommissionOutput, __MetadataBearer {}

/**
 * <p>Starts the decommission process to return the Outposts racks or servers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, StartOutpostDecommissionCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, StartOutpostDecommissionCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // StartOutpostDecommissionInput
 *   OutpostIdentifier: "STRING_VALUE", // required
 *   ValidateOnly: true || false,
 * };
 * const command = new StartOutpostDecommissionCommand(input);
 * const response = await client.send(command);
 * // { // StartOutpostDecommissionOutput
 * //   Status: "SKIPPED" || "BLOCKED" || "REQUESTED",
 * //   BlockingResourceTypes: [ // BlockingResourceTypeList
 * //     "EC2_INSTANCE" || "OUTPOST_RAM_SHARE" || "LGW_ROUTING_DOMAIN" || "LGW_ROUTE_TABLE" || "LGW_VIRTUAL_INTERFACE_GROUP" || "OUTPOST_ORDER_CANCELLABLE" || "OUTPOST_ORDER_INTERVENTION_REQUIRED",
 * //   ],
 * // };
 *
 * ```
 *
 * @param StartOutpostDecommissionCommandInput - {@link StartOutpostDecommissionCommandInput}
 * @returns {@link StartOutpostDecommissionCommandOutput}
 * @see {@link StartOutpostDecommissionCommandInput} for command's `input` shape.
 * @see {@link StartOutpostDecommissionCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting this resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 *
 * @public
 */
export class StartOutpostDecommissionCommand extends $Command
  .classBuilder<
    StartOutpostDecommissionCommandInput,
    StartOutpostDecommissionCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OutpostsOlafService", "StartOutpostDecommission", {})
  .n("OutpostsClient", "StartOutpostDecommissionCommand")
  .sc(StartOutpostDecommission$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartOutpostDecommissionInput;
      output: StartOutpostDecommissionOutput;
    };
    sdk: {
      input: StartOutpostDecommissionCommandInput;
      output: StartOutpostDecommissionCommandOutput;
    };
  };
}
