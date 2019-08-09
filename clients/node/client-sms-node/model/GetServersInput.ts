import { _VmServerAddressList } from "./_VmServerAddressList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetServersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    },
    vmServerAddressList: {
      shape: _VmServerAddressList
    }
  }
};
