import { _SupportedEndpointTypeList } from "./_SupportedEndpointTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEndpointTypesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    SupportedEndpointTypes: {
      shape: _SupportedEndpointTypeList
    }
  }
};
