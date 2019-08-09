import { _ServiceManagedChannelS3StorageSummary } from "./_ServiceManagedChannelS3StorageSummary";
import { _CustomerManagedChannelS3StorageSummary } from "./_CustomerManagedChannelS3StorageSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ChannelStorageSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    serviceManagedS3: {
      shape: _ServiceManagedChannelS3StorageSummary
    },
    customerManagedS3: {
      shape: _CustomerManagedChannelS3StorageSummary
    }
  }
};
