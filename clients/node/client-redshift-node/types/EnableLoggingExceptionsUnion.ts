import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { BucketNotFoundFault } from "./BucketNotFoundFault";
import { InsufficientS3BucketPolicyFault } from "./InsufficientS3BucketPolicyFault";
import { InvalidS3KeyPrefixFault } from "./InvalidS3KeyPrefixFault";
import { InvalidS3BucketNameFault } from "./InvalidS3BucketNameFault";
export type EnableLoggingExceptionsUnion =
  | ClusterNotFoundFault
  | BucketNotFoundFault
  | InsufficientS3BucketPolicyFault
  | InvalidS3KeyPrefixFault
  | InvalidS3BucketNameFault;
