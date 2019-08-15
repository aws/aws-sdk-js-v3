import { _ServiceActionDetail } from "./_ServiceActionDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateServiceActionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceActionDetail: {
      shape: _ServiceActionDetail
    }
  }
};
