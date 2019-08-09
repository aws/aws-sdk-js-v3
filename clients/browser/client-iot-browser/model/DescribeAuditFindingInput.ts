import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAuditFindingInput: _Structure_ = {
  type: "structure",
  required: ["findingId"],
  members: {
    findingId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "findingId"
    }
  }
};
