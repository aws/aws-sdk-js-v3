import { CreateConfigurationSetTrackingOptionsInput } from "./CreateConfigurationSetTrackingOptionsInput";
import { CreateConfigurationSetTrackingOptionsOutput } from "./CreateConfigurationSetTrackingOptionsOutput";
import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { TrackingOptionsAlreadyExistsException } from "./TrackingOptionsAlreadyExistsException";
import { InvalidTrackingOptionsException } from "./InvalidTrackingOptionsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateConfigurationSetTrackingOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateConfigurationSetTrackingOptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateConfigurationSetTrackingOptionsInput
  },
  output: {
    shape: CreateConfigurationSetTrackingOptionsOutput,
    resultWrapper: "CreateConfigurationSetTrackingOptionsResult"
  },
  errors: [
    {
      shape: ConfigurationSetDoesNotExistException
    },
    {
      shape: TrackingOptionsAlreadyExistsException
    },
    {
      shape: InvalidTrackingOptionsException
    }
  ]
};
