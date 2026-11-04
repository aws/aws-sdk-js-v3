// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutOriginEndpointPolicyRequest, PutOriginEndpointPolicyResponse } from "../models/models_0";
import { PutOriginEndpointPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutOriginEndpointPolicyCommand}.
 */
export interface PutOriginEndpointPolicyCommandInput extends PutOriginEndpointPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutOriginEndpointPolicyCommand}.
 */
export interface PutOriginEndpointPolicyCommandOutput extends PutOriginEndpointPolicyResponse, __MetadataBearer {}

/**
 * Attaches an IAM policy to the specified origin endpoint. You can attach only one policy with each request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, PutOriginEndpointPolicyCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, PutOriginEndpointPolicyCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * // import type { MediaPackageV2ClientConfig } from "@aws-sdk/client-mediapackagev2";
 * const config = {}; // type is MediaPackageV2ClientConfig
 * const client = new MediaPackageV2Client(config);
 * const input = { // PutOriginEndpointPolicyRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE", // required
 *   OriginEndpointName: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 *   CdnAuthConfiguration: { // CdnAuthConfiguration
 *     CdnIdentifierSecretArns: [ // CdnIdentifierSecretArns // required
 *       "STRING_VALUE",
 *     ],
 *     SecretsRoleArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new PutOriginEndpointPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutOriginEndpointPolicyCommandInput - {@link PutOriginEndpointPolicyCommandInput}
 * @returns {@link PutOriginEndpointPolicyCommandOutput}
 * @see {@link PutOriginEndpointPolicyCommandInput} for command's `input` shape.
 * @see {@link PutOriginEndpointPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied because either you don't have permissions to perform the requested operation or MediaPackage is getting throttling errors with CDN authorization. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide. Or, if you're using CDN authorization, you will receive this exception if MediaPackage receives a throttling error from Secrets Manager.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting this resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Indicates that an error from the service occurred while trying to process a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request throughput limit was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to meet the constraints specified by the AWS service.
 *
 * @throws {@link MediaPackageV2ServiceException}
 *
 * Base exception class for all service exceptions from MediaPackageV2 service.
 *
 * @example Creating an Origin Endpoint Policy
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   OriginEndpointName: "exampleOriginEndpoint",
 *   Policy: "{...}"
 * };
 * const command = new PutOriginEndpointPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutOriginEndpointPolicyCommand extends command<PutOriginEndpointPolicyCommandInput, PutOriginEndpointPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutOriginEndpointPolicy",
  PutOriginEndpointPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutOriginEndpointPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutOriginEndpointPolicyCommandInput;
      output: PutOriginEndpointPolicyCommandOutput;
    };
  };
}
