// smithy-typescript generated code
/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. The following resources are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ConfigurationRecorder</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ConfigRule</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OrganizationConfigRule</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ConformancePack</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OrganizationConformancePack</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ConfigurationAggregator</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AggregationAuthorization</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>StoredQuery</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Connector</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}
