import { UpdateConfigurationSetTrackingOptionsInput } from "./UpdateConfigurationSetTrackingOptionsInput";
import { UpdateConfigurationSetTrackingOptionsOutput } from "./UpdateConfigurationSetTrackingOptionsOutput";
import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { TrackingOptionsDoesNotExistException } from "./TrackingOptionsDoesNotExistException";
import { InvalidTrackingOptionsException } from "./InvalidTrackingOptionsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
