import { _ListOfSdkType } from "./_ListOfSdkType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSdkTypesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    position: {
      shape: {
        type: "string"
      }
    },
    items: {
      shape: _ListOfSdkType,
      locationName: "item"
    }
  }
};
