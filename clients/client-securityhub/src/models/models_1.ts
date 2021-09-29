import {
  AccountDetails,
  Action,
  ActionTarget,
  Adjustment,
  AdminAccount,
  AwsApiGatewayRestApiDetails,
  AwsApiGatewayStageDetails,
  AwsApiGatewayV2ApiDetails,
  AwsApiGatewayV2StageDetails,
  AwsAutoScalingAutoScalingGroupDetails,
  AwsAutoScalingLaunchConfigurationDetails,
  AwsCertificateManagerCertificateDetails,
  AwsCloudFrontDistributionDetails,
  AwsCloudTrailTrailDetails,
  AwsCodeBuildProjectDetails,
  AwsDynamoDbTableDetails,
  AwsEc2EipDetails,
  AwsEc2InstanceDetails,
  AwsEc2NetworkAclDetails,
  AwsEc2NetworkInterfaceDetails,
  AwsEc2SecurityGroupDetails,
  AwsEc2SubnetDetails,
  AwsEc2VolumeDetails,
  AwsEc2VpcDetails,
  AwsEc2VpnConnectionDetails,
  AwsEcrContainerImageDetails,
  AwsEcsClusterDetails,
  AwsEcsServiceDetails,
  AwsEcsTaskDefinitionDetails,
  AwsElasticBeanstalkEnvironmentDetails,
  AwsElasticsearchDomainDetails,
  AwsElbLoadBalancerDetails,
  AwsElbv2LoadBalancerDetails,
  AwsIamAccessKeyDetails,
  AwsIamGroupDetails,
  AwsIamPolicyDetails,
  AwsIamRoleDetails,
  AwsIamUserDetails,
  AwsKmsKeyDetails,
  AwsLambdaFunctionDetails,
  AwsLambdaLayerVersionDetails,
  AwsRdsDbClusterDetails,
  AwsRdsDbClusterSnapshotDetails,
  AwsRdsDbInstanceDetails,
  AwsRdsDbSnapshotDetails,
  AwsRdsEventSubscriptionDetails,
  AwsRedshiftClusterDetails,
  AwsS3AccountPublicAccessBlockDetails,
  AwsS3BucketDetails,
  AwsS3ObjectDetails,
  AwsSecretsManagerSecretDetails,
  Compliance,
  FindingProviderFields,
  Malware,
  NetworkDirection,
  PortRange,
  RelatedFinding,
  SeverityLabel,
} from "./models_0";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>The details of network-related information about a finding.</p>
 */
export interface Network {
  /**
   * <p>The direction of network traffic associated with a finding.</p>
   */
  Direction?: NetworkDirection | string;

  /**
   * <p>The protocol of network-related information about a finding.</p>
   */
  Protocol?: string;

  /**
   * <p>The range of open ports that is present on the network.</p>
   */
  OpenPortRange?: PortRange;

  /**
   * <p>The source IPv4 address of network-related information about a finding.</p>
   */
  SourceIpV4?: string;

  /**
   * <p>The source IPv6 address of network-related information about a finding.</p>
   */
  SourceIpV6?: string;

  /**
   * <p>The source port of network-related information about a finding.</p>
   */
  SourcePort?: number;

  /**
   * <p>The source domain of network-related information about a finding.</p>
   */
  SourceDomain?: string;

  /**
   * <p>The source media access control (MAC) address of network-related information about a
   *          finding.</p>
   */
  SourceMac?: string;

  /**
   * <p>The destination IPv4 address of network-related information about a finding.</p>
   */
  DestinationIpV4?: string;

  /**
   * <p>The destination IPv6 address of network-related information about a finding.</p>
   */
  DestinationIpV6?: string;

  /**
   * <p>The destination port of network-related information about a finding.</p>
   */
  DestinationPort?: number;

  /**
   * <p>The destination domain of network-related information about a finding.</p>
   */
  DestinationDomain?: string;
}

export namespace Network {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Network): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the destination of the next component in the network path.</p>
 */
export interface NetworkPathComponentDetails {
  /**
   * <p>The IP addresses of the destination.</p>
   */
  Address?: string[];

  /**
   * <p>A list of port ranges for the destination.</p>
   */
  PortRanges?: PortRange[];
}

export namespace NetworkPathComponentDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkPathComponentDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a network path component that occurs before or after the current
 *          component.</p>
 */
export interface NetworkHeader {
  /**
   * <p>The protocol used for the component.</p>
   */
  Protocol?: string;

  /**
   * <p>Information about the destination of the component.</p>
   */
  Destination?: NetworkPathComponentDetails;

  /**
   * <p>Information about the origin of the component.</p>
   */
  Source?: NetworkPathComponentDetails;
}

export namespace NetworkHeader {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkHeader): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a network path component.</p>
 */
export interface NetworkPathComponent {
  /**
   * <p>The identifier of a component in the network path.</p>
   */
  ComponentId?: string;

  /**
   * <p>The type of component.</p>
   */
  ComponentType?: string;

  /**
   * <p>Information about the component that comes after the current component in the network
   *          path.</p>
   */
  Egress?: NetworkHeader;

  /**
   * <p>Information about the component that comes before the current node in the network
   *          path.</p>
   */
  Ingress?: NetworkHeader;
}

export namespace NetworkPathComponent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkPathComponent): any => ({
    ...obj,
  });
}

/**
 * <p>A user-defined note added to a finding.</p>
 */
export interface Note {
  /**
   * <p>The text of a note.</p>
   */
  Text: string | undefined;

  /**
   * <p>The principal that created a note.</p>
   */
  UpdatedBy: string | undefined;

  /**
   * <p>The timestamp of when the note was updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdatedAt: string | undefined;
}

export namespace Note {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Note): any => ({
    ...obj,
  });
}

/**
 * <p>Provides an overview of the patch compliance status for an instance against a selected
 *          compliance standard.</p>
 */
export interface PatchSummary {
  /**
   * <p>The identifier of the compliance standard that was used to determine the patch
   *          compliance status.</p>
   */
  Id: string | undefined;

  /**
   * <p>The number of patches from the compliance standard that were installed
   *          successfully.</p>
   */
  InstalledCount?: number;

  /**
   * <p>The number of patches that are part of the compliance standard but are not installed.
   *          The count includes patches that failed to install.</p>
   */
  MissingCount?: number;

  /**
   * <p>The number of patches from the compliance standard that failed to install.</p>
   */
  FailedCount?: number;

  /**
   * <p>The number of installed patches that are not part of the compliance standard.</p>
   */
  InstalledOtherCount?: number;

  /**
   * <p>The number of patches that are installed but are also on a list of patches that the
   *          customer rejected.</p>
   */
  InstalledRejectedCount?: number;

  /**
   * <p>The number of patches that were applied, but that require the instance to be rebooted in
   *          order to be marked as installed.</p>
   */
  InstalledPendingReboot?: number;

  /**
   * <p>Indicates when the operation started.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  OperationStartTime?: string;

  /**
   * <p>Indicates when the operation completed.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  OperationEndTime?: string;

  /**
   * <p>The reboot option specified for the instance.</p>
   */
  RebootOption?: string;

  /**
   * <p>The type of patch operation performed. For Patch Manager, the values are
   *             <code>SCAN</code> and <code>INSTALL</code>. </p>
   */
  Operation?: string;
}

export namespace PatchSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PatchSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The details of process-related information about a finding.</p>
 */
export interface ProcessDetails {
  /**
   * <p>The name of the process.</p>
   */
  Name?: string;

  /**
   * <p>The path to the process executable.</p>
   */
  Path?: string;

  /**
   * <p>The process ID.</p>
   */
  Pid?: number;

  /**
   * <p>The parent process ID.</p>
   */
  ParentPid?: number;

  /**
   * <p>Indicates when the process was launched.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LaunchedAt?: string;

  /**
   * <p>Indicates when the process was terminated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  TerminatedAt?: string;
}

export namespace ProcessDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessDetails): any => ({
    ...obj,
  });
}

export enum RecordState {
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED",
}

/**
 * <p>A recommendation on how to remediate the issue identified in a finding.</p>
 */
export interface Recommendation {
  /**
   * <p>Describes the recommended steps to take to remediate an issue identified in a finding.</p>
   */
  Text?: string;

  /**
   * <p>A URL to a page or site that contains information about how to remediate a finding.</p>
   */
  Url?: string;
}

export namespace Recommendation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Recommendation): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the remediation steps for a finding.</p>
 */
export interface Remediation {
  /**
   * <p>A recommendation on the steps to take to remediate the issue identified by a finding.</p>
   */
  Recommendation?: Recommendation;
}

export namespace Remediation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Remediation): any => ({
    ...obj,
  });
}

/**
 * <p>An occurrence of sensitive data detected in a Microsoft Excel workbook, comma-separated value (CSV) file, or tab-separated value (TSV) file.</p>
 */
export interface Cell {
  /**
   * <p>The column number of the column that contains the data. For a Microsoft Excel workbook, the column number corresponds to the alphabetical column identifiers. For example, a value of 1 for Column corresponds to the A column in the workbook.</p>
   */
  Column?: number;

  /**
   * <p>The row number of the row that contains the data.</p>
   */
  Row?: number;

  /**
   * <p>The name of the column that contains the data.</p>
   */
  ColumnName?: string;

  /**
   * <p>For a Microsoft Excel workbook, provides the location of the cell, as an absolute cell reference, that contains the data. For example, Sheet2!C5 for cell C5 on Sheet2.</p>
   */
  CellReference?: string;
}

export namespace Cell {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Cell): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies where the sensitive data begins and ends.</p>
 */
export interface Range {
  /**
   * <p>The number of lines (for a line range) or characters (for an offset range) from the beginning of the file to the end of the sensitive data.</p>
   */
  Start?: number;

  /**
   * <p>The number of lines (for a line range) or characters (for an offset range) from the beginning of the file to the end of the sensitive data.</p>
   */
  End?: number;

  /**
   * <p>In the line where the sensitive data starts, the column within the line where the sensitive data starts.</p>
   */
  StartColumn?: number;
}

export namespace Range {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Range): any => ({
    ...obj,
  });
}

/**
 * <p>An occurrence of sensitive data in an Adobe Portable Document Format (PDF) file.</p>
 */
export interface Page {
  /**
   * <p>The page number of the page that contains the sensitive data.</p>
   */
  PageNumber?: number;

  /**
   * <p>An occurrence of sensitive data detected in a non-binary text file or a Microsoft Word file. Non-binary text files include files such as HTML, XML, JSON, and TXT files.</p>
   */
  LineRange?: Range;

  /**
   * <p>An occurrence of sensitive data detected in a binary text file.</p>
   */
  OffsetRange?: Range;
}

export namespace Page {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Page): any => ({
    ...obj,
  });
}

/**
 * <p>An occurrence of sensitive data in an Apache Avro object container or an Apache Parquet file.</p>
 */
export interface _Record {
  /**
   * <p>The path, as a JSONPath expression, to the field in the record that contains the data. If the field name is longer than 20 characters, it is truncated. If the path is longer than 250 characters, it is truncated.</p>
   */
  JsonPath?: string;

  /**
   * <p>The record index, starting from 0, for the record that contains the data.</p>
   */
  RecordIndex?: number;
}

export namespace _Record {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: _Record): any => ({
    ...obj,
  });
}

/**
 * <p>The detected occurrences of sensitive data.</p>
 */
export interface Occurrences {
  /**
   * <p>Occurrences of sensitive data detected in a non-binary text file or a Microsoft Word file. Non-binary text files include files such as HTML, XML, JSON, and TXT files.</p>
   */
  LineRanges?: Range[];

  /**
   * <p>Occurrences of sensitive data detected in a binary text file.</p>
   */
  OffsetRanges?: Range[];

  /**
   * <p>Occurrences of sensitive data in an Adobe Portable Document Format (PDF) file.</p>
   */
  Pages?: Page[];

  /**
   * <p>Occurrences of sensitive data in an Apache Avro object container or an Apache Parquet file.</p>
   */
  Records?: _Record[];

  /**
   * <p>Occurrences of sensitive data detected in Microsoft Excel workbooks, comma-separated value (CSV) files, or tab-separated value (TSV) files.</p>
   */
  Cells?: Cell[];
}

export namespace Occurrences {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Occurrences): any => ({
    ...obj,
  });
}

/**
 * <p>The list of detected instances of sensitive data.</p>
 */
export interface CustomDataIdentifiersDetections {
  /**
   * <p>The total number of occurrences of sensitive data that were detected.</p>
   */
  Count?: number;

  /**
   * <p>The ARN of the custom identifier that was used to detect the sensitive data.</p>
   */
  Arn?: string;

  /**
   * <p>he name of the custom identifier that detected the sensitive data.</p>
   */
  Name?: string;

  /**
   * <p>Details about the sensitive data that was detected.</p>
   */
  Occurrences?: Occurrences;
}

export namespace CustomDataIdentifiersDetections {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomDataIdentifiersDetections): any => ({
    ...obj,
  });
}

/**
 * <p>Contains an instance of sensitive data that was detected by a customer-defined identifier.</p>
 */
export interface CustomDataIdentifiersResult {
  /**
   * <p>The list of detected instances of sensitive data.</p>
   */
  Detections?: CustomDataIdentifiersDetections[];

  /**
   * <p>The total number of occurrences of sensitive data.</p>
   */
  TotalCount?: number;
}

export namespace CustomDataIdentifiersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomDataIdentifiersResult): any => ({
    ...obj,
  });
}

/**
 * <p>The list of detected instances of sensitive data.</p>
 */
export interface SensitiveDataDetections {
  /**
   * <p>The total number of occurrences of sensitive data that were detected.</p>
   */
  Count?: number;

  /**
   * <p>The type of sensitive data that was detected. For example, the type might indicate that the data is an email address.</p>
   */
  Type?: string;

  /**
   * <p>Details about the sensitive data that was detected.</p>
   */
  Occurrences?: Occurrences;
}

export namespace SensitiveDataDetections {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SensitiveDataDetections): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a detected instance of sensitive data that are based on built-in identifiers.</p>
 */
export interface SensitiveDataResult {
  /**
   * <p>The category of sensitive data that was detected. For example, the category can indicate that the sensitive data involved credentials, financial information, or personal information.</p>
   */
  Category?: string;

  /**
   * <p>The list of detected instances of sensitive data.</p>
   */
  Detections?: SensitiveDataDetections[];

  /**
   * <p>The total number of occurrences of sensitive data.</p>
   */
  TotalCount?: number;
}

export namespace SensitiveDataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SensitiveDataResult): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about the current status of the sensitive data detection.</p>
 */
