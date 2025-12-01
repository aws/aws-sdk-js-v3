// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { DescribeAuditSuppressionRequest, DescribeAuditSuppressionResponse } from "../models/models_1";
import { DescribeAuditSuppression } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAuditSuppressionCommand}.
 */
export interface DescribeAuditSuppressionCommandInput extends DescribeAuditSuppressionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAuditSuppressionCommand}.
 */
export interface DescribeAuditSuppressionCommandOutput extends DescribeAuditSuppressionResponse, __MetadataBearer {}

/**
 * <p>
 *       Gets information about a Device Defender audit suppression.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuditSuppressionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAuditSuppressionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeAuditSuppressionRequest
 *   checkName: "STRING_VALUE", // required
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
 * };
 * const command = new DescribeAuditSuppressionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAuditSuppressionResponse
 * //   checkName: "STRING_VALUE",
 * //   resourceIdentifier: { // ResourceIdentifier
 * //     deviceCertificateId: "STRING_VALUE",
 * //     caCertificateId: "STRING_VALUE",
 * //     cognitoIdentityPoolId: "STRING_VALUE",
 * //     clientId: "STRING_VALUE",
 * //     policyVersionIdentifier: { // PolicyVersionIdentifier
 * //       policyName: "STRING_VALUE",
 * //       policyVersionId: "STRING_VALUE",
 * //     },
 * //     account: "STRING_VALUE",
 * //     iamRoleArn: "STRING_VALUE",
 * //     roleAliasArn: "STRING_VALUE",
 * //     issuerCertificateIdentifier: { // IssuerCertificateIdentifier
 * //       issuerCertificateSubject: "STRING_VALUE",
 * //       issuerId: "STRING_VALUE",
 * //       issuerCertificateSerialNumber: "STRING_VALUE",
 * //     },
 * //     deviceCertificateArn: "STRING_VALUE",
 * //   },
 * //   expirationDate: new Date("TIMESTAMP"),
 * //   suppressIndefinitely: true || false,
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAuditSuppressionCommandInput - {@link DescribeAuditSuppressionCommandInput}
 * @returns {@link DescribeAuditSuppressionCommandOutput}
 * @see {@link DescribeAuditSuppressionCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditSuppressionCommandOutput} for command's `response` shape.
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
export class DescribeAuditSuppressionCommand extends $Command
  .classBuilder<
    DescribeAuditSuppressionCommandInput,
    DescribeAuditSuppressionCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DescribeAuditSuppression", {})
  .n("IoTClient", "DescribeAuditSuppressionCommand")
  .sc(DescribeAuditSuppression)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAuditSuppressionRequest;
      output: DescribeAuditSuppressionResponse;
    };
    sdk: {
      input: DescribeAuditSuppressionCommandInput;
      output: DescribeAuditSuppressionCommandOutput;
    };
  };
}
