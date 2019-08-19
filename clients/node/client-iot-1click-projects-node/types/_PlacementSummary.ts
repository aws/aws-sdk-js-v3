/**
 * <p>An object providing summary information for a particular placement.</p>
 */
export interface _PlacementSummary {
  /**
   * <p>The name of the project containing the placement.</p>
   */
  projectName: string;

  /**
   * <p>The name of the placement being summarized.</p>
   */
  placementName: string;

  /**
   * <p>The date when the placement was originally created, in UNIX epoch time format.</p>
   */
  createdDate: Date | string | number;

  /**
   * <p>The date when the placement was last updated, in UNIX epoch time format. If the placement was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.</p>
   */
  updatedDate: Date | string | number;
}

export interface _UnmarshalledPlacementSummary extends _PlacementSummary {
  /**
   * <p>The date when the placement was originally created, in UNIX epoch time format.</p>
   */
  createdDate: Date;

  /**
   * <p>The date when the placement was last updated, in UNIX epoch time format. If the placement was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.</p>
   */
  updatedDate: Date;
}
