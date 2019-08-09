import {
  _NonCompliantResource,
  _UnmarshalledNonCompliantResource
} from "./_NonCompliantResource";
import {
  _RelatedResource,
  _UnmarshalledRelatedResource
} from "./_RelatedResource";

/**
 * <p>The findings (results) of the audit.</p>
 */
export interface _AuditFinding {
  /**
   * <p>A unique identifier for this set of audit findings. This identifier is used to apply mitigation tasks to one or more sets of findings.</p>
   */
  findingId?: string;

  /**
   * <p>The ID of the audit that generated this result (finding).</p>
   */
  taskId?: string;

  /**
   * <p>The audit check that generated this result.</p>
   */
  checkName?: string;

  /**
   * <p>The time the audit started.</p>
   */
  taskStartTime?: Date | string | number;

  /**
   * <p>The time the result (finding) was discovered.</p>
   */
  findingTime?: Date | string | number;

  /**
   * <p>The severity of the result (finding).</p>
   */
  severity?: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | string;

  /**
   * <p>The resource that was found to be noncompliant with the audit check.</p>
   */
  nonCompliantResource?: _NonCompliantResource;

  /**
   * <p>The list of related resources.</p>
   */
  relatedResources?: Array<_RelatedResource> | Iterable<_RelatedResource>;

  /**
   * <p>The reason the resource was noncompliant.</p>
   */
  reasonForNonCompliance?: string;

  /**
   * <p>A code that indicates the reason that the resource was noncompliant.</p>
   */
  reasonForNonComplianceCode?: string;
}

export interface _UnmarshalledAuditFinding extends _AuditFinding {
  /**
   * <p>The time the audit started.</p>
   */
  taskStartTime?: Date;

  /**
   * <p>The time the result (finding) was discovered.</p>
   */
  findingTime?: Date;

  /**
   * <p>The resource that was found to be noncompliant with the audit check.</p>
   */
  nonCompliantResource?: _UnmarshalledNonCompliantResource;

  /**
   * <p>The list of related resources.</p>
   */
  relatedResources?: Array<_UnmarshalledRelatedResource>;
}
