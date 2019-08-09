import {
  _InputDestinationVpc,
  _UnmarshalledInputDestinationVpc
} from "./_InputDestinationVpc";

/**
 * The settings for a PUSH type input.
 */
export interface _InputDestination {
  /**
   * The system-generated static IP address of endpoint.
   * It remains fixed for the lifetime of the input.
   *
   */
  Ip?: string;

  /**
   * The port number for the input.
   */
  Port?: string;

  /**
   * This represents the endpoint that the customer stream will be
   * pushed to.
   *
   */
  Url?: string;

  /**
   * The properties for a VPC type input destination.
   */
  Vpc?: _InputDestinationVpc;
}

export interface _UnmarshalledInputDestination extends _InputDestination {
  /**
   * The properties for a VPC type input destination.
   */
  Vpc?: _UnmarshalledInputDestinationVpc;
}
