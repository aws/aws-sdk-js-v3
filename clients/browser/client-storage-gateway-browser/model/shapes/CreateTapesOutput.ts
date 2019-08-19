import { _TapeARNs } from "./_TapeARNs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTapesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TapeARNs: {
      shape: _TapeARNs
    }
  }
};
