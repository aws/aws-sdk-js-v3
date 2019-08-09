import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchScheduleActionDeleteRequest: _Structure_ = {
  type: "structure",
  required: ["ActionNames"],
  members: {
    ActionNames: {
      shape: ___listOf__string,
      locationName: "actionNames"
    }
  }
};
