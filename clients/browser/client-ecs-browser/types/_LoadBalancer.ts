/**
 * <p>Details on a load balancer to be used with a service or task set.</p> <p>If the service is using the <code>ECS</code> deployment controller, you are limited to one load balancer or target group.</p> <p>If the service is using the <code>CODE_DEPLOY</code> deployment controller, the service is required to use either an Application Load Balancer or Network Load Balancer. When you are creating an AWS CodeDeploy deployment group, you specify two target groups (referred to as a <code>targetGroupPair</code>). Each target group binds to a separate task set in the deployment. The load balancer can also have up to two listeners, a required listener for production traffic and an optional listener that allows you to test new revisions of the service before routing production traffic to it.</p> <p>Services with tasks that use the <code>awsvpc</code> network mode (for example, those with the Fargate launch type) only support Application Load Balancers and Network Load Balancers. Classic Load Balancers are not supported. Also, when you create any target groups for these services, you must choose <code>ip</code> as the target type, not <code>instance</code>. Tasks that use the <code>awsvpc</code> network mode are associated with an elastic network interface, not an Amazon EC2 instance.</p>
 */
export interface _LoadBalancer {
  /**
   * <p>The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set.</p> <p>A target group ARN is only specified when using an application load balancer or a network load balancer. If you are using a classic load balancer this should be omitted.</p> <p>For services using the <code>ECS</code> deployment controller, you are limited to one target group. For services using the <code>CODE_DEPLOY</code> deployment controller, you are required to define two target groups for the load balancer.</p> <important> <p>If your service's task definition uses the <code>awsvpc</code> network mode (which is required for the Fargate launch type), you must choose <code>ip</code> as the target type, not <code>instance</code>, because tasks that use the <code>awsvpc</code> network mode are associated with an elastic network interface, not an Amazon EC2 instance.</p> </important>
   */
  targetGroupArn?: string;

  /**
   * <p>The name of the load balancer to associate with the Amazon ECS service or task set.</p> <p>A load balancer name is only specified when using a classic load balancer. If you are using an application load balancer or a network load balancer this should be omitted.</p>
   */
  loadBalancerName?: string;

  /**
   * <p>The name of the container (as it appears in a container definition) to associate with the load balancer.</p>
   */
  containerName?: string;

  /**
   * <p>The port on the container to associate with the load balancer. This port must correspond to a <code>containerPort</code> in the service's task definition. Your container instances must allow ingress traffic on the <code>hostPort</code> of the port mapping.</p>
   */
  containerPort?: number;
}

export type _UnmarshalledLoadBalancer = _LoadBalancer;
