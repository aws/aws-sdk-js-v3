import { ___listOfPackagingConfiguration } from "./___listOfPackagingConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPackagingConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    PackagingConfigurations: {
      shape: ___listOfPackagingConfiguration,
      locationName: "packagingConfigurations"
    }
  }
};