export interface ClassificationStatus {
  /**
   * <p>The code that represents the status of the sensitive data detection.</p>
   */
  Code?: string;

  /**
   * <p>A longer description of the current status of the sensitive data detection.</p>
   */
  Reason?: string;
}

export namespace ClassificationStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassificationStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the sensitive data that was detected on the resource.</p>
 */
export interface ClassificationResult {
  /**
   * <p>The type of content that the finding applies to.</p>
   */
  MimeType?: string;

  /**
   * <p>The total size in bytes of the affected data.</p>
   */
  SizeClassified?: number;

  /**
   * <p>Indicates whether there are additional occurrences of sensitive data that are not included in the finding. This occurs when the number of occurrences exceeds the maximum that can be included.</p>
   */
  AdditionalOccurrences?: boolean;

  /**
   * <p>The current status of the sensitive data detection.</p>
   */
  Status?: ClassificationStatus;

  /**
   * <p>Provides details about sensitive data that was identified based on built-in configuration.</p>
   */
  SensitiveData?: SensitiveDataResult[];

  /**
   * <p>Provides details about sensitive data that was identified based on customer-defined configuration.</p>
   */
  CustomDataIdentifiers?: CustomDataIdentifiersResult;
}

export namespace ClassificationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassificationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about sensitive data that was detected on a resource.</p>
 */
export interface DataClassificationDetails {
  /**
   * <p>The path to the folder or file that contains the sensitive data.</p>
   */
  DetailedResultsLocation?: string;

  /**
   * <p>The details about the sensitive data that was detected on the resource.</p>
   */
  Result?: ClassificationResult;
}

export namespace DataClassificationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataClassificationDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A wrapper type for the attributes of an Amazon SNS subscription.</p>
 */
export interface AwsSnsTopicSubscription {
  /**
   * <p>The subscription's endpoint (format depends on the protocol).</p>
   */
  Endpoint?: string;

  /**
   * <p>The subscription's protocol.</p>
   */
  Protocol?: string;
}

export namespace AwsSnsTopicSubscription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSnsTopicSubscription): any => ({
    ...obj,
  });
}

/**
 * <p>A wrapper type for the topic's ARN.</p>
 */
export interface AwsSnsTopicDetails {
  /**
   * <p>The ID of an Amazon Web Services managed key for Amazon SNS or a customer managed key.</p>
   */
  KmsMasterKeyId?: string;

  /**
   * <p>Subscription is an embedded property that describes the subscription endpoints of an SNS topic.</p>
   */
  Subscription?: AwsSnsTopicSubscription[];

  /**
   * <p>The name of the topic.</p>
   */
  TopicName?: string;

  /**
   * <p>The subscription's owner.</p>
   */
  Owner?: string;
}

export namespace AwsSnsTopicDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSnsTopicDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Data about a queue.</p>
 */
export interface AwsSqsQueueDetails {
  /**
   * <p>The length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling KMS again.</p>
   */
  KmsDataKeyReusePeriodSeconds?: number;

  /**
   * <p>The ID of an Amazon Web Services managed key for Amazon SQS or a custom
   *          KMS key.</p>
   */
  KmsMasterKeyId?: string;

  /**
   * <p>The name of the new queue.</p>
   */
  QueueName?: string;

  /**
   * <p>The ARN of the dead-letter queue to which Amazon SQS moves
   *          messages after the value of <code>maxReceiveCount</code> is exceeded. </p>
   */
  DeadLetterTargetArn?: string;
}

export namespace AwsSqsQueueDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSqsQueueDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the details about the compliance status for a patch.</p>
 */
export interface AwsSsmComplianceSummary {
  /**
   * <p>The current patch compliance status.</p>
   *          <p>The possible status values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLIANT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_COMPLIANT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNSPECIFIED_DATA</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>CRITICAL</code>.</p>
   */
  CompliantCriticalCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *          <code>HIGH</code>.</p>
   */
  CompliantHighCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>MEDIUM</code>.</p>
   */
  CompliantMediumCount?: number;

  /**
   * <p>The type of execution that was used determine compliance.</p>
   */
  ExecutionType?: string;

  /**
   * <p>For the patch items that are noncompliant, the number of items that have a severity of
   *             <code>CRITICAL</code>.</p>
   */
  NonCompliantCriticalCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>INFORMATIONAL</code>.</p>
   */
  CompliantInformationalCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>INFORMATIONAL</code>.</p>
   */
  NonCompliantInformationalCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>UNSPECIFIED</code>.</p>
   */
  CompliantUnspecifiedCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>LOW</code>.</p>
   */
  NonCompliantLowCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>HIGH</code>.</p>
   */
  NonCompliantHighCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *          <code>LOW</code>.</p>
   */
  CompliantLowCount?: number;

  /**
   * <p>The type of resource for which the compliance was determined. For
   *             <code>AwsSsmPatchCompliance</code>, <code>ComplianceType</code> is <code>Patch</code>. </p>
   */
  ComplianceType?: string;

  /**
   * <p>The identifier of the patch baseline. The patch baseline lists the patches that are
   *          approved for installation.</p>
   */
  PatchBaselineId?: string;

  /**
   * <p>The highest severity for the patches.</p>
   */
  OverallSeverity?: string;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>MEDIUM</code>.</p>
   */
  NonCompliantMediumCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>UNSPECIFIED</code>.</p>
   */
  NonCompliantUnspecifiedCount?: number;

  /**
   * <p>The identifier of the patch group for which compliance was determined. A patch group
   *          uses tags to group EC2 instances that should have the same patch compliance.</p>
   */
  PatchGroup?: string;
}

export namespace AwsSsmComplianceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSsmComplianceSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about the compliance for a patch.</p>
 */
export interface AwsSsmPatch {
  /**
   * <p>The compliance status details for the patch.</p>
   */
  ComplianceSummary?: AwsSsmComplianceSummary;
}

export namespace AwsSsmPatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSsmPatch): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the state of a patch on an instance based on the patch
 *          baseline that was used to patch the instance.</p>
 */
export interface AwsSsmPatchComplianceDetails {
  /**
   * <p>Information about the status of a patch.</p>
   */
  Patch?: AwsSsmPatch;
}

export namespace AwsSsmPatchComplianceDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSsmPatchComplianceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the action that CloudFront or WAF takes when a web request matches the
 *          conditions in the rule. </p>
 */
export interface WafAction {
  /**
   * <p>Specifies how you want WAF to respond to requests that match the settings in a
   *          rule.</p>
   *          <p>Valid settings include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW</code> - WAF allows requests</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> - WAF blocks requests</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COUNT</code> - WAF increments a counter of the requests that match all
   *                of the conditions in the rule. WAF then continues to inspect the web request
   *                based on the remaining rules in the web ACL. You can't specify <code>COUNT</code> for
   *                the default action for a WebACL.</p>
   *             </li>
   *          </ul>
   */
  Type?: string;
}

export namespace WafAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WafAction): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a rule to exclude from a rule group.</p>
 */
export interface WafExcludedRule {
  /**
   * <p>The unique identifier for the rule to exclude from the rule group.</p>
   */
  RuleId?: string;
}

export namespace WafExcludedRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WafExcludedRule): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an override action for a rule.</p>
 */
export interface WafOverrideAction {
  /**
   * <p>
   *             <code>COUNT</code> overrides the action specified by the individual rule within a
   *             <code>RuleGroup</code> .</p>
   *          <p>If set to <code>NONE</code>, the rule's action takes place.</p>
   */
  Type?: string;
}

export namespace WafOverrideAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WafOverrideAction): any => ({
    ...obj,
  });
}

/**
 * <p>Details for a rule in an WAF WebACL.</p>
 */
export interface AwsWafWebAclRule {
  /**
   * <p>Specifies the action that CloudFront or WAF takes when a web request matches the
   *          conditions in the rule. </p>
   */
  Action?: WafAction;

  /**
   * <p>Rules to exclude from a rule group.</p>
   */
  ExcludedRules?: WafExcludedRule[];

  /**
   * <p>Use the <code>OverrideAction</code> to test your RuleGroup.</p>
   *          <p>Any rule in a RuleGroup can potentially block a request. If you set the
   *             <code>OverrideAction</code> to <code>None</code>, the RuleGroup blocks a request if any
   *          individual rule in the RuleGroup matches the request and is configured to block that
   *          request.</p>
   *          <p>However, if you first want to test the RuleGroup, set the <code>OverrideAction</code> to
   *             <code>Count</code>. The RuleGroup then overrides any block action specified by
   *          individual rules contained within the group. Instead of blocking matching requests, those
   *          requests are counted.</p>
   *          <p>
   *             <code>ActivatedRule</code>|<code>OverrideAction</code> applies only when updating or
   *          adding a RuleGroup to a WebACL. In this case you do not use
   *             <code>ActivatedRule</code>|<code>Action</code>. For all other update requests,
   *             <code>ActivatedRule</code>|<code>Action</code> is used instead of
   *             <code>ActivatedRule</code>|<code>OverrideAction</code>. </p>
   */
  OverrideAction?: WafOverrideAction;

  /**
   * <p>Specifies the order in which the rules in a WebACL are evaluated. Rules with a lower
   *          value for <code>Priority</code> are evaluated before rules with a higher value. The value
   *          must be a unique integer. If you add multiple rules to a WebACL, the values do not need to
   *          be consecutive.</p>
   */
  Priority?: number;

  /**
   * <p>The identifier for a rule.</p>
   */
  RuleId?: string;

  /**
   * <p>The rule type.</p>
   *          <p>Valid values: <code>REGULAR</code> | <code>RATE_BASED</code> | <code>GROUP</code>
   *          </p>
   *          <p>The default is <code>REGULAR</code>.</p>
   */
  Type?: string;
}

export namespace AwsWafWebAclRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafWebAclRule): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an WAF WebACL.</p>
 */
export interface AwsWafWebAclDetails {
  /**
   * <p>A friendly name or description of the WebACL. You can't change the name of a WebACL
   *          after you create it.</p>
   */
  Name?: string;

  /**
   * <p>The action to perform if none of the rules contained in the WebACL match.</p>
   */
  DefaultAction?: string;

  /**
   * <p>An array that contains the action for each rule in a WebACL, the priority of the rule,
   *          and the ID of the rule.</p>
   */
  Rules?: AwsWafWebAclRule[];

  /**
   * <p>A unique identifier for a WebACL.</p>
   */
  WebAclId?: string;
}

export namespace AwsWafWebAclDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafWebAclDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Container details related to a finding.</p>
 */
export interface ContainerDetails {
  /**
   * <p>The name of the container related to a finding.</p>
   */
  Name?: string;

  /**
   * <p>The identifier of the image related to a finding.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the image related to a finding.</p>
   */
  ImageName?: string;

  /**
   * <p>Indicates when the container started.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LaunchedAt?: string;
}

export namespace ContainerDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Additional details about a resource related to a finding.</p>
 *          <p>To provide the details, use the object that corresponds to the resource type. For
 *          example, if the resource type is <code>AwsEc2Instance</code>, then you use the
 *             <code>AwsEc2Instance</code> object to provide the details.</p>
 *          <p>If the type-specific object does not contain all of the fields you want to populate,
 *          then you use the <code>Other</code> object to populate those additional fields.</p>
 *          <p>You also use the <code>Other</code> object to populate the details when the selected
 *          type does not have a corresponding object.</p>
 */
export interface ResourceDetails {
  /**
   * <p>Details for an autoscaling group.</p>
   */
  AwsAutoScalingAutoScalingGroup?: AwsAutoScalingAutoScalingGroupDetails;

  /**
   * <p>Details for an CodeBuild project.</p>
   */
  AwsCodeBuildProject?: AwsCodeBuildProjectDetails;

  /**
   * <p>Details about a CloudFront distribution.</p>
   */
  AwsCloudFrontDistribution?: AwsCloudFrontDistributionDetails;

  /**
   * <p>Details about an EC2 instance related to a finding.</p>
   */
  AwsEc2Instance?: AwsEc2InstanceDetails;

  /**
   * <p>Details for an EC2 network interface.</p>
   */
  AwsEc2NetworkInterface?: AwsEc2NetworkInterfaceDetails;

  /**
   * <p>Details for an EC2 security group.</p>
   */
  AwsEc2SecurityGroup?: AwsEc2SecurityGroupDetails;

  /**
   * <p>Details for an EC2 volume.</p>
   */
  AwsEc2Volume?: AwsEc2VolumeDetails;

  /**
   * <p>Details for an EC2 VPC.</p>
   */
  AwsEc2Vpc?: AwsEc2VpcDetails;

  /**
   * <p>Details about an Elastic IP address.</p>
   */
  AwsEc2Eip?: AwsEc2EipDetails;

  /**
   * <p>Details about a subnet in Amazon EC2.</p>
   */
  AwsEc2Subnet?: AwsEc2SubnetDetails;

  /**
   * <p>Details about an EC2 network access control list (ACL).</p>
   */
  AwsEc2NetworkAcl?: AwsEc2NetworkAclDetails;

  /**
   * <p>Details about a load balancer.</p>
   */
  AwsElbv2LoadBalancer?: AwsElbv2LoadBalancerDetails;

  /**
   * <p>Details about an Elastic Beanstalk environment.</p>
   */
  AwsElasticBeanstalkEnvironment?: AwsElasticBeanstalkEnvironmentDetails;

  /**
   * <p>Details for an Elasticsearch domain.</p>
   */
  AwsElasticsearchDomain?: AwsElasticsearchDomainDetails;

  /**
   * <p>Details about an S3 bucket related to a finding.</p>
   */
  AwsS3Bucket?: AwsS3BucketDetails;

  /**
   * <p>Details about the Amazon S3 Public Access Block configuration for an account.</p>
   */
  AwsS3AccountPublicAccessBlock?: AwsS3AccountPublicAccessBlockDetails;

  /**
   * <p>Details about an S3 object related to a finding.</p>
   */
  AwsS3Object?: AwsS3ObjectDetails;

  /**
   * <p>Details about a Secrets Manager secret.</p>
   */
  AwsSecretsManagerSecret?: AwsSecretsManagerSecretDetails;

  /**
   * <p>Details about an IAM access key related to a finding.</p>
   */
  AwsIamAccessKey?: AwsIamAccessKeyDetails;

  /**
   * <p>Details about an IAM user.</p>
   */
  AwsIamUser?: AwsIamUserDetails;

  /**
   * <p>Details about an IAM permissions policy.</p>
   */
  AwsIamPolicy?: AwsIamPolicyDetails;

