// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAuditSuppressionRequest, CreateAuditSuppressionResponse } from "../models/models_0";
import { CreateAuditSuppression$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAuditSuppressionCommand}.
 */
export interface CreateAuditSuppressionCommandInput extends CreateAuditSuppressionRequest {}
/**
 * @public
 *
 * The output of {@link CreateAuditSuppressionCommand}.
 */
export interface CreateAuditSuppressionCommandOutput extends CreateAuditSuppressionResponse, __MetadataBearer {}

/**
 * Creates a Device Defender audit suppression.
 *
 * Requires permission to access the [CreateAuditSuppression](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateAuditSuppressionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateAuditSuppressionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreateAuditSuppressionRequest
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
 *   clientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new CreateAuditSuppressionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateAuditSuppressionCommandInput - {@link CreateAuditSuppressionCommandInput}
 * @returns {@link CreateAuditSuppressionCommandOutput}
 * @see {@link CreateAuditSuppressionCommandInput} for command's `input` shape.
 * @see {@link CreateAuditSuppressionCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The resource already exists.
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
export class CreateAuditSuppressionCommand extends command<CreateAuditSuppressionCommandInput, CreateAuditSuppressionCommandOutput>(
  _ep0,
  _mw0,
  "CreateAuditSuppression",
  CreateAuditSuppression$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAuditSuppressionRequest;
      output: {};
    };
    sdk: {
      input: CreateAuditSuppressionCommandInput;
      output: CreateAuditSuppressionCommandOutput;
    };
  };
}
