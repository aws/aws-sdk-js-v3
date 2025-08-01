// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetSetupHistoryRequest, GetSetupHistoryResult } from "../models/models_1";
import { de_GetSetupHistoryCommand, se_GetSetupHistoryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSetupHistoryCommand}.
 */
export interface GetSetupHistoryCommandInput extends GetSetupHistoryRequest {}
/**
 * @public
 *
 * The output of {@link GetSetupHistoryCommand}.
 */
export interface GetSetupHistoryCommandOutput extends GetSetupHistoryResult, __MetadataBearer {}

/**
 * <p>Returns detailed information for five of the most recent <code>SetupInstanceHttps</code>
 *       requests that were ran on the target instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetSetupHistoryCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetSetupHistoryCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetSetupHistoryRequest
 *   resourceName: "STRING_VALUE", // required
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetSetupHistoryCommand(input);
 * const response = await client.send(command);
 * // { // GetSetupHistoryResult
 * //   setupHistory: [ // setupHistoryList
 * //     { // SetupHistory
 * //       operationId: "STRING_VALUE",
 * //       request: { // SetupRequest
 * //         instanceName: "STRING_VALUE",
 * //         domainNames: [ // SetupDomainNameList
 * //           "STRING_VALUE",
 * //         ],
 * //         certificateProvider: "LetsEncrypt",
 * //       },
 * //       resource: { // SetupHistoryResource
 * //         name: "STRING_VALUE",
 * //         arn: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         location: { // ResourceLocation
 * //           availabilityZone: "STRING_VALUE",
 * //           regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1" || "ap-southeast-3",
 * //         },
 * //         resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //       },
 * //       executionDetails: [ // SetupExecutionDetailsList
 * //         { // SetupExecutionDetails
 * //           command: "STRING_VALUE",
 * //           dateTime: new Date("TIMESTAMP"),
 * //           name: "STRING_VALUE",
 * //           status: "succeeded" || "failed" || "inProgress",
 * //           standardError: "STRING_VALUE",
 * //           standardOutput: "STRING_VALUE",
 * //           version: "STRING_VALUE",
 * //         },
 * //       ],
 * //       status: "succeeded" || "failed" || "inProgress",
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSetupHistoryCommandInput - {@link GetSetupHistoryCommandInput}
 * @returns {@link GetSetupHistoryCommandOutput}
 * @see {@link GetSetupHistoryCommandInput} for command's `input` shape.
 * @see {@link GetSetupHistoryCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an operation is performed on resources in an opt-in
 *       Region that is currently being set up.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 *
 * @public
 */
export class GetSetupHistoryCommand extends $Command
  .classBuilder<
    GetSetupHistoryCommandInput,
    GetSetupHistoryCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "GetSetupHistory", {})
  .n("LightsailClient", "GetSetupHistoryCommand")
  .f(void 0, void 0)
  .ser(se_GetSetupHistoryCommand)
  .de(de_GetSetupHistoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSetupHistoryRequest;
      output: GetSetupHistoryResult;
    };
    sdk: {
      input: GetSetupHistoryCommandInput;
      output: GetSetupHistoryCommandOutput;
    };
  };
}
