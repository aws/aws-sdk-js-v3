import {
  _AttachmentDetails,
  _UnmarshalledAttachmentDetails
} from "./_AttachmentDetails";

/**
 * <p>A communication associated with an AWS Support case. The communication consists of the case ID, the message body, attachment information, the account email address, and the date and time of the communication.</p>
 */
export interface _Communication {
  /**
   * <p>The AWS Support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i> </p>
   */
  caseId?: string;

  /**
   * <p>The text of the communication between the customer and AWS Support.</p>
   */
  body?: string;

  /**
   * <p>The email address of the account that submitted the AWS Support case.</p>
   */
  submittedBy?: string;

  /**
   * <p>The time the communication was created.</p>
   */
  timeCreated?: string;

  /**
   * <p>Information about the attachments to the case communication.</p>
   */
  attachmentSet?: Array<_AttachmentDetails> | Iterable<_AttachmentDetails>;
}

export interface _UnmarshalledCommunication extends _Communication {
  /**
   * <p>Information about the attachments to the case communication.</p>
   */
  attachmentSet?: Array<_UnmarshalledAttachmentDetails>;
}
