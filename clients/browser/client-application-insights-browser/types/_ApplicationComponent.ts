/**
 * <p>Describes a standalone resource or similarly grouped resources that the application is made up of.</p>
 */
export interface _ApplicationComponent {
  /**
   * <p>The name of the component.</p>
   */
  ComponentName?: string;

  /**
   * <p>The resource type. Supported resource types include EC2 instances, Auto Scaling group, Classic ELB, Application ELB, and SQS Queue.</p>
   */
  ResourceType?: string;

  /**
   * <p>The stack tier of the application component.</p>
   */
  Tier?: string;

  /**
   * <p>Indicates whether the application component is monitored. </p>
   */
  Monitor?: boolean;
}

export type _UnmarshalledApplicationComponent = _ApplicationComponent;
