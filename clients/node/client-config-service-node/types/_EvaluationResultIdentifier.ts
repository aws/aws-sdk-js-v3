import {
  _EvaluationResultQualifier,
  _UnmarshalledEvaluationResultQualifier
} from "./_EvaluationResultQualifier";

/**
 * <p>Uniquely identifies an evaluation result.</p>
 */
export interface _EvaluationResultIdentifier {
  /**
   * <p>Identifies an AWS Config rule used to evaluate an AWS resource, and provides the type and ID of the evaluated resource.</p>
   */
  EvaluationResultQualifier?: _EvaluationResultQualifier;

  /**
   * <p>The time of the event that triggered the evaluation of your AWS resources. The time can indicate when AWS Config delivered a configuration item change notification, or it can indicate when AWS Config delivered the configuration snapshot, depending on which event triggered the evaluation.</p>
   */
  OrderingTimestamp?: Date | string | number;
}

export interface _UnmarshalledEvaluationResultIdentifier
  extends _EvaluationResultIdentifier {
  /**
   * <p>Identifies an AWS Config rule used to evaluate an AWS resource, and provides the type and ID of the evaluated resource.</p>
   */
  EvaluationResultQualifier?: _UnmarshalledEvaluationResultQualifier;

  /**
   * <p>The time of the event that triggered the evaluation of your AWS resources. The time can indicate when AWS Config delivered a configuration item change notification, or it can indicate when AWS Config delivered the configuration snapshot, depending on which event triggered the evaluation.</p>
   */
  OrderingTimestamp?: Date;
}
