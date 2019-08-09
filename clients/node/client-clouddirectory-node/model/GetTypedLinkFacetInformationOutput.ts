import { _AttributeNameList } from "./_AttributeNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTypedLinkFacetInformationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IdentityAttributeOrder: {
      shape: _AttributeNameList
    }
  }
};
