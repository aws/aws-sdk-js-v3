import { _DomainDescriptionType } from "./_DomainDescriptionType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUserPoolDomainOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DomainDescription: {
      shape: _DomainDescriptionType
    }
  }
};
