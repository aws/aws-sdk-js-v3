// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateEksAnywhereSubscriptionRequest, UpdateEksAnywhereSubscriptionResponse } from "../models/models_0";
import { UpdateEksAnywhereSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEksAnywhereSubscriptionCommand}.
 */
export interface UpdateEksAnywhereSubscriptionCommandInput extends UpdateEksAnywhereSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEksAnywhereSubscriptionCommand}.
 */
export interface UpdateEksAnywhereSubscriptionCommandOutput extends UpdateEksAnywhereSubscriptionResponse, __MetadataBearer {}

/**
 * <p>Update an EKS Anywhere Subscription. Only auto renewal and tags can be updated after
 *             subscription creation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdateEksAnywhereSubscriptionCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdateEksAnywhereSubscriptionCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // UpdateEksAnywhereSubscriptionRequest
 *   id: "STRING_VALUE", // required
 *   autoRenew: true || false, // required
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new UpdateEksAnywhereSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEksAnywhereSubscriptionResponse
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
 * @param UpdateEksAnywhereSubscriptionCommandInput - {@link UpdateEksAnywhereSubscriptionCommandInput}
 * @returns {@link UpdateEksAnywhereSubscriptionCommandOutput}
 * @see {@link UpdateEksAnywhereSubscriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateEksAnywhereSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a> that doesn't have permissions to use
 *             the action or resource or specifying an identifier that is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
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
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 *
 * @public
 */
export class UpdateEksAnywhereSubscriptionCommand extends $Command
  .classBuilder<
    UpdateEksAnywhereSubscriptionCommandInput,
    UpdateEksAnywhereSubscriptionCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWesleyFrontend", "UpdateEksAnywhereSubscription", {})
  .n("EKSClient", "UpdateEksAnywhereSubscriptionCommand")
  .sc(UpdateEksAnywhereSubscription$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEksAnywhereSubscriptionRequest;
      output: UpdateEksAnywhereSubscriptionResponse;
    };
    sdk: {
      input: UpdateEksAnywhereSubscriptionCommandInput;
      output: UpdateEksAnywhereSubscriptionCommandOutput;
    };
  };
}
