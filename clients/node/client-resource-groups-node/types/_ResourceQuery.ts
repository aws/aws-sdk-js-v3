/**
 * <p>The query that is used to define a resource group or a search for resources.</p>
 */
export interface _ResourceQuery {
  /**
   * <p>The type of the query. The valid values in this release are <code>TAG_FILTERS_1_0</code> and <code>CLOUDFORMATION_STACK_1_0</code>.</p> <p> <i> <code>TAG_FILTERS_1_0:</code> </i> A JSON syntax that lets you specify a collection of simple tag filters for resource types and tags, as supported by the AWS Tagging API <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html">GetResources</a> operation. If you specify more than one tag key, only resources that match all tag keys, and at least one value of each specified tag key, are returned in your query. If you specify more than one value for a tag key, a resource matches the filter if it has a tag key value that matches <i>any</i> of the specified values.</p> <p>For example, consider the following sample query for resources that have two tags, <code>Stage</code> and <code>Version</code>, with two values each. (<code>[{"Key":"Stage","Values":["Test","Deploy"]},{"Key":"Version","Values":["1","2"]}]</code>) The results of this query might include the following.</p> <ul> <li> <p>An EC2 instance that has the following two tags: <code>{"Key":"Stage","Value":"Deploy"}</code>, and <code>{"Key":"Version","Value":"2"}</code> </p> </li> <li> <p>An S3 bucket that has the following two tags: {"Key":"Stage","Value":"Test"}, and {"Key":"Version","Value":"1"}</p> </li> </ul> <p>The query would not return the following results, however. The following EC2 instance does not have all tag keys specified in the filter, so it is rejected. The RDS database has all of the tag keys, but no values that match at least one of the specified tag key values in the filter.</p> <ul> <li> <p>An EC2 instance that has only the following tag: <code>{"Key":"Stage","Value":"Deploy"}</code>.</p> </li> <li> <p>An RDS database that has the following two tags: <code>{"Key":"Stage","Value":"Archived"}</code>, and <code>{"Key":"Version","Value":"4"}</code> </p> </li> </ul> <p> <i> <code>CLOUDFORMATION_STACK_1_0:</code> </i> A JSON syntax that lets you specify a CloudFormation stack ARN.</p>
   */
  Type: "TAG_FILTERS_1_0" | "CLOUDFORMATION_STACK_1_0" | string;

  /**
   * <p>The query that defines a group or a search.</p>
   */
  Query: string;
}

export type _UnmarshalledResourceQuery = _ResourceQuery;
