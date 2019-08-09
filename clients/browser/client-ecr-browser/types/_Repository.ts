/**
 * <p>An object representing a repository.</p>
 */
export interface _Repository {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the repository. The ARN contains the <code>arn:aws:ecr</code> namespace, followed by the region of the repository, AWS account ID of the repository owner, repository namespace, and repository name. For example, <code>arn:aws:ecr:region:012345678910:repository/test</code>.</p>
   */
  repositoryArn?: string;

  /**
   * <p>The AWS account ID associated with the registry that contains the repository.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository.</p>
   */
  repositoryName?: string;

  /**
   * <p>The URI for the repository. You can use this URI for Docker <code>push</code> or <code>pull</code> operations.</p>
   */
  repositoryUri?: string;

  /**
   * <p>The date and time, in JavaScript date format, when the repository was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The tag mutability setting for the repository.</p>
   */
  imageTagMutability?: "MUTABLE" | "IMMUTABLE" | string;
}

export interface _UnmarshalledRepository extends _Repository {
  /**
   * <p>The date and time, in JavaScript date format, when the repository was created.</p>
   */
  createdAt?: Date;
}
