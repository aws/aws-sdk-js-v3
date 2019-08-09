/**
 * <p>The file name and ID of an attachment to a case communication. You can use the ID to retrieve the attachment with the <a>DescribeAttachment</a> operation.</p>
 */
export interface _AttachmentDetails {
  /**
   * <p>The ID of the attachment.</p>
   */
  attachmentId?: string;

  /**
   * <p>The file name of the attachment.</p>
   */
  fileName?: string;
}

export type _UnmarshalledAttachmentDetails = _AttachmentDetails;
