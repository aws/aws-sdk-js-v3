import { RestoreDBClusterFromS3Input } from "./RestoreDBClusterFromS3Input";
import { RestoreDBClusterFromS3Output } from "./RestoreDBClusterFromS3Output";
import { DBClusterAlreadyExistsFault } from "./DBClusterAlreadyExistsFault";
import { DBClusterQuotaExceededFault } from "./DBClusterQuotaExceededFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { InvalidDBSubnetGroupStateFault } from "./InvalidDBSubnetGroupStateFault";
import { InvalidSubnet } from "./InvalidSubnet";
import { InvalidS3BucketFault } from "./InvalidS3BucketFault";
import { DBClusterParameterGroupNotFoundFault } from "./DBClusterParameterGroupNotFoundFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { InsufficientStorageClusterCapacityFault } from "./InsufficientStorageClusterCapacityFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RestoreDBClusterFromS3: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestoreDBClusterFromS3",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RestoreDBClusterFromS3Input
  },
  output: {
    shape: RestoreDBClusterFromS3Output,
    resultWrapper: "RestoreDBClusterFromS3Result"
  },
  errors: [
    {
      shape: DBClusterAlreadyExistsFault
    },
    {
      shape: DBClusterQuotaExceededFault
    },
    {
      shape: StorageQuotaExceededFault
    },
    {
      shape: DBSubnetGroupNotFoundFault
    },
    {
      shape: InvalidVPCNetworkStateFault
    },
    {
      shape: InvalidDBClusterStateFault
    },
    {
      shape: InvalidDBSubnetGroupStateFault
    },
    {
      shape: InvalidSubnet
    },
    {
      shape: InvalidS3BucketFault
    },
    {
      shape: DBClusterParameterGroupNotFoundFault
    },
    {
      shape: KMSKeyNotAccessibleFault
    },
    {
      shape: DBClusterNotFoundFault
    },
    {
      shape: InsufficientStorageClusterCapacityFault
    }
  ]
};
