// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
  ListVersionsCommand,
  ListVersionsCommandInput,
  ListVersionsCommandOutput,
} from "./commands/ListVersionsCommand";
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
import { GrafanaClient, GrafanaClientConfig } from "./GrafanaClient";

const commands = {
  AssociateLicenseCommand,
  CreateWorkspaceCommand,
  CreateWorkspaceApiKeyCommand,
  DeleteWorkspaceCommand,
  DeleteWorkspaceApiKeyCommand,
  DescribeWorkspaceCommand,
  DescribeWorkspaceAuthenticationCommand,
  DescribeWorkspaceConfigurationCommand,
  DisassociateLicenseCommand,
  ListPermissionsCommand,
  ListTagsForResourceCommand,
  ListVersionsCommand,
  ListWorkspacesCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdatePermissionsCommand,
  UpdateWorkspaceCommand,
  UpdateWorkspaceAuthenticationCommand,
  UpdateWorkspaceConfigurationCommand,
};

export interface Grafana {
  /**
   * @see {@link AssociateLicenseCommand}
   */
  associateLicense(
    args: AssociateLicenseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateLicenseCommandOutput>;
  associateLicense(
    args: AssociateLicenseCommandInput,
    cb: (err: any, data?: AssociateLicenseCommandOutput) => void
  ): void;
  associateLicense(
    args: AssociateLicenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateLicenseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkspaceCommand}
   */
  createWorkspace(
    args: CreateWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkspaceCommandOutput>;
  createWorkspace(args: CreateWorkspaceCommandInput, cb: (err: any, data?: CreateWorkspaceCommandOutput) => void): void;
  createWorkspace(
    args: CreateWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkspaceApiKeyCommand}
   */
  createWorkspaceApiKey(
    args: CreateWorkspaceApiKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkspaceApiKeyCommandOutput>;
  createWorkspaceApiKey(
    args: CreateWorkspaceApiKeyCommandInput,
    cb: (err: any, data?: CreateWorkspaceApiKeyCommandOutput) => void
  ): void;
  createWorkspaceApiKey(
    args: CreateWorkspaceApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkspaceApiKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkspaceCommand}
   */
  deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkspaceCommandOutput>;
  deleteWorkspace(args: DeleteWorkspaceCommandInput, cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void): void;
  deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkspaceApiKeyCommand}
   */
  deleteWorkspaceApiKey(
    args: DeleteWorkspaceApiKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkspaceApiKeyCommandOutput>;
  deleteWorkspaceApiKey(
    args: DeleteWorkspaceApiKeyCommandInput,
    cb: (err: any, data?: DeleteWorkspaceApiKeyCommandOutput) => void
  ): void;
  deleteWorkspaceApiKey(
    args: DeleteWorkspaceApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkspaceApiKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkspaceCommand}
   */
  describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceCommandOutput>;
  describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    cb: (err: any, data?: DescribeWorkspaceCommandOutput) => void
  ): void;
  describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkspaceAuthenticationCommand}
   */
  describeWorkspaceAuthentication(
    args: DescribeWorkspaceAuthenticationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceAuthenticationCommandOutput>;
  describeWorkspaceAuthentication(
    args: DescribeWorkspaceAuthenticationCommandInput,
    cb: (err: any, data?: DescribeWorkspaceAuthenticationCommandOutput) => void
  ): void;
  describeWorkspaceAuthentication(
    args: DescribeWorkspaceAuthenticationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceAuthenticationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkspaceConfigurationCommand}
   */
  describeWorkspaceConfiguration(
    args: DescribeWorkspaceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceConfigurationCommandOutput>;
  describeWorkspaceConfiguration(
    args: DescribeWorkspaceConfigurationCommandInput,
    cb: (err: any, data?: DescribeWorkspaceConfigurationCommandOutput) => void
  ): void;
  describeWorkspaceConfiguration(
    args: DescribeWorkspaceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateLicenseCommand}
   */
  disassociateLicense(
    args: DisassociateLicenseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateLicenseCommandOutput>;
  disassociateLicense(
    args: DisassociateLicenseCommandInput,
    cb: (err: any, data?: DisassociateLicenseCommandOutput) => void
  ): void;
  disassociateLicense(
    args: DisassociateLicenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateLicenseCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPermissionsCommand}
   */
  listPermissions(
    args: ListPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionsCommandOutput>;
  listPermissions(args: ListPermissionsCommandInput, cb: (err: any, data?: ListPermissionsCommandOutput) => void): void;
  listPermissions(
    args: ListPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVersionsCommand}
   */
  listVersions(args: ListVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListVersionsCommandOutput>;
  listVersions(args: ListVersionsCommandInput, cb: (err: any, data?: ListVersionsCommandOutput) => void): void;
  listVersions(
    args: ListVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkspacesCommand}
   */
  listWorkspaces(
    args: ListWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkspacesCommandOutput>;
  listWorkspaces(args: ListWorkspacesCommandInput, cb: (err: any, data?: ListWorkspacesCommandOutput) => void): void;
  listWorkspaces(
    args: ListWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkspacesCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePermissionsCommand}
   */
  updatePermissions(
    args: UpdatePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePermissionsCommandOutput>;
  updatePermissions(
    args: UpdatePermissionsCommandInput,
    cb: (err: any, data?: UpdatePermissionsCommandOutput) => void
  ): void;
  updatePermissions(
    args: UpdatePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkspaceCommand}
   */
  updateWorkspace(
    args: UpdateWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspaceCommandOutput>;
  updateWorkspace(args: UpdateWorkspaceCommandInput, cb: (err: any, data?: UpdateWorkspaceCommandOutput) => void): void;
  updateWorkspace(
    args: UpdateWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkspaceAuthenticationCommand}
   */
  updateWorkspaceAuthentication(
    args: UpdateWorkspaceAuthenticationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspaceAuthenticationCommandOutput>;
  updateWorkspaceAuthentication(
    args: UpdateWorkspaceAuthenticationCommandInput,
    cb: (err: any, data?: UpdateWorkspaceAuthenticationCommandOutput) => void
  ): void;
  updateWorkspaceAuthentication(
    args: UpdateWorkspaceAuthenticationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceAuthenticationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkspaceConfigurationCommand}
   */
  updateWorkspaceConfiguration(
    args: UpdateWorkspaceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspaceConfigurationCommandOutput>;
  updateWorkspaceConfiguration(
    args: UpdateWorkspaceConfigurationCommandInput,
    cb: (err: any, data?: UpdateWorkspaceConfigurationCommandOutput) => void
  ): void;
  updateWorkspaceConfiguration(
    args: UpdateWorkspaceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceConfigurationCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Managed Grafana is a fully managed and secure data visualization service that
 *             you can use to instantly query, correlate, and visualize operational metrics, logs, and
 *             traces from multiple sources. Amazon Managed Grafana makes it easy to deploy, operate, and
 *             scale Grafana, a widely deployed data visualization tool that is popular for its
 *             extensible data support.</p>
 *          <p>With Amazon Managed Grafana, you create logically isolated Grafana servers called
 *                 <i>workspaces</i>. In a workspace, you can create Grafana dashboards
 *             and visualizations to analyze your metrics, logs, and traces without having to build,
 *             package, or deploy any hardware to run Grafana servers. </p>
 */
export class Grafana extends GrafanaClient implements Grafana {}
createAggregatedClient(commands, Grafana);
