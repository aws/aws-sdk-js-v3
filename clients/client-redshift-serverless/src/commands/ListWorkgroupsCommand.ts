// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListWorkgroupsRequest, ListWorkgroupsResponse } from "../models/models_0";
import { de_ListWorkgroupsCommand, se_ListWorkgroupsCommand } from "../protocols/Aws_json1_1";
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
 * The input for {@link ListWorkgroupsCommand}.
 */
export interface ListWorkgroupsCommandInput extends ListWorkgroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkgroupsCommand}.
 */
export interface ListWorkgroupsCommandOutput extends ListWorkgroupsResponse, __MetadataBearer {}

/**
 * <p>Returns information about a list of specified workgroups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListWorkgroupsCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListWorkgroupsCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // ListWorkgroupsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   ownerAccount: "STRING_VALUE",
 * };
 * const command = new ListWorkgroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkgroupsResponse
 * //   nextToken: "STRING_VALUE",
 * //   workgroups: [ // WorkgroupList // required
 * //     { // Workgroup
 * //       workgroupId: "STRING_VALUE",
 * //       workgroupArn: "STRING_VALUE",
 * //       workgroupName: "STRING_VALUE",
 * //       namespaceName: "STRING_VALUE",
 * //       baseCapacity: Number("int"),
 * //       enhancedVpcRouting: true || false,
 * //       configParameters: [ // ConfigParameterList
 * //         { // ConfigParameter
 * //           parameterKey: "STRING_VALUE",
 * //           parameterValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //       securityGroupIds: [ // SecurityGroupIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       subnetIds: [ // SubnetIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "STRING_VALUE",
 * //       endpoint: { // Endpoint
 * //         address: "STRING_VALUE",
 * //         port: Number("int"),
 * //         vpcEndpoints: [ // VpcEndpointList
 * //           { // VpcEndpoint
 * //             vpcEndpointId: "STRING_VALUE",
 * //             vpcId: "STRING_VALUE",
 * //             networkInterfaces: [ // NetworkInterfaceList
 * //               { // NetworkInterface
 * //                 networkInterfaceId: "STRING_VALUE",
 * //                 subnetId: "STRING_VALUE",
 * //                 privateIpAddress: "STRING_VALUE",
 * //                 availabilityZone: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       publiclyAccessible: true || false,
 * //       creationDate: new Date("TIMESTAMP"),
 * //       port: Number("int"),
 * //       customDomainName: "STRING_VALUE",
 * //       customDomainCertificateArn: "STRING_VALUE",
 * //       customDomainCertificateExpiryTime: new Date("TIMESTAMP"),
 * //       workgroupVersion: "STRING_VALUE",
 * //       patchVersion: "STRING_VALUE",
 * //       maxCapacity: Number("int"),
 * //       crossAccountVpcs: [ // VpcIds
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWorkgroupsCommandInput - {@link ListWorkgroupsCommandInput}
 * @returns {@link ListWorkgroupsCommandOutput}
 * @see {@link ListWorkgroupsCommandInput} for command's `input` shape.
 * @see {@link ListWorkgroupsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 * @public
 */
export class ListWorkgroupsCommand extends $Command
  .classBuilder<
    ListWorkgroupsCommandInput,
    ListWorkgroupsCommandOutput,
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
  .s("RedshiftServerless", "ListWorkgroups", {})
  .n("RedshiftServerlessClient", "ListWorkgroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkgroupsCommand)
  .de(de_ListWorkgroupsCommand)
  .build() {}
