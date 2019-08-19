/**
 * <p>Describes the Chef configuration.</p>
 */
export interface _ChefConfiguration {
  /**
   * <p>Whether to enable Berkshelf.</p>
   */
  ManageBerkshelf?: boolean;

  /**
   * <p>The Berkshelf version.</p>
   */
  BerkshelfVersion?: string;
}

export type _UnmarshalledChefConfiguration = _ChefConfiguration;
