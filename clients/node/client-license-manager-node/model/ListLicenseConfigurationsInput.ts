import { _StringList } from "./_StringList";
import { _Filters } from "./_Filters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListLicenseConfigurationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LicenseConfigurationArns: {
      shape: _StringList
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _Filters
    }
  }
};
