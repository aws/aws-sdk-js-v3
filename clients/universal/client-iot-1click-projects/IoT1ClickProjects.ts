import { IoT1ClickProjectsClient } from "./IoT1ClickProjectsClient";
import { AssociateDeviceWithPlacementInput } from "./types/AssociateDeviceWithPlacementInput";
import { AssociateDeviceWithPlacementOutput } from "./types/AssociateDeviceWithPlacementOutput";
import { CreatePlacementInput } from "./types/CreatePlacementInput";
import { CreatePlacementOutput } from "./types/CreatePlacementOutput";
import { CreateProjectInput } from "./types/CreateProjectInput";
import { CreateProjectOutput } from "./types/CreateProjectOutput";
import { DeletePlacementInput } from "./types/DeletePlacementInput";
import { DeletePlacementOutput } from "./types/DeletePlacementOutput";
import { DeleteProjectInput } from "./types/DeleteProjectInput";
import { DeleteProjectOutput } from "./types/DeleteProjectOutput";
import { DescribePlacementInput } from "./types/DescribePlacementInput";
import { DescribePlacementOutput } from "./types/DescribePlacementOutput";
import { DescribeProjectInput } from "./types/DescribeProjectInput";
import { DescribeProjectOutput } from "./types/DescribeProjectOutput";
import { DisassociateDeviceFromPlacementInput } from "./types/DisassociateDeviceFromPlacementInput";
import { DisassociateDeviceFromPlacementOutput } from "./types/DisassociateDeviceFromPlacementOutput";
import { GetDevicesInPlacementInput } from "./types/GetDevicesInPlacementInput";
import { GetDevicesInPlacementOutput } from "./types/GetDevicesInPlacementOutput";
import { InternalFailureException } from "./types/InternalFailureException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { ListPlacementsInput } from "./types/ListPlacementsInput";
import { ListPlacementsOutput } from "./types/ListPlacementsOutput";
import { ListProjectsInput } from "./types/ListProjectsInput";
import { ListProjectsOutput } from "./types/ListProjectsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ResourceConflictException } from "./types/ResourceConflictException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdatePlacementInput } from "./types/UpdatePlacementInput";
import { UpdatePlacementOutput } from "./types/UpdatePlacementOutput";
import { UpdateProjectInput } from "./types/UpdateProjectInput";
import { UpdateProjectOutput } from "./types/UpdateProjectOutput";
import { AssociateDeviceWithPlacementCommand } from "./commands/AssociateDeviceWithPlacementCommand";
import { CreatePlacementCommand } from "./commands/CreatePlacementCommand";
import { CreateProjectCommand } from "./commands/CreateProjectCommand";
import { DeletePlacementCommand } from "./commands/DeletePlacementCommand";
import { DeleteProjectCommand } from "./commands/DeleteProjectCommand";
import { DescribePlacementCommand } from "./commands/DescribePlacementCommand";
import { DescribeProjectCommand } from "./commands/DescribeProjectCommand";
import { DisassociateDeviceFromPlacementCommand } from "./commands/DisassociateDeviceFromPlacementCommand";
import { GetDevicesInPlacementCommand } from "./commands/GetDevicesInPlacementCommand";
import { ListPlacementsCommand } from "./commands/ListPlacementsCommand";
import { ListProjectsCommand } from "./commands/ListProjectsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdatePlacementCommand } from "./commands/UpdatePlacementCommand";
import { UpdateProjectCommand } from "./commands/UpdateProjectCommand";

