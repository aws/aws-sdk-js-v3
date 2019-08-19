/**
 * <p>Describes a WorkSpace that could not be rebooted. (<a>RebootWorkspaces</a>), rebuilt (<a>RebuildWorkspaces</a>), terminated (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>).</p>
 */
export interface _FailedWorkspaceChangeRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;

  /**
   * <p>The error code that is returned if the WorkSpace cannot be rebooted.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned if the WorkSpace cannot be rebooted.</p>
   */
  ErrorMessage?: string;
}

export type _UnmarshalledFailedWorkspaceChangeRequest = _FailedWorkspaceChangeRequest;
