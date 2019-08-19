/**
 * <p>An error or warning for the operation.</p>
 */
export interface _DashboardValidationMessage {
  /**
   * <p>The data path related to the message.</p>
   */
  DataPath?: string;

  /**
   * <p>A message describing the error or warning.</p>
   */
  Message?: string;
}

export type _UnmarshalledDashboardValidationMessage = _DashboardValidationMessage;