  /**
   * <p>Provides information about a version 2 stage for Amazon API Gateway.</p>
   */
  AwsApiGatewayV2Stage?: AwsApiGatewayV2StageDetails;

  /**
   * <p>Provides information about a version 2 API in Amazon API Gateway.</p>
   */
  AwsApiGatewayV2Api?: AwsApiGatewayV2ApiDetails;

  /**
   * <p>Details about a DynamoDB table.</p>
   */
  AwsDynamoDbTable?: AwsDynamoDbTableDetails;

  /**
   * <p>Provides information about a version 1 Amazon API Gateway stage.</p>
   */
  AwsApiGatewayStage?: AwsApiGatewayStageDetails;

  /**
   * <p>Provides information about a REST API in version 1 of Amazon API Gateway.</p>
   */
  AwsApiGatewayRestApi?: AwsApiGatewayRestApiDetails;

  /**
   * <p>Provides details about a CloudTrail trail.</p>
   */
  AwsCloudTrailTrail?: AwsCloudTrailTrailDetails;

  /**
   * <p>Provides information about the state of a patch on an instance based on the patch baseline that was used to patch the instance.</p>
   */
  AwsSsmPatchCompliance?: AwsSsmPatchComplianceDetails;

  /**
   * <p>Provides details about an Certificate Manager certificate.</p>
   */
  AwsCertificateManagerCertificate?: AwsCertificateManagerCertificateDetails;

  /**
   * <p>Contains details about an Amazon Redshift cluster.</p>
   */
  AwsRedshiftCluster?: AwsRedshiftClusterDetails;

  /**
   * <p>Contains details about a Classic Load Balancer.</p>
   */
  AwsElbLoadBalancer?: AwsElbLoadBalancerDetails;

  /**
   * <p>Contains details about an IAM group.</p>
   */
  AwsIamGroup?: AwsIamGroupDetails;

  /**
   * <p>Details about an IAM role.</p>
   */
  AwsIamRole?: AwsIamRoleDetails;

  /**
   * <p>Details about an KMS key.</p>
   */
  AwsKmsKey?: AwsKmsKeyDetails;

  /**
   * <p>Details about a Lambda function.</p>
   */
  AwsLambdaFunction?: AwsLambdaFunctionDetails;

  /**
   * <p>Details for a Lambda layer version.</p>
   */
  AwsLambdaLayerVersion?: AwsLambdaLayerVersionDetails;

  /**
   * <p>Details about an Amazon RDS database instance.</p>
   */
  AwsRdsDbInstance?: AwsRdsDbInstanceDetails;

  /**
   * <p>Details about an SNS topic.</p>
   */
  AwsSnsTopic?: AwsSnsTopicDetails;

  /**
   * <p>Details about an SQS queue.</p>
   */
  AwsSqsQueue?: AwsSqsQueueDetails;

  /**
   * <p>Details for an WAF WebACL.</p>
   */
  AwsWafWebAcl?: AwsWafWebAclDetails;

  /**
   * <p>Details about an Amazon RDS database snapshot.</p>
   */
  AwsRdsDbSnapshot?: AwsRdsDbSnapshotDetails;

  /**
   * <p>Details about an Amazon RDS database cluster snapshot.</p>
   */
  AwsRdsDbClusterSnapshot?: AwsRdsDbClusterSnapshotDetails;

  /**
   * <p>Details about an Amazon RDS database cluster.</p>
   */
  AwsRdsDbCluster?: AwsRdsDbClusterDetails;

  /**
   * <p>Details about an ECS cluster.</p>
   */
  AwsEcsCluster?: AwsEcsClusterDetails;

  /**
   * <p>Details about a task definition. A task definition describes the container and volume definitions of an Amazon Elastic Container Service task.</p>
   */
  AwsEcsTaskDefinition?: AwsEcsTaskDefinitionDetails;

  /**
   * <p>Details about a container resource related to a finding.</p>
   */
  Container?: ContainerDetails;

  /**
   * <p>Details about a resource that are not available in a type-specific details object. Use
   *          the <code>Other</code> object in the following cases.</p>
   *          <ul>
   *             <li>
   *                <p>The type-specific object does not contain all of the fields that you want to
   *                populate. In this case, first use the type-specific object to populate those fields.
   *                Use the <code>Other</code> object to populate the fields that are missing from the
   *                type-specific object.</p>
   *             </li>
   *             <li>
   *                <p>The resource type does not have a corresponding object. This includes resources
   *                for which the type is <code>Other</code>. </p>
   *             </li>
   *          </ul>
   */
  Other?: { [key: string]: string };

  /**
   * <p>Details about an RDS event notification subscription.</p>
   */
  AwsRdsEventSubscription?: AwsRdsEventSubscriptionDetails;

  /**
   * <p>Details about a service within an ECS cluster.</p>
   */
  AwsEcsService?: AwsEcsServiceDetails;

  /**
   * <p>Provides details about a launch configuration.</p>
   */
  AwsAutoScalingLaunchConfiguration?: AwsAutoScalingLaunchConfigurationDetails;

  /**
   * <p>Details about an EC2 VPN connection.</p>
   */
  AwsEc2VpnConnection?: AwsEc2VpnConnectionDetails;

  /**
   * <p>information about an Amazon ECR image.</p>
   */
  AwsEcrContainerImage?: AwsEcrContainerImageDetails;
}

export namespace ResourceDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDetails): any => ({
    ...obj,
  });
}

export enum Partition {
  AWS = "aws",
  AWS_CN = "aws-cn",
  AWS_US_GOV = "aws-us-gov",
}

/**
 * <p>A resource related to a finding.</p>
 */
export interface Resource {
  /**
   * <p>The type of the resource that details are provided for. If possible, set
   *             <code>Type</code> to one of the supported resource types. For example, if the resource
   *          is an EC2 instance, then set <code>Type</code> to <code>AwsEc2Instance</code>.</p>
   *          <p>If the resource does not match any of the provided types, then set <code>Type</code> to
   *             <code>Other</code>. </p>
   */
  Type: string | undefined;

  /**
   * <p>The canonical identifier for the given resource type.</p>
   */
  Id: string | undefined;

  /**
   * <p>The canonical Amazon Web Services partition name that the Region is assigned to.</p>
   */
  Partition?: Partition | string;

  /**
   * <p>The canonical Amazon Web Services external Region name where this resource is located.</p>
   */
  Region?: string;

  /**
   * <p>Identifies the role of the resource in the finding. A resource is either the actor or target of the finding activity,</p>
   */
  ResourceRole?: string;

  /**
   * <p>A list of Amazon Web Services tags associated with a resource at the time the finding was
   *          processed.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>Contains information about sensitive data that was detected on the resource.</p>
   */
  DataClassification?: DataClassificationDetails;

  /**
   * <p>Additional details about the resource related to a finding.</p>
   */
  Details?: ResourceDetails;
}

export namespace Resource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
}

/**
 * <p>The severity of the finding.</p>
 *          <p>The finding provider can provide the initial severity. The finding provider can only
 *          update the severity if it has not been updated using
 *          <code>BatchUpdateFindings</code>.</p>
 *          <p>The finding must have either <code>Label</code> or <code>Normalized</code> populated. If
 *          only one of these attributes is populated, then Security Hub automatically populates the other
 *          one. If neither attribute is populated, then the finding is invalid. <code>Label</code> is
 *          the preferred attribute.</p>
 */
export interface Severity {
  /**
   * <p>Deprecated. This attribute is being deprecated. Instead of providing
   *             <code>Product</code>, provide <code>Original</code>.</p>
   *          <p>The native severity as defined by the Amazon Web Services service or integrated partner product that
   *          generated the finding.</p>
   */
  Product?: number;

  /**
   * <p>The severity value of the finding. The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code> - No issue was found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code> - The issue does not require action on its own.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code> - The issue must be addressed but not urgently.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code> - The issue must be addressed as a priority.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code> - The issue must be remediated immediately to avoid it
   *                escalating.</p>
   *             </li>
   *          </ul>
   *          <p>If you provide <code>Normalized</code> and do not provide <code>Label</code>, then
   *             <code>Label</code> is set automatically as follows. </p>
   *          <ul>
   *             <li>
   *                <p>0 - <code>INFORMATIONAL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>1–39 - <code>LOW</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>40–69 - <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>70–89 - <code>HIGH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>90–100 - <code>CRITICAL</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Label?: SeverityLabel | string;

  /**
   * <p>Deprecated. The normalized severity of a finding. This attribute is being deprecated.
   *          Instead of providing <code>Normalized</code>, provide <code>Label</code>.</p>
   *          <p>If you provide <code>Label</code> and do not provide <code>Normalized</code>, then
   *             <code>Normalized</code> is set automatically as follows.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code> - 0</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code> - 1</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code> - 40</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code> - 70</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code> - 90</p>
   *             </li>
   *          </ul>
   */
  Normalized?: number;

  /**
   * <p>The native severity from the finding product that generated the finding.</p>
   */
  Original?: string;
}

export namespace Severity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Severity): any => ({
    ...obj,
  });
}

export enum ThreatIntelIndicatorCategory {
  BACKDOOR = "BACKDOOR",
  CARD_STEALER = "CARD_STEALER",
  COMMAND_AND_CONTROL = "COMMAND_AND_CONTROL",
  DROP_SITE = "DROP_SITE",
  EXPLOIT_SITE = "EXPLOIT_SITE",
  KEYLOGGER = "KEYLOGGER",
}

export enum ThreatIntelIndicatorType {
  DOMAIN = "DOMAIN",
  EMAIL_ADDRESS = "EMAIL_ADDRESS",
  HASH_MD5 = "HASH_MD5",
  HASH_SHA1 = "HASH_SHA1",
  HASH_SHA256 = "HASH_SHA256",
  HASH_SHA512 = "HASH_SHA512",
  IPV4_ADDRESS = "IPV4_ADDRESS",
  IPV6_ADDRESS = "IPV6_ADDRESS",
  MUTEX = "MUTEX",
  PROCESS = "PROCESS",
  URL = "URL",
}

/**
 * <p>Details about the threat intelligence related to a finding.</p>
 */
export interface ThreatIntelIndicator {
  /**
   * <p>The type of threat intelligence indicator.</p>
   */
  Type?: ThreatIntelIndicatorType | string;

  /**
   * <p>The value of a threat intelligence indicator.</p>
   */
  Value?: string;

  /**
   * <p>The category of a threat intelligence indicator.</p>
   */
  Category?: ThreatIntelIndicatorCategory | string;

  /**
   * <p>Indicates when the most recent instance of a threat intelligence indicator was
   *          observed.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastObservedAt?: string;

  /**
   * <p>The source of the threat intelligence indicator.</p>
   */
  Source?: string;

  /**
   * <p>The URL to the page or site where you can get more information about the threat
   *          intelligence indicator.</p>
   */
  SourceUrl?: string;
}

export namespace ThreatIntelIndicator {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThreatIntelIndicator): any => ({
    ...obj,
  });
}

export enum VerificationState {
  BENIGN_POSITIVE = "BENIGN_POSITIVE",
  FALSE_POSITIVE = "FALSE_POSITIVE",
  TRUE_POSITIVE = "TRUE_POSITIVE",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>CVSS scores from the advisory related to the vulnerability.</p>
 */
export interface Cvss {
  /**
   * <p>The version of CVSS for the CVSS score.</p>
   */
  Version?: string;

  /**
   * <p>The base CVSS score.</p>
   */
  BaseScore?: number;

  /**
   * <p>The base scoring vector for the CVSS score.</p>
   */
  BaseVector?: string;

  /**
   * <p>The origin of the original CVSS score and vector.</p>
   */
  Source?: string;

  /**
   * <p>Adjustments to the CVSS metrics.</p>
   */
  Adjustments?: Adjustment[];
}

export namespace Cvss {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Cvss): any => ({
    ...obj,
  });
}

/**
 * <p>A vendor that generates a vulnerability report.</p>
 */
export interface VulnerabilityVendor {
  /**
   * <p>The name of the vendor.</p>
   */
  Name: string | undefined;

  /**
   * <p>The URL of the vulnerability advisory.</p>
   */
  Url?: string;

  /**
   * <p>The severity that the vendor assigned to the vulnerability.</p>
   */
  VendorSeverity?: string;

  /**
   * <p>Indicates when the vulnerability advisory was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  VendorCreatedAt?: string;

  /**
   * <p>Indicates when the vulnerability advisory was last updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  VendorUpdatedAt?: string;
}

export namespace VulnerabilityVendor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VulnerabilityVendor): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a software package.</p>
 */
export interface SoftwarePackage {
  /**
   * <p>The name of the software package.</p>
   */
  Name?: string;

  /**
   * <p>The version of the software package.</p>
   */
  Version?: string;

  /**
   * <p>The epoch of the software package.</p>
   */
  Epoch?: string;

  /**
   * <p>The release of the software package.</p>
   */
  Release?: string;

  /**
   * <p>The architecture used for the software package.</p>
   */
  Architecture?: string;

  /**
   * <p>The source of the package.</p>
   */
  PackageManager?: string;

  /**
   * <p>The file system path to the package manager inventory file.</p>
   */
  FilePath?: string;
}

export namespace SoftwarePackage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SoftwarePackage): any => ({
    ...obj,
  });
}

/**
 * <p>A vulnerability associated with a finding.</p>
 */
export interface Vulnerability {
  /**
   * <p>The identifier of the vulnerability.</p>
   */
  Id: string | undefined;

  /**
   * <p>List of software packages that have the vulnerability.</p>
   */
  VulnerablePackages?: SoftwarePackage[];

  /**
   * <p>CVSS scores from the advisory related to the vulnerability.</p>
   */
  Cvss?: Cvss[];

  /**
   * <p>List of vulnerabilities that are related to this vulnerability.</p>
   */
  RelatedVulnerabilities?: string[];

  /**
   * <p>Information about the vendor that generates the vulnerability report.</p>
   */
  Vendor?: VulnerabilityVendor;

  /**
   * <p>A list of URLs that provide additional information about the vulnerability.</p>
   */
  ReferenceUrls?: string[];
}

export namespace Vulnerability {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Vulnerability): any => ({
    ...obj,
  });
}

export enum WorkflowStatus {
  NEW = "NEW",
  NOTIFIED = "NOTIFIED",
  RESOLVED = "RESOLVED",
  SUPPRESSED = "SUPPRESSED",
}

/**
 * <p>Provides information about the status of the investigation into a finding.</p>
 */
