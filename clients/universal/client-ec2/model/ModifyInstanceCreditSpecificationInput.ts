import { _InstanceCreditSpecificationListRequest } from "./_InstanceCreditSpecificationListRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyInstanceCreditSpecificationInput: _Structure_ = {
  type: "structure",
  required: ["InstanceCreditSpecifications"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    },
    InstanceCreditSpecifications: {
      shape: _InstanceCreditSpecificationListRequest,
      locationName: "InstanceCreditSpecification"
    }
  }
};
