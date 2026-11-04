// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  BaselineOperationStatus,
  BaselineOperationType,
  ControlOperationStatus,
  ControlOperationType,
  DriftStatus,
  EnabledBaselineDriftStatus,
  EnablementStatus,
  LandingZoneDriftStatus,
  LandingZoneOperationStatus,
  LandingZoneOperationType,
  LandingZoneStatus,
  RemediationType,
} from "./enums";

/**
 * @public
 */
export interface GetBaselineOperationInput {
  /**
   * The operation ID returned from mutating asynchronous APIs (Enable, Disable, Update, Reset).
   *
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * An object of shape `BaselineOperation`, returning details about the specified `Baseline` operation ID.
 *
 * @public
 */
export interface BaselineOperation {
  /**
   * The identifier of the specified operation.
   *
   * @public
   */
  operationIdentifier?: string | undefined;

  /**
   * An enumerated type (`enum`) with possible values of `ENABLE_BASELINE`, `DISABLE_BASELINE`, `UPDATE_ENABLED_BASELINE`, or `RESET_ENABLED_BASELINE`.
   *
   * @public
   */
  operationType?: BaselineOperationType | undefined;

  /**
   * An enumerated type (`enum`) with possible values of `SUCCEEDED`, `FAILED`, or `IN_PROGRESS`.
   *
   * @public
   */
  status?: BaselineOperationStatus | undefined;

