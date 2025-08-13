// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCaseRequest, CreateCaseRequestFilterSensitiveLog, CreateCaseResponse } from "../models/models_0";
import { de_CreateCaseCommand, se_CreateCaseCommand } from "../protocols/Aws_restJson1";
import { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCaseCommand}.
 */
export interface CreateCaseCommandInput extends CreateCaseRequest {}
/**
 * @public
 *
 * The output of {@link CreateCaseCommand}.
 */
export interface CreateCaseCommandOutput extends CreateCaseResponse, __MetadataBearer {}

/**
 * <p>Creates a new case.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, CreateCaseCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, CreateCaseCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * const client = new SecurityIRClient(config);
 * const input = { // CreateCaseRequest
 *   clientToken: "STRING_VALUE",
 *   resolverType: "AWS" || "Self", // required
 *   title: "STRING_VALUE", // required
 *   description: "STRING_VALUE", // required
 *   engagementType: "Security Incident" || "Investigation", // required
 *   reportedIncidentStartDate: new Date("TIMESTAMP"), // required
 *   impactedAccounts: [ // ImpactedAccounts // required
 *     "STRING_VALUE",
 *   ],
 *   watchers: [ // Watchers // required
 *     { // Watcher
 *       email: "STRING_VALUE", // required
 *       name: "STRING_VALUE",
 *       jobTitle: "STRING_VALUE",
 *     },
 *   ],
 *   threatActorIpAddresses: [ // ThreatActorIpList
 *     { // ThreatActorIp
 *       ipAddress: "STRING_VALUE", // required
 *       userAgent: "STRING_VALUE",
 *     },
 *   ],
 *   impactedServices: [ // ImpactedServicesList
 *     "STRING_VALUE",
 *   ],
 *   impactedAwsRegions: [ // ImpactedAwsRegionList
 *     { // ImpactedAwsRegion
 *       region: "af-south-1" || "ap-east-1" || "ap-east-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "ap-south-1" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-southeast-4" || "ap-southeast-5" || "ap-southeast-7" || "ca-central-1" || "ca-west-1" || "cn-north-1" || "cn-northwest-1" || "eu-central-1" || "eu-central-2" || "eu-north-1" || "eu-south-1" || "eu-south-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "il-central-1" || "me-central-1" || "me-south-1" || "mx-central-1" || "sa-east-1" || "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2", // required
 *     },
 *   ],
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCaseCommand(input);
 * const response = await client.send(command);
 * // { // CreateCaseResponse
 * //   caseId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateCaseCommandInput - {@link CreateCaseCommandInput}
 * @returns {@link CreateCaseCommandOutput}
 * @see {@link CreateCaseCommandInput} for command's `input` shape.
 * @see {@link CreateCaseCommandOutput} for command's `response` shape.
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
 *
 * @example Invoke CreateCase
 * ```javascript
 * //
 * const input = {
 *   description: "Case description",
 *   engagementType: "Investigation",
 *   impactedAccounts: [
 *     "000000000000",
 *     "111111111111"
 *   ],
 *   impactedAwsRegions: [
 *     {
 *       region: "ap-southeast-1"
 *     }
 *   ],
 *   impactedServices: [
 *     "Amazon EC2",
 *     "Amazon EKS"
 *   ],
 *   reportedIncidentStartDate: "2023-03-27T15:32:01.789Z",
 *   resolverType: "Self",
 *   threatActorIpAddresses: [
 *     {
 *       ipAddress: "192.168.192.168",
 *       userAgent: "Browser"
 *     }
 *   ],
 *   title: "My sample case",
 *   watchers: [
 *     {
 *       email: "alice@example.com",
 *       jobTitle: "CEO",
 *       name: "Alice"
 *     },
 *     {
 *       email: "bob@example.com",
 *       jobTitle: "CFO",
 *       name: "Bob"
 *     }
 *   ]
 * };
 * const command = new CreateCaseCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CreateCaseCommand extends $Command
  .classBuilder<
    CreateCaseCommandInput,
    CreateCaseCommandOutput,
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
  .s("SecurityIncidentResponse", "CreateCase", {})
  .n("SecurityIRClient", "CreateCaseCommand")
  .f(CreateCaseRequestFilterSensitiveLog, void 0)
  .ser(se_CreateCaseCommand)
  .de(de_CreateCaseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCaseRequest;
      output: CreateCaseResponse;
    };
    sdk: {
      input: CreateCaseCommandInput;
      output: CreateCaseCommandOutput;
    };
  };
}
