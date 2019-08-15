import { _DomainNameMap } from "./_DomainNameMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDomainNamesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DomainNames: {
      shape: _DomainNameMap
    }
  }
};
