import {
  _PathToObjectIdentifiers,
  _UnmarshalledPathToObjectIdentifiers
} from "./_PathToObjectIdentifiers";

/**
 * <p>Represents the output of a <a>ListObjectParentPaths</a> response operation.</p>
 */
export interface _BatchListObjectParentPathsResponse {
  /**
   * <p>Returns the path to the <code>ObjectIdentifiers</code> that are associated with the directory.</p>
   */
  PathToObjectIdentifiersList?:
    | Array<_PathToObjectIdentifiers>
    | Iterable<_PathToObjectIdentifiers>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface _UnmarshalledBatchListObjectParentPathsResponse
  extends _BatchListObjectParentPathsResponse {
  /**
   * <p>Returns the path to the <code>ObjectIdentifiers</code> that are associated with the directory.</p>
   */
  PathToObjectIdentifiersList?: Array<_UnmarshalledPathToObjectIdentifiers>;
}
