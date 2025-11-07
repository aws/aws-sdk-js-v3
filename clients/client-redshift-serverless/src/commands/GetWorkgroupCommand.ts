// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetWorkgroupRequest, GetWorkgroupResponse } from "../models/models_0";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { GetWorkgroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkgroupCommand}.
 */
export interface GetWorkgroupCommandInput extends GetWorkgroupRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkgroupCommand}.
 */
export interface GetWorkgroupCommandOutput extends GetWorkgroupResponse, __MetadataBearer {}

/**
 * <p>Returns information about a specific workgroup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, GetWorkgroupCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, GetWorkgroupCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // GetWorkgroupRequest
 *   workgroupName: "STRING_VALUE", // required
 * };
 * const command = new GetWorkgroupCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkgroupResponse
 * //   workgroup: { // Workgroup
 * //     workgroupId: "STRING_VALUE",
 * //     workgroupArn: "STRING_VALUE",
 * //     workgroupName: "STRING_VALUE",
 * //     namespaceName: "STRING_VALUE",
 * //     baseCapacity: Number("int"),
 * //     enhancedVpcRouting: true || false,
 * //     configParameters: [ // ConfigParameterList
 * //       { // ConfigParameter
 * //         parameterKey: "STRING_VALUE",
 * //         parameterValue: "STRING_VALUE",
 * //       },
 * //     ],
 * //     securityGroupIds: [ // SecurityGroupIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     subnetIds: [ // SubnetIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     status: "STRING_VALUE",
 * //     endpoint: { // Endpoint
 * //       address: "STRING_VALUE",
 * //       port: Number("int"),
 * //       vpcEndpoints: [ // VpcEndpointList
 * //         { // VpcEndpoint
 * //           vpcEndpointId: "STRING_VALUE",
 * //           vpcId: "STRING_VALUE",
 * //           networkInterfaces: [ // NetworkInterfaceList
 * //             { // NetworkInterface
 * //               networkInterfaceId: "STRING_VALUE",
 * //               subnetId: "STRING_VALUE",
 * //               privateIpAddress: "STRING_VALUE",
 * //               availabilityZone: "STRING_VALUE",
 * //               ipv6Address: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     publiclyAccessible: true || false,
 * //     creationDate: new Date("TIMESTAMP"),
 * //     port: Number("int"),
 * //     customDomainName: "STRING_VALUE",
 * //     customDomainCertificateArn: "STRING_VALUE",
 * //     customDomainCertificateExpiryTime: new Date("TIMESTAMP"),
 * //     workgroupVersion: "STRING_VALUE",
 * //     patchVersion: "STRING_VALUE",
 * //     maxCapacity: Number("int"),
 * //     crossAccountVpcs: [ // VpcIds
 * //       "STRING_VALUE",
 * //     ],
 * //     ipAddressType: "STRING_VALUE",
 * //     pricePerformanceTarget: { // PerformanceTarget
 * //       status: "STRING_VALUE",
 * //       level: Number("int"),
 * //     },
 * //     trackName: "STRING_VALUE",
 * //     pendingTrackName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWorkgroupCommandInput - {@link GetWorkgroupCommandInput}
 * @returns {@link GetWorkgroupCommandOutput}
 * @see {@link GetWorkgroupCommandInput} for command's `input` shape.
 * @see {@link GetWorkgroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
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
export class GetWorkgroupCommand extends $Command
  .classBuilder<
    GetWorkgroupCommandInput,
    GetWorkgroupCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "GetWorkgroup", {})
  .n("RedshiftServerlessClient", "GetWorkgroupCommand")
  .sc(GetWorkgroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkgroupRequest;
      output: GetWorkgroupResponse;
    };
    sdk: {
      input: GetWorkgroupCommandInput;
      output: GetWorkgroupCommandOutput;
    };
  };
}
