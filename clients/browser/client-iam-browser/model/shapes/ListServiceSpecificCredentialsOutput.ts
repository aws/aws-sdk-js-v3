import { _ServiceSpecificCredentialsListType } from "./_ServiceSpecificCredentialsListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListServiceSpecificCredentialsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceSpecificCredentials: {
      shape: _ServiceSpecificCredentialsListType
    }
  }
};
