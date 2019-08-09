/**
 * <p>An object representing a change in state for a task attachment.</p>
 */
export interface _AttachmentStateChange {
  /**
   * <p>The Amazon Resource Name (ARN) of the attachment.</p>
   */
  attachmentArn: string;

  /**
   * <p>The status of the attachment.</p>
   */
  status: string;
}

export type _UnmarshalledAttachmentStateChange = _AttachmentStateChange;
