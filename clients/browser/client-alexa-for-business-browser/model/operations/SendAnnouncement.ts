import { SendAnnouncementInput } from "../shapes/SendAnnouncementInput";
import { SendAnnouncementOutput } from "../shapes/SendAnnouncementOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SendAnnouncement: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendAnnouncement",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SendAnnouncementInput
  },
  output: {
    shape: SendAnnouncementOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: AlreadyExistsException
    }
  ]
};
