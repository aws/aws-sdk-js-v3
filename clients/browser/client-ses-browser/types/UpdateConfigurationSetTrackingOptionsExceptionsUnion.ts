import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { TrackingOptionsDoesNotExistException } from "./TrackingOptionsDoesNotExistException";
import { InvalidTrackingOptionsException } from "./InvalidTrackingOptionsException";
export type UpdateConfigurationSetTrackingOptionsExceptionsUnion =
  | ConfigurationSetDoesNotExistException
  | TrackingOptionsDoesNotExistException
  | InvalidTrackingOptionsException;