export interface Workflow {
  /**
   * <p>The status of the investigation into the finding. The workflow status is specific to an individual finding. It does not affect the generation of new findings. For example, setting the workflow status to <code>SUPPRESSED</code> or <code>RESOLVED</code> does not prevent a new finding for the same issue.</p>
   *          <p>The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - The initial state of a finding, before it is reviewed.</p>
   *                <p>Security Hub also resets the workflow status from <code>NOTIFIED</code> or
   *                   <code>RESOLVED</code> to <code>NEW</code> in the following cases:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RecordState</code> changes from <code>ARCHIVED</code> to
   *                         <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ComplianceStatus</code> changes from <code>PASSED</code> to either
   *                         <code>WARNING</code>, <code>FAILED</code>, or
   *                      <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFIED</code> - Indicates that you notified the resource owner about the
   *                security issue. Used when the initial reviewer is not the resource owner, and needs
   *                intervention from the resource owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPPRESSED</code> - Indicates that you reviewed the finding and do not believe that any action is needed. The finding is no longer updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved. </p>
   *             </li>
   *          </ul>
   */
  Status?: WorkflowStatus | string;
}

export namespace Workflow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Workflow): any => ({
    ...obj,
  });
}

export enum WorkflowState {
  ASSIGNED = "ASSIGNED",
  DEFERRED = "DEFERRED",
  IN_PROGRESS = "IN_PROGRESS",
  NEW = "NEW",
  RESOLVED = "RESOLVED",
}

/**
 * <p>Provides consistent format for the contents of the Security Hub-aggregated findings.
 *          <code>AwsSecurityFinding</code> format enables you to share findings between Amazon Web Services
 *          security services and third-party solutions, and security standards checks.</p>
 *          <note>
 *             <p>A finding is a potential security issue generated either by Amazon Web Services services or by the integrated third-party
 *             solutions and standards checks.</p>
 *          </note>
 */
export interface AwsSecurityFinding {
  /**
   * <p>The schema version that a finding is formatted for.</p>
   */
  SchemaVersion: string | undefined;

  /**
   * <p>The security findings provider-specific identifier for a finding.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a product that generates findings.
   *          This can be the ARN for a third-party product that is integrated with Security Hub, or the ARN for
   *          a custom integration.</p>
   */
  ProductArn: string | undefined;

  /**
   * <p>The name of the product that generated the finding.</p>
   *          <p>Security Hub populates this attribute automatically for each finding. You cannot update it using <code>BatchImportFindings</code> or <code>BatchUpdateFindings</code>. The exception to this is when you use a custom integration.</p>
   *          <p>When you use the Security Hub console to filter findings by product name, you use this attribute.</p>
   *          <p>When you use the Security Hub API to filter findings by product name, you use the <code>aws/securityhub/ProductName</code> attribute under <code>ProductFields</code>.</p>
   *          <p>Security Hub does not synchronize those two attributes.</p>
   */
  ProductName?: string;

  /**
   * <p>The name of the company for the product that generated the finding.</p>
   *          <p>Security Hub populates this attribute automatically for each finding. You cannot be updated using <code>BatchImportFindings</code> or <code>BatchUpdateFindings</code>. The exception to this is when you use a custom integration.</p>
   *          <p>When you use the Security Hub console to filter findings by company name, you use this attribute.</p>
   *          <p>When you use the Security Hub API to filter findings by company name, you use the <code>aws/securityhub/CompanyName</code> attribute under <code>ProductFields</code>.</p>
   *          <p>Security Hub does not synchronize those two attributes.</p>
   */
  CompanyName?: string;

  /**
   * <p>The Region from which the finding was generated.</p>
   *          <p>Security Hub populates this attribute automatically for each finding. You cannot update it using <code>BatchImportFindings</code> or <code>BatchUpdateFindings</code>.</p>
   */
  Region?: string;

  /**
   * <p>The identifier for the solution-specific component (a discrete unit of logic) that
   *          generated a finding. In various security-findings providers' solutions, this generator can
   *          be called a rule, a check, a detector, a plugin, etc. </p>
   */
  GeneratorId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that a finding is generated in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>One or more finding types in the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   */
  Types?: string[];

  /**
   * <p>Indicates when the security-findings provider first observed the potential security
   *          issue that a finding captured.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  FirstObservedAt?: string;

  /**
   * <p>Indicates when the security-findings provider most recently observed the potential
   *          security issue that a finding captured.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastObservedAt?: string;

  /**
   * <p>Indicates when the security-findings provider created the potential security issue that
   *          a finding captured.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedAt: string | undefined;

  /**
   * <p>Indicates when the security-findings provider last updated the finding record.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdatedAt: string | undefined;

  /**
   * <p>A finding's severity.</p>
   */
  Severity?: Severity;

  /**
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: number;

  /**
   * <p>The level of importance assigned to the resources associated with the finding.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources.</p>
   */
  Criticality?: number;

  /**
   * <p>A finding's title.</p>
   *          <note>
   *             <p>In this release, <code>Title</code> is a required property.</p>
   *          </note>
   */
  Title: string | undefined;

  /**
   * <p>A finding's description.</p>
   *          <note>
   *             <p>In this release, <code>Description</code> is a required property.</p>
   *          </note>
   */
  Description: string | undefined;

  /**
   * <p>A data type that describes the remediation options for a finding.</p>
   */
  Remediation?: Remediation;

  /**
   * <p>A URL that links to a page about the current finding in the security-findings provider's
   *          solution.</p>
   */
  SourceUrl?: string;

  /**
   * <p>A data type where security-findings providers can include additional solution-specific
   *          details that aren't part of the defined <code>AwsSecurityFinding</code> format.</p>
   *          <p>Can contain up to 50 key-value pairs. For each key-value pair, the key can contain up to 128 characters, and the value can contain up to 2048 characters.</p>
   */
  ProductFields?: { [key: string]: string };

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding. </p>
   */
  UserDefinedFields?: { [key: string]: string };

  /**
   * <p>A list of malware related to a finding.</p>
   */
  Malware?: Malware[];

  /**
   * <p>The details of network-related information about a finding.</p>
   */
  Network?: Network;

  /**
   * <p>Provides information about a network path that is relevant to a finding. Each entry
   *          under <code>NetworkPath</code> represents a component of that path.</p>
   */
  NetworkPath?: NetworkPathComponent[];

  /**
   * <p>The details of process-related information about a finding.</p>
   */
  Process?: ProcessDetails;

  /**
   * <p>Threat intelligence details related to a finding.</p>
   */
  ThreatIntelIndicators?: ThreatIntelIndicator[];

  /**
   * <p>A set of resource data types that describe the resources that the finding refers
   *          to.</p>
   */
  Resources: Resource[] | undefined;

  /**
   * <p>This data type is exclusive to findings that are generated as the result of a check run
   *          against a specific rule in a supported security standard, such as CIS Amazon Web Services Foundations.
   *          Contains security standard-related finding details.</p>
   */
  Compliance?: Compliance;

  /**
   * <p>Indicates the veracity of a finding. </p>
   */
  VerificationState?: VerificationState | string;

  /**
   * @deprecated
   *
   * <p>The workflow state of a finding. </p>
   */
  WorkflowState?: WorkflowState | string;

  /**
   * <p>Provides information about the status of the investigation into a finding.</p>
   */
  Workflow?: Workflow;

  /**
   * <p>The record state of a finding.</p>
   */
  RecordState?: RecordState | string;

  /**
   * <p>A list of related findings.</p>
   */
  RelatedFindings?: RelatedFinding[];

  /**
   * <p>A user-defined note added to a finding.</p>
   */
  Note?: Note;

  /**
   * <p>Provides a list of vulnerabilities associated with the findings.</p>
   */
  Vulnerabilities?: Vulnerability[];

  /**
   * <p>Provides an overview of the patch compliance status for an instance against a selected
   *          compliance standard.</p>
   */
  PatchSummary?: PatchSummary;

  /**
   * <p>Provides details about an action that affects or that was taken on a resource.</p>
   */
  Action?: Action;

  /**
   * <p>In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update their own values for confidence, criticality, related findings, severity, and types.</p>
   */
  FindingProviderFields?: FindingProviderFields;
}

export namespace AwsSecurityFinding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSecurityFinding): any => ({
    ...obj,
  });
}

export enum StringFilterComparison {
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
  PREFIX = "PREFIX",
  PREFIX_NOT_EQUALS = "PREFIX_NOT_EQUALS",
}

/**
 * <p>A string filter for querying findings.</p>
 */
export interface StringFilter {
  /**
   * <p>The string filter value. Filter values are case sensitive. For example, the product name
   *          for control-based findings is <code>Security Hub</code>. If you provide <code>security hub</code>
   *          as the filter text, then there is no match.</p>
   */
  Value?: string;

  /**
   * <p>The condition to apply to a string value when querying for findings. To search for
   *          values that contain the filter criteria value, use one of the following comparison
   *          operators:</p>
   *          <ul>
   *             <li>
   *                <p>To search for values that exactly match the filter value, use
   *                <code>EQUALS</code>.</p>
   *                <p>For example, the filter <code>ResourceType EQUALS AwsEc2SecurityGroup</code> only
   *                matches findings that have a resource type of
   *                <code>AwsEc2SecurityGroup</code>.</p>
   *             </li>
   *             <li>
   *                <p>To search for values that start with the filter value, use
   *                <code>PREFIX</code>.</p>
   *                <p>For example, the filter <code>ResourceType PREFIX AwsIam</code> matches findings
   *                that have a resource type that starts with <code>AwsIam</code>. Findings with a
   *                resource type of <code>AwsIamPolicy</code>, <code>AwsIamRole</code>, or
   *                   <code>AwsIamUser</code> would all match.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>EQUALS</code> and <code>PREFIX</code> filters on the same field are joined by
   *             <code>OR</code>. A finding matches if it matches any one of those filters.</p>
   *          <p>To search for values that do not contain the filter criteria value, use one of the
   *          following comparison operators:</p>
   *          <ul>
   *             <li>
   *                <p>To search for values that do not exactly match the filter value, use
   *                   <code>NOT_EQUALS</code>.</p>
   *                <p>For example, the filter <code>ResourceType NOT_EQUALS AwsIamPolicy</code> matches
   *                findings that have a resource type other than <code>AwsIamPolicy</code>.</p>
   *             </li>
   *             <li>
   *                <p>To search for values that do not start with the filter value, use
   *                   <code>PREFIX_NOT_EQUALS</code>.</p>
   *                <p>For example, the filter <code>ResourceType PREFIX_NOT_EQUALS AwsIam</code> matches
   *                findings that have a resource type that does not start with <code>AwsIam</code>.
   *                Findings with a resource type of <code>AwsIamPolicy</code>, <code>AwsIamRole</code>,
   *                or <code>AwsIamUser</code> would all be excluded from the results.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>NOT_EQUALS</code> and <code>PREFIX_NOT_EQUALS</code> filters on the same field are
   *          joined by <code>AND</code>. A finding matches only if it matches all of those
   *          filters.</p>
   *          <p>For filters on the same field, you cannot provide both an <code>EQUALS</code> filter and
   *          a <code>NOT_EQUALS</code> or <code>PREFIX_NOT_EQUALS</code> filter. Combining filters in
   *          this way always returns an error, even if the provided filter values would return valid
   *          results.</p>
   *          <p>You can combine <code>PREFIX</code> filters with <code>NOT_EQUALS</code> or
   *          <code>PREFIX_NOT_EQUALS</code> filters for the same field. Security Hub first processes the
   *             <code>PREFIX</code> filters, then the <code>NOT_EQUALS</code> or
   *             <code>PREFIX_NOT_EQUALS</code> filters.</p>
   *          <p> For example, for the following filter, Security Hub first identifies findings that have
   *          resource types that start with either <code>AwsIAM</code> or <code>AwsEc2</code>. It then
   *          excludes findings that have a resource type of <code>AwsIamPolicy</code> and findings that
   *          have a resource type of <code>AwsEc2NetworkInterface</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ResourceType PREFIX AwsIam</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType PREFIX AwsEc2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType NOT_EQUALS AwsIamPolicy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType NOT_EQUALS AwsEc2NetworkInterface</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Comparison?: StringFilterComparison | string;
}

export namespace StringFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StringFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A number filter for querying findings.</p>
 */
export interface NumberFilter {
  /**
   * <p>The greater-than-equal condition to be applied to a single field when querying for
   *          findings. </p>
   */
  Gte?: number;

  /**
   * <p>The less-than-equal condition to be applied to a single field when querying for
   *          findings. </p>
   */
  Lte?: number;

  /**
   * <p>The equal-to condition to be applied to a single field when querying for
   *          findings.</p>
   */
  Eq?: number;
}

export namespace NumberFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NumberFilter): any => ({
    ...obj,
  });
}

export enum DateRangeUnit {
  DAYS = "DAYS",
}

/**
 * <p>A date range for the date filter.</p>
 */
export interface DateRange {
  /**
   * <p>A date range value for the date filter.</p>
   */
  Value?: number;

  /**
   * <p>A date range unit for the date filter.</p>
   */
  Unit?: DateRangeUnit | string;
}

export namespace DateRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DateRange): any => ({
    ...obj,
  });
}

/**
 * <p>A date filter for querying findings.</p>
 */
export interface DateFilter {
  /**
   * <p>A start date for the date filter.</p>
   */
  Start?: string;

  /**
   * <p>An end date for the date filter.</p>
   */
  End?: string;

  /**
   * <p>A date range for the date filter.</p>
   */
  DateRange?: DateRange;
}

export namespace DateFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DateFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A keyword filter for querying findings.</p>
 */
export interface KeywordFilter {
  /**
   * <p>A value for the keyword.</p>
   */
  Value?: string;
}

export namespace KeywordFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeywordFilter): any => ({
    ...obj,
  });
}

/**
 * <p>The IP filter for querying findings.</p>
 */
export interface IpFilter {
  /**
   * <p>A finding's CIDR value.</p>
   */
  Cidr?: string;
}

export namespace IpFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpFilter): any => ({
    ...obj,
  });
}

export enum MapFilterComparison {
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
}

/**
 * <p>A map filter for querying findings. Each map filter provides the field to check, the
 *          value to look for, and the comparison operator.</p>
 */
export interface MapFilter {
  /**
   * <p>The key of the map filter. For example, for <code>ResourceTags</code>, <code>Key</code>
   *          identifies the name of the tag. For <code>UserDefinedFields</code>, <code>Key</code> is the
   *          name of the field.</p>
   */
  Key?: string;

  /**
   * <p>The value for the key in the map filter. Filter values are case sensitive. For example,
   *          one of the values for a tag called <code>Department</code> might be <code>Security</code>.
   *          If you provide <code>security</code> as the filter value, then there is no match.</p>
   */
  Value?: string;

