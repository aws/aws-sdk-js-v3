/**
 * <p>An object representing a constraint on task placement in the task definition.</p> <p>If you are using the Fargate launch type, task placement constraints are not supported.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export interface _TaskDefinitionPlacementConstraint {
  /**
   * <p>The type of constraint. The <code>DistinctInstance</code> constraint ensures that each task in a particular group is running on a different container instance. The <code>MemberOf</code> constraint restricts selection to be from a group of valid candidates.</p>
   */
  type?: "memberOf" | string;

  /**
   * <p>A cluster query language expression to apply to the constraint. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  expression?: string;
}

export type _UnmarshalledTaskDefinitionPlacementConstraint = _TaskDefinitionPlacementConstraint;
