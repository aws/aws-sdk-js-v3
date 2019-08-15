import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReplaceRouteTableAssociationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NewAssociationId: {
      shape: {
        type: "string"
      },
      locationName: "newAssociationId"
    }
  }
};
