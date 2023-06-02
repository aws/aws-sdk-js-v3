// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>CloudTrail</fullname>
 *          <p>This is the CloudTrail API Reference. It provides descriptions of actions, data
 *          types, common parameters, and common errors for CloudTrail.</p>
 *          <p>CloudTrail is a web service that records Amazon Web Services API calls for your
 *             Amazon Web Services account and delivers log files to an Amazon S3 bucket. The
 *          recorded information includes the identity of the user, the start time of the Amazon Web Services API call, the source IP address, the request parameters, and the response
 *          elements returned by the service.</p>
 *          <note>
 *             <p>As an alternative to the API, you can use one of the Amazon Web Services SDKs, which
 *             consist of libraries and sample code for various programming languages and platforms
 *             (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide programmatic access to CloudTrail. For example, the SDKs handle cryptographically signing requests,
 *             managing errors, and retrying requests automatically. For more information about the
 *                Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools to Build on Amazon Web Services</a>.</p>
 *          </note>
 *          <p>See the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html">CloudTrail
 *          User Guide</a> for information about the data that is included with each Amazon Web Services API call listed in the log files.</p>
 *          <p>
 *             <b>Actions available for CloudTrail trails</b>
 *          </p>
 *          <p>The following actions are available for CloudTrail trails.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>AddTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateTrail</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteTrail</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeTrails</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetEventSelectors</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetInsightSelectors</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetTrail</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetTrailStatus</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListTrails</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutEventSelectors</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutInsightSelectors</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RemoveTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartLogging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StopLogging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateTrail</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Actions available for CloudTrail event data stores</b>
 *          </p>
 *          <p>The following actions are available for CloudTrail event data stores.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>AddTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CancelQuery</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateEventDataStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteEventDataStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeQuery</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetEventDataStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetQueryResults</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListEventDataStores</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListQueries</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RemoveTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RestoreEventDataStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartEventDataStoreIngestion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartImport</a>
 *                </p>
 *                <p>The following additional actions are available for imports.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <a>GetImport</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>ListImportFailures</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>ListImports</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>StopImport</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartQuery</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartEventDataStoreIngestion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateEventDataStore</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Actions available for CloudTrail channels</b>
 *          </p>
 *          <p>The following actions are available for CloudTrail channels.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>AddTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateChannel</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteChannel</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteResourcePolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetChannel</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetResourcePolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListChannels</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutResourcePolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RemoveTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateChannel</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Actions available for managing delegated administrators</b>
 *          </p>
 *          <p>The following actions are available for adding or a removing a delegated administrator to manage an Organizations organization’s CloudTrail resources.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeregisterOrganizationDelegatedAdmin</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RegisterOrganizationDelegatedAdmin</a>
 *                </p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./CloudTrailClient";
export * from "./CloudTrail";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { CloudTrailServiceException } from "./models/CloudTrailServiceException";
