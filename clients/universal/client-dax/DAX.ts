import { DAXClient } from "./DAXClient";
import { ClusterAlreadyExistsFault } from "./types/ClusterAlreadyExistsFault";
import { ClusterNotFoundFault } from "./types/ClusterNotFoundFault";
import { ClusterQuotaForCustomerExceededFault } from "./types/ClusterQuotaForCustomerExceededFault";
import { CreateClusterInput } from "./types/CreateClusterInput";
import { CreateClusterOutput } from "./types/CreateClusterOutput";
import { CreateParameterGroupInput } from "./types/CreateParameterGroupInput";
import { CreateParameterGroupOutput } from "./types/CreateParameterGroupOutput";
import { CreateSubnetGroupInput } from "./types/CreateSubnetGroupInput";
import { CreateSubnetGroupOutput } from "./types/CreateSubnetGroupOutput";
import { DecreaseReplicationFactorInput } from "./types/DecreaseReplicationFactorInput";
import { DecreaseReplicationFactorOutput } from "./types/DecreaseReplicationFactorOutput";
import { DeleteClusterInput } from "./types/DeleteClusterInput";
import { DeleteClusterOutput } from "./types/DeleteClusterOutput";
import { DeleteParameterGroupInput } from "./types/DeleteParameterGroupInput";
import { DeleteParameterGroupOutput } from "./types/DeleteParameterGroupOutput";
import { DeleteSubnetGroupInput } from "./types/DeleteSubnetGroupInput";
import { DeleteSubnetGroupOutput } from "./types/DeleteSubnetGroupOutput";
import { DescribeClustersInput } from "./types/DescribeClustersInput";
import { DescribeClustersOutput } from "./types/DescribeClustersOutput";
import { DescribeDefaultParametersInput } from "./types/DescribeDefaultParametersInput";
import { DescribeDefaultParametersOutput } from "./types/DescribeDefaultParametersOutput";
import { DescribeEventsInput } from "./types/DescribeEventsInput";
import { DescribeEventsOutput } from "./types/DescribeEventsOutput";
import { DescribeParameterGroupsInput } from "./types/DescribeParameterGroupsInput";
import { DescribeParameterGroupsOutput } from "./types/DescribeParameterGroupsOutput";
import { DescribeParametersInput } from "./types/DescribeParametersInput";
import { DescribeParametersOutput } from "./types/DescribeParametersOutput";
import { DescribeSubnetGroupsInput } from "./types/DescribeSubnetGroupsInput";
import { DescribeSubnetGroupsOutput } from "./types/DescribeSubnetGroupsOutput";
import { IncreaseReplicationFactorInput } from "./types/IncreaseReplicationFactorInput";
import { IncreaseReplicationFactorOutput } from "./types/IncreaseReplicationFactorOutput";
import { InsufficientClusterCapacityFault } from "./types/InsufficientClusterCapacityFault";
import { InvalidARNFault } from "./types/InvalidARNFault";
import { InvalidClusterStateFault } from "./types/InvalidClusterStateFault";
import { InvalidParameterCombinationException } from "./types/InvalidParameterCombinationException";
import { InvalidParameterGroupStateFault } from "./types/InvalidParameterGroupStateFault";
import { InvalidParameterValueException } from "./types/InvalidParameterValueException";
import { InvalidSubnet } from "./types/InvalidSubnet";
import { InvalidVPCNetworkStateFault } from "./types/InvalidVPCNetworkStateFault";
import { ListTagsInput } from "./types/ListTagsInput";
import { ListTagsOutput } from "./types/ListTagsOutput";
import { NodeNotFoundFault } from "./types/NodeNotFoundFault";
import { NodeQuotaForClusterExceededFault } from "./types/NodeQuotaForClusterExceededFault";
import { NodeQuotaForCustomerExceededFault } from "./types/NodeQuotaForCustomerExceededFault";
import { ParameterGroupAlreadyExistsFault } from "./types/ParameterGroupAlreadyExistsFault";
import { ParameterGroupNotFoundFault } from "./types/ParameterGroupNotFoundFault";
import { ParameterGroupQuotaExceededFault } from "./types/ParameterGroupQuotaExceededFault";
import { RebootNodeInput } from "./types/RebootNodeInput";
import { RebootNodeOutput } from "./types/RebootNodeOutput";
import { ServiceLinkedRoleNotFoundFault } from "./types/ServiceLinkedRoleNotFoundFault";
import { SubnetGroupAlreadyExistsFault } from "./types/SubnetGroupAlreadyExistsFault";
import { SubnetGroupInUseFault } from "./types/SubnetGroupInUseFault";
import { SubnetGroupNotFoundFault } from "./types/SubnetGroupNotFoundFault";
import { SubnetGroupQuotaExceededFault } from "./types/SubnetGroupQuotaExceededFault";
import { SubnetInUse } from "./types/SubnetInUse";
import { SubnetQuotaExceededFault } from "./types/SubnetQuotaExceededFault";
import { TagNotFoundFault } from "./types/TagNotFoundFault";
import { TagQuotaPerResourceExceeded } from "./types/TagQuotaPerResourceExceeded";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateClusterInput } from "./types/UpdateClusterInput";
import { UpdateClusterOutput } from "./types/UpdateClusterOutput";
import { UpdateParameterGroupInput } from "./types/UpdateParameterGroupInput";
import { UpdateParameterGroupOutput } from "./types/UpdateParameterGroupOutput";
import { UpdateSubnetGroupInput } from "./types/UpdateSubnetGroupInput";
import { UpdateSubnetGroupOutput } from "./types/UpdateSubnetGroupOutput";
import { CreateClusterCommand } from "./commands/CreateClusterCommand";
import { CreateParameterGroupCommand } from "./commands/CreateParameterGroupCommand";
import { CreateSubnetGroupCommand } from "./commands/CreateSubnetGroupCommand";
import { DecreaseReplicationFactorCommand } from "./commands/DecreaseReplicationFactorCommand";
import { DeleteClusterCommand } from "./commands/DeleteClusterCommand";
import { DeleteParameterGroupCommand } from "./commands/DeleteParameterGroupCommand";
import { DeleteSubnetGroupCommand } from "./commands/DeleteSubnetGroupCommand";
import { DescribeClustersCommand } from "./commands/DescribeClustersCommand";
import { DescribeDefaultParametersCommand } from "./commands/DescribeDefaultParametersCommand";
import { DescribeEventsCommand } from "./commands/DescribeEventsCommand";
import { DescribeParameterGroupsCommand } from "./commands/DescribeParameterGroupsCommand";
import { DescribeParametersCommand } from "./commands/DescribeParametersCommand";
import { DescribeSubnetGroupsCommand } from "./commands/DescribeSubnetGroupsCommand";
import { IncreaseReplicationFactorCommand } from "./commands/IncreaseReplicationFactorCommand";
import { ListTagsCommand } from "./commands/ListTagsCommand";
import { RebootNodeCommand } from "./commands/RebootNodeCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateClusterCommand } from "./commands/UpdateClusterCommand";
import { UpdateParameterGroupCommand } from "./commands/UpdateParameterGroupCommand";
import { UpdateSubnetGroupCommand } from "./commands/UpdateSubnetGroupCommand";

