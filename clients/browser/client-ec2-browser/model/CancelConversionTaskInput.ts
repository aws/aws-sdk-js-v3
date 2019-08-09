import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelConversionTaskInput: _Structure_ = {
  type: "structure",
  required: ["ConversionTaskId"],
  members: {
    ConversionTaskId: {
      shape: {
        type: "string"
      },
      locationName: "conversionTaskId"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    ReasonMessage: {
      shape: {
        type: "string"
      },
      locationName: "reasonMessage"
    }
  }
};
