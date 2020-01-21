import { Hash } from "@aws-sdk/types";

export interface PreviouslyResolved {
  md5: { new (): Hash };
}
