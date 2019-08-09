import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { TrackingOptionsAlreadyExistsException } from "./TrackingOptionsAlreadyExistsException";
import { InvalidTrackingOptionsException } from "./InvalidTrackingOptionsException";
export type CreateConfigurationSetTrackingOptionsExceptionsUnion =
  | ConfigurationSetDoesNotExistException
  | TrackingOptionsAlreadyExistsException
  | InvalidTrackingOptionsException;
