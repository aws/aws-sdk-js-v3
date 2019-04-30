import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified message isn't in flight.</p>
 */
export interface MessageNotInflight
  extends __ServiceException__<_MessageNotInflightDetails> {
  name: "MessageNotInflight";
}

export interface _MessageNotInflightDetails {}
