import { _DynamicFieldNameList } from "./_DynamicFieldNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeIndexFieldsInput: _Structure_ = {
  type: "structure",
  required: ["DomainName"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    FieldNames: {
      shape: _DynamicFieldNameList
    },
    Deployed: {
      shape: {
        type: "boolean"
      }
    }
  }
};
