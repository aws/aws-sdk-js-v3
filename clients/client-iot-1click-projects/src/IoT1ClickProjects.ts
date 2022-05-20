// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateDeviceWithPlacementCommand,
  AssociateDeviceWithPlacementCommandInput,
  AssociateDeviceWithPlacementCommandOutput,
} from "./commands/AssociateDeviceWithPlacementCommand";
import {
  CreatePlacementCommand,
  CreatePlacementCommandInput,
  CreatePlacementCommandOutput,
} from "./commands/CreatePlacementCommand";
import {
  CreateProjectCommand,
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
} from "./commands/CreateProjectCommand";
import {
  DeletePlacementCommand,
  DeletePlacementCommandInput,
  DeletePlacementCommandOutput,
} from "./commands/DeletePlacementCommand";
import {
  DeleteProjectCommand,
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput,
} from "./commands/DeleteProjectCommand";
import {
  DescribePlacementCommand,
  DescribePlacementCommandInput,
  DescribePlacementCommandOutput,
} from "./commands/DescribePlacementCommand";
import {
  DescribeProjectCommand,
  DescribeProjectCommandInput,
  DescribeProjectCommandOutput,
} from "./commands/DescribeProjectCommand";
import {
  DisassociateDeviceFromPlacementCommand,
  DisassociateDeviceFromPlacementCommandInput,
  DisassociateDeviceFromPlacementCommandOutput,
} from "./commands/DisassociateDeviceFromPlacementCommand";
import {
  GetDevicesInPlacementCommand,
  GetDevicesInPlacementCommandInput,
  GetDevicesInPlacementCommandOutput,
} from "./commands/GetDevicesInPlacementCommand";
import {
  ListPlacementsCommand,
  ListPlacementsCommandInput,
  ListPlacementsCommandOutput,
} from "./commands/ListPlacementsCommand";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "./commands/ListProjectsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdatePlacementCommand,
  UpdatePlacementCommandInput,
  UpdatePlacementCommandOutput,
} from "./commands/UpdatePlacementCommand";
import {
  UpdateProjectCommand,
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput,
} from "./commands/UpdateProjectCommand";
import { IoT1ClickProjectsClient } from "./IoT1ClickProjectsClient";

/**
 * <p>The AWS IoT 1-Click Projects API Reference</p>
 */
