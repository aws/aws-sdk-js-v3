// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetCaseRequest, GetCaseResponse, GetCaseResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetCaseCommand, se_GetCaseCommand } from "../protocols/Aws_restJson1";
import { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCaseCommand}.
 */
export interface GetCaseCommandInput extends GetCaseRequest {}
/**
 * @public
 *
 * The output of {@link GetCaseCommand}.
 */
export interface GetCaseCommandOutput extends GetCaseResponse, __MetadataBearer {}

/**
 * <p>Grant permission to view a designated case.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, GetCaseCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, GetCaseCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SecurityIRClient(config);
 * const input = { // GetCaseRequest
 *   caseId: "STRING_VALUE", // required
 * };
 * const command = new GetCaseCommand(input);
 * const response = await client.send(command);
 * // { // GetCaseResponse
 * //   title: "STRING_VALUE",
 * //   caseArn: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   caseStatus: "Submitted" || "Acknowledged" || "Detection and Analysis" || "Containment, Eradication and Recovery" || "Post-incident Activities" || "Ready to Close" || "Closed",
 * //   engagementType: "Security Incident" || "Investigation",
 * //   reportedIncidentStartDate: new Date("TIMESTAMP"),
 * //   actualIncidentStartDate: new Date("TIMESTAMP"),
 * //   impactedAwsRegions: [ // ImpactedAwsRegionList
 * //     { // ImpactedAwsRegion
 * //       region: "af-south-1" || "ap-east-1" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "ap-south-1" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-southeast-4" || "ap-southeast-5" || "ca-central-1" || "ca-west-1" || "cn-north-1" || "cn-northwest-1" || "eu-central-1" || "eu-central-2" || "eu-north-1" || "eu-south-1" || "eu-south-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "il-central-1" || "me-central-1" || "me-south-1" || "sa-east-1" || "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2", // required
 * //     },
 * //   ],
 * //   threatActorIpAddresses: [ // ThreatActorIpList
 * //     { // ThreatActorIp
 * //       ipAddress: "STRING_VALUE", // required
 * //       userAgent: "STRING_VALUE",
 * //     },
 * //   ],
 * //   pendingAction: "Customer" || "None",
 * //   impactedAccounts: [ // ImpactedAccounts
 * //     "STRING_VALUE",
 * //   ],
 * //   watchers: [ // Watchers
 * //     { // Watcher
 * //       email: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       jobTitle: "STRING_VALUE",
 * //     },
 * //   ],
 * //   createdDate: new Date("TIMESTAMP"),
 * //   lastUpdatedDate: new Date("TIMESTAMP"),
 * //   closureCode: "Investigation Completed" || "Not Resolved" || "False Positive" || "Duplicate",
 * //   resolverType: "AWS" || "Self",
 * //   impactedServices: [ // ImpactedServicesList
 * //     "STRING_VALUE",
 * //   ],
 * //   caseAttachments: [ // CaseAttachmentsList
 * //     { // CaseAttachmentAttributes
 * //       attachmentId: "STRING_VALUE", // required
 * //       fileName: "STRING_VALUE", // required
 * //       attachmentStatus: "Verified" || "Failed" || "Pending", // required
 * //       creator: "STRING_VALUE", // required
 * //       createdDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   closedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetCaseCommandInput - {@link GetCaseCommandInput}
 * @returns {@link GetCaseCommandOutput}
 * @see {@link GetCaseCommandInput} for command's `input` shape.
 * @see {@link GetCaseCommandOutput} for command's `response` shape.
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
 * @example Invoke GetCase
 * ```javascript
 * //
 * const input = {
 *   "caseId": "8403556009"
 * };
 * const command = new GetCaseCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "actualIncidentStartDate": "2023-03-27T15:32:01.789Z",
 *   "caseArn": "arn:aws:security-ir:us-west-1:123456789012:case/1234567890",
 *   "caseStatus": "Submitted",
 *   "createdDate": "2023-01-27T15:32:01.789Z",
 *   "description": "Case description",
 *   "engagementType": "Investigation",
 *   "impactedAccounts": [
 *     "000000000000",
 *     "111111111111"
 *   ],
 *   "impactedAwsRegions": [
 *     {
 *       "region": "ap-southeast-1"
 *     }
 *   ],
 *   "impactedServices": [
 *     "Amazon EC2",
 *     "Amazon EKS"
 *   ],
 *   "lastUpdatedDate": "2023-02-27T15:32:01.789Z",
 *   "pendingAction": "Customer",
 *   "reportedIncidentStartDate": "2023-03-27T15:32:01.789Z",
 *   "resolverType": "Self",
 *   "threatActorIpAddresses": [
 *     {
 *       "ipAddress": "192.168.192.168",
 *       "userAgent": "Browser"
 *     }
 *   ],
 *   "title": "My sample case",
 *   "watchers": [
 *     {
 *       "name": "Alice",
 *       "email": "alice@example.com",
 *       "jobTitle": "CEO"
 *     },
 *     {
 *       "name": "Bob",
 *       "email": "bob@example.com",
 *       "jobTitle": "CFO"
 *     }
 *   ]
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class GetCaseCommand extends $Command
  .classBuilder<
    GetCaseCommandInput,
    GetCaseCommandOutput,
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
  .s("SecurityIncidentResponse", "GetCase", {})
  .n("SecurityIRClient", "GetCaseCommand")
  .f(void 0, GetCaseResponseFilterSensitiveLog)
  .ser(se_GetCaseCommand)
  .de(de_GetCaseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCaseRequest;
      output: GetCaseResponse;
    };
    sdk: {
      input: GetCaseCommandInput;
      output: GetCaseCommandOutput;
    };
  };
}
