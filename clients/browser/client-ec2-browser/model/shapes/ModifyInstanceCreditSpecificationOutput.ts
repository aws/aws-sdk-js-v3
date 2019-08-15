import { _SuccessfulInstanceCreditSpecificationSet } from "./_SuccessfulInstanceCreditSpecificationSet";
import { _UnsuccessfulInstanceCreditSpecificationSet } from "./_UnsuccessfulInstanceCreditSpecificationSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyInstanceCreditSpecificationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SuccessfulInstanceCreditSpecifications: {
      shape: _SuccessfulInstanceCreditSpecificationSet,
      locationName: "successfulInstanceCreditSpecificationSet"
    },
    UnsuccessfulInstanceCreditSpecifications: {
      shape: _UnsuccessfulInstanceCreditSpecificationSet,
      locationName: "unsuccessfulInstanceCreditSpecificationSet"
    }
  }
};
