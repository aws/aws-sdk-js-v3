/**
 * <p>Specifies data for one or more attributes that describe the user who's associated with an endpoint.</p>
 */
export interface _EndpointUser {
  /**
   * <p>One or more custom attributes that describe the user by associating a name with an array of values. For example, the value of an attribute named Interests might be: ["science", "music", "travel"]. You can use these attributes as filter criteria when you create segments.</p> <p>When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This limitation doesn't apply to attribute values.</p>
   */
  UserAttributes?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>The unique identifier for the user.</p>
   */
  UserId?: string;
}

export interface _UnmarshalledEndpointUser extends _EndpointUser {
  /**
   * <p>One or more custom attributes that describe the user by associating a name with an array of values. For example, the value of an attribute named Interests might be: ["science", "music", "travel"]. You can use these attributes as filter criteria when you create segments.</p> <p>When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This limitation doesn't apply to attribute values.</p>
   */
  UserAttributes?: { [key: string]: Array<string> };
}
