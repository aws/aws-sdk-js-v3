// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateLicenseCommand,
  AssociateLicenseCommandInput,
  AssociateLicenseCommandOutput,
} from "./commands/AssociateLicenseCommand";
import {
  CreateWorkspaceApiKeyCommand,
  CreateWorkspaceApiKeyCommandInput,
  CreateWorkspaceApiKeyCommandOutput,
} from "./commands/CreateWorkspaceApiKeyCommand";
import {
  CreateWorkspaceCommand,
  CreateWorkspaceCommandInput,
  CreateWorkspaceCommandOutput,
} from "./commands/CreateWorkspaceCommand";
import {
  DeleteWorkspaceApiKeyCommand,
  DeleteWorkspaceApiKeyCommandInput,
  DeleteWorkspaceApiKeyCommandOutput,
} from "./commands/DeleteWorkspaceApiKeyCommand";
import {
  DeleteWorkspaceCommand,
  DeleteWorkspaceCommandInput,
  DeleteWorkspaceCommandOutput,
} from "./commands/DeleteWorkspaceCommand";
import {
  DescribeWorkspaceAuthenticationCommand,
  DescribeWorkspaceAuthenticationCommandInput,
  DescribeWorkspaceAuthenticationCommandOutput,
} from "./commands/DescribeWorkspaceAuthenticationCommand";
import {
  DescribeWorkspaceCommand,
  DescribeWorkspaceCommandInput,
  DescribeWorkspaceCommandOutput,
} from "./commands/DescribeWorkspaceCommand";
import {
  DescribeWorkspaceConfigurationCommand,
  DescribeWorkspaceConfigurationCommandInput,
  DescribeWorkspaceConfigurationCommandOutput,
} from "./commands/DescribeWorkspaceConfigurationCommand";
import {
  DisassociateLicenseCommand,
  DisassociateLicenseCommandInput,
  DisassociateLicenseCommandOutput,
} from "./commands/DisassociateLicenseCommand";
import {
  ListPermissionsCommand,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput,
} from "./commands/ListPermissionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWorkspacesCommand,
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput,
} from "./commands/ListWorkspacesCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdatePermissionsCommand,
  UpdatePermissionsCommandInput,
  UpdatePermissionsCommandOutput,
} from "./commands/UpdatePermissionsCommand";
import {
  UpdateWorkspaceAuthenticationCommand,
  UpdateWorkspaceAuthenticationCommandInput,
  UpdateWorkspaceAuthenticationCommandOutput,
} from "./commands/UpdateWorkspaceAuthenticationCommand";
import {
  UpdateWorkspaceCommand,
  UpdateWorkspaceCommandInput,
  UpdateWorkspaceCommandOutput,
} from "./commands/UpdateWorkspaceCommand";
import {
  UpdateWorkspaceConfigurationCommand,
  UpdateWorkspaceConfigurationCommandInput,
  UpdateWorkspaceConfigurationCommandOutput,
} from "./commands/UpdateWorkspaceConfigurationCommand";
import { GrafanaClient } from "./GrafanaClient";

/**
 * <p>Amazon Managed Grafana is a fully managed and secure data visualization service that you can use to
 *        instantly query, correlate, and visualize operational metrics, logs, and traces from multiple sources.
 *        Amazon Managed Grafana makes it easy to deploy, operate, and scale Grafana, a widely deployed data visualization tool
 *        that is popular for its extensible data support.</p>
 *          <p>With Amazon Managed Grafana, you create logically isolated Grafana servers called <i>workspaces</i>. In
 *         a workspace,  you can create  Grafana dashboards and visualizations to analyze your metrics, logs, and traces without having to
 *        build, package, or deploy any hardware to run Grafana servers.  </p>
 */
