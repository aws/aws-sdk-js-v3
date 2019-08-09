import { DeleteConfigurationSetTrackingOptionsInput } from "./DeleteConfigurationSetTrackingOptionsInput";
import { DeleteConfigurationSetTrackingOptionsOutput } from "./DeleteConfigurationSetTrackingOptionsOutput";
import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { TrackingOptionsDoesNotExistException } from "./TrackingOptionsDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