  /**
   * <p>The condition to apply to the key value when querying for findings with a map
   *          filter.</p>
   *          <p>To search for values that exactly match the filter value, use <code>EQUALS</code>. For
   *          example, for the <code>ResourceTags</code> field, the filter <code>Department EQUALS
   *             Security</code> matches findings that have the value <code>Security</code> for the tag
   *             <code>Department</code>.</p>
   *          <p>To search for values other than the filter value, use <code>NOT_EQUALS</code>. For
   *          example, for the <code>ResourceTags</code> field, the filter <code>Department NOT_EQUALS
   *             Finance</code> matches findings that do not have the value <code>Finance</code> for the
   *          tag <code>Department</code>.</p>
   *          <p>
   *             <code>EQUALS</code> filters on the same field are joined by <code>OR</code>. A finding
   *          matches if it matches any one of those filters.</p>
   *          <p>
   *             <code>NOT_EQUALS</code> filters on the same field are joined by <code>AND</code>. A
   *          finding matches only if it matches all of those filters.</p>
   *          <p>You cannot have both an <code>EQUALS</code> filter and a <code>NOT_EQUALS</code> filter
   *          on the same field.</p>
   */
  Comparison?: MapFilterComparison | string;
}

export namespace MapFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MapFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and
 *          that result in a subset of findings that are included in this insight.</p>
 *          <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to
 *          20 filter values.</p>
 */
export interface AwsSecurityFindingFilters {
  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a third-party company
   *          (security findings provider) after this provider's product (solution that generates
   *          findings) is registered with Security Hub.</p>
   */
  ProductArn?: StringFilter[];

  /**
   * <p>The Amazon Web Services account ID that a finding is generated in.</p>
   */
  AwsAccountId?: StringFilter[];

  /**
   * <p>The security findings provider-specific identifier for a finding.</p>
   */
  Id?: StringFilter[];

  /**
   * <p>The identifier for the solution-specific component (a discrete unit of logic) that
   *          generated a finding. In various security-findings providers' solutions, this generator can
   *          be called a rule, a check, a detector, a plugin, etc.</p>
   */
  GeneratorId?: StringFilter[];

  /**
   * <p>The Region from which the finding was generated.</p>
   */
  Region?: StringFilter[];

  /**
   * <p>A finding type in the format of <code>namespace/category/classifier</code> that
   *          classifies a finding.</p>
   */
  Type?: StringFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider first
   *          observed the potential security issue that a finding captured.</p>
   */
  FirstObservedAt?: DateFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider most
   *          recently observed the potential security issue that a finding captured.</p>
   */
  LastObservedAt?: DateFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider
   *          captured the potential security issue that a finding captured.</p>
   */
  CreatedAt?: DateFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider last
   *          updated the finding record. </p>
   */
  UpdatedAt?: DateFilter[];

  /**
   * @deprecated
   *
   * <p>The native severity as defined by the security-findings provider's solution that
   *          generated the finding.</p>
   */
  SeverityProduct?: NumberFilter[];

  /**
   * @deprecated
   *
   * <p>The normalized severity of a finding.</p>
   */
  SeverityNormalized?: NumberFilter[];

  /**
   * <p>The label of a finding's severity.</p>
   */
  SeverityLabel?: StringFilter[];

  /**
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: NumberFilter[];

  /**
   * <p>The level of importance assigned to the resources associated with the finding.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources.</p>
   */
  Criticality?: NumberFilter[];

  /**
   * <p>A finding's title.</p>
   */
  Title?: StringFilter[];

  /**
   * <p>A finding's description.</p>
   */
  Description?: StringFilter[];

  /**
   * <p>The recommendation of what to do about the issue described in a finding.</p>
   */
  RecommendationText?: StringFilter[];

  /**
   * <p>A URL that links to a page about the current finding in the security-findings provider's
   *          solution.</p>
   */
  SourceUrl?: StringFilter[];

  /**
   * <p>A data type where security-findings providers can include additional solution-specific
   *          details that aren't part of the defined <code>AwsSecurityFinding</code> format.</p>
   */
  ProductFields?: MapFilter[];

  /**
   * <p>The name of the solution (product) that generates findings.</p>
   *          <p>Note that this is a filter against the <code>aws/securityhub/ProductName</code> field in <code>ProductFields</code>. It is not a filter for the top-level <code>ProductName</code> field.</p>
   */
  ProductName?: StringFilter[];

  /**
   * <p>The name of the findings provider (company) that owns the solution (product) that
   *          generates findings.</p>
   *          <p>Note that this is a filter against the <code>aws/securityhub/CompanyName</code> field in <code>ProductFields</code>. It is not a filter for the top-level <code>CompanyName</code> field.</p>
   */
  CompanyName?: StringFilter[];

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding. </p>
   */
  UserDefinedFields?: MapFilter[];

  /**
   * <p>The name of the malware that was observed.</p>
   */
  MalwareName?: StringFilter[];

  /**
   * <p>The type of the malware that was observed.</p>
   */
  MalwareType?: StringFilter[];

  /**
   * <p>The filesystem path of the malware that was observed.</p>
   */
  MalwarePath?: StringFilter[];

  /**
   * <p>The state of the malware that was observed.</p>
   */
  MalwareState?: StringFilter[];

  /**
   * <p>Indicates the direction of network traffic associated with a finding.</p>
   */
  NetworkDirection?: StringFilter[];

  /**
   * <p>The protocol of network-related information about a finding.</p>
   */
  NetworkProtocol?: StringFilter[];

  /**
   * <p>The source IPv4 address of network-related information about a finding.</p>
   */
  NetworkSourceIpV4?: IpFilter[];

  /**
   * <p>The source IPv6 address of network-related information about a finding.</p>
   */
  NetworkSourceIpV6?: IpFilter[];

  /**
   * <p>The source port of network-related information about a finding.</p>
   */
  NetworkSourcePort?: NumberFilter[];

  /**
   * <p>The source domain of network-related information about a finding.</p>
   */
  NetworkSourceDomain?: StringFilter[];

  /**
   * <p>The source media access control (MAC) address of network-related information about a
   *          finding.</p>
   */
  NetworkSourceMac?: StringFilter[];

  /**
   * <p>The destination IPv4 address of network-related information about a finding.</p>
   */
  NetworkDestinationIpV4?: IpFilter[];

  /**
   * <p>The destination IPv6 address of network-related information about a finding.</p>
   */
  NetworkDestinationIpV6?: IpFilter[];

  /**
   * <p>The destination port of network-related information about a finding.</p>
   */
  NetworkDestinationPort?: NumberFilter[];

  /**
   * <p>The destination domain of network-related information about a finding.</p>
   */
  NetworkDestinationDomain?: StringFilter[];

  /**
   * <p>The name of the process.</p>
   */
  ProcessName?: StringFilter[];

  /**
   * <p>The path to the process executable.</p>
   */
  ProcessPath?: StringFilter[];

  /**
   * <p>The process ID.</p>
   */
  ProcessPid?: NumberFilter[];

  /**
   * <p>The parent process ID.</p>
   */
  ProcessParentPid?: NumberFilter[];

  /**
   * <p>The date/time that the process was launched.</p>
   */
  ProcessLaunchedAt?: DateFilter[];

  /**
   * <p>The date/time that the process was terminated.</p>
   */
  ProcessTerminatedAt?: DateFilter[];

  /**
   * <p>The type of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorType?: StringFilter[];

  /**
   * <p>The value of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorValue?: StringFilter[];

  /**
   * <p>The category of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorCategory?: StringFilter[];

  /**
   * <p>The date/time of the last observation of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorLastObservedAt?: DateFilter[];

  /**
   * <p>The source of the threat intelligence.</p>
   */
  ThreatIntelIndicatorSource?: StringFilter[];

  /**
   * <p>The URL for more details from the source of the threat intelligence.</p>
   */
  ThreatIntelIndicatorSourceUrl?: StringFilter[];

  /**
   * <p>Specifies the type of the resource that details are provided for.</p>
   */
  ResourceType?: StringFilter[];

  /**
   * <p>The canonical identifier for the given resource type.</p>
   */
  ResourceId?: StringFilter[];

  /**
   * <p>The canonical Amazon Web Services partition name that the Region is assigned to.</p>
   */
  ResourcePartition?: StringFilter[];

  /**
   * <p>The canonical Amazon Web Services external Region name where this resource is located.</p>
   */
  ResourceRegion?: StringFilter[];

  /**
   * <p>A list of Amazon Web Services tags associated with a resource at the time the finding was
   *          processed.</p>
   */
  ResourceTags?: MapFilter[];

  /**
   * <p>The instance type of the instance.</p>
   */
  ResourceAwsEc2InstanceType?: StringFilter[];

  /**
   * <p>The Amazon Machine Image (AMI) ID of the instance.</p>
   */
  ResourceAwsEc2InstanceImageId?: StringFilter[];

  /**
   * <p>The IPv4 addresses associated with the instance.</p>
   */
  ResourceAwsEc2InstanceIpV4Addresses?: IpFilter[];

  /**
   * <p>The IPv6 addresses associated with the instance.</p>
   */
  ResourceAwsEc2InstanceIpV6Addresses?: IpFilter[];

  /**
   * <p>The key name associated with the instance.</p>
   */
  ResourceAwsEc2InstanceKeyName?: StringFilter[];

  /**
   * <p>The IAM profile ARN of the instance.</p>
   */
  ResourceAwsEc2InstanceIamInstanceProfileArn?: StringFilter[];

  /**
   * <p>The identifier of the VPC that the instance was launched in.</p>
   */
  ResourceAwsEc2InstanceVpcId?: StringFilter[];

  /**
   * <p>The identifier of the subnet that the instance was launched in.</p>
   */
  ResourceAwsEc2InstanceSubnetId?: StringFilter[];

  /**
   * <p>The date and time the instance was launched.</p>
   */
  ResourceAwsEc2InstanceLaunchedAt?: DateFilter[];

  /**
   * <p>The canonical user ID of the owner of the S3 bucket.</p>
   */
  ResourceAwsS3BucketOwnerId?: StringFilter[];

  /**
   * <p>The display name of the owner of the S3 bucket.</p>
   */
  ResourceAwsS3BucketOwnerName?: StringFilter[];

  /**
   * @deprecated
   *
   * <p>The user associated with the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyUserName?: StringFilter[];

  /**
   * <p>The name of the principal that is associated with an IAM access key.</p>
   */
  ResourceAwsIamAccessKeyPrincipalName?: StringFilter[];

  /**
   * <p>The status of the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyStatus?: StringFilter[];

  /**
   * <p>The creation date/time of the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyCreatedAt?: DateFilter[];

  /**
   * <p>The name of an IAM user.</p>
   */
  ResourceAwsIamUserUserName?: StringFilter[];

  /**
   * <p>The name of the container related to a finding.</p>
   */
  ResourceContainerName?: StringFilter[];

  /**
   * <p>The identifier of the image related to a finding.</p>
   */
  ResourceContainerImageId?: StringFilter[];

  /**
   * <p>The name of the image related to a finding.</p>
   */
  ResourceContainerImageName?: StringFilter[];

  /**
   * <p>The date/time that the container was started.</p>
   */
  ResourceContainerLaunchedAt?: DateFilter[];

  /**
   * <p>The details of a resource that doesn't have a specific subfield for the resource type
   *          defined.</p>
   */
  ResourceDetailsOther?: MapFilter[];

  /**
   * <p>Exclusive to findings that are generated as the result of a check run against a specific
   *          rule in a supported standard, such as CIS Amazon Web Services Foundations. Contains security
   *          standard-related finding details.</p>
   */
  ComplianceStatus?: StringFilter[];

  /**
   * <p>The veracity of a finding.</p>
   */
  VerificationState?: StringFilter[];

  /**
   * <p>The workflow state of a finding.</p>
   *          <p>Note that this field is deprecated. To search for a finding based on its workflow
   *          status, use <code>WorkflowStatus</code>.</p>
   */
  WorkflowState?: StringFilter[];

  /**
   * <p>The status of the investigation into a finding. Allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - The initial state of a finding, before it is reviewed.</p>
   *                <p>Security Hub also resets the workflow status from <code>NOTIFIED</code> or
   *                   <code>RESOLVED</code> to <code>NEW</code> in the following cases:</p>
   *                <ul>
   *                   <li>
   *                      <p>The record state changes from <code>ARCHIVED</code> to <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>The compliance status changes from <code>PASSED</code> to either <code>WARNING</code>,
   *                         <code>FAILED</code>, or <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFIED</code> - Indicates that the resource owner has been notified about
   *                the security issue. Used when the initial reviewer is not the resource owner, and
   *                needs intervention from the resource owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPPRESSED</code> - The finding will not be reviewed again and will not be
   *                acted upon.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved. </p>
   *             </li>
   *          </ul>
   */
  WorkflowStatus?: StringFilter[];

  /**
   * <p>The updated record state for the finding.</p>
   */
  RecordState?: StringFilter[];

  /**
   * <p>The ARN of the solution that generated a related finding.</p>
   */
  RelatedFindingsProductArn?: StringFilter[];

  /**
   * <p>The solution-generated identifier for a related finding.</p>
   */
  RelatedFindingsId?: StringFilter[];

  /**
   * <p>The text of a note.</p>
   */
  NoteText?: StringFilter[];

  /**
   * <p>The timestamp of when the note was updated.</p>
   */
  NoteUpdatedAt?: DateFilter[];

  /**
   * <p>The principal that created a note.</p>
   */
  NoteUpdatedBy?: StringFilter[];

  /**
   * @deprecated
   *
   * <p>A keyword for a finding.</p>
   */
  Keyword?: KeywordFilter[];

  /**
   * <p>The finding provider value for the finding confidence. Confidence is defined as the likelihood
   *          that a finding accurately identifies the behavior or issue that it was intended to
   *          identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  FindingProviderFieldsConfidence?: NumberFilter[];

  /**
   * <p>The finding provider value for the level of importance assigned to the resources associated with
   *          the findings.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources. </p>
   */
  FindingProviderFieldsCriticality?: NumberFilter[];

  /**
   * <p>The finding identifier of a related finding that is identified by the finding provider.</p>
   */
  FindingProviderFieldsRelatedFindingsId?: StringFilter[];

  /**
   * <p>The ARN of the solution that generated a related finding that is identified by the finding provider.</p>
   */
  FindingProviderFieldsRelatedFindingsProductArn?: StringFilter[];

  /**
   * <p>The finding provider value for the severity label.</p>
   */
  FindingProviderFieldsSeverityLabel?: StringFilter[];

  /**
   * <p>The finding provider's original value for the severity.</p>
   */
  FindingProviderFieldsSeverityOriginal?: StringFilter[];

  /**
   * <p>One or more finding types that the finding provider assigned to the finding. Uses the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   */
  FindingProviderFieldsTypes?: StringFilter[];
}

