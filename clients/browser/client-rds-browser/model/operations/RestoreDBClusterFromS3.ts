import { RestoreDBClusterFromS3Input } from "../shapes/RestoreDBClusterFromS3Input";
import { RestoreDBClusterFromS3Output } from "../shapes/RestoreDBClusterFromS3Output";
import { DBClusterAlreadyExistsFault } from "../shapes/DBClusterAlreadyExistsFault";
import { DBClusterQuotaExceededFault } from "../shapes/DBClusterQuotaExceededFault";
import { StorageQuotaExceededFault } from "../shapes/StorageQuotaExceededFault";
import { DBSubnetGroupNotFoundFault } from "../shapes/DBSubnetGroupNotFoundFault";
import { InvalidVPCNetworkStateFault } from "../shapes/InvalidVPCNetworkStateFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { InvalidDBSubnetGroupStateFault } from "../shapes/InvalidDBSubnetGroupStateFault";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { InvalidS3BucketFault } from "../shapes/InvalidS3BucketFault";
import { DBClusterParameterGroupNotFoundFault } from "../shapes/DBClusterParameterGroupNotFoundFault";
import { KMSKeyNotAccessibleFault } from "../shapes/KMSKeyNotAccessibleFault";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { InsufficientStorageClusterCapacityFault } from "../shapes/InsufficientStorageClusterCapacityFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
