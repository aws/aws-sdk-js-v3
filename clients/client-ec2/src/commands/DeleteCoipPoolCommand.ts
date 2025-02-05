// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCoipPoolRequest, DeleteCoipPoolResult } from "../models/models_3";
import { de_DeleteCoipPoolCommand, se_DeleteCoipPoolCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCoipPoolCommand}.
 */
export interface DeleteCoipPoolCommandInput extends DeleteCoipPoolRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCoipPoolCommand}.
 */
export interface DeleteCoipPoolCommandOutput extends DeleteCoipPoolResult, __MetadataBearer {}

/**
 * <p>Deletes a pool of customer-owned IP (CoIP) addresses. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteCoipPoolCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteCoipPoolCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DeleteCoipPoolRequest
 *   CoipPoolId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteCoipPoolCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCoipPoolResult
 * //   CoipPool: { // CoipPool
 * //     PoolId: "STRING_VALUE",
 * //     PoolCidrs: [ // ValueStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     LocalGatewayRouteTableId: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PoolArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteCoipPoolCommandInput - {@link DeleteCoipPoolCommandInput}
 * @returns {@link DeleteCoipPoolCommandOutput}
 * @see {@link DeleteCoipPoolCommandInput} for command's `input` shape.
 * @see {@link DeleteCoipPoolCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DeleteCoipPoolCommand extends $Command
  .classBuilder<
    DeleteCoipPoolCommandInput,
    DeleteCoipPoolCommandOutput,
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
  .s("AmazonEC2", "DeleteCoipPool", {})
  .n("EC2Client", "DeleteCoipPoolCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCoipPoolCommand)
  .de(de_DeleteCoipPoolCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCoipPoolRequest;
      output: DeleteCoipPoolResult;
    };
    sdk: {
      input: DeleteCoipPoolCommandInput;
      output: DeleteCoipPoolCommandOutput;
    };
  };
}
