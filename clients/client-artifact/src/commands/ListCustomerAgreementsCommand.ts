// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ArtifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ArtifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListCustomerAgreementsRequest, ListCustomerAgreementsResponse } from "../models/models_0";
import { de_ListCustomerAgreementsCommand, se_ListCustomerAgreementsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCustomerAgreementsCommand}.
 */
export interface ListCustomerAgreementsCommandInput extends ListCustomerAgreementsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomerAgreementsCommand}.
 */
export interface ListCustomerAgreementsCommandOutput extends ListCustomerAgreementsResponse, __MetadataBearer {}

/**
 * <p>List active customer-agreements applicable to calling identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ArtifactClient, ListCustomerAgreementsCommand } from "@aws-sdk/client-artifact"; // ES Modules import
 * // const { ArtifactClient, ListCustomerAgreementsCommand } = require("@aws-sdk/client-artifact"); // CommonJS import
 * const client = new ArtifactClient(config);
 * const input = { // ListCustomerAgreementsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCustomerAgreementsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomerAgreementsResponse
 * //   customerAgreements: [ // CustomerAgreementList // required
 * //     { // CustomerAgreementSummary
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       agreementArn: "STRING_VALUE",
 * //       awsAccountId: "STRING_VALUE",
 * //       organizationArn: "STRING_VALUE",
 * //       effectiveStart: new Date("TIMESTAMP"),
 * //       effectiveEnd: new Date("TIMESTAMP"),
 * //       state: "ACTIVE" || "CUSTOMER_TERMINATED" || "AWS_TERMINATED",
 * //       description: "STRING_VALUE",
 * //       acceptanceTerms: [ // AgreementTerms
 * //         "STRING_VALUE",
 * //       ],
 * //       terminateTerms: [
 * //         "STRING_VALUE",
 * //       ],
 * //       type: "CUSTOM" || "DEFAULT" || "MODIFIED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomerAgreementsCommandInput - {@link ListCustomerAgreementsCommandInput}
 * @returns {@link ListCustomerAgreementsCommandOutput}
 * @see {@link ListCustomerAgreementsCommandInput} for command's `input` shape.
 * @see {@link ListCustomerAgreementsCommandOutput} for command's `response` shape.
 * @see {@link ArtifactClientResolvedConfig | config} for ArtifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown server exception has occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Request fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ArtifactServiceException}
 * <p>Base exception class for all service exceptions from Artifact service.</p>
 *
 * @public
 * @example Invoke ListCustomerAgreements operation
 * ```javascript
 * // The ListCustomerAgreements operation returns a collection of customer-agreement resources in the ACTIVE state for the calling credential.
 * const input = {};
 * const command = new ListCustomerAgreementsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "customerAgreements": [
 *     {
 *       "name": "Name of agreement",
 *       "type": "DEFAULT",
 *       "acceptanceTerms": [
 *         "terms acknowledged when agreement was accepted"
 *       ],
 *       "agreementArn": "arn:aws:artifact:::agreement/agreement-abcdef0123456789",
 *       "arn": "arn:aws:artifact::111111111111:customer-agreement/customer-agreement-abcdef0123456789",
 *       "awsAccountId": "111111111111",
 *       "description": "Description of agreement",
 *       "effectiveStart": "2022-04-01T20:32:04Z",
 *       "id": "customer-agreement-abcdef0123456789",
 *       "state": "ACTIVE",
 *       "terminateTerms": [
 *         "terms that must be acknowledged to terminate this agreement"
 *       ]
 *     }
 *   ],
 *   "nextToken": "gPFEGk7CF4wS901w7ppYclt7gPFEGk7CF4wS901w7ppYclt7gPFEGk7CF4wS901w7ppYclt7"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class ListCustomerAgreementsCommand extends $Command
  .classBuilder<
    ListCustomerAgreementsCommandInput,
    ListCustomerAgreementsCommandOutput,
    ArtifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ArtifactClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Artifact", "ListCustomerAgreements", {})
  .n("ArtifactClient", "ListCustomerAgreementsCommand")
  .f(void 0, void 0)
  .ser(se_ListCustomerAgreementsCommand)
  .de(de_ListCustomerAgreementsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomerAgreementsRequest;
      output: ListCustomerAgreementsResponse;
    };
    sdk: {
      input: ListCustomerAgreementsCommandInput;
      output: ListCustomerAgreementsCommandOutput;
    };
  };
}
