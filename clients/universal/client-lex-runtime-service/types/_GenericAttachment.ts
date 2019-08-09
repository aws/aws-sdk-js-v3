import { _Button, _UnmarshalledButton } from "./_Button";

/**
 * <p>Represents an option rendered to the user when a prompt is shown. It could be an image, a button, a link, or text. </p>
 */
export interface _GenericAttachment {
  /**
   * <p>The title of the option.</p>
   */
  title?: string;

  /**
   * <p>The subtitle shown below the title.</p>
   */
  subTitle?: string;

  /**
   * <p>The URL of an attachment to the response card.</p>
   */
  attachmentLinkUrl?: string;

  /**
   * <p>The URL of an image that is displayed to the user.</p>
   */
  imageUrl?: string;

  /**
   * <p>The list of options to show to the user.</p>
   */
  buttons?: Array<_Button> | Iterable<_Button>;
}

export interface _UnmarshalledGenericAttachment extends _GenericAttachment {
  /**
   * <p>The list of options to show to the user.</p>
   */
  buttons?: Array<_UnmarshalledButton>;
}
