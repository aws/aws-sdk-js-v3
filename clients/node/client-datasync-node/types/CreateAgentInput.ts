import { _TagListEntry } from "./_TagListEntry";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>CreateAgentRequest</p>
 */
export interface CreateAgentInput {
  /**
   * <p>Your agent activation key. You can get the activation key either by sending an HTTP GET request with redirects that enable you to get the agent IP address (port 80). Alternatively, you can get it from the AWS DataSync console.</p> <p>The redirect URL returned in the response provides you the activation key for your agent in the query string parameter <code>activationKey</code>. It might also include other activation-related parameters; however, these are merely defaults. The arguments you pass to this API call determine the actual configuration of your agent.</p> <p>For more information, see Activating an Agent in the <i>AWS DataSync User Guide.</i> </p>
   */
  ActivationKey: string;

  /**
   * <p>The name you configured for your agent. This value is a text reference that is used to identify the agent in the console.</p>
   */
  AgentName?: string;

  /**
   * <p>The key-value pair that represents the tag that you want to associate with the agent. The value can be an empty string. This value helps you manage, filter, and search for your agents.</p> <note> <p>Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. </p> </note>
   */
  Tags?: Array<_TagListEntry> | Iterable<_TagListEntry>;

  /**
   * <p>The ID of the VPC (Virtual Private Cloud) endpoint that the agent has access to. This is the client-side VPC endpoint, also called a PrivateLink. If you don't have a PrivateLink VPC endpoint, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html#create-endpoint-service">Creating a VPC Endpoint Service Configuration</a> in the AWS VPC User Guide.</p> <p>VPC endpoint ID looks like this: <code>vpce-01234d5aff67890e1</code>.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the subnets in which DataSync will create Elastic Network Interfaces (ENIs) for each data transfer task. The agent that runs a task must be private. When you start a task that is associated with an agent created in a VPC, or one that has access to an IP address in a VPC, then the task is also private. In this case, DataSync creates four ENIs for each task in your subnet. For a data transfer to work, the agent must be able to route to all these four ENIs.</p>
   */
  SubnetArns?: Array<string> | Iterable<string>;

  /**
   * <p>The ARNs of the security groups used to protect your data transfer task subnets. See <a>CreateAgentRequest$SubnetArns</a>.</p>
   */
  SecurityGroupArns?: Array<string> | Iterable<string>;

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
