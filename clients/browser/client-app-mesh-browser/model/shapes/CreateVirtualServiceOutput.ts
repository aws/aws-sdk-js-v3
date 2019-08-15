import { _VirtualServiceData } from "./_VirtualServiceData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVirtualServiceOutput: _Structure_ = {
  type: "structure",
  required: ["virtualService"],
  members: {
    virtualService: {
      shape: _VirtualServiceData
    }
  },
  payload: "virtualService"
};
