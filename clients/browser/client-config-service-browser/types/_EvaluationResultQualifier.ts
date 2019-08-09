/**
 * <p>Identifies an AWS Config rule that evaluated an AWS resource, and provides the type and ID of the resource that the rule evaluated.</p>
 */
export interface _EvaluationResultQualifier {
  /**
   * <p>The name of the AWS Config rule that was used in the evaluation.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>The type of AWS resource that was evaluated.</p>
   */
  ResourceType?: string;

  /**
   * <p>The ID of the evaluated AWS resource.</p>
   */
  ResourceId?: string;
}

export type _UnmarshalledEvaluationResultQualifier = _EvaluationResultQualifier;
