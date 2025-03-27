// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  ListRelatedResourcesForAuditFindingRequest,
  ListRelatedResourcesForAuditFindingResponse,
} from "../models/models_2";
import {
  de_ListRelatedResourcesForAuditFindingCommand,
  se_ListRelatedResourcesForAuditFindingCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRelatedResourcesForAuditFindingCommand}.
 */
export interface ListRelatedResourcesForAuditFindingCommandInput extends ListRelatedResourcesForAuditFindingRequest {}
/**
 * @public
 *
 * The output of {@link ListRelatedResourcesForAuditFindingCommand}.
 */
export interface ListRelatedResourcesForAuditFindingCommandOutput
  extends ListRelatedResourcesForAuditFindingResponse,
    __MetadataBearer {}

/**
 * <p>The related resources of an Audit finding.
 *       The following resources can be returned from calling this API:</p>
 *          <ul>
 *             <li>
 *                <p>DEVICE_CERTIFICATE</p>
 *             </li>
 *             <li>
 *                <p>CA_CERTIFICATE</p>
 *             </li>
 *             <li>
 *                <p>IOT_POLICY</p>
 *             </li>
 *             <li>
 *                <p>COGNITO_IDENTITY_POOL</p>
 *             </li>
 *             <li>
 *                <p>CLIENT_ID</p>
 *             </li>
 *             <li>
 *                <p>ACCOUNT_SETTINGS</p>
 *             </li>
 *             <li>
 *                <p>ROLE_ALIAS</p>
 *             </li>
 *             <li>
 *                <p>IAM_ROLE</p>
 *             </li>
 *             <li>
 *                <p>ISSUER_CERTIFICATE</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>This API is similar to DescribeAuditFinding's <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html">RelatedResources</a>
 *       but provides pagination and is not limited to 10 resources.
 *       When calling <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html">DescribeAuditFinding</a> for the intermediate CA revoked for
 *       active device certificates check, RelatedResources will not be populated. You must use this API, ListRelatedResourcesForAuditFinding, to list the certificates.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListRelatedResourcesForAuditFindingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListRelatedResourcesForAuditFindingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListRelatedResourcesForAuditFindingRequest
 *   findingId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRelatedResourcesForAuditFindingCommand(input);
 * const response = await client.send(command);
 * // { // ListRelatedResourcesForAuditFindingResponse
 * //   relatedResources: [ // RelatedResources
 * //     { // RelatedResource
 * //       resourceType: "DEVICE_CERTIFICATE" || "CA_CERTIFICATE" || "IOT_POLICY" || "COGNITO_IDENTITY_POOL" || "CLIENT_ID" || "ACCOUNT_SETTINGS" || "ROLE_ALIAS" || "IAM_ROLE" || "ISSUER_CERTIFICATE",
 * //       resourceIdentifier: { // ResourceIdentifier
 * //         deviceCertificateId: "STRING_VALUE",
 * //         caCertificateId: "STRING_VALUE",
 * //         cognitoIdentityPoolId: "STRING_VALUE",
 * //         clientId: "STRING_VALUE",
 * //         policyVersionIdentifier: { // PolicyVersionIdentifier
 * //           policyName: "STRING_VALUE",
 * //           policyVersionId: "STRING_VALUE",
 * //         },
 * //         account: "STRING_VALUE",
 * //         iamRoleArn: "STRING_VALUE",
 * //         roleAliasArn: "STRING_VALUE",
 * //         issuerCertificateIdentifier: { // IssuerCertificateIdentifier
 * //           issuerCertificateSubject: "STRING_VALUE",
 * //           issuerId: "STRING_VALUE",
 * //           issuerCertificateSerialNumber: "STRING_VALUE",
 * //         },
 * //         deviceCertificateArn: "STRING_VALUE",
 * //       },
 * //       additionalInfo: { // StringMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRelatedResourcesForAuditFindingCommandInput - {@link ListRelatedResourcesForAuditFindingCommandInput}
 * @returns {@link ListRelatedResourcesForAuditFindingCommandOutput}
 * @see {@link ListRelatedResourcesForAuditFindingCommandInput} for command's `input` shape.
 * @see {@link ListRelatedResourcesForAuditFindingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListRelatedResourcesForAuditFindingCommand extends $Command
  .classBuilder<
    ListRelatedResourcesForAuditFindingCommandInput,
    ListRelatedResourcesForAuditFindingCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "ListRelatedResourcesForAuditFinding", {})
  .n("IoTClient", "ListRelatedResourcesForAuditFindingCommand")
  .f(void 0, void 0)
  .ser(se_ListRelatedResourcesForAuditFindingCommand)
  .de(de_ListRelatedResourcesForAuditFindingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRelatedResourcesForAuditFindingRequest;
      output: ListRelatedResourcesForAuditFindingResponse;
    };
    sdk: {
      input: ListRelatedResourcesForAuditFindingCommandInput;
      output: ListRelatedResourcesForAuditFindingCommandOutput;
    };
  };
}
