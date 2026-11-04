// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAuditSuppressionRequest, UpdateAuditSuppressionResponse } from "../models/models_2";
import { UpdateAuditSuppression$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAuditSuppressionCommand}.
 */
export interface UpdateAuditSuppressionCommandInput extends UpdateAuditSuppressionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAuditSuppressionCommand}.
 */
export interface UpdateAuditSuppressionCommandOutput extends UpdateAuditSuppressionResponse, __MetadataBearer {}

/**
 * Updates a Device Defender audit suppression.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateAuditSuppressionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateAuditSuppressionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateAuditSuppressionRequest
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
 *   expirationDate: new Date("TIMESTAMP"),
 *   suppressIndefinitely: true || false,
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateAuditSuppressionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAuditSuppressionCommandInput - {@link UpdateAuditSuppressionCommandInput}
 * @returns {@link UpdateAuditSuppressionCommandOutput}
 * @see {@link UpdateAuditSuppressionCommandInput} for command's `input` shape.
 * @see {@link UpdateAuditSuppressionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class UpdateAuditSuppressionCommand extends command<UpdateAuditSuppressionCommandInput, UpdateAuditSuppressionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAuditSuppression",
  UpdateAuditSuppression$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAuditSuppressionRequest;
      output: {};
    };
    sdk: {
      input: UpdateAuditSuppressionCommandInput;
      output: UpdateAuditSuppressionCommandOutput;
    };
  };
}
