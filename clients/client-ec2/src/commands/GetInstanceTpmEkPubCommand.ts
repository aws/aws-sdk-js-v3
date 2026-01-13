// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetInstanceTpmEkPubRequest, GetInstanceTpmEkPubResult } from "../models/models_5";
import { GetInstanceTpmEkPub$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInstanceTpmEkPubCommand}.
 */
export interface GetInstanceTpmEkPubCommandInput extends GetInstanceTpmEkPubRequest {}
/**
 * @public
 *
 * The output of {@link GetInstanceTpmEkPubCommand}.
 */
export interface GetInstanceTpmEkPubCommandOutput extends GetInstanceTpmEkPubResult, __MetadataBearer {}

/**
 * <p>Gets the public endorsement key associated with the Nitro Trusted
 *             Platform Module (NitroTPM) for the specified instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetInstanceTpmEkPubCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetInstanceTpmEkPubCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetInstanceTpmEkPubRequest
 *   InstanceId: "STRING_VALUE", // required
 *   KeyType: "rsa-2048" || "ecc-sec-p384", // required
 *   KeyFormat: "der" || "tpmt", // required
 *   DryRun: true || false,
 * };
 * const command = new GetInstanceTpmEkPubCommand(input);
 * const response = await client.send(command);
 * // { // GetInstanceTpmEkPubResult
 * //   InstanceId: "STRING_VALUE",
 * //   KeyType: "rsa-2048" || "ecc-sec-p384",
 * //   KeyFormat: "der" || "tpmt",
 * //   KeyValue: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInstanceTpmEkPubCommandInput - {@link GetInstanceTpmEkPubCommandInput}
 * @returns {@link GetInstanceTpmEkPubCommandOutput}
 * @see {@link GetInstanceTpmEkPubCommandInput} for command's `input` shape.
 * @see {@link GetInstanceTpmEkPubCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetInstanceTpmEkPubCommand extends $Command
  .classBuilder<
    GetInstanceTpmEkPubCommandInput,
    GetInstanceTpmEkPubCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetInstanceTpmEkPub", {})
  .n("EC2Client", "GetInstanceTpmEkPubCommand")
  .sc(GetInstanceTpmEkPub$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInstanceTpmEkPubRequest;
      output: GetInstanceTpmEkPubResult;
    };
    sdk: {
      input: GetInstanceTpmEkPubCommandInput;
      output: GetInstanceTpmEkPubCommandOutput;
    };
  };
}