export class Grafana extends GrafanaClient {
  /**
   * <p>Assigns a Grafana Enterprise license to a workspace. Upgrading to Grafana Enterprise
   *             incurs additional fees. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/upgrade-to-Grafana-Enterprise.html">Upgrade a workspace to
   *                 Grafana Enterprise</a>.</p>
   */
  public associateLicense(
    args: AssociateLicenseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateLicenseCommandOutput>;
  public associateLicense(
    args: AssociateLicenseCommandInput,
    cb: (err: any, data?: AssociateLicenseCommandOutput) => void
  ): void;
  public associateLicense(
    args: AssociateLicenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateLicenseCommandOutput) => void
  ): void;
  public associateLicense(
    args: AssociateLicenseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateLicenseCommandOutput) => void),
    cb?: (err: any, data?: AssociateLicenseCommandOutput) => void
  ): Promise<AssociateLicenseCommandOutput> | void {
    const command = new AssociateLicenseCommand(args);
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
   * <p>Creates a <i>workspace</i>. In a workspace, you can create Grafana
   *             dashboards and visualizations to analyze your metrics, logs, and traces. You don't have to
   *             build, package, or deploy any hardware to run the Grafana server.</p>
   *         <p>Don't use <code>CreateWorkspace</code> to modify an existing workspace. Instead,
   *             use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspace.html">UpdateWorkspace</a>.</p>
   */
  public createWorkspace(
    args: CreateWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkspaceCommandOutput>;
  public createWorkspace(
    args: CreateWorkspaceCommandInput,
    cb: (err: any, data?: CreateWorkspaceCommandOutput) => void
  ): void;
  public createWorkspace(
    args: CreateWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkspaceCommandOutput) => void
  ): void;
  public createWorkspace(
    args: CreateWorkspaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkspaceCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkspaceCommandOutput) => void
  ): Promise<CreateWorkspaceCommandOutput> | void {
    const command = new CreateWorkspaceCommand(args);
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
   * <p>Creates a Grafana API key for the workspace.  This key can be used to
   *             authenticate requests sent to the workspace's HTTP API.
   *             See <a href="https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html">https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html</a>
   *             for available APIs and example requests.</p>
   */
  public createWorkspaceApiKey(
    args: CreateWorkspaceApiKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkspaceApiKeyCommandOutput>;
  public createWorkspaceApiKey(
    args: CreateWorkspaceApiKeyCommandInput,
    cb: (err: any, data?: CreateWorkspaceApiKeyCommandOutput) => void
  ): void;
  public createWorkspaceApiKey(
    args: CreateWorkspaceApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkspaceApiKeyCommandOutput) => void
  ): void;
  public createWorkspaceApiKey(
    args: CreateWorkspaceApiKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkspaceApiKeyCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkspaceApiKeyCommandOutput) => void
  ): Promise<CreateWorkspaceApiKeyCommandOutput> | void {
    const command = new CreateWorkspaceApiKeyCommand(args);
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
   * <p>Deletes an Amazon Managed Grafana workspace.</p>
   */
  public deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkspaceCommandOutput>;
  public deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): void;
  public deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): void;
  public deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkspaceCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): Promise<DeleteWorkspaceCommandOutput> | void {
    const command = new DeleteWorkspaceCommand(args);
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
   * <p>Deletes a Grafana API key for the workspace.</p>
   */
  public deleteWorkspaceApiKey(
    args: DeleteWorkspaceApiKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkspaceApiKeyCommandOutput>;
  public deleteWorkspaceApiKey(
    args: DeleteWorkspaceApiKeyCommandInput,
    cb: (err: any, data?: DeleteWorkspaceApiKeyCommandOutput) => void
  ): void;
  public deleteWorkspaceApiKey(
    args: DeleteWorkspaceApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkspaceApiKeyCommandOutput) => void
  ): void;
  public deleteWorkspaceApiKey(
    args: DeleteWorkspaceApiKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkspaceApiKeyCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkspaceApiKeyCommandOutput) => void
  ): Promise<DeleteWorkspaceApiKeyCommandOutput> | void {
    const command = new DeleteWorkspaceApiKeyCommand(args);
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
   * <p>Displays information about one Amazon Managed Grafana workspace.</p>
   */
  public describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceCommandOutput>;
  public describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    cb: (err: any, data?: DescribeWorkspaceCommandOutput) => void
  ): void;
  public describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceCommandOutput) => void
  ): void;
  public describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWorkspaceCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorkspaceCommandOutput) => void
  ): Promise<DescribeWorkspaceCommandOutput> | void {
    const command = new DescribeWorkspaceCommand(args);
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
   * <p>Displays information about the authentication methods used in one Amazon Managed Grafana workspace.</p>
   */
  public describeWorkspaceAuthentication(
    args: DescribeWorkspaceAuthenticationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceAuthenticationCommandOutput>;
  public describeWorkspaceAuthentication(
    args: DescribeWorkspaceAuthenticationCommandInput,
    cb: (err: any, data?: DescribeWorkspaceAuthenticationCommandOutput) => void
  ): void;
  public describeWorkspaceAuthentication(
    args: DescribeWorkspaceAuthenticationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceAuthenticationCommandOutput) => void
  ): void;
  public describeWorkspaceAuthentication(
    args: DescribeWorkspaceAuthenticationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWorkspaceAuthenticationCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorkspaceAuthenticationCommandOutput) => void
  ): Promise<DescribeWorkspaceAuthenticationCommandOutput> | void {
    const command = new DescribeWorkspaceAuthenticationCommand(args);
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
   * <p>Gets the current configuration string for the given workspace.</p>
   */
  public describeWorkspaceConfiguration(
    args: DescribeWorkspaceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceConfigurationCommandOutput>;
  public describeWorkspaceConfiguration(
    args: DescribeWorkspaceConfigurationCommandInput,
    cb: (err: any, data?: DescribeWorkspaceConfigurationCommandOutput) => void
  ): void;
  public describeWorkspaceConfiguration(
    args: DescribeWorkspaceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceConfigurationCommandOutput) => void
  ): void;
  public describeWorkspaceConfiguration(
    args: DescribeWorkspaceConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWorkspaceConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorkspaceConfigurationCommandOutput) => void
  ): Promise<DescribeWorkspaceConfigurationCommandOutput> | void {
    const command = new DescribeWorkspaceConfigurationCommand(args);
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
   * <p>Removes the Grafana Enterprise license from a workspace.</p>
   */
  public disassociateLicense(
    args: DisassociateLicenseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateLicenseCommandOutput>;
  public disassociateLicense(
    args: DisassociateLicenseCommandInput,
    cb: (err: any, data?: DisassociateLicenseCommandOutput) => void
  ): void;
  public disassociateLicense(
    args: DisassociateLicenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateLicenseCommandOutput) => void
  ): void;
  public disassociateLicense(
    args: DisassociateLicenseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateLicenseCommandOutput) => void),
    cb?: (err: any, data?: DisassociateLicenseCommandOutput) => void
  ): Promise<DisassociateLicenseCommandOutput> | void {
    const command = new DisassociateLicenseCommand(args);
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
   * <p>Lists the users and groups who have the Grafana <code>Admin</code> and
   *             <code>Editor</code> roles in this workspace. If you use this
   *             operation without specifying <code>userId</code> or <code>groupId</code>, the operation returns
   *             the roles of all users
   *             and groups. If you specify a <code>userId</code> or a <code>groupId</code>, only the roles
   *             for that user or group are returned. If you do this, you can specify only one <code>userId</code> or
   *             one <code>groupId</code>.</p>
   */
  public listPermissions(
    args: ListPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionsCommandOutput>;
  public listPermissions(
    args: ListPermissionsCommandInput,
    cb: (err: any, data?: ListPermissionsCommandOutput) => void
  ): void;
  public listPermissions(
    args: ListPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionsCommandOutput) => void
  ): void;
  public listPermissions(
    args: ListPermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPermissionsCommandOutput) => void),
    cb?: (err: any, data?: ListPermissionsCommandOutput) => void
  ): Promise<ListPermissionsCommandOutput> | void {
    const command = new ListPermissionsCommand(args);
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
   * <p>The <code>ListTagsForResource</code> operation returns the tags that
   *             are associated with the Amazon Managed Service for Grafana resource specified by the <code>resourceArn</code>.
   *             Currently, the only resource that can be tagged is a workspace. </p>
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
   * <p>Returns a list of Amazon Managed Grafana workspaces in the account, with some information
   *             about each workspace. For more complete information about one workspace, use <a href="https://docs.aws.amazon.com/AAMG/latest/APIReference/API_DescribeWorkspace.html">DescribeWorkspace</a>.</p>
   */
  public listWorkspaces(
    args: ListWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkspacesCommandOutput>;
  public listWorkspaces(
    args: ListWorkspacesCommandInput,
    cb: (err: any, data?: ListWorkspacesCommandOutput) => void
  ): void;
  public listWorkspaces(
    args: ListWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkspacesCommandOutput) => void
  ): void;
  public listWorkspaces(
    args: ListWorkspacesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkspacesCommandOutput) => void),
    cb?: (err: any, data?: ListWorkspacesCommandOutput) => void
  ): Promise<ListWorkspacesCommandOutput> | void {
    const command = new ListWorkspacesCommand(args);
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
   * <p>The <code>TagResource</code> operation associates tags with an Amazon Managed Grafana resource.
   *             Currently, the only resource that can be tagged is workspaces. </p>
   *         <p>If you specify a new tag key for the resource, this tag is appended to the list of tags associated
   *             with the resource.  If you specify a tag key that is already associated with the resource, the new tag
   *             value that you specify replaces the previous value for that tag.</p>
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
   * <p>The <code>UntagResource</code> operation removes the association of the tag with the Amazon Managed Grafana resource.
   *         </p>
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
   * <p>Updates which users in a workspace have the Grafana <code>Admin</code> or <code>Editor</code> roles.</p>
   */
  public updatePermissions(
    args: UpdatePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePermissionsCommandOutput>;
  public updatePermissions(
    args: UpdatePermissionsCommandInput,
    cb: (err: any, data?: UpdatePermissionsCommandOutput) => void
  ): void;
  public updatePermissions(
    args: UpdatePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePermissionsCommandOutput) => void
  ): void;
  public updatePermissions(
    args: UpdatePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePermissionsCommandOutput) => void),
    cb?: (err: any, data?: UpdatePermissionsCommandOutput) => void
  ): Promise<UpdatePermissionsCommandOutput> | void {
    const command = new UpdatePermissionsCommand(args);
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
   * <p>Modifies an existing Amazon Managed Grafana workspace. If you use this operation and omit any
   *             optional parameters, the existing values of those parameters are not changed.</p>
   *         <p>To modify the user authentication methods that the workspace uses, such as SAML or IAM Identity Center,
   *             use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspaceAuthentication.html">UpdateWorkspaceAuthentication</a>.</p>
   *         <p>To modify which users in the workspace have the <code>Admin</code> and <code>Editor</code> Grafana roles,
   *             use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a>.</p>
   */
  public updateWorkspace(
    args: UpdateWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspaceCommandOutput>;
  public updateWorkspace(
    args: UpdateWorkspaceCommandInput,
    cb: (err: any, data?: UpdateWorkspaceCommandOutput) => void
  ): void;
  public updateWorkspace(
    args: UpdateWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceCommandOutput) => void
  ): void;
  public updateWorkspace(
    args: UpdateWorkspaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorkspaceCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkspaceCommandOutput) => void
  ): Promise<UpdateWorkspaceCommandOutput> | void {
    const command = new UpdateWorkspaceCommand(args);
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
   * <p>Use this operation to define the identity provider (IdP) that this workspace
   *             authenticates users from, using SAML. You can also map SAML assertion attributes to
   *             workspace user information and define which groups in the assertion attribute are to have
   *             the <code>Admin</code> and <code>Editor</code> roles in the workspace.</p>
   */
  public updateWorkspaceAuthentication(
    args: UpdateWorkspaceAuthenticationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspaceAuthenticationCommandOutput>;
  public updateWorkspaceAuthentication(
    args: UpdateWorkspaceAuthenticationCommandInput,
    cb: (err: any, data?: UpdateWorkspaceAuthenticationCommandOutput) => void
  ): void;
  public updateWorkspaceAuthentication(
    args: UpdateWorkspaceAuthenticationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceAuthenticationCommandOutput) => void
  ): void;
  public updateWorkspaceAuthentication(
    args: UpdateWorkspaceAuthenticationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorkspaceAuthenticationCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkspaceAuthenticationCommandOutput) => void
  ): Promise<UpdateWorkspaceAuthenticationCommandOutput> | void {
    const command = new UpdateWorkspaceAuthenticationCommand(args);
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
   * <p>Updates the configuration string for the given workspace</p>
   */
  public updateWorkspaceConfiguration(
    args: UpdateWorkspaceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspaceConfigurationCommandOutput>;
  public updateWorkspaceConfiguration(
    args: UpdateWorkspaceConfigurationCommandInput,
    cb: (err: any, data?: UpdateWorkspaceConfigurationCommandOutput) => void
  ): void;
  public updateWorkspaceConfiguration(
    args: UpdateWorkspaceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceConfigurationCommandOutput) => void
  ): void;
  public updateWorkspaceConfiguration(
    args: UpdateWorkspaceConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorkspaceConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkspaceConfigurationCommandOutput) => void
  ): Promise<UpdateWorkspaceConfigurationCommandOutput> | void {
    const command = new UpdateWorkspaceConfigurationCommand(args);
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
