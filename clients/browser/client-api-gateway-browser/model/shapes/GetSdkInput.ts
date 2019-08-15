import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSdkInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "stageName", "sdkType"],
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
    sdkType: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "sdk_type"
    },
    parameters: {
      shape: _MapOfStringToString,
      location: "querystring"
    }
  }
};
