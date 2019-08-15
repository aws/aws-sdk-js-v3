import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyReservedInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedInstancesModificationId: {
      shape: {
        type: "string"
      },
      locationName: "reservedInstancesModificationId"
    }
  }
};
