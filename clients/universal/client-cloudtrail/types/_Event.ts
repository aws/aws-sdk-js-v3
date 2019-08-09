import { _Resource, _UnmarshalledResource } from "./_Resource";

/**
 * <p>Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event.</p>
 */
export interface _Event {
  /**
   * <p>The CloudTrail ID of the event returned.</p>
   */
  EventId?: string;

  /**
   * <p>The name of the event returned.</p>
   */
  EventName?: string;

  /**
   * <p>Information about whether the event is a write event or a read event. </p>
   */
  ReadOnly?: string;

  /**
   * <p>The AWS access key ID that was used to sign the request. If the request was made with temporary security credentials, this is the access key ID of the temporary credentials.</p>
   */
  AccessKeyId?: string;

  /**
   * <p>The date and time of the event returned.</p>
   */
  EventTime?: Date | string | number;

  /**
   * <p>The AWS service that the request was made to.</p>
   */
  EventSource?: string;

  /**
   * <p>A user name or role name of the requester that called the API in the event returned.</p>
   */
  Username?: string;

  /**
   * <p>A list of resources referenced by the event returned.</p>
   */
  Resources?: Array<_Resource> | Iterable<_Resource>;

  /**
   * <p>A JSON string that contains a representation of the event returned.</p>
   */
  CloudTrailEvent?: string;
}

export interface _UnmarshalledEvent extends _Event {
  /**
   * <p>The date and time of the event returned.</p>
   */
  EventTime?: Date;

  /**
   * <p>A list of resources referenced by the event returned.</p>
   */
  Resources?: Array<_UnmarshalledResource>;
}
