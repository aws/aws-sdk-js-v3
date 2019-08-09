import { _Container } from "./_Container";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateContainerOutput: _Structure_ = {
  type: "structure",
  required: ["Container"],
  members: {
    Container: {
      shape: _Container
    }
  }
};
