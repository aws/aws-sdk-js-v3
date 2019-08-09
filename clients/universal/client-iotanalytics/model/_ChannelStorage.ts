import { _ServiceManagedChannelS3Storage } from "./_ServiceManagedChannelS3Storage";
import { _CustomerManagedChannelS3Storage } from "./_CustomerManagedChannelS3Storage";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ChannelStorage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    serviceManagedS3: {
      shape: _ServiceManagedChannelS3Storage
    },
    customerManagedS3: {
      shape: _CustomerManagedChannelS3Storage
    }
  }
};
