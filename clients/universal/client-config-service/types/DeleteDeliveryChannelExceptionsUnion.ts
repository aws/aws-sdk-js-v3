import { NoSuchDeliveryChannelException } from "./NoSuchDeliveryChannelException";
import { LastDeliveryChannelDeleteFailedException } from "./LastDeliveryChannelDeleteFailedException";
export type DeleteDeliveryChannelExceptionsUnion =
  | NoSuchDeliveryChannelException
  | LastDeliveryChannelDeleteFailedException;
