import { ChecksumConstructor, HashConstructor } from "@smithy/types";

export interface PreviouslyResolved {
  md5: ChecksumConstructor | HashConstructor;
}
