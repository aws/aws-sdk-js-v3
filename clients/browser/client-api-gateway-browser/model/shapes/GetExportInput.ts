import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetExportInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "stageName", "exportType"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    stageName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "stage_name"
    },
    exportType: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "export_type"
    },
    parameters: {
      shape: _MapOfStringToString,
      location: "querystring"
    },
    accepts: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Accept"
    }
  }
};
