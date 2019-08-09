import { _Resource, _UnmarshalledResource } from "./_Resource";
import { _Service, _UnmarshalledService } from "./_Service";

/**
 * _Finding shape
 */
export interface _Finding {
  /**
   * <p>AWS account ID where the activity occurred that prompted GuardDuty to generate a finding.</p>
   */
  AccountId: string;

  /**
   * <p>The ARN of a finding described by the action.</p>
   */
  Arn: string;

  /**
   * <p>The confidence level of a finding.</p>
   */
  Confidence?: number;

  /**
   * <p>The time stamp at which a finding was generated.</p>
   */
  CreatedAt: string;

  /**
   * <p>The description of a finding.</p>
   */
  Description?: string;

  /**
   * <p>The identifier that corresponds to a finding described by the action.</p>
   */
  Id: string;

  /**
   * <p>The AWS resource partition.</p>
   */
  Partition?: string;

  /**
   * <p>The AWS region where the activity occurred that prompted GuardDuty to generate a finding.</p>
   */
  Region: string;

  /**
   * <p>The AWS resource associated with the activity that prompted GuardDuty to generate a finding.</p>
   */
  Resource: _Resource;

  /**
   * <p>Findings' schema version.</p>
   */
  SchemaVersion: string;

  /**
   * <p>Additional information assigned to the generated finding by GuardDuty.</p>
   */
  Service?: _Service;

  /**
   * <p>The severity of a finding.</p>
   */
  Severity: number;

  /**
   * <p>The title of a finding.</p>
   */
  Title?: string;

  /**
   * <p>The type of a finding described by the action.</p>
   */
  Type: string;

  /**
   * <p>The time stamp at which a finding was last updated.</p>
   */
  UpdatedAt: string;
}

export interface _UnmarshalledFinding extends _Finding {
  /**
   * <p>The AWS resource associated with the activity that prompted GuardDuty to generate a finding.</p>
   */
  Resource: _UnmarshalledResource;

  /**
   * <p>Additional information assigned to the generated finding by GuardDuty.</p>
   */
  Service?: _UnmarshalledService;
}
