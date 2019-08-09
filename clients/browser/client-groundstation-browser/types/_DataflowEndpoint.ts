import { _SocketAddress, _UnmarshalledSocketAddress } from "./_SocketAddress";

/**
 * <p>Information about a dataflow endpoint.</p>
 */
export interface _DataflowEndpoint {
  /**
   * <p>Socket address of a dataflow endpoint.</p>
   */
  address?: _SocketAddress;

  /**
   * <p>Name of a dataflow endpoint.</p>
   */
  name?: string;

  /**
   * <p>Status of a dataflow endpoint.</p>
   */
  status?: "created" | "creating" | "deleted" | "deleting" | "failed" | string;
}

export interface _UnmarshalledDataflowEndpoint extends _DataflowEndpoint {
  /**
   * <p>Socket address of a dataflow endpoint.</p>
   */
  address?: _UnmarshalledSocketAddress;
}
