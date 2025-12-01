// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import type { GetContactMethodsRequest, GetContactMethodsResult } from "../models/models_0";
import { GetContactMethods } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContactMethodsCommand}.
 */
export interface GetContactMethodsCommandInput extends GetContactMethodsRequest {}
/**
 * @public
 *
 * The output of {@link GetContactMethodsCommand}.
 */
export interface GetContactMethodsCommandOutput extends GetContactMethodsResult, __MetadataBearer {}

/**
 * <p>Returns information about the configured contact methods. Specify a protocol in your
 *       request to return information about a specific contact method.</p>
 *          <p>A contact method is used to send you notifications about your Amazon Lightsail resources.
 *       You can add one email address and one mobile phone number contact method in each Amazon Web Services Region. However, SMS text messaging is not supported in some Amazon Web Services
 *       Regions, and SMS text messages cannot be sent to some countries/regions. For more information,
 *       see <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContactMethodsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContactMethodsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetContactMethodsRequest
 *   protocols: [ // ContactProtocolsList
 *     "Email" || "SMS",
 *   ],
 * };
 * const command = new GetContactMethodsCommand(input);
 * const response = await client.send(command);
 * // { // GetContactMethodsResult
 * //   contactMethods: [ // ContactMethodsList
 * //     { // ContactMethod
 * //       contactEndpoint: "STRING_VALUE",
 * //       status: "PendingVerification" || "Valid" || "Invalid",
 * //       protocol: "Email" || "SMS",
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       location: { // ResourceLocation
 * //         availabilityZone: "STRING_VALUE",
 * //         regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1" || "ap-southeast-3",
 * //       },
 * //       resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //       supportCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetContactMethodsCommandInput - {@link GetContactMethodsCommandInput}
 * @returns {@link GetContactMethodsCommandOutput}
 * @see {@link GetContactMethodsCommandInput} for command's `input` shape.
 * @see {@link GetContactMethodsCommandOutput} for command's `response` shape.
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
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
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
export class GetContactMethodsCommand extends $Command
  .classBuilder<
    GetContactMethodsCommandInput,
    GetContactMethodsCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Lightsail_20161128", "GetContactMethods", {})
  .n("LightsailClient", "GetContactMethodsCommand")
  .sc(GetContactMethods)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContactMethodsRequest;
      output: GetContactMethodsResult;
    };
    sdk: {
      input: GetContactMethodsCommandInput;
      output: GetContactMethodsCommandOutput;
    };
  };
}
