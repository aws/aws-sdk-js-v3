import {NodeHttpOptions as __HttpOptions__} from '@aws-sdk/types';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * DescribeEvaluationsInput shape
 */
export interface DescribeEvaluationsInput {
    /**
     * <p>Use one of the following variable to filter a list of <code>Evaluation</code> objects:</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to the <code>Evaluation</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to the <code>Evaluation</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>Evaluation</code> <b> </b> <code>Name</code>.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked an <code>Evaluation</code>.</li> <li> <code>MLModelId</code> - Sets the search criteria to the <code>MLModel</code> that was evaluated.</li> <li> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in <code>Evaluation</code>.</li> <li> <code>DataUri</code> - Sets the search criteria to the data file(s) used in <code>Evaluation</code>. The URL can identify either a file or an Amazon Simple Storage Solution (Amazon S3) bucket or directory.</li> </ul>
     */
    FilterVariable?: 'CreatedAt'|'LastUpdatedAt'|'Status'|'Name'|'IAMUser'|'MLModelId'|'DataSourceId'|'DataURI'|string;

    /**
     * <p>The equal to operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values that exactly match the value specified with <code>EQ</code>.</p>
     */
    EQ?: string;

    /**
     * <p>The greater than operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values that are greater than the value specified with <code>GT</code>.</p>
     */
    GT?: string;

    /**
     * <p>The less than operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values that are less than the value specified with <code>LT</code>.</p>
     */
    LT?: string;

    /**
     * <p>The greater than or equal to operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values that are greater than or equal to the value specified with <code>GE</code>. </p>
     */
    GE?: string;

    /**
     * <p>The less than or equal to operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values that are less than or equal to the value specified with <code>LE</code>.</p>
     */
    LE?: string;

    /**
     * <p>The not equal to operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values not equal to the value specified with <code>NE</code>.</p>
     */
    NE?: string;

    /**
     * <p>A string that is found at the beginning of a variable, such as <code>Name</code> or <code>Id</code>.</p> <p>For example, an <code>Evaluation</code> could have the <code>Name</code> <code>2014-09-09-HolidayGiftMailer</code>. To search for this <code>Evaluation</code>, select <code>Name</code> for the <code>FilterVariable</code> and any of the following strings for the <code>Prefix</code>: </p> <ul> <li><p>2014-09</p></li> <li><p>2014-09-09</p></li> <li><p>2014-09-09-Holiday</p></li> </ul>
     */
    Prefix?: string;

    /**
     * <p>A two-value parameter that determines the sequence of the resulting list of <code>Evaluation</code>.</p> <ul> <li> <code>asc</code> - Arranges the list in ascending order (A-Z, 0-9).</li> <li> <code>dsc</code> - Arranges the list in descending order (Z-A, 9-0).</li> </ul> <p>Results are sorted by <code>FilterVariable</code>.</p>
     */
    SortOrder?: 'asc'|'dsc'|string;

    /**
     * <p>The ID of the page in the paginated results.</p>
     */
    NextToken?: string;

    /**
     * <p> The maximum number of <code>Evaluation</code> to include in the result.</p>
     */
    Limit?: number;

    /**
     * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __aws_sdk_types.AbortSignal;

    /**
     * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__;
}