/**
 * <p>Includes details of the list of the findings that can't be imported.</p>
 */
export interface _ImportFindingsError {
  /**
   * <p>The ID of the error made during the <code>BatchImportFindings</code> operation.</p>
   */
  Id: string;

  /**
   * <p>The code of the error made during the <code>BatchImportFindings</code> operation.</p>
   */
  ErrorCode: string;

  /**
   * <p>The message of the error made during the <code>BatchImportFindings</code> operation.</p>
   */
  ErrorMessage: string;
}

export type _UnmarshalledImportFindingsError = _ImportFindingsError;
