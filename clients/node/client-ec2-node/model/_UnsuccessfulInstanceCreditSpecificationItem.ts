import { _UnsuccessfulInstanceCreditSpecificationItemError } from "./_UnsuccessfulInstanceCreditSpecificationItemError";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UnsuccessfulInstanceCreditSpecificationItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    Error: {
      shape: _UnsuccessfulInstanceCreditSpecificationItemError,
      locationName: "error"
    }
  }
};
