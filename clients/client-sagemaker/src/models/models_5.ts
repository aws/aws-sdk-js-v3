// smithy-typescript generated code
import { BooleanOperator } from "./models_0";

import { CrossAccountFilterOption } from "./models_2";

import { Filter, ResourceType, Workteam } from "./models_3";

import { NestedFilters, SearchSortOrder, VisibilityConditions } from "./models_4";

/**
 * @public
 */
export interface UpdateWorkteamResponse {
  /**
   * <p>A <code>Workteam</code> object that describes the updated work team.</p>
   * @public
   */
  Workteam: Workteam | undefined;
}

/**
 * <p>A multi-expression that searches for the specified resource or resources in a search. All resource
 *       objects that satisfy the expression's condition are included in the search results. You must specify at
 *       least one subexpression, filter, or nested filter. A <code>SearchExpression</code> can contain up to
 *       twenty elements.</p>
 *          <p>A <code>SearchExpression</code> contains the following components:</p>
 *          <ul>
 *             <li>
 *                <p>A list of <code>Filter</code> objects. Each filter defines a simple Boolean
 *           expression comprised of a resource property name, Boolean operator, and
 *           value.</p>
 *             </li>
 *             <li>
 *                <p>A list of <code>NestedFilter</code> objects. Each nested filter defines a list
 *           of Boolean expressions using a list of resource properties. A nested filter is
 *           satisfied if a single object in the list satisfies all Boolean
 *           expressions.</p>
 *             </li>
 *             <li>
 *                <p>A list of <code>SearchExpression</code> objects. A search expression object
 *           can be nested in a list of search expression objects.</p>
 *             </li>
 *             <li>
 *                <p>A Boolean operator: <code>And</code> or <code>Or</code>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface SearchExpression {
  /**
   * <p>A list of filter objects.</p>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>A list of nested filter objects.</p>
   * @public
   */
  NestedFilters?: NestedFilters[];

  /**
   * <p>A list of search expression objects.</p>
   * @public
   */
  SubExpressions?: SearchExpression[];

  /**
   * <p>A Boolean operator used to evaluate the search expression. If you want every
   *       conditional statement in all lists to be satisfied for the entire search expression to
   *       be true, specify <code>And</code>. If only a single conditional statement needs to be
   *       true for the entire search expression to be true, specify <code>Or</code>. The default
   *       value is <code>And</code>.</p>
   * @public
   */
  Operator?: BooleanOperator;
}

/**
 * @public
 */
export interface SearchRequest {
  /**
   * <p>The name of the SageMaker resource to search for.</p>
   * @public
   */
  Resource: ResourceType | undefined;

  /**
   * <p>A Boolean conditional statement. Resources must satisfy this condition to be
   *       included in search results. You must provide at least one subexpression, filter, or
   *       nested filter. The maximum number of recursive <code>SubExpressions</code>,
   *       <code>NestedFilters</code>, and <code>Filters</code> that can be included in a
   *       <code>SearchExpression</code> object is 50.</p>
   * @public
   */
  SearchExpression?: SearchExpression;

  /**
   * <p>The name of the resource property used to sort the <code>SearchResults</code>. The
   *       default is <code>LastModifiedTime</code>.</p>
   * @public
   */
  SortBy?: string;

  /**
   * <p>How <code>SearchResults</code> are ordered. Valid values are <code>Ascending</code> or
   *       <code>Descending</code>. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SearchSortOrder;

  /**
   * <p>If more than <code>MaxResults</code> resources match the specified
   *       <code>SearchExpression</code>, the response includes a
   *       <code>NextToken</code>. The <code>NextToken</code> can be passed to the next
   *       <code>SearchRequest</code> to continue retrieving results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>
   *       A cross account filter option. When the value is <code>"CrossAccount"</code> the
   *       search results will only include resources made discoverable to you from other
   *       accounts. When the value is <code>"SameAccount"</code> or <code>null</code> the
   *       search results will only include resources from your account. Default is
   *       <code>null</code>. For more information on searching for resources made
   *       discoverable to your account, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/feature-store-cross-account-discoverability-use.html">
   *         Search discoverable resources</a> in the SageMaker Developer Guide.
   *       The maximum number of <code>ResourceCatalog</code>s viewable is 1000.
   *     </p>
   * @public
   */
  CrossAccountFilterOption?: CrossAccountFilterOption;

  /**
   * <p>
   *       Limits the results of your search request to the resources that you can access.
   *     </p>
   * @public
   */
  VisibilityConditions?: VisibilityConditions[];
}
