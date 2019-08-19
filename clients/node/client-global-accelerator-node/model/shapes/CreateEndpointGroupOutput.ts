import { _EndpointGroup } from "./_EndpointGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateEndpointGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EndpointGroup: {
      shape: _EndpointGroup
    }
  }
};
