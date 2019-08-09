import { SendCommandInput } from "./SendCommandInput";
import { SendCommandOutput } from "./SendCommandOutput";
import { DuplicateInstanceId } from "./DuplicateInstanceId";
import { InternalServerError } from "./InternalServerError";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidDocumentVersion } from "./InvalidDocumentVersion";
import { InvalidOutputFolder } from "./InvalidOutputFolder";
import { InvalidParameters } from "./InvalidParameters";
import { UnsupportedPlatformType } from "./UnsupportedPlatformType";
import { MaxDocumentSizeExceeded } from "./MaxDocumentSizeExceeded";
import { InvalidRole } from "./InvalidRole";
import { InvalidNotificationConfig } from "./InvalidNotificationConfig";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SendCommand: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendCommand",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SendCommandInput
  },
  output: {
    shape: SendCommandOutput
  },
  errors: [
    {
      shape: DuplicateInstanceId
    },
    {
      shape: InternalServerError
    },
    {
      shape: InvalidInstanceId
    },
    {
      shape: InvalidDocument
    },
    {
      shape: InvalidDocumentVersion
    },
    {
      shape: InvalidOutputFolder
    },
    {
      shape: InvalidParameters
    },
    {
      shape: UnsupportedPlatformType
    },
    {
      shape: MaxDocumentSizeExceeded
    },
    {
      shape: InvalidRole
    },
    {
      shape: InvalidNotificationConfig
    }
  ]
};
