import { UpdateHostedZoneCommentInput } from "../shapes/UpdateHostedZoneCommentInput";
import { UpdateHostedZoneCommentOutput } from "../shapes/UpdateHostedZoneCommentOutput";
import { NoSuchHostedZone } from "../shapes/NoSuchHostedZone";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateHostedZoneComment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateHostedZoneComment",
  http: {
    method: "POST",
    requestUri: "/2013-04-01/hostedzone/{Id}"
  },
  input: {
    shape: UpdateHostedZoneCommentInput,
    locationName: "UpdateHostedZoneCommentRequest",
    xmlNamespace: {
      uri: "https://route53.amazonaws.com/doc/2013-04-01/"
    }
  },
  output: {
    shape: UpdateHostedZoneCommentOutput
  },
  errors: [
    {
      shape: NoSuchHostedZone
    },
    {
      shape: InvalidInput
    }
  ]
};
