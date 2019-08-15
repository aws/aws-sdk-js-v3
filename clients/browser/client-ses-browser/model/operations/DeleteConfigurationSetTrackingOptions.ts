import { DeleteConfigurationSetTrackingOptionsInput } from "../shapes/DeleteConfigurationSetTrackingOptionsInput";
import { DeleteConfigurationSetTrackingOptionsOutput } from "../shapes/DeleteConfigurationSetTrackingOptionsOutput";
import { ConfigurationSetDoesNotExistException } from "../shapes/ConfigurationSetDoesNotExistException";
import { TrackingOptionsDoesNotExistException } from "../shapes/TrackingOptionsDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteConfigurationSetTrackingOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteConfigurationSetTrackingOptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteConfigurationSetTrackingOptionsInput
  },
  output: {
    shape: DeleteConfigurationSetTrackingOptionsOutput,
    resultWrapper: "DeleteConfigurationSetTrackingOptionsResult"
  },
  errors: [
    {
      shape: ConfigurationSetDoesNotExistException
    },
    {
      shape: TrackingOptionsDoesNotExistException
    }
  ]
};
