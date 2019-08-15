import { _ListOfDeployment } from "./_ListOfDeployment";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeploymentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    position: {
      shape: {
        type: "string"
      }
    },
    items: {
      shape: _ListOfDeployment,
      locationName: "item"
    }
  }
};