export class DAX extends DAXClient {
  /**
   * <p>Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterAlreadyExistsFault} <p>You already have a DAX cluster with the given identifier.</p>
   *   - {InvalidClusterStateFault} <p>The requested DAX cluster is not in the <i>available</i> state.</p>
   *   - {InsufficientClusterCapacityFault} <p>There are not enough system resources to create the cluster you requested (or to resize an already-existing cluster). </p>
   *   - {SubnetGroupNotFoundFault} <p>The requested subnet group name does not refer to an existing subnet group.</p>
   *   - {InvalidParameterGroupStateFault} <p>One or more parameters in a parameter group are in an invalid state.</p>
   *   - {ParameterGroupNotFoundFault} <p>The specified parameter group does not exist.</p>
   *   - {ClusterQuotaForCustomerExceededFault} <p>You have attempted to exceed the maximum number of DAX clusters for your AWS account.</p>
   *   - {NodeQuotaForClusterExceededFault} <p>You have attempted to exceed the maximum number of nodes for a DAX cluster.</p>
   *   - {NodeQuotaForCustomerExceededFault} <p>You have attempted to exceed the maximum number of nodes for your AWS account.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The VPC network is in an invalid state.</p>
   *   - {TagQuotaPerResourceExceeded} <p>You have exceeded the maximum number of tags for this DAX cluster.</p>
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCluster(args: CreateClusterInput): Promise<CreateClusterOutput>;
  public createCluster(
    args: CreateClusterInput,
    cb: (err: any, data?: CreateClusterOutput) => void
  ): void;
  public createCluster(
    args: CreateClusterInput,
    cb?: (err: any, data?: CreateClusterOutput) => void
  ): Promise<CreateClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new parameter group. A parameter group is a collection of parameters that you apply to all of the nodes in a DAX cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ParameterGroupQuotaExceededFault} <p>You have attempted to exceed the maximum number of parameter groups.</p>
   *   - {ParameterGroupAlreadyExistsFault} <p>The specified parameter group already exists.</p>
   *   - {InvalidParameterGroupStateFault} <p>One or more parameters in a parameter group are in an invalid state.</p>
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createParameterGroup(
    args: CreateParameterGroupInput
  ): Promise<CreateParameterGroupOutput>;
  public createParameterGroup(
    args: CreateParameterGroupInput,
    cb: (err: any, data?: CreateParameterGroupOutput) => void
  ): void;
  public createParameterGroup(
    args: CreateParameterGroupInput,
    cb?: (err: any, data?: CreateParameterGroupOutput) => void
  ): Promise<CreateParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new subnet group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SubnetGroupAlreadyExistsFault} <p>The specified subnet group already exists.</p>
   *   - {SubnetGroupQuotaExceededFault} <p>The request cannot be processed because it would exceed the allowed number of subnets in a subnet group.</p>
   *   - {SubnetQuotaExceededFault} <p>The request cannot be processed because it would exceed the allowed number of subnets in a subnet group.</p>
   *   - {InvalidSubnet} <p>An invalid subnet identifier was specified.</p>
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSubnetGroup(
    args: CreateSubnetGroupInput
  ): Promise<CreateSubnetGroupOutput>;
  public createSubnetGroup(
    args: CreateSubnetGroupInput,
    cb: (err: any, data?: CreateSubnetGroupOutput) => void
  ): void;
  public createSubnetGroup(
    args: CreateSubnetGroupInput,
    cb?: (err: any, data?: CreateSubnetGroupOutput) => void
  ): Promise<CreateSubnetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSubnetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes one or more nodes from a DAX cluster.</p> <note> <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing DAX cluster.</p>
   *   - {NodeNotFoundFault} <p>None of the nodes in the cluster have the given node ID.</p>
   *   - {InvalidClusterStateFault} <p>The requested DAX cluster is not in the <i>available</i> state.</p>
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public decreaseReplicationFactor(
    args: DecreaseReplicationFactorInput
  ): Promise<DecreaseReplicationFactorOutput>;
  public decreaseReplicationFactor(
    args: DecreaseReplicationFactorInput,
    cb: (err: any, data?: DecreaseReplicationFactorOutput) => void
  ): void;
  public decreaseReplicationFactor(
    args: DecreaseReplicationFactorInput,
    cb?: (err: any, data?: DecreaseReplicationFactorOutput) => void
  ): Promise<DecreaseReplicationFactorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DecreaseReplicationFactorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a previously provisioned DAX cluster. <i>DeleteCluster</i> deletes all associated nodes, node endpoints and the DAX cluster itself. When you receive a successful response from this action, DAX immediately begins deleting the cluster; you cannot cancel or revert this action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing DAX cluster.</p>
   *   - {InvalidClusterStateFault} <p>The requested DAX cluster is not in the <i>available</i> state.</p>
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCluster(args: DeleteClusterInput): Promise<DeleteClusterOutput>;
  public deleteCluster(
    args: DeleteClusterInput,
    cb: (err: any, data?: DeleteClusterOutput) => void
  ): void;
  public deleteCluster(
    args: DeleteClusterInput,
    cb?: (err: any, data?: DeleteClusterOutput) => void
  ): Promise<DeleteClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any DAX clusters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterGroupStateFault} <p>One or more parameters in a parameter group are in an invalid state.</p>
   *   - {ParameterGroupNotFoundFault} <p>The specified parameter group does not exist.</p>
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteParameterGroup(
    args: DeleteParameterGroupInput
  ): Promise<DeleteParameterGroupOutput>;
  public deleteParameterGroup(
    args: DeleteParameterGroupInput,
    cb: (err: any, data?: DeleteParameterGroupOutput) => void
  ): void;
  public deleteParameterGroup(
    args: DeleteParameterGroupInput,
    cb?: (err: any, data?: DeleteParameterGroupOutput) => void
  ): Promise<DeleteParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a subnet group.</p> <note> <p>You cannot delete a subnet group if it is associated with any DAX clusters.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {SubnetGroupInUseFault} <p>The specified subnet group is currently in use.</p>
   *   - {SubnetGroupNotFoundFault} <p>The requested subnet group name does not refer to an existing subnet group.</p>
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSubnetGroup(
    args: DeleteSubnetGroupInput
  ): Promise<DeleteSubnetGroupOutput>;
  public deleteSubnetGroup(
    args: DeleteSubnetGroupInput,
    cb: (err: any, data?: DeleteSubnetGroupOutput) => void
  ): void;
  public deleteSubnetGroup(
    args: DeleteSubnetGroupInput,
    cb?: (err: any, data?: DeleteSubnetGroupOutput) => void
  ): Promise<DeleteSubnetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSubnetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about all provisioned DAX clusters if no cluster identifier is specified, or about a specific DAX cluster if a cluster identifier is supplied.</p> <p>If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the DELETING state, only cluster level information will be displayed.</p> <p>If nodes are currently being added to the DAX cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the DAX cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If nodes are currently being removed from the DAX cluster, no endpoint information for the removed nodes is displayed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing DAX cluster.</p>
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClusters(
    args: DescribeClustersInput
  ): Promise<DescribeClustersOutput>;
  public describeClusters(
    args: DescribeClustersInput,
    cb: (err: any, data?: DescribeClustersOutput) => void
  ): void;
  public describeClusters(
    args: DescribeClustersInput,
    cb?: (err: any, data?: DescribeClustersOutput) => void
  ): Promise<DescribeClustersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClustersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the default system parameter information for the DAX caching software.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDefaultParameters(
    args: DescribeDefaultParametersInput
  ): Promise<DescribeDefaultParametersOutput>;
  public describeDefaultParameters(
    args: DescribeDefaultParametersInput,
    cb: (err: any, data?: DescribeDefaultParametersOutput) => void
  ): void;
  public describeDefaultParameters(
    args: DescribeDefaultParametersInput,
    cb?: (err: any, data?: DescribeDefaultParametersOutput) => void
  ): Promise<DescribeDefaultParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDefaultParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns events related to DAX clusters and parameter groups. You can obtain events specific to a particular DAX cluster or parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEvents(
    args: DescribeEventsInput
  ): Promise<DescribeEventsOutput>;
  public describeEvents(
    args: DescribeEventsInput,
    cb: (err: any, data?: DescribeEventsOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsInput,
    cb?: (err: any, data?: DescribeEventsOutput) => void
  ): Promise<DescribeEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of parameter group descriptions. If a parameter group name is specified, the list will contain only the descriptions for that group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ParameterGroupNotFoundFault} <p>The specified parameter group does not exist.</p>
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeParameterGroups(
    args: DescribeParameterGroupsInput
  ): Promise<DescribeParameterGroupsOutput>;
  public describeParameterGroups(
    args: DescribeParameterGroupsInput,
    cb: (err: any, data?: DescribeParameterGroupsOutput) => void
  ): void;
  public describeParameterGroups(
    args: DescribeParameterGroupsInput,
    cb?: (err: any, data?: DescribeParameterGroupsOutput) => void
  ): Promise<DescribeParameterGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeParameterGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the detailed parameter list for a particular parameter group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ParameterGroupNotFoundFault} <p>The specified parameter group does not exist.</p>
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeParameters(
    args: DescribeParametersInput
  ): Promise<DescribeParametersOutput>;
  public describeParameters(
    args: DescribeParametersInput,
    cb: (err: any, data?: DescribeParametersOutput) => void
  ): void;
  public describeParameters(
    args: DescribeParametersInput,
    cb?: (err: any, data?: DescribeParametersOutput) => void
  ): Promise<DescribeParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SubnetGroupNotFoundFault} <p>The requested subnet group name does not refer to an existing subnet group.</p>
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSubnetGroups(
    args: DescribeSubnetGroupsInput
  ): Promise<DescribeSubnetGroupsOutput>;
  public describeSubnetGroups(
    args: DescribeSubnetGroupsInput,
    cb: (err: any, data?: DescribeSubnetGroupsOutput) => void
  ): void;
  public describeSubnetGroups(
    args: DescribeSubnetGroupsInput,
    cb?: (err: any, data?: DescribeSubnetGroupsOutput) => void
  ): Promise<DescribeSubnetGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSubnetGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds one or more nodes to a DAX cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing DAX cluster.</p>
   *   - {InvalidClusterStateFault} <p>The requested DAX cluster is not in the <i>available</i> state.</p>
   *   - {InsufficientClusterCapacityFault} <p>There are not enough system resources to create the cluster you requested (or to resize an already-existing cluster). </p>
   *   - {InvalidVPCNetworkStateFault} <p>The VPC network is in an invalid state.</p>
   *   - {NodeQuotaForClusterExceededFault} <p>You have attempted to exceed the maximum number of nodes for a DAX cluster.</p>
   *   - {NodeQuotaForCustomerExceededFault} <p>You have attempted to exceed the maximum number of nodes for your AWS account.</p>
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public increaseReplicationFactor(
    args: IncreaseReplicationFactorInput
  ): Promise<IncreaseReplicationFactorOutput>;
  public increaseReplicationFactor(
    args: IncreaseReplicationFactorInput,
    cb: (err: any, data?: IncreaseReplicationFactorOutput) => void
  ): void;
  public increaseReplicationFactor(
    args: IncreaseReplicationFactorInput,
    cb?: (err: any, data?: IncreaseReplicationFactorOutput) => void
  ): Promise<IncreaseReplicationFactorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new IncreaseReplicationFactorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List all of the tags for a DAX cluster. You can call <code>ListTags</code> up to 10 times per second, per account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing DAX cluster.</p>
   *   - {InvalidARNFault} <p>The Amazon Resource Name (ARN) supplied in the request is not valid.</p>
   *   - {InvalidClusterStateFault} <p>The requested DAX cluster is not in the <i>available</i> state.</p>
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTags(args: ListTagsInput): Promise<ListTagsOutput>;
  public listTags(
    args: ListTagsInput,
    cb: (err: any, data?: ListTagsOutput) => void
  ): void;
  public listTags(
    args: ListTagsInput,
    cb?: (err: any, data?: ListTagsOutput) => void
  ): Promise<ListTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Reboots a single node of a DAX cluster. The reboot action takes place as soon as possible. During the reboot, the node status is set to REBOOTING.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing DAX cluster.</p>
   *   - {NodeNotFoundFault} <p>None of the nodes in the cluster have the given node ID.</p>
   *   - {InvalidClusterStateFault} <p>The requested DAX cluster is not in the <i>available</i> state.</p>
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rebootNode(args: RebootNodeInput): Promise<RebootNodeOutput>;
  public rebootNode(
    args: RebootNodeInput,
    cb: (err: any, data?: RebootNodeOutput) => void
  ): void;
  public rebootNode(
    args: RebootNodeInput,
    cb?: (err: any, data?: RebootNodeOutput) => void
  ): Promise<RebootNodeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RebootNodeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a set of tags with a DAX resource. You can call <code>TagResource</code> up to 5 times per second, per account. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing DAX cluster.</p>
   *   - {TagQuotaPerResourceExceeded} <p>You have exceeded the maximum number of tags for this DAX cluster.</p>
   *   - {InvalidARNFault} <p>The Amazon Resource Name (ARN) supplied in the request is not valid.</p>
   *   - {InvalidClusterStateFault} <p>The requested DAX cluster is not in the <i>available</i> state.</p>
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the association of tags from a DAX resource. You can call <code>UntagResource</code> up to 5 times per second, per account. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing DAX cluster.</p>
   *   - {InvalidARNFault} <p>The Amazon Resource Name (ARN) supplied in the request is not valid.</p>
   *   - {TagNotFoundFault} <p>The tag does not exist.</p>
   *   - {InvalidClusterStateFault} <p>The requested DAX cluster is not in the <i>available</i> state.</p>
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the settings for a DAX cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidClusterStateFault} <p>The requested DAX cluster is not in the <i>available</i> state.</p>
   *   - {ClusterNotFoundFault} <p>The requested cluster ID does not refer to an existing DAX cluster.</p>
   *   - {InvalidParameterGroupStateFault} <p>One or more parameters in a parameter group are in an invalid state.</p>
   *   - {ParameterGroupNotFoundFault} <p>The specified parameter group does not exist.</p>
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateCluster(args: UpdateClusterInput): Promise<UpdateClusterOutput>;
  public updateCluster(
    args: UpdateClusterInput,
    cb: (err: any, data?: UpdateClusterOutput) => void
  ): void;
  public updateCluster(
    args: UpdateClusterInput,
    cb?: (err: any, data?: UpdateClusterOutput) => void
  ): Promise<UpdateClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterGroupStateFault} <p>One or more parameters in a parameter group are in an invalid state.</p>
   *   - {ParameterGroupNotFoundFault} <p>The specified parameter group does not exist.</p>
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {InvalidParameterValueException} <p>The value for a parameter is invalid.</p>
   *   - {InvalidParameterCombinationException} <p>Two or more incompatible parameters were specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateParameterGroup(
    args: UpdateParameterGroupInput
  ): Promise<UpdateParameterGroupOutput>;
  public updateParameterGroup(
    args: UpdateParameterGroupInput,
    cb: (err: any, data?: UpdateParameterGroupOutput) => void
  ): void;
  public updateParameterGroup(
    args: UpdateParameterGroupInput,
    cb?: (err: any, data?: UpdateParameterGroupOutput) => void
  ): Promise<UpdateParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies an existing subnet group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SubnetGroupNotFoundFault} <p>The requested subnet group name does not refer to an existing subnet group.</p>
   *   - {SubnetQuotaExceededFault} <p>The request cannot be processed because it would exceed the allowed number of subnets in a subnet group.</p>
   *   - {SubnetInUse} <p>The requested subnet is being used by another subnet group.</p>
   *   - {InvalidSubnet} <p>An invalid subnet identifier was specified.</p>
   *   - {ServiceLinkedRoleNotFoundFault} ServiceLinkedRoleNotFoundFault shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSubnetGroup(
    args: UpdateSubnetGroupInput
  ): Promise<UpdateSubnetGroupOutput>;
  public updateSubnetGroup(
    args: UpdateSubnetGroupInput,
    cb: (err: any, data?: UpdateSubnetGroupOutput) => void
  ): void;
  public updateSubnetGroup(
    args: UpdateSubnetGroupInput,
    cb?: (err: any, data?: UpdateSubnetGroupOutput) => void
  ): Promise<UpdateSubnetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSubnetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
