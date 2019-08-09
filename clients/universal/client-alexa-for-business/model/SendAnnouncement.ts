import { SendAnnouncementInput } from "./SendAnnouncementInput";
import { SendAnnouncementOutput } from "./SendAnnouncementOutput";
import { LimitExceededException } from "./LimitExceededException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
