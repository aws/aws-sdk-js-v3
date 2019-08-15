import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisableImportFindingsForProductInput: _Structure_ = {
  type: "structure",
  required: ["ProductSubscriptionArn"],
  members: {
    ProductSubscriptionArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ProductSubscriptionArn"
    }
  }
};
