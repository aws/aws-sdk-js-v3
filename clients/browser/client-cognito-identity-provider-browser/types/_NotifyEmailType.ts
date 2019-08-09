/**
 * <p>The notify email type.</p>
 */
export interface _NotifyEmailType {
  /**
   * <p>The subject.</p>
   */
  Subject: string;

  /**
   * <p>The HTML body.</p>
   */
  HtmlBody?: string;

  /**
   * <p>The text body.</p>
   */
  TextBody?: string;
}

export type _UnmarshalledNotifyEmailType = _NotifyEmailType;
