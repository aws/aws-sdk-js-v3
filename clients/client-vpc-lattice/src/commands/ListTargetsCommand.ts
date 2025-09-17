// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTargetsRequest, ListTargetsResponse } from "../models/models_0";
import { de_ListTargetsCommand, se_ListTargetsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTargetsCommand}.
 */
export interface ListTargetsCommandInput extends ListTargetsRequest {}
/**
 * @public
 *
 * The output of {@link ListTargetsCommand}.
 */
export interface ListTargetsCommandOutput extends ListTargetsResponse, __MetadataBearer {}

/**
 * <p>Lists the targets for the target group. By default, all targets are included. You can use
 *    this API to check the health status of targets. You can also ﬁlter the results by target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, ListTargetsCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, ListTargetsCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // ListTargetsRequest
 *   targetGroupIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   targets: [ // TargetList
 *     { // Target
 *       id: "STRING_VALUE", // required
 *       port: Number("int"),
 *     },
 *   ],
 * };
 * const command = new ListTargetsCommand(input);
 * const response = await client.send(command);
 * // { // ListTargetsResponse
 * //   items: [ // TargetSummaryList // required
 * //     { // TargetSummary
 * //       id: "STRING_VALUE",
 * //       port: Number("int"),
 * //       status: "STRING_VALUE",
 * //       reasonCode: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTargetsCommandInput - {@link ListTargetsCommandInput}
 * @returns {@link ListTargetsCommandOutput}
 * @see {@link ListTargetsCommandInput} for command's `input` shape.
 * @see {@link ListTargetsCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services
 *    service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 *
 * @public
 */
export class ListTargetsCommand extends $Command
  .classBuilder<
    ListTargetsCommandInput,
    ListTargetsCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MercuryControlPlane", "ListTargets", {})
  .n("VPCLatticeClient", "ListTargetsCommand")
  .f(void 0, void 0)
  .ser(se_ListTargetsCommand)
  .de(de_ListTargetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTargetsRequest;
      output: ListTargetsResponse;
    };
    sdk: {
      input: ListTargetsCommandInput;
      output: ListTargetsCommandOutput;
    };
  };
}
