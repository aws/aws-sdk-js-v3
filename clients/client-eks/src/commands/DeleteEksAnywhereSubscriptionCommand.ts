// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteEksAnywhereSubscriptionRequest, DeleteEksAnywhereSubscriptionResponse } from "../models/models_0";
import { DeleteEksAnywhereSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEksAnywhereSubscriptionCommand}.
 */
export interface DeleteEksAnywhereSubscriptionCommandInput extends DeleteEksAnywhereSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEksAnywhereSubscriptionCommand}.
 */
export interface DeleteEksAnywhereSubscriptionCommandOutput
  extends DeleteEksAnywhereSubscriptionResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an expired or inactive subscription. Deleting inactive subscriptions removes
 *             them from the Amazon Web Services Management Console view and from list/describe API responses. Subscriptions can
 *             only be cancelled within 7 days of creation and are cancelled by creating a ticket in
 *             the Amazon Web Services Support Center. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeleteEksAnywhereSubscriptionCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeleteEksAnywhereSubscriptionCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // DeleteEksAnywhereSubscriptionRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteEksAnywhereSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEksAnywhereSubscriptionResponse
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
 * @param DeleteEksAnywhereSubscriptionCommandInput - {@link DeleteEksAnywhereSubscriptionCommandInput}
 * @returns {@link DeleteEksAnywhereSubscriptionCommandOutput}
 * @see {@link DeleteEksAnywhereSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteEksAnywhereSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a> that doesn't have permissions to use
 *             the action or resource or specifying an identifier that is not valid.</p>
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
export class DeleteEksAnywhereSubscriptionCommand extends $Command
  .classBuilder<
    DeleteEksAnywhereSubscriptionCommandInput,
    DeleteEksAnywhereSubscriptionCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWesleyFrontend", "DeleteEksAnywhereSubscription", {})
  .n("EKSClient", "DeleteEksAnywhereSubscriptionCommand")
  .sc(DeleteEksAnywhereSubscription$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEksAnywhereSubscriptionRequest;
      output: DeleteEksAnywhereSubscriptionResponse;
    };
    sdk: {
      input: DeleteEksAnywhereSubscriptionCommandInput;
      output: DeleteEksAnywhereSubscriptionCommandOutput;
    };
  };
}
