// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeFindingsRequest, DescribeFindingsResponse } from "../models/models_0";
import { DescribeFindings } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFindingsCommand}.
 */
export interface DescribeFindingsCommandInput extends DescribeFindingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFindingsCommand}.
 */
export interface DescribeFindingsCommandOutput extends DescribeFindingsResponse, __MetadataBearer {}

/**
 * <p>Describes the findings that are specified by the ARNs of the findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeFindingsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeFindingsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = { // DescribeFindingsRequest
 *   findingArns: [ // BatchDescribeArnList // required
 *     "STRING_VALUE",
 *   ],
 *   locale: "EN_US",
 * };
 * const command = new DescribeFindingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFindingsResponse
 * //   findings: [ // FindingList // required
 * //     { // Finding
 * //       arn: "STRING_VALUE", // required
 * //       schemaVersion: Number("int"),
 * //       service: "STRING_VALUE",
 * //       serviceAttributes: { // InspectorServiceAttributes
 * //         schemaVersion: Number("int"), // required
 * //         assessmentRunArn: "STRING_VALUE",
 * //         rulesPackageArn: "STRING_VALUE",
 * //       },
 * //       assetType: "ec2-instance",
 * //       assetAttributes: { // AssetAttributes
 * //         schemaVersion: Number("int"), // required
 * //         agentId: "STRING_VALUE",
 * //         autoScalingGroup: "STRING_VALUE",
 * //         amiId: "STRING_VALUE",
 * //         hostname: "STRING_VALUE",
 * //         ipv4Addresses: [ // Ipv4AddressList
 * //           "STRING_VALUE",
 * //         ],
 * //         tags: [ // Tags
 * //           { // Tag
 * //             key: "STRING_VALUE", // required
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         networkInterfaces: [ // NetworkInterfaces
 * //           { // NetworkInterface
 * //             networkInterfaceId: "STRING_VALUE",
 * //             subnetId: "STRING_VALUE",
 * //             vpcId: "STRING_VALUE",
 * //             privateDnsName: "STRING_VALUE",
 * //             privateIpAddress: "STRING_VALUE",
 * //             privateIpAddresses: [ // PrivateIpAddresses
 * //               { // PrivateIp
 * //                 privateDnsName: "STRING_VALUE",
 * //                 privateIpAddress: "STRING_VALUE",
 * //               },
 * //             ],
 * //             publicDnsName: "STRING_VALUE",
 * //             publicIp: "STRING_VALUE",
 * //             ipv6Addresses: [ // Ipv6Addresses
 * //               "STRING_VALUE",
 * //             ],
 * //             securityGroups: [ // SecurityGroups
 * //               { // SecurityGroup
 * //                 groupName: "STRING_VALUE",
 * //                 groupId: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       id: "STRING_VALUE",
 * //       title: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       recommendation: "STRING_VALUE",
 * //       severity: "Low" || "Medium" || "High" || "Informational" || "Undefined",
 * //       numericSeverity: Number("double"),
 * //       confidence: Number("int"),
 * //       indicatorOfCompromise: true || false,
 * //       attributes: [ // AttributeList // required
 * //         { // Attribute
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       userAttributes: [ // UserAttributeList // required
 * //         {
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   failedItems: { // FailedItems // required
 * //     "<keys>": { // FailedItemDetails
 * //       failureCode: "INVALID_ARN" || "DUPLICATE_ARN" || "ITEM_DOES_NOT_EXIST" || "ACCESS_DENIED" || "LIMIT_EXCEEDED" || "INTERNAL_ERROR", // required
 * //       retryable: true || false, // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFindingsCommandInput - {@link DescribeFindingsCommandInput}
 * @returns {@link DescribeFindingsCommandOutput}
 * @see {@link DescribeFindingsCommandInput} for command's `input` shape.
 * @see {@link DescribeFindingsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 *
 * @public
 */
export class DescribeFindingsCommand extends $Command
  .classBuilder<
    DescribeFindingsCommandInput,
    DescribeFindingsCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("InspectorService", "DescribeFindings", {})
  .n("InspectorClient", "DescribeFindingsCommand")
  .sc(DescribeFindings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFindingsRequest;
      output: DescribeFindingsResponse;
    };
    sdk: {
      input: DescribeFindingsCommandInput;
      output: DescribeFindingsCommandOutput;
    };
  };
}
