// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEndpointAccessRequest, CreateEndpointAccessResponse } from "../models/models_0";
import { de_CreateEndpointAccessCommand, se_CreateEndpointAccessCommand } from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEndpointAccessCommand}.
 */
export interface CreateEndpointAccessCommandInput extends CreateEndpointAccessRequest {}
/**
 * @public
 *
 * The output of {@link CreateEndpointAccessCommand}.
 */
export interface CreateEndpointAccessCommandOutput extends CreateEndpointAccessResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Redshift Serverless managed VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, CreateEndpointAccessCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, CreateEndpointAccessCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // CreateEndpointAccessRequest
 *   endpointName: "STRING_VALUE", // required
 *   subnetIds: [ // SubnetIdList // required
 *     "STRING_VALUE",
 *   ],
 *   workgroupName: "STRING_VALUE", // required
 *   vpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   ownerAccount: "STRING_VALUE",
 * };
 * const command = new CreateEndpointAccessCommand(input);
 * const response = await client.send(command);
 * // { // CreateEndpointAccessResponse
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
 * @param CreateEndpointAccessCommandInput - {@link CreateEndpointAccessCommandInput}
 * @returns {@link CreateEndpointAccessCommandOutput}
 * @see {@link CreateEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link CreateEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service limit was exceeded.</p>
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
export class CreateEndpointAccessCommand extends $Command
  .classBuilder<
    CreateEndpointAccessCommandInput,
    CreateEndpointAccessCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServerless", "CreateEndpointAccess", {})
  .n("RedshiftServerlessClient", "CreateEndpointAccessCommand")
  .f(void 0, void 0)
  .ser(se_CreateEndpointAccessCommand)
  .de(de_CreateEndpointAccessCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEndpointAccessRequest;
      output: CreateEndpointAccessResponse;
    };
    sdk: {
      input: CreateEndpointAccessCommandInput;
      output: CreateEndpointAccessCommandOutput;
    };
  };
}
