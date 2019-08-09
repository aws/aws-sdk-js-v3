/**
 * <p>An object describing a project's placement.</p>
 */
export interface _PlacementDescription {
  /**
   * <p>The name of the project containing the placement.</p>
   */
  projectName: string;

  /**
   * <p>The name of the placement.</p>
   */
  placementName: string;

  /**
   * <p>The user-defined attributes associated with the placement.</p>
   */
  attributes: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The date when the placement was initially created, in UNIX epoch time format.</p>
   */
  createdDate: Date | string | number;

  /**
   * <p>The date when the placement was last updated, in UNIX epoch time format. If the placement was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.</p>
   */
  updatedDate: Date | string | number;
}

export interface _UnmarshalledPlacementDescription
  extends _PlacementDescription {
  /**
   * <p>The user-defined attributes associated with the placement.</p>
   */
  attributes: { [key: string]: string };

  /**
   * <p>The date when the placement was initially created, in UNIX epoch time format.</p>
   */
  createdDate: Date;

  /**
   * <p>The date when the placement was last updated, in UNIX epoch time format. If the placement was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.</p>
   */
  updatedDate: Date;
}
