import { ___listOfId3Insertion } from "./___listOfId3Insertion";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TimedMetadataInsertion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id3Insertions: {
      shape: ___listOfId3Insertion,
      locationName: "id3Insertions"
    }
  }
};
