// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListEksAnywhereSubscriptionsRequest, ListEksAnywhereSubscriptionsResponse } from "../models/models_0";
import { ListEksAnywhereSubscriptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEksAnywhereSubscriptionsCommand}.
 */
export interface ListEksAnywhereSubscriptionsCommandInput extends ListEksAnywhereSubscriptionsRequest {}
/**
 * @public
 *
 * The output of {@link ListEksAnywhereSubscriptionsCommand}.
 */
export interface ListEksAnywhereSubscriptionsCommandOutput extends ListEksAnywhereSubscriptionsResponse, __MetadataBearer {}

/**
 * <p>Displays the full description of the subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListEksAnywhereSubscriptionsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListEksAnywhereSubscriptionsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // ListEksAnywhereSubscriptionsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   includeStatus: [ // EksAnywhereSubscriptionStatusValues
 *     "CREATING" || "ACTIVE" || "UPDATING" || "EXPIRING" || "EXPIRED" || "DELETING",
 *   ],
 * };
 * const command = new ListEksAnywhereSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListEksAnywhereSubscriptionsResponse
 * //   subscriptions: [ // EksAnywhereSubscriptionList
 * //     { // EksAnywhereSubscription
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       effectiveDate: new Date("TIMESTAMP"),
 * //       expirationDate: new Date("TIMESTAMP"),
 * //       licenseQuantity: Number("int"),
 * //       licenseType: "Cluster",
 * //       term: { // EksAnywhereSubscriptionTerm
 * //         duration: Number("int"),
 * //         unit: "MONTHS",
 * //       },
 * //       status: "STRING_VALUE",
 * //       autoRenew: true || false,
 * //       licenseArns: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       licenses: [ // LicenseList
 * //         { // License
 * //           id: "STRING_VALUE",
 * //           token: "STRING_VALUE",
 * //         },
 * //       ],
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEksAnywhereSubscriptionsCommandInput - {@link ListEksAnywhereSubscriptionsCommandInput}
 * @returns {@link ListEksAnywhereSubscriptionsCommandOutput}
 * @see {@link ListEksAnywhereSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListEksAnywhereSubscriptionsCommandOutput} for command's `response` shape.
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
export class ListEksAnywhereSubscriptionsCommand extends $Command
  .classBuilder<
    ListEksAnywhereSubscriptionsCommandInput,
    ListEksAnywhereSubscriptionsCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWesleyFrontend", "ListEksAnywhereSubscriptions", {})
  .n("EKSClient", "ListEksAnywhereSubscriptionsCommand")
  .sc(ListEksAnywhereSubscriptions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEksAnywhereSubscriptionsRequest;
      output: ListEksAnywhereSubscriptionsResponse;
    };
    sdk: {
      input: ListEksAnywhereSubscriptionsCommandInput;
      output: ListEksAnywhereSubscriptionsCommandOutput;
    };
  };
}
