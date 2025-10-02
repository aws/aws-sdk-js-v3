// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePublicIpv4PoolRequest, DeletePublicIpv4PoolResult } from "../models/models_3";
import { de_DeletePublicIpv4PoolCommand, se_DeletePublicIpv4PoolCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePublicIpv4PoolCommand}.
 */
export interface DeletePublicIpv4PoolCommandInput extends DeletePublicIpv4PoolRequest {}
/**
 * @public
 *
 * The output of {@link DeletePublicIpv4PoolCommand}.
 */
export interface DeletePublicIpv4PoolCommandOutput extends DeletePublicIpv4PoolResult, __MetadataBearer {}

/**
 * <p>Delete a public IPv4 pool. A public IPv4 pool is an EC2 IP address pool required for the public IPv4 CIDRs that you own and bring to Amazon Web Services to manage with IPAM. IPv6 addresses you bring to Amazon Web Services, however, use IPAM pools only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeletePublicIpv4PoolCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeletePublicIpv4PoolCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeletePublicIpv4PoolRequest
 *   DryRun: true || false,
 *   PoolId: "STRING_VALUE", // required
 *   NetworkBorderGroup: "STRING_VALUE",
 * };
 * const command = new DeletePublicIpv4PoolCommand(input);
 * const response = await client.send(command);
 * // { // DeletePublicIpv4PoolResult
 * //   ReturnValue: true || false,
 * // };
 *
 * ```
 *
 * @param DeletePublicIpv4PoolCommandInput - {@link DeletePublicIpv4PoolCommandInput}
 * @returns {@link DeletePublicIpv4PoolCommandOutput}
 * @see {@link DeletePublicIpv4PoolCommandInput} for command's `input` shape.
 * @see {@link DeletePublicIpv4PoolCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeletePublicIpv4PoolCommand extends $Command
  .classBuilder<
    DeletePublicIpv4PoolCommandInput,
    DeletePublicIpv4PoolCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DeletePublicIpv4Pool", {})
  .n("EC2Client", "DeletePublicIpv4PoolCommand")
  .f(void 0, void 0)
  .ser(se_DeletePublicIpv4PoolCommand)
  .de(de_DeletePublicIpv4PoolCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePublicIpv4PoolRequest;
      output: DeletePublicIpv4PoolResult;
    };
    sdk: {
      input: DeletePublicIpv4PoolCommandInput;
      output: DeletePublicIpv4PoolCommandOutput;
    };
  };
}