  /**
   * The start time of the operation, in ISO 8601 format.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time of the operation (if applicable), in ISO 8601 format.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * A status message that gives more information about the operation's status, if applicable.
   *
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetBaselineOperationOutput {
  /**
   * A `baselineOperation` object that shows information about the specified operation ID.
   *
   * @public
   */
  baselineOperation: BaselineOperation | undefined;
}

/**
 * @public
 */
export interface GetBaselineInput {
  /**
   * The ARN of the `Baseline` resource to be retrieved.
   *
   * @public
   */
  baselineIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetBaselineOutput {
  /**
   * The baseline ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A user-friendly name for the baseline.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the baseline.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListBaselinesInput {
  /**
   * A pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to be shown.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Returns a summary of information about a `Baseline` object.
 *
 * @public
 */
export interface BaselineSummary {
  /**
   * The full ARN of a Baseline.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The human-readable name of a Baseline.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A summary description of a Baseline.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListBaselinesOutput {
  /**
   * A list of `Baseline` object details.
   *
   * @public
   */
  baselines: BaselineSummary[] | undefined;

  /**
   * A pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetControlOperationInput {
  /**
   * The ID of the asynchronous operation, which is used to track status. The operation is available for 90 days.
   *
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * An operation performed by the control.
 *
 * @public
 */
export interface ControlOperation {
  /**
   * One of `ENABLE_CONTROL` or `DISABLE_CONTROL`.
   *
   * @public
   */
  operationType?: ControlOperationType | undefined;

  /**
   * The time that the operation began.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The time that the operation finished.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * One of `IN_PROGRESS`, `SUCEEDED`, or `FAILED`.
   *
   * @public
   */
  status?: ControlOperationStatus | undefined;

  /**
   * If the operation result is `FAILED`, this string contains a message explaining why the operation failed.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The identifier of the specified operation.
   *
   * @public
   */
  operationIdentifier?: string | undefined;

  /**
   * The `controlIdentifier` of the control for the operation.
   *
   * @public
   */
  controlIdentifier?: string | undefined;

  /**
   * The target upon which the control operation is working.
   *
   * @public
   */
  targetIdentifier?: string | undefined;

  /**
   * The `controlIdentifier` of the enabled control.
   *
   * @public
   */
  enabledControlIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface GetControlOperationOutput {
  /**
   * An operation performed by the control.
   *
   * @public
   */
  controlOperation: ControlOperation | undefined;
}

/**
 * A filter object that lets you call `ListControlOperations` with a specific filter.
 *
 * @public
 */
export interface ControlOperationFilter {
  /**
   * The set of `controlIdentifier` returned by the filter.
   *
   * @public
   */
  controlIdentifiers?: string[] | undefined;

  /**
   * The set of `targetIdentifier` objects returned by the filter.
   *
   * @public
   */
  targetIdentifiers?: string[] | undefined;

  /**
   * The set `controlIdentifier` of enabled controls selected by the filter.
   *
   * @public
   */
  enabledControlIdentifiers?: string[] | undefined;

  /**
   * Lists the status of control operations.
   *
   * @public
   */
  statuses?: ControlOperationStatus[] | undefined;

  /**
   * The set of `ControlOperation` objects returned by the filter.
   *
   * @public
   */
  controlOperationTypes?: ControlOperationType[] | undefined;
}

/**
 * @public
 */
export interface ListControlOperationsInput {
  /**
   * An input filter for the `ListControlOperations` API that lets you select the types of control operations to view.
   *
   * @public
   */
  filter?: ControlOperationFilter | undefined;

  /**
   * A pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to be shown.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A summary of information about the specified control operation.
 *
 * @public
 */
export interface ControlOperationSummary {
  /**
   * The type of operation.
   *
   * @public
   */
  operationType?: ControlOperationType | undefined;

  /**
   * The time at which a control operation began.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The time at which the control operation was completed.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The status of the specified control operation.
   *
   * @public
   */
  status?: ControlOperationStatus | undefined;

  /**
   * A speficic message displayed as part of the control status.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The unique identifier of a control operation.
   *
   * @public
   */
  operationIdentifier?: string | undefined;

  /**
   * The `controlIdentifier` of a control.
   *
   * @public
   */
  controlIdentifier?: string | undefined;

  /**
   * The unique identifier of the target of a control operation.
   *
   * @public
   */
  targetIdentifier?: string | undefined;

  /**
   * The `controlIdentifier` of an enabled control.
   *
   * @public
   */
  enabledControlIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface ListControlOperationsOutput {
  /**
   * Returns a list of output from control operations.
   *
   * @public
   */
  controlOperations: ControlOperationSummary[] | undefined;

  /**
   * A pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisableControlInput {
  /**
   * The ARN of the control. Only **Strongly recommended** and **Elective** controls are permitted, with the exception of the **Region deny** control. For information on how to find the `controlIdentifier`, see [the overview page](https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html).
   *
   * @public
   */
  controlIdentifier?: string | undefined;

  /**
   * The ARN of the organizational unit. For information on how to find the `targetIdentifier`, see [the overview page](https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html).
   *
   * @public
   */
  targetIdentifier?: string | undefined;

  /**
   * The ARN of the enabled control to be disabled, which uniquely identifies the control instance on the target organizational unit.
   *
   * @public
   */
  enabledControlIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DisableControlOutput {
  /**
   * The ID of the asynchronous operation, which is used to track status. The operation is available for 90 days.
   *
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DisableBaselineInput {
  /**
   * Identifier of the `EnabledBaseline` resource to be deactivated, in ARN format.
   *
   * @public
   */
  enabledBaselineIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DisableBaselineOutput {
  /**
   * The ID (in UUID format) of the asynchronous `DisableBaseline` operation. This `operationIdentifier` is used to track status through calls to the `GetBaselineOperation` API.
   *
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * A key-value parameter to an `EnabledBaseline` resource.
 *
 * @public
 */
export interface EnabledBaselineParameter {
  /**
   * A string denoting the parameter key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * A low-level `Document` object of any type (for example, a Java Object).
   *
   * @public
   */
  value: __DocumentType | undefined;
}

/**
 * @public
 */
export interface EnableBaselineInput {
  /**
   * The specific version to be enabled of the specified baseline.
   *
   * @public
   */
  baselineVersion: string | undefined;

  /**
   * A list of `key-value` objects that specify enablement parameters, where `key` is a string and `value` is a document of any type.
   *
   * @public
   */
  parameters?: EnabledBaselineParameter[] | undefined;

  /**
   * The ARN of the baseline to be enabled.
   *
   * @public
   */
  baselineIdentifier: string | undefined;

  /**
   * The ARN of the target on which the baseline will be enabled. Only OUs are supported as targets.
   *
   * @public
   */
  targetIdentifier: string | undefined;

  /**
   * Tags associated with input to `EnableBaseline`.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface EnableBaselineOutput {
  /**
   * The ID (in UUID format) of the asynchronous `EnableBaseline` operation. This `operationIdentifier` is used to track status through calls to the `GetBaselineOperation` API.
   *
   * @public
   */
  operationIdentifier: string | undefined;

  /**
   * The ARN of the `EnabledBaseline` resource.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetEnabledBaselineInput {
  /**
   * Identifier of the `EnabledBaseline` resource to be retrieved, in ARN format.
   *
   * @public
   */
  enabledBaselineIdentifier: string | undefined;
}

/**
 * The inheritance drift summary for the enabled baseline. Inheritance drift occurs when any accounts in the target OU do not match the baseline configuration defined on that OU.
 *
 * @public
 */
export interface EnabledBaselineInheritanceDrift {
  /**
   * The inheritance drift status for enabled baselines.
   *
   * @public
   */
  status?: EnabledBaselineDriftStatus | undefined;
}

/**
 * The types of drift that can be detected for an enabled baseline.
 *
 * - Amazon Web Services Control Tower detects inheritance drift on the enabled baselines that target OUs: `AWSControlTowerBaseline` and `BackupBaseline`.
 * - Amazon Web Services Control Tower does not detect drift on the baselines that apply to your landing zone: `IdentityCenterBaseline`, `AuditBaseline`, `LogArchiveBaseline`, `BackupCentralVaultBaseline`, or `BackupAdminBaseline`. For more information, see [Types of baselines](https://docs.aws.amazon.com/controltower/latest/userguide/types-of-baselines.html).
 *
 * Baselines enabled on an OU are inherited by its member accounts as child `EnabledBaseline` resources. The baseline on the OU serves as the parent `EnabledBaseline`, which governs the configuration of each child `EnabledBaseline`.
 *
 * If the baseline configuration of a member account in an OU does not match the configuration of the parent OU, the parent and child baseline is in a state of inheritance drift. This drift could occur in the `AWSControlTowerBaseline` or the `BackupBaseline` related to that account.
 *
 * @public
 */
export interface EnabledBaselineDriftTypes {
  /**
   * At least one account within the target OU does not match the baseline configuration defined on that OU. An account is in inheritance drift when it does not match the configuration of a parent OU, possibly a new parent OU, if the account is moved.
   *
   * @public
   */
  inheritance?: EnabledBaselineInheritanceDrift | undefined;
}

/**
 * The drift summary of the enabled baseline. Amazon Web Services Control Tower reports inheritance drift when an enabled baseline configuration of a member account is different than the configuration that applies to the OU. Amazon Web Services Control Tower reports this type of drift for a parent or child enabled baseline. One way to repair this drift by resetting the parent enabled baseline, on the OU.
 *
 * For example, you may see this type of drift if you move accounts between OUs, but the accounts are not yet (re-)enrolled.
 *
 * @public
 */
export interface EnabledBaselineDriftStatusSummary {
  /**
   * The types of drift that can be detected for an enabled baseline. Amazon Web Services Control Tower detects inheritance drift on enabled baselines that apply at the OU level.
   *
   * @public
   */
  types?: EnabledBaselineDriftTypes | undefined;
}

/**
 * Summary of an applied parameter to an `EnabledBaseline` resource.
 *
 * @public
 */
export interface EnabledBaselineParameterSummary {
  /**
   * A string denoting the parameter key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * A low-level document object of any type (for example, a Java Object).
   *
   * @public
   */
  value: __DocumentType | undefined;
}

/**
 * The deployment summary of an `EnabledControl` or `EnabledBaseline` resource.
 *
 * @public
 */
export interface EnablementStatusSummary {
  /**
   * The deployment status of the enabled resource.
   *
   * Valid values:
   *
   * - `SUCCEEDED`: The `EnabledControl` or `EnabledBaseline` configuration was deployed successfully.
   * - `UNDER_CHANGE`: The `EnabledControl` or `EnabledBaseline` configuration is changing.
   * - `FAILED`: The `EnabledControl` or `EnabledBaseline` configuration failed to deploy.
   *
   * @public
   */
  status?: EnablementStatus | undefined;

  /**
   * The last operation identifier for the enabled resource.
   *
   * @public
   */
  lastOperationIdentifier?: string | undefined;
}

/**
 * Details of the `EnabledBaseline` resource.
 *
 * @public
 */
export interface EnabledBaselineDetails {
  /**
   * The ARN of the `EnabledBaseline` resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The specific `Baseline` enabled as part of the `EnabledBaseline` resource.
   *
   * @public
   */
  baselineIdentifier: string | undefined;

  /**
   * The enabled version of the `Baseline`.
   *
   * @public
   */
  baselineVersion?: string | undefined;

  /**
   * The drift status of the enabled baseline.
   *
   * @public
   */
  driftStatusSummary?: EnabledBaselineDriftStatusSummary | undefined;

  /**
   * The target on which to enable the `Baseline`.
   *
   * @public
   */
  targetIdentifier: string | undefined;

  /**
   * An ARN that represents the parent `EnabledBaseline` at the Organizational Unit (OU) level, from which the child `EnabledBaseline` inherits its configuration. The value is returned by `GetEnabledBaseline`.
   *
   * @public
   */
  parentIdentifier?: string | undefined;

  /**
   * The deployment summary of an `EnabledControl` or `EnabledBaseline` resource.
   *
   * @public
   */
  statusSummary: EnablementStatusSummary | undefined;

  /**
   * Shows the parameters that are applied when enabling this `Baseline`.
   *
   * @public
   */
  parameters?: EnabledBaselineParameterSummary[] | undefined;
}

/**
 * @public
 */
export interface GetEnabledBaselineOutput {
  /**
   * Details of the `EnabledBaseline` resource.
   *
   * @public
   */
  enabledBaselineDetails?: EnabledBaselineDetails | undefined;
}

/**
 * A filter applied on the `ListEnabledBaseline` operation. Allowed filters are `baselineIdentifiers` and `targetIdentifiers`. The filter can be applied for either, or both.
 *
 * @public
 */
export interface EnabledBaselineFilter {
  /**
   * Identifiers for the targets of the `Baseline` filter operation.
   *
   * @public
   */
  targetIdentifiers?: string[] | undefined;

  /**
   * Identifiers for the `Baseline` objects returned as part of the filter operation.
   *
   * @public
   */
  baselineIdentifiers?: string[] | undefined;

  /**
   * An optional filter that sets up a list of `parentIdentifiers` to filter the results of the `ListEnabledBaseline` output.
   *
   * @public
   */
  parentIdentifiers?: string[] | undefined;

  /**
   * A list of `EnablementStatus` items.
   *
   * @public
   */
  statuses?: EnablementStatus[] | undefined;

  /**
   * A list of `EnabledBaselineDriftStatus` items for enabled baselines.
   *
   * @public
   */
  inheritanceDriftStatuses?: EnabledBaselineDriftStatus[] | undefined;
}

/**
 * @public
 */
export interface ListEnabledBaselinesInput {
  /**
   * A filter applied on the `ListEnabledBaseline` operation. Allowed filters are `baselineIdentifiers` and `targetIdentifiers`. The filter can be applied for either, or both.
   *
   * @public
   */
  filter?: EnabledBaselineFilter | undefined;

  /**
   * A pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to be shown.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A value that can be set to include the child enabled baselines in responses. The default value is false.
   *
   * @public
   */
  includeChildren?: boolean | undefined;
}

/**
 * Returns a summary of information about an `EnabledBaseline` object.
 *
 * @public
 */
export interface EnabledBaselineSummary {
  /**
   * The ARN of the `EnabledBaseline` resource
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The specific baseline that is enabled as part of the `EnabledBaseline` resource.
   *
   * @public
   */
  baselineIdentifier: string | undefined;

  /**
   * The enabled version of the baseline.
   *
   * @public
   */
  baselineVersion?: string | undefined;

  /**
   * The drift status of the enabled baseline.
   *
   * @public
   */
  driftStatusSummary?: EnabledBaselineDriftStatusSummary | undefined;

  /**
   * The target upon which the baseline is enabled.
   *
   * @public
   */
  targetIdentifier: string | undefined;

  /**
   * An ARN that represents an object returned by `ListEnabledBaseline`, to describe an enabled baseline.
   *
   * @public
   */
  parentIdentifier?: string | undefined;

  /**
   * The deployment summary of an `EnabledControl` or `EnabledBaseline` resource.
   *
   * @public
   */
  statusSummary: EnablementStatusSummary | undefined;
}

/**
 * @public
 */
export interface ListEnabledBaselinesOutput {
  /**
   * Retuens a list of summaries of `EnabledBaseline` resources.
   *
   * @public
   */
  enabledBaselines: EnabledBaselineSummary[] | undefined;

  /**
   * A pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ResetEnabledBaselineInput {
  /**
   * Specifies the ID of the `EnabledBaseline` resource to be re-enabled, in ARN format.
   *
   * @public
   */
  enabledBaselineIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ResetEnabledBaselineOutput {
  /**
   * The ID (in UUID format) of the asynchronous `ResetEnabledBaseline` operation. This `operationIdentifier` is used to track status through calls to the `GetBaselineOperation` API.
   *
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnabledBaselineInput {
  /**
   * Specifies the new `Baseline` version, to which the `EnabledBaseline` should be updated.
   *
   * @public
   */
  baselineVersion: string | undefined;

  /**
   * Parameters to apply when making an update.
   *
   * @public
   */
  parameters?: EnabledBaselineParameter[] | undefined;

  /**
   * Specifies the `EnabledBaseline` resource to be updated.
   *
   * @public
   */
  enabledBaselineIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnabledBaselineOutput {
  /**
   * The ID (in UUID format) of the asynchronous `UpdateEnabledBaseline` operation. This `operationIdentifier` is used to track status through calls to the `GetBaselineOperation` API.
   *
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * A key/value pair, where `Key` is of type `String` and `Value` is of type `Document`.
 *
 * @public
 */
export interface EnabledControlParameter {
  /**
   * The key of a key/value pair.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of a key/value pair.
   *
   * @public
   */
  value: __DocumentType | undefined;
}

/**
 * @public
 */
export interface EnableControlInput {
  /**
   * The ARN of the control. Only **Strongly recommended** and **Elective** controls are permitted, with the exception of the **Region deny** control. For information on how to find the `controlIdentifier`, see [the overview page](https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html).
   *
   * @public
   */
  controlIdentifier: string | undefined;

  /**
   * The ARN of the organizational unit. For information on how to find the `targetIdentifier`, see [the overview page](https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html).
   *
   * @public
   */
  targetIdentifier: string | undefined;

  /**
   * Tags to be applied to the `EnabledControl` resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A list of input parameter values, which are specified to configure the control when you enable it.
   *
   * @public
   */
  parameters?: EnabledControlParameter[] | undefined;
}

/**
 * @public
 */
export interface EnableControlOutput {
  /**
   * The ID of the asynchronous operation, which is used to track status. The operation is available for 90 days.
   *
   * @public
   */
  operationIdentifier: string | undefined;

  /**
   * The ARN of the `EnabledControl` resource.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetEnabledControlInput {
  /**
   * The `controlIdentifier` of the enabled control.
   *
   * @public
   */
  enabledControlIdentifier: string | undefined;
}

/**
 * Represents drift information related to control inheritance between organizational units.
 *
 * @public
 */
export interface EnabledControlInheritanceDrift {
  /**
   * The status of inheritance drift for the enabled control, indicating whether inheritance configuration matches expectations.
   *
   * @public
   */
  status?: DriftStatus | undefined;
}

/**
 * Represents drift information related to the underlying Amazon Web Services resources managed by the control.
 *
 * @public
 */
export interface EnabledControlResourceDrift {
  /**
   * The status of resource drift for the enabled control, indicating whether the underlying resources match the expected configuration.
   *
   * @public
   */
  status?: DriftStatus | undefined;
}

/**
 * Defines the various categories of drift that can occur for an enabled control resource.
 *
 * @public
 */
export interface EnabledControlDriftTypes {
  /**
   * Indicates drift related to inheritance configuration between parent and child controls.
   *
   * @public
   */
  inheritance?: EnabledControlInheritanceDrift | undefined;

  /**
   * Indicates drift related to the underlying Amazon Web Services resources managed by the control.
   *
   * @public
   */
  resource?: EnabledControlResourceDrift | undefined;
}

/**
 * The drift summary of the enabled control.
 *
 * Amazon Web Services Control Tower expects the enabled control configuration to include all supported and governed Regions. If the enabled control differs from the expected configuration, it is defined to be in a state of drift. You can repair this drift by resetting the enabled control.
 *
 * @public
 */
export interface DriftStatusSummary {
  /**
   * The drift status of the enabled control.
   *
   * Valid values:
   *
   * - `DRIFTED`: The `enabledControl` deployed in this configuration doesn’t match the configuration that Amazon Web Services Control Tower expected.
   * - `IN_SYNC`: The `enabledControl` deployed in this configuration matches the configuration that Amazon Web Services Control Tower expected.
   * - `NOT_CHECKING`: Amazon Web Services Control Tower does not check drift for this enabled control. Drift is not supported for the control type.
   * - `UNKNOWN`: Amazon Web Services Control Tower is not able to check the drift status for the enabled control.
   *
   * @public
   */
  driftStatus?: DriftStatus | undefined;

  /**
   * An object that categorizes the different types of drift detected for the enabled control.
   *
   * @public
   */
  types?: EnabledControlDriftTypes | undefined;
}

/**
 * Returns a summary of information about the parameters of an enabled control.
 *
 * @public
 */
export interface EnabledControlParameterSummary {
  /**
   * The key of a key/value pair.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of a key/value pair.
   *
   * @public
   */
  value: __DocumentType | undefined;
}

/**
 * An Amazon Web Services Region in which Amazon Web Services Control Tower expects to find the control deployed.
 *
 * The expected Regions are based on the Regions that are governed by the landing zone. In certain cases, a control is not actually enabled in the Region as expected, such as during drift, or [mixed governance](https://docs.aws.amazon.com/controltower/latest/userguide/region-how.html#mixed-governance).
 *
 * @public
 */
export interface Region {
  /**
   * The Amazon Web Services Region name.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Information about the enabled control.
 *
 * @public
 */
export interface EnabledControlDetails {
  /**
   * The ARN of the enabled control.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The control identifier of the enabled control. For information on how to find the `controlIdentifier`, see [the overview page](https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html).
   *
   * @public
   */
  controlIdentifier?: string | undefined;

  /**
   * The ARN of the organizational unit. For information on how to find the `targetIdentifier`, see [the overview page](https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html).
   *
   * @public
   */
  targetIdentifier?: string | undefined;

  /**
   * The deployment summary of the enabled control.
   *
   * @public
   */
  statusSummary?: EnablementStatusSummary | undefined;

  /**
   * The drift status of the enabled control.
   *
   * @public
   */
  driftStatusSummary?: DriftStatusSummary | undefined;

  /**
   * The ARN of the parent enabled control from which this control inherits its configuration, if applicable.
   *
   * @public
   */
  parentIdentifier?: string | undefined;

  /**
   * Target Amazon Web Services Regions for the enabled control.
   *
   * @public
   */
  targetRegions?: Region[] | undefined;

  /**
   * Array of `EnabledControlParameter` objects.
   *
   * @public
   */
  parameters?: EnabledControlParameterSummary[] | undefined;
}

/**
 * @public
 */
export interface GetEnabledControlOutput {
  /**
   * Information about the enabled control.
   *
   * @public
   */
  enabledControlDetails: EnabledControlDetails | undefined;
}

/**
 * A structure that returns a set of control identifiers, the control status for each control in the set, and the drift status for each control in the set.
 *
 * @public
 */
export interface EnabledControlFilter {
  /**
   * The set of `controlIdentifier` returned by the filter.
   *
   * @public
   */
  controlIdentifiers?: string[] | undefined;

  /**
   * A list of `EnablementStatus` items.
   *
   * @public
   */
  statuses?: EnablementStatus[] | undefined;

  /**
   * A list of `DriftStatus` items.
   *
   * @public
   */
  driftStatuses?: DriftStatus[] | undefined;

  /**
   * Filters enabled controls by their parent control identifiers, allowing you to find child controls of specific parent controls.
   *
   * @public
   */
  parentIdentifiers?: string[] | undefined;

  /**
   * Filters enabled controls by their inheritance drift status, allowing you to find controls with specific inheritance-related drift conditions.
   *
   * @public
   */
  inheritanceDriftStatuses?: DriftStatus[] | undefined;

  /**
   * Filters enabled controls by their resource drift status, allowing you to find controls with specific resource-related drift conditions.
   *
   * @public
   */
  resourceDriftStatuses?: DriftStatus[] | undefined;
}

/**
 * @public
 */
export interface ListEnabledControlsInput {
  /**
   * The ARN of the target. The value depends on the target type:
   *
   * - Organizational unit (OU) – Specify the ARN of the OU.
   * - Account – Specify the ARN of the account.
   *
   * For information on how to find the `targetIdentifier`, see [the overview page](https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html).
   *
   * @public
   */
  targetIdentifier?: string | undefined;

  /**
   * The token to continue the list from a previous API call with the same parameters.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * How many results to return per API call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An input filter for the `ListEnabledControls` API that lets you select the types of control operations to view.
   *
   * @public
   */
  filter?: EnabledControlFilter | undefined;

  /**
   * Specifies whether to include enabled controls from child organizational units and child accounts in the response.
   *
   * @public
   */
  includeChildren?: boolean | undefined;
}

/**
 * Returns a summary of information about an enabled control.
 *
 * @public
 */
export interface EnabledControlSummary {
  /**
   * The ARN of the enabled control.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The `controlIdentifier` of the enabled control.
   *
   * @public
   */
  controlIdentifier?: string | undefined;

  /**
   * The ARN of the organizational unit.
   *
   * @public
   */
  targetIdentifier?: string | undefined;

  /**
   * A short description of the status of the enabled control.
   *
   * @public
   */
  statusSummary?: EnablementStatusSummary | undefined;

  /**
   * The drift status of the enabled control.
   *
   * @public
   */
  driftStatusSummary?: DriftStatusSummary | undefined;

  /**
   * The ARN of the parent enabled control from which this control inherits its configuration, if applicable.
   *
   * @public
   */
  parentIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface ListEnabledControlsOutput {
  /**
   * Lists the controls enabled by Amazon Web Services Control Tower on the specified organizational unit and the accounts it contains.
   *
   * @public
   */
  enabledControls: EnabledControlSummary[] | undefined;

  /**
   * Retrieves the next page of results. If the string is empty, the response is the end of the results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ResetEnabledControlInput {
  /**
   * The ARN of the enabled control to be reset.
   *
   * @public
   */
  enabledControlIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ResetEnabledControlOutput {
  /**
   * The operation identifier for this `ResetEnabledControl` operation.
   *
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnabledControlInput {
  /**
   * A key/value pair, where `Key` is of type `String` and `Value` is of type `Document`.
   *
   * @public
   */
  parameters: EnabledControlParameter[] | undefined;

  /**
   * The ARN of the enabled control that will be updated.
   *
   * @public
   */
  enabledControlIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnabledControlOutput {
  /**
   * The operation identifier for this `UpdateEnabledControl` operation.
   *
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetLandingZoneOperationInput {
  /**
   * A unique identifier assigned to a landing zone operation.
   *
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * Information about a landing zone operation.
 *
 * @public
 */
export interface LandingZoneOperationDetail {
  /**
   * The landing zone operation type.
   *
   * Valid values:
   *
   * - `DELETE`: The `DeleteLandingZone` operation.
   * - `CREATE`: The `CreateLandingZone` operation.
   * - `UPDATE`: The `UpdateLandingZone` operation.
   * - `RESET`: The `ResetLandingZone` operation.
   *
   * @public
   */
  operationType?: LandingZoneOperationType | undefined;

  /**
   * The `operationIdentifier` of the landing zone operation.
   *
   * @public
   */
  operationIdentifier?: string | undefined;

  /**
   * Valid values:
   *
   * - `SUCCEEDED`: The landing zone operation succeeded.
   * - `IN_PROGRESS`: The landing zone operation is in progress.
   * - `FAILED`: The landing zone operation failed.
   *
   * @public
   */
  status?: LandingZoneOperationStatus | undefined;

  /**
   * The landing zone operation start time.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The landing zone operation end time.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * If the operation result is FAILED, this string contains a message explaining why the operation failed.
   *
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetLandingZoneOperationOutput {
  /**
   * Details about a landing zone operation.
   *
   * @public
   */
  operationDetails: LandingZoneOperationDetail | undefined;
}

/**
 * A filter object that lets you call `ListLandingZoneOperations` with a specific filter.
 *
 * @public
 */
export interface LandingZoneOperationFilter {
  /**
   * The set of landing zone operation types selected by the filter.
   *
   * @public
   */
  types?: LandingZoneOperationType[] | undefined;

  /**
   * The statuses of the set of landing zone operations selected by the filter.
   *
   * @public
   */
  statuses?: LandingZoneOperationStatus[] | undefined;
}

/**
 * @public
 */
export interface ListLandingZoneOperationsInput {
  /**
   * An input filter for the `ListLandingZoneOperations` API that lets you select the types of landing zone operations to view.
   *
   * @public
   */
  filter?: LandingZoneOperationFilter | undefined;

  /**
   * The token to continue the list from a previous API call with the same parameters.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * How many results to return per API call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Returns a summary of information about a landing zone operation.
 *
 * @public
 */
export interface LandingZoneOperationSummary {
  /**
   * The type of the landing zone operation.
   *
   * @public
   */
  operationType?: LandingZoneOperationType | undefined;

  /**
   * The `operationIdentifier` of the landing zone operation.
   *
   * @public
   */
  operationIdentifier?: string | undefined;

  /**
   * The status of the landing zone operation.
   *
   * @public
   */
  status?: LandingZoneOperationStatus | undefined;
}

/**
 * @public
 */
export interface ListLandingZoneOperationsOutput {
  /**
   * Lists landing zone operations.
   *
   * @public
   */
  landingZoneOperations: LandingZoneOperationSummary[] | undefined;

  /**
   * Retrieves the next page of results. If the string is empty, the response is the end of the results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateLandingZoneInput {
  /**
   * The landing zone version, for example, 3.0.
   *
   * @public
   */
  version: string | undefined;

  /**
   * Specifies the types of remediation actions to apply when creating the landing zone, such as automatic drift correction or compliance enforcement.
   *
   * @public
   */
  remediationTypes?: RemediationType[] | undefined;

  /**
   * Tags to be applied to the landing zone.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The manifest JSON file is a text file that describes your Amazon Web Services resources. For examples, review [Launch your landing zone](https://docs.aws.amazon.com/controltower/latest/userguide/lz-api-launch).
   *
   * @public
   */
  manifest?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface CreateLandingZoneOutput {
  /**
   * The ARN of the landing zone resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A unique identifier assigned to a `CreateLandingZone` operation. You can use this identifier as an input of `GetLandingZoneOperation` to check the operation's status.
   *
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteLandingZoneInput {
  /**
   * The unique identifier of the landing zone.
   *
   * @public
   */
  landingZoneIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteLandingZoneOutput {
  /**
   * &gt;A unique identifier assigned to a `DeleteLandingZone` operation. You can use this identifier as an input parameter of `GetLandingZoneOperation` to check the operation's status.
   *
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetLandingZoneInput {
  /**
   * The unique identifier of the landing zone.
   *
   * @public
   */
  landingZoneIdentifier: string | undefined;
}

/**
 * The drift status summary of the landing zone.
 *
 * If the landing zone differs from the expected configuration, it is defined to be in a state of drift. You can repair this drift by resetting the landing zone.
 *
 * @public
 */
export interface LandingZoneDriftStatusSummary {
  /**
   * The drift status of the landing zone.
   *
   * Valid values:
   *
   * - `DRIFTED`: The landing zone deployed in this configuration does not match the configuration that Amazon Web Services Control Tower expected.
   * - `IN_SYNC`: The landing zone deployed in this configuration matches the configuration that Amazon Web Services Control Tower expected.
   *
   * @public
   */
  status?: LandingZoneDriftStatus | undefined;
}

/**
 * Information about the landing zone.
 *
 * @public
 */
export interface LandingZoneDetail {
  /**
   * The landing zone's current deployed version.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The types of remediation actions configured for the landing zone, such as automatic drift correction or compliance enforcement.
   *
   * @public
   */
  remediationTypes?: RemediationType[] | undefined;

  /**
   * The ARN of the landing zone.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The landing zone deployment status. One of `ACTIVE`, `PROCESSING`, `FAILED`.
   *
   * @public
   */
  status?: LandingZoneStatus | undefined;

  /**
   * The latest available version of the landing zone.
   *
   * @public
   */
  latestAvailableVersion?: string | undefined;

  /**
   * The drift status of the landing zone.
   *
   * @public
   */
  driftStatus?: LandingZoneDriftStatusSummary | undefined;

  /**
   * The landing zone manifest JSON text file that specifies the landing zone configurations.
   *
   * @public
   */
  manifest: __DocumentType | undefined;
}

/**
 * @public
 */
export interface GetLandingZoneOutput {
  /**
   * Information about the landing zone.
   *
   * @public
   */
  landingZone: LandingZoneDetail | undefined;
}

/**
 * @public
 */
export interface ListLandingZonesInput {
  /**
   * The token to continue the list from a previous API call with the same parameters.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of returned landing zone ARNs, which is one.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Returns a summary of information about a landing zone.
 *
 * @public
 */
export interface LandingZoneSummary {
  /**
   * The ARN of the landing zone.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface ListLandingZonesOutput {
  /**
   * The ARN of the landing zone.
   *
   * @public
   */
  landingZones: LandingZoneSummary[] | undefined;

  /**
   * Retrieves the next page of results. If the string is empty, the response is the end of the results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ResetLandingZoneInput {
  /**
   * The unique identifier of the landing zone.
   *
   * @public
   */
  landingZoneIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ResetLandingZoneOutput {
  /**
   * A unique identifier assigned to a `ResetLandingZone` operation. You can use this identifier as an input parameter of `GetLandingZoneOperation` to check the operation's status.
   *
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateLandingZoneInput {
  /**
   * The landing zone version, for example, 3.2.
   *
   * @public
   */
  version: string | undefined;

  /**
   * Specifies the types of remediation actions to apply when updating the landing zone configuration.
   *
   * @public
   */
  remediationTypes?: RemediationType[] | undefined;

  /**
   * The unique identifier of the landing zone.
   *
   * @public
   */
  landingZoneIdentifier: string | undefined;

  /**
   * The manifest file (JSON) is a text file that describes your Amazon Web Services resources. For an example, review [Launch your landing zone](https://docs.aws.amazon.com/controltower/latest/userguide/lz-api-launch). The example manifest file contains each of the available parameters. The schema for the landing zone's JSON manifest file is not published, by design.
   *
   * @public
   */
  manifest?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface UpdateLandingZoneOutput {
  /**
   * A unique identifier assigned to a `UpdateLandingZone` operation. You can use this identifier as an input of `GetLandingZoneOperation` to check the operation's status.
   *
   * @public
   */
  operationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * A list of tags, as `key:value` strings.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The ARN of the resource to be tagged.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Tags to be applied to the resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Tag keys to be removed from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
