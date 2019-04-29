import { _Consumer } from "./_Consumer";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterStreamConsumerOutput: _Structure_ = {
  type: "structure",
  required: ["Consumer"],
  members: {
    Consumer: {
      shape: _Consumer
    }
  }
};
