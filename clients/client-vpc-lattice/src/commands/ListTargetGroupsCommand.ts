// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTargetGroupsRequest, ListTargetGroupsResponse } from "../models/models_0";
import { ListTargetGroups } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTargetGroupsCommand}.
 */
export interface ListTargetGroupsCommandInput extends ListTargetGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListTargetGroupsCommand}.
 */
export interface ListTargetGroupsCommandOutput extends ListTargetGroupsResponse, __MetadataBearer {}

/**
 * <p>Lists your target groups. You can narrow your search by using the filters below in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, ListTargetGroupsCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, ListTargetGroupsCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // ListTargetGroupsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   vpcIdentifier: "STRING_VALUE",
 *   targetGroupType: "STRING_VALUE",
 * };
 * const command = new ListTargetGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListTargetGroupsResponse
 * //   items: [ // TargetGroupList
 * //     { // TargetGroupSummary
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       port: Number("int"),
 * //       protocol: "STRING_VALUE",
 * //       ipAddressType: "STRING_VALUE",
 * //       vpcIdentifier: "STRING_VALUE",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       status: "STRING_VALUE",
 * //       serviceArns: [ // ServiceArnList
 * //         "STRING_VALUE",
 * //       ],
 * //       lambdaEventStructureVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTargetGroupsCommandInput - {@link ListTargetGroupsCommandInput}
 * @returns {@link ListTargetGroupsCommandOutput}
 * @see {@link ListTargetGroupsCommandInput} for command's `input` shape.
 * @see {@link ListTargetGroupsCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 *
 * @public
 */
export class ListTargetGroupsCommand extends $Command
  .classBuilder<
    ListTargetGroupsCommandInput,
    ListTargetGroupsCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MercuryControlPlane", "ListTargetGroups", {})
  .n("VPCLatticeClient", "ListTargetGroupsCommand")
  .sc(ListTargetGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTargetGroupsRequest;
      output: ListTargetGroupsResponse;
    };
    sdk: {
      input: ListTargetGroupsCommandInput;
      output: ListTargetGroupsCommandOutput;
    };
  };
}