export class IoT1ClickProjects extends IoT1ClickProjectsClient {
  /**
   * <p>Associates a physical device with a placement.</p>
   */
  public associateDeviceWithPlacement(
    args: AssociateDeviceWithPlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDeviceWithPlacementCommandOutput>;
  public associateDeviceWithPlacement(
    args: AssociateDeviceWithPlacementCommandInput,
    cb: (err: any, data?: AssociateDeviceWithPlacementCommandOutput) => void
  ): void;
  public associateDeviceWithPlacement(
    args: AssociateDeviceWithPlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDeviceWithPlacementCommandOutput) => void
  ): void;
  public associateDeviceWithPlacement(
    args: AssociateDeviceWithPlacementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateDeviceWithPlacementCommandOutput) => void),
    cb?: (err: any, data?: AssociateDeviceWithPlacementCommandOutput) => void
  ): Promise<AssociateDeviceWithPlacementCommandOutput> | void {
    const command = new AssociateDeviceWithPlacementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an empty placement.</p>
   */
  public createPlacement(
    args: CreatePlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePlacementCommandOutput>;
  public createPlacement(
    args: CreatePlacementCommandInput,
    cb: (err: any, data?: CreatePlacementCommandOutput) => void
  ): void;
  public createPlacement(
    args: CreatePlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlacementCommandOutput) => void
  ): void;
  public createPlacement(
    args: CreatePlacementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePlacementCommandOutput) => void),
    cb?: (err: any, data?: CreatePlacementCommandOutput) => void
  ): Promise<CreatePlacementCommandOutput> | void {
    const command = new CreatePlacementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an empty project with a placement template. A project contains zero or more
   *       placements that adhere to the placement template defined in the project.</p>
   */
  public createProject(
    args: CreateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProjectCommandOutput>;
  public createProject(
    args: CreateProjectCommandInput,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProjectCommandOutput) => void),
    cb?: (err: any, data?: CreateProjectCommandOutput) => void
  ): Promise<CreateProjectCommandOutput> | void {
    const command = new CreateProjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a placement. To delete a placement, it must not have any devices associated with
   *       it.</p>
   *          <note>
   *             <p>When you delete a placement, all associated data becomes irretrievable.</p>
   *          </note>
   */
  public deletePlacement(
    args: DeletePlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePlacementCommandOutput>;
  public deletePlacement(
    args: DeletePlacementCommandInput,
    cb: (err: any, data?: DeletePlacementCommandOutput) => void
  ): void;
  public deletePlacement(
    args: DeletePlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePlacementCommandOutput) => void
  ): void;
  public deletePlacement(
    args: DeletePlacementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePlacementCommandOutput) => void),
    cb?: (err: any, data?: DeletePlacementCommandOutput) => void
  ): Promise<DeletePlacementCommandOutput> | void {
    const command = new DeletePlacementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a project. To delete a project, it must not have any placements associated with
   *       it.</p>
   *          <note>
   *             <p>When you delete a project, all associated data becomes irretrievable.</p>
   *          </note>
   */
  public deleteProject(
    args: DeleteProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProjectCommandOutput>;
  public deleteProject(
    args: DeleteProjectCommandInput,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProjectCommandOutput) => void),
    cb?: (err: any, data?: DeleteProjectCommandOutput) => void
  ): Promise<DeleteProjectCommandOutput> | void {
    const command = new DeleteProjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a placement in a project.</p>
   */
  public describePlacement(
    args: DescribePlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePlacementCommandOutput>;
  public describePlacement(
    args: DescribePlacementCommandInput,
    cb: (err: any, data?: DescribePlacementCommandOutput) => void
  ): void;
  public describePlacement(
    args: DescribePlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePlacementCommandOutput) => void
  ): void;
  public describePlacement(
    args: DescribePlacementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePlacementCommandOutput) => void),
    cb?: (err: any, data?: DescribePlacementCommandOutput) => void
  ): Promise<DescribePlacementCommandOutput> | void {
    const command = new DescribePlacementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns an object describing a project.</p>
   */
  public describeProject(
    args: DescribeProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProjectCommandOutput>;
  public describeProject(
    args: DescribeProjectCommandInput,
    cb: (err: any, data?: DescribeProjectCommandOutput) => void
  ): void;
  public describeProject(
    args: DescribeProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProjectCommandOutput) => void
  ): void;
  public describeProject(
    args: DescribeProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProjectCommandOutput) => void),
    cb?: (err: any, data?: DescribeProjectCommandOutput) => void
  ): Promise<DescribeProjectCommandOutput> | void {
    const command = new DescribeProjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a physical device from a placement.</p>
   */
  public disassociateDeviceFromPlacement(
    args: DisassociateDeviceFromPlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDeviceFromPlacementCommandOutput>;
  public disassociateDeviceFromPlacement(
    args: DisassociateDeviceFromPlacementCommandInput,
    cb: (err: any, data?: DisassociateDeviceFromPlacementCommandOutput) => void
  ): void;
  public disassociateDeviceFromPlacement(
    args: DisassociateDeviceFromPlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDeviceFromPlacementCommandOutput) => void
  ): void;
  public disassociateDeviceFromPlacement(
    args: DisassociateDeviceFromPlacementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateDeviceFromPlacementCommandOutput) => void),
    cb?: (err: any, data?: DisassociateDeviceFromPlacementCommandOutput) => void
  ): Promise<DisassociateDeviceFromPlacementCommandOutput> | void {
    const command = new DisassociateDeviceFromPlacementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns an object enumerating the devices in a placement.</p>
   */
  public getDevicesInPlacement(
    args: GetDevicesInPlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDevicesInPlacementCommandOutput>;
  public getDevicesInPlacement(
    args: GetDevicesInPlacementCommandInput,
    cb: (err: any, data?: GetDevicesInPlacementCommandOutput) => void
  ): void;
  public getDevicesInPlacement(
    args: GetDevicesInPlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevicesInPlacementCommandOutput) => void
  ): void;
  public getDevicesInPlacement(
    args: GetDevicesInPlacementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDevicesInPlacementCommandOutput) => void),
    cb?: (err: any, data?: GetDevicesInPlacementCommandOutput) => void
  ): Promise<GetDevicesInPlacementCommandOutput> | void {
    const command = new GetDevicesInPlacementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the placement(s) of a project.</p>
   */
  public listPlacements(
    args: ListPlacementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPlacementsCommandOutput>;
  public listPlacements(
    args: ListPlacementsCommandInput,
    cb: (err: any, data?: ListPlacementsCommandOutput) => void
  ): void;
  public listPlacements(
    args: ListPlacementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPlacementsCommandOutput) => void
  ): void;
  public listPlacements(
    args: ListPlacementsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPlacementsCommandOutput) => void),
    cb?: (err: any, data?: ListPlacementsCommandOutput) => void
  ): Promise<ListPlacementsCommandOutput> | void {
    const command = new ListPlacementsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.</p>
   */
  public listProjects(
    args: ListProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProjectsCommandOutput>;
  public listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
  public listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;
  public listProjects(
    args: ListProjectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProjectsCommandOutput) => void),
    cb?: (err: any, data?: ListProjectsCommandOutput) => void
  ): Promise<ListProjectsCommandOutput> | void {
    const command = new ListProjectsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the tags (metadata key/value pairs) which you have assigned to the resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates or modifies tags for a resource. Tags are key/value pairs (metadata) that can be
   *       used to manage a resource. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging
   *         Strategies</a>.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes one or more tags (metadata key/value pairs) from a resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a placement with the given attributes. To clear an attribute, pass an empty value
   *       (i.e., "").</p>
   */
  public updatePlacement(
    args: UpdatePlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePlacementCommandOutput>;
  public updatePlacement(
    args: UpdatePlacementCommandInput,
    cb: (err: any, data?: UpdatePlacementCommandOutput) => void
  ): void;
  public updatePlacement(
    args: UpdatePlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePlacementCommandOutput) => void
  ): void;
  public updatePlacement(
    args: UpdatePlacementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePlacementCommandOutput) => void),
    cb?: (err: any, data?: UpdatePlacementCommandOutput) => void
  ): Promise<UpdatePlacementCommandOutput> | void {
    const command = new UpdatePlacementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a project associated with your AWS account and region. With the exception of
   *       device template names, you can pass just the values that need to be updated because the update
   *       request will change only the values that are provided. To clear a value, pass the empty string
   *       (i.e., <code>""</code>).</p>
   */
  public updateProject(
    args: UpdateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProjectCommandOutput>;
  public updateProject(
    args: UpdateProjectCommandInput,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProjectCommandOutput) => void),
    cb?: (err: any, data?: UpdateProjectCommandOutput) => void
  ): Promise<UpdateProjectCommandOutput> | void {
    const command = new UpdateProjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
