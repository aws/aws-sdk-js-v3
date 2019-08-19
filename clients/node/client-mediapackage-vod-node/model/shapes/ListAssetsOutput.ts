import { ___listOfAssetShallow } from "./___listOfAssetShallow";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAssetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Assets: {
      shape: ___listOfAssetShallow,
      locationName: "assets"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