export namespace AwsSecurityFindingFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSecurityFindingFilters): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies a finding to update using <code>BatchUpdateFindings</code>.</p>
 */
export interface AwsSecurityFindingIdentifier {
  /**
   * <p>The identifier of the finding that was specified by the finding provider.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a product that generates findings.
   *          This can be the ARN for a third-party product that is integrated with Security Hub, or the ARN for
   *          a custom integration.</p>
   */
  ProductArn: string | undefined;
}

export namespace AwsSecurityFindingIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSecurityFindingIdentifier): any => ({
    ...obj,
  });
}

export interface BatchDisableStandardsRequest {
  /**
   * <p>The ARNs of the standards subscriptions to disable.</p>
   */
  StandardsSubscriptionArns: string[] | undefined;
}

export namespace BatchDisableStandardsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisableStandardsRequest): any => ({
    ...obj,
  });
}

export enum StandardsStatus {
  DELETING = "DELETING",
  FAILED = "FAILED",
  INCOMPLETE = "INCOMPLETE",
  PENDING = "PENDING",
  READY = "READY",
}

/**
 * <p>A resource that represents your subscription to a supported standard.</p>
 */
export interface StandardsSubscription {
  /**
   * <p>The ARN of a resource that represents your subscription to a supported standard.</p>
   */
  StandardsSubscriptionArn: string | undefined;

  /**
   * <p>The ARN of a standard.</p>
   */
  StandardsArn: string | undefined;

  /**
   * <p>A key-value pair of input for the standard.</p>
   */
  StandardsInput: { [key: string]: string } | undefined;

  /**
   * <p>The status of the standard subscription.</p>
   *          <p>The status values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Standard is in the process of being enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READY</code> - Standard is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INCOMPLETE</code> - Standard could not be enabled completely. Some controls may not be available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - Standard is in the process of being disabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - Standard could not be disabled.</p>
   *             </li>
   *          </ul>
   */
  StandardsStatus: StandardsStatus | string | undefined;
}

export namespace StandardsSubscription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StandardsSubscription): any => ({
    ...obj,
  });
}

export interface BatchDisableStandardsResponse {
  /**
   * <p>The details of the standards subscriptions that were disabled.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];
}

export namespace BatchDisableStandardsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisableStandardsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The standard that you want to enable.</p>
 */
export interface StandardsSubscriptionRequest {
  /**
   * <p>The ARN of the standard that you want to enable. To view the list of available standards
   *          and their ARNs, use the <code>DescribeStandards</code> operation.</p>
   */
  StandardsArn: string | undefined;

  /**
   * <p>A key-value pair of input for the standard.</p>
   */
  StandardsInput?: { [key: string]: string };
}

export namespace StandardsSubscriptionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StandardsSubscriptionRequest): any => ({
    ...obj,
  });
}

export interface BatchEnableStandardsRequest {
  /**
   * <p>The list of standards checks to enable.</p>
   */
  StandardsSubscriptionRequests: StandardsSubscriptionRequest[] | undefined;
}

export namespace BatchEnableStandardsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchEnableStandardsRequest): any => ({
    ...obj,
  });
}

export interface BatchEnableStandardsResponse {
  /**
   * <p>The details of the standards subscriptions that were enabled.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];
}

export namespace BatchEnableStandardsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchEnableStandardsResponse): any => ({
    ...obj,
  });
}

export interface BatchImportFindingsRequest {
  /**
   * <p>A list of findings to import. To successfully import a finding, it must follow the
   *             <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html">Amazon Web Services Security Finding Format</a>. Maximum of 100 findings per request.</p>
   */
  Findings: AwsSecurityFinding[] | undefined;
}

export namespace BatchImportFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchImportFindingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The list of the findings that cannot be imported. For each finding, the list provides
 *          the error.</p>
 */
export interface ImportFindingsError {
  /**
   * <p>The identifier of the finding that could not be updated.</p>
   */
  Id: string | undefined;

  /**
   * <p>The code of the error returned by the <code>BatchImportFindings</code> operation.</p>
   */
  ErrorCode: string | undefined;

  /**
   * <p>The message of the error returned by the <code>BatchImportFindings</code>
   *          operation.</p>
   */
  ErrorMessage: string | undefined;
}

export namespace ImportFindingsError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportFindingsError): any => ({
    ...obj,
  });
}

export interface BatchImportFindingsResponse {
  /**
   * <p>The number of findings that failed to import.</p>
   */
  FailedCount: number | undefined;

  /**
   * <p>The number of findings that were successfully imported.</p>
   */
  SuccessCount: number | undefined;

  /**
   * <p>The list of findings that failed to import.</p>
   */
  FailedFindings?: ImportFindingsError[];
}

export namespace BatchImportFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchImportFindingsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The updated note.</p>
 */
export interface NoteUpdate {
  /**
   * <p>The updated note text.</p>
   */
  Text: string | undefined;

  /**
   * <p>The principal that updated the note.</p>
   */
  UpdatedBy: string | undefined;
}

export namespace NoteUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoteUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Updates to the severity information for a finding.</p>
 */
export interface SeverityUpdate {
  /**
   * <p>The normalized severity for the finding. This attribute is to be deprecated in favor of
   *             <code>Label</code>.</p>
   *          <p>If you provide <code>Normalized</code> and do not provide <code>Label</code>,
   *             <code>Label</code> is set automatically as follows.</p>
   *          <ul>
   *             <li>
   *                <p>0 - <code>INFORMATIONAL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>1–39 - <code>LOW</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>40–69 - <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>70–89 - <code>HIGH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>90–100 - <code>CRITICAL</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Normalized?: number;

  /**
   * <p>The native severity as defined by the Amazon Web Services service or integrated partner product that
   *          generated the finding.</p>
   */
  Product?: number;

  /**
   * <p>The severity value of the finding. The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code> - No issue was found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code> - The issue does not require action on its own.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code> - The issue must be addressed but not urgently.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code> - The issue must be addressed as a priority.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code> - The issue must be remediated immediately to avoid it
   *                escalating.</p>
   *             </li>
   *          </ul>
   */
  Label?: SeverityLabel | string;
}

export namespace SeverityUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SeverityUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Used to update information about the investigation into the finding.</p>
 */
export interface WorkflowUpdate {
  /**
   * <p>The status of the investigation into the finding. The workflow status is specific to an individual finding. It does not affect the generation of new findings. For example, setting the workflow status to <code>SUPPRESSED</code> or <code>RESOLVED</code> does not prevent a new finding for the same issue.</p>
   *          <p>The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - The initial state of a finding, before it is reviewed.</p>
   *                <p>Security Hub also resets <code>WorkFlowStatus</code> from <code>NOTIFIED</code> or
   *                   <code>RESOLVED</code> to <code>NEW</code> in the following cases:</p>
   *                <ul>
   *                   <li>
   *                      <p>The record state changes from <code>ARCHIVED</code> to
   *                      <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>The compliance status changes from <code>PASSED</code> to either
   *                         <code>WARNING</code>, <code>FAILED</code>, or
   *                      <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFIED</code> - Indicates that you notified the resource owner about the
   *                security issue. Used when the initial reviewer is not the resource owner, and needs
   *                intervention from the resource owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPPRESSED</code> - Indicates that you reviewed the finding and do not believe that any action is needed. The finding is no longer updated.</p>
   *             </li>
   *          </ul>
   */
  Status?: WorkflowStatus | string;
}

export namespace WorkflowUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkflowUpdate): any => ({
    ...obj,
  });
}

export interface BatchUpdateFindingsRequest {
  /**
   * <p>The list of findings to update. <code>BatchUpdateFindings</code> can be used to update
   *          up to 100 findings at a time.</p>
   *          <p>For each finding, the list provides the finding identifier and the ARN of the finding
   *          provider.</p>
   */
  FindingIdentifiers: AwsSecurityFindingIdentifier[] | undefined;

  /**
   * <p>The updated note.</p>
   */
  Note?: NoteUpdate;

  /**
   * <p>Used to update the finding severity.</p>
   */
  Severity?: SeverityUpdate;

  /**
   * <p>Indicates the veracity of a finding.</p>
   *          <p>The available values for <code>VerificationState</code> are  as follows.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code> – The default disposition of a security finding</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRUE_POSITIVE</code> – The security finding is confirmed</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FALSE_POSITIVE</code> – The security finding was determined to be a false
   *                alarm</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BENIGN_POSITIVE</code> – A special case of <code>TRUE_POSITIVE</code> where
   *                the finding doesn't pose any threat, is expected, or both</p>
   *             </li>
   *          </ul>
   */
  VerificationState?: VerificationState | string;

  /**
   * <p>The updated value for the finding confidence. Confidence is defined as the likelihood
   *          that a finding accurately identifies the behavior or issue that it was intended to
   *          identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: number;

  /**
   * <p>The updated value for the level of importance assigned to the resources associated with
   *          the findings.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources. </p>
   */
  Criticality?: number;

  /**
   * <p>One or more finding types in the format of namespace/category/classifier that classify a
   *          finding.</p>
   *          <p>Valid namespace values are as follows.</p>
   *          <ul>
   *             <li>
   *                <p>Software and Configuration Checks</p>
   *             </li>
   *             <li>
   *                <p>TTPs</p>
   *             </li>
   *             <li>
   *                <p>Effects</p>
   *             </li>
   *             <li>
   *                <p>Unusual Behaviors</p>
   *             </li>
   *             <li>
   *                <p>Sensitive Data Identifications </p>
   *             </li>
   *          </ul>
   */
  Types?: string[];

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding.</p>
   */
  UserDefinedFields?: { [key: string]: string };

  /**
   * <p>Used to update the workflow status of a finding.</p>
   *          <p>The workflow status indicates the progress of the investigation into the finding. </p>
   */
  Workflow?: WorkflowUpdate;

  /**
   * <p>A list of findings that are related to the updated findings.</p>
   */
  RelatedFindings?: RelatedFinding[];
}

export namespace BatchUpdateFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateFindingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to
 *          update.</p>
 */
export interface BatchUpdateFindingsUnprocessedFinding {
  /**
   * <p>The identifier of the finding that was not updated.</p>
   */
  FindingIdentifier: AwsSecurityFindingIdentifier | undefined;

  /**
   * <p>The code associated with the error.</p>
   */
  ErrorCode: string | undefined;

  /**
   * <p>The message associated with the error.</p>
   */
  ErrorMessage: string | undefined;
}

export namespace BatchUpdateFindingsUnprocessedFinding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateFindingsUnprocessedFinding): any => ({
    ...obj,
  });
}

export interface BatchUpdateFindingsResponse {
  /**
   * <p>The list of findings that were updated successfully.</p>
   */
  ProcessedFindings: AwsSecurityFindingIdentifier[] | undefined;

  /**
   * <p>The list of findings that were not updated.</p>
   */
  UnprocessedFindings: BatchUpdateFindingsUnprocessedFinding[] | undefined;
}

export namespace BatchUpdateFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateFindingsResponse): any => ({
    ...obj,
  });
}

export enum ControlStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export interface CreateActionTargetRequest {
  /**
   * <p>The name of the custom action target. Can contain up to 20 characters.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description for the custom action target.</p>
   */
  Description: string | undefined;

  /**
   * <p>The ID for the custom action target. Can contain up to 20 alphanumeric characters.</p>
   */
  Id: string | undefined;
}

export namespace CreateActionTargetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateActionTargetRequest): any => ({
    ...obj,
  });
}

export interface CreateActionTargetResponse {
  /**
   * <p>The ARN for the custom action target.</p>
   */
  ActionTargetArn: string | undefined;
}

export namespace CreateActionTargetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateActionTargetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource specified in the request conflicts with an existing resource.</p>
 */
export interface ResourceConflictException extends __SmithyException, $MetadataBearer {
  name: "ResourceConflictException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace ResourceConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceConflictException): any => ({
    ...obj,
  });
}

export interface CreateInsightRequest {
  /**
   * <p>The name of the custom insight to create.</p>
   */
  Name: string | undefined;

  /**
   * <p>One or more attributes used to filter the findings included in the insight. The insight
   *          only includes findings that match the criteria defined in the filters.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The attribute used to group the findings for the insight. The grouping attribute
   *          identifies the type of item that the insight applies to. For example, if an insight is
   *          grouped by resource identifier, then the insight produces a list of resource
   *          identifiers.</p>
   */
  GroupByAttribute: string | undefined;
}

export namespace CreateInsightRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInsightRequest): any => ({
    ...obj,
  });
}

export interface CreateInsightResponse {
  /**
   * <p>The ARN of the insight created.</p>
   */
  InsightArn: string | undefined;
}

export namespace CreateInsightResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInsightResponse): any => ({
    ...obj,
  });
}

export interface CreateMembersRequest {
  /**
   * <p>The list of accounts to associate with the Security Hub administrator account. For each account, the
   *          list includes the account ID and optionally the email address.</p>
   */
  AccountDetails: AccountDetails[] | undefined;
}

export namespace CreateMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMembersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the account that was not processed.</p>
 */
export interface Result {
  /**
   * <p>An Amazon Web Services account ID of the account that was not processed.</p>
   */
  AccountId?: string;

  /**
   * <p>The reason that the account was not processed.</p>
   */
  ProcessingResult?: string;
}

export namespace Result {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Result): any => ({
    ...obj,
  });
}

export interface CreateMembersResponse {
  /**
   * <p>The list of Amazon Web Services accounts that were not processed. For each account, the list includes
   *          the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace CreateMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMembersResponse): any => ({
    ...obj,
  });
}

export interface DeclineInvitationsRequest {
  /**
   * <p>The list of account IDs for the accounts from which to decline the invitations to
   *          Security Hub.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace DeclineInvitationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeclineInvitationsRequest): any => ({
    ...obj,
  });
}

export interface DeclineInvitationsResponse {
  /**
   * <p>The list of Amazon Web Services accounts that were not processed. For each account, the list includes
   *          the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace DeclineInvitationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeclineInvitationsResponse): any => ({
    ...obj,
  });
}

export interface DeleteActionTargetRequest {
  /**
   * <p>The ARN of the custom action target to delete.</p>
   */
  ActionTargetArn: string | undefined;
}

