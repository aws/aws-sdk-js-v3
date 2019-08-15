import { ___listOfCore } from "./___listOfCore";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCoreDefinitionVersionInput: _Structure_ = {
  type: "structure",
  required: ["CoreDefinitionId"],
  members: {
    AmznClientToken: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "X-Amzn-Client-Token"
    },
    CoreDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "CoreDefinitionId"
    },
    Cores: {
      shape: ___listOfCore
    }
  }
};
