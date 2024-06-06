// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateEndpointAccessRequest, UpdateEndpointAccessResponse } from "../models/models_0";
import { de_UpdateEndpointAccessCommand, se_UpdateEndpointAccessCommand } from "../protocols/Aws_json1_1";
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
 * The input for {@link UpdateEndpointAccessCommand}.
 */
export interface UpdateEndpointAccessCommandInput extends UpdateEndpointAccessRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEndpointAccessCommand}.
 */
export interface UpdateEndpointAccessCommandOutput extends UpdateEndpointAccessResponse, __MetadataBearer {}

/**
 * <p>Updates an Amazon Redshift Serverless managed endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, UpdateEndpointAccessCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, UpdateEndpointAccessCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // UpdateEndpointAccessRequest
 *   endpointName: "STRING_VALUE", // required
 *   vpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateEndpointAccessCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEndpointAccessResponse
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
 * //         },
 * //       ],
 * //     },
 * //     endpointArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateEndpointAccessCommandInput - {@link UpdateEndpointAccessCommandInput}
 * @returns {@link UpdateEndpointAccessCommandOutput}
 * @see {@link UpdateEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link UpdateEndpointAccessCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 * @public
 */
export class UpdateEndpointAccessCommand extends $Command
  .classBuilder<
    UpdateEndpointAccessCommandInput,
    UpdateEndpointAccessCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServerless", "UpdateEndpointAccess", {})
  .n("RedshiftServerlessClient", "UpdateEndpointAccessCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEndpointAccessCommand)
  .de(de_UpdateEndpointAccessCommand)
  .build() {}