export namespace DeleteActionTargetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteActionTargetRequest): any => ({
    ...obj,
  });
}

export interface DeleteActionTargetResponse {
  /**
   * <p>The ARN of the custom action target that was deleted.</p>
   */
  ActionTargetArn: string | undefined;
}

export namespace DeleteActionTargetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteActionTargetResponse): any => ({
    ...obj,
  });
}

export interface DeleteInsightRequest {
  /**
   * <p>The ARN of the insight to delete.</p>
   */
  InsightArn: string | undefined;
}

export namespace DeleteInsightRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInsightRequest): any => ({
    ...obj,
  });
}

export interface DeleteInsightResponse {
  /**
   * <p>The ARN of the insight that was deleted.</p>
   */
  InsightArn: string | undefined;
}

export namespace DeleteInsightResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInsightResponse): any => ({
    ...obj,
  });
}

export interface DeleteInvitationsRequest {
  /**
   * <p>The list of the account IDs that sent the invitations to delete.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace DeleteInvitationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInvitationsRequest): any => ({
    ...obj,
  });
}

export interface DeleteInvitationsResponse {
  /**
   * <p>The list of Amazon Web Services accounts for which the invitations were not deleted. For each account,
   *          the list includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace DeleteInvitationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInvitationsResponse): any => ({
    ...obj,
  });
}

export interface DeleteMembersRequest {
  /**
   * <p>The list of account IDs for the member accounts to delete.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace DeleteMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMembersRequest): any => ({
    ...obj,
  });
}

export interface DeleteMembersResponse {
  /**
   * <p>The list of Amazon Web Services accounts that were not deleted. For each account, the list includes the
   *          account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace DeleteMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMembersResponse): any => ({
    ...obj,
  });
}

export interface DescribeActionTargetsRequest {
  /**
   * <p>A list of custom action target ARNs for the custom action targets to retrieve.</p>
   */
  ActionTargetArns?: string[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeActionTargets</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export namespace DescribeActionTargetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeActionTargetsRequest): any => ({
    ...obj,
  });
}

export interface DescribeActionTargetsResponse {
  /**
   * <p>A list of <code>ActionTarget</code> objects. Each object includes the <code>ActionTargetArn</code>,
   *             <code>Description</code>, and <code>Name</code> of a custom action target available in
   *          Security Hub.</p>
   */
  ActionTargets: ActionTarget[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeActionTargetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeActionTargetsResponse): any => ({
    ...obj,
  });
}

export interface DescribeHubRequest {
  /**
   * <p>The ARN of the Hub resource to retrieve.</p>
   */
  HubArn?: string;
}

export namespace DescribeHubRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHubRequest): any => ({
    ...obj,
  });
}

export interface DescribeHubResponse {
  /**
   * <p>The ARN of the Hub resource that was retrieved.</p>
   */
  HubArn?: string;

  /**
   * <p>The date and time when Security Hub was enabled in the account.</p>
   */
  SubscribedAt?: string;

  /**
   * <p>Whether to automatically enable new controls when they are added to standards that are
   *          enabled.</p>
   *          <p>If set to <code>true</code>, then new controls for enabled standards are enabled
   *          automatically. If set to <code>false</code>, then new controls are not enabled.</p>
   */
  AutoEnableControls?: boolean;
}

export namespace DescribeHubResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHubResponse): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationConfigurationRequest {}

export namespace DescribeOrganizationConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationConfigurationResponse {
  /**
   * <p>Whether to automatically enable Security Hub for new accounts in the organization.</p>
   *          <p>If set to <code>true</code>, then Security Hub is enabled for new accounts. If set to false,
   *          then new accounts are not added automatically.</p>
   */
  AutoEnable?: boolean;

  /**
   * <p>Whether the maximum number of allowed member accounts are already associated with the
   *          Security Hub administrator account.</p>
   */
  MemberAccountLimitReached?: boolean;
}

export namespace DescribeOrganizationConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DescribeProductsRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeProducts</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ARN of the integration to return.</p>
   */
  ProductArn?: string;
}

export namespace DescribeProductsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProductsRequest): any => ({
    ...obj,
  });
}

export enum IntegrationType {
  RECEIVE_FINDINGS_FROM_SECURITY_HUB = "RECEIVE_FINDINGS_FROM_SECURITY_HUB",
  SEND_FINDINGS_TO_SECURITY_HUB = "SEND_FINDINGS_TO_SECURITY_HUB",
  UPDATE_FINDINGS_IN_SECURITY_HUB = "UPDATE_FINDINGS_IN_SECURITY_HUB",
}

/**
 * <p>Contains details about a product.</p>
 */
export interface Product {
  /**
   * <p>The ARN assigned to the product.</p>
   */
  ProductArn: string | undefined;

  /**
   * <p>The name of the product.</p>
   */
  ProductName?: string;

  /**
   * <p>The name of the company that provides the product.</p>
   */
  CompanyName?: string;

  /**
   * <p>A description of the product.</p>
   */
  Description?: string;

  /**
   * <p>The categories assigned to the product.</p>
   */
  Categories?: string[];

  /**
   * <p>The types of integration that the product supports. Available values are the
   *          following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SEND_FINDINGS_TO_SECURITY_HUB</code> - The integration sends
   *                findings to Security Hub.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RECEIVE_FINDINGS_FROM_SECURITY_HUB</code> - The integration
   *                receives findings from Security Hub.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FINDINGS_IN_SECURITY_HUB</code> - The integration does not send new findings to Security Hub, but does make updates to the findings that it receives from Security Hub.</p>
   *             </li>
   *          </ul>
   */
  IntegrationTypes?: (IntegrationType | string)[];

  /**
   * <p>For integrations with Amazon Web Services services, the Amazon Web Services Console URL from which to activate the service.</p>
   *          <p>For integrations with third-party products, the Amazon Web Services Marketplace URL from which to subscribe to or purchase the product.</p>
   */
  MarketplaceUrl?: string;

  /**
   * <p>The URL to the service or product documentation about the integration with Security Hub, including how to activate the integration.</p>
   */
  ActivationUrl?: string;

  /**
   * <p>The resource policy associated with the product.</p>
   */
  ProductSubscriptionResourcePolicy?: string;
}

export namespace Product {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Product): any => ({
    ...obj,
  });
}

export interface DescribeProductsResponse {
  /**
   * <p>A list of products, including details for each product.</p>
   */
  Products: Product[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeProductsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProductsResponse): any => ({
    ...obj,
  });
}

export interface DescribeStandardsRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeStandards</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of standards to return.</p>
   */
  MaxResults?: number;
}

export namespace DescribeStandardsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStandardsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a specific standard.</p>
 */
export interface Standard {
  /**
   * <p>The ARN of a standard.</p>
   */
  StandardsArn?: string;

  /**
   * <p>The name of the standard.</p>
   */
  Name?: string;

  /**
   * <p>A description of the standard.</p>
   */
  Description?: string;

  /**
   * <p>Whether the standard is enabled by default. When Security Hub is enabled from the console, if a
   *          standard is enabled by default, the check box for that standard is selected by
   *          default.</p>
   *          <p>When Security Hub is enabled using the <code>EnableSecurityHub</code> API operation, the
   *          standard is enabled by default unless <code>EnableDefaultStandards</code> is set to
   *             <code>false</code>.</p>
   */
  EnabledByDefault?: boolean;
}

export namespace Standard {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Standard): any => ({
    ...obj,
  });
}

export interface DescribeStandardsResponse {
  /**
   * <p>A list of available standards.</p>
   */
  Standards?: Standard[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeStandardsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStandardsResponse): any => ({
    ...obj,
  });
}

export interface DescribeStandardsControlsRequest {
  /**
   * <p>The ARN of a resource that represents your subscription to a supported standard. To get
   *          the subscription ARNs of the standards you have enabled, use the <code>GetEnabledStandards</code> operation.</p>
   */
  StandardsSubscriptionArn: string | undefined;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeStandardsControls</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of security standard controls to return.</p>
   */
  MaxResults?: number;
}

export namespace DescribeStandardsControlsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStandardsControlsRequest): any => ({
    ...obj,
  });
}

export enum SeverityRating {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

/**
 * <p>Details for an individual security standard control.</p>
 */
export interface StandardsControl {
  /**
   * <p>The ARN of the security standard control.</p>
   */
  StandardsControlArn?: string;

  /**
   * <p>The current status of the security standard control. Indicates whether the control is
   *          enabled or disabled. Security Hub does not check against disabled controls.</p>
   */
  ControlStatus?: ControlStatus | string;

  /**
   * <p>The reason provided for the most recent change in status for the control.</p>
   */
  DisabledReason?: string;

  /**
   * <p>The date and time that the status of the security standard control was most recently
   *          updated.</p>
   */
  ControlStatusUpdatedAt?: Date;

  /**
   * <p>The identifier of the security standard control.</p>
   */
  ControlId?: string;

  /**
   * <p>The title of the security standard control.</p>
   */
  Title?: string;

  /**
   * <p>The longer description of the security standard control. Provides information about what
   *          the control is checking for.</p>
   */
  Description?: string;

  /**
   * <p>A link to remediation information for the control in the Security Hub user
   *          documentation.</p>
   */
  RemediationUrl?: string;

  /**
   * <p>The severity of findings generated from this security standard control.</p>
   *          <p>The finding severity is based on an assessment of how easy it would be to compromise Amazon Web Services
   *          resources if the issue is detected.</p>
   */
  SeverityRating?: SeverityRating | string;

  /**
   * <p>The list of requirements that are related to this control.</p>
   */
  RelatedRequirements?: string[];
}

export namespace StandardsControl {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StandardsControl): any => ({
    ...obj,
  });
}

export interface DescribeStandardsControlsResponse {
  /**
   * <p>A list of security standards controls.</p>
   */
  Controls?: StandardsControl[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeStandardsControlsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStandardsControlsResponse): any => ({
    ...obj,
  });
}

export interface DisableImportFindingsForProductRequest {
  /**
   * <p>The ARN of the integrated product to disable the integration for.</p>
   */
  ProductSubscriptionArn: string | undefined;
}

export namespace DisableImportFindingsForProductRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableImportFindingsForProductRequest): any => ({
    ...obj,
  });
}

export interface DisableImportFindingsForProductResponse {}

export namespace DisableImportFindingsForProductResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableImportFindingsForProductResponse): any => ({
    ...obj,
  });
}

export interface DisableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account identifier of the Security Hub administrator account.</p>
   */
  AdminAccountId: string | undefined;
}

export namespace DisableOrganizationAdminAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface DisableOrganizationAdminAccountResponse {}

export namespace DisableOrganizationAdminAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
}

export interface DisableSecurityHubRequest {}

export namespace DisableSecurityHubRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableSecurityHubRequest): any => ({
    ...obj,
  });
}

export interface DisableSecurityHubResponse {}

export namespace DisableSecurityHubResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableSecurityHubResponse): any => ({
    ...obj,
  });
}

export interface DisassociateFromAdministratorAccountRequest {}

export namespace DisassociateFromAdministratorAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFromAdministratorAccountRequest): any => ({
    ...obj,
  });
}

export interface DisassociateFromAdministratorAccountResponse {}

export namespace DisassociateFromAdministratorAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFromAdministratorAccountResponse): any => ({
    ...obj,
  });
}

export interface DisassociateFromMasterAccountRequest {}

export namespace DisassociateFromMasterAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFromMasterAccountRequest): any => ({
    ...obj,
  });
}

export interface DisassociateFromMasterAccountResponse {}

export namespace DisassociateFromMasterAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFromMasterAccountResponse): any => ({
    ...obj,
  });
}

export interface DisassociateMembersRequest {
  /**
   * <p>The account IDs of the member accounts to disassociate from the administrator account.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace DisassociateMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateMembersRequest): any => ({
    ...obj,
  });
}

export interface DisassociateMembersResponse {}

export namespace DisassociateMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateMembersResponse): any => ({
    ...obj,
  });
}

export interface EnableImportFindingsForProductRequest {
  /**
   * <p>The ARN of the product to enable the integration for.</p>
   */
  ProductArn: string | undefined;
}

export namespace EnableImportFindingsForProductRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableImportFindingsForProductRequest): any => ({
    ...obj,
  });
}

export interface EnableImportFindingsForProductResponse {
  /**
   * <p>The ARN of your subscription to the product to enable integrations for.</p>
   */
  ProductSubscriptionArn?: string;
}

export namespace EnableImportFindingsForProductResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableImportFindingsForProductResponse): any => ({
    ...obj,
  });
}

export interface EnableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account identifier of the account to designate as the Security Hub administrator
   *          account.</p>
   */
  AdminAccountId: string | undefined;
}

export namespace EnableOrganizationAdminAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface EnableOrganizationAdminAccountResponse {}

export namespace EnableOrganizationAdminAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
}

export interface EnableSecurityHubRequest {
  /**
   * <p>The tags to add to the hub resource when you enable Security Hub.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>Whether to enable the security standards that Security Hub has designated as automatically
   *          enabled. If you do not provide a value for <code>EnableDefaultStandards</code>, it is set
   *          to <code>true</code>. To not enable the automatically enabled standards, set
   *             <code>EnableDefaultStandards</code> to <code>false</code>.</p>
   */
  EnableDefaultStandards?: boolean;
}

export namespace EnableSecurityHubRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableSecurityHubRequest): any => ({
    ...obj,
  });
}

export interface EnableSecurityHubResponse {}

export namespace EnableSecurityHubResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableSecurityHubResponse): any => ({
    ...obj,
  });
}

export interface GetAdministratorAccountRequest {}

export namespace GetAdministratorAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAdministratorAccountRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an invitation.</p>
 */
export interface Invitation {
  /**
   * <p>The account ID of the Security Hub administrator account that the invitation was sent from.</p>
   */
  AccountId?: string;

  /**
   * <p>The ID of the invitation sent to the member account.</p>
   */
  InvitationId?: string;

  /**
   * <p>The timestamp of when the invitation was sent.</p>
   */
  InvitedAt?: Date;

  /**
   * <p>The current status of the association between the member and administrator accounts.</p>
   */
  MemberStatus?: string;
}

export namespace Invitation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Invitation): any => ({
    ...obj,
  });
}

export interface GetAdministratorAccountResponse {
  /**
   * <p>Details about an invitation.</p>
   */
  Administrator?: Invitation;
}

export namespace GetAdministratorAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAdministratorAccountResponse): any => ({
    ...obj,
  });
}

