// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetEndpointAccessRequest, GetEndpointAccessResponse } from "../models/models_0";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { GetEndpointAccess } from "../schemas/schemas_3_Endpoint";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEndpointAccessCommand}.
 */
export interface GetEndpointAccessCommandInput extends GetEndpointAccessRequest {}
/**
 * @public
 *
 * The output of {@link GetEndpointAccessCommand}.
 */
export interface GetEndpointAccessCommandOutput extends GetEndpointAccessResponse, __MetadataBearer {}

/**
 * <p>Returns information, such as the name, about a VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, GetEndpointAccessCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, GetEndpointAccessCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // GetEndpointAccessRequest
 *   endpointName: "STRING_VALUE", // required
 * };
 * const command = new GetEndpointAccessCommand(input);
 * const response = await client.send(command);
 * // { // GetEndpointAccessResponse
 * //   endpoint: { // EndpointAccess
 * //     endpointName: "STRING_VALUE",
 * //     endpointStatus: "STRING_VALUE",
 * //     workgroupName: "STRING_VALUE",
 * //     endpointCreateTime: new Date("TIMESTAMP"),
 * //     port: Number("int"),
 * //     address: "STRING_VALUE",
 * //     subnetIds: [ // SubnetIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     vpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //       { // VpcSecurityGroupMembership
 * //         vpcSecurityGroupId: "STRING_VALUE",
 * //         status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     vpcEndpoint: { // VpcEndpoint
 * //       vpcEndpointId: "STRING_VALUE",
 * //       vpcId: "STRING_VALUE",
 * //       networkInterfaces: [ // NetworkInterfaceList
 * //         { // NetworkInterface
 * //           networkInterfaceId: "STRING_VALUE",
 * //           subnetId: "STRING_VALUE",
 * //           privateIpAddress: "STRING_VALUE",
 * //           availabilityZone: "STRING_VALUE",
 * //           ipv6Address: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     endpointArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEndpointAccessCommandInput - {@link GetEndpointAccessCommandInput}
 * @returns {@link GetEndpointAccessCommandOutput}
 * @see {@link GetEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link GetEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class GetEndpointAccessCommand extends $Command
  .classBuilder<
    GetEndpointAccessCommandInput,
    GetEndpointAccessCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "GetEndpointAccess", {})
  .n("RedshiftServerlessClient", "GetEndpointAccessCommand")
  .sc(GetEndpointAccess)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEndpointAccessRequest;
      output: GetEndpointAccessResponse;
    };
    sdk: {
      input: GetEndpointAccessCommandInput;
      output: GetEndpointAccessCommandOutput;
    };
  };
}
