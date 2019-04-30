import { _ExportJobRequest } from "./_ExportJobRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateExportJobInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "ExportJobRequest"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "application-id"
    },
    ExportJobRequest: {
      shape: _ExportJobRequest
    }
  },
  payload: "ExportJobRequest"
};