export class IoT1ClickProjects extends IoT1ClickProjectsClient {
  /**
   * <p>Associates a physical device with a placement.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p/>
   *   - {InvalidRequestException} <p/>
   *   - {ResourceConflictException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateDeviceWithPlacement(
    args: AssociateDeviceWithPlacementInput
  ): Promise<AssociateDeviceWithPlacementOutput>;
  public associateDeviceWithPlacement(
    args: AssociateDeviceWithPlacementInput,
    cb: (err: any, data?: AssociateDeviceWithPlacementOutput) => void
  ): void;
  public associateDeviceWithPlacement(
    args: AssociateDeviceWithPlacementInput,
    cb?: (err: any, data?: AssociateDeviceWithPlacementOutput) => void
  ): Promise<AssociateDeviceWithPlacementOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateDeviceWithPlacementCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an empty placement.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p/>
   *   - {InvalidRequestException} <p/>
   *   - {ResourceConflictException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPlacement(
    args: CreatePlacementInput
  ): Promise<CreatePlacementOutput>;
  public createPlacement(
    args: CreatePlacementInput,
    cb: (err: any, data?: CreatePlacementOutput) => void
  ): void;
  public createPlacement(
    args: CreatePlacementInput,
    cb?: (err: any, data?: CreatePlacementOutput) => void
  ): Promise<CreatePlacementOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePlacementCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an empty project with a placement template. A project contains zero or more placements that adhere to the placement template defined in the project.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p/>
   *   - {InvalidRequestException} <p/>
   *   - {ResourceConflictException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createProject(args: CreateProjectInput): Promise<CreateProjectOutput>;
  public createProject(
    args: CreateProjectInput,
    cb: (err: any, data?: CreateProjectOutput) => void
  ): void;
  public createProject(
    args: CreateProjectInput,
    cb?: (err: any, data?: CreateProjectOutput) => void
  ): Promise<CreateProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a placement. To delete a placement, it must not have any devices associated with it.</p> <note> <p>When you delete a placement, all associated data becomes irretrievable.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p/>
   *   - {InvalidRequestException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {TooManyRequestsException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePlacement(
    args: DeletePlacementInput
  ): Promise<DeletePlacementOutput>;
  public deletePlacement(
    args: DeletePlacementInput,
    cb: (err: any, data?: DeletePlacementOutput) => void
  ): void;
  public deletePlacement(
    args: DeletePlacementInput,
    cb?: (err: any, data?: DeletePlacementOutput) => void
  ): Promise<DeletePlacementOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePlacementCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a project. To delete a project, it must not have any placements associated with it.</p> <note> <p>When you delete a project, all associated data becomes irretrievable.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p/>
   *   - {InvalidRequestException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {TooManyRequestsException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteProject(args: DeleteProjectInput): Promise<DeleteProjectOutput>;
  public deleteProject(
    args: DeleteProjectInput,
    cb: (err: any, data?: DeleteProjectOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectInput,
    cb?: (err: any, data?: DeleteProjectOutput) => void
  ): Promise<DeleteProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a placement in a project.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p/>
   *   - {InvalidRequestException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describePlacement(
    args: DescribePlacementInput
  ): Promise<DescribePlacementOutput>;
  public describePlacement(
    args: DescribePlacementInput,
    cb: (err: any, data?: DescribePlacementOutput) => void
  ): void;
  public describePlacement(
    args: DescribePlacementInput,
    cb?: (err: any, data?: DescribePlacementOutput) => void
  ): Promise<DescribePlacementOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePlacementCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an object describing a project.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p/>
   *   - {InvalidRequestException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeProject(
    args: DescribeProjectInput
  ): Promise<DescribeProjectOutput>;
  public describeProject(
    args: DescribeProjectInput,
    cb: (err: any, data?: DescribeProjectOutput) => void
  ): void;
  public describeProject(
    args: DescribeProjectInput,
    cb?: (err: any, data?: DescribeProjectOutput) => void
  ): Promise<DescribeProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a physical device from a placement.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p/>
   *   - {InvalidRequestException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {TooManyRequestsException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateDeviceFromPlacement(
    args: DisassociateDeviceFromPlacementInput
  ): Promise<DisassociateDeviceFromPlacementOutput>;
  public disassociateDeviceFromPlacement(
    args: DisassociateDeviceFromPlacementInput,
    cb: (err: any, data?: DisassociateDeviceFromPlacementOutput) => void
  ): void;
  public disassociateDeviceFromPlacement(
    args: DisassociateDeviceFromPlacementInput,
    cb?: (err: any, data?: DisassociateDeviceFromPlacementOutput) => void
  ): Promise<DisassociateDeviceFromPlacementOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateDeviceFromPlacementCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an object enumerating the devices in a placement.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p/>
   *   - {InvalidRequestException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDevicesInPlacement(
    args: GetDevicesInPlacementInput
  ): Promise<GetDevicesInPlacementOutput>;
  public getDevicesInPlacement(
    args: GetDevicesInPlacementInput,
    cb: (err: any, data?: GetDevicesInPlacementOutput) => void
  ): void;
  public getDevicesInPlacement(
    args: GetDevicesInPlacementInput,
    cb?: (err: any, data?: GetDevicesInPlacementOutput) => void
  ): Promise<GetDevicesInPlacementOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDevicesInPlacementCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the placement(s) of a project.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p/>
   *   - {InvalidRequestException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPlacements(
    args: ListPlacementsInput
  ): Promise<ListPlacementsOutput>;
  public listPlacements(
    args: ListPlacementsInput,
    cb: (err: any, data?: ListPlacementsOutput) => void
  ): void;
  public listPlacements(
    args: ListPlacementsInput,
    cb?: (err: any, data?: ListPlacementsOutput) => void
  ): Promise<ListPlacementsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPlacementsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p/>
   *   - {InvalidRequestException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listProjects(args: ListProjectsInput): Promise<ListProjectsOutput>;
  public listProjects(
    args: ListProjectsInput,
    cb: (err: any, data?: ListProjectsOutput) => void
  ): void;
  public listProjects(
    args: ListProjectsInput,
    cb?: (err: any, data?: ListProjectsOutput) => void
  ): Promise<ListProjectsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListProjectsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the tags (metadata key/value pairs) which you have assigned to the resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p/>
   *   - {InvalidRequestException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or modifies tags for a resource. Tags are key/value pairs (metadata) that can be used to manage a resource. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p/>
   *   - {InvalidRequestException} <p/>
   *   - {ResourceNotFoundException} <p/>
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
   * <p>Removes one or more tags (metadata key/value pairs) from a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p/>
   *   - {InvalidRequestException} <p/>
   *   - {ResourceNotFoundException} <p/>
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
   * <p>Updates a placement with the given attributes. To clear an attribute, pass an empty value (i.e., "").</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p/>
   *   - {InvalidRequestException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {TooManyRequestsException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updatePlacement(
    args: UpdatePlacementInput
  ): Promise<UpdatePlacementOutput>;
  public updatePlacement(
    args: UpdatePlacementInput,
    cb: (err: any, data?: UpdatePlacementOutput) => void
  ): void;
  public updatePlacement(
    args: UpdatePlacementInput,
    cb?: (err: any, data?: UpdatePlacementOutput) => void
  ): Promise<UpdatePlacementOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdatePlacementCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a project associated with your AWS account and region. With the exception of device template names, you can pass just the values that need to be updated because the update request will change only the values that are provided. To clear a value, pass the empty string (i.e., <code>""</code>).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p/>
   *   - {InvalidRequestException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {TooManyRequestsException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateProject(args: UpdateProjectInput): Promise<UpdateProjectOutput>;
  public updateProject(
    args: UpdateProjectInput,
    cb: (err: any, data?: UpdateProjectOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectInput,
    cb?: (err: any, data?: UpdateProjectOutput) => void
  ): Promise<UpdateProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
