/**
 * <p>Sends information about the detector model instance and the event which triggered the action to an AWS SQS queue.</p>
 */
export interface _SqsAction {
  /**
   * <p>The URL of the SQS queue where the data is written.</p>
   */
  queueUrl: string;

  /**
   * <p>Set this to TRUE if you want the data to be Base-64 encoded before it is written to the queue. Otherwise, set this to FALSE.</p>
   */
  useBase64?: boolean;
}

export type _UnmarshalledSqsAction = _SqsAction;
