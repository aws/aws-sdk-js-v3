import { GetIdentityNotificationAttributesInput } from "./GetIdentityNotificationAttributesInput";
import { GetIdentityNotificationAttributesOutput } from "./GetIdentityNotificationAttributesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetIdentityNotificationAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIdentityNotificationAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetIdentityNotificationAttributesInput
  },
  output: {
    shape: GetIdentityNotificationAttributesOutput,
    resultWrapper: "GetIdentityNotificationAttributesResult"
  },
  errors: []
};
