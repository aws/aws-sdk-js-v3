import { _Target, _UnmarshalledTarget } from "./_Target";
import {
  _InstanceAssociationOutputLocation,
  _UnmarshalledInstanceAssociationOutputLocation
} from "./_InstanceAssociationOutputLocation";

/**
 * <p>Describes the association of a Systems Manager SSM document and an instance.</p>
 */
export interface _CreateAssociationBatchRequestEntry {
  /**
   * <p>The name of the SSM document that contains the configuration information for the instance. You can specify Command or Automation documents.</p> <p>You can specify AWS-predefined documents, documents you created, or a document that is shared with you from another account.</p> <p>For SSM documents that are shared with you from other AWS accounts, you must specify the complete SSM document ARN, in the following format:</p> <p> <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:document/<i>document-name</i> </code> </p> <p>For example:</p> <p> <code>arn:aws:ssm:us-east-2:12345678912:document/My-Shared-Document</code> </p> <p>For AWS-predefined documents and SSM documents you created in your account, you only need to specify the document name. For example, <code>AWS-ApplyPatchBaseline</code> or <code>My-Document</code>.</p>
   */
  Name: string;

  /**
   * <p>The ID of the instance. </p>
   */
  InstanceId?: string;

  /**
   * <p>A description of the parameters for a document. </p>
   */
  Parameters?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>Specify the target for the association. This target is required for associations that use an Automation document and target resources by using rate controls.</p>
   */
  AutomationTargetParameterName?: string;

  /**
   * <p>The document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The instances targeted by the request.</p>
   */
  Targets?: Array<_Target> | Iterable<_Target>;

  /**
   * <p>A cron expression that specifies a schedule when the association runs.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>An Amazon S3 bucket where you want to store the results of this request.</p>
   */
  OutputLocation?: _InstanceAssociationOutputLocation;

  /**
   * <p>Specify a descriptive name for the association.</p>
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
   * <p>The severity level to assign to the association.</p>
   */
  ComplianceSeverity?:
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "UNSPECIFIED"
    | string;
}

export interface _UnmarshalledCreateAssociationBatchRequestEntry
  extends _CreateAssociationBatchRequestEntry {
  /**
   * <p>A description of the parameters for a document. </p>
   */
  Parameters?: { [key: string]: Array<string> };

  /**
   * <p>The instances targeted by the request.</p>
   */
  Targets?: Array<_UnmarshalledTarget>;

  /**
   * <p>An Amazon S3 bucket where you want to store the results of this request.</p>
   */
  OutputLocation?: _UnmarshalledInstanceAssociationOutputLocation;
}
