import { _InstanceCreditSpecificationList } from "./_InstanceCreditSpecificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstanceCreditSpecificationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceCreditSpecifications: {
      shape: _InstanceCreditSpecificationList,
      locationName: "instanceCreditSpecificationSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
