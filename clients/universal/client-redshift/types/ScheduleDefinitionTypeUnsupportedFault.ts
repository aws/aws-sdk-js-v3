import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The definition you submitted is not supported.</p>
 */
export interface ScheduleDefinitionTypeUnsupportedFault
  extends __ServiceException__<_ScheduleDefinitionTypeUnsupportedFaultDetails> {
  name: "ScheduleDefinitionTypeUnsupportedFault";
}

export interface _ScheduleDefinitionTypeUnsupportedFaultDetails {}
