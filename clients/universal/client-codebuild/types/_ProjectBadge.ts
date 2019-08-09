/**
 * <p>Information about the build badge for the build project.</p>
 */
export interface _ProjectBadge {
  /**
   * <p>Set this to true to generate a publicly accessible URL for your project's build badge.</p>
   */
  badgeEnabled?: boolean;

  /**
   * <p>The publicly-accessible URL through which you can access the build badge for your project. </p> <p>The publicly accessible URL through which you can access the build badge for your project. </p>
   */
  badgeRequestUrl?: string;
}

export type _UnmarshalledProjectBadge = _ProjectBadge;
