// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEksAnywhereSubscriptionRequest, CreateEksAnywhereSubscriptionResponse } from "../models/models_0";
import {
  de_CreateEksAnywhereSubscriptionCommand,
  se_CreateEksAnywhereSubscriptionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEksAnywhereSubscriptionCommand}.
 */
export interface CreateEksAnywhereSubscriptionCommandInput extends CreateEksAnywhereSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link CreateEksAnywhereSubscriptionCommand}.
 */
export interface CreateEksAnywhereSubscriptionCommandOutput
  extends CreateEksAnywhereSubscriptionResponse,
    __MetadataBearer {}

/**
 * <p>Creates an EKS Anywhere subscription. When a subscription is created, it is a contract
 *             agreement for the length of the term specified in the request. Licenses that are used to
 *             validate support are provisioned in Amazon Web Services License Manager and the caller account is
 *             granted access to EKS Anywhere Curated Packages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateEksAnywhereSubscriptionCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateEksAnywhereSubscriptionCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EKSClient(config);
 * const input = { // CreateEksAnywhereSubscriptionRequest
 *   name: "STRING_VALUE", // required
 *   term: { // EksAnywhereSubscriptionTerm
 *     duration: Number("int"),
 *     unit: "MONTHS",
 *   },
 *   licenseQuantity: Number("int"),
 *   licenseType: "Cluster",
 *   autoRenew: true || false,
 *   clientRequestToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateEksAnywhereSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // CreateEksAnywhereSubscriptionResponse
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
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEksAnywhereSubscriptionCommandInput - {@link CreateEksAnywhereSubscriptionCommandInput}
 * @returns {@link CreateEksAnywhereSubscriptionCommandOutput}
 * @see {@link CreateEksAnywhereSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateEksAnywhereSubscriptionCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>You have encountered a service limit on the specified resource.</p>
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
 * @public
 */
export class CreateEksAnywhereSubscriptionCommand extends $Command
  .classBuilder<
    CreateEksAnywhereSubscriptionCommandInput,
    CreateEksAnywhereSubscriptionCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWesleyFrontend", "CreateEksAnywhereSubscription", {})
  .n("EKSClient", "CreateEksAnywhereSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_CreateEksAnywhereSubscriptionCommand)
  .de(de_CreateEksAnywhereSubscriptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEksAnywhereSubscriptionRequest;
      output: CreateEksAnywhereSubscriptionResponse;
    };
    sdk: {
      input: CreateEksAnywhereSubscriptionCommandInput;
      output: CreateEksAnywhereSubscriptionCommandOutput;
    };
  };
}
