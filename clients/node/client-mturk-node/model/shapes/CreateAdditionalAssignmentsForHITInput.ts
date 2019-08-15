import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAdditionalAssignmentsForHITInput: _Structure_ = {
  type: "structure",
  required: ["HITId", "NumberOfAdditionalAssignments"],
  members: {
    HITId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NumberOfAdditionalAssignments: {
      shape: {
        type: "integer"
      }
    },
    UniqueRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
