import { ChecksumConstructor, HashConstructor } from "@aws-sdk/types";

export interface PreviouslyResolved {
  md5: ChecksumConstructor | HashConstructor;
}
