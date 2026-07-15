// smithy-typescript generated code
import type {
  AgentInputMessageType,
  AgentOutputMessageType,
  AnalyticsStatus,
  AuthorizationStrategy,
  CmkType,
  DatastoreStatus,
  ErrorCategory,
  FHIRVersion,
  JobStatus,
  NlpStatus,
  PreloadDataType,
  SourceFormat,
  TargetFormat,
  TransformationJobStatus,
  ValidationLevel,
} from "./enums";

/**
 * <p>Identifies an existing data transformation profile and version to clone when creating a new profile.</p>
 * @public
 */
export interface ExistingVersionedProfileSource {
  /**
   * <p>The unique identifier of the existing profile to clone from.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The version number of the existing profile to clone from.</p>
   * @public
   */
  Version: number | undefined;
}

/**
 * <p>Contains raw content to use as the source when creating a data transformation profile directly from a mapping.</p>
 * @public
 */
export interface ProfileMappingSource {
  /**
   * <p>The content as a map of file paths to profile strings.</p>
   * @public
   */
  ProfileMapping: Record<string, string> | undefined;
}

/**
 * <p>Identifies a sample data file in Amazon S3 to use as the source when creating a data transformation profile. Valid only when the source format is Comma-separated values (CSV).</p>
 * @public
 */
export interface SampleDataSource {
  /**
   * <p>The Amazon S3 URI of the sample data file.</p>
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * <p>Identifies a built-in starter profile to use as the source when creating a data transformation profile. Valid only when the source format is Consolidated Clinical Document Architecture (C-CDA).</p>
 * @public
 */
export interface StarterProfileSource {
  /**
   * <p>The name of the built-in starter profile.</p>
   * @public
   */
  StarterProfileName: string | undefined;
}

/**
 * <p>The source for initial content when creating a data transformation profile. Specify exactly one variant: a built-in starter profile, an existing profile version to clone, raw profile content, or a sample data file.</p>
 * @public
 */
export type CreateDataTransformationProfileSource =
  | CreateDataTransformationProfileSource.ExistingVersionedProfileIdMember
  | CreateDataTransformationProfileSource.ProfileMappingMember
  | CreateDataTransformationProfileSource.SampleDataMember
  | CreateDataTransformationProfileSource.StarterProfileMember
  | CreateDataTransformationProfileSource.$UnknownMember;

/**
 * @public
 */
export namespace CreateDataTransformationProfileSource {
  /**
   * <p>Creates the profile from a built-in starter profile. Valid only when the source format is Consolidated Clinical Document Architecture (C-CDA).</p>
   * @public
   */
  export interface StarterProfileMember {
    StarterProfile: StarterProfileSource;
    ExistingVersionedProfileId?: never;
    ProfileMapping?: never;
    SampleData?: never;
    $unknown?: never;
  }

  /**
   * <p>Creates the profile by cloning an existing profile at a specific version.</p>
   * @public
   */
  export interface ExistingVersionedProfileIdMember {
    StarterProfile?: never;
    ExistingVersionedProfileId: ExistingVersionedProfileSource;
    ProfileMapping?: never;
    SampleData?: never;
    $unknown?: never;
  }

  /**
   * <p>Creates the profile from raw profile content that you provide directly. Use this variant for continuous integration and continuous delivery (CI/CD) workflows.</p>
   * @public
   */
  export interface ProfileMappingMember {
    StarterProfile?: never;
    ExistingVersionedProfileId?: never;
    ProfileMapping: ProfileMappingSource;
    SampleData?: never;
    $unknown?: never;
  }

