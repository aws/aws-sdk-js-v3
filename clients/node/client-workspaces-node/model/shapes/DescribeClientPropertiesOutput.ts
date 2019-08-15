import { _ClientPropertiesList } from "./_ClientPropertiesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClientPropertiesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientPropertiesList: {
      shape: _ClientPropertiesList
    }
  }
};
