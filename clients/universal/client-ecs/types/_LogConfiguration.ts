import { _Secret, _UnmarshalledSecret } from "./_Secret";

/**
 * <p>Log configuration options to send to a custom log driver for the container.</p>
 */
export interface _LogConfiguration {
  /**
   * <p>The log driver to use for the container. The valid values listed for this parameter are log drivers that the Amazon ECS container agent can communicate with by default.</p> <p>For tasks using the Fargate launch type, the supported log drivers are <code>awslogs</code> and <code>splunk</code>.</p> <p>For tasks using the EC2 launch type, the supported log drivers are <code>awslogs</code>, <code>syslog</code>, <code>gelf</code>, <code>fluentd</code>, <code>splunk</code>, <code>journald</code>, and <code>json-file</code>.</p> <p>For more information about using the <code>awslogs</code> log driver, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_awslogs.html">Using the awslogs Log Driver</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>If you have a custom driver that is not listed above that you would like to work with the Amazon ECS container agent, you can fork the Amazon ECS container agent project that is <a href="https://github.com/aws/amazon-ecs-agent">available on GitHub</a> and customize it to work with that driver. We encourage you to submit pull requests for changes that you would like to have included. However, Amazon Web Services does not currently support running modified copies of this software.</p> </note> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '{{.Server.APIVersion}}'</code> </p>
   */
  logDriver:
    | "json-file"
    | "syslog"
    | "journald"
    | "gelf"
    | "fluentd"
    | "awslogs"
    | "splunk"
    | string;

  /**
   * <p>The configuration options to send to the log driver. This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '{{.Server.APIVersion}}'</code> </p>
   */
  options?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The secrets to pass to the log configuration.</p>
   */
  secretOptions?: Array<_Secret> | Iterable<_Secret>;
}

export interface _UnmarshalledLogConfiguration extends _LogConfiguration {
  /**
   * <p>The configuration options to send to the log driver. This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '{{.Server.APIVersion}}'</code> </p>
   */
  options?: { [key: string]: string };

  /**
   * <p>The secrets to pass to the log configuration.</p>
   */
  secretOptions?: Array<_UnmarshalledSecret>;
}
