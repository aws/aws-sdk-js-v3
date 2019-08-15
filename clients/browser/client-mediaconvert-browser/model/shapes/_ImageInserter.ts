import { ___listOfInsertableImage } from "./___listOfInsertableImage";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ImageInserter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InsertableImages: {
      shape: ___listOfInsertableImage,
      locationName: "insertableImages"
    }
  }
};
