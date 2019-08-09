import { BucketAlreadyExists } from "./BucketAlreadyExists";
import { BucketAlreadyOwnedByYou } from "./BucketAlreadyOwnedByYou";
export type CreateBucketExceptionsUnion =
  | BucketAlreadyExists
  | BucketAlreadyOwnedByYou;
