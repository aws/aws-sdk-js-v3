import { _ServiceManagedDatastoreS3Storage } from "./_ServiceManagedDatastoreS3Storage";
import { _CustomerManagedDatastoreS3Storage } from "./_CustomerManagedDatastoreS3Storage";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DatastoreStorage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    serviceManagedS3: {
      shape: _ServiceManagedDatastoreS3Storage
    },
    customerManagedS3: {
      shape: _CustomerManagedDatastoreS3Storage
    }
  }
};
