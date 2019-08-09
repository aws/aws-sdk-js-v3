/**
 * <p>An application version summary.</p>
 */
export interface _VersionSummary {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationId: string;

  /**
   * <p>The date and time this resource was created.</p>
   */
  CreationTime: string;

  /**
   * <p>The semantic version of the application:</p><p>
   *  <a href="https://semver.org/">https://semver.org/</a>
   *  </p>
   */
  SemanticVersion: string;

  /**
   * <p>A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.</p>
   */
  SourceCodeUrl?: string;
}

export type _UnmarshalledVersionSummary = _VersionSummary;
