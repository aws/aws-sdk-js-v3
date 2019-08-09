import { _EngineDefaults } from "./_EngineDefaults";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEngineDefaultParametersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EngineDefaults: {
      shape: _EngineDefaults
    }
  }
};
