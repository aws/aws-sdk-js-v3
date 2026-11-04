// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListRelatedResourcesForAuditFindingRequest,
  ListRelatedResourcesForAuditFindingResponse,
} from "../models/models_1";
import { ListRelatedResourcesForAuditFinding$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListRelatedResourcesForAuditFindingCommandOutput extends ListRelatedResourcesForAuditFindingResponse, __MetadataBearer {}

/**
 * The related resources of an Audit finding. The following resources can be returned from calling this API:
 *
 * - DEVICE_CERTIFICATE
 * - CA_CERTIFICATE
 * - IOT_POLICY
 * - COGNITO_IDENTITY_POOL
 * - CLIENT_ID
 * - ACCOUNT_SETTINGS
 * - ROLE_ALIAS
 * - IAM_ROLE
 * - ISSUER_CERTIFICATE
 *
 * > **Note:** This API is similar to DescribeAuditFinding's [RelatedResources](https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html) but provides pagination and is not limited to 10 resources. When calling [DescribeAuditFinding](https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html) for the intermediate CA revoked for active device certificates check, RelatedResources will not be populated. You must use this API, ListRelatedResourcesForAuditFinding, to list the certificates.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListRelatedResourcesForAuditFindingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListRelatedResourcesForAuditFindingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
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
export class ListRelatedResourcesForAuditFindingCommand extends command<ListRelatedResourcesForAuditFindingCommandInput, ListRelatedResourcesForAuditFindingCommandOutput>(
  _ep0,
  _mw0,
  "ListRelatedResourcesForAuditFinding",
  ListRelatedResourcesForAuditFinding$
) {
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
