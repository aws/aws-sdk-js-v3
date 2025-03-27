// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteVPCAssociationAuthorizationRequest,
  DeleteVPCAssociationAuthorizationResponse,
} from "../models/models_0";
import {
  de_DeleteVPCAssociationAuthorizationCommand,
  se_DeleteVPCAssociationAuthorizationCommand,
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
 * The input for {@link DeleteVPCAssociationAuthorizationCommand}.
 */
export interface DeleteVPCAssociationAuthorizationCommandInput extends DeleteVPCAssociationAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVPCAssociationAuthorizationCommand}.
 */
export interface DeleteVPCAssociationAuthorizationCommandOutput
  extends DeleteVPCAssociationAuthorizationResponse,
    __MetadataBearer {}

/**
 * <p>Removes authorization to submit an <code>AssociateVPCWithHostedZone</code> request to
 * 			associate a specified VPC with a hosted zone that was created by a different account.
 * 			You must use the account that created the hosted zone to submit a
 * 				<code>DeleteVPCAssociationAuthorization</code> request.</p>
 *          <important>
 *             <p>Sending this request only prevents the Amazon Web Services account that created the
 * 				VPC from associating the VPC with the Amazon Route 53 hosted zone in the future. If
 * 				the VPC is already associated with the hosted zone,
 * 					<code>DeleteVPCAssociationAuthorization</code> won't disassociate the VPC from
 * 				the hosted zone. If you want to delete an existing association, use
 * 					<code>DisassociateVPCFromHostedZone</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteVPCAssociationAuthorizationCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteVPCAssociationAuthorizationCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // DeleteVPCAssociationAuthorizationRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   VPC: { // VPC
 *     VPCRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-east-1" || "me-south-1" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "me-central-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-south-1" || "ap-south-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "ca-central-1" || "cn-north-1" || "cn-northwest-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1" || "ca-west-1" || "ap-southeast-5" || "mx-central-1" || "us-isof-south-1" || "us-isof-east-1" || "ap-southeast-7",
 *     VPCId: "STRING_VALUE",
 *   },
 * };
 * const command = new DeleteVPCAssociationAuthorizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVPCAssociationAuthorizationCommandInput - {@link DeleteVPCAssociationAuthorizationCommandInput}
 * @returns {@link DeleteVPCAssociationAuthorizationCommandOutput}
 * @see {@link DeleteVPCAssociationAuthorizationCommandInput} for command's `input` shape.
 * @see {@link DeleteVPCAssociationAuthorizationCommandOutput} for command's `response` shape.
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
 * @throws {@link VPCAssociationAuthorizationNotFound} (client fault)
 *  <p>The VPC that you specified is not authorized to be associated with the hosted
 * 			zone.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class DeleteVPCAssociationAuthorizationCommand extends $Command
  .classBuilder<
    DeleteVPCAssociationAuthorizationCommandInput,
    DeleteVPCAssociationAuthorizationCommandOutput,
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
  .s("AWSDnsV20130401", "DeleteVPCAssociationAuthorization", {})
  .n("Route53Client", "DeleteVPCAssociationAuthorizationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVPCAssociationAuthorizationCommand)
  .de(de_DeleteVPCAssociationAuthorizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVPCAssociationAuthorizationRequest;
      output: {};
    };
    sdk: {
      input: DeleteVPCAssociationAuthorizationCommandInput;
      output: DeleteVPCAssociationAuthorizationCommandOutput;
    };
  };
}
