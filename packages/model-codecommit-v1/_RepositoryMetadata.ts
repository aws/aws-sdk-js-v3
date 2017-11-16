/**
 * <p>Information about a repository.</p>
 */
export interface _RepositoryMetadata {
    /**
     * <p>The ID of the AWS account associated with the repository.</p>
     */
    accountId?: string;
    
    /**
     * <p>The ID of the repository.</p>
     */
    repositoryId?: string;
    
    /**
     * <p>The repository's name.</p>
     */
    repositoryName?: string;
    
    /**
     * <p>A comment or description about the repository.</p>
     */
    repositoryDescription?: string;
    
    /**
     * <p>The repository's default branch name.</p>
     */
    defaultBranch?: string;
    
    /**
     * <p>The date and time the repository was last modified, in timestamp format.</p>
     */
    lastModifiedDate?: Date|string|number;
    
    /**
     * <p>The date and time the repository was created, in timestamp format.</p>
     */
    creationDate?: Date|string|number;
    
    /**
     * <p>The URL to use for cloning the repository over HTTPS.</p>
     */
    cloneUrlHttp?: string;
    
    /**
     * <p>The URL to use for cloning the repository over SSH.</p>
     */
    cloneUrlSsh?: string;
    
    /**
     * <p>The Amazon Resource Name (ARN) of the repository.</p>
     */
    Arn?: string;
}

export interface _UnmarshalledRepositoryMetadata extends _RepositoryMetadata {
    /**
     * <p>The date and time the repository was last modified, in timestamp format.</p>
     */
    lastModifiedDate?: Date;
    
    /**
     * <p>The date and time the repository was created, in timestamp format.</p>
     */
    creationDate?: Date;
}