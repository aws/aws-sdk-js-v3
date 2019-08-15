import { _ImageBuilder } from "./_ImageBuilder";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateImageBuilderOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ImageBuilder: {
      shape: _ImageBuilder
    }
  }
};
