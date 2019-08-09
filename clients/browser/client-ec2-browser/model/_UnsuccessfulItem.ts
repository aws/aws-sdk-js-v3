import { _UnsuccessfulItemError } from "./_UnsuccessfulItemError";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UnsuccessfulItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Error: {
      shape: _UnsuccessfulItemError,
      locationName: "error"
    },
    ResourceId: {
      shape: {
        type: "string"
      },
      locationName: "resourceId"
    }
  }
};