export interface GetEnabledStandardsRequest {
  /**
   * <p>The list of the standards subscription ARNs for the standards to retrieve.</p>
   */
  StandardsSubscriptionArns?: string[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetEnabledStandards</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace GetEnabledStandardsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnabledStandardsRequest): any => ({
    ...obj,
  });
}

export interface GetEnabledStandardsResponse {
  /**
   * <p>The list of <code>StandardsSubscriptions</code> objects that include information about
   *          the enabled standards.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetEnabledStandardsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnabledStandardsResponse): any => ({
    ...obj,
  });
}

export enum SortOrder {
  ASCENDING = "asc",
  DESCENDING = "desc",
}

/**
 * <p>A collection of finding attributes used to sort findings.</p>
 */
export interface SortCriterion {
  /**
   * <p>The finding attribute used to sort findings.</p>
   */
  Field?: string;

  /**
   * <p>The order used to sort findings.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace SortCriterion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SortCriterion): any => ({
    ...obj,
  });
}

export interface GetFindingsRequest {
  /**
   * <p>The finding attributes used to define a condition to filter the returned
   *          findings.</p>
   *          <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to
   *          20 filter values.</p>
   *          <p>Note that in the available filter fields, <code>WorkflowState</code> is deprecated. To
   *          search for a finding based on its workflow status, use <code>WorkflowStatus</code>.</p>
   */
  Filters?: AwsSecurityFindingFilters;

  /**
   * <p>The finding attributes used to sort the list of returned findings.</p>
   */
  SortCriteria?: SortCriterion[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetFindings</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of findings to return.</p>
   */
  MaxResults?: number;
}

export namespace GetFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingsRequest): any => ({
    ...obj,
  });
}

export interface GetFindingsResponse {
  /**
   * <p>The findings that matched the filters specified in the request.</p>
   */
  Findings: AwsSecurityFinding[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingsResponse): any => ({
    ...obj,
  });
}

export interface GetInsightResultsRequest {
  /**
   * <p>The ARN of the insight for which to return results.</p>
   */
  InsightArn: string | undefined;
}

export namespace GetInsightResultsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightResultsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The insight result values returned by the <code>GetInsightResults</code>
 *          operation.</p>
 */
export interface InsightResultValue {
  /**
   * <p>The value of the attribute that the findings are grouped by for the insight whose
   *          results are returned by the <code>GetInsightResults</code> operation.</p>
   */
  GroupByAttributeValue: string | undefined;

  /**
   * <p>The number of findings returned for each <code>GroupByAttributeValue</code>.</p>
   */
  Count: number | undefined;
}

export namespace InsightResultValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsightResultValue): any => ({
    ...obj,
  });
}

/**
 * <p>The insight results returned by the <code>GetInsightResults</code> operation.</p>
 */
export interface InsightResults {
  /**
   * <p>The ARN of the insight whose results are returned by the <code>GetInsightResults</code>
   *          operation.</p>
   */
  InsightArn: string | undefined;

  /**
   * <p>The attribute that the findings are grouped by for the insight whose results are
   *          returned by the <code>GetInsightResults</code> operation.</p>
   */
  GroupByAttribute: string | undefined;

  /**
   * <p>The list of insight result values returned by the <code>GetInsightResults</code>
   *          operation.</p>
   */
  ResultValues: InsightResultValue[] | undefined;
}

export namespace InsightResults {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsightResults): any => ({
    ...obj,
  });
}

export interface GetInsightResultsResponse {
  /**
   * <p>The insight results returned by the operation.</p>
   */
  InsightResults: InsightResults | undefined;
}

export namespace GetInsightResultsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightResultsResponse): any => ({
    ...obj,
  });
}

export interface GetInsightsRequest {
  /**
   * <p>The ARNs of the insights to describe. If you do not provide any insight ARNs, then
   *             <code>GetInsights</code> returns all of your custom insights. It does not return any
   *          managed insights.</p>
   */
  InsightArns?: string[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetInsights</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace GetInsightsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a Security Hub insight.</p>
 */
export interface Insight {
  /**
   * <p>The ARN of a Security Hub insight.</p>
   */
  InsightArn: string | undefined;

  /**
   * <p>The name of a Security Hub insight.</p>
   */
  Name: string | undefined;

  /**
   * <p>One or more attributes used to filter the findings included in the insight. The insight
   *          only includes findings that match the criteria defined in the filters.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The grouping attribute for the insight's findings. Indicates how to group the matching
   *          findings, and identifies the type of item that the insight applies to. For example, if an
   *          insight is grouped by resource identifier, then the insight produces a list of resource
   *          identifiers.</p>
   */
  GroupByAttribute: string | undefined;
}

export namespace Insight {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Insight): any => ({
    ...obj,
  });
}

export interface GetInsightsResponse {
  /**
   * <p>The insights returned by the operation.</p>
   */
  Insights: Insight[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetInsightsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightsResponse): any => ({
    ...obj,
  });
}

export interface GetInvitationsCountRequest {}

export namespace GetInvitationsCountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInvitationsCountRequest): any => ({
    ...obj,
  });
}

export interface GetInvitationsCountResponse {
  /**
   * <p>The number of all membership invitations sent to this Security Hub member account, not
   *          including the currently accepted invitation.</p>
   */
  InvitationsCount?: number;
}

export namespace GetInvitationsCountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInvitationsCountResponse): any => ({
    ...obj,
  });
}

export interface GetMasterAccountRequest {}

export namespace GetMasterAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMasterAccountRequest): any => ({
    ...obj,
  });
}

export interface GetMasterAccountResponse {
  /**
   * <p>A list of details about the Security Hub administrator account for the current member account.
   *       </p>
   */
  Master?: Invitation;
}

export namespace GetMasterAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMasterAccountResponse): any => ({
    ...obj,
  });
}

export interface GetMembersRequest {
  /**
   * <p>The list of account IDs for the Security Hub member accounts to return the details for. </p>
   */
  AccountIds: string[] | undefined;
}

export namespace GetMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMembersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The details about a member account.</p>
 */
export interface Member {
  /**
   * <p>The Amazon Web Services account ID of the member account.</p>
   */
  AccountId?: string;

  /**
   * <p>The email address of the member account.</p>
   */
  Email?: string;

  /**
   * @deprecated
   *
   * <p>This is replaced by <code>AdministratorID</code>.</p>
   *          <p>The Amazon Web Services account ID of the Security Hub administrator account associated with this member account.</p>
   */
  MasterId?: string;

  /**
   * <p>The Amazon Web Services account ID of the Security Hub administrator account associated with this member account.</p>
   */
  AdministratorId?: string;

  /**
   * <p>The status of the relationship between the member account and its administrator account.
   *       </p>
   *          <p>The status can have one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED</code> - Indicates that the administrator account added the member account,
   *                but has not yet invited the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVITED</code> - Indicates that the administrator account invited the member
   *                account. The member account has not yet responded to the invitation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Indicates that the member account is currently active. For
   *                manually invited member accounts, indicates that the member account accepted the
   *                invitation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVED</code> - Indicates that the administrator account disassociated the member
   *                account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESIGNED</code> - Indicates that the member account disassociated themselves
   *                from the administrator account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - Indicates that the administrator account deleted the member
   *                account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCOUNT_SUSPENDED</code> - Indicates that an organization account was suspended from Amazon Web Services at the same time that the administrator account tried to enable the organization account as a member account.</p>
   *             </li>
   *          </ul>
   */
  MemberStatus?: string;

  /**
   * <p>A timestamp for the date and time when the invitation was sent to the member
   *          account.</p>
   */
  InvitedAt?: Date;

  /**
   * <p>The timestamp for the date and time when the member account was updated.</p>
   */
  UpdatedAt?: Date;
}

export namespace Member {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Member): any => ({
    ...obj,
  });
}

export interface GetMembersResponse {
  /**
   * <p>The list of details about the Security Hub member accounts.</p>
   */
  Members?: Member[];

  /**
   * <p>The list of Amazon Web Services accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace GetMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMembersResponse): any => ({
    ...obj,
  });
}

export interface InviteMembersRequest {
  /**
   * <p>The list of account IDs of the Amazon Web Services accounts to invite to Security Hub as members. </p>
   */
  AccountIds: string[] | undefined;
}

export namespace InviteMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InviteMembersRequest): any => ({
    ...obj,
  });
}

export interface InviteMembersResponse {
  /**
   * <p>The list of Amazon Web Services accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace InviteMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InviteMembersResponse): any => ({
    ...obj,
  });
}

export interface ListEnabledProductsForImportRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListEnabledProductsForImport</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace ListEnabledProductsForImportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnabledProductsForImportRequest): any => ({
    ...obj,
  });
}

export interface ListEnabledProductsForImportResponse {
  /**
   * <p>The list of ARNs for the resources that represent your subscriptions to products. </p>
   */
  ProductSubscriptions?: string[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListEnabledProductsForImportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnabledProductsForImportResponse): any => ({
    ...obj,
  });
}

export interface ListInvitationsRequest {
  /**
   * <p>The maximum number of items to return in the response. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListInvitations</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;
}

export namespace ListInvitationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInvitationsRequest): any => ({
    ...obj,
  });
}

export interface ListInvitationsResponse {
  /**
   * <p>The details of the invitations returned by the operation.</p>
   */
  Invitations?: Invitation[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListInvitationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInvitationsResponse): any => ({
    ...obj,
  });
}

export interface ListMembersRequest {
  /**
   * <p>Specifies which member accounts to include in the response based on their relationship
   *          status with the administrator account. The default value is <code>TRUE</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>TRUE</code>, the response includes member
   *          accounts whose relationship status with the administrator account is set to <code>ENABLED</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>FALSE</code>, the response includes all
   *          existing member accounts. </p>
   */
  OnlyAssociated?: boolean;

  /**
   * <p>The maximum number of items to return in the response. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListMembers</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;
}

export namespace ListMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMembersRequest): any => ({
    ...obj,
  });
}

export interface ListMembersResponse {
  /**
   * <p>Member details returned by the operation.</p>
   */
  Members?: Member[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMembersResponse): any => ({
    ...obj,
  });
}

export interface ListOrganizationAdminAccountsRequest {
  /**
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListOrganizationAdminAccounts</code> operation, set the value of this parameter to
   *             <code>NULL</code>. For subsequent calls to the operation, to continue listing data, set
   *          the value of this parameter to the value returned from the previous response. </p>
   */
  NextToken?: string;
}

export namespace ListOrganizationAdminAccountsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOrganizationAdminAccountsRequest): any => ({
    ...obj,
  });
}

export interface ListOrganizationAdminAccountsResponse {
  /**
   * <p>The list of Security Hub administrator accounts.</p>
   */
  AdminAccounts?: AdminAccount[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListOrganizationAdminAccountsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOrganizationAdminAccountsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to retrieve tags for.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with a resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to apply the tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. You can add up to 50 tags at a time. The tag keys can be no longer than 128 characters. The tag values can be no longer than 256 characters.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource to remove the tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys associated with the tags to remove from the resource. You can remove up to 50 tags at a time.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateActionTargetRequest {
  /**
   * <p>The ARN of the custom action target to update.</p>
   */
  ActionTargetArn: string | undefined;

  /**
   * <p>The updated name of the custom action target.</p>
   */
  Name?: string;

  /**
   * <p>The updated description for the custom action target.</p>
   */
  Description?: string;
}

export namespace UpdateActionTargetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateActionTargetRequest): any => ({
    ...obj,
  });
}

export interface UpdateActionTargetResponse {}

export namespace UpdateActionTargetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateActionTargetResponse): any => ({
    ...obj,
  });
}

export interface UpdateFindingsRequest {
  /**
   * <p>A collection of attributes that specify which findings you want to update.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The updated note for the finding.</p>
   */
  Note?: NoteUpdate;

  /**
   * <p>The updated record state for the finding.</p>
   */
  RecordState?: RecordState | string;
}

export namespace UpdateFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFindingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateFindingsResponse {}

export namespace UpdateFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFindingsResponse): any => ({
    ...obj,
  });
}

export interface UpdateInsightRequest {
  /**
   * <p>The ARN of the insight that you want to update.</p>
   */
  InsightArn: string | undefined;

  /**
   * <p>The updated name for the insight.</p>
   */
  Name?: string;

  /**
   * <p>The updated filters that define this insight.</p>
   */
  Filters?: AwsSecurityFindingFilters;

  /**
   * <p>The updated <code>GroupBy</code> attribute that defines this insight.</p>
   */
  GroupByAttribute?: string;
}

export namespace UpdateInsightRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInsightRequest): any => ({
    ...obj,
  });
}

export interface UpdateInsightResponse {}

export namespace UpdateInsightResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInsightResponse): any => ({
    ...obj,
  });
}

export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>Whether to automatically enable Security Hub for new accounts in the organization.</p>
   *          <p>By default, this is <code>false</code>, and new accounts are not added
   *          automatically.</p>
   *          <p>To automatically enable Security Hub for new accounts, set this to <code>true</code>.</p>
   */
  AutoEnable: boolean | undefined;
}

export namespace UpdateOrganizationConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOrganizationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateOrganizationConfigurationResponse {}

export namespace UpdateOrganizationConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOrganizationConfigurationResponse): any => ({
    ...obj,
  });
}

export interface UpdateSecurityHubConfigurationRequest {
  /**
   * <p>Whether to automatically enable new controls when they are added to standards that are
   *          enabled.</p>
   *          <p>By default, this is set to <code>true</code>, and new controls are enabled
   *          automatically. To not automatically enable new controls, set this to <code>false</code>.
   *       </p>
   */
  AutoEnableControls?: boolean;
}

export namespace UpdateSecurityHubConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityHubConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateSecurityHubConfigurationResponse {}

export namespace UpdateSecurityHubConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityHubConfigurationResponse): any => ({
    ...obj,
  });
}

export interface UpdateStandardsControlRequest {
  /**
   * <p>The ARN of the security standard control to enable or disable.</p>
   */
  StandardsControlArn: string | undefined;

  /**
   * <p>The updated status of the security standard control.</p>
   */
  ControlStatus?: ControlStatus | string;

  /**
   * <p>A description of the reason why you are disabling a security standard control. If you
   *          are disabling a control, then this is required.</p>
   */
  DisabledReason?: string;
}

export namespace UpdateStandardsControlRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStandardsControlRequest): any => ({
    ...obj,
  });
}

export interface UpdateStandardsControlResponse {}

export namespace UpdateStandardsControlResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStandardsControlResponse): any => ({
    ...obj,
  });
}
