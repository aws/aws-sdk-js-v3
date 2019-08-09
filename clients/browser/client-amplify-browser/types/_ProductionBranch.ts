/**
 * <p> Structure with Production Branch information. </p>
 */
export interface _ProductionBranch {
  /**
   * <p> Last Deploy Time of Production Branch. </p>
   */
  lastDeployTime?: Date | string | number;

  /**
   * <p> Status of Production Branch. </p>
   */
  status?: string;

  /**
   * <p> Thumbnail URL for Production Branch. </p>
   */
  thumbnailUrl?: string;

  /**
   * <p> Branch Name for Production Branch. </p>
   */
  branchName?: string;
}

export interface _UnmarshalledProductionBranch extends _ProductionBranch {
  /**
   * <p> Last Deploy Time of Production Branch. </p>
   */
  lastDeployTime?: Date;
}
