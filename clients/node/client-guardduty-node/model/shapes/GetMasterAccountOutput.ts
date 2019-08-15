import { _Master } from "./_Master";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMasterAccountOutput: _Structure_ = {
  type: "structure",
  required: ["Master"],
  members: {
    Master: {
      shape: _Master,
      locationName: "master"
    }
  }
};
