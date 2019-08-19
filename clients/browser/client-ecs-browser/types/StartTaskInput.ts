import { _TaskOverride } from "./_TaskOverride";
import { _NetworkConfiguration } from "./_NetworkConfiguration";
import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartTaskInput shape
 */
export interface StartTaskInput {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster on which to start your task. If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or full ARN of the task definition to start. If a <code>revision</code> is not specified, the latest <code>ACTIVE</code> revision is used.</p>
   */
  taskDefinition: string;

  /**
   * <p>A list of container overrides in JSON format that specify the name of a container in the specified task definition and the overrides it should receive. You can override the default command for a container (that is specified in the task definition or Docker image) with a <code>command</code> override. You can also override existing environment variables (that are specified in the task definition or Docker image) on a container or add new environment variables to it with an <code>environment</code> override.</p> <note> <p>A total of 8192 characters are allowed for overrides. This limit includes the JSON formatting characters of the override structure.</p> </note>
   */
  overrides?: _TaskOverride;

  /**
   * <p>The container instance IDs or full ARN entries for the container instances on which you would like to place your task. You can specify up to 10 container instances.</p>
   */
  containerInstances: Array<string> | Iterable<string>;

  /**
   * <p>An optional tag specified when a task is started. For example, if you automatically trigger a task to run a batch process job, you could apply a unique identifier for that job to your task with the <code>startedBy</code> parameter. You can then identify which tasks belong to that job by filtering the results of a <a>ListTasks</a> call with the <code>startedBy</code> value. Up to 36 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.</p> <p>If a task is started by an Amazon ECS service, then the <code>startedBy</code> parameter contains the deployment ID of the service that starts it.</p>
   */
  startedBy?: string;

  /**
   * <p>The name of the task group to associate with the task. The default value is the family name of the task definition (for example, family:my-family-name).</p>
   */
  group?: string;

  /**
   * <p>The VPC subnet and security group configuration for tasks that receive their own elastic network interface by using the <code>awsvpc</code> networking mode.</p>
   */
  networkConfiguration?: _NetworkConfiguration;

  /**
   * <p>The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>Specifies whether to enable Amazon ECS managed tags for the task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS Resources</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  enableECSManagedTags?: boolean;

  /**
   * <p>Specifies whether to propagate the tags from the task definition or the service to the task. If no value is specified, the tags are not propagated.</p>
   */
  propagateTags?: "TASK_DEFINITION" | "SERVICE" | string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
