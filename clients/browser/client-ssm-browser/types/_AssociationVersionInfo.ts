import { _Target, _UnmarshalledTarget } from "./_Target";
import {
  _InstanceAssociationOutputLocation,
  _UnmarshalledInstanceAssociationOutputLocation
} from "./_InstanceAssociationOutputLocation";

/**
 * <p>Information about the association version.</p>
 */
export interface _AssociationVersionInfo {
  /**
   * <p>The ID created by the system when the association was created.</p>
   */
  AssociationId?: string;

  /**
   * <p>The association version.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>The date the association version was created.</p>
   */
  CreatedDate?: Date | string | number;

  /**
   * <p>The name specified when the association was created.</p>
   */
  Name?: string;

  /**
   * <p>The version of a Systems Manager document used when the association version was created.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>Parameters specified when the association version was created.</p>
   */
  Parameters?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>The targets specified for the association when the association version was created. </p>
   */
  Targets?: Array<_Target> | Iterable<_Target>;

  /**
   * <p>The cron or rate schedule specified for the association when the association version was created.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The location in Amazon S3 specified for the association when the association version was created.</p>
   */
  OutputLocation?: _InstanceAssociationOutputLocation;

  /**
   * <p>The name specified for the association version when the association version was created.</p>
   */
  AssociationName?: string;

  /**
   * <p>The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 instances and set MaxError to 10%, then the system stops sending the request when the sixth error is received.</p> <p>Executions that are already running an association when MaxErrors is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one at a time.</p>
   */
  MaxErrors?: string;

  /**
   * <p>The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time.</p> <p>If a new instance starts and attempts to run an association while Systems Manager is running MaxConcurrency associations, the association is allowed to run. During the next association interval, the new instance will process its association within the limit specified for MaxConcurrency.</p>
   */
  MaxConcurrency?: string;

  /**
   * <p>The severity level that is assigned to the association.</p>
   */
  ComplianceSeverity?:
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "UNSPECIFIED"
    | string;
}

export interface _UnmarshalledAssociationVersionInfo
  extends _AssociationVersionInfo {
  /**
   * <p>The date the association version was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>Parameters specified when the association version was created.</p>
   */
  Parameters?: { [key: string]: Array<string> };

  /**
   * <p>The targets specified for the association when the association version was created. </p>
   */
  Targets?: Array<_UnmarshalledTarget>;

  /**
   * <p>The location in Amazon S3 specified for the association when the association version was created.</p>
   */
  OutputLocation?: _UnmarshalledInstanceAssociationOutputLocation;
}