  /**
   * <p>Creates the profile from a sample data file stored in Amazon S3. Valid only when the source format is Comma-separated values (CSV).</p>
   * @public
   */
  export interface SampleDataMember {
    StarterProfile?: never;
    ExistingVersionedProfileId?: never;
    ProfileMapping?: never;
    SampleData: SampleDataSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StarterProfile?: never;
    ExistingVersionedProfileId?: never;
    ProfileMapping?: never;
    SampleData?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    StarterProfile: (value: StarterProfileSource) => T;
    ExistingVersionedProfileId: (value: ExistingVersionedProfileSource) => T;
    ProfileMapping: (value: ProfileMappingSource) => T;
    SampleData: (value: SampleDataSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The request parameters for the <code>CreateDataTransformationProfile</code> operation.</p>
 * @public
 */
export interface CreateDataTransformationProfileRequest {
  /**
   * <p>The source data format that this profile converts from (Consolidated Clinical Document Architecture (C-CDA) or Comma-separated values (CSV)).</p>
   * @public
   */
  SourceFormat: SourceFormat | undefined;

  /**
   * <p>The source for the initial profile content. Specify a built-in starter profile, an existing profile version to clone, raw profile content for CI/CD workflows, or a sample data file in Amazon S3.</p>
   * @public
   */
  Source: CreateDataTransformationProfileSource | undefined;

  /**
   * <p>The AWS Key Management Service (AWS KMS) key identifier used to encrypt the profile content at rest.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>A human-readable description of the profile's purpose.</p>
   * @public
   */
  ProfileDescription?: string | undefined;

  /**
   * <p>A name for the data transformation profile.</p>
   * @public
   */
  ProfileName: string | undefined;

  /**
   * <p>The tags to associate with the profile at creation time.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the service ignores the request but does not return an error.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>The response from the <code>CreateDataTransformationProfile</code> operation.</p>
 * @public
 */
export interface CreateDataTransformationProfileResponse {
  /**
   * <p>The unique identifier of the created profile.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The version number of the newly created profile. The starting version is always 0, which indicates the profile is in DRAFT state.</p>
   * @public
   */
  Version: number | undefined;

  /**
   * <p>The source data format of the profile.</p>
   * @public
   */
  SourceFormat: SourceFormat | undefined;

  /**
   * <p>The target output format. Always <code>FHIR_R4</code>.</p>
   * @public
   */
  TargetFormat: TargetFormat | undefined;

  /**
   * <p>The name of the created profile.</p>
   * @public
   */
  ProfileName: string | undefined;

  /**
   * <p>The timestamp when the profile was last updated.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;
}

/**
 * <p>The request parameters for the <code>DeleteDataTransformationProfile</code> operation.</p>
 * @public
 */
export interface DeleteDataTransformationProfileRequest {
  /**
   * <p>The unique identifier of the profile to delete.</p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * <p>The response from the <code>DeleteDataTransformationProfile</code> operation.</p>
 * @public
 */
export interface DeleteDataTransformationProfileResponse {
  /**
   * <p>The unique identifier of the deleted profile.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The name of the deleted profile.</p>
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * <p>The timestamp when the profile was deleted.</p>
   * @public
   */
  DeletionTime: Date | undefined;
}

/**
 * <p>The request parameters for the <code>GetDataTransformationProfile</code> operation.</p>
 * @public
 */
export interface GetDataTransformationProfileRequest {
  /**
   * <p>The unique identifier of the profile to retrieve.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The version number to retrieve. Specify 0 to retrieve the DRAFT version. If you omit this parameter, the service returns the latest published version.</p>
   * @public
   */
  ProfileVersion?: number | undefined;
}

/**
 * <p>The response from the <code>GetDataTransformationProfile</code> operation.</p>
 * @public
 */
export interface GetDataTransformationProfileResponse {
  /**
   * <p>The unique identifier of the profile.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The version number of the retrieved profile.</p>
   * @public
   */
  Version: number | undefined;

  /**
   * <p>The source data format of the profile.</p>
   * @public
   */
  SourceFormat: SourceFormat | undefined;

  /**
   * <p>The target output format of the profile.</p>
   * @public
   */
  TargetFormat: TargetFormat | undefined;

  /**
   * <p>The profile content as a map of file paths to content strings.</p>
   * @public
   */
  ProfileMapping: Record<string, string> | undefined;

  /**
   * <p>The name of the profile.</p>
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * <p>The description of the profile.</p>
   * @public
   */
  ProfileDescription?: string | undefined;

  /**
   * <p>A description of what changed in this version.</p>
   * @public
   */
  ChangeDescription?: string | undefined;

  /**
   * <p>The timestamp when this version was last updated.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;
}

/**
 * <p>The request parameters for the <code>ListDataTransformationProfiles</code> operation.</p>
 * @public
 */
export interface ListDataTransformationProfilesRequest {
  /**
   * <p>Filters the results by source data format.</p>
   * @public
   */
  SourceFormat: SourceFormat | undefined;

  /**
   * <p>The maximum number of profiles to return per page. If you don't specify a value, the service returns up to 100 results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token from a previous response. Pass this value to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a data transformation profile. To retrieve profile content, call <code>GetDataTransformationProfile</code>.</p>
 * @public
 */
export interface DataTransformationProfileSummary {
  /**
   * <p>The unique identifier of the profile.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The latest version number of the profile.</p>
   * @public
   */
  Version: number | undefined;

  /**
   * <p>The source data format that this profile converts from.</p>
   * @public
   */
  SourceFormat: SourceFormat | undefined;

  /**
   * <p>The target output format of the profile.</p>
   * @public
   */
  TargetFormat: TargetFormat | undefined;

  /**
   * <p>The name of the profile.</p>
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * <p>A description of the profile's purpose.</p>
   * @public
   */
  ProfileDescription?: string | undefined;

  /**
   * <p>The timestamp when the profile was last updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;
}

/**
 * <p>The response from the <code>ListDataTransformationProfiles</code> operation.</p>
 * @public
 */
export interface ListDataTransformationProfilesResponse {
  /**
   * <p>The list of data transformation profile summaries.</p>
   * @public
   */
  Items: DataTransformationProfileSummary[] | undefined;

  /**
   * <p>The pagination token to use in the next request. If this value is <code>null</code>, there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The request parameters for the <code>ListDataTransformationProfileVersions</code> operation.</p>
 * @public
 */
export interface ListDataTransformationProfileVersionsRequest {
  /**
   * <p>The unique identifier of the profile whose versions to list.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The maximum number of profile versions to return per page. If you don't specify a value, the service returns up to 100 results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token from a previous response. Pass this value to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a specific version of a data transformation profile. To retrieve profile content, call <code>GetDataTransformationProfile</code>.</p>
 * @public
 */
export interface DataTransformationProfileVersionSummary {
  /**
   * <p>The unique identifier of the profile.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The version number.</p>
   * @public
   */
  Version: number | undefined;

  /**
   * <p>The source data format that this profile converts from.</p>
   * @public
   */
  SourceFormat: SourceFormat | undefined;

  /**
   * <p>The target output format of the profile.</p>
   * @public
   */
  TargetFormat: TargetFormat | undefined;

  /**
   * <p>The name of the profile.</p>
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * <p>A description of what changed in this version.</p>
   * @public
   */
  ChangeDescription?: string | undefined;

  /**
   * <p>The timestamp when this version was last updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;
}

/**
 * <p>The response from the <code>ListDataTransformationProfileVersions</code> operation.</p>
 * @public
 */
export interface ListDataTransformationProfileVersionsResponse {
  /**
   * <p>The list of data transformation profile version summaries.</p>
   * @public
   */
  Items: DataTransformationProfileVersionSummary[] | undefined;

  /**
   * <p>The pagination token to use in the next request. If this value is <code>null</code>, there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The request parameters for the <code>PublishDataTransformationProfile</code> operation.</p>
 * @public
 */
export interface PublishDataTransformationProfileRequest {
  /**
   * <p>The unique identifier of the profile to publish.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The source data format of the profile.</p>
   * @public
   */
  SourceFormat: SourceFormat | undefined;

  /**
   * <p>The version number of a previously published version to republish as the new latest version. Use this parameter for rollback scenarios. If you omit this parameter, the service publishes the current DRAFT version.</p>
   * @public
   */
  FromExistingVersion?: number | undefined;

  /**
   * <p>A description of what changed or why this version is being published.</p>
   * @public
   */
  ChangeDescription?: string | undefined;
}

/**
 * <p>The response from the <code>PublishDataTransformationProfile</code> operation.</p>
 * @public
 */
export interface PublishDataTransformationProfileResponse {
  /**
   * <p>The unique identifier of the published profile.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The new version number that was created.</p>
   * @public
   */
  Version: number | undefined;

  /**
   * <p>The source data format of the profile.</p>
   * @public
   */
  SourceFormat: SourceFormat | undefined;

  /**
   * <p>The target output format of the profile.</p>
   * @public
   */
  TargetFormat: TargetFormat | undefined;

  /**
   * <p>The name of the published profile.</p>
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * <p>The timestamp when the profile was last updated.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;
}

/**
 * <p>The Amazon S3 location and source format configuration for input data in a transformation job.</p>
 * @public
 */
export interface TransformationInputDataConfig {
  /**
   * <p>The Amazon S3 URI of the input data to transform.</p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p>The format of the source data files (C-CDA or CSV).</p>
   * @public
   */
  SourceFormat?: SourceFormat | undefined;
}

/**
 * <p>The Amazon S3 output configuration for a data transformation job, including the output location and encryption settings.</p>
 * @public
 */
export interface DataTransformationS3Configuration {
  /**
   * <p>The Amazon S3 URI where AWS HealthLake writes the converted output files.</p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p>The AWS Key Management Service (AWS KMS) key identifier used to encrypt the transformation job output written to Amazon S3.</p>
   * @public
   */
  KmsKeyId: string | undefined;
}

/**
 * <p>The Amazon S3 output location and encryption configuration for a transformation job.</p>
 * @public
 */
export interface TransformationOutputDataConfig {
  /**
   * <p>The Amazon S3 output location and AWS Key Management Service (AWS KMS) encryption configuration.</p>
   * @public
   */
  S3Configuration: DataTransformationS3Configuration | undefined;
}

/**
 * <p>The request parameters for the <code>StartDataTransformationJob</code> operation.</p>
 * @public
 */
export interface StartDataTransformationJobRequest {
  /**
   * <p>The Amazon S3 location and format of the source files to transform.</p>
   * @public
   */
  InputDataConfig: TransformationInputDataConfig | undefined;

  /**
   * <p>The Amazon S3 output location and AWS Key Management Service (AWS KMS) encryption configuration.</p>
   * @public
   */
  OutputDataConfig: TransformationOutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that AWS HealthLake assumes to read from and write to the specified Amazon S3 locations.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the service ignores the request but does not return an error.</p>
   * @public
   */
  ClientToken: string | undefined;

  /**
   * <p>A descriptive name for the data transformation job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The unique identifier of the data transformation profile to use for conversion.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>Specifies whether drift detection is enabled for this job. When enabled, AWS HealthLake writes a drift report to the output Amazon S3 location alongside the converted files.</p>
   * @public
   */
  DriftDetectionEnabled?: boolean | undefined;

  /**
   * <p>Specifies whether FHIR R4 Provenance resource generation is enabled for this transformation job. When provenance is enabled, the service also generates related DocumentReference and Device resources. If you don't specify a value, the default is <code>true</code>. To disable provenance output, set this parameter to <code>false</code>.</p>
   * @public
   */
  ProvenanceEnabled?: boolean | undefined;
}

/**
 * <p>The response from the <code>StartDataTransformationJob</code> operation.</p>
 * @public
 */
export interface StartDataTransformationJobResponse {
  /**
   * <p>The unique identifier assigned to the data transformation job.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The initial status of the data transformation job.</p>
   * @public
   */
  JobStatus: TransformationJobStatus | undefined;
}

/**
 * <p>The request parameters for the <code>UpdateDataTransformationProfile</code> operation.</p>
 * @public
 */
export interface UpdateDataTransformationProfileRequest {
  /**
   * <p>The unique identifier of the profile to update.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The new profile content for the DRAFT version. This is a full replacement of all profile files.</p>
   * @public
   */
  ProfileMapping: Record<string, string> | undefined;

  /**
   * <p>A description of what changed in this update.</p>
   * @public
   */
  ChangeDescription?: string | undefined;
}

/**
 * <p>The response from the <code>UpdateDataTransformationProfile</code> operation.</p>
 * @public
 */
export interface UpdateDataTransformationProfileResponse {
  /**
   * <p>The unique identifier of the updated profile.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The source data format of the profile.</p>
   * @public
   */
  SourceFormat: SourceFormat | undefined;

  /**
   * <p>The target output format of the profile.</p>
   * @public
   */
  TargetFormat: TargetFormat | undefined;

  /**
   * <p>The name of the updated profile.</p>
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * <p>The timestamp when the profile was last updated.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;
}

/**
 * <p>Represents a message sent to the agent during chat-based profile customization.</p>
 * @public
 */
export interface AgentInputMessage {
  /**
   * <p>The text of your message to the agent.</p>
   * @public
   */
  Body: string | undefined;

  /**
   * <p>The type of input message, which determines how the agent processes your request. Valid values:</p> <ul> <li> <p> <code>normal</code>: A regular message to the agent.</p> </li> <li> <p> <code>confirmation_response</code>: A response to a confirmation request from the agent.</p> </li> </ul>
   * @public
   */
  Type: AgentInputMessageType | undefined;
}

/**
 * <p>The request parameters for the <code>UpdateProfileWithAgent</code> operation.</p>
 * @public
 */
export interface UpdateProfileWithAgentRequest {
  /**
   * <p>The unique identifier of the profile to update via the agent.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The source data format for the transformation.</p>
   * @public
   */
  SourceFormat: SourceFormat | undefined;

  /**
   * <p>The message to send to the agent.</p>
   * @public
   */
  InputMessage: AgentInputMessage | undefined;

  /**
   * <p>The conversation identifier for multi-turn interactions. Omit to start a new conversation.</p>
   * @public
   */
  ConversationId?: string | undefined;
}

/**
 * <p>Represents a response message from the agent during chat-based profile customization.</p>
 * @public
 */
export interface AgentOutputMessage {
  /**
   * <p>The text of the agent's response.</p>
   * @public
   */
  Body: string | undefined;

  /**
   * <p>The type of output message, which indicates how to interpret the agent's response.</p>
   * @public
   */
  Type: AgentOutputMessageType | undefined;

  /**
   * <p>A list of selectable options presented when the response type is <code>options</code>.</p>
   * @public
   */
  OptionsList?: string[] | undefined;
}

/**
 * <p>The response from the <code>UpdateProfileWithAgent</code> operation.</p>
 * @public
 */
export interface UpdateProfileWithAgentResponse {
  /**
   * <p>The response message from the agent.</p>
   * @public
   */
  AgentResponse: AgentOutputMessage | undefined;

  /**
   * <p>The conversation identifier to use for follow-up messages in this conversation.</p>
   * @public
   */
  ConversationId: string | undefined;
}

/**
 * <p>The analytics configuration for a data store.</p>
 * @public
 */
export interface AnalyticsConfiguration {
  /**
   * <p>The status of the analytics configuration.</p>
   * @public
   */
  Status?: AnalyticsStatus | undefined;
}

/**
 * <p>The identity provider configuration selected when the data store was created.</p>
 * @public
 */
export interface IdentityProviderConfiguration {
  /**
   * <p>The authorization strategy selected when the HealthLake data store is created.</p> <note> <p>HealthLake provides support for both SMART on FHIR V1 and V2 as described below.</p> <ul> <li> <p> <code>SMART_ON_FHIR_V1</code> – Support for only SMART on FHIR V1, which includes <code>read</code> (read/search) and <code>write</code> (create/update/delete) permissions.</p> </li> <li> <p> <code>SMART_ON_FHIR</code> – Support for both SMART on FHIR V1 and V2, which includes <code>create</code>, <code>read</code>, <code>update</code>, <code>delete</code>, and <code>search</code> permissions.</p> </li> <li> <p> <code>AWS_AUTH</code> – The default HealthLake authorization strategy; not affiliated with SMART on FHIR.</p> </li> </ul> </note>
   * @public
   */
  AuthorizationStrategy: AuthorizationStrategy | undefined;

  /**
   * <p>The parameter to enable SMART on FHIR fine-grained authorization for the data store.</p>
   * @public
   */
  FineGrainedAuthorizationEnabled?: boolean | undefined;

  /**
   * <p>The JSON metadata elements to use in your identity provider configuration. Required elements are listed based on the launch specification of the SMART application. For more information on all possible elements, see <a href="https://build.fhir.org/ig/HL7/smart-app-launch/conformance.html#metadata">Metadata</a> in SMART's App Launch specification.</p> <p> <code>authorization_endpoint</code>: The URL to the OAuth2 authorization endpoint.</p> <p> <code>grant_types_supported</code>: An array of grant types that are supported at the token endpoint. You must provide at least one grant type option. Valid options are <code>authorization_code</code> and <code>client_credentials</code>.</p> <p> <code>token_endpoint</code>: The URL to the OAuth2 token endpoint.</p> <p> <code>capabilities</code>: An array of strings of the SMART capabilities that the authorization server supports.</p> <p> <code>code_challenge_methods_supported</code>: An array of strings of supported PKCE code challenge methods. You must include the <code>S256</code> method in the array of PKCE code challenge methods.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function to use to decode the access token created by the authorization server.</p>
   * @public
   */
  IdpLambdaArn?: string | undefined;
}

/**
 * <p>The natural language processing (NLP) configuration for a data store.</p>
 * @public
 */
export interface NlpConfiguration {
  /**
   * <p>The status of the NLP configuration.</p>
   * @public
   */
  Status?: NlpStatus | undefined;
}

/**
 * <p>The input properties for the preloaded (Synthea) data store.</p>
 * @public
 */
export interface PreloadDataConfig {
  /**
   * <p>The type of preloaded data. Only Synthea preloaded data is supported.</p>
   * @public
   */
  PreloadDataType: PreloadDataType | undefined;
}

/**
 * <p>The profile configuration for a data store.</p>
 * @public
 */
export interface ProfileConfiguration {
  /**
   * <p>The list of default profiles for the data store.</p>
   * @public
   */
  DefaultProfiles?: string[] | undefined;
}

/**
 * <p>The customer-managed-key (CMK) used when creating a data store. If a customer-owned key is not specified, an AWS-owned key is used for encryption. </p>
 * @public
 */
export interface KmsEncryptionConfig {
  /**
   * <p>The type of customer-managed-key (CMK) used for encryption.</p>
   * @public
   */
  CmkType: CmkType | undefined;

  /**
   * <p>The Key Management Service (KMS) encryption key id/alias used to encrypt the data store contents at rest.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * <p>The server-side encryption key configuration for a customer-provided encryption key.</p>
 * @public
 */
export interface SseConfiguration {
  /**
   * <p>The Key Management Service (KMS) encryption configuration used to provide details for data encryption.</p>
   * @public
   */
  KmsEncryptionConfig: KmsEncryptionConfig | undefined;
}

/**
 * <p>A label consisting of a user-defined key and value. The form for tags is \{"Key", "Value"\}</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key portion of a tag. Tag keys are case sensitive. </p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p> The value portion of a tag. Tag values are case-sensitive.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateFHIRDatastoreRequest {
  /**
   * <p>The data store name (user-generated).</p>
   * @public
   */
  DatastoreName?: string | undefined;

  /**
   * <p>The FHIR release version supported by the data store. Current support is for version <code>R4</code>.</p>
   * @public
   */
  DatastoreTypeVersion: FHIRVersion | undefined;

  /**
   * <p>The server-side encryption key configuration for a customer-provided encryption key specified for creating a data store. </p>
   * @public
   */
  SseConfiguration?: SseConfiguration | undefined;

  /**
   * <p>An optional parameter to preload (import) open source Synthea FHIR data upon creation of the data store.</p>
   * @public
   */
  PreloadDataConfig?: PreloadDataConfig | undefined;

  /**
   * <p>An optional user-provided token to ensure API idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The resource tags applied to a data store when it is created.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The identity provider configuration to use for the data store.</p>
   * @public
   */
  IdentityProviderConfiguration?: IdentityProviderConfiguration | undefined;

  /**
   * <p>The analytics configuration for the data store.</p>
   * @public
   */
  AnalyticsConfiguration?: AnalyticsConfiguration | undefined;

  /**
   * <p>The natural language processing (NLP) configuration for the data store.</p>
   * @public
   */
  NlpConfiguration?: NlpConfiguration | undefined;

  /**
   * <p>The profile configuration for the data store.</p>
   * @public
   */
  ProfileConfiguration?: ProfileConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateFHIRDatastoreResponse {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the data store.</p>
   * @public
   */
  DatastoreArn: string | undefined;

  /**
   * <p>The data store status.</p>
   * @public
   */
  DatastoreStatus: DatastoreStatus | undefined;

  /**
   * <p>The AWS endpoint created for the data store.</p>
   * @public
   */
  DatastoreEndpoint: string | undefined;
}

/**
 * <p>The filters applied to a data store query.</p>
 * @public
 */
export interface DatastoreFilter {
  /**
   * <p>Filter data store results by name.</p>
   * @public
   */
  DatastoreName?: string | undefined;

  /**
   * <p>Filter data store results by status.</p>
   * @public
   */
  DatastoreStatus?: DatastoreStatus | undefined;

  /**
   * <p>Filter to set cutoff dates for records. All data stores created before the specified date are included in the results. </p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>Filter to set cutoff dates for records. All data stores created after the specified date are included in the results.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;
}

/**
 * <p>The error information for <code>CreateFHIRDatastore</code> and <code>DeleteFHIRDatastore</code> actions.</p>
 * @public
 */
export interface ErrorCause {
  /**
   * <p>The error message text for <code>ErrorCause</code>.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The error category for <code>ErrorCause</code>.</p>
   * @public
   */
  ErrorCategory?: ErrorCategory | undefined;
}

/**
 * <p>The data store properties.</p>
 * @public
 */
export interface DatastoreProperties {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) used in the creation of the data store.</p>
   * @public
   */
  DatastoreArn: string | undefined;

  /**
   * <p>The data store name.</p>
   * @public
   */
  DatastoreName?: string | undefined;

  /**
   * <p>The data store status.</p>
   * @public
   */
  DatastoreStatus: DatastoreStatus | undefined;

  /**
   * <p>The time the data store was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The FHIR release version supported by the data store. Current support is for version <code>R4</code>.</p>
   * @public
   */
  DatastoreTypeVersion: FHIRVersion | undefined;

  /**
   * <p>The AWS endpoint for the data store.</p>
   * @public
   */
  DatastoreEndpoint: string | undefined;

  /**
   * <p> The server-side encryption key configuration for a customer provided encryption key.</p>
   * @public
   */
  SseConfiguration?: SseConfiguration | undefined;

  /**
   * <p>The preloaded Synthea data configuration for the data store.</p>
   * @public
   */
  PreloadDataConfig?: PreloadDataConfig | undefined;

  /**
   * <p>The identity provider selected during data store creation.</p>
   * @public
   */
  IdentityProviderConfiguration?: IdentityProviderConfiguration | undefined;

  /**
   * <p>The error cause for the current data store operation.</p>
   * @public
   */
  ErrorCause?: ErrorCause | undefined;

  /**
   * <p>The natural language processing (NLP) configuration for the data store.</p>
   * @public
   */
  NlpConfiguration?: NlpConfiguration | undefined;

  /**
   * <p>The analytics configuration for the data store.</p>
   * @public
   */
  AnalyticsConfiguration?: AnalyticsConfiguration | undefined;

  /**
   * <p>The profile configuration for the data store.</p>
   * @public
   */
  ProfileConfiguration?: ProfileConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteFHIRDatastoreRequest {
  /**
   * <p> The AWS-generated identifier for the data store to be deleted.</p>
   * @public
   */
  DatastoreId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFHIRDatastoreResponse {
  /**
   * <p>The AWS-generated ID for the deleted data store.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that grants access permission to AWS HealthLake.</p>
   * @public
   */
  DatastoreArn: string | undefined;

  /**
   * <p>The data store status.</p>
   * @public
   */
  DatastoreStatus: DatastoreStatus | undefined;

  /**
   * <p>The AWS endpoint of the data store to be deleted.</p>
   * @public
   */
  DatastoreEndpoint: string | undefined;
}

/**
 * <p>The request parameters for the <code>DescribeDataTransformationJob</code> operation.</p>
 * @public
 */
export interface DescribeDataTransformationJobRequest {
  /**
   * <p>The unique identifier of the data transformation job to describe.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>Contains progress metrics for a data transformation job, including counts of files scanned, converted, and failed.</p>
 * @public
 */
export interface TransformationJobProgressReport {
  /**
   * <p>The total number of source files scanned by the job.</p>
   * @public
   */
  TotalFilesScanned: number | undefined;

  /**
   * <p>The total number of source files successfully converted.</p>
   * @public
   */
  TotalFilesConverted: number | undefined;

  /**
   * <p>The total number of source files that failed conversion.</p>
   * @public
   */
  TotalFilesFailed: number | undefined;

  /**
   * <p>The total number of FHIR R4 resources generated across all converted files.</p>
   * @public
   */
  TotalResourcesGenerated: number | undefined;
}

/**
 * <p>Contains the properties of a data transformation job, including its status, configuration, and progress information. You retrieve this structure by calling <code>DescribeDataTransformationJob</code>.</p>
 * @public
 */
export interface TransformationJobProperties {
  /**
   * <p>The unique identifier of the data transformation job.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The current status of the data transformation job.</p>
   * @public
   */
  JobStatus: TransformationJobStatus | undefined;

  /**
   * <p>The Amazon S3 location and format of the source files for this job.</p>
   * @public
   */
  InputDataConfig: TransformationInputDataConfig | undefined;

  /**
   * <p>The Amazon S3 location and encryption configuration for the converted output.</p>
   * @public
   */
  OutputDataConfig: TransformationOutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants AWS HealthLake access to the specified Amazon S3 locations. AWS HealthLake assumes this role to read input files and write output files.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The timestamp when the job was submitted.</p>
   * @public
   */
  SubmitTime: Date | undefined;

  /**
   * <p>The name of the data transformation job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The unique identifier of the data transformation profile used for this job.</p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>The name of the data transformation profile used for this job.</p>
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * <p>The version number of the data transformation profile used for this job.</p>
   * @public
   */
  ProfileVersion?: number | undefined;

  /**
   * <p>The timestamp when the job completed or failed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>Specifies whether drift detection is enabled for this job. When enabled, AWS HealthLake writes a drift report to the output Amazon S3 location alongside the converted files.</p>
   * @public
   */
  DriftDetectionEnabled?: boolean | undefined;

  /**
   * <p>Specifies whether FHIR R4 Provenance resource generation is enabled for this transformation job. When provenance is enabled, the service also generates related DocumentReference and Device resources.</p>
   * @public
   */
  ProvenanceEnabled?: boolean | undefined;

  /**
   * <p>An informational message about the job, such as an error description if the job failed.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The progress report for the data transformation job, including counts of files processed and resources generated.</p>
   * @public
   */
  JobProgressReport?: TransformationJobProgressReport | undefined;
}

/**
 * <p>The response from the <code>DescribeDataTransformationJob</code> operation.</p>
 * @public
 */
export interface DescribeDataTransformationJobResponse {
  /**
   * <p>The properties of the data transformation job, including status, configuration, and progress information.</p>
   * @public
   */
  TransformationJobProperties: TransformationJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRDatastoreRequest {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  DatastoreId: string | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRDatastoreResponse {
  /**
   * <p>The data store properties.</p>
   * @public
   */
  DatastoreProperties: DatastoreProperties | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRExportJobRequest {
  /**
   * <p>The data store identifier from which FHIR data is being exported from.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The export job identifier.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>The configuration of the S3 bucket for either an import or export job. This includes assigning access permissions.</p>
 * @public
 */
export interface S3Configuration {
  /**
   * <p>The <code>S3Uri</code> is the user-specified S3 location of the FHIR data to be imported into AWS HealthLake.</p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p>The Key Management Service (KMS) key ID used to access the S3 bucket. </p>
   * @public
   */
  KmsKeyId: string | undefined;
}

/**
 * <p>The output data configuration supplied when the export job was created.</p>
 * @public
 */
export type OutputDataConfig =
  | OutputDataConfig.S3ConfigurationMember
  | OutputDataConfig.$UnknownMember;

/**
 * @public
 */
export namespace OutputDataConfig {
  /**
   * <p>The output data configuration supplied when the export job was created. </p>
   * @public
   */
  export interface S3ConfigurationMember {
    S3Configuration: S3Configuration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    S3Configuration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    S3Configuration: (value: S3Configuration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The properties of a FHIR export job.</p>
 * @public
 */
export interface ExportJobProperties {
  /**
   * <p>The export job identifier.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The export job name.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The export job status.</p>
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * <p>The time the export job was initiated.</p>
   * @public
   */
  SubmitTime: Date | undefined;

  /**
   * <p>The time the export job completed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The data store identifier from which files are being exported.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The output data configuration supplied when the export job was created.</p>
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) used during the initiation of the export job.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>An explanation of any errors that might have occurred during the export job.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRExportJobResponse {
  /**
   * <p>The export job properties.</p>
   * @public
   */
  ExportJobProperties: ExportJobProperties | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRImportJobRequest {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The import job identifier.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p> The import job input properties.</p>
 * @public
 */
export type InputDataConfig =
  | InputDataConfig.S3UriMember
  | InputDataConfig.$UnknownMember;

/**
 * @public
 */
export namespace InputDataConfig {
  /**
   * <p>The <code>S3Uri</code> is the user-specified S3 location of the FHIR data to be imported into AWS HealthLake.</p>
   * @public
   */
  export interface S3UriMember {
    S3Uri: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    S3Uri?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    S3Uri: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The progress report for the import job.</p>
 * @public
 */
export interface JobProgressReport {
  /**
   * <p>The number of files scanned from the S3 input bucket.</p>
   * @public
   */
  TotalNumberOfScannedFiles?: number | undefined;

  /**
   * <p>The size (in MB) of files scanned from the S3 input bucket.</p>
   * @public
   */
  TotalSizeOfScannedFilesInMB?: number | undefined;

  /**
   * <p>The number of files imported.</p>
   * @public
   */
  TotalNumberOfImportedFiles?: number | undefined;

  /**
   * <p>The number of resources scanned from the S3 input bucket.</p>
   * @public
   */
  TotalNumberOfResourcesScanned?: number | undefined;

  /**
   * <p>The number of resources imported.</p>
   * @public
   */
  TotalNumberOfResourcesImported?: number | undefined;

  /**
   * <p>The number of resources that failed due to customer error.</p>
   * @public
   */
  TotalNumberOfResourcesWithCustomerError?: number | undefined;

  /**
   * <p>The number of files that failed to be read from the S3 input bucket due to customer error.</p>
   * @public
   */
  TotalNumberOfFilesReadWithCustomerError?: number | undefined;

  /**
   * The number of non-FHIR files scanned from the S3 input bucket.
   * @public
   */
  TotalNumberOfScannedNonFhirFiles?: number | undefined;

  /**
   * The size (in MB) of non-FHIR files scanned from the S3 input bucket.
   * @public
   */
  TotalSizeOfScannedNonFhirFilesInMB?: number | undefined;

  /**
   * The number of non-FHIR files imported.
   * @public
   */
  TotalNumberOfImportedNonFhirFiles?: number | undefined;

  /**
   * The number of non-FHIR resources scanned from the S3 input bucket.
   * @public
   */
  TotalNumberOfNonFhirResourcesScanned?: number | undefined;

  /**
   * The number of non-FHIR resources imported.
   * @public
   */
  TotalNumberOfNonFhirResourcesImported?: number | undefined;

  /**
   * The number of non-FHIR resources that failed due to customer error.
   * @public
   */
  TotalNumberOfNonFhirResourcesWithCustomerError?: number | undefined;

  /**
   * The number of non-FHIR files that failed to be read from the S3 input bucket due to customer error.
   * @public
   */
  TotalNumberOfNonFhirFilesReadWithCustomerError?: number | undefined;

  /**
   * <p>The transaction rate the import job is processed at.</p>
   * @public
   */
  Throughput?: number | undefined;

  /**
   * Number of CCDA files successfully transformed during the import's
   * transformation phase. Populated only for import jobs that use the
   * two-Step-Function (transformation + ingestion) flow; null for legacy
   * single-SF imports and for pure FHIR imports that skip transformation.
   * @public
   */
  TotalFilesConverted?: number | undefined;

  /**
   * Number of FHIR resources produced by the transformation phase.
   * Populated only for import jobs that use the two-Step-Function flow;
   * null for legacy single-SF imports and for pure FHIR imports.
   * @public
   */
  TotalResourcesGenerated?: number | undefined;
}

/**
 * <p>The import job properties.</p>
 * @public
 */
export interface ImportJobProperties {
  /**
   * <p>The import job identifier.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The import job name.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The import job status.</p>
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * <p>The time the import job was submitted for processing.</p>
   * @public
   */
  SubmitTime: Date | undefined;

  /**
   * <p>The time the import job was completed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The data store identifier. </p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The input data configuration supplied when the import job was created.</p>
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The output data configuration supplied when the export job was created.</p>
   * @public
   */
  JobOutputDataConfig?: OutputDataConfig | undefined;

  /**
   * <p>Displays the progress of the import job, including total resources scanned, total resources imported, and total size of data imported.</p>
   * @public
   */
  JobProgressReport?: JobProgressReport | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that grants AWS HealthLake access to the input data.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>An explanation of any errors that might have occurred during the FHIR import job.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The validation level of the import job.</p>
   * @public
   */
  ValidationLevel?: ValidationLevel | undefined;
}

/**
 * @public
 */
export interface DescribeFHIRImportJobResponse {
  /**
   * <p>The import job properties.</p>
   * @public
   */
  ImportJobProperties: ImportJobProperties | undefined;
}

/**
 * <p>The request parameters for the <code>ListDataTransformationJobs</code> operation.</p>
 * @public
 */
export interface ListDataTransformationJobsRequest {
  /**
   * <p>The maximum number of jobs to return per page. If you don't specify a value, the service returns up to 100 results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token from a previous response. Pass this value to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Filters the results to include only jobs with the specified status.</p>
   * @public
   */
  JobStatus?: TransformationJobStatus | undefined;

  /**
   * <p>Filters the results to include only jobs with the specified name.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>Filters the results to include only jobs submitted at or after this timestamp.</p>
   * @public
   */
  SubmittedAfter?: Date | undefined;

  /**
   * <p>Filters the results to include only jobs submitted at or before this timestamp.</p>
   * @public
   */
  SubmittedBefore?: Date | undefined;
}

/**
 * <p>Contains summary information about a data transformation job. To retrieve full job details, call <code>DescribeDataTransformationJob</code>.</p>
 * @public
 */
export interface TransformationJobSummary {
  /**
   * <p>The unique identifier of the job.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The current status of the job.</p>
   * @public
   */
  JobStatus: TransformationJobStatus | undefined;

  /**
   * <p>The timestamp when the job was submitted.</p>
   * @public
   */
  SubmitTime: Date | undefined;

  /**
   * <p>The name of the job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The timestamp when the job completed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The source data format for this job.</p>
   * @public
   */
  SourceFormat?: SourceFormat | undefined;
}

/**
 * <p>The response from the <code>ListDataTransformationJobs</code> operation.</p>
 * @public
 */
export interface ListDataTransformationJobsResponse {
  /**
   * <p>The list of data transformation job summaries.</p>
   * @public
   */
  Items: TransformationJobSummary[] | undefined;

  /**
   * <p>The pagination token to use in the next request. If this value is <code>null</code>, there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFHIRDatastoresRequest {
  /**
   * <p>List all filters associated with a FHIR data store request.</p>
   * @public
   */
  Filter?: DatastoreFilter | undefined;

  /**
   * <p>The token used to retrieve the next page of data stores when results are paginated.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of data stores returned on a page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFHIRDatastoresResponse {
  /**
   * <p>The properties associated with all listed data stores.</p>
   * @public
   */
  DatastorePropertiesList: DatastoreProperties[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFHIRExportJobsRequest {
  /**
   * <p>Limits the response to the export job with the specified data store ID. </p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>A pagination token used to identify the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Limits the number of results returned for a ListFHIRExportJobs to a maximum quantity specified by the user.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Limits the response to the export job with the specified job name. </p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>Limits the response to export jobs with the specified job status. </p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>Limits the response to FHIR export jobs submitted before a user- specified date.</p>
   * @public
   */
  SubmittedBefore?: Date | undefined;

  /**
   * <p>Limits the response to FHIR export jobs submitted after a user-specified date.</p>
   * @public
   */
  SubmittedAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListFHIRExportJobsResponse {
  /**
   * <p>The properties of listed FHIR export jobs.</p>
   * @public
   */
  ExportJobPropertiesList: ExportJobProperties[] | undefined;

  /**
   * <p>The pagination token used to identify the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFHIRImportJobsRequest {
  /**
   * <p>Limits the response to the import job with the specified data store ID. </p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The pagination token used to identify the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Limits the number of results returned for <code>ListFHIRImportJobs</code> to a maximum quantity specified by the user.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Limits the response to the import job with the specified job name. </p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>Limits the response to the import job with the specified job status. </p>
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * <p>Limits the response to FHIR import jobs submitted before a user- specified date. </p>
   * @public
   */
  SubmittedBefore?: Date | undefined;

  /**
   * <p>Limits the response to FHIR import jobs submitted after a user-specified date.</p>
   * @public
   */
  SubmittedAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListFHIRImportJobsResponse {
  /**
   * <p>The properties for listed import jobs.</p>
   * @public
   */
  ImportJobPropertiesList: ImportJobProperties[] | undefined;

  /**
   * <p>The pagination token used to identify the next page of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the data store to which tags are being added.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Returns a list of tags associated with a data store. </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartFHIRExportJobRequest {
  /**
   * <p>The export job name.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The output data configuration supplied when the export job was started.</p>
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The data store identifier from which files are being exported.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) used during initiation of the export job.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>An optional user provided token used for ensuring API idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartFHIRExportJobResponse {
  /**
   * <p>The export job identifier.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The export job status.</p>
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * <p>The data store identifier from which files are being exported.</p>
   * @public
   */
  DatastoreId?: string | undefined;
}

/**
 * @public
 */
export interface StartFHIRImportJobRequest {
  /**
   * <p>The import job name.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The input properties for the import job request.</p>
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The output data configuration supplied when the export job was created.</p>
   * @public
   */
  JobOutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The data store identifier.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that grants access permission to AWS HealthLake.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The optional user-provided token used for ensuring API idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The validation level of the import job.</p>
   * @public
   */
  ValidationLevel?: ValidationLevel | undefined;

  /**
   * A bounded-length string value.
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * A bounded-length string value.
   * @public
   */
  InputFormat?: string | undefined;

  /**
   * A boolean value.
   * @public
   */
  DriftDetectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface StartFHIRImportJobResponse {
  /**
   * <p>The import job identifier.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The import job status.</p>
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * <p>The data store identifier.</p>
   * @public
   */
  DatastoreId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that grants access to the data store tags are being added to.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The user-specified key and value pair tags being added to a data store.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the data store from which tags are being removed.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The keys for the tags to be removed from the data store.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateFHIRDatastoreRequest {
  /**
   * <p>The data store identifier.</p>
   * @public
   */
  DatastoreId: string | undefined;

  /**
   * <p>The data store name.</p>
   * @public
   */
  DatastoreName?: string | undefined;

  /**
   * <p>The analytics configuration for the data store.</p>
   * @public
   */
  AnalyticsConfiguration?: AnalyticsConfiguration | undefined;

  /**
   * <p>The natural language processing (NLP) configuration for the data store.</p>
   * @public
   */
  NlpConfiguration?: NlpConfiguration | undefined;

  /**
   * <p>The profile configuration for the data store.</p>
   * @public
   */
  ProfileConfiguration?: ProfileConfiguration | undefined;

  /**
   * <p>The identity provider configuration for the data store.</p>
   * @public
   */
  IdentityProviderConfiguration?: IdentityProviderConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateFHIRDatastoreResponse {
  /**
   * <p>The data store properties.</p>
   * @public
   */
  DatastoreProperties: DatastoreProperties | undefined;
}
