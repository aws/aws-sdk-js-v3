import { _Urls } from "./_Urls";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCelebrityInfoOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Urls: {
      shape: _Urls
    },
    Name: {
      shape: {
        type: "string"
      }
    }
  }
};
