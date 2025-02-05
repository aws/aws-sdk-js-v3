// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetServiceNetworkVpcAssociationRequest, GetServiceNetworkVpcAssociationResponse } from "../models/models_0";
import {
  de_GetServiceNetworkVpcAssociationCommand,
  se_GetServiceNetworkVpcAssociationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServiceNetworkVpcAssociationCommand}.
 */
export interface GetServiceNetworkVpcAssociationCommandInput extends GetServiceNetworkVpcAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceNetworkVpcAssociationCommand}.
 */
export interface GetServiceNetworkVpcAssociationCommandOutput
  extends GetServiceNetworkVpcAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about the specified association between a service network and a VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, GetServiceNetworkVpcAssociationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, GetServiceNetworkVpcAssociationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new VPCLatticeClient(config);
 * const input = { // GetServiceNetworkVpcAssociationRequest
 *   serviceNetworkVpcAssociationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetServiceNetworkVpcAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceNetworkVpcAssociationResponse
 * //   id: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   createdBy: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   serviceNetworkId: "STRING_VALUE",
 * //   serviceNetworkName: "STRING_VALUE",
 * //   serviceNetworkArn: "STRING_VALUE",
 * //   vpcId: "STRING_VALUE",
 * //   securityGroupIds: [ // SecurityGroupList
 * //     "STRING_VALUE",
 * //   ],
 * //   failureMessage: "STRING_VALUE",
 * //   failureCode: "STRING_VALUE",
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetServiceNetworkVpcAssociationCommandInput - {@link GetServiceNetworkVpcAssociationCommandInput}
 * @returns {@link GetServiceNetworkVpcAssociationCommandOutput}
 * @see {@link GetServiceNetworkVpcAssociationCommandInput} for command's `input` shape.
 * @see {@link GetServiceNetworkVpcAssociationCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services
 *    service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 * @public
 */
export class GetServiceNetworkVpcAssociationCommand extends $Command
  .classBuilder<
    GetServiceNetworkVpcAssociationCommandInput,
    GetServiceNetworkVpcAssociationCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MercuryControlPlane", "GetServiceNetworkVpcAssociation", {})
  .n("VPCLatticeClient", "GetServiceNetworkVpcAssociationCommand")
  .f(void 0, void 0)
  .ser(se_GetServiceNetworkVpcAssociationCommand)
  .de(de_GetServiceNetworkVpcAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceNetworkVpcAssociationRequest;
      output: GetServiceNetworkVpcAssociationResponse;
    };
    sdk: {
      input: GetServiceNetworkVpcAssociationCommandInput;
      output: GetServiceNetworkVpcAssociationCommandOutput;
    };
  };
}
