// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetVerifiedAccessEndpointTargetsRequest, GetVerifiedAccessEndpointTargetsResult } from "../models/models_7";
import { GetVerifiedAccessEndpointTargets } from "../schemas/schemas_127_Access";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVerifiedAccessEndpointTargetsCommand}.
 */
export interface GetVerifiedAccessEndpointTargetsCommandInput extends GetVerifiedAccessEndpointTargetsRequest {}
/**
 * @public
 *
 * The output of {@link GetVerifiedAccessEndpointTargetsCommand}.
 */
export interface GetVerifiedAccessEndpointTargetsCommandOutput
  extends GetVerifiedAccessEndpointTargetsResult,
    __MetadataBearer {}

/**
 * <p>Gets the targets for the specified network CIDR endpoint for Verified Access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetVerifiedAccessEndpointTargetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetVerifiedAccessEndpointTargetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetVerifiedAccessEndpointTargetsRequest
 *   VerifiedAccessEndpointId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetVerifiedAccessEndpointTargetsCommand(input);
 * const response = await client.send(command);
 * // { // GetVerifiedAccessEndpointTargetsResult
 * //   VerifiedAccessEndpointTargets: [ // VerifiedAccessEndpointTargetList
 * //     { // VerifiedAccessEndpointTarget
 * //       VerifiedAccessEndpointId: "STRING_VALUE",
 * //       VerifiedAccessEndpointTargetIpAddress: "STRING_VALUE",
 * //       VerifiedAccessEndpointTargetDns: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetVerifiedAccessEndpointTargetsCommandInput - {@link GetVerifiedAccessEndpointTargetsCommandInput}
 * @returns {@link GetVerifiedAccessEndpointTargetsCommandOutput}
 * @see {@link GetVerifiedAccessEndpointTargetsCommandInput} for command's `input` shape.
 * @see {@link GetVerifiedAccessEndpointTargetsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetVerifiedAccessEndpointTargetsCommand extends $Command
  .classBuilder<
    GetVerifiedAccessEndpointTargetsCommandInput,
    GetVerifiedAccessEndpointTargetsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetVerifiedAccessEndpointTargets", {})
  .n("EC2Client", "GetVerifiedAccessEndpointTargetsCommand")
  .sc(GetVerifiedAccessEndpointTargets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVerifiedAccessEndpointTargetsRequest;
      output: GetVerifiedAccessEndpointTargetsResult;
    };
    sdk: {
      input: GetVerifiedAccessEndpointTargetsCommandInput;
      output: GetVerifiedAccessEndpointTargetsCommandOutput;
    };
  };
}
