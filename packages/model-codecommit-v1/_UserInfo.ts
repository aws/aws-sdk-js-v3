/**
 * <p>Information about the user who made a specified commit.</p>
 */
export interface _UserInfo {
    /**
     * <p>The name of the user who made the specified commit.</p>
     */
    name?: string;
    
    /**
     * <p>The email address associated with the user who made the commit, if any.</p>
     */
    email?: string;
    
    /**
     * <p>The date when the specified commit was pushed to the repository.</p>
     */
    date?: string;
}

export type _UnmarshalledUserInfo = _UserInfo;