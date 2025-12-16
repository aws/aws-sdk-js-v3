// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { DescribeAuditFindingRequest, DescribeAuditFindingResponse } from "../models/models_0";
import { DescribeAuditFinding$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAuditFindingCommand}.
 */
export interface DescribeAuditFindingCommandInput extends DescribeAuditFindingRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAuditFindingCommand}.
 */
export interface DescribeAuditFindingCommandOutput extends DescribeAuditFindingResponse, __MetadataBearer {}

/**
 * <p>Gets information about a single audit finding. Properties include the reason for
 *       noncompliance, the severity of the issue,
 *       and the start time
 *       when the audit that returned the
 *       finding.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuditFinding</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuditFindingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAuditFindingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeAuditFindingRequest
 *   findingId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAuditFindingCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAuditFindingResponse
 * //   finding: { // AuditFinding
 * //     findingId: "STRING_VALUE",
 * //     taskId: "STRING_VALUE",
 * //     checkName: "STRING_VALUE",
 * //     taskStartTime: new Date("TIMESTAMP"),
 * //     findingTime: new Date("TIMESTAMP"),
 * //     severity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW",
 * //     nonCompliantResource: { // NonCompliantResource
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
 * //     relatedResources: [ // RelatedResources
 * //       { // RelatedResource
 * //         resourceType: "DEVICE_CERTIFICATE" || "CA_CERTIFICATE" || "IOT_POLICY" || "COGNITO_IDENTITY_POOL" || "CLIENT_ID" || "ACCOUNT_SETTINGS" || "ROLE_ALIAS" || "IAM_ROLE" || "ISSUER_CERTIFICATE",
 * //         resourceIdentifier: {
 * //           deviceCertificateId: "STRING_VALUE",
 * //           caCertificateId: "STRING_VALUE",
 * //           cognitoIdentityPoolId: "STRING_VALUE",
 * //           clientId: "STRING_VALUE",
 * //           policyVersionIdentifier: {
 * //             policyName: "STRING_VALUE",
 * //             policyVersionId: "STRING_VALUE",
 * //           },
 * //           account: "STRING_VALUE",
 * //           iamRoleArn: "STRING_VALUE",
 * //           roleAliasArn: "STRING_VALUE",
 * //           issuerCertificateIdentifier: {
 * //             issuerCertificateSubject: "STRING_VALUE",
 * //             issuerId: "STRING_VALUE",
 * //             issuerCertificateSerialNumber: "STRING_VALUE",
 * //           },
 * //           deviceCertificateArn: "STRING_VALUE",
 * //         },
 * //         additionalInfo: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     reasonForNonCompliance: "STRING_VALUE",
 * //     reasonForNonComplianceCode: "STRING_VALUE",
 * //     isSuppressed: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAuditFindingCommandInput - {@link DescribeAuditFindingCommandInput}
 * @returns {@link DescribeAuditFindingCommandOutput}
 * @see {@link DescribeAuditFindingCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditFindingCommandOutput} for command's `response` shape.
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
export class DescribeAuditFindingCommand extends $Command
  .classBuilder<
    DescribeAuditFindingCommandInput,
    DescribeAuditFindingCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DescribeAuditFinding", {})
  .n("IoTClient", "DescribeAuditFindingCommand")
  .sc(DescribeAuditFinding$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAuditFindingRequest;
      output: DescribeAuditFindingResponse;
    };
    sdk: {
      input: DescribeAuditFindingCommandInput;
      output: DescribeAuditFindingCommandOutput;
    };
  };
}
