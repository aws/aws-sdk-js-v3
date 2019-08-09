import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The <code>TestFailover</code> action is not available.</p>
 */
export interface TestFailoverNotAvailableFault
  extends __ServiceException__<_TestFailoverNotAvailableFaultDetails> {
  name: "TestFailoverNotAvailableFault";
}

export interface _TestFailoverNotAvailableFaultDetails {}
