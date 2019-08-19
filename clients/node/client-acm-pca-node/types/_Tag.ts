/**
 * <p>Tags are labels that you can use to identify and organize your private CAs. Each tag consists of a key and an optional value. You can associate up to 50 tags with a private CA. To add one or more tags to a private CA, call the <a>TagCertificateAuthority</a> action. To remove a tag, call the <a>UntagCertificateAuthority</a> action. </p>
 */
export interface _Tag {
  /**
   * <p>Key (name) of the tag.</p>
   */
  Key: string;

  /**
   * <p>Value of the tag.</p>
   */
  Value?: string;
}

export type _UnmarshalledTag = _Tag;
