/**
 * <p>Information about the patches to use to update the instances, including target operating systems and source repository. Applies to Linux instances only.</p>
 */
export interface _PatchSource {
  /**
   * <p>The name specified to identify the patch source.</p>
   */
  Name: string;

  /**
   * <p>The specific operating system versions a patch repository applies to, such as "Ubuntu16.04", "AmazonLinux2016.09", "RedhatEnterpriseLinux7.2" or "Suse12.7". For lists of supported product values, see <a>PatchFilter</a>.</p>
   */
  Products: Array<string> | Iterable<string>;

  /**
   * <p>The value of the yum repo configuration. For example:</p> <p> <code>[main]</code> </p> <p> <code>cachedir=/var/cache/yum/$basesearch$releasever</code> </p> <p> <code>keepcache=0</code> </p> <p> <code>debuglevel=2</code> </p>
   */
  Configuration: string;
}

export interface _UnmarshalledPatchSource extends _PatchSource {
  /**
   * <p>The specific operating system versions a patch repository applies to, such as "Ubuntu16.04", "AmazonLinux2016.09", "RedhatEnterpriseLinux7.2" or "Suse12.7". For lists of supported product values, see <a>PatchFilter</a>.</p>
   */
  Products: Array<string>;
}
