// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { GetOriginEndpointPolicyRequest, GetOriginEndpointPolicyResponse } from "../models/models_0";
import { GetOriginEndpointPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOriginEndpointPolicyCommand}.
 */
export interface GetOriginEndpointPolicyCommandInput extends GetOriginEndpointPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetOriginEndpointPolicyCommand}.
 */
export interface GetOriginEndpointPolicyCommandOutput extends GetOriginEndpointPolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the specified origin endpoint policy that's configured in AWS Elemental MediaPackage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, GetOriginEndpointPolicyCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, GetOriginEndpointPolicyCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * // import type { MediaPackageV2ClientConfig } from "@aws-sdk/client-mediapackagev2";
 * const config = {}; // type is MediaPackageV2ClientConfig
 * const client = new MediaPackageV2Client(config);
 * const input = { // GetOriginEndpointPolicyRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE", // required
 *   OriginEndpointName: "STRING_VALUE", // required
 * };
 * const command = new GetOriginEndpointPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetOriginEndpointPolicyResponse
 * //   ChannelGroupName: "STRING_VALUE", // required
 * //   ChannelName: "STRING_VALUE", // required
 * //   OriginEndpointName: "STRING_VALUE", // required
 * //   Policy: "STRING_VALUE", // required
 * //   CdnAuthConfiguration: { // CdnAuthConfiguration
 * //     CdnIdentifierSecretArns: [ // CdnIdentifierSecretArns // required
 * //       "STRING_VALUE",
 * //     ],
 * //     SecretsRoleArn: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOriginEndpointPolicyCommandInput - {@link GetOriginEndpointPolicyCommandInput}
 * @returns {@link GetOriginEndpointPolicyCommandOutput}
 * @see {@link GetOriginEndpointPolicyCommandInput} for command's `input` shape.
 * @see {@link GetOriginEndpointPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied because either you don't have permissions to perform the requested operation or MediaPackage is getting throttling errors with CDN authorization. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide. Or, if you're using CDN authorization, you will receive this exception if MediaPackage receives a throttling error from Secrets Manager.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates that an error from the service occurred while trying to process a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service.</p>
 *
 * @throws {@link MediaPackageV2ServiceException}
 * <p>Base exception class for all service exceptions from MediaPackageV2 service.</p>
 *
 *
 * @example Getting an Origin Endpoint Policy
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   OriginEndpointName: "exampleOriginEndpoint"
 * };
 * const command = new GetOriginEndpointPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   OriginEndpointName: "exampleOriginEndpoint",
 *   Policy: "{...}"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetOriginEndpointPolicyCommand extends $Command
  .classBuilder<
    GetOriginEndpointPolicyCommandInput,
    GetOriginEndpointPolicyCommandOutput,
    MediaPackageV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("mediapackagev2", "GetOriginEndpointPolicy", {})
  .n("MediaPackageV2Client", "GetOriginEndpointPolicyCommand")
  .sc(GetOriginEndpointPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOriginEndpointPolicyRequest;
      output: GetOriginEndpointPolicyResponse;
    };
    sdk: {
      input: GetOriginEndpointPolicyCommandInput;
      output: GetOriginEndpointPolicyCommandOutput;
    };
  };
}
