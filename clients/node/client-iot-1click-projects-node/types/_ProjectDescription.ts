import {
  _PlacementTemplate,
  _UnmarshalledPlacementTemplate
} from "./_PlacementTemplate";

/**
 * <p>An object providing detailed information for a particular project associated with an AWS account and region.</p>
 */
export interface _ProjectDescription {
  /**
   * <p>The ARN of the project.</p>
   */
  arn?: string;

  /**
   * <p>The name of the project for which to obtain information from.</p>
   */
  projectName: string;

  /**
   * <p>The description of the project.</p>
   */
  description?: string;

  /**
   * <p>The date when the project was originally created, in UNIX epoch time format.</p>
   */
  createdDate: Date | string | number;

  /**
   * <p>The date when the project was last updated, in UNIX epoch time format. If the project was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.</p>
   */
  updatedDate: Date | string | number;

  /**
   * <p>An object describing the project's placement specifications.</p>
   */
  placementTemplate?: _PlacementTemplate;

  /**
   * <p>The tags (metadata key/value pairs) associated with the project.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledProjectDescription extends _ProjectDescription {
  /**
   * <p>The date when the project was originally created, in UNIX epoch time format.</p>
   */
  createdDate: Date;

  /**
   * <p>The date when the project was last updated, in UNIX epoch time format. If the project was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.</p>
   */
  updatedDate: Date;

  /**
   * <p>An object describing the project's placement specifications.</p>
   */
  placementTemplate?: _UnmarshalledPlacementTemplate;

  /**
   * <p>The tags (metadata key/value pairs) associated with the project.</p>
   */
  tags?: { [key: string]: string };
}
