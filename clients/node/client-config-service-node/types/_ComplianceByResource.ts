import { _Compliance, _UnmarshalledCompliance } from "./_Compliance";

/**
 * <p>Indicates whether an AWS resource that is evaluated according to one or more AWS Config rules is compliant. A resource is compliant if it complies with all of the rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules.</p>
 */
export interface _ComplianceByResource {
  /**
   * <p>The type of the AWS resource that was evaluated.</p>
   */
  ResourceType?: string;

  /**
   * <p>The ID of the AWS resource that was evaluated.</p>
   */
  ResourceId?: string;

  /**
   * <p>Indicates whether the AWS resource complies with all of the AWS Config rules that evaluated it.</p>
   */
  Compliance?: _Compliance;
}

export interface _UnmarshalledComplianceByResource
  extends _ComplianceByResource {
  /**
   * <p>Indicates whether the AWS resource complies with all of the AWS Config rules that evaluated it.</p>
   */
  Compliance?: _UnmarshalledCompliance;
}
