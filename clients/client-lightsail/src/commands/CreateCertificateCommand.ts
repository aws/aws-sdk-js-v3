// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateCertificateRequest, CreateCertificateResult } from "../models/models_0";
import { de_CreateCertificateCommand, se_CreateCertificateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCertificateCommand}.
 */
export interface CreateCertificateCommandInput extends CreateCertificateRequest {}
/**
 * @public
 *
 * The output of {@link CreateCertificateCommand}.
 */
export interface CreateCertificateCommandOutput extends CreateCertificateResult, __MetadataBearer {}

/**
 * <p>Creates an SSL/TLS certificate for an Amazon Lightsail content delivery network (CDN)
 *       distribution and a container service.</p>
 *          <p>After the certificate is valid, use the <code>AttachCertificateToDistribution</code>
 *       action to use the certificate and its domains with your distribution. Or use the
 *         <code>UpdateContainerService</code> action to use the certificate and its domains with your
 *       container service.</p>
 *          <important>
 *             <p>Only certificates created in the <code>us-east-1</code>
 *         Amazon Web Services Region can be attached to Lightsail distributions. Lightsail
 *         distributions are global resources that can reference an origin in any Amazon Web Services
 *         Region, and distribute its content globally. However, all distributions are located in the
 *           <code>us-east-1</code> Region.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateCertificateCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateCertificateCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // CreateCertificateRequest
 *   certificateName: "STRING_VALUE", // required
 *   domainName: "STRING_VALUE", // required
 *   subjectAlternativeNames: [ // SubjectAlternativeNameList
 *     "STRING_VALUE",
 *   ],
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateCertificateCommand(input);
 * const response = await client.send(command);
 * // { // CreateCertificateResult
 * //   certificate: { // CertificateSummary
 * //     certificateArn: "STRING_VALUE",
 * //     certificateName: "STRING_VALUE",
 * //     domainName: "STRING_VALUE",
 * //     certificateDetail: { // Certificate
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       domainName: "STRING_VALUE",
 * //       status: "PENDING_VALIDATION" || "ISSUED" || "INACTIVE" || "EXPIRED" || "VALIDATION_TIMED_OUT" || "REVOKED" || "FAILED",
 * //       serialNumber: "STRING_VALUE",
 * //       subjectAlternativeNames: [ // SubjectAlternativeNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       domainValidationRecords: [ // DomainValidationRecordList
 * //         { // DomainValidationRecord
 * //           domainName: "STRING_VALUE",
 * //           resourceRecord: { // ResourceRecord
 * //             name: "STRING_VALUE",
 * //             type: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //           dnsRecordCreationState: { // DnsRecordCreationState
 * //             code: "SUCCEEDED" || "STARTED" || "FAILED",
 * //             message: "STRING_VALUE",
 * //           },
 * //           validationStatus: "PENDING_VALIDATION" || "FAILED" || "SUCCESS",
 * //         },
 * //       ],
 * //       requestFailureReason: "STRING_VALUE",
 * //       inUseResourceCount: Number("int"),
 * //       keyAlgorithm: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       issuedAt: new Date("TIMESTAMP"),
 * //       issuerCA: "STRING_VALUE",
 * //       notBefore: new Date("TIMESTAMP"),
 * //       notAfter: new Date("TIMESTAMP"),
 * //       eligibleToRenew: "STRING_VALUE",
 * //       renewalSummary: { // RenewalSummary
 * //         domainValidationRecords: [
 * //           {
 * //             domainName: "STRING_VALUE",
 * //             resourceRecord: {
 * //               name: "STRING_VALUE",
 * //               type: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //             dnsRecordCreationState: {
 * //               code: "SUCCEEDED" || "STARTED" || "FAILED",
 * //               message: "STRING_VALUE",
 * //             },
 * //             validationStatus: "PENDING_VALIDATION" || "FAILED" || "SUCCESS",
 * //           },
 * //         ],
 * //         renewalStatus: "PendingAutoRenewal" || "PendingValidation" || "Success" || "Failed",
 * //         renewalStatusReason: "STRING_VALUE",
 * //         updatedAt: new Date("TIMESTAMP"),
 * //       },
 * //       revokedAt: new Date("TIMESTAMP"),
 * //       revocationReason: "STRING_VALUE",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       supportCode: "STRING_VALUE",
 * //     },
 * //     tags: [
 * //       {
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   operations: [ // OperationList
 * //     { // Operation
 * //       id: "STRING_VALUE",
 * //       resourceName: "STRING_VALUE",
 * //       resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       location: { // ResourceLocation
 * //         availabilityZone: "STRING_VALUE",
 * //         regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1" || "ap-southeast-3",
 * //       },
 * //       isTerminal: true || false,
 * //       operationDetails: "STRING_VALUE",
 * //       operationType: "DeleteKnownHostKeys" || "DeleteInstance" || "CreateInstance" || "StopInstance" || "StartInstance" || "RebootInstance" || "OpenInstancePublicPorts" || "PutInstancePublicPorts" || "CloseInstancePublicPorts" || "AllocateStaticIp" || "ReleaseStaticIp" || "AttachStaticIp" || "DetachStaticIp" || "UpdateDomainEntry" || "DeleteDomainEntry" || "CreateDomain" || "DeleteDomain" || "CreateInstanceSnapshot" || "DeleteInstanceSnapshot" || "CreateInstancesFromSnapshot" || "CreateLoadBalancer" || "DeleteLoadBalancer" || "AttachInstancesToLoadBalancer" || "DetachInstancesFromLoadBalancer" || "UpdateLoadBalancerAttribute" || "CreateLoadBalancerTlsCertificate" || "DeleteLoadBalancerTlsCertificate" || "AttachLoadBalancerTlsCertificate" || "CreateDisk" || "DeleteDisk" || "AttachDisk" || "DetachDisk" || "CreateDiskSnapshot" || "DeleteDiskSnapshot" || "CreateDiskFromSnapshot" || "CreateRelationalDatabase" || "UpdateRelationalDatabase" || "DeleteRelationalDatabase" || "CreateRelationalDatabaseFromSnapshot" || "CreateRelationalDatabaseSnapshot" || "DeleteRelationalDatabaseSnapshot" || "UpdateRelationalDatabaseParameters" || "StartRelationalDatabase" || "RebootRelationalDatabase" || "StopRelationalDatabase" || "EnableAddOn" || "DisableAddOn" || "PutAlarm" || "GetAlarms" || "DeleteAlarm" || "TestAlarm" || "CreateContactMethod" || "GetContactMethods" || "SendContactMethodVerification" || "DeleteContactMethod" || "CreateDistribution" || "UpdateDistribution" || "DeleteDistribution" || "ResetDistributionCache" || "AttachCertificateToDistribution" || "DetachCertificateFromDistribution" || "UpdateDistributionBundle" || "SetIpAddressType" || "CreateCertificate" || "DeleteCertificate" || "CreateContainerService" || "UpdateContainerService" || "DeleteContainerService" || "CreateContainerServiceDeployment" || "CreateContainerServiceRegistryLogin" || "RegisterContainerImage" || "DeleteContainerImage" || "CreateBucket" || "DeleteBucket" || "CreateBucketAccessKey" || "DeleteBucketAccessKey" || "UpdateBucketBundle" || "UpdateBucket" || "SetResourceAccessForBucket" || "UpdateInstanceMetadataOptions" || "StartGUISession" || "StopGUISession" || "SetupInstanceHttps",
 * //       status: "NotStarted" || "Started" || "Failed" || "Completed" || "Succeeded",
 * //       statusChangedAt: new Date("TIMESTAMP"),
 * //       errorCode: "STRING_VALUE",
 * //       errorDetails: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateCertificateCommandInput - {@link CreateCertificateCommandInput}
 * @returns {@link CreateCertificateCommandOutput}
 * @see {@link CreateCertificateCommandInput} for command's `input` shape.
 * @see {@link CreateCertificateCommandOutput} for command's `response` shape.
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
export class CreateCertificateCommand extends $Command
  .classBuilder<
    CreateCertificateCommandInput,
    CreateCertificateCommandOutput,
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
  .s("Lightsail_20161128", "CreateCertificate", {})
  .n("LightsailClient", "CreateCertificateCommand")
  .f(void 0, void 0)
  .ser(se_CreateCertificateCommand)
  .de(de_CreateCertificateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCertificateRequest;
      output: CreateCertificateResult;
    };
    sdk: {
      input: CreateCertificateCommandInput;
      output: CreateCertificateCommandOutput;
    };
  };
}
