import { CloudFrontClient } from "./CloudFrontClient";
import { CreateCloudFrontOriginAccessIdentityCommandInput, CreateCloudFrontOriginAccessIdentityCommandOutput } from "./commands/CreateCloudFrontOriginAccessIdentityCommand";
import { CreateDistributionCommandInput, CreateDistributionCommandOutput } from "./commands/CreateDistributionCommand";
import { CreateDistributionWithTagsCommandInput, CreateDistributionWithTagsCommandOutput } from "./commands/CreateDistributionWithTagsCommand";
import { CreateFieldLevelEncryptionConfigCommandInput, CreateFieldLevelEncryptionConfigCommandOutput } from "./commands/CreateFieldLevelEncryptionConfigCommand";
import { CreateFieldLevelEncryptionProfileCommandInput, CreateFieldLevelEncryptionProfileCommandOutput } from "./commands/CreateFieldLevelEncryptionProfileCommand";
import { CreateInvalidationCommandInput, CreateInvalidationCommandOutput } from "./commands/CreateInvalidationCommand";
import { CreatePublicKeyCommandInput, CreatePublicKeyCommandOutput } from "./commands/CreatePublicKeyCommand";
import { CreateStreamingDistributionCommandInput, CreateStreamingDistributionCommandOutput } from "./commands/CreateStreamingDistributionCommand";
import { CreateStreamingDistributionWithTagsCommandInput, CreateStreamingDistributionWithTagsCommandOutput } from "./commands/CreateStreamingDistributionWithTagsCommand";
import { DeleteCloudFrontOriginAccessIdentityCommandInput, DeleteCloudFrontOriginAccessIdentityCommandOutput } from "./commands/DeleteCloudFrontOriginAccessIdentityCommand";
import { DeleteDistributionCommandInput, DeleteDistributionCommandOutput } from "./commands/DeleteDistributionCommand";
import { DeleteFieldLevelEncryptionConfigCommandInput, DeleteFieldLevelEncryptionConfigCommandOutput } from "./commands/DeleteFieldLevelEncryptionConfigCommand";
import { DeleteFieldLevelEncryptionProfileCommandInput, DeleteFieldLevelEncryptionProfileCommandOutput } from "./commands/DeleteFieldLevelEncryptionProfileCommand";
import { DeletePublicKeyCommandInput, DeletePublicKeyCommandOutput } from "./commands/DeletePublicKeyCommand";
import { DeleteStreamingDistributionCommandInput, DeleteStreamingDistributionCommandOutput } from "./commands/DeleteStreamingDistributionCommand";
import { GetCloudFrontOriginAccessIdentityCommandInput, GetCloudFrontOriginAccessIdentityCommandOutput } from "./commands/GetCloudFrontOriginAccessIdentityCommand";
import { GetCloudFrontOriginAccessIdentityConfigCommandInput, GetCloudFrontOriginAccessIdentityConfigCommandOutput } from "./commands/GetCloudFrontOriginAccessIdentityConfigCommand";
import { GetDistributionCommandInput, GetDistributionCommandOutput } from "./commands/GetDistributionCommand";
import { GetDistributionConfigCommandInput, GetDistributionConfigCommandOutput } from "./commands/GetDistributionConfigCommand";
import { GetFieldLevelEncryptionCommandInput, GetFieldLevelEncryptionCommandOutput } from "./commands/GetFieldLevelEncryptionCommand";
import { GetFieldLevelEncryptionConfigCommandInput, GetFieldLevelEncryptionConfigCommandOutput } from "./commands/GetFieldLevelEncryptionConfigCommand";
import { GetFieldLevelEncryptionProfileCommandInput, GetFieldLevelEncryptionProfileCommandOutput } from "./commands/GetFieldLevelEncryptionProfileCommand";
import { GetFieldLevelEncryptionProfileConfigCommandInput, GetFieldLevelEncryptionProfileConfigCommandOutput } from "./commands/GetFieldLevelEncryptionProfileConfigCommand";
import { GetInvalidationCommandInput, GetInvalidationCommandOutput } from "./commands/GetInvalidationCommand";
import { GetPublicKeyCommandInput, GetPublicKeyCommandOutput } from "./commands/GetPublicKeyCommand";
import { GetPublicKeyConfigCommandInput, GetPublicKeyConfigCommandOutput } from "./commands/GetPublicKeyConfigCommand";
import { GetStreamingDistributionCommandInput, GetStreamingDistributionCommandOutput } from "./commands/GetStreamingDistributionCommand";
import { GetStreamingDistributionConfigCommandInput, GetStreamingDistributionConfigCommandOutput } from "./commands/GetStreamingDistributionConfigCommand";
import { ListCloudFrontOriginAccessIdentitiesCommandInput, ListCloudFrontOriginAccessIdentitiesCommandOutput } from "./commands/ListCloudFrontOriginAccessIdentitiesCommand";
import { ListDistributionsByWebACLIdCommandInput, ListDistributionsByWebACLIdCommandOutput } from "./commands/ListDistributionsByWebACLIdCommand";
import { ListDistributionsCommandInput, ListDistributionsCommandOutput } from "./commands/ListDistributionsCommand";
import { ListFieldLevelEncryptionConfigsCommandInput, ListFieldLevelEncryptionConfigsCommandOutput } from "./commands/ListFieldLevelEncryptionConfigsCommand";
import { ListFieldLevelEncryptionProfilesCommandInput, ListFieldLevelEncryptionProfilesCommandOutput } from "./commands/ListFieldLevelEncryptionProfilesCommand";
import { ListInvalidationsCommandInput, ListInvalidationsCommandOutput } from "./commands/ListInvalidationsCommand";
import { ListPublicKeysCommandInput, ListPublicKeysCommandOutput } from "./commands/ListPublicKeysCommand";
import { ListStreamingDistributionsCommandInput, ListStreamingDistributionsCommandOutput } from "./commands/ListStreamingDistributionsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateCloudFrontOriginAccessIdentityCommandInput, UpdateCloudFrontOriginAccessIdentityCommandOutput } from "./commands/UpdateCloudFrontOriginAccessIdentityCommand";
import { UpdateDistributionCommandInput, UpdateDistributionCommandOutput } from "./commands/UpdateDistributionCommand";
import { UpdateFieldLevelEncryptionConfigCommandInput, UpdateFieldLevelEncryptionConfigCommandOutput } from "./commands/UpdateFieldLevelEncryptionConfigCommand";
import { UpdateFieldLevelEncryptionProfileCommandInput, UpdateFieldLevelEncryptionProfileCommandOutput } from "./commands/UpdateFieldLevelEncryptionProfileCommand";
import { UpdatePublicKeyCommandInput, UpdatePublicKeyCommandOutput } from "./commands/UpdatePublicKeyCommand";
import { UpdateStreamingDistributionCommandInput, UpdateStreamingDistributionCommandOutput } from "./commands/UpdateStreamingDistributionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon CloudFront</fullname>
 * 		       <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers who need detailed information about
 * 			CloudFront API actions, data types, and errors. For detailed information about CloudFront features, see the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export declare class CloudFront extends CloudFrontClient {
    /**
     * <p>Creates a new origin access identity. If you're using Amazon S3 for your origin, you can
     * 			use an origin access identity to require users to access your content using a CloudFront URL instead
     * 			of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the
     * 				<i>Amazon CloudFront Developer Guide</i>.</p>
     */
    createCloudFrontOriginAccessIdentity(args: CreateCloudFrontOriginAccessIdentityCommandInput, options?: __HttpHandlerOptions): Promise<CreateCloudFrontOriginAccessIdentityCommandOutput>;
    createCloudFrontOriginAccessIdentity(args: CreateCloudFrontOriginAccessIdentityCommandInput, cb: (err: any, data?: CreateCloudFrontOriginAccessIdentityCommandOutput) => void): void;
    createCloudFrontOriginAccessIdentity(args: CreateCloudFrontOriginAccessIdentityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCloudFrontOriginAccessIdentityCommandOutput) => void): void;
    /**
     * <p>Creates a new web distribution. You create a CloudFront distribution to tell CloudFront where you
     * 			want content to be delivered from, and the details about how to track and manage content delivery. Send a <code>POST</code> request to the
     * 			<code>/<i>CloudFront API version</i>/distribution</code>/<code>distribution ID</code> resource.</p>
     * 		       <important>
     *             <p>When you update a distribution, there are more required fields than when you create a distribution.
     * 			When you update your distribution by using
     * 			<a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>,
     * 			follow the steps included
     * 			in the documentation to get the current configuration
     * 			and then make your updates. This helps to make sure that you include all of the required fields. To view a summary,
     * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview-required-fields.html">Required
     * 				Fields for Create Distribution and Update Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
     *          </important>
     */
    createDistribution(args: CreateDistributionCommandInput, options?: __HttpHandlerOptions): Promise<CreateDistributionCommandOutput>;
    createDistribution(args: CreateDistributionCommandInput, cb: (err: any, data?: CreateDistributionCommandOutput) => void): void;
    createDistribution(args: CreateDistributionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDistributionCommandOutput) => void): void;
    /**
     * <p>Create a new distribution with tags.</p>
     */
    createDistributionWithTags(args: CreateDistributionWithTagsCommandInput, options?: __HttpHandlerOptions): Promise<CreateDistributionWithTagsCommandOutput>;
    createDistributionWithTags(args: CreateDistributionWithTagsCommandInput, cb: (err: any, data?: CreateDistributionWithTagsCommandOutput) => void): void;
    createDistributionWithTags(args: CreateDistributionWithTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDistributionWithTagsCommandOutput) => void): void;
    /**
     * <p>Create a new field-level encryption configuration.</p>
     */
    createFieldLevelEncryptionConfig(args: CreateFieldLevelEncryptionConfigCommandInput, options?: __HttpHandlerOptions): Promise<CreateFieldLevelEncryptionConfigCommandOutput>;
    createFieldLevelEncryptionConfig(args: CreateFieldLevelEncryptionConfigCommandInput, cb: (err: any, data?: CreateFieldLevelEncryptionConfigCommandOutput) => void): void;
    createFieldLevelEncryptionConfig(args: CreateFieldLevelEncryptionConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFieldLevelEncryptionConfigCommandOutput) => void): void;
    /**
     * <p>Create a field-level encryption profile.</p>
     */
    createFieldLevelEncryptionProfile(args: CreateFieldLevelEncryptionProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateFieldLevelEncryptionProfileCommandOutput>;
    createFieldLevelEncryptionProfile(args: CreateFieldLevelEncryptionProfileCommandInput, cb: (err: any, data?: CreateFieldLevelEncryptionProfileCommandOutput) => void): void;
    createFieldLevelEncryptionProfile(args: CreateFieldLevelEncryptionProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFieldLevelEncryptionProfileCommandOutput) => void): void;
    /**
     * <p>Create a new invalidation. </p>
     */
    createInvalidation(args: CreateInvalidationCommandInput, options?: __HttpHandlerOptions): Promise<CreateInvalidationCommandOutput>;
    createInvalidation(args: CreateInvalidationCommandInput, cb: (err: any, data?: CreateInvalidationCommandOutput) => void): void;
    createInvalidation(args: CreateInvalidationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInvalidationCommandOutput) => void): void;
    /**
     * <p>Add a new public key to CloudFront to use, for example, for field-level encryption. You can add a maximum of 10 public keys with one AWS account.</p>
     */
    createPublicKey(args: CreatePublicKeyCommandInput, options?: __HttpHandlerOptions): Promise<CreatePublicKeyCommandOutput>;
    createPublicKey(args: CreatePublicKeyCommandInput, cb: (err: any, data?: CreatePublicKeyCommandOutput) => void): void;
    createPublicKey(args: CreatePublicKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePublicKeyCommandOutput) => void): void;
    /**
     * <p>Creates a new RTMP distribution. An RTMP distribution is similar to a web distribution,
     * 			but an RTMP distribution streams media files using the Adobe Real-Time Messaging Protocol
     * 			(RTMP) instead of serving files using HTTP. </p>
     * 		       <p>To create a new distribution, submit a <code>POST</code> request to the
     * 				<i>CloudFront API version</i>/distribution resource. The request body must include a
     * 			document with a <i>StreamingDistributionConfig</i> element. The response echoes
     * 			the <code>StreamingDistributionConfig</code> element and returns other information about the
     * 			RTMP distribution.</p>
     * 		       <p>To get the status of your request, use the <i>GET
     * 				StreamingDistribution</i> API action. When the value of <code>Enabled</code> is
     * 				<code>true</code> and the value of <code>Status</code> is <code>Deployed</code>, your
     * 			distribution is ready. A distribution usually deploys in less than 15 minutes.</p>
     * 		       <p>For more information about web distributions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-rtmp.html">Working with RTMP Distributions</a> in the
     * 				<i>Amazon CloudFront Developer Guide</i>.</p>
     * 		       <important>
     * 			         <p>Beginning with the 2012-05-05 version of the CloudFront API, we made substantial changes to
     * 				the format of the XML document that you include in the request body when you create or
     * 				update a web distribution or an RTMP distribution, and when you invalidate objects. With
     * 				previous versions of the API, we discovered that it was too easy to accidentally delete one
     * 				or more values for an element that accepts multiple values, for example, CNAMEs and trusted
     * 				signers. Our changes for the 2012-05-05 release are intended to prevent these accidental
     * 				deletions and to notify you when there's a mismatch between the number of values you say
     * 				you're specifying in the <code>Quantity</code> element and the number of values
     * 				specified.</p>
     * 		       </important>
     */
    createStreamingDistribution(args: CreateStreamingDistributionCommandInput, options?: __HttpHandlerOptions): Promise<CreateStreamingDistributionCommandOutput>;
    createStreamingDistribution(args: CreateStreamingDistributionCommandInput, cb: (err: any, data?: CreateStreamingDistributionCommandOutput) => void): void;
    createStreamingDistribution(args: CreateStreamingDistributionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateStreamingDistributionCommandOutput) => void): void;
    /**
     * <p>Create a new streaming distribution with tags.</p>
     */
    createStreamingDistributionWithTags(args: CreateStreamingDistributionWithTagsCommandInput, options?: __HttpHandlerOptions): Promise<CreateStreamingDistributionWithTagsCommandOutput>;
    createStreamingDistributionWithTags(args: CreateStreamingDistributionWithTagsCommandInput, cb: (err: any, data?: CreateStreamingDistributionWithTagsCommandOutput) => void): void;
    createStreamingDistributionWithTags(args: CreateStreamingDistributionWithTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateStreamingDistributionWithTagsCommandOutput) => void): void;
    /**
     * <p>Delete an origin access identity. </p>
     */
    deleteCloudFrontOriginAccessIdentity(args: DeleteCloudFrontOriginAccessIdentityCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCloudFrontOriginAccessIdentityCommandOutput>;
    deleteCloudFrontOriginAccessIdentity(args: DeleteCloudFrontOriginAccessIdentityCommandInput, cb: (err: any, data?: DeleteCloudFrontOriginAccessIdentityCommandOutput) => void): void;
    deleteCloudFrontOriginAccessIdentity(args: DeleteCloudFrontOriginAccessIdentityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCloudFrontOriginAccessIdentityCommandOutput) => void): void;
    /**
     * <p>Delete a distribution. </p>
     */
    deleteDistribution(args: DeleteDistributionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDistributionCommandOutput>;
    deleteDistribution(args: DeleteDistributionCommandInput, cb: (err: any, data?: DeleteDistributionCommandOutput) => void): void;
    deleteDistribution(args: DeleteDistributionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDistributionCommandOutput) => void): void;
    /**
     * <p>Remove a field-level encryption configuration.</p>
     */
    deleteFieldLevelEncryptionConfig(args: DeleteFieldLevelEncryptionConfigCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFieldLevelEncryptionConfigCommandOutput>;
    deleteFieldLevelEncryptionConfig(args: DeleteFieldLevelEncryptionConfigCommandInput, cb: (err: any, data?: DeleteFieldLevelEncryptionConfigCommandOutput) => void): void;
    deleteFieldLevelEncryptionConfig(args: DeleteFieldLevelEncryptionConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFieldLevelEncryptionConfigCommandOutput) => void): void;
    /**
     * <p>Remove a field-level encryption profile.</p>
     */
    deleteFieldLevelEncryptionProfile(args: DeleteFieldLevelEncryptionProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFieldLevelEncryptionProfileCommandOutput>;
    deleteFieldLevelEncryptionProfile(args: DeleteFieldLevelEncryptionProfileCommandInput, cb: (err: any, data?: DeleteFieldLevelEncryptionProfileCommandOutput) => void): void;
    deleteFieldLevelEncryptionProfile(args: DeleteFieldLevelEncryptionProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFieldLevelEncryptionProfileCommandOutput) => void): void;
    /**
     * <p>Remove a public key you previously added to CloudFront.</p>
     */
    deletePublicKey(args: DeletePublicKeyCommandInput, options?: __HttpHandlerOptions): Promise<DeletePublicKeyCommandOutput>;
    deletePublicKey(args: DeletePublicKeyCommandInput, cb: (err: any, data?: DeletePublicKeyCommandOutput) => void): void;
    deletePublicKey(args: DeletePublicKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePublicKeyCommandOutput) => void): void;
    /**
     * <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API,
     * 			perform the following steps.</p>
     *
     * 		       <p>
     *             <b>To delete an RTMP distribution using the CloudFront
     * 			API</b>:</p>
     * 		       <ol>
     *             <li>
     * 				           <p>Disable the RTMP distribution.</p>
     * 			         </li>
     *             <li>
     * 				           <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current
     * 					configuration and the <code>Etag</code> header for the distribution. </p>
     * 			         </li>
     *             <li>
     * 				           <p>Update the XML document that was returned in the response to your <code>GET
     * 						Streaming Distribution Config</code> request to change the value of <code>Enabled</code>
     * 					to <code>false</code>.</p>
     * 			         </li>
     *             <li>
     * 				           <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the
     * 					configuration for your distribution. In the request body, include the XML document that
     * 					you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the
     * 					value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET
     * 						Streaming Distribution Config</code> request in Step 2.</p>
     * 			         </li>
     *             <li>
     * 				           <p>Review the response to the <code>PUT Streaming Distribution Config</code> request
     * 					to confirm that the distribution was successfully disabled.</p>
     * 			         </li>
     *             <li>
     * 				           <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that
     * 					your changes have propagated. When propagation is complete, the value of
     * 						<code>Status</code> is <code>Deployed</code>.</p>
     * 			         </li>
     *             <li>
     * 				           <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the
     * 					HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront
     * 					returned when you submitted the <code>GET Streaming Distribution Config</code> request in
     * 					Step 2.</p>
     * 			         </li>
     *             <li>
     * 				           <p>Review the response to your <code>DELETE Streaming Distribution</code> request to
     * 					confirm that the distribution was successfully deleted.</p>
     * 			         </li>
     *          </ol>
     * 		       <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the
     * 				<i>Amazon CloudFront Developer Guide</i>.</p>
     */
    deleteStreamingDistribution(args: DeleteStreamingDistributionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStreamingDistributionCommandOutput>;
    deleteStreamingDistribution(args: DeleteStreamingDistributionCommandInput, cb: (err: any, data?: DeleteStreamingDistributionCommandOutput) => void): void;
    deleteStreamingDistribution(args: DeleteStreamingDistributionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteStreamingDistributionCommandOutput) => void): void;
    /**
     * <p>Get the information about an origin access identity. </p>
     */
    getCloudFrontOriginAccessIdentity(args: GetCloudFrontOriginAccessIdentityCommandInput, options?: __HttpHandlerOptions): Promise<GetCloudFrontOriginAccessIdentityCommandOutput>;
    getCloudFrontOriginAccessIdentity(args: GetCloudFrontOriginAccessIdentityCommandInput, cb: (err: any, data?: GetCloudFrontOriginAccessIdentityCommandOutput) => void): void;
    getCloudFrontOriginAccessIdentity(args: GetCloudFrontOriginAccessIdentityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCloudFrontOriginAccessIdentityCommandOutput) => void): void;
    /**
     * <p>Get the configuration information about an origin access identity. </p>
     */
    getCloudFrontOriginAccessIdentityConfig(args: GetCloudFrontOriginAccessIdentityConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetCloudFrontOriginAccessIdentityConfigCommandOutput>;
    getCloudFrontOriginAccessIdentityConfig(args: GetCloudFrontOriginAccessIdentityConfigCommandInput, cb: (err: any, data?: GetCloudFrontOriginAccessIdentityConfigCommandOutput) => void): void;
    getCloudFrontOriginAccessIdentityConfig(args: GetCloudFrontOriginAccessIdentityConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCloudFrontOriginAccessIdentityConfigCommandOutput) => void): void;
    /**
     * <p>Get the information about a distribution.</p>
     */
    getDistribution(args: GetDistributionCommandInput, options?: __HttpHandlerOptions): Promise<GetDistributionCommandOutput>;
    getDistribution(args: GetDistributionCommandInput, cb: (err: any, data?: GetDistributionCommandOutput) => void): void;
    getDistribution(args: GetDistributionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDistributionCommandOutput) => void): void;
    /**
     * <p>Get the configuration information about a distribution. </p>
     */
    getDistributionConfig(args: GetDistributionConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetDistributionConfigCommandOutput>;
    getDistributionConfig(args: GetDistributionConfigCommandInput, cb: (err: any, data?: GetDistributionConfigCommandOutput) => void): void;
    getDistributionConfig(args: GetDistributionConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDistributionConfigCommandOutput) => void): void;
    /**
     * <p>Get the field-level encryption configuration information.</p>
     */
    getFieldLevelEncryption(args: GetFieldLevelEncryptionCommandInput, options?: __HttpHandlerOptions): Promise<GetFieldLevelEncryptionCommandOutput>;
    getFieldLevelEncryption(args: GetFieldLevelEncryptionCommandInput, cb: (err: any, data?: GetFieldLevelEncryptionCommandOutput) => void): void;
    getFieldLevelEncryption(args: GetFieldLevelEncryptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFieldLevelEncryptionCommandOutput) => void): void;
    /**
     * <p>Get the field-level encryption configuration information.</p>
     */
    getFieldLevelEncryptionConfig(args: GetFieldLevelEncryptionConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetFieldLevelEncryptionConfigCommandOutput>;
    getFieldLevelEncryptionConfig(args: GetFieldLevelEncryptionConfigCommandInput, cb: (err: any, data?: GetFieldLevelEncryptionConfigCommandOutput) => void): void;
    getFieldLevelEncryptionConfig(args: GetFieldLevelEncryptionConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFieldLevelEncryptionConfigCommandOutput) => void): void;
    /**
     * <p>Get the field-level encryption profile information.</p>
     */
    getFieldLevelEncryptionProfile(args: GetFieldLevelEncryptionProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetFieldLevelEncryptionProfileCommandOutput>;
    getFieldLevelEncryptionProfile(args: GetFieldLevelEncryptionProfileCommandInput, cb: (err: any, data?: GetFieldLevelEncryptionProfileCommandOutput) => void): void;
    getFieldLevelEncryptionProfile(args: GetFieldLevelEncryptionProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFieldLevelEncryptionProfileCommandOutput) => void): void;
    /**
     * <p>Get the field-level encryption profile configuration information.</p>
     */
    getFieldLevelEncryptionProfileConfig(args: GetFieldLevelEncryptionProfileConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetFieldLevelEncryptionProfileConfigCommandOutput>;
    getFieldLevelEncryptionProfileConfig(args: GetFieldLevelEncryptionProfileConfigCommandInput, cb: (err: any, data?: GetFieldLevelEncryptionProfileConfigCommandOutput) => void): void;
    getFieldLevelEncryptionProfileConfig(args: GetFieldLevelEncryptionProfileConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFieldLevelEncryptionProfileConfigCommandOutput) => void): void;
    /**
     * <p>Get the information about an invalidation. </p>
     */
    getInvalidation(args: GetInvalidationCommandInput, options?: __HttpHandlerOptions): Promise<GetInvalidationCommandOutput>;
    getInvalidation(args: GetInvalidationCommandInput, cb: (err: any, data?: GetInvalidationCommandOutput) => void): void;
    getInvalidation(args: GetInvalidationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInvalidationCommandOutput) => void): void;
    /**
     * <p>Get the public key information.</p>
     */
    getPublicKey(args: GetPublicKeyCommandInput, options?: __HttpHandlerOptions): Promise<GetPublicKeyCommandOutput>;
    getPublicKey(args: GetPublicKeyCommandInput, cb: (err: any, data?: GetPublicKeyCommandOutput) => void): void;
    getPublicKey(args: GetPublicKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPublicKeyCommandOutput) => void): void;
    /**
     * <p>Return public key configuration informaation</p>
     */
    getPublicKeyConfig(args: GetPublicKeyConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetPublicKeyConfigCommandOutput>;
    getPublicKeyConfig(args: GetPublicKeyConfigCommandInput, cb: (err: any, data?: GetPublicKeyConfigCommandOutput) => void): void;
    getPublicKeyConfig(args: GetPublicKeyConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPublicKeyConfigCommandOutput) => void): void;
    /**
     * <p>Gets information about a specified RTMP distribution, including the distribution configuration.</p>
     */
    getStreamingDistribution(args: GetStreamingDistributionCommandInput, options?: __HttpHandlerOptions): Promise<GetStreamingDistributionCommandOutput>;
    getStreamingDistribution(args: GetStreamingDistributionCommandInput, cb: (err: any, data?: GetStreamingDistributionCommandOutput) => void): void;
    getStreamingDistribution(args: GetStreamingDistributionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetStreamingDistributionCommandOutput) => void): void;
    /**
     * <p>Get the configuration information about a streaming distribution. </p>
     */
    getStreamingDistributionConfig(args: GetStreamingDistributionConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetStreamingDistributionConfigCommandOutput>;
    getStreamingDistributionConfig(args: GetStreamingDistributionConfigCommandInput, cb: (err: any, data?: GetStreamingDistributionConfigCommandOutput) => void): void;
    getStreamingDistributionConfig(args: GetStreamingDistributionConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetStreamingDistributionConfigCommandOutput) => void): void;
    /**
     * <p>Lists origin access identities.</p>
     */
    listCloudFrontOriginAccessIdentities(args: ListCloudFrontOriginAccessIdentitiesCommandInput, options?: __HttpHandlerOptions): Promise<ListCloudFrontOriginAccessIdentitiesCommandOutput>;
    listCloudFrontOriginAccessIdentities(args: ListCloudFrontOriginAccessIdentitiesCommandInput, cb: (err: any, data?: ListCloudFrontOriginAccessIdentitiesCommandOutput) => void): void;
    listCloudFrontOriginAccessIdentities(args: ListCloudFrontOriginAccessIdentitiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCloudFrontOriginAccessIdentitiesCommandOutput) => void): void;
    /**
     * <p>List CloudFront distributions.</p>
     */
    listDistributions(args: ListDistributionsCommandInput, options?: __HttpHandlerOptions): Promise<ListDistributionsCommandOutput>;
    listDistributions(args: ListDistributionsCommandInput, cb: (err: any, data?: ListDistributionsCommandOutput) => void): void;
    listDistributions(args: ListDistributionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDistributionsCommandOutput) => void): void;
    /**
     * <p>List the distributions that are associated with a specified AWS WAF web ACL. </p>
     */
    listDistributionsByWebACLId(args: ListDistributionsByWebACLIdCommandInput, options?: __HttpHandlerOptions): Promise<ListDistributionsByWebACLIdCommandOutput>;
    listDistributionsByWebACLId(args: ListDistributionsByWebACLIdCommandInput, cb: (err: any, data?: ListDistributionsByWebACLIdCommandOutput) => void): void;
    listDistributionsByWebACLId(args: ListDistributionsByWebACLIdCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDistributionsByWebACLIdCommandOutput) => void): void;
    /**
     * <p>List all field-level encryption configurations that have been created in CloudFront for this account.</p>
     */
    listFieldLevelEncryptionConfigs(args: ListFieldLevelEncryptionConfigsCommandInput, options?: __HttpHandlerOptions): Promise<ListFieldLevelEncryptionConfigsCommandOutput>;
    listFieldLevelEncryptionConfigs(args: ListFieldLevelEncryptionConfigsCommandInput, cb: (err: any, data?: ListFieldLevelEncryptionConfigsCommandOutput) => void): void;
    listFieldLevelEncryptionConfigs(args: ListFieldLevelEncryptionConfigsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFieldLevelEncryptionConfigsCommandOutput) => void): void;
    /**
     * <p>Request a list of field-level encryption profiles that have been created in CloudFront for this account.</p>
     */
    listFieldLevelEncryptionProfiles(args: ListFieldLevelEncryptionProfilesCommandInput, options?: __HttpHandlerOptions): Promise<ListFieldLevelEncryptionProfilesCommandOutput>;
    listFieldLevelEncryptionProfiles(args: ListFieldLevelEncryptionProfilesCommandInput, cb: (err: any, data?: ListFieldLevelEncryptionProfilesCommandOutput) => void): void;
    listFieldLevelEncryptionProfiles(args: ListFieldLevelEncryptionProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFieldLevelEncryptionProfilesCommandOutput) => void): void;
    /**
     * <p>Lists invalidation batches. </p>
     */
    listInvalidations(args: ListInvalidationsCommandInput, options?: __HttpHandlerOptions): Promise<ListInvalidationsCommandOutput>;
    listInvalidations(args: ListInvalidationsCommandInput, cb: (err: any, data?: ListInvalidationsCommandOutput) => void): void;
    listInvalidations(args: ListInvalidationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInvalidationsCommandOutput) => void): void;
    /**
     * <p>List all public keys that have been added to CloudFront for this account.</p>
     */
    listPublicKeys(args: ListPublicKeysCommandInput, options?: __HttpHandlerOptions): Promise<ListPublicKeysCommandOutput>;
    listPublicKeys(args: ListPublicKeysCommandInput, cb: (err: any, data?: ListPublicKeysCommandOutput) => void): void;
    listPublicKeys(args: ListPublicKeysCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPublicKeysCommandOutput) => void): void;
    /**
     * <p>List streaming distributions. </p>
     */
    listStreamingDistributions(args: ListStreamingDistributionsCommandInput, options?: __HttpHandlerOptions): Promise<ListStreamingDistributionsCommandOutput>;
    listStreamingDistributions(args: ListStreamingDistributionsCommandInput, cb: (err: any, data?: ListStreamingDistributionsCommandOutput) => void): void;
    listStreamingDistributions(args: ListStreamingDistributionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListStreamingDistributionsCommandOutput) => void): void;
    /**
     * <p>List tags for a CloudFront resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Add tags to a CloudFront resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Remove tags from a CloudFront resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Update an origin access identity. </p>
     */
    updateCloudFrontOriginAccessIdentity(args: UpdateCloudFrontOriginAccessIdentityCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCloudFrontOriginAccessIdentityCommandOutput>;
    updateCloudFrontOriginAccessIdentity(args: UpdateCloudFrontOriginAccessIdentityCommandInput, cb: (err: any, data?: UpdateCloudFrontOriginAccessIdentityCommandOutput) => void): void;
    updateCloudFrontOriginAccessIdentity(args: UpdateCloudFrontOriginAccessIdentityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCloudFrontOriginAccessIdentityCommandOutput) => void): void;
    /**
     * <p>Updates the configuration for a web distribution. </p>
     * 		       <important>
     *             <p>When you update a distribution, there are more required fields than when you create a distribution.
     * 			When you update your distribution by using this API action, follow the steps here to get the current configuration
     * 			and then make your updates, to make sure that you include all of the required fields. To view a summary,
     * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview-required-fields.html">Required
     * 				Fields for Create Distribution and Update Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
     *          </important>
     * 		       <p>The update process includes getting the current distribution configuration, updating the XML document that is
     * 			returned to make your changes, and then submitting an <code>UpdateDistribution</code> request to make the updates.</p>
     * 		       <p>For information about updating a distribution using the CloudFront console instead, see
     * 			<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-creating-console.html">Creating a
     * 				Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
     *
     * 		       <p>
     *             <b>To update a web distribution using the CloudFront API</b>
     *          </p>
     * 		       <ol>
     *             <li>
     *                <p>Submit a
     * 				<a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistributionConfig.html">GetDistributionConfig</a>
     * 				request to get the current configuration and an <code>Etag</code> header
     * 				for the distribution.</p>
     * 				           <note>
     *                   <p>If you update the distribution again, you must get a new <code>Etag</code> header.</p>
     *                </note>
     * 			         </li>
     *             <li>
     *                <p>Update the XML document that was returned in the response to your <code>GetDistributionConfig</code> request to include
     * 				your changes. </p>
     * 				           <important>
     * 					             <p>When you edit the XML file, be aware of the following:</p>
     * 					             <ul>
     *                      <li>
     *                         <p>You must strip out the ETag parameter that is returned.</p>
     *                      </li>
     *                      <li>
     *                         <p>Additional fields are required when you update a distribution. There may be fields included in the
     * 							XML file for features that you haven't configured for your distribution. This is expected and required to
     * 							successfully update the distribution.</p>
     *                      </li>
     *                      <li>
     *                         <p>You can't change the value of <code>CallerReference</code>. If you try to change this value, CloudFront returns an
     * 							<code>IllegalUpdate</code> error. </p>
     *                      </li>
     *                      <li>
     *                         <p>The new configuration replaces the existing configuration; the values that you specify in an
     * 							<code>UpdateDistribution</code> request are not merged into your existing configuration. When you add, delete, or
     * 							replace values in an element that allows multiple values (for example, <code>CNAME</code>), you must specify all of the
     * 							values that you want to appear in the updated distribution. In addition,
     * 							you must update the corresponding <code>Quantity</code> element.</p>
     *                      </li>
     *                   </ul>
     *                </important>
     * 			         </li>
     *             <li>
     *                <p>Submit an <code>UpdateDistribution</code> request to update the configuration for your distribution:</p>
     * 				           <ul>
     *                   <li>
     *                      <p>In the request body, include the XML document that you updated in Step 2. The request body must include an
     * 						XML document with a <code>DistributionConfig</code> element.</p>
     *                   </li>
     *                   <li>
     *                      <p>Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned
     * 						when you submitted the <code>GetDistributionConfig</code> request in Step 1.</p>
     *                   </li>
     *                </ul>
     * 			         </li>
     *             <li>
     *                <p>Review the response to the <code>UpdateDistribution</code> request to confirm that the configuration was
     * 				successfully updated.</p>
     *             </li>
     *             <li>
     *                <p>Optional: Submit a
     * 				<a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html">GetDistribution</a>
     * 				request to confirm that your changes have propagated.
     * 				When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p>
     * 			         </li>
     *          </ol>
     */
    updateDistribution(args: UpdateDistributionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDistributionCommandOutput>;
    updateDistribution(args: UpdateDistributionCommandInput, cb: (err: any, data?: UpdateDistributionCommandOutput) => void): void;
    updateDistribution(args: UpdateDistributionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDistributionCommandOutput) => void): void;
    /**
     * <p>Update a field-level encryption configuration. </p>
     */
    updateFieldLevelEncryptionConfig(args: UpdateFieldLevelEncryptionConfigCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFieldLevelEncryptionConfigCommandOutput>;
    updateFieldLevelEncryptionConfig(args: UpdateFieldLevelEncryptionConfigCommandInput, cb: (err: any, data?: UpdateFieldLevelEncryptionConfigCommandOutput) => void): void;
    updateFieldLevelEncryptionConfig(args: UpdateFieldLevelEncryptionConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFieldLevelEncryptionConfigCommandOutput) => void): void;
    /**
     * <p>Update a field-level encryption profile. </p>
     */
    updateFieldLevelEncryptionProfile(args: UpdateFieldLevelEncryptionProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFieldLevelEncryptionProfileCommandOutput>;
    updateFieldLevelEncryptionProfile(args: UpdateFieldLevelEncryptionProfileCommandInput, cb: (err: any, data?: UpdateFieldLevelEncryptionProfileCommandOutput) => void): void;
    updateFieldLevelEncryptionProfile(args: UpdateFieldLevelEncryptionProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFieldLevelEncryptionProfileCommandOutput) => void): void;
    /**
     * <p>Update public key information. Note that the only value you can change is the comment.</p>
     */
    updatePublicKey(args: UpdatePublicKeyCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePublicKeyCommandOutput>;
    updatePublicKey(args: UpdatePublicKeyCommandInput, cb: (err: any, data?: UpdatePublicKeyCommandOutput) => void): void;
    updatePublicKey(args: UpdatePublicKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePublicKeyCommandOutput) => void): void;
    /**
     * <p>Update a streaming distribution. </p>
     */
    updateStreamingDistribution(args: UpdateStreamingDistributionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStreamingDistributionCommandOutput>;
    updateStreamingDistribution(args: UpdateStreamingDistributionCommandInput, cb: (err: any, data?: UpdateStreamingDistributionCommandOutput) => void): void;
    updateStreamingDistribution(args: UpdateStreamingDistributionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateStreamingDistributionCommandOutput) => void): void;
}
