import { _ExtendedKeyUsageFilterList } from "./_ExtendedKeyUsageFilterList";
import { _KeyUsageFilterList } from "./_KeyUsageFilterList";
import { _KeyAlgorithmList } from "./_KeyAlgorithmList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Filters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    extendedKeyUsage: {
      shape: _ExtendedKeyUsageFilterList
    },
    keyUsage: {
      shape: _KeyUsageFilterList
    },
    keyTypes: {
      shape: _KeyAlgorithmList
    }
  }
};
