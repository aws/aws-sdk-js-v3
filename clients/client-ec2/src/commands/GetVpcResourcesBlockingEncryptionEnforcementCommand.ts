// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetVpcResourcesBlockingEncryptionEnforcementRequest,
  GetVpcResourcesBlockingEncryptionEnforcementResult,
} from "../models/models_6";
import { GetVpcResourcesBlockingEncryptionEnforcement } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVpcResourcesBlockingEncryptionEnforcementCommand}.
 */
export interface GetVpcResourcesBlockingEncryptionEnforcementCommandInput
  extends GetVpcResourcesBlockingEncryptionEnforcementRequest {}
/**
 * @public
 *
 * The output of {@link GetVpcResourcesBlockingEncryptionEnforcementCommand}.
 */
export interface GetVpcResourcesBlockingEncryptionEnforcementCommandOutput
  extends GetVpcResourcesBlockingEncryptionEnforcementResult,
    __MetadataBearer {}

/**
 * <p>Gets information about resources in a VPC that are blocking encryption enforcement.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html">Enforce VPC encryption in transit</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetVpcResourcesBlockingEncryptionEnforcementCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetVpcResourcesBlockingEncryptionEnforcementCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetVpcResourcesBlockingEncryptionEnforcementRequest
 *   VpcId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetVpcResourcesBlockingEncryptionEnforcementCommand(input);
 * const response = await client.send(command);
 * // { // GetVpcResourcesBlockingEncryptionEnforcementResult
 * //   NonCompliantResources: [ // VpcEncryptionNonCompliantResourceList
 * //     { // VpcEncryptionNonCompliantResource
 * //       Id: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       IsExcludable: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetVpcResourcesBlockingEncryptionEnforcementCommandInput - {@link GetVpcResourcesBlockingEncryptionEnforcementCommandInput}
 * @returns {@link GetVpcResourcesBlockingEncryptionEnforcementCommandOutput}
 * @see {@link GetVpcResourcesBlockingEncryptionEnforcementCommandInput} for command's `input` shape.
 * @see {@link GetVpcResourcesBlockingEncryptionEnforcementCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetVpcResourcesBlockingEncryptionEnforcementCommand extends $Command
  .classBuilder<
    GetVpcResourcesBlockingEncryptionEnforcementCommandInput,
    GetVpcResourcesBlockingEncryptionEnforcementCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetVpcResourcesBlockingEncryptionEnforcement", {})
  .n("EC2Client", "GetVpcResourcesBlockingEncryptionEnforcementCommand")
  .sc(GetVpcResourcesBlockingEncryptionEnforcement)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVpcResourcesBlockingEncryptionEnforcementRequest;
      output: GetVpcResourcesBlockingEncryptionEnforcementResult;
    };
    sdk: {
      input: GetVpcResourcesBlockingEncryptionEnforcementCommandInput;
      output: GetVpcResourcesBlockingEncryptionEnforcementCommandOutput;
    };
  };
}
