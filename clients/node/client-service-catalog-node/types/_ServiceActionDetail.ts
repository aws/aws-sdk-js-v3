import {
  _ServiceActionSummary,
  _UnmarshalledServiceActionSummary
} from "./_ServiceActionSummary";

/**
 * <p>An object containing detailed information about the self-service action.</p>
 */
export interface _ServiceActionDetail {
  /**
   * <p>Summary information about the self-service action.</p>
   */
  ServiceActionSummary?: _ServiceActionSummary;

  /**
   * <p>A map that defines the self-service action.</p>
   */
  Definition?:
    | {
        [key in
          | "Name"
          | "Version"
          | "AssumeRole"
          | "Parameters"
          | string]: string
      }
    | Iterable<
        ["Name" | "Version" | "AssumeRole" | "Parameters" | string, string]
      >;
}

export interface _UnmarshalledServiceActionDetail extends _ServiceActionDetail {
  /**
   * <p>Summary information about the self-service action.</p>
   */
  ServiceActionSummary?: _UnmarshalledServiceActionSummary;

  /**
   * <p>A map that defines the self-service action.</p>
   */
  Definition?: {
    [key in "Name" | "Version" | "AssumeRole" | "Parameters" | string]: string
  };
}
