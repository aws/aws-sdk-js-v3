// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ReleaseHostsRequest, ReleaseHostsResult } from "../models/models_7";
import { ReleaseHosts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReleaseHostsCommand}.
 */
export interface ReleaseHostsCommandInput extends ReleaseHostsRequest {}
/**
 * @public
 *
 * The output of {@link ReleaseHostsCommand}.
 */
export interface ReleaseHostsCommandOutput extends ReleaseHostsResult, __MetadataBearer {}

/**
 * <p>When you no longer want to use an On-Demand Dedicated Host it can be released.
 *             On-Demand billing is stopped and the host goes into <code>released</code> state. The
 *             host ID of Dedicated Hosts that have been released can no longer be specified in another
 *             request, for example, to modify the host. You must stop or terminate all instances on a
 *             host before it can be released.</p>
 *          <p>When Dedicated Hosts are released, it may take some time for them to stop counting
 *             toward your limit and you may receive capacity errors when trying to allocate new
 *             Dedicated Hosts. Wait a few minutes and then try again.</p>
 *          <p>Released hosts still appear in a <a>DescribeHosts</a> response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReleaseHostsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReleaseHostsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ReleaseHostsRequest
 *   HostIds: [ // RequestHostIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ReleaseHostsCommand(input);
 * const response = await client.send(command);
 * // { // ReleaseHostsResult
 * //   Successful: [ // ResponseHostIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   Unsuccessful: [ // UnsuccessfulItemList
 * //     { // UnsuccessfulItem
 * //       Error: { // UnsuccessfulItemError
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       ResourceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ReleaseHostsCommandInput - {@link ReleaseHostsCommandInput}
 * @returns {@link ReleaseHostsCommandOutput}
 * @see {@link ReleaseHostsCommandInput} for command's `input` shape.
 * @see {@link ReleaseHostsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ReleaseHostsCommand extends $Command
  .classBuilder<
    ReleaseHostsCommandInput,
    ReleaseHostsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ReleaseHosts", {})
  .n("EC2Client", "ReleaseHostsCommand")
  .sc(ReleaseHosts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReleaseHostsRequest;
      output: ReleaseHostsResult;
    };
    sdk: {
      input: ReleaseHostsCommandInput;
      output: ReleaseHostsCommandOutput;
    };
  };
}
