import {
  _WorkspaceRequest,
  _UnmarshalledWorkspaceRequest
} from "./_WorkspaceRequest";

/**
 * <p>Describes a WorkSpace that cannot be created.</p>
 */
export interface _FailedCreateWorkspaceRequest {
  /**
   * <p>Information about the WorkSpace.</p>
   */
  WorkspaceRequest?: _WorkspaceRequest;

  /**
   * <p>The error code that is returned if the WorkSpace cannot be created.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned if the WorkSpace cannot be created.</p>
   */
  ErrorMessage?: string;
}

export interface _UnmarshalledFailedCreateWorkspaceRequest
  extends _FailedCreateWorkspaceRequest {
  /**
   * <p>Information about the WorkSpace.</p>
   */
  WorkspaceRequest?: _UnmarshalledWorkspaceRequest;
}
