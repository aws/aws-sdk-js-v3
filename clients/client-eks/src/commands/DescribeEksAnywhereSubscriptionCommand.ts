// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEksAnywhereSubscriptionRequest, DescribeEksAnywhereSubscriptionResponse } from "../models/models_0";
import { DescribeEksAnywhereSubscription } from "../schemas/schemas_5_Anywhere";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEksAnywhereSubscriptionCommand}.
 */
export interface DescribeEksAnywhereSubscriptionCommandInput extends DescribeEksAnywhereSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEksAnywhereSubscriptionCommand}.
 */
export interface DescribeEksAnywhereSubscriptionCommandOutput
  extends DescribeEksAnywhereSubscriptionResponse,
    __MetadataBearer {}

/**
 * <p>Returns descriptive information about a subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeEksAnywhereSubscriptionCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeEksAnywhereSubscriptionCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // DescribeEksAnywhereSubscriptionRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DescribeEksAnywhereSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEksAnywhereSubscriptionResponse
 * //   subscription: { // EksAnywhereSubscription
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     effectiveDate: new Date("TIMESTAMP"),
 * //     expirationDate: new Date("TIMESTAMP"),
 * //     licenseQuantity: Number("int"),
 * //     licenseType: "Cluster",
 * //     term: { // EksAnywhereSubscriptionTerm
 * //       duration: Number("int"),
 * //       unit: "MONTHS",
 * //     },
 * //     status: "STRING_VALUE",
 * //     autoRenew: true || false,
 * //     licenseArns: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     licenses: [ // LicenseList
 * //       { // License
 * //         id: "STRING_VALUE",
 * //         token: "STRING_VALUE",
 * //       },
 * //     ],
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEksAnywhereSubscriptionCommandInput - {@link DescribeEksAnywhereSubscriptionCommandInput}
 * @returns {@link DescribeEksAnywhereSubscriptionCommandOutput}
 * @see {@link DescribeEksAnywhereSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DescribeEksAnywhereSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a> that doesn't have permissions to use
 *             the action or resource or specifying an identifier that is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <code>ListClusters</code>. You can view your available managed node groups with
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region
 *             specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 *
 * @public
 */
export class DescribeEksAnywhereSubscriptionCommand extends $Command
  .classBuilder<
    DescribeEksAnywhereSubscriptionCommandInput,
    DescribeEksAnywhereSubscriptionCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWesleyFrontend", "DescribeEksAnywhereSubscription", {})
  .n("EKSClient", "DescribeEksAnywhereSubscriptionCommand")
  .sc(DescribeEksAnywhereSubscription)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEksAnywhereSubscriptionRequest;
      output: DescribeEksAnywhereSubscriptionResponse;
    };
    sdk: {
      input: DescribeEksAnywhereSubscriptionCommandInput;
      output: DescribeEksAnywhereSubscriptionCommandOutput;
    };
  };
}
