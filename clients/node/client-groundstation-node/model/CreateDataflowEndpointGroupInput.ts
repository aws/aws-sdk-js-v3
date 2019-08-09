import { _EndpointDetailsList } from "./_EndpointDetailsList";
import { _TagsMap } from "./_TagsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDataflowEndpointGroupInput: _Structure_ = {
  type: "structure",
  required: ["endpointDetails"],
  members: {
    endpointDetails: {
      shape: _EndpointDetailsList
    },
    tags: {
      shape: _TagsMap
    }
  }
};
