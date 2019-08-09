import { _Target, _UnmarshalledTarget } from "./_Target";
import {
  _AssociationOverview,
  _UnmarshalledAssociationOverview
} from "./_AssociationOverview";

/**
 * <p>Describes an association of a Systems Manager document and an instance.</p>
 */
export interface _Association {
  /**
   * <p>The name of the Systems Manager document.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The ID created by the system when you create an association. An association is a binding between a document and a set of targets with a schedule.</p>
   */
  AssociationId?: string;

  /**
   * <p>The association version.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>The version of the document used in the association.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The instances targeted by the request to create an association. </p>
   */
  Targets?: Array<_Target> | Iterable<_Target>;

  /**
   * <p>The date on which the association was last run.</p>
   */
  LastExecutionDate?: Date | string | number;

  /**
   * <p>Information about the association.</p>
   */
  Overview?: _AssociationOverview;

  /**
   * <p>A cron expression that specifies a schedule when the association runs.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The association name.</p>
   */
  AssociationName?: string;
}

export interface _UnmarshalledAssociation extends _Association {
  /**
   * <p>The instances targeted by the request to create an association. </p>
   */
  Targets?: Array<_UnmarshalledTarget>;

  /**
   * <p>The date on which the association was last run.</p>
   */
  LastExecutionDate?: Date;

  /**
   * <p>Information about the association.</p>
   */
  Overview?: _UnmarshalledAssociationOverview;
}
