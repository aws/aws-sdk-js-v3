import {
  _MemberFrameworkConfiguration,
  _UnmarshalledMemberFrameworkConfiguration
} from "./_MemberFrameworkConfiguration";

/**
 * <p>Configuration properties of the member.</p>
 */
export interface _MemberConfiguration {
  /**
   * <p>The name of the member.</p>
   */
  Name: string;

  /**
   * <p>An optional description of the member.</p>
   */
  Description?: string;

  /**
   * <p>Configuration properties of the blockchain framework relevant to the member.</p>
   */
  FrameworkConfiguration: _MemberFrameworkConfiguration;
}

export interface _UnmarshalledMemberConfiguration extends _MemberConfiguration {
  /**
   * <p>Configuration properties of the blockchain framework relevant to the member.</p>
   */
  FrameworkConfiguration: _UnmarshalledMemberFrameworkConfiguration;
}
