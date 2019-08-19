import { CreateConfigurationSetTrackingOptionsInput } from "../shapes/CreateConfigurationSetTrackingOptionsInput";
import { CreateConfigurationSetTrackingOptionsOutput } from "../shapes/CreateConfigurationSetTrackingOptionsOutput";
import { ConfigurationSetDoesNotExistException } from "../shapes/ConfigurationSetDoesNotExistException";
import { TrackingOptionsAlreadyExistsException } from "../shapes/TrackingOptionsAlreadyExistsException";
import { InvalidTrackingOptionsException } from "../shapes/InvalidTrackingOptionsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
