// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCaseRequest, UpdateCaseRequestFilterSensitiveLog, UpdateCaseResponse } from "../models/models_0";
import { de_UpdateCaseCommand, se_UpdateCaseCommand } from "../protocols/Aws_restJson1";
import { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCaseCommand}.
 */
export interface UpdateCaseCommandInput extends UpdateCaseRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCaseCommand}.
 */
export interface UpdateCaseCommandOutput extends UpdateCaseResponse, __MetadataBearer {}

/**
 * <p>Grants permission to update an existing case.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, UpdateCaseCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, UpdateCaseCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SecurityIRClient(config);
 * const input = { // UpdateCaseRequest
 *   caseId: "STRING_VALUE", // required
 *   title: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   reportedIncidentStartDate: new Date("TIMESTAMP"),
 *   actualIncidentStartDate: new Date("TIMESTAMP"),
 *   engagementType: "Security Incident" || "Investigation",
 *   watchersToAdd: [ // Watchers
 *     { // Watcher
 *       email: "STRING_VALUE", // required
 *       name: "STRING_VALUE",
 *       jobTitle: "STRING_VALUE",
 *     },
 *   ],
 *   watchersToDelete: [
 *     {
 *       email: "STRING_VALUE", // required
 *       name: "STRING_VALUE",
 *       jobTitle: "STRING_VALUE",
 *     },
 *   ],
 *   threatActorIpAddressesToAdd: [ // ThreatActorIpList
 *     { // ThreatActorIp
 *       ipAddress: "STRING_VALUE", // required
 *       userAgent: "STRING_VALUE",
 *     },
 *   ],
 *   threatActorIpAddressesToDelete: [
 *     {
 *       ipAddress: "STRING_VALUE", // required
 *       userAgent: "STRING_VALUE",
 *     },
 *   ],
 *   impactedServicesToAdd: [ // ImpactedServicesList
 *     "STRING_VALUE",
 *   ],
 *   impactedServicesToDelete: [
 *     "STRING_VALUE",
 *   ],
 *   impactedAwsRegionsToAdd: [ // ImpactedAwsRegionList
 *     { // ImpactedAwsRegion
 *       region: "af-south-1" || "ap-east-1" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "ap-south-1" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-southeast-4" || "ap-southeast-5" || "ca-central-1" || "ca-west-1" || "cn-north-1" || "cn-northwest-1" || "eu-central-1" || "eu-central-2" || "eu-north-1" || "eu-south-1" || "eu-south-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "il-central-1" || "me-central-1" || "me-south-1" || "sa-east-1" || "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2", // required
 *     },
 *   ],
 *   impactedAwsRegionsToDelete: [
 *     {
 *       region: "af-south-1" || "ap-east-1" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "ap-south-1" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-southeast-4" || "ap-southeast-5" || "ca-central-1" || "ca-west-1" || "cn-north-1" || "cn-northwest-1" || "eu-central-1" || "eu-central-2" || "eu-north-1" || "eu-south-1" || "eu-south-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "il-central-1" || "me-central-1" || "me-south-1" || "sa-east-1" || "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2", // required
 *     },
 *   ],
 *   impactedAccountsToAdd: [ // ImpactedAccounts
 *     "STRING_VALUE",
 *   ],
 *   impactedAccountsToDelete: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateCaseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCaseCommandInput - {@link UpdateCaseCommandInput}
 * @returns {@link UpdateCaseCommandOutput}
 * @see {@link UpdateCaseCommandInput} for command's `input` shape.
 * @see {@link UpdateCaseCommandOutput} for command's `response` shape.
 * @see {@link SecurityIRClientResolvedConfig | config} for SecurityIRClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link InvalidTokenException} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIncidentResponseNotActiveException} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIRServiceException}
 * <p>Base exception class for all service exceptions from SecurityIR service.</p>
 *
 * @public
 * @example Invoke UpdateCase
 * ```javascript
 * //
 * const input = {
 *   "actualIncidentStartDate": "2023-03-25T15:32:01.789Z",
 *   "caseId": "8403556009",
 *   "description": "Case description",
 *   "engagementType": "Investigation",
 *   "impactedAccountsToAdd": [
 *     "000000000000"
 *   ],
 *   "impactedAccountsToDelete": [
 *     "111111111111"
 *   ],
 *   "impactedAwsRegionsToAdd": [
 *     {
 *       "region": "ap-southeast-1"
 *     }
 *   ],
 *   "impactedAwsRegionsToDelete": [
 *     {
 *       "region": "us-east-1"
 *     }
 *   ],
 *   "impactedServicesToAdd": [
 *     "Amazon EC2"
 *   ],
 *   "impactedServicesToDelete": [
 *     "Amazon EKS"
 *   ],
 *   "reportedIncidentStartDate": "2023-03-27T15:32:01.789Z",
 *   "threatActorIpAddressesToAdd": [
 *     {
 *       "ipAddress": "190.160.190.160",
 *       "userAgent": "Browser"
 *     }
 *   ],
 *   "threatActorIpAddressesToDelete": [
 *     {
 *       "ipAddress": "192.168.192.168",
 *       "userAgent": "Browser"
 *     }
 *   ],
 *   "title": "My sample case",
 *   "watchersToAdd": [
 *     {
 *       "name": "Same",
 *       "email": "Sam@example.com",
 *       "jobTitle": "CEO"
 *     }
 *   ],
 *   "watchersToDelete": [
 *     {
 *       "name": "Bob",
 *       "email": "bob@example.com",
 *       "jobTitle": "CFO"
 *     }
 *   ]
 * };
 * const command = new UpdateCaseCommand(input);
 * await client.send(command);
 * // example id: example-1
 * ```
 *
 */
export class UpdateCaseCommand extends $Command
  .classBuilder<
    UpdateCaseCommandInput,
    UpdateCaseCommandOutput,
    SecurityIRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityIRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityIncidentResponse", "UpdateCase", {})
  .n("SecurityIRClient", "UpdateCaseCommand")
  .f(UpdateCaseRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateCaseCommand)
  .de(de_UpdateCaseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCaseRequest;
      output: {};
    };
    sdk: {
      input: UpdateCaseCommandInput;
      output: UpdateCaseCommandOutput;
    };
  };
}
