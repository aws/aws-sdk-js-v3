/**
 * <p>Information about a build that could not be successfully deleted.</p>
 */
export interface _BuildNotDeleted {
  /**
   * <p>The ID of the build that could not be successfully deleted.</p>
   */
  id?: string;

  /**
   * <p>Additional information about the build that could not be successfully deleted.</p>
   */
  statusCode?: string;
}

export type _UnmarshalledBuildNotDeleted = _BuildNotDeleted;
