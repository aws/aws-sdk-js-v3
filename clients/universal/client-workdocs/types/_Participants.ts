import { _UserMetadata, _UnmarshalledUserMetadata } from "./_UserMetadata";
import { _GroupMetadata, _UnmarshalledGroupMetadata } from "./_GroupMetadata";

/**
 * <p>Describes the users or user groups.</p>
 */
export interface _Participants {
  /**
   * <p>The list of users.</p>
   */
  Users?: Array<_UserMetadata> | Iterable<_UserMetadata>;

  /**
   * <p>The list of user groups.</p>
   */
  Groups?: Array<_GroupMetadata> | Iterable<_GroupMetadata>;
}

export interface _UnmarshalledParticipants extends _Participants {
  /**
   * <p>The list of users.</p>
   */
  Users?: Array<_UnmarshalledUserMetadata>;

  /**
   * <p>The list of user groups.</p>
   */
  Groups?: Array<_UnmarshalledGroupMetadata>;
}
