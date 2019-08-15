import { _ListOfSdkConfigurationProperty } from "./_ListOfSdkConfigurationProperty";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSdkTypeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    friendlyName: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    configurationProperties: {
      shape: _ListOfSdkConfigurationProperty
    }
  }
};
