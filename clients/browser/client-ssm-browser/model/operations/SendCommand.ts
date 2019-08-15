import { SendCommandInput } from "../shapes/SendCommandInput";
import { SendCommandOutput } from "../shapes/SendCommandOutput";
import { DuplicateInstanceId } from "../shapes/DuplicateInstanceId";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidInstanceId } from "../shapes/InvalidInstanceId";
import { InvalidDocument } from "../shapes/InvalidDocument";
import { InvalidDocumentVersion } from "../shapes/InvalidDocumentVersion";
import { InvalidOutputFolder } from "../shapes/InvalidOutputFolder";
import { InvalidParameters } from "../shapes/InvalidParameters";
import { UnsupportedPlatformType } from "../shapes/UnsupportedPlatformType";
import { MaxDocumentSizeExceeded } from "../shapes/MaxDocumentSizeExceeded";
import { InvalidRole } from "../shapes/InvalidRole";
import { InvalidNotificationConfig } from "../shapes/InvalidNotificationConfig";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
