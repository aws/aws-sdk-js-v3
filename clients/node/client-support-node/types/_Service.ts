import { _Category, _UnmarshalledCategory } from "./_Category";

/**
 * <p>Information about an AWS service returned by the <a>DescribeServices</a> operation. </p>
 */
export interface _Service {
  /**
   * <p>The code for an AWS service returned by the <a>DescribeServices</a> response. The <code>name</code> element contains the corresponding friendly name.</p>
   */
  code?: string;

  /**
   * <p>The friendly name for an AWS service. The <code>code</code> element contains the corresponding code.</p>
   */
  name?: string;

  /**
   * <p>A list of categories that describe the type of support issue a case describes. Categories consist of a category name and a category code. Category names and codes are passed to AWS Support when you call <a>CreateCase</a>.</p>
   */
  categories?: Array<_Category> | Iterable<_Category>;
}

export interface _UnmarshalledService extends _Service {
  /**
   * <p>A list of categories that describe the type of support issue a case describes. Categories consist of a category name and a category code. Category names and codes are passed to AWS Support when you call <a>CreateCase</a>.</p>
   */
  categories?: Array<_UnmarshalledCategory>;
}
