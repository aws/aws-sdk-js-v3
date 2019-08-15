import { UpdateConfigurationSetTrackingOptionsInput } from "../shapes/UpdateConfigurationSetTrackingOptionsInput";
import { UpdateConfigurationSetTrackingOptionsOutput } from "../shapes/UpdateConfigurationSetTrackingOptionsOutput";
import { ConfigurationSetDoesNotExistException } from "../shapes/ConfigurationSetDoesNotExistException";
import { TrackingOptionsDoesNotExistException } from "../shapes/TrackingOptionsDoesNotExistException";
import { InvalidTrackingOptionsException } from "../shapes/InvalidTrackingOptionsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateConfigurationSetTrackingOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateConfigurationSetTrackingOptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateConfigurationSetTrackingOptionsInput
  },
  output: {
    shape: UpdateConfigurationSetTrackingOptionsOutput,
    resultWrapper: "UpdateConfigurationSetTrackingOptionsResult"
  },
  errors: [
    {
      shape: ConfigurationSetDoesNotExistException
    },
    {
      shape: TrackingOptionsDoesNotExistException
    },
    {
      shape: InvalidTrackingOptionsException
    }
  ]
};
