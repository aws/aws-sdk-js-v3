import {_UserInfo, _UnmarshalledUserInfo} from './_UserInfo';

/**
 * <p>Returns information about a specific commit.</p>
 */
export interface _Commit {
    /**
     * <p>The full SHA of the specified commit. </p>
     */
    commitId?: string;

    /**
     * <p>Tree information for the specified commit.</p>
     */
    treeId?: string;

    /**
     * <p>The parent list for the specified commit.</p>
     */
    parents?: Array<string>|Iterable<string>;

    /**
     * <p>The commit message associated with the specified commit.</p>
     */
    message?: string;

    /**
     * <p>Information about the author of the specified commit. Information includes the date in timestamp format with GMT offset, the name of the author, and the email address for the author, as configured in Git.</p>
     */
    author?: _UserInfo;

    /**
     * <p>Information about the person who committed the specified commit, also known as the committer. Information includes the date in timestamp format with GMT offset, the name of the committer, and the email address for the committer, as configured in Git.</p> <p>For more information about the difference between an author and a committer in Git, see <a href="http://git-scm.com/book/ch2-3.html">Viewing the Commit History</a> in Pro Git by Scott Chacon and Ben Straub.</p>
     */
    committer?: _UserInfo;

    /**
     * <p>Any additional data associated with the specified commit.</p>
     */
    additionalData?: string;
}

export interface _UnmarshalledCommit extends _Commit {
    /**
     * <p>The parent list for the specified commit.</p>
     */
    parents?: Array<string>;

    /**
     * <p>Information about the author of the specified commit. Information includes the date in timestamp format with GMT offset, the name of the author, and the email address for the author, as configured in Git.</p>
     */
    author?: _UnmarshalledUserInfo;

    /**
     * <p>Information about the person who committed the specified commit, also known as the committer. Information includes the date in timestamp format with GMT offset, the name of the committer, and the email address for the committer, as configured in Git.</p> <p>For more information about the difference between an author and a committer in Git, see <a href="http://git-scm.com/book/ch2-3.html">Viewing the Commit History</a> in Pro Git by Scott Chacon and Ben Straub.</p>
     */
    committer?: _UnmarshalledUserInfo;
}