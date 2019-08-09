import { _ListOfEndpointBatchItem } from "./_ListOfEndpointBatchItem";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EndpointBatchRequest: _Structure_ = {
  type: "structure",
  required: ["Item"],
  members: {
    Item: {
      shape: _ListOfEndpointBatchItem
    }
  }
};
