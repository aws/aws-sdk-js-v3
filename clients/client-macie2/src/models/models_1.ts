// smithy-typescript generated code
import {
  AllowListCriteria,
  FindingCriteria,
  FindingPublishingFrequency,
  FindingsFilterAction,
  JobStatus,
  MacieStatus,
  RevealConfiguration,
} from "./models_0";

export interface UntagResourceResponse {}

export interface UpdateAllowListRequest {
  /**
   * <p>The criteria that specify the text or text pattern to ignore. The criteria can be the location and name of an S3 object that lists specific text to ignore (s3WordsList), or a regular expression that defines a text pattern to ignore (regex).</p> <p>You can change a list's underlying criteria, such as the name of the S3 object or the regular expression to use. However, you can't change the type from s3WordsList to regex or the other way around.</p>
   */
  criteria: AllowListCriteria | undefined;

  /**
   * <p>A custom description of the allow list. The description can contain as many as 512 characters.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   */
  id: string | undefined;

  /**
   * <p>A custom name for the allow list. The name can contain as many as 128 characters.</p>
   */
  name: string | undefined;
}

export interface UpdateAllowListResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the allow list.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the allow list.</p>
   */
  id?: string;
}

export interface UpdateClassificationJobRequest {
  /**
   * <p>The unique identifier for the classification job.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The new status for the job. Valid values are:</p> <ul><li><p>CANCELLED - Stops the job permanently and cancels it. This value is valid only if the job's current status is IDLE, PAUSED, RUNNING, or USER_PAUSED.</p> <p>If you specify this value and the job's current status is RUNNING, Amazon Macie immediately begins to stop all processing tasks for the job. You can't resume or restart a job after you cancel it.</p></li> <li><p>RUNNING - Resumes the job. This value is valid only if the job's current status is USER_PAUSED.</p> <p>If you paused the job while it was actively running and you specify this value less than 30 days after you paused the job, Macie immediately resumes processing from the point where you paused the job. Otherwise, Macie resumes the job according to the schedule and other settings for the job.</p></li> <li><p>USER_PAUSED - Pauses the job temporarily. This value is valid only if the job's current status is IDLE, PAUSED, or RUNNING. If you specify this value and the job's current status is RUNNING, Macie immediately begins to pause all processing tasks for the job.</p> <p>If you pause a one-time job and you don't resume it within 30 days, the job expires and Macie cancels the job. If you pause a recurring job when its status is RUNNING and you don't resume it within 30 days, the job run expires and Macie cancels the run. To check the expiration date, refer to the UserPausedDetails.jobExpiresAt property.</p></li></ul>
   */
  jobStatus: JobStatus | string | undefined;
}

export interface UpdateClassificationJobResponse {}

export interface UpdateFindingsFilterRequest {
  /**
   * <p>The action to perform on findings that meet the filter criteria (findingCriteria). Valid values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
   */
  action?: FindingsFilterAction | string;

  /**
   * <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  description?: string;

  /**
   * <p>The criteria to use to filter findings.</p>
   */
  findingCriteria?: FindingCriteria;

  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   */
  id: string | undefined;

  /**
   * <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  name?: string;

  /**
   * <p>The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.</p>
   */
  position?: number;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;
}

export interface UpdateFindingsFilterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the filter that was updated.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the filter that was updated.</p>
   */
  id?: string;
}

export interface UpdateMacieSessionRequest {
  /**
   * <p>Specifies how often to publish updates to policy findings for the account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events).</p>
   */
  findingPublishingFrequency?: FindingPublishingFrequency | string;

  /**
   * <p>Specifies a new status for the account. Valid values are: ENABLED, resume all Amazon Macie activities for the account; and, PAUSED, suspend all Macie activities for the account.</p>
   */
  status?: MacieStatus | string;
}

export interface UpdateMacieSessionResponse {}

export interface UpdateMemberSessionRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   */
  id: string | undefined;

  /**
   * <p>Specifies the new status for the account. Valid values are: ENABLED, resume all Amazon Macie activities for the account; and, PAUSED, suspend all Macie activities for the account.</p>
   */
  status: MacieStatus | string | undefined;
}

export interface UpdateMemberSessionResponse {}

export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>Specifies whether to enable Amazon Macie automatically for an account when the account is added to the organization in Organizations.</p>
   */
  autoEnable: boolean | undefined;
}

export interface UpdateOrganizationConfigurationResponse {}

export interface UpdateRevealConfigurationRequest {
  /**
   * <p>The new configuration settings and the status of the configuration for the account.</p>
   */
  configuration: RevealConfiguration | undefined;
}

export interface UpdateRevealConfigurationResponse {
  /**
   * <p>The new configuration settings and the status of the configuration for the account.</p>
   */
  configuration?: RevealConfiguration;
}

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAllowListRequestFilterSensitiveLog = (obj: UpdateAllowListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAllowListResponseFilterSensitiveLog = (obj: UpdateAllowListResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClassificationJobRequestFilterSensitiveLog = (obj: UpdateClassificationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClassificationJobResponseFilterSensitiveLog = (obj: UpdateClassificationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFindingsFilterRequestFilterSensitiveLog = (obj: UpdateFindingsFilterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFindingsFilterResponseFilterSensitiveLog = (obj: UpdateFindingsFilterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMacieSessionRequestFilterSensitiveLog = (obj: UpdateMacieSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMacieSessionResponseFilterSensitiveLog = (obj: UpdateMacieSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMemberSessionRequestFilterSensitiveLog = (obj: UpdateMemberSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMemberSessionResponseFilterSensitiveLog = (obj: UpdateMemberSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateOrganizationConfigurationRequestFilterSensitiveLog = (
  obj: UpdateOrganizationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateOrganizationConfigurationResponseFilterSensitiveLog = (
  obj: UpdateOrganizationConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRevealConfigurationRequestFilterSensitiveLog = (obj: UpdateRevealConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRevealConfigurationResponseFilterSensitiveLog = (obj: UpdateRevealConfigurationResponse): any => ({
  ...obj,
});
