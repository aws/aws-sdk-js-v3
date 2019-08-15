import { _Domain } from "./_Domain";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDomainOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    domain: {
      shape: _Domain
    }
  }
};
