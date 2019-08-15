import { _FpgaImageList } from "./_FpgaImageList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFpgaImagesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FpgaImages: {
      shape: _FpgaImageList,
      locationName: "fpgaImageSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
