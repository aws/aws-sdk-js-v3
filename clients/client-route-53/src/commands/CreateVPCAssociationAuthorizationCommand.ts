// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateVPCAssociationAuthorizationRequest,
  CreateVPCAssociationAuthorizationResponse,
} from "../models/models_0";
import {
  de_CreateVPCAssociationAuthorizationCommand,
  se_CreateVPCAssociationAuthorizationCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVPCAssociationAuthorizationCommand}.
 */
export interface CreateVPCAssociationAuthorizationCommandInput extends CreateVPCAssociationAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link CreateVPCAssociationAuthorizationCommand}.
 */
export interface CreateVPCAssociationAuthorizationCommandOutput
  extends CreateVPCAssociationAuthorizationResponse,
    __MetadataBearer {}

/**
 * <p>Authorizes the Amazon Web Services account that created a specified VPC to submit an
 * 				<code>AssociateVPCWithHostedZone</code> request to associate the VPC with a
 * 			specified hosted zone that was created by a different account. To submit a
 * 				<code>CreateVPCAssociationAuthorization</code> request, you must use the account
 * 			that created the hosted zone. After you authorize the association, use the account that
 * 			created the VPC to submit an <code>AssociateVPCWithHostedZone</code> request.</p>
 *          <note>
 *             <p>If you want to associate multiple VPCs that you created by using one account with
 * 				a hosted zone that you created by using a different account, you must submit one
 * 				authorization request for each VPC.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateVPCAssociationAuthorizationCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateVPCAssociationAuthorizationCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Route53Client(config);
 * const input = { // CreateVPCAssociationAuthorizationRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   VPC: { // VPC
 *     VPCRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-east-1" || "me-south-1" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "me-central-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-south-1" || "ap-south-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "ca-central-1" || "cn-north-1" || "cn-northwest-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1" || "ca-west-1" || "ap-southeast-5" || "mx-central-1" || "ap-southeast-7",
 *     VPCId: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateVPCAssociationAuthorizationCommand(input);
 * const response = await client.send(command);
 * // { // CreateVPCAssociationAuthorizationResponse
 * //   HostedZoneId: "STRING_VALUE", // required
 * //   VPC: { // VPC
 * //     VPCRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-east-1" || "me-south-1" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "me-central-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-south-1" || "ap-south-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "ca-central-1" || "cn-north-1" || "cn-northwest-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1" || "ca-west-1" || "ap-southeast-5" || "mx-central-1" || "ap-southeast-7",
 * //     VPCId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVPCAssociationAuthorizationCommandInput - {@link CreateVPCAssociationAuthorizationCommandInput}
 * @returns {@link CreateVPCAssociationAuthorizationCommandOutput}
 * @see {@link CreateVPCAssociationAuthorizationCommandInput} for command's `input` shape.
 * @see {@link CreateVPCAssociationAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link ConcurrentModification} (client fault)
 *  <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidVPCId} (client fault)
 *  <p>The VPC ID that you specified either isn't a valid ID or the current account is not
 * 			authorized to access this VPC.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link TooManyVPCAssociationAuthorizations} (client fault)
 *  <p>You've created the maximum number of authorizations that can be created for the
 * 			specified hosted zone. To authorize another VPC to be associated with the hosted zone,
 * 			submit a <code>DeleteVPCAssociationAuthorization</code> request to remove an existing
 * 			authorization. To get a list of existing authorizations, submit a
 * 				<code>ListVPCAssociationAuthorizations</code> request.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 * @public
 */
export class CreateVPCAssociationAuthorizationCommand extends $Command
  .classBuilder<
    CreateVPCAssociationAuthorizationCommandInput,
    CreateVPCAssociationAuthorizationCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getIdNormalizerPlugin(config),
    ];
  })
  .s("AWSDnsV20130401", "CreateVPCAssociationAuthorization", {})
  .n("Route53Client", "CreateVPCAssociationAuthorizationCommand")
  .f(void 0, void 0)
  .ser(se_CreateVPCAssociationAuthorizationCommand)
  .de(de_CreateVPCAssociationAuthorizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVPCAssociationAuthorizationRequest;
      output: CreateVPCAssociationAuthorizationResponse;
    };
    sdk: {
      input: CreateVPCAssociationAuthorizationCommandInput;
      output: CreateVPCAssociationAuthorizationCommandOutput;
    };
  };
}
