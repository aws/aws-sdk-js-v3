import { _ServiceManagedDatastoreS3StorageSummary } from "./_ServiceManagedDatastoreS3StorageSummary";
import { _CustomerManagedDatastoreS3StorageSummary } from "./_CustomerManagedDatastoreS3StorageSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DatastoreStorageSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    serviceManagedS3: {
      shape: _ServiceManagedDatastoreS3StorageSummary
    },
    customerManagedS3: {
      shape: _CustomerManagedDatastoreS3StorageSummary
    }
  }
};
