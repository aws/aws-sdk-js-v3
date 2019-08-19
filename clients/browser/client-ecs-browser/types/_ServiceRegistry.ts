/**
 * <p>Details of the service registry.</p>
 */
export interface _ServiceRegistry {
  /**
   * <p>The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is AWS Cloud Map. For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p>
   */
  registryArn?: string;

  /**
   * <p>The port value used if your service discovery service specified an SRV record. This field may be used if both the <code>awsvpc</code> network mode and SRV records are used.</p>
   */
  port?: number;

  /**
   * <p>The container name value, already specified in the task definition, to be used for your service discovery service. If the task definition that your service task specifies uses the <code>bridge</code> or <code>host</code> network mode, you must specify a <code>containerName</code> and <code>containerPort</code> combination from the task definition. If the task definition that your service task specifies uses the <code>awsvpc</code> network mode and a type SRV DNS record is used, you must specify either a <code>containerName</code> and <code>containerPort</code> combination or a <code>port</code> value, but not both.</p>
   */
  containerName?: string;

  /**
   * <p>The port value, already specified in the task definition, to be used for your service discovery service. If the task definition your service task specifies uses the <code>bridge</code> or <code>host</code> network mode, you must specify a <code>containerName</code> and <code>containerPort</code> combination from the task definition. If the task definition your service task specifies uses the <code>awsvpc</code> network mode and a type SRV DNS record is used, you must specify either a <code>containerName</code> and <code>containerPort</code> combination or a <code>port</code> value, but not both.</p>
   */
  containerPort?: number;
}

export type _UnmarshalledServiceRegistry = _ServiceRegistry;
