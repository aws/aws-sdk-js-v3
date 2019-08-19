import {
  _CurrentInstance,
  _UnmarshalledCurrentInstance
} from "./_CurrentInstance";
import {
  _ModifyRecommendationDetail,
  _UnmarshalledModifyRecommendationDetail
} from "./_ModifyRecommendationDetail";
import {
  _TerminateRecommendationDetail,
  _UnmarshalledTerminateRecommendationDetail
} from "./_TerminateRecommendationDetail";

/**
 * <p>Recommendations to rightsize resources.</p>
 */
export interface _RightsizingRecommendation {
  /**
   * <p>The account that this recommendation is for.</p>
   */
  AccountId?: string;

  /**
   * <p> Context regarding the current instance.</p>
   */
  CurrentInstance?: _CurrentInstance;

  /**
   * <p>Recommendation to either terminate or modify the resource.</p>
   */
  RightsizingType?: "TERMINATE" | "MODIFY" | string;

  /**
   * <p> Details for modification recommendations. </p>
   */
  ModifyRecommendationDetail?: _ModifyRecommendationDetail;

  /**
   * <p>Details for termination recommendations.</p>
   */
  TerminateRecommendationDetail?: _TerminateRecommendationDetail;
}

export interface _UnmarshalledRightsizingRecommendation
  extends _RightsizingRecommendation {
  /**
   * <p> Context regarding the current instance.</p>
   */
  CurrentInstance?: _UnmarshalledCurrentInstance;

  /**
   * <p> Details for modification recommendations. </p>
   */
  ModifyRecommendationDetail?: _UnmarshalledModifyRecommendationDetail;

  /**
   * <p>Details for termination recommendations.</p>
   */
  TerminateRecommendationDetail?: _UnmarshalledTerminateRecommendationDetail;
}
