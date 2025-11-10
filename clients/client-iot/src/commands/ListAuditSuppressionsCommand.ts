// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListAuditSuppressionsRequest, ListAuditSuppressionsResponse } from "../models/models_1";
import { ListAuditSuppressions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAuditSuppressionsCommand}.
 */
export interface ListAuditSuppressionsCommandInput extends ListAuditSuppressionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAuditSuppressionsCommand}.
 */
export interface ListAuditSuppressionsCommandOutput extends ListAuditSuppressionsResponse, __MetadataBearer {}

/**
 * <p>
 *       Lists your Device Defender audit listings.
 *     </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditSuppressions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuditSuppressionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuditSuppressionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListAuditSuppressionsRequest
 *   checkName: "STRING_VALUE",
 *   resourceIdentifier: { // ResourceIdentifier
 *     deviceCertificateId: "STRING_VALUE",
 *     caCertificateId: "STRING_VALUE",
 *     cognitoIdentityPoolId: "STRING_VALUE",
 *     clientId: "STRING_VALUE",
 *     policyVersionIdentifier: { // PolicyVersionIdentifier
 *       policyName: "STRING_VALUE",
 *       policyVersionId: "STRING_VALUE",
 *     },
 *     account: "STRING_VALUE",
 *     iamRoleArn: "STRING_VALUE",
 *     roleAliasArn: "STRING_VALUE",
 *     issuerCertificateIdentifier: { // IssuerCertificateIdentifier
 *       issuerCertificateSubject: "STRING_VALUE",
 *       issuerId: "STRING_VALUE",
 *       issuerCertificateSerialNumber: "STRING_VALUE",
 *     },
 *     deviceCertificateArn: "STRING_VALUE",
 *   },
 *   ascendingOrder: true || false,
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAuditSuppressionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAuditSuppressionsResponse
 * //   suppressions: [ // AuditSuppressionList
 * //     { // AuditSuppression
 * //       checkName: "STRING_VALUE", // required
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
 * //       expirationDate: new Date("TIMESTAMP"),
 * //       suppressIndefinitely: true || false,
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAuditSuppressionsCommandInput - {@link ListAuditSuppressionsCommandInput}
 * @returns {@link ListAuditSuppressionsCommandOutput}
 * @see {@link ListAuditSuppressionsCommandInput} for command's `input` shape.
 * @see {@link ListAuditSuppressionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
export class ListAuditSuppressionsCommand extends $Command
  .classBuilder<
    ListAuditSuppressionsCommandInput,
    ListAuditSuppressionsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListAuditSuppressions", {})
  .n("IoTClient", "ListAuditSuppressionsCommand")
  .sc(ListAuditSuppressions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAuditSuppressionsRequest;
      output: ListAuditSuppressionsResponse;
    };
    sdk: {
      input: ListAuditSuppressionsCommandInput;
      output: ListAuditSuppressionsCommandOutput;
    };
  };
}
