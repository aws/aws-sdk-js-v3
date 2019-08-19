import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This issue occurs when the same <code>clientRequestToken</code> is used with the <code>StartImportTask</code> action, but with different parameters. For example, you use the same request token but have two different import URLs, you can encounter this issue. If the import tasks are meant to be different, use a different <code>clientRequestToken</code>, and try again.</p>
 */
export interface ResourceInUseException
  extends __ServiceException__<_ResourceInUseExceptionDetails> {
  name: "ResourceInUseException";
}

export interface _ResourceInUseExceptionDetails {
  /**
   * _Message shape
   */
  message?: string;
}
