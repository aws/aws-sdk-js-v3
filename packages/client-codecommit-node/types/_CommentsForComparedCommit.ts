import {_Location, _UnmarshalledLocation} from './_Location';
import {_Comment, _UnmarshalledComment} from './_Comment';

/**
 * <p>Returns information about comments on the comparison between two commits.</p>
 */
export interface _CommentsForComparedCommit {
    /**
     * <p>The name of the repository that contains the compared commits.</p>
     */
    repositoryName?: string;

    /**
     * <p>The full commit ID of the commit used to establish the 'before' of the comparison.</p>
     */
    beforeCommitId?: string;

    /**
     * <p>The full commit ID of the commit used to establish the 'after' of the comparison.</p>
     */
    afterCommitId?: string;

    /**
     * <p>The full blob ID of the commit used to establish the 'before' of the comparison.</p>
     */
    beforeBlobId?: string;

    /**
     * <p>The full blob ID of the commit used to establish the 'after' of the comparison.</p>
     */
    afterBlobId?: string;

    /**
     * <p>Location information about the comment on the comparison, including the file name, line number, and whether the version of the file where the comment was made is 'BEFORE' or 'AFTER'.</p>
     */
    location?: _Location;

    /**
     * <p>An array of comment objects. Each comment object contains information about a comment on the comparison between commits.</p>
     */
    comments?: Array<_Comment>|Iterable<_Comment>;
}

export interface _UnmarshalledCommentsForComparedCommit extends _CommentsForComparedCommit {
    /**
     * <p>Location information about the comment on the comparison, including the file name, line number, and whether the version of the file where the comment was made is 'BEFORE' or 'AFTER'.</p>
     */
    location?: _UnmarshalledLocation;

    /**
     * <p>An array of comment objects. Each comment object contains information about a comment on the comparison between commits.</p>
     */
    comments?: Array<_UnmarshalledComment>;
}