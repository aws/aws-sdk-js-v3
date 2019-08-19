import {
  _StackConfigurationManager,
  _UnmarshalledStackConfigurationManager
} from "./_StackConfigurationManager";
import {
  _ChefConfiguration,
  _UnmarshalledChefConfiguration
} from "./_ChefConfiguration";
import { _Source, _UnmarshalledSource } from "./_Source";

/**
 * <p>Describes a stack.</p>
 */
export interface _Stack {
  /**
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The stack name.</p>
   */
  Name?: string;

  /**
   * <p>The stack's ARN.</p>
   */
  Arn?: string;

  /**
   * <p>The stack AWS region, such as "ap-northeast-2". For more information about AWS regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  Region?: string;

  /**
   * <p>The VPC ID; applicable only if the stack is running in a VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The stack's attributes.</p>
   */
  Attributes?:
    | { [key in "Color" | string]: string }
    | Iterable<["Color" | string, string]>;

  /**
   * <p>The stack AWS Identity and Access Management (IAM) role.</p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The ARN of an IAM profile that is the default profile for all of the stack's EC2 instances. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.</p>
   */
  DefaultInstanceProfileArn?: string;

  /**
   * <p>The stack's default operating system.</p>
   */
  DefaultOs?: string;

  /**
   * <p>The stack host name theme, with spaces replaced by underscores.</p>
   */
  HostnameTheme?: string;

  /**
   * <p>The stack's default Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  DefaultAvailabilityZone?: string;

  /**
   * <p>The default subnet ID; applicable only if the stack is running in a VPC.</p>
   */
  DefaultSubnetId?: string;

  /**
   * <p>A JSON object that contains user-defined attributes to be added to the stack configuration and deployment attributes. You can use custom JSON to override the corresponding default stack configuration attribute values or to pass data to recipes. The string should be in the following format:</p> <p> <code>"{\"key1\": \"value1\", \"key2\": \"value2\",...}"</code> </p> <p>For more information on custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to Modify the Stack Configuration Attributes</a>.</p>
   */
  CustomJson?: string;

  /**
   * <p>The configuration manager.</p>
   */
  ConfigurationManager?: _StackConfigurationManager;

  /**
   * <p>A <code>ChefConfiguration</code> object that specifies whether to enable Berkshelf and the Berkshelf version. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New Stack</a>.</p>
   */
  ChefConfiguration?: _ChefConfiguration;

  /**
   * <p>Whether the stack uses custom cookbooks.</p>
   */
  UseCustomCookbooks?: boolean;

  /**
   * <p>Whether the stack automatically associates the AWS OpsWorks Stacks built-in security groups with the stack's layers.</p>
   */
  UseOpsworksSecurityGroups?: boolean;

  /**
   * <p>Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Adding Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Cookbooks and Recipes</a>.</p>
   */
  CustomCookbooksSource?: _Source;

  /**
   * <p>A default Amazon EC2 key pair for the stack's instances. You can override this value when you create or update an instance.</p>
   */
  DefaultSshKeyName?: string;

  /**
   * <p>The date when the stack was created.</p>
   */
  CreatedAt?: string;

  /**
   * <p>The default root device type. This value is used by default for all instances in the stack, but you can override it when you create an instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device">Storage for the Root Device</a>.</p>
   */
  DefaultRootDeviceType?: "ebs" | "instance-store" | string;

  /**
   * <p>The agent version. This parameter is set to <code>LATEST</code> for auto-update. or a version number for a fixed agent version.</p>
   */
  AgentVersion?: string;
}

export interface _UnmarshalledStack extends _Stack {
  /**
   * <p>The stack's attributes.</p>
   */
  Attributes?: { [key in "Color" | string]: string };

  /**
   * <p>The configuration manager.</p>
   */
  ConfigurationManager?: _UnmarshalledStackConfigurationManager;

  /**
   * <p>A <code>ChefConfiguration</code> object that specifies whether to enable Berkshelf and the Berkshelf version. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html">Create a New Stack</a>.</p>
   */
  ChefConfiguration?: _UnmarshalledChefConfiguration;

  /**
   * <p>Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Adding Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Cookbooks and Recipes</a>.</p>
   */
  CustomCookbooksSource?: _UnmarshalledSource;
}
