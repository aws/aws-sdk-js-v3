import { LazyJsonString as __LazyJsonString, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>You are not authorized to perform the action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    Code?: string;
    Logref?: string;
    Message?: string;
}
export declare namespace AccessDeniedException {
    function isa(o: any): o is AccessDeniedException;
}
/**
 * <p>Structure containing the estimated age range, in years, for a face.</p>
 *          <p>Amazon Rekognition estimates an age range for faces detected in the input image. Estimated age
 *       ranges can overlap. A face of a 5-year-old might have an estimated range of 4-6, while the
 *       face of a 6-year-old might have an estimated range of 4-8.</p>
 */
export interface AgeRange {
    __type?: "AgeRange";
    /**
     * <p>The highest estimated age.</p>
     */
    High?: number;
    /**
     * <p>The lowest estimated age.</p>
     */
    Low?: number;
}
export declare namespace AgeRange {
    function isa(o: any): o is AgeRange;
}
/**
 * <p>Assets are the images that you use to train and evaluate a model version.
 *          Assets are referenced by Sagemaker GroundTruth manifest files.
 *     </p>
 */
export interface Asset {
    __type?: "Asset";
    /**
     * <p>The S3 bucket that contains the Ground Truth manifest file.</p>
     */
    GroundTruthManifest?: GroundTruthManifest;
}
export declare namespace Asset {
    function isa(o: any): o is Asset;
}
export declare enum Attribute {
    ALL = "ALL",
    DEFAULT = "DEFAULT"
}
/**
 * <p>Indicates whether or not the face has a beard, and the confidence level in the
 *       determination.</p>
 */
export interface Beard {
    __type?: "Beard";
    /**
     * <p>Level of confidence in the determination.</p>
     */
    Confidence?: number;
    /**
     * <p>Boolean value that indicates whether the face has beard or not.</p>
     */
    Value?: boolean;
}
export declare namespace Beard {
    function isa(o: any): o is Beard;
}
/**
 * <p>Identifies the bounding box around the label, face, or text. The <code>left</code>
 *       (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and
 *       left sides of the bounding box. Note that the upper-left corner of the image is the origin
 *       (0,0). </p>
 *          <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall
 *       image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of
 *       the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700)
 *       and a <code>top</code> value of 0.25 (50/200).</p>
 *          <p>The <code>width</code> and <code>height</code> values represent the dimensions of the
 *       bounding box as a ratio of the overall image dimension. For example, if the input image is
 *       700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p>
 *          <note>
 *             <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is
 *         able to detect a face that is at the image edge and is only partially visible, the service
 *         can return coordinates that are outside the image bounds and, depending on the image edge,
 *         you might get negative values or values greater than 1 for the <code>left</code> or
 *           <code>top</code> values. </p>
 *          </note>
 */
export interface BoundingBox {
    __type?: "BoundingBox";
    /**
     * <p>Height of the bounding box as a ratio of the overall image height.</p>
     */
    Height?: number;
    /**
     * <p>Left coordinate of the bounding box as a ratio of overall image width.</p>
     */
    Left?: number;
    /**
     * <p>Top coordinate of the bounding box as a ratio of overall image height.</p>
     */
    Top?: number;
    /**
     * <p>Width of the bounding box as a ratio of the overall image width.</p>
     */
    Width?: number;
}
export declare namespace BoundingBox {
    function isa(o: any): o is BoundingBox;
}
/**
 * <p>Provides information about a celebrity recognized by the <a>RecognizeCelebrities</a> operation.</p>
 */
export interface Celebrity {
    __type?: "Celebrity";
    /**
     * <p>Provides information about the celebrity's face, such as its location on the
     *       image.</p>
     */
    Face?: ComparedFace;
    /**
     * <p>A unique identifier for the celebrity. </p>
     */
    Id?: string;
    /**
     * <p>The confidence, in percentage, that Amazon Rekognition has that the recognized face is the
     *       celebrity.</p>
     */
    MatchConfidence?: number;
    /**
     * <p>The name of the celebrity.</p>
     */
    Name?: string;
    /**
     * <p>An array of URLs pointing to additional information about the celebrity. If there is no
     *       additional information about the celebrity, this list is empty.</p>
     */
    Urls?: Array<string>;
}
export declare namespace Celebrity {
    function isa(o: any): o is Celebrity;
}
/**
 * <p>Information about a recognized celebrity.</p>
 */
export interface CelebrityDetail {
    __type?: "CelebrityDetail";
    /**
     * <p>Bounding box around the body of a celebrity.</p>
     */
    BoundingBox?: BoundingBox;
    /**
     * <p>The confidence, in percentage, that Amazon Rekognition has that the recognized face is the celebrity. </p>
     */
    Confidence?: number;
    /**
     * <p>Face details for the recognized celebrity.</p>
     */
    Face?: FaceDetail;
    /**
     * <p>The unique identifier for the celebrity. </p>
     */
    Id?: string;
    /**
     * <p>The name of the celebrity.</p>
     */
    Name?: string;
    /**
     * <p>An array of URLs pointing to additional celebrity information. </p>
     */
    Urls?: Array<string>;
}
export declare namespace CelebrityDetail {
    function isa(o: any): o is CelebrityDetail;
}
/**
 * <p>Information about a detected celebrity and the time the celebrity was detected in a stored video.
 *         For more information, see GetCelebrityRecognition in the Amazon Rekognition Developer Guide.</p>
 */
export interface CelebrityRecognition {
    __type?: "CelebrityRecognition";
    /**
     * <p>Information about a recognized celebrity.</p>
     */
    Celebrity?: CelebrityDetail;
    /**
     * <p>The time, in milliseconds from the start of the video, that the celebrity was recognized.</p>
     */
    Timestamp?: number;
}
export declare namespace CelebrityRecognition {
    function isa(o: any): o is CelebrityRecognition;
}
export declare enum CelebrityRecognitionSortBy {
    ID = "ID",
    TIMESTAMP = "TIMESTAMP"
}
/**
 * <p>Provides information about a face in a target image that matches the source image face
 *       analyzed by <code>CompareFaces</code>. The <code>Face</code> property contains the bounding
 *       box of the face in the target image. The <code>Similarity</code> property is the confidence
 *       that the source image face matches the face in the bounding box.</p>
 */
export interface CompareFacesMatch {
    __type?: "CompareFacesMatch";
    /**
     * <p>Provides face metadata (bounding box and confidence that the bounding box actually
     *       contains a face).</p>
     */
    Face?: ComparedFace;
    /**
     * <p>Level of confidence that the faces match.</p>
     */
    Similarity?: number;
}
export declare namespace CompareFacesMatch {
    function isa(o: any): o is CompareFacesMatch;
}
export interface CompareFacesRequest {
    __type?: "CompareFacesRequest";
    /**
     * <p>A filter that specifies a quality bar for how much filtering is done to identify faces.
     *       Filtered faces aren't compared. If you specify <code>AUTO</code>, Amazon Rekognition chooses the quality bar.
     *       If you specify <code>LOW</code>,
     *       <code>MEDIUM</code>, or <code>HIGH</code>, filtering removes all faces that
     *       don’t meet the chosen quality bar.
     *
     *       The quality bar is based on a variety of common use cases. Low-quality
     *       detections can occur for a number of reasons. Some examples are an object that's misidentified
     *       as a face, a face that's too blurry, or a face with a
     *       pose that's too extreme to use. If you specify <code>NONE</code>, no
     *       filtering is performed. The default value is <code>NONE</code>.
     *     </p>
     *          <p>To use quality filtering, the collection you are using must be associated with version 3 of the face model or higher.</p>
     */
    QualityFilter?: QualityFilter | string;
    /**
     * <p>The minimum level of confidence in the face matches that a match must meet to be
     *       included in the <code>FaceMatches</code> array.</p>
     */
    SimilarityThreshold?: number;
    /**
     * <p>The input image as base64-encoded bytes or an S3 object.
     *       If you use the AWS CLI to call Amazon Rekognition operations,
     *       passing base64-encoded image bytes is not supported. </p>
     *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes
     *       passed using the <code>Bytes</code> field.
     *       For more information, see Images in the Amazon Rekognition developer guide.</p>
     */
    SourceImage: Image | undefined;
    /**
     * <p>The target image as base64-encoded bytes or an S3 object. If you use the AWS CLI to
     *       call Amazon Rekognition operations, passing base64-encoded image bytes is not supported.
     *     </p>
     *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes
     *       passed using the <code>Bytes</code> field.
     *       For more information, see Images in the Amazon Rekognition developer guide.</p>
     */
    TargetImage: Image | undefined;
}
export declare namespace CompareFacesRequest {
    function isa(o: any): o is CompareFacesRequest;
}
export interface CompareFacesResponse {
    __type?: "CompareFacesResponse";
    /**
     * <p>An array of faces in the target image that match the source image face. Each
     *         <code>CompareFacesMatch</code> object provides the bounding box, the confidence level that
     *       the bounding box contains a face, and the similarity score for the face in the bounding box
     *       and the face in the source image.</p>
     */
    FaceMatches?: Array<CompareFacesMatch>;
    /**
     * <p>The face in the source image that was used for comparison.</p>
     */
    SourceImageFace?: ComparedSourceImageFace;
    /**
     * <p>The value of <code>SourceImageOrientationCorrection</code> is always null.</p>
     *          <p>If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata
     *       that includes the image's orientation. Amazon Rekognition uses this orientation information to perform
     *       image correction. The bounding box coordinates are translated to represent object locations
     *       after the orientation information in the Exif metadata is used to correct the image orientation.
     *       Images in .png format don't contain Exif metadata.</p>
     *          <p>Amazon Rekognition doesn’t perform image correction for images in .png format and
     *       .jpeg images without orientation information in the image Exif metadata. The bounding box
     *       coordinates aren't translated and represent the object locations before the image is rotated.
     *     </p>
     */
    SourceImageOrientationCorrection?: OrientationCorrection | string;
    /**
     * <p>The value of <code>TargetImageOrientationCorrection</code> is always null.</p>
     *          <p>If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata
     *       that includes the image's orientation. Amazon Rekognition uses this orientation information to perform
     *       image correction. The bounding box coordinates are translated to represent object locations
     *       after the orientation information in the Exif metadata is used to correct the image orientation.
     *       Images in .png format don't contain Exif metadata.</p>
     *          <p>Amazon Rekognition doesn’t perform image correction for images in .png format and
     *       .jpeg images without orientation information in the image Exif metadata. The bounding box
     *       coordinates aren't translated and represent the object locations before the image is rotated.
     *     </p>
     */
    TargetImageOrientationCorrection?: OrientationCorrection | string;
    /**
     * <p>An array of faces in the target image that did not match the source image
     *       face.</p>
     */
    UnmatchedFaces?: Array<ComparedFace>;
}
export declare namespace CompareFacesResponse {
    function isa(o: any): o is CompareFacesResponse;
}
/**
 * <p>Provides face metadata for target image faces that are analyzed by
 *         <code>CompareFaces</code> and <code>RecognizeCelebrities</code>.</p>
 */
export interface ComparedFace {
    __type?: "ComparedFace";
    /**
     * <p>Bounding box of the face.</p>
     */
    BoundingBox?: BoundingBox;
    /**
     * <p>Level of confidence that what the bounding box contains is a face.</p>
     */
    Confidence?: number;
    /**
     * <p>An array of facial landmarks.</p>
     */
    Landmarks?: Array<Landmark>;
    /**
     * <p>Indicates the pose of the face as determined by its pitch, roll, and yaw.</p>
     */
    Pose?: Pose;
    /**
     * <p>Identifies face image brightness and sharpness. </p>
     */
    Quality?: ImageQuality;
}
export declare namespace ComparedFace {
    function isa(o: any): o is ComparedFace;
}
/**
 * <p>Type that describes the face Amazon Rekognition chose to compare with the faces in the target.
 *       This contains a bounding box for the selected face and confidence level that the bounding box
 *       contains a face. Note that Amazon Rekognition selects the largest face in the source image for this
 *       comparison. </p>
 */
export interface ComparedSourceImageFace {
    __type?: "ComparedSourceImageFace";
    /**
     * <p>Bounding box of the face.</p>
     */
    BoundingBox?: BoundingBox;
    /**
     * <p>Confidence level that the selected bounding box contains a face.</p>
     */
    Confidence?: number;
}
export declare namespace ComparedSourceImageFace {
    function isa(o: any): o is ComparedSourceImageFace;
}
export declare enum ContentClassifier {
    FREE_OF_ADULT_CONTENT = "FreeOfAdultContent",
    FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION = "FreeOfPersonallyIdentifiableInformation"
}
/**
 * <p>Information about an unsafe content label detection in a stored video.</p>
 */
export interface ContentModerationDetection {
    __type?: "ContentModerationDetection";
    /**
     * <p>The unsafe content label detected by in the stored video.</p>
     */
    ModerationLabel?: ModerationLabel;
    /**
     * <p>Time, in milliseconds from the beginning of the video, that the unsafe content label was detected.</p>
     */
    Timestamp?: number;
}
export declare namespace ContentModerationDetection {
    function isa(o: any): o is ContentModerationDetection;
}
export declare enum ContentModerationSortBy {
    NAME = "NAME",
    TIMESTAMP = "TIMESTAMP"
}
export interface CreateCollectionRequest {
    __type?: "CreateCollectionRequest";
    /**
     * <p>ID for the collection that you are creating.</p>
     */
    CollectionId: string | undefined;
}
export declare namespace CreateCollectionRequest {
    function isa(o: any): o is CreateCollectionRequest;
}
export interface CreateCollectionResponse {
    __type?: "CreateCollectionResponse";
    /**
     * <p>Amazon Resource Name (ARN) of the collection. You can use this to manage permissions on
     *       your resources. </p>
     */
    CollectionArn?: string;
    /**
     * <p>Version number of the face detection model associated with the collection you are creating.</p>
     */
    FaceModelVersion?: string;
    /**
     * <p>HTTP status code indicating the result of the operation.</p>
     */
    StatusCode?: number;
}
export declare namespace CreateCollectionResponse {
    function isa(o: any): o is CreateCollectionResponse;
}
export interface CreateProjectRequest {
    __type?: "CreateProjectRequest";
    /**
     * <p>The name of the project to create.</p>
     */
    ProjectName: string | undefined;
}
export declare namespace CreateProjectRequest {
    function isa(o: any): o is CreateProjectRequest;
}
export interface CreateProjectResponse {
    __type?: "CreateProjectResponse";
    /**
     * <p>The Amazon Resource Name (ARN) of the new project. You can use the ARN to
     *       configure IAM access to the project. </p>
     */
    ProjectArn?: string;
}
export declare namespace CreateProjectResponse {
    function isa(o: any): o is CreateProjectResponse;
}
export interface CreateProjectVersionRequest {
    __type?: "CreateProjectVersionRequest";
    /**
     * <p>The Amazon S3 location to store the results of training.</p>
     */
    OutputConfig: OutputConfig | undefined;
    /**
     * <p>The ARN of the Amazon Rekognition Custom Labels project that
     *          manages the model that you want to train.</p>
     */
    ProjectArn: string | undefined;
    /**
     * <p>The dataset to use for testing.</p>
     */
    TestingData: TestingData | undefined;
    /**
     * <p>The dataset to use for training. </p>
     */
    TrainingData: TrainingData | undefined;
    /**
     * <p>A name for the version of the model. This value must be unique.</p>
     */
    VersionName: string | undefined;
}
export declare namespace CreateProjectVersionRequest {
    function isa(o: any): o is CreateProjectVersionRequest;
}
export interface CreateProjectVersionResponse {
    __type?: "CreateProjectVersionResponse";
    /**
     * <p>The ARN of the model version that was created. Use <code>DescribeProjectVersion</code>
     *          to get the current status of the training operation.</p>
     */
    ProjectVersionArn?: string;
}
export declare namespace CreateProjectVersionResponse {
    function isa(o: any): o is CreateProjectVersionResponse;
}
export interface CreateStreamProcessorRequest {
    __type?: "CreateStreamProcessorRequest";
    /**
     * <p>Kinesis video stream stream that provides the source streaming video. If you are using the AWS CLI, the parameter name is <code>StreamProcessorInput</code>.</p>
     */
    Input: StreamProcessorInput | undefined;
    /**
     * <p>An identifier you assign to the stream processor. You can use <code>Name</code> to
     *             manage the stream processor. For example, you can get the current status of the stream processor by calling <a>DescribeStreamProcessor</a>.
     *              <code>Name</code> is idempotent.
     *        </p>
     */
    Name: string | undefined;
    /**
     * <p>Kinesis data stream stream to which Amazon Rekognition Video puts the analysis results. If you are using the AWS CLI, the parameter name is <code>StreamProcessorOutput</code>.</p>
     */
    Output: StreamProcessorOutput | undefined;
    /**
     * <p>ARN of the IAM role that allows access to the stream processor.</p>
     */
    RoleArn: string | undefined;
    /**
     * <p>Face recognition input parameters to be used by the stream processor. Includes the collection to use for face recognition and the face
     *         attributes to detect.</p>
     */
    Settings: StreamProcessorSettings | undefined;
}
export declare namespace CreateStreamProcessorRequest {
    function isa(o: any): o is CreateStreamProcessorRequest;
}
export interface CreateStreamProcessorResponse {
    __type?: "CreateStreamProcessorResponse";
    /**
     * <p>ARN for the newly create stream processor.</p>
     */
    StreamProcessorArn?: string;
}
export declare namespace CreateStreamProcessorResponse {
    function isa(o: any): o is CreateStreamProcessorResponse;
}
/**
 * <p>A custom label detected in an image by a call to <a>DetectCustomLabels</a>.</p>
 */
export interface CustomLabel {
    __type?: "CustomLabel";
    /**
     * <p>The confidence that the model has in the detection of the custom label. The
     *       range is 0-100. A higher value indicates a higher confidence.</p>
     */
    Confidence?: number;
    /**
     * <p>The location of the detected object on the image that corresponds to the custom label.
     *          Includes an axis aligned coarse bounding box surrounding the object and a finer grain polygon
     *          for more accurate spatial information.</p>
     */
    Geometry?: Geometry;
    /**
     * <p>The name of the custom label.</p>
     */
    Name?: string;
}
export declare namespace CustomLabel {
    function isa(o: any): o is CustomLabel;
}
export interface DeleteCollectionRequest {
    __type?: "DeleteCollectionRequest";
    /**
     * <p>ID of the collection to delete.</p>
     */
    CollectionId: string | undefined;
}
export declare namespace DeleteCollectionRequest {
    function isa(o: any): o is DeleteCollectionRequest;
}
export interface DeleteCollectionResponse {
    __type?: "DeleteCollectionResponse";
    /**
     * <p>HTTP status code that indicates the result of the operation.</p>
     */
    StatusCode?: number;
}
export declare namespace DeleteCollectionResponse {
    function isa(o: any): o is DeleteCollectionResponse;
}
export interface DeleteFacesRequest {
    __type?: "DeleteFacesRequest";
    /**
     * <p>Collection from which to remove the specific faces.</p>
     */
    CollectionId: string | undefined;
    /**
     * <p>An array of face IDs to delete.</p>
     */
    FaceIds: Array<string> | undefined;
}
export declare namespace DeleteFacesRequest {
    function isa(o: any): o is DeleteFacesRequest;
}
export interface DeleteFacesResponse {
    __type?: "DeleteFacesResponse";
    /**
     * <p>An array of strings (face IDs) of the faces that were deleted.</p>
     */
    DeletedFaces?: Array<string>;
}
export declare namespace DeleteFacesResponse {
    function isa(o: any): o is DeleteFacesResponse;
}
export interface DeleteStreamProcessorRequest {
    __type?: "DeleteStreamProcessorRequest";
    /**
     * <p>The name of the stream processor you want to delete.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteStreamProcessorRequest {
    function isa(o: any): o is DeleteStreamProcessorRequest;
}
export interface DeleteStreamProcessorResponse {
    __type?: "DeleteStreamProcessorResponse";
}
export declare namespace DeleteStreamProcessorResponse {
    function isa(o: any): o is DeleteStreamProcessorResponse;
}
export interface DescribeCollectionRequest {
    __type?: "DescribeCollectionRequest";
    /**
     * <p>The ID of the collection to describe.</p>
     */
    CollectionId: string | undefined;
}
export declare namespace DescribeCollectionRequest {
    function isa(o: any): o is DescribeCollectionRequest;
}
export interface DescribeCollectionResponse {
    __type?: "DescribeCollectionResponse";
    /**
     * <p>The Amazon Resource Name (ARN) of the collection.</p>
     */
    CollectionARN?: string;
    /**
     * <p>The number of milliseconds since the Unix epoch time until the creation of the collection.
     *          The Unix epoch time is 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970.</p>
     */
    CreationTimestamp?: Date;
    /**
     * <p>The number of faces that are indexed into the collection. To index faces into a
     *          collection, use <a>IndexFaces</a>.</p>
     */
    FaceCount?: number;
    /**
     * <p>The version of the face model that's used by the collection for face detection.</p>
     *
     *          <p>For more information, see Model Versioning in the
     *      Amazon Rekognition Developer Guide.</p>
     */
    FaceModelVersion?: string;
}
export declare namespace DescribeCollectionResponse {
    function isa(o: any): o is DescribeCollectionResponse;
}
export interface DescribeProjectVersionsRequest {
    __type?: "DescribeProjectVersionsRequest";
    /**
     * <p>The maximum number of results to return per paginated call.
     *           The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException
     *           error occurs. The default value is 100. </p>
     */
    MaxResults?: number;
    /**
     * <p>If the previous response was incomplete (because there is more
     *            results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response.
     *            You can use this pagination token to retrieve the next set of results. </p>
     */
    NextToken?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the project that contains the models you want to describe.</p>
     */
    ProjectArn: string | undefined;
    /**
     * <p>A list of model version names that you want to describe. You can add up to 10 model version names
     *          to the list. If you don't specify a value, all model descriptions are returned.</p>
     */
    VersionNames?: Array<string>;
}
export declare namespace DescribeProjectVersionsRequest {
    function isa(o: any): o is DescribeProjectVersionsRequest;
}
export interface DescribeProjectVersionsResponse {
    __type?: "DescribeProjectVersionsResponse";
    /**
     * <p>If the previous response was incomplete (because there is more
     *          results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response.
     *          You can use this pagination token to retrieve the next set of results. </p>
     */
    NextToken?: string;
    /**
     * <p>A list of model descriptions. The list is sorted by the creation date and time of
     *          the model versions, latest to earliest.</p>
     */
    ProjectVersionDescriptions?: Array<ProjectVersionDescription>;
}
export declare namespace DescribeProjectVersionsResponse {
    function isa(o: any): o is DescribeProjectVersionsResponse;
}
export interface DescribeProjectsRequest {
    __type?: "DescribeProjectsRequest";
    /**
     * <p>The maximum number of results to return per paginated call. The largest value you can specify is 100.
     *          If you specify a value greater than 100, a ValidationException
     *          error occurs. The default value is 100. </p>
     */
    MaxResults?: number;
    /**
     * <p>If the previous response was incomplete (because there is more
     *          results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination
     *          token to retrieve the next set of results. </p>
     */
    NextToken?: string;
}
export declare namespace DescribeProjectsRequest {
    function isa(o: any): o is DescribeProjectsRequest;
}
export interface DescribeProjectsResponse {
    __type?: "DescribeProjectsResponse";
    /**
     * <p>If the previous response was incomplete (because there is more
     *          results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response.
     *          You can use this pagination token to retrieve the next set of results. </p>
     */
    NextToken?: string;
    /**
     * <p>A list of project descriptions. The list is sorted by the date and time the projects are created.</p>
     */
    ProjectDescriptions?: Array<ProjectDescription>;
}
export declare namespace DescribeProjectsResponse {
    function isa(o: any): o is DescribeProjectsResponse;
}
export interface DescribeStreamProcessorRequest {
    __type?: "DescribeStreamProcessorRequest";
    /**
     * <p>Name of the stream processor for which you want information.</p>
     */
    Name: string | undefined;
}
export declare namespace DescribeStreamProcessorRequest {
    function isa(o: any): o is DescribeStreamProcessorRequest;
}
export interface DescribeStreamProcessorResponse {
    __type?: "DescribeStreamProcessorResponse";
    /**
     * <p>Date and time the stream processor was created</p>
     */
    CreationTimestamp?: Date;
    /**
     * <p>Kinesis video stream that provides the source streaming video.</p>
     */
    Input?: StreamProcessorInput;
    /**
     * <p>The time, in Unix format, the stream processor was last updated. For example, when the stream
     *         processor moves from a running state to a failed state, or when the user starts or stops the stream processor.</p>
     */
    LastUpdateTimestamp?: Date;
    /**
     * <p>Name of the stream processor. </p>
     */
    Name?: string;
    /**
     * <p>Kinesis data stream to which Amazon Rekognition Video puts the analysis results.</p>
     */
    Output?: StreamProcessorOutput;
    /**
     * <p>ARN of the IAM role that allows access to the stream processor.</p>
     */
    RoleArn?: string;
    /**
     * <p>Face recognition input parameters that are being used by the stream processor.
     *             Includes the collection to use for face recognition and the face
     *             attributes to detect.</p>
     */
    Settings?: StreamProcessorSettings;
    /**
     * <p>Current status of the stream processor.</p>
     */
    Status?: StreamProcessorStatus | string;
    /**
     * <p>Detailed status message about the stream processor.</p>
     */
    StatusMessage?: string;
    /**
     * <p>ARN of the stream processor.</p>
     */
    StreamProcessorArn?: string;
}
export declare namespace DescribeStreamProcessorResponse {
    function isa(o: any): o is DescribeStreamProcessorResponse;
}
export interface DetectCustomLabelsRequest {
    __type?: "DetectCustomLabelsRequest";
    /**
     * <p>Provides the input image either as bytes or an S3 object.</p>
     *          <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code>
     *       property. For example, you would use the <code>Bytes</code> property to pass an image loaded
     *       from a local file system. Image bytes passed by using the <code>Bytes</code> property must be
     *       base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to
     *       call Amazon Rekognition API operations. </p>
     *
     *          <p>For more information, see Analyzing an Image Loaded from a Local File System
     *       in the Amazon Rekognition Developer Guide.</p>
     *          <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the
     *         <code>S3Object</code> property. Images stored in an S3 bucket do not need to be
     *       base64-encoded.</p>
     *          <p>The region for the S3 bucket containing the S3 object must match the region you use for
     *       Amazon Rekognition operations.</p>
     *          <p>If you use the
     *       AWS
     *       CLI to call Amazon Rekognition operations, passing image bytes using the Bytes
     *       property is not supported. You must first upload the image to an Amazon S3 bucket and then
     *       call the operation using the S3Object property.</p>
     *
     *          <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3
     *       object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide.
     *     </p>
     */
    Image: Image | undefined;
    /**
     * <p>Maximum number of results you want the service to return in the response.
     *          The service returns the specified number of highest confidence labels ranked from highest confidence
     *       to lowest.</p>
     */
    MaxResults?: number;
    /**
     * <p>Specifies the minimum confidence level for the labels to return.
     *          Amazon Rekognition doesn't return any labels with a confidence lower than this specified value. If you specify a
     *       value of 0, all labels are return, regardless of the default thresholds that the model version applies.</p>
     */
    MinConfidence?: number;
    /**
     * <p>The ARN of the model version that you want to use.</p>
     */
    ProjectVersionArn: string | undefined;
}
export declare namespace DetectCustomLabelsRequest {
    function isa(o: any): o is DetectCustomLabelsRequest;
}
export interface DetectCustomLabelsResponse {
    __type?: "DetectCustomLabelsResponse";
    /**
     * <p>An array of custom labels detected in the input image.</p>
     */
    CustomLabels?: Array<CustomLabel>;
}
export declare namespace DetectCustomLabelsResponse {
    function isa(o: any): o is DetectCustomLabelsResponse;
}
export interface DetectFacesRequest {
    __type?: "DetectFacesRequest";
    /**
     * <p>An array of facial attributes you want to be returned. This can be the default list of
     *       attributes or all attributes. If you don't specify a value for <code>Attributes</code> or if
     *       you specify <code>["DEFAULT"]</code>, the API returns the following subset of facial
     *       attributes: <code>BoundingBox</code>, <code>Confidence</code>, <code>Pose</code>,
     *         <code>Quality</code>, and <code>Landmarks</code>. If you provide <code>["ALL"]</code>, all
     *       facial attributes are returned, but the operation takes longer to complete.</p>
     *          <p>If you provide both, <code>["ALL", "DEFAULT"]</code>, the service uses a logical AND
     *       operator to determine which attributes to return (in this case, all attributes). </p>
     */
    Attributes?: Array<Attribute | string>;
    /**
     * <p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call
     *       Amazon Rekognition operations, passing base64-encoded image bytes is not supported. </p>
     *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes
     *       passed using the <code>Bytes</code> field.
     *       For more information, see Images in the Amazon Rekognition developer guide.</p>
     */
    Image: Image | undefined;
}
export declare namespace DetectFacesRequest {
    function isa(o: any): o is DetectFacesRequest;
}
export interface DetectFacesResponse {
    __type?: "DetectFacesResponse";
    /**
     * <p>Details of each face found in the image. </p>
     */
    FaceDetails?: Array<FaceDetail>;
    /**
     * <p>The value of <code>OrientationCorrection</code> is always null.</p>
     *          <p>If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata
     *       that includes the image's orientation. Amazon Rekognition uses this orientation information to perform
     *       image correction. The bounding box coordinates are translated to represent object locations
     *       after the orientation information in the Exif metadata is used to correct the image orientation.
     *       Images in .png format don't contain Exif metadata.</p>
     *          <p>Amazon Rekognition doesn’t perform image correction for images in .png format and
     *       .jpeg images without orientation information in the image Exif metadata. The bounding box
     *       coordinates aren't translated and represent the object locations before the image is rotated.
     *     </p>
     */
    OrientationCorrection?: OrientationCorrection | string;
}
export declare namespace DetectFacesResponse {
    function isa(o: any): o is DetectFacesResponse;
}
export interface DetectLabelsRequest {
    __type?: "DetectLabelsRequest";
    /**
     * <p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call
     *       Amazon Rekognition operations, passing image bytes is not supported. Images stored in an S3 Bucket do
     *     not need to be base64-encoded.</p>
     *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes
     *       passed using the <code>Bytes</code> field.
     *       For more information, see Images in the Amazon Rekognition developer guide.</p>
     */
    Image: Image | undefined;
    /**
     * <p>Maximum number of labels you want the service to return in the response. The service
     *       returns the specified number of highest confidence labels. </p>
     */
    MaxLabels?: number;
    /**
     * <p>Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't
     *       return any labels with confidence lower than this specified value.</p>
     *          <p>If <code>MinConfidence</code> is not specified, the operation returns labels with a
     *       confidence values greater than or equal to 55 percent.</p>
     */
    MinConfidence?: number;
}
export declare namespace DetectLabelsRequest {
    function isa(o: any): o is DetectLabelsRequest;
}
export interface DetectLabelsResponse {
    __type?: "DetectLabelsResponse";
    /**
     * <p>Version number of the label detection model that was used to detect labels.</p>
     */
    LabelModelVersion?: string;
    /**
     * <p>An array of labels for the real-world objects detected. </p>
     */
    Labels?: Array<Label>;
    /**
     * <p>The value of <code>OrientationCorrection</code> is always null.</p>
     *          <p>If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata
     *       that includes the image's orientation. Amazon Rekognition uses this orientation information to perform
     *       image correction. The bounding box coordinates are translated to represent object locations
     *       after the orientation information in the Exif metadata is used to correct the image orientation.
     *       Images in .png format don't contain Exif metadata.</p>
     *          <p>Amazon Rekognition doesn’t perform image correction for images in .png format and
     *          .jpeg images without orientation information in the image Exif metadata. The bounding box
     *          coordinates aren't translated and represent the object locations before the image is rotated.
     *       </p>
     */
    OrientationCorrection?: OrientationCorrection | string;
}
export declare namespace DetectLabelsResponse {
    function isa(o: any): o is DetectLabelsResponse;
}
export interface DetectModerationLabelsRequest {
    __type?: "DetectModerationLabelsRequest";
    /**
     * <p>Sets up the configuration for human evaluation, including the FlowDefinition
     *       the image will be sent to.</p>
     */
    HumanLoopConfig?: HumanLoopConfig;
    /**
     * <p>The input image as base64-encoded bytes or an S3 object.
     *       If you use the AWS CLI to call Amazon Rekognition operations,
     *       passing base64-encoded image bytes is not supported. </p>
     *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes
     *       passed using the <code>Bytes</code> field.
     *       For more information, see Images in the Amazon Rekognition developer guide.</p>
     */
    Image: Image | undefined;
    /**
     * <p>Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't
     *       return any labels with a confidence level lower than this specified value.</p>
     *          <p>If you don't specify <code>MinConfidence</code>, the operation returns labels with
     *       confidence values greater than or equal to 50 percent.</p>
     */
    MinConfidence?: number;
}
export declare namespace DetectModerationLabelsRequest {
    function isa(o: any): o is DetectModerationLabelsRequest;
}
export interface DetectModerationLabelsResponse {
    __type?: "DetectModerationLabelsResponse";
    /**
     * <p>Shows the results of the human in the loop evaluation.</p>
     */
    HumanLoopActivationOutput?: HumanLoopActivationOutput;
    /**
     * <p>Array of detected Moderation labels and the time, in milliseconds from the
     *       start of the video, they were detected.</p>
     */
    ModerationLabels?: Array<ModerationLabel>;
    /**
     * <p>Version number of the moderation detection model that was used to detect unsafe content.</p>
     */
    ModerationModelVersion?: string;
}
export declare namespace DetectModerationLabelsResponse {
    function isa(o: any): o is DetectModerationLabelsResponse;
}
export interface DetectTextRequest {
    __type?: "DetectTextRequest";
    /**
     * <p>The input image as base64-encoded bytes or an Amazon S3 object. If you use the AWS CLI
     *       to call Amazon Rekognition operations, you can't pass image bytes. </p>
     *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes
     *       passed using the <code>Bytes</code> field.
     *       For more information, see Images in the Amazon Rekognition developer guide.</p>
     */
    Image: Image | undefined;
}
export declare namespace DetectTextRequest {
    function isa(o: any): o is DetectTextRequest;
}
export interface DetectTextResponse {
    __type?: "DetectTextResponse";
    /**
     * <p>An array of text that was detected in the input image.</p>
     */
    TextDetections?: Array<TextDetection>;
}
export declare namespace DetectTextResponse {
    function isa(o: any): o is DetectTextResponse;
}
/**
 * <p>The emotions that appear to be expressed on the face, and the confidence level in the determination.
 *       The API is only making a determination of the physical appearance of a person's face. It is not a determination
 *       of the person’s internal emotional state and should not be used in such a way. For example, a person pretending to have
 *       a sad face might not be sad emotionally.</p>
 */
export interface Emotion {
    __type?: "Emotion";
    /**
     * <p>Level of confidence in the determination.</p>
     */
    Confidence?: number;
    /**
     * <p>Type of emotion detected.</p>
     */
    Type?: EmotionName | string;
}
export declare namespace Emotion {
    function isa(o: any): o is Emotion;
}
export declare type EmotionName = "ANGRY" | "CALM" | "CONFUSED" | "DISGUSTED" | "FEAR" | "HAPPY" | "SAD" | "SURPRISED" | "UNKNOWN";
/**
 * <p>The evaluation results for the training of a model.</p>
 */
export interface EvaluationResult {
    __type?: "EvaluationResult";
    /**
     * <p>The F1 score for the evaluation of all labels. The F1 score metric evaluates the overall precision
     *          and recall performance of the model as a single value. A higher value indicates better precision
     *          and recall performance. A lower score indicates that precision, recall, or both are performing poorly.
     *
     *   </p>
     */
    F1Score?: number;
    /**
     * <p>The S3 bucket that contains the training summary.</p>
     */
    Summary?: Summary;
}
export declare namespace EvaluationResult {
    function isa(o: any): o is EvaluationResult;
}
/**
 * <p>Indicates whether or not the eyes on the face are open, and the confidence level in the
 *       determination.</p>
 */
export interface EyeOpen {
    __type?: "EyeOpen";
    /**
     * <p>Level of confidence in the determination.</p>
     */
    Confidence?: number;
    /**
     * <p>Boolean value that indicates whether the eyes on the face are open.</p>
     */
    Value?: boolean;
}
export declare namespace EyeOpen {
    function isa(o: any): o is EyeOpen;
}
/**
 * <p>Indicates whether or not the face is wearing eye glasses, and the confidence level in
 *       the determination.</p>
 */
export interface Eyeglasses {
    __type?: "Eyeglasses";
    /**
     * <p>Level of confidence in the determination.</p>
     */
    Confidence?: number;
    /**
     * <p>Boolean value that indicates whether the face is wearing eye glasses or not.</p>
     */
    Value?: boolean;
}
export declare namespace Eyeglasses {
    function isa(o: any): o is Eyeglasses;
}
/**
 * <p>Describes the face properties such as the bounding box, face ID, image ID of the input
 *       image, and external image ID that you assigned. </p>
 */
export interface Face {
    __type?: "Face";
    /**
     * <p>Bounding box of the face.</p>
     */
    BoundingBox?: BoundingBox;
    /**
     * <p>Confidence level that the bounding box contains a face (and not a different object such
     *       as a tree).</p>
     */
    Confidence?: number;
    /**
     * <p>Identifier that you assign to all the faces in the input image.</p>
     */
    ExternalImageId?: string;
    /**
     * <p>Unique identifier that Amazon Rekognition assigns to the face.</p>
     */
    FaceId?: string;
    /**
     * <p>Unique identifier that Amazon Rekognition assigns to the input image.</p>
     */
    ImageId?: string;
}
export declare namespace Face {
    function isa(o: any): o is Face;
}
export declare enum FaceAttributes {
    ALL = "ALL",
    DEFAULT = "DEFAULT"
}
/**
 * <p>Structure containing attributes of the face that the algorithm detected.</p>
 *          <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes.
 *       The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p>
 *          <p>
 *             <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes.
 *       To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>.
 *       The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations
 *         don't have a <code>FaceAttributes</code> input parameter.</p>
 *          <ul>
 *             <li>
 *                <p>GetCelebrityRecognition</p>
 *             </li>
 *             <li>
 *                <p>GetPersonTracking</p>
 *             </li>
 *             <li>
 *                <p>GetFaceSearch</p>
 *             </li>
 *          </ul>
 *          <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations
 *       can return all facial attributes. To specify which attributes to return, use the
 *       <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the
 *       <code>DetectAttributes</code> input parameter.</p>
 */
export interface FaceDetail {
    __type?: "FaceDetail";
    /**
     * <p>The estimated age range, in years, for the face. Low represents the lowest estimated
     *       age and High represents the highest estimated age.</p>
     */
    AgeRange?: AgeRange;
    /**
     * <p>Indicates whether or not the face has a beard, and the confidence level in the
     *       determination.</p>
     */
    Beard?: Beard;
    /**
     * <p>Bounding box of the face. Default attribute.</p>
     */
    BoundingBox?: BoundingBox;
    /**
     * <p>Confidence level that the bounding box contains a face (and not a different object such
     *       as a tree). Default attribute.</p>
     */
    Confidence?: number;
    /**
     * <p>The emotions that appear to be expressed on the face, and the confidence level in the determination.
     *       The API is only making a determination of the physical appearance of a person's face. It is not a determination
     *       of the person’s internal emotional state and should not be used in such a way. For example, a person pretending to have
     *       a sad face might not be sad emotionally.</p>
     */
    Emotions?: Array<Emotion>;
    /**
     * <p>Indicates whether or not the face is wearing eye glasses, and the confidence level in
     *       the determination.</p>
     */
    Eyeglasses?: Eyeglasses;
    /**
     * <p>Indicates whether or not the eyes on the face are open, and the confidence level in the
     *       determination.</p>
     */
    EyesOpen?: EyeOpen;
    /**
     * <p>The predicted gender of a detected face.
     *     </p>
     */
    Gender?: Gender;
    /**
     * <p>Indicates the location of landmarks on the face. Default attribute.</p>
     */
    Landmarks?: Array<Landmark>;
    /**
     * <p>Indicates whether or not the mouth on the face is open, and the confidence level in the
     *       determination.</p>
     */
    MouthOpen?: MouthOpen;
    /**
     * <p>Indicates whether or not the face has a mustache, and the confidence level in the
     *       determination.</p>
     */
    Mustache?: Mustache;
    /**
     * <p>Indicates the pose of the face as determined by its pitch, roll, and yaw. Default attribute.</p>
     */
    Pose?: Pose;
    /**
     * <p>Identifies image brightness and sharpness. Default attribute.</p>
     */
    Quality?: ImageQuality;
    /**
     * <p>Indicates whether or not the face is smiling, and the confidence level in the
     *       determination.</p>
     */
    Smile?: Smile;
    /**
     * <p>Indicates whether or not the face is wearing sunglasses, and the confidence level in
     *       the determination.</p>
     */
    Sunglasses?: Sunglasses;
}
export declare namespace FaceDetail {
    function isa(o: any): o is FaceDetail;
}
/**
 * <p>Information about a face detected in a video analysis request and the time the face was detected in the video. </p>
 */
export interface FaceDetection {
    __type?: "FaceDetection";
    /**
     * <p>The face properties for the detected face.</p>
     */
    Face?: FaceDetail;
    /**
     * <p>Time, in milliseconds from the start of the video, that the face was detected.</p>
     */
    Timestamp?: number;
}
export declare namespace FaceDetection {
    function isa(o: any): o is FaceDetection;
}
/**
 * <p>Provides face metadata. In addition, it also provides the confidence in the match of
 *       this face with the input face.</p>
 */
export interface FaceMatch {
    __type?: "FaceMatch";
    /**
     * <p>Describes the face properties such as the bounding box, face ID, image ID of the source
     *       image, and external image ID that you assigned.</p>
     */
    Face?: Face;
    /**
     * <p>Confidence in the match of this face with the input face.</p>
     */
    Similarity?: number;
}
export declare namespace FaceMatch {
    function isa(o: any): o is FaceMatch;
}
/**
 * <p>Object containing both the face metadata (stored in the backend database), and facial
 *       attributes that are detected but aren't stored in the database.</p>
 */
export interface FaceRecord {
    __type?: "FaceRecord";
    /**
     * <p>Describes the face properties such as the bounding box, face ID, image ID of the input
     *       image, and external image ID that you assigned. </p>
     */
    Face?: Face;
    /**
     * <p>Structure containing attributes of the face that the algorithm detected.</p>
     */
    FaceDetail?: FaceDetail;
}
export declare namespace FaceRecord {
    function isa(o: any): o is FaceRecord;
}
/**
 * <p>Input face recognition parameters for an Amazon Rekognition stream processor. <code>FaceRecognitionSettings</code> is a request
 *         parameter for <a>CreateStreamProcessor</a>.</p>
 */
export interface FaceSearchSettings {
    __type?: "FaceSearchSettings";
    /**
     * <p>The ID of a collection that contains faces that you want to search for.</p>
     */
    CollectionId?: string;
    /**
     * <p>Minimum face match confidence score that must be met to return a result for a recognized face. Default is 70.
     *         0 is the lowest confidence. 100 is the highest confidence.</p>
     */
    FaceMatchThreshold?: number;
}
export declare namespace FaceSearchSettings {
    function isa(o: any): o is FaceSearchSettings;
}
export declare enum FaceSearchSortBy {
    INDEX = "INDEX",
    TIMESTAMP = "TIMESTAMP"
}
/**
 * <p>The predicted gender of a detected face.
 *           </p>
 *
 *
 *          <p>Amazon Rekognition makes gender binary (male/female) predictions based on the physical appearance
 *       of a face in a particular image. This kind of prediction is not designed to categorize a person’s gender
 *       identity, and you shouldn't use Amazon Rekognition to make such a determination. For example, a male actor
 *       wearing a long-haired wig and earrings for a role might be predicted as female.</p>
 *
 *          <p>Using Amazon Rekognition to make gender binary predictions is best suited for use cases where aggregate gender distribution statistics need to be
 *       analyzed without identifying specific users. For example, the percentage of female users compared to male users on a social media platform. </p>
 *
 *          <p>We don't recommend using gender binary predictions to make decisions that impact
 an individual's rights, privacy, or access to services.</p>
 */
export interface Gender {
    __type?: "Gender";
    /**
     * <p>Level of confidence in the prediction.</p>
     */
    Confidence?: number;
    /**
     * <p>The predicted gender of the face.</p>
     */
    Value?: GenderType | string;
}
export declare namespace Gender {
    function isa(o: any): o is Gender;
}
export declare enum GenderType {
    Female = "Female",
    Male = "Male"
}
/**
 * <p>Information about where an object (<a>DetectCustomLabels</a>) or text (<a>DetectText</a>) is located on
 *       an image.</p>
 */
export interface Geometry {
    __type?: "Geometry";
    /**
     * <p>An axis-aligned coarse representation of the detected item's location on the
     *       image.</p>
     */
    BoundingBox?: BoundingBox;
    /**
     * <p>Within the bounding box, a fine-grained polygon around the detected item.</p>
     */
    Polygon?: Array<Point>;
}
export declare namespace Geometry {
    function isa(o: any): o is Geometry;
}
export interface GetCelebrityInfoRequest {
    __type?: "GetCelebrityInfoRequest";
    /**
     * <p>The ID for the celebrity. You get the celebrity ID from a call to the <a>RecognizeCelebrities</a> operation,
     *    which recognizes celebrities in an image. </p>
     */
    Id: string | undefined;
}
export declare namespace GetCelebrityInfoRequest {
    function isa(o: any): o is GetCelebrityInfoRequest;
}
export interface GetCelebrityInfoResponse {
    __type?: "GetCelebrityInfoResponse";
    /**
     * <p>The name of the celebrity.</p>
     */
    Name?: string;
    /**
     * <p>An array of URLs pointing to additional celebrity information. </p>
     */
    Urls?: Array<string>;
}
export declare namespace GetCelebrityInfoResponse {
    function isa(o: any): o is GetCelebrityInfoResponse;
}
export interface GetCelebrityRecognitionRequest {
    __type?: "GetCelebrityRecognitionRequest";
    /**
     * <p>Job identifier for the required celebrity recognition analysis. You can get the job identifer from
     *       a call to <code>StartCelebrityRecognition</code>.</p>
     */
    JobId: string | undefined;
    /**
     * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.
     *       If you specify a value greater than 1000, a maximum of 1000 results is returned.
     *       The default value is 1000.</p>
     */
    MaxResults?: number;
    /**
     * <p>If the previous response was incomplete (because there is more recognized celebrities to retrieve), Amazon Rekognition Video returns a pagination
     *       token in the response. You can use this pagination token to retrieve the next set of celebrities. </p>
     */
    NextToken?: string;
    /**
     * <p>Sort to use for celebrities returned in <code>Celebrities</code> field. Specify <code>ID</code> to sort by the celebrity identifier,
     *         specify <code>TIMESTAMP</code> to sort by the time the celebrity was recognized.</p>
     */
    SortBy?: CelebrityRecognitionSortBy | string;
}
export declare namespace GetCelebrityRecognitionRequest {
    function isa(o: any): o is GetCelebrityRecognitionRequest;
}
export interface GetCelebrityRecognitionResponse {
    __type?: "GetCelebrityRecognitionResponse";
    /**
     * <p>Array of celebrities recognized in the video.</p>
     */
    Celebrities?: Array<CelebrityRecognition>;
    /**
     * <p>The current status of the celebrity recognition job.</p>
     */
    JobStatus?: VideoJobStatus | string;
    /**
     * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request
     *       to retrieve the next set of celebrities.</p>
     */
    NextToken?: string;
    /**
     * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
     */
    StatusMessage?: string;
    /**
     * <p>Information about a video that Amazon Rekognition Video analyzed. <code>Videometadata</code> is returned in
     *       every page of paginated responses from a Amazon Rekognition Video operation.</p>
     */
    VideoMetadata?: VideoMetadata;
}
export declare namespace GetCelebrityRecognitionResponse {
    function isa(o: any): o is GetCelebrityRecognitionResponse;
}
export interface GetContentModerationRequest {
    __type?: "GetContentModerationRequest";
    /**
     * <p>The identifier for the unsafe content job. Use <code>JobId</code> to identify the job in
     *        a subsequent call to <code>GetContentModeration</code>.</p>
     */
    JobId: string | undefined;
    /**
     * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.
     *     If you specify a value greater than 1000, a maximum of 1000 results is returned.
     *     The default value is 1000.</p>
     */
    MaxResults?: number;
    /**
     * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Rekognition
     *         returns a pagination token in the response. You can use this pagination token
     *         to retrieve the next set of unsafe content labels.</p>
     */
    NextToken?: string;
    /**
     * <p>Sort to use for elements in the <code>ModerationLabelDetections</code> array.
     *        Use <code>TIMESTAMP</code> to sort array elements by the time labels are detected.
     *        Use <code>NAME</code> to alphabetically group elements for a label together.
     *        Within each label group, the array element are sorted by detection confidence.
     *        The default sort is by <code>TIMESTAMP</code>.</p>
     */
    SortBy?: ContentModerationSortBy | string;
}
export declare namespace GetContentModerationRequest {
    function isa(o: any): o is GetContentModerationRequest;
}
export interface GetContentModerationResponse {
    __type?: "GetContentModerationResponse";
    /**
     * <p>The current status of the unsafe content analysis job.</p>
     */
    JobStatus?: VideoJobStatus | string;
    /**
     * <p>The detected unsafe content labels and the time(s) they were detected.</p>
     */
    ModerationLabels?: Array<ContentModerationDetection>;
    /**
     * <p>Version number of the moderation detection model that was used to detect unsafe content.</p>
     */
    ModerationModelVersion?: string;
    /**
     * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent
     *      request to retrieve the next set of unsafe content labels. </p>
     */
    NextToken?: string;
    /**
     * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
     */
    StatusMessage?: string;
    /**
     * <p>Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code>
     *      is returned in every page of paginated responses from <code>GetContentModeration</code>. </p>
     */
    VideoMetadata?: VideoMetadata;
}
export declare namespace GetContentModerationResponse {
    function isa(o: any): o is GetContentModerationResponse;
}
export interface GetFaceDetectionRequest {
    __type?: "GetFaceDetectionRequest";
    /**
     * <p>Unique identifier for the face detection job. The <code>JobId</code> is returned from <code>StartFaceDetection</code>.</p>
     */
    JobId: string | undefined;
    /**
     * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.
     *        If you specify a value greater than 1000, a maximum of 1000 results is returned.
     *        The default value is 1000.</p>
     */
    MaxResults?: number;
    /**
     * <p>If the previous response was incomplete (because there are more faces to retrieve), Amazon Rekognition Video returns a pagination
     *        token in the response. You can use this pagination token to retrieve the next set of faces.</p>
     */
    NextToken?: string;
}
export declare namespace GetFaceDetectionRequest {
    function isa(o: any): o is GetFaceDetectionRequest;
}
export interface GetFaceDetectionResponse {
    __type?: "GetFaceDetectionResponse";
    /**
     * <p>An array of faces detected in the video. Each element contains a detected face's details and the time,
     *        in milliseconds from the start of the video, the face was detected. </p>
     */
    Faces?: Array<FaceDetection>;
    /**
     * <p>The current status of the face detection job.</p>
     */
    JobStatus?: VideoJobStatus | string;
    /**
     * <p>If the response is truncated, Amazon Rekognition returns this token that you can use in the subsequent request to retrieve the next set of faces. </p>
     */
    NextToken?: string;
    /**
     * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
     */
    StatusMessage?: string;
    /**
     * <p>Information about a video that Amazon Rekognition Video analyzed. <code>Videometadata</code> is returned in
     *        every page of paginated responses from a Amazon Rekognition video operation.</p>
     */
    VideoMetadata?: VideoMetadata;
}
export declare namespace GetFaceDetectionResponse {
    function isa(o: any): o is GetFaceDetectionResponse;
}
export interface GetFaceSearchRequest {
    __type?: "GetFaceSearchRequest";
    /**
     * <p>The job identifer for the search request. You get the job identifier from an initial call to <code>StartFaceSearch</code>.</p>
     */
    JobId: string | undefined;
    /**
     * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.
     *       If you specify a value greater than 1000, a maximum of 1000 results is returned.
     *       The default value is 1000.</p>
     */
    MaxResults?: number;
    /**
     * <p>If the previous response was incomplete (because there is more search results to retrieve), Amazon Rekognition Video returns a pagination
     *       token in the response. You can use this pagination token to retrieve the next set of search results. </p>
     */
    NextToken?: string;
    /**
     * <p>Sort to use for grouping faces in the response. Use <code>TIMESTAMP</code> to group faces by the time
     *       that they are recognized. Use <code>INDEX</code> to sort by recognized faces. </p>
     */
    SortBy?: FaceSearchSortBy | string;
}
export declare namespace GetFaceSearchRequest {
    function isa(o: any): o is GetFaceSearchRequest;
}
export interface GetFaceSearchResponse {
    __type?: "GetFaceSearchResponse";
    /**
     * <p>The current status of the face search job.</p>
     */
    JobStatus?: VideoJobStatus | string;
    /**
     * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of search results. </p>
     */
    NextToken?: string;
    /**
     * <p>An array of persons,  <a>PersonMatch</a>,
     *       in the video whose face(s) match the face(s) in an Amazon Rekognition collection. It also includes time information
     *        for when persons are matched in the video.
     *       You specify the input collection in an initial call to <code>StartFaceSearch</code>.
     *       Each  <code>Persons</code> element includes a time the person was matched,
     *       face match details (<code>FaceMatches</code>) for matching faces in the collection,
     *        and person information (<code>Person</code>) for the matched person. </p>
     */
    Persons?: Array<PersonMatch>;
    /**
     * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
     */
    StatusMessage?: string;
    /**
     * <p>Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses
     *       from a Amazon Rekognition Video operation. </p>
     */
    VideoMetadata?: VideoMetadata;
}
export declare namespace GetFaceSearchResponse {
    function isa(o: any): o is GetFaceSearchResponse;
}
export interface GetLabelDetectionRequest {
    __type?: "GetLabelDetectionRequest";
    /**
     * <p>Job identifier for the label detection operation for which you want results returned. You get the job identifer from
     *       an initial call to <code>StartlabelDetection</code>.</p>
     */
    JobId: string | undefined;
    /**
     * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.
     *        If you specify a value greater than 1000, a maximum of 1000 results is returned.
     *        The default value is 1000.</p>
     */
    MaxResults?: number;
    /**
     * <p>If the previous response was incomplete (because there are more labels to retrieve), Amazon Rekognition Video returns a pagination
     *          token in the response. You can use this pagination token to retrieve the next set of labels. </p>
     */
    NextToken?: string;
    /**
     * <p>Sort to use for elements in the <code>Labels</code> array.
     *       Use <code>TIMESTAMP</code> to sort array elements by the time labels are detected.
     *       Use <code>NAME</code> to alphabetically group elements for a label together.
     *       Within each label group, the array element are sorted by detection confidence.
     *       The default sort is by <code>TIMESTAMP</code>.</p>
     */
    SortBy?: LabelDetectionSortBy | string;
}
export declare namespace GetLabelDetectionRequest {
    function isa(o: any): o is GetLabelDetectionRequest;
}
export interface GetLabelDetectionResponse {
    __type?: "GetLabelDetectionResponse";
    /**
     * <p>The current status of the label detection job.</p>
     */
    JobStatus?: VideoJobStatus | string;
    /**
     * <p>Version number of the label detection model that was used to detect labels.</p>
     */
    LabelModelVersion?: string;
    /**
     * <p>An array of labels detected in the video. Each element contains the detected label and the time,
     *         in milliseconds from the start of the video, that the label was detected. </p>
     */
    Labels?: Array<LabelDetection>;
    /**
     * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request
     *         to retrieve the next set of labels.</p>
     */
    NextToken?: string;
    /**
     * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
     */
    StatusMessage?: string;
    /**
     * <p>Information about a video that Amazon Rekognition Video analyzed. <code>Videometadata</code> is returned in
     *        every page of paginated responses from a Amazon Rekognition video operation.</p>
     */
    VideoMetadata?: VideoMetadata;
}
export declare namespace GetLabelDetectionResponse {
    function isa(o: any): o is GetLabelDetectionResponse;
}
export interface GetPersonTrackingRequest {
    __type?: "GetPersonTrackingRequest";
    /**
     * <p>The identifier for a job that tracks persons in a video. You get the <code>JobId</code> from a call to <code>StartPersonTracking</code>.
     *         </p>
     */
    JobId: string | undefined;
    /**
     * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000.
     *       If you specify a value greater than 1000, a maximum of 1000 results is returned.
     *       The default value is 1000.</p>
     */
    MaxResults?: number;
    /**
     * <p>If the previous response was incomplete (because there are more persons to retrieve), Amazon Rekognition Video returns a pagination
     *        token in the response. You can use this pagination token to retrieve the next set of persons. </p>
     */
    NextToken?: string;
    /**
     * <p>Sort to use for elements in the <code>Persons</code> array. Use <code>TIMESTAMP</code> to sort array elements
     *        by the time persons are detected. Use <code>INDEX</code> to sort by the tracked persons.
     *        If you sort by <code>INDEX</code>, the array elements for each person are sorted by detection confidence.
     *        The default sort is by <code>TIMESTAMP</code>.</p>
     */
    SortBy?: PersonTrackingSortBy | string;
}
export declare namespace GetPersonTrackingRequest {
    function isa(o: any): o is GetPersonTrackingRequest;
}
export interface GetPersonTrackingResponse {
    __type?: "GetPersonTrackingResponse";
    /**
     * <p>The current status of the person tracking job.</p>
     */
    JobStatus?: VideoJobStatus | string;
    /**
     * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of persons. </p>
     */
    NextToken?: string;
    /**
     * <p>An array of the persons detected in the video and the time(s) their path was tracked throughout the video.
     *         An array element will exist for each time a person's path is tracked. </p>
     */
    Persons?: Array<PersonDetection>;
    /**
     * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
     */
    StatusMessage?: string;
    /**
     * <p>Information about a video that Amazon Rekognition Video analyzed. <code>Videometadata</code> is returned in
     *        every page of paginated responses from a Amazon Rekognition Video operation.</p>
     */
    VideoMetadata?: VideoMetadata;
}
export declare namespace GetPersonTrackingResponse {
    function isa(o: any): o is GetPersonTrackingResponse;
}
/**
 * <p>The S3 bucket that contains the Ground Truth manifest file.</p>
 */
export interface GroundTruthManifest {
    __type?: "GroundTruthManifest";
    /**
     * <p>Provides the S3 bucket name and object name.</p>
     *          <p>The region for the S3 bucket containing the S3 object must match the region you use for
     *       Amazon Rekognition operations.</p>
     *
     *          <p>For Amazon Rekognition to process an S3 object, the user must have permission to
     *       access the S3 object. For more information, see Resource-Based Policies in the Amazon Rekognition
     *       Developer Guide. </p>
     */
    S3Object?: S3Object;
}
export declare namespace GroundTruthManifest {
    function isa(o: any): o is GroundTruthManifest;
}
/**
 * <p>Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did
 *        not trigger human review.</p>
 */
export interface HumanLoopActivationOutput {
    __type?: "HumanLoopActivationOutput";
    /**
     * <p>Shows the result of condition evaluations, including those conditions which activated a
     *       human review.</p>
     */
    HumanLoopActivationConditionsEvaluationResults?: __LazyJsonString | string;
    /**
     * <p>Shows if and why human review was needed.</p>
     */
    HumanLoopActivationReasons?: Array<string>;
    /**
     * <p>The Amazon Resource Name (ARN) of the HumanLoop created.</p>
     */
    HumanLoopArn?: string;
}
export declare namespace HumanLoopActivationOutput {
    function isa(o: any): o is HumanLoopActivationOutput;
}
/**
 * <p>Sets up the flow definition the image will be sent to if one of the conditions is met.
 *       You can also set certain attributes of the image before review.</p>
 */
export interface HumanLoopConfig {
    __type?: "HumanLoopConfig";
    /**
     * <p>Sets attributes of the input data.</p>
     */
    DataAttributes?: HumanLoopDataAttributes;
    /**
     * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
     */
    FlowDefinitionArn: string | undefined;
    /**
     * <p>The name of the human review used for this image. This should be kept unique within a region.</p>
     */
    HumanLoopName: string | undefined;
}
export declare namespace HumanLoopConfig {
    function isa(o: any): o is HumanLoopConfig;
}
/**
 * <p>Allows you to set attributes of the image.  Currently, you can declare an image as free of
 *       personally identifiable information.</p>
 */
export interface HumanLoopDataAttributes {
    __type?: "HumanLoopDataAttributes";
    /**
     * <p>Sets whether the input image is free of personally identifiable information.</p>
     */
    ContentClassifiers?: Array<ContentClassifier | string>;
}
export declare namespace HumanLoopDataAttributes {
    function isa(o: any): o is HumanLoopDataAttributes;
}
/**
 * <p>The number of in-progress human reviews you have has exceeded the number allowed.</p>
 */
export interface HumanLoopQuotaExceededException extends __SmithyException, $MetadataBearer {
    name: "HumanLoopQuotaExceededException";
    $fault: "client";
    Code?: string;
    Logref?: string;
    Message?: string;
    QuotaCode?: string;
    ResourceType?: string;
    ServiceCode?: string;
}
export declare namespace HumanLoopQuotaExceededException {
    function isa(o: any): o is HumanLoopQuotaExceededException;
}
/**
 * <p>A <code>ClientRequestToken</code> input parameter was reused with an operation, but at least one of the other input
 *         parameters is different from the previous call to the operation.</p>
 */
export interface IdempotentParameterMismatchException extends __SmithyException, $MetadataBearer {
    name: "IdempotentParameterMismatchException";
    $fault: "client";
    Code?: string;
    Logref?: string;
    Message?: string;
}
export declare namespace IdempotentParameterMismatchException {
    function isa(o: any): o is IdempotentParameterMismatchException;
}
/**
 * <p>Provides the input image either as bytes or an S3 object.</p>
 *          <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code>
 *       property. For example, you would use the <code>Bytes</code> property to pass an image loaded
 *       from a local file system. Image bytes passed by using the <code>Bytes</code> property must be
 *       base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to
 *       call Amazon Rekognition API operations. </p>
 *
 *          <p>For more information, see Analyzing an Image Loaded from a Local File System
 *       in the Amazon Rekognition Developer Guide.</p>
 *          <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the
 *         <code>S3Object</code> property. Images stored in an S3 bucket do not need to be
 *       base64-encoded.</p>
 *          <p>The region for the S3 bucket containing the S3 object must match the region you use for
 *       Amazon Rekognition operations.</p>
 *          <p>If you use the
 *       AWS
 *       CLI to call Amazon Rekognition operations, passing image bytes using the Bytes
 *       property is not supported. You must first upload the image to an Amazon S3 bucket and then
 *       call the operation using the S3Object property.</p>
 *
 *          <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3
 *       object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide.
 *     </p>
 */
export interface Image {
    __type?: "Image";
    /**
     * <p>Blob of image bytes up to 5 MBs.</p>
     */
    Bytes?: Uint8Array;
    /**
     * <p>Identifies an S3 object as the image source.</p>
     */
    S3Object?: S3Object;
}
export declare namespace Image {
    function isa(o: any): o is Image;
}
/**
 * <p>Identifies face image brightness and sharpness. </p>
 */
export interface ImageQuality {
    __type?: "ImageQuality";
    /**
     * <p>Value representing brightness of the face. The service returns a value between 0 and
     *       100 (inclusive). A higher value indicates a brighter face image.</p>
     */
    Brightness?: number;
    /**
     * <p>Value representing sharpness of the face. The service returns a value between 0 and 100
     *       (inclusive). A higher value indicates a sharper face image.</p>
     */
    Sharpness?: number;
}
export declare namespace ImageQuality {
    function isa(o: any): o is ImageQuality;
}
/**
 * <p>The input image size exceeds the allowed limit. For more information, see
 *       Limits in Amazon Rekognition in the Amazon Rekognition Developer Guide. </p>
 */
export interface ImageTooLargeException extends __SmithyException, $MetadataBearer {
    name: "ImageTooLargeException";
    $fault: "client";
    Code?: string;
    Logref?: string;
    Message?: string;
}
export declare namespace ImageTooLargeException {
    function isa(o: any): o is ImageTooLargeException;
}
export interface IndexFacesRequest {
    __type?: "IndexFacesRequest";
    /**
     * <p>The ID of an existing collection to which you want to add the faces that are detected
     *       in the input images.</p>
     */
    CollectionId: string | undefined;
    /**
     * <p>An array of facial attributes that you want to be returned. This can be the default
     *       list of attributes or all attributes. If you don't specify a value for <code>Attributes</code>
     *       or if you specify <code>["DEFAULT"]</code>, the API returns the following subset of facial
     *       attributes: <code>BoundingBox</code>, <code>Confidence</code>, <code>Pose</code>,
     *         <code>Quality</code>, and <code>Landmarks</code>. If you provide <code>["ALL"]</code>, all
     *       facial attributes are returned, but the operation takes longer to complete.</p>
     *          <p>If you provide both, <code>["ALL", "DEFAULT"]</code>, the service uses a logical AND
     *       operator to determine which attributes to return (in this case, all attributes). </p>
     */
    DetectionAttributes?: Array<Attribute | string>;
    /**
     * <p>The ID you want to assign to all the faces detected in the image.</p>
     */
    ExternalImageId?: string;
    /**
     * <p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call
     *       Amazon Rekognition operations, passing base64-encoded image bytes isn't supported. </p>
     *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes
     *       passed using the <code>Bytes</code> field.
     *       For more information, see Images in the Amazon Rekognition developer guide.</p>
     */
    Image: Image | undefined;
    /**
     * <p>The maximum number of faces to index. The value of <code>MaxFaces</code> must be greater
     *       than or equal to 1. <code>IndexFaces</code> returns no more than 100 detected faces in an
     *       image, even if you specify a larger value for <code>MaxFaces</code>.</p>
     *          <p>If <code>IndexFaces</code> detects more faces than the value of <code>MaxFaces</code>, the
     *       faces with the lowest quality are filtered out first. If there are still more faces than the
     *       value of <code>MaxFaces</code>, the faces with the smallest bounding boxes are filtered out
     *       (up to the number that's needed to satisfy the value of <code>MaxFaces</code>). Information
     *       about the unindexed faces is available in the <code>UnindexedFaces</code> array. </p>
     *          <p>The faces that are returned by <code>IndexFaces</code> are sorted by the largest face
     *       bounding box size to the smallest size, in descending order.</p>
     *          <p>
     *             <code>MaxFaces</code> can be used with a collection associated with any version of
     *       the face model.</p>
     */
    MaxFaces?: number;
    /**
     * <p>A filter that specifies a quality bar for how much filtering is done to identify faces.
     *     Filtered faces aren't indexed. If you specify <code>AUTO</code>, Amazon Rekognition chooses the quality bar.
     *       If you specify <code>LOW</code>,
     *       <code>MEDIUM</code>, or <code>HIGH</code>, filtering removes all faces that
     *       don’t meet the chosen quality bar.  The default value is <code>AUTO</code>.
     *
     *       The quality bar is based on a variety of common use cases. Low-quality
     *       detections can occur for a number of reasons. Some examples are an object that's misidentified
     *       as a face, a face that's too blurry, or a face with a
     *       pose that's too extreme to use. If you specify <code>NONE</code>, no
     *       filtering is performed.
     *     </p>
     *          <p>To use quality filtering, the collection you are using must be associated with version 3 of the face model or higher.</p>
     */
    QualityFilter?: QualityFilter | string;
}
export declare namespace IndexFacesRequest {
    function isa(o: any): o is IndexFacesRequest;
}
export interface IndexFacesResponse {
    __type?: "IndexFacesResponse";
    /**
     * <p>The version number of the face detection model that's associated with the input
     *       collection (<code>CollectionId</code>).</p>
     */
    FaceModelVersion?: string;
    /**
     * <p>An array of faces detected and added to the collection.
     *       For more information, see Searching Faces in a Collection in the Amazon Rekognition Developer Guide.
     *     </p>
     */
    FaceRecords?: Array<FaceRecord>;
    /**
     * <p>If your collection is associated with a face detection model that's later
     *       than version 3.0, the value of <code>OrientationCorrection</code>
     *       is always null and no orientation information is returned.</p>
     *
     *          <p>If your collection is associated with a face detection model that's
     *       version 3.0 or earlier, the following applies:</p>
     *          <ul>
     *             <li>
     *                <p>If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata
     *         that includes the image's orientation. Amazon Rekognition uses this orientation information to perform
     *         image correction - the bounding box coordinates are translated to represent object locations
     *         after the orientation information in the Exif metadata is used to correct the image orientation.
     *         Images in .png format don't contain Exif metadata. The value of <code>OrientationCorrection</code>
     *         is null.</p>
     *             </li>
     *             <li>
     *                <p>If the image doesn't contain orientation information in its Exif metadata, Amazon Rekognition returns
     *       an estimated orientation (ROTATE_0, ROTATE_90, ROTATE_180, ROTATE_270). Amazon Rekognition doesn’t perform
     *       image correction for images. The bounding box coordinates aren't translated and represent the
     *       object locations before the image is rotated.</p>
     *             </li>
     *          </ul>
     *
     *
     *
     *          <p>Bounding box information is returned in the <code>FaceRecords</code> array. You can get the
     *     version of the face detection model by calling <a>DescribeCollection</a>. </p>
     */
    OrientationCorrection?: OrientationCorrection | string;
    /**
     * <p>An array of faces that were detected in the image but weren't indexed. They weren't
     *       indexed because the quality filter identified them as low quality, or the
     *         <code>MaxFaces</code> request parameter filtered them out. To use the quality filter, you
     *       specify the <code>QualityFilter</code> request parameter.</p>
     */
    UnindexedFaces?: Array<UnindexedFace>;
}
export declare namespace IndexFacesResponse {
    function isa(o: any): o is IndexFacesResponse;
}
/**
 * <p>An instance of a label returned by Amazon Rekognition Image (<a>DetectLabels</a>)
 *       or by Amazon Rekognition Video (<a>GetLabelDetection</a>).</p>
 */
export interface Instance {
    __type?: "Instance";
    /**
     * <p>The position of the label instance on the image.</p>
     */
    BoundingBox?: BoundingBox;
    /**
     * <p>The confidence that Amazon Rekognition has in the accuracy of the bounding box.</p>
     */
    Confidence?: number;
}
export declare namespace Instance {
    function isa(o: any): o is Instance;
}
/**
 * <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 */
export interface InternalServerError extends __SmithyException, $MetadataBearer {
    name: "InternalServerError";
    $fault: "server";
    Code?: string;
    Logref?: string;
    Message?: string;
}
export declare namespace InternalServerError {
    function isa(o: any): o is InternalServerError;
}
/**
 * <p>The provided image format is not supported. </p>
 */
export interface InvalidImageFormatException extends __SmithyException, $MetadataBearer {
    name: "InvalidImageFormatException";
    $fault: "client";
    Code?: string;
    Logref?: string;
    Message?: string;
}
export declare namespace InvalidImageFormatException {
    function isa(o: any): o is InvalidImageFormatException;
}
/**
 * <p>Pagination token in the request is not valid.</p>
 */
export interface InvalidPaginationTokenException extends __SmithyException, $MetadataBearer {
    name: "InvalidPaginationTokenException";
    $fault: "client";
    Code?: string;
    Logref?: string;
    Message?: string;
}
export declare namespace InvalidPaginationTokenException {
    function isa(o: any): o is InvalidPaginationTokenException;
}
/**
 * <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
    name: "InvalidParameterException";
    $fault: "client";
    Code?: string;
    Logref?: string;
    Message?: string;
}
export declare namespace InvalidParameterException {
    function isa(o: any): o is InvalidParameterException;
}
/**
 * <p>Amazon Rekognition is unable to access the S3 object specified in the request.</p>
 */
export interface InvalidS3ObjectException extends __SmithyException, $MetadataBearer {
    name: "InvalidS3ObjectException";
    $fault: "client";
    Code?: string;
    Logref?: string;
    Message?: string;
}
export declare namespace InvalidS3ObjectException {
    function isa(o: any): o is InvalidS3ObjectException;
}
/**
 * <p>The Kinesis data stream Amazon Rekognition to which the analysis results of a Amazon Rekognition stream processor are streamed. For more information, see
 *             CreateStreamProcessor in the Amazon Rekognition Developer Guide.</p>
 */
export interface KinesisDataStream {
    __type?: "KinesisDataStream";
    /**
     * <p>ARN of the output Amazon Kinesis Data Streams stream.</p>
     */
    Arn?: string;
}
export declare namespace KinesisDataStream {
    function isa(o: any): o is KinesisDataStream;
}
/**
 * <p>Kinesis video stream stream that provides the source streaming video for a Amazon Rekognition Video stream processor. For more information, see
 *             CreateStreamProcessor in the Amazon Rekognition Developer Guide.</p>
 */
export interface KinesisVideoStream {
    __type?: "KinesisVideoStream";
    /**
     * <p>ARN of the Kinesis video stream stream that streams the source video.</p>
     */
    Arn?: string;
}
export declare namespace KinesisVideoStream {
    function isa(o: any): o is KinesisVideoStream;
}
/**
 * <p>Structure containing details about the detected label, including the name, detected instances, parent labels, and level of
 *       confidence.</p>
 *          <p>
 *     </p>
 */
export interface Label {
    __type?: "Label";
    /**
     * <p>Level of confidence.</p>
     */
    Confidence?: number;
    /**
     * <p>If <code>Label</code> represents an object, <code>Instances</code> contains the bounding boxes for each instance of the detected object.
     *       Bounding boxes are returned for common object labels such as people, cars, furniture, apparel or pets.</p>
     */
    Instances?: Array<Instance>;
    /**
     * <p>The name (label) of the object or scene.</p>
     */
    Name?: string;
    /**
     * <p>The parent labels for a label. The response includes all ancestor labels.</p>
     */
    Parents?: Array<Parent>;
}
export declare namespace Label {
    function isa(o: any): o is Label;
}
/**
 * <p>Information about a label detected in a video analysis request and the time the label was detected in the video. </p>
 */
export interface LabelDetection {
    __type?: "LabelDetection";
    /**
     * <p>Details about the detected label.</p>
     */
    Label?: Label;
    /**
     * <p>Time, in milliseconds from the start of the video, that the label was detected.</p>
     */
    Timestamp?: number;
}
export declare namespace LabelDetection {
    function isa(o: any): o is LabelDetection;
}
export declare enum LabelDetectionSortBy {
    NAME = "NAME",
    TIMESTAMP = "TIMESTAMP"
}
/**
 * <p>Indicates the location of the landmark on the face.</p>
 */
export interface Landmark {
    __type?: "Landmark";
    /**
     * <p>Type of landmark.</p>
     */
    Type?: LandmarkType | string;
    /**
     * <p>The x-coordinate from the top left of the landmark expressed as the ratio of the width
     *       of the image. For example, if the image is 700 x 200 and the x-coordinate of the landmark is
     *       at 350 pixels, this value is 0.5. </p>
     */
    X?: number;
    /**
     * <p>The y-coordinate from the top left of the landmark expressed as the ratio of the height
     *       of the image. For example, if the image is 700 x 200 and the y-coordinate of the landmark is
     *       at 100 pixels, this value is 0.5.</p>
     */
    Y?: number;
}
export declare namespace Landmark {
    function isa(o: any): o is Landmark;
}
export declare enum LandmarkType {
    chinBottom = "chinBottom",
    eyeLeft = "eyeLeft",
    eyeRight = "eyeRight",
    leftEyeBrowLeft = "leftEyeBrowLeft",
    leftEyeBrowRight = "leftEyeBrowRight",
    leftEyeBrowUp = "leftEyeBrowUp",
    leftEyeDown = "leftEyeDown",
    leftEyeLeft = "leftEyeLeft",
    leftEyeRight = "leftEyeRight",
    leftEyeUp = "leftEyeUp",
    leftPupil = "leftPupil",
    midJawlineLeft = "midJawlineLeft",
    midJawlineRight = "midJawlineRight",
    mouthDown = "mouthDown",
    mouthLeft = "mouthLeft",
    mouthRight = "mouthRight",
    mouthUp = "mouthUp",
    nose = "nose",
    noseLeft = "noseLeft",
    noseRight = "noseRight",
    rightEyeBrowLeft = "rightEyeBrowLeft",
    rightEyeBrowRight = "rightEyeBrowRight",
    rightEyeBrowUp = "rightEyeBrowUp",
    rightEyeDown = "rightEyeDown",
    rightEyeLeft = "rightEyeLeft",
    rightEyeRight = "rightEyeRight",
    rightEyeUp = "rightEyeUp",
    rightPupil = "rightPupil",
    upperJawlineLeft = "upperJawlineLeft",
    upperJawlineRight = "upperJawlineRight"
}
/**
 * <p>An Amazon Rekognition service limit was exceeded. For example, if you start too many Amazon Rekognition Video jobs concurrently, calls to start operations
 *             (<code>StartLabelDetection</code>, for example) will raise a <code>LimitExceededException</code> exception (HTTP status code: 400) until
 *             the number of concurrently running jobs is below the Amazon Rekognition service limit.  </p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
    name: "LimitExceededException";
    $fault: "client";
    Code?: string;
    Logref?: string;
    Message?: string;
}
export declare namespace LimitExceededException {
    function isa(o: any): o is LimitExceededException;
}
export interface ListCollectionsRequest {
    __type?: "ListCollectionsRequest";
    /**
     * <p>Maximum number of collection IDs to return. </p>
     */
    MaxResults?: number;
    /**
     * <p>Pagination token from the previous response.</p>
     */
    NextToken?: string;
}
export declare namespace ListCollectionsRequest {
    function isa(o: any): o is ListCollectionsRequest;
}
export interface ListCollectionsResponse {
    __type?: "ListCollectionsResponse";
    /**
     * <p>An array of collection IDs.</p>
     */
    CollectionIds?: Array<string>;
    /**
     * <p>Version numbers of the face detection models associated with the collections in the array <code>CollectionIds</code>.
     *     For example, the value of <code>FaceModelVersions[2]</code> is the version number for the face detection model used
     *       by the collection in <code>CollectionId[2]</code>.</p>
     */
    FaceModelVersions?: Array<string>;
    /**
     * <p>If the result is truncated, the response provides a <code>NextToken</code> that you can
     *       use in the subsequent request to fetch the next set of collection IDs.</p>
     */
    NextToken?: string;
}
export declare namespace ListCollectionsResponse {
    function isa(o: any): o is ListCollectionsResponse;
}
export interface ListFacesRequest {
    __type?: "ListFacesRequest";
    /**
     * <p>ID of the collection from which to list the faces.</p>
     */
    CollectionId: string | undefined;
    /**
     * <p>Maximum number of faces to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>If the previous response was incomplete (because there is more data to retrieve),
     *       Amazon Rekognition returns a pagination token in the response. You can use this pagination token to
     *       retrieve the next set of faces.</p>
     */
    NextToken?: string;
}
export declare namespace ListFacesRequest {
    function isa(o: any): o is ListFacesRequest;
}
export interface ListFacesResponse {
    __type?: "ListFacesResponse";
    /**
     * <p>Version number of the face detection model associated with the input collection (<code>CollectionId</code>).</p>
     */
    FaceModelVersion?: string;
    /**
     * <p>An array of <code>Face</code> objects. </p>
     */
    Faces?: Array<Face>;
    /**
     * <p>If the response is truncated, Amazon Rekognition returns this token that you can use in the
     *       subsequent request to retrieve the next set of faces.</p>
     */
    NextToken?: string;
}
export declare namespace ListFacesResponse {
    function isa(o: any): o is ListFacesResponse;
}
export interface ListStreamProcessorsRequest {
    __type?: "ListStreamProcessorsRequest";
    /**
     * <p>Maximum number of stream processors you want Amazon Rekognition Video to return in the response. The default is 1000. </p>
     */
    MaxResults?: number;
    /**
     * <p>If the previous response was incomplete (because there are more stream processors to retrieve), Amazon Rekognition Video
     *             returns a pagination token in the response. You can use this pagination token to retrieve the next set of stream processors. </p>
     */
    NextToken?: string;
}
export declare namespace ListStreamProcessorsRequest {
    function isa(o: any): o is ListStreamProcessorsRequest;
}
export interface ListStreamProcessorsResponse {
    __type?: "ListStreamProcessorsResponse";
    /**
     * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent
     *             request to retrieve the next set of stream processors. </p>
     */
    NextToken?: string;
    /**
     * <p>List of stream processors that you have created.</p>
     */
    StreamProcessors?: Array<StreamProcessor>;
}
export declare namespace ListStreamProcessorsResponse {
    function isa(o: any): o is ListStreamProcessorsResponse;
}
/**
 * <p>Provides information about a single type of unsafe content found in an image or video. Each type of
 *       moderated content has a label within a hierarchical taxonomy. For more information, see
 *       Detecting Unsafe Content in the Amazon Rekognition Developer Guide.</p>
 */
export interface ModerationLabel {
    __type?: "ModerationLabel";
    /**
     * <p>Specifies the confidence that Amazon Rekognition has that the label has been correctly
     *       identified.</p>
     *          <p>If you don't specify the <code>MinConfidence</code> parameter in the call to
     *         <code>DetectModerationLabels</code>, the operation returns labels with a confidence value
     *       greater than or equal to 50 percent.</p>
     */
    Confidence?: number;
    /**
     * <p>The label name for the type of unsafe content detected in the image.</p>
     */
    Name?: string;
    /**
     * <p>The name for the parent label. Labels at the top level of the hierarchy have the parent
     *       label <code>""</code>.</p>
     */
    ParentName?: string;
}
export declare namespace ModerationLabel {
    function isa(o: any): o is ModerationLabel;
}
/**
 * <p>Indicates whether or not the mouth on the face is open, and the confidence level in the
 *       determination.</p>
 */
export interface MouthOpen {
    __type?: "MouthOpen";
    /**
     * <p>Level of confidence in the determination.</p>
     */
    Confidence?: number;
    /**
     * <p>Boolean value that indicates whether the mouth on the face is open or not.</p>
     */
    Value?: boolean;
}
export declare namespace MouthOpen {
    function isa(o: any): o is MouthOpen;
}
/**
 * <p>Indicates whether or not the face has a mustache, and the confidence level in the
 *       determination.</p>
 */
export interface Mustache {
    __type?: "Mustache";
    /**
     * <p>Level of confidence in the determination.</p>
     */
    Confidence?: number;
    /**
     * <p>Boolean value that indicates whether the face has mustache or not.</p>
     */
    Value?: boolean;
}
export declare namespace Mustache {
    function isa(o: any): o is Mustache;
}
/**
 * <p>The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see
 *             <a>api-video</a>.</p>
 */
export interface NotificationChannel {
    __type?: "NotificationChannel";
    /**
     * <p>The ARN of an IAM role that gives Amazon Rekognition publishing permissions to the Amazon SNS topic. </p>
     */
    RoleArn: string | undefined;
    /**
     * <p>The Amazon SNS topic to which Amazon Rekognition to posts the completion status.</p>
     */
    SNSTopicArn: string | undefined;
}
export declare namespace NotificationChannel {
    function isa(o: any): o is NotificationChannel;
}
export declare enum OrientationCorrection {
    ROTATE_0 = "ROTATE_0",
    ROTATE_180 = "ROTATE_180",
    ROTATE_270 = "ROTATE_270",
    ROTATE_90 = "ROTATE_90"
}
/**
 * <p>The S3 bucket and folder location where training output is placed.</p>
 */
export interface OutputConfig {
    __type?: "OutputConfig";
    /**
     * <p>The S3 bucket where training output is placed.</p>
     */
    S3Bucket?: string;
    /**
     * <p>The prefix applied to the training output files. </p>
     */
    S3KeyPrefix?: string;
}
export declare namespace OutputConfig {
    function isa(o: any): o is OutputConfig;
}
/**
 * <p>A parent label for a label. A label can have 0, 1, or more parents. </p>
 */
export interface Parent {
    __type?: "Parent";
    /**
     * <p>The name of the parent label.</p>
     */
    Name?: string;
}
export declare namespace Parent {
    function isa(o: any): o is Parent;
}
/**
 * <p>Details about a person detected in a video analysis request.</p>
 */
export interface PersonDetail {
    __type?: "PersonDetail";
    /**
     * <p>Bounding box around the detected person.</p>
     */
    BoundingBox?: BoundingBox;
    /**
     * <p>Face details for the detected person.</p>
     */
    Face?: FaceDetail;
    /**
     * <p>Identifier for the person detected person within a video. Use to keep track of the person throughout the video. The identifier is not stored by Amazon Rekognition.</p>
     */
    Index?: number;
}
export declare namespace PersonDetail {
    function isa(o: any): o is PersonDetail;
}
/**
 * <p>Details and path tracking information for a single time a person's path is tracked in a video.
 *             Amazon Rekognition operations that track people's paths return an array of <code>PersonDetection</code> objects
 *             with elements for each time a person's path is tracked in a video. </p>
 *
 *          <p>For more information, see GetPersonTracking in the Amazon Rekognition Developer Guide. </p>
 */
export interface PersonDetection {
    __type?: "PersonDetection";
    /**
     * <p>Details about a person whose path was tracked in a video.</p>
     */
    Person?: PersonDetail;
    /**
     * <p>The time, in milliseconds from the start of the video, that the person's path was tracked.</p>
     */
    Timestamp?: number;
}
export declare namespace PersonDetection {
    function isa(o: any): o is PersonDetection;
}
/**
 * <p>Information about a person whose face matches a face(s) in an Amazon Rekognition collection.
 *       Includes information about the faces in the Amazon Rekognition collection (<a>FaceMatch</a>), information about the person (<a>PersonDetail</a>),
 *       and the time stamp for when the person was detected in a video. An array of
 *         <code>PersonMatch</code> objects is returned by <a>GetFaceSearch</a>. </p>
 */
export interface PersonMatch {
    __type?: "PersonMatch";
    /**
     * <p>Information about the faces in the input collection that match the face of a person in the video.</p>
     */
    FaceMatches?: Array<FaceMatch>;
    /**
     * <p>Information about the matched person.</p>
     */
    Person?: PersonDetail;
    /**
     * <p>The time, in milliseconds from the beginning of the video, that the person was matched in the video.</p>
     */
    Timestamp?: number;
}
export declare namespace PersonMatch {
    function isa(o: any): o is PersonMatch;
}
export declare enum PersonTrackingSortBy {
    INDEX = "INDEX",
    TIMESTAMP = "TIMESTAMP"
}
/**
 * <p>The X and Y coordinates of a point on an image. The X and Y values returned are ratios
 *       of the overall image size. For example, if the input image is 700x200 and the
 *       operation returns X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the image.</p>
 *
 *          <p>An array of <code>Point</code> objects,
 *       <code>Polygon</code>, is returned by <a>DetectText</a> and by <a>DetectCustomLabels</a>. <code>Polygon</code>
 *       represents a fine-grained polygon around a detected item. For more information, see Geometry in the
 *       Amazon Rekognition Developer Guide. </p>
 */
export interface Point {
    __type?: "Point";
    /**
     * <p>The value of the X coordinate for a point on a <code>Polygon</code>.</p>
     */
    X?: number;
    /**
     * <p>The value of the Y coordinate for a point on a <code>Polygon</code>.</p>
     */
    Y?: number;
}
export declare namespace Point {
    function isa(o: any): o is Point;
}
/**
 * <p>Indicates the pose of the face as determined by its pitch, roll, and yaw.</p>
 */
export interface Pose {
    __type?: "Pose";
    /**
     * <p>Value representing the face rotation on the pitch axis.</p>
     */
    Pitch?: number;
    /**
     * <p>Value representing the face rotation on the roll axis.</p>
     */
    Roll?: number;
    /**
     * <p>Value representing the face rotation on the yaw axis.</p>
     */
    Yaw?: number;
}
export declare namespace Pose {
    function isa(o: any): o is Pose;
}
/**
 * <p>A description of a Amazon Rekognition Custom Labels project.</p>
 */
export interface ProjectDescription {
    __type?: "ProjectDescription";
    /**
     * <p>The Unix timestamp for the date and time that the project was created.</p>
     */
    CreationTimestamp?: Date;
    /**
     * <p>The Amazon Resource Name (ARN) of the project.</p>
     */
    ProjectArn?: string;
    /**
     * <p>The current status of the project.</p>
     */
    Status?: ProjectStatus | string;
}
export declare namespace ProjectDescription {
    function isa(o: any): o is ProjectDescription;
}
export declare enum ProjectStatus {
    CREATED = "CREATED",
    CREATING = "CREATING",
    DELETING = "DELETING"
}
/**
 * <p>The description of a version of a model.</p>
 */
export interface ProjectVersionDescription {
    __type?: "ProjectVersionDescription";
    /**
     * <p>The duration, in seconds, that the model version has been billed for training.
     *       This value is only returned if the model version has been successfully trained.</p>
     */
    BillableTrainingTimeInSeconds?: number;
    /**
     * <p>The Unix datetime for the date and time that training started.</p>
     */
    CreationTimestamp?: Date;
    /**
     * <p>The training results.  <code>EvaluationResult</code> is only returned if training is successful.</p>
     */
    EvaluationResult?: EvaluationResult;
    /**
     * <p>The minimum number of inference units used by the model. For more information,
     *       see <a>StartProjectVersion</a>.</p>
     */
    MinInferenceUnits?: number;
    /**
     * <p>The location where training results are saved.</p>
     */
    OutputConfig?: OutputConfig;
    /**
     * <p>The Amazon Resource Name (ARN) of the model version. </p>
     */
    ProjectVersionArn?: string;
    /**
     * <p>The current status of the model version.</p>
     */
    Status?: ProjectVersionStatus | string;
    /**
     * <p>A descriptive message for an error or warning that occurred.</p>
     */
    StatusMessage?: string;
    /**
     * <p>The manifest file that represents the testing results.</p>
     */
    TestingDataResult?: TestingDataResult;
    /**
     * <p>The manifest file that represents the training results.</p>
     */
    TrainingDataResult?: TrainingDataResult;
    /**
     * <p>The Unix date and time that training of the model ended.</p>
     */
    TrainingEndTimestamp?: Date;
}
export declare namespace ProjectVersionDescription {
    function isa(o: any): o is ProjectVersionDescription;
}
export declare enum ProjectVersionStatus {
    DELETING = "DELETING",
    FAILED = "FAILED",
    RUNNING = "RUNNING",
    STARTING = "STARTING",
    STOPPED = "STOPPED",
    STOPPING = "STOPPING",
    TRAINING_COMPLETED = "TRAINING_COMPLETED",
    TRAINING_FAILED = "TRAINING_FAILED",
    TRAINING_IN_PROGRESS = "TRAINING_IN_PROGRESS"
}
/**
 * <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 */
export interface ProvisionedThroughputExceededException extends __SmithyException, $MetadataBearer {
    name: "ProvisionedThroughputExceededException";
    $fault: "client";
    Code?: string;
    Logref?: string;
    Message?: string;
}
export declare namespace ProvisionedThroughputExceededException {
    function isa(o: any): o is ProvisionedThroughputExceededException;
}
export declare enum QualityFilter {
    AUTO = "AUTO",
    HIGH = "HIGH",
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    NONE = "NONE"
}
export declare enum Reason {
    EXCEEDS_MAX_FACES = "EXCEEDS_MAX_FACES",
    EXTREME_POSE = "EXTREME_POSE",
    LOW_BRIGHTNESS = "LOW_BRIGHTNESS",
    LOW_CONFIDENCE = "LOW_CONFIDENCE",
    LOW_FACE_QUALITY = "LOW_FACE_QUALITY",
    LOW_SHARPNESS = "LOW_SHARPNESS",
    SMALL_BOUNDING_BOX = "SMALL_BOUNDING_BOX"
}
export interface RecognizeCelebritiesRequest {
    __type?: "RecognizeCelebritiesRequest";
    /**
     * <p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call
     *       Amazon Rekognition operations, passing base64-encoded image bytes is not supported. </p>
     *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes
     *       passed using the <code>Bytes</code> field.
     *       For more information, see Images in the Amazon Rekognition developer guide.</p>
     */
    Image: Image | undefined;
}
export declare namespace RecognizeCelebritiesRequest {
    function isa(o: any): o is RecognizeCelebritiesRequest;
}
export interface RecognizeCelebritiesResponse {
    __type?: "RecognizeCelebritiesResponse";
    /**
     * <p>Details about each celebrity found in the image. Amazon Rekognition can detect a maximum of 15
     *       celebrities in an image.</p>
     */
    CelebrityFaces?: Array<Celebrity>;
    /**
     * <p>The orientation of the input image (counterclockwise direction). If your application
     *       displays the image, you can use this value to correct the orientation. The bounding box
     *       coordinates returned in <code>CelebrityFaces</code> and <code>UnrecognizedFaces</code>
     *       represent face locations before the image orientation is corrected. </p>
     *          <note>
     *             <p>If the input image is in .jpeg format, it might contain exchangeable image (Exif)
     *         metadata that includes the image's orientation. If so, and the Exif metadata for the input
     *         image populates the orientation field, the value of <code>OrientationCorrection</code> is
     *         null. The <code>CelebrityFaces</code> and <code>UnrecognizedFaces</code> bounding box
     *         coordinates represent face locations after Exif metadata is used to correct the image
     *         orientation. Images in .png format don't contain Exif metadata. </p>
     *          </note>
     */
    OrientationCorrection?: OrientationCorrection | string;
    /**
     * <p>Details about each unrecognized face in the image.</p>
     */
    UnrecognizedFaces?: Array<ComparedFace>;
}
export declare namespace RecognizeCelebritiesResponse {
    function isa(o: any): o is RecognizeCelebritiesResponse;
}
/**
 * <p>A collection with the specified ID already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "ResourceAlreadyExistsException";
    $fault: "client";
    Code?: string;
    Logref?: string;
    Message?: string;
}
export declare namespace ResourceAlreadyExistsException {
    function isa(o: any): o is ResourceAlreadyExistsException;
}
/**
 * <p></p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
    name: "ResourceInUseException";
    $fault: "client";
    Code?: string;
    Logref?: string;
    Message?: string;
}
export declare namespace ResourceInUseException {
    function isa(o: any): o is ResourceInUseException;
}
/**
 * <p>The collection specified in the request cannot be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    Code?: string;
    Logref?: string;
    Message?: string;
}
export declare namespace ResourceNotFoundException {
    function isa(o: any): o is ResourceNotFoundException;
}
/**
 * <p>The requested resource isn't ready. For example,
 *          this exception occurs when you call <code>DetectCustomLabels</code> with a
 *          model version that isn't deployed. </p>
 */
export interface ResourceNotReadyException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotReadyException";
    $fault: "client";
    Code?: string;
    Logref?: string;
    Message?: string;
}
export declare namespace ResourceNotReadyException {
    function isa(o: any): o is ResourceNotReadyException;
}
/**
 * <p>Provides the S3 bucket name and object name.</p>
 *          <p>The region for the S3 bucket containing the S3 object must match the region you use for
 *       Amazon Rekognition operations.</p>
 *
 *          <p>For Amazon Rekognition to process an S3 object, the user must have permission to
 *       access the S3 object. For more information, see Resource-Based Policies in the Amazon Rekognition
 *       Developer Guide. </p>
 */
export interface S3Object {
    __type?: "S3Object";
    /**
     * <p>Name of the S3 bucket.</p>
     */
    Bucket?: string;
    /**
     * <p>S3 object key name.</p>
     */
    Name?: string;
    /**
     * <p>If the bucket is versioning enabled, you can specify the object version. </p>
     */
    Version?: string;
}
export declare namespace S3Object {
    function isa(o: any): o is S3Object;
}
export interface SearchFacesByImageRequest {
    __type?: "SearchFacesByImageRequest";
    /**
     * <p>ID of the collection to search.</p>
     */
    CollectionId: string | undefined;
    /**
     * <p>(Optional) Specifies the minimum confidence in the face match to return. For example,
     *       don't return any matches where confidence in matches is less than 70%.
     *     The default value is 80%.</p>
     */
    FaceMatchThreshold?: number;
    /**
     * <p>The input image as base64-encoded bytes or an S3 object.
     *       If you use the AWS CLI to call Amazon Rekognition operations,
     *       passing base64-encoded image bytes is not supported. </p>
     *          <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes
     *       passed using the <code>Bytes</code> field.
     *       For more information, see Images in the Amazon Rekognition developer guide.</p>
     */
    Image: Image | undefined;
    /**
     * <p>Maximum number of faces to return. The operation returns the maximum number of faces
     *       with the highest confidence in the match.</p>
     */
    MaxFaces?: number;
    /**
     * <p>A filter that specifies a quality bar for how much filtering is done to identify faces.
     *       Filtered faces aren't searched for in the collection. If you specify <code>AUTO</code>, Amazon Rekognition
     *       chooses the quality bar.  If you specify <code>LOW</code>,
     *       <code>MEDIUM</code>, or <code>HIGH</code>, filtering removes all faces that
     *       don’t meet the chosen quality bar.
     *
     *       The quality bar is based on a variety of common use cases. Low-quality
     *       detections can occur for a number of reasons. Some examples are an object that's misidentified
     *       as a face, a face that's too blurry, or a face with a
     *       pose that's too extreme to use. If you specify <code>NONE</code>, no
     *       filtering is performed.  The default value is <code>NONE</code>.
     *     </p>
     *          <p>To use quality filtering, the collection you are using must be associated with version 3 of the face model or higher.</p>
     */
    QualityFilter?: QualityFilter | string;
}
export declare namespace SearchFacesByImageRequest {
    function isa(o: any): o is SearchFacesByImageRequest;
}
export interface SearchFacesByImageResponse {
    __type?: "SearchFacesByImageResponse";
    /**
     * <p>An array of faces that match the input face, along with the confidence in the
     *       match.</p>
     */
    FaceMatches?: Array<FaceMatch>;
    /**
     * <p>Version number of the face detection model associated with the input collection (<code>CollectionId</code>).</p>
     */
    FaceModelVersion?: string;
    /**
     * <p>The bounding box around the face in the input image that Amazon Rekognition used for the
     *       search.</p>
     */
    SearchedFaceBoundingBox?: BoundingBox;
    /**
     * <p>The level of confidence that the <code>searchedFaceBoundingBox</code>, contains a
     *       face.</p>
     */
    SearchedFaceConfidence?: number;
}
export declare namespace SearchFacesByImageResponse {
    function isa(o: any): o is SearchFacesByImageResponse;
}
export interface SearchFacesRequest {
    __type?: "SearchFacesRequest";
    /**
     * <p>ID of the collection the face belongs to.</p>
     */
    CollectionId: string | undefined;
    /**
     * <p>ID of a face to find matches for in the collection.</p>
     */
    FaceId: string | undefined;
    /**
     * <p>Optional value specifying the minimum confidence in the face match to return. For
     *       example, don't return any matches where confidence in matches is less than 70%.
     *       The default value is 80%.
     *     </p>
     */
    FaceMatchThreshold?: number;
    /**
     * <p>Maximum number of faces to return. The operation returns the maximum number of faces
     *       with the highest confidence in the match.</p>
     */
    MaxFaces?: number;
}
export declare namespace SearchFacesRequest {
    function isa(o: any): o is SearchFacesRequest;
}
export interface SearchFacesResponse {
    __type?: "SearchFacesResponse";
    /**
     * <p>An array of faces that matched the input face, along with the confidence in the
     *       match.</p>
     */
    FaceMatches?: Array<FaceMatch>;
    /**
     * <p>Version number of the face detection model associated with the input collection (<code>CollectionId</code>).</p>
     */
    FaceModelVersion?: string;
    /**
     * <p>ID of the face that was searched for matches in a collection.</p>
     */
    SearchedFaceId?: string;
}
export declare namespace SearchFacesResponse {
    function isa(o: any): o is SearchFacesResponse;
}
/**
 * <p>Indicates whether or not the face is smiling, and the confidence level in the
 *       determination.</p>
 */
export interface Smile {
    __type?: "Smile";
    /**
     * <p>Level of confidence in the determination.</p>
     */
    Confidence?: number;
    /**
     * <p>Boolean value that indicates whether the face is smiling or not.</p>
     */
    Value?: boolean;
}
export declare namespace Smile {
    function isa(o: any): o is Smile;
}
export interface StartCelebrityRecognitionRequest {
    __type?: "StartCelebrityRecognitionRequest";
    /**
     * <p>Idempotent token used to identify the start request. If you use the same token with multiple
     *     <code>StartCelebrityRecognition</code> requests, the same <code>JobId</code> is returned. Use
     *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
     */
    ClientRequestToken?: string;
    /**
     * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
     *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
     */
    JobTag?: string;
    /**
     * <p>The Amazon SNS topic ARN that you want Amazon Rekognition Video to publish the completion status of the
     *       celebrity recognition analysis to.</p>
     */
    NotificationChannel?: NotificationChannel;
    /**
     * <p>The video in which you want to recognize celebrities. The video must be stored
     *       in an Amazon S3 bucket.</p>
     */
    Video: Video | undefined;
}
export declare namespace StartCelebrityRecognitionRequest {
    function isa(o: any): o is StartCelebrityRecognitionRequest;
}
export interface StartCelebrityRecognitionResponse {
    __type?: "StartCelebrityRecognitionResponse";
    /**
     * <p>The identifier for the celebrity recognition analysis job. Use <code>JobId</code> to identify the job in
     *       a subsequent call to <code>GetCelebrityRecognition</code>.</p>
     */
    JobId?: string;
}
export declare namespace StartCelebrityRecognitionResponse {
    function isa(o: any): o is StartCelebrityRecognitionResponse;
}
export interface StartContentModerationRequest {
    __type?: "StartContentModerationRequest";
    /**
     * <p>Idempotent token used to identify the start request. If you use the same token with multiple
     *       <code>StartContentModeration</code> requests, the same <code>JobId</code> is returned. Use
     *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
     */
    ClientRequestToken?: string;
    /**
     * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
     *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
     */
    JobTag?: string;
    /**
     * <p>Specifies the minimum confidence that Amazon Rekognition must have in order to return a moderated content label. Confidence
     *       represents how certain Amazon Rekognition is that the moderated content is correctly identified. 0 is the lowest confidence.
     *       100 is the highest confidence.  Amazon Rekognition doesn't return any moderated content labels with a confidence level
     *       lower than this specified value. If you don't specify <code>MinConfidence</code>, <code>GetContentModeration</code>
     *        returns labels with confidence values greater than or equal to 50 percent.</p>
     */
    MinConfidence?: number;
    /**
     * <p>The Amazon SNS topic ARN that you want Amazon Rekognition Video to publish the completion status of the
     *       unsafe content analysis to.</p>
     */
    NotificationChannel?: NotificationChannel;
    /**
     * <p>The video in which you want to detect unsafe content. The video must be stored
     *       in an Amazon S3 bucket.</p>
     */
    Video: Video | undefined;
}
export declare namespace StartContentModerationRequest {
    function isa(o: any): o is StartContentModerationRequest;
}
export interface StartContentModerationResponse {
    __type?: "StartContentModerationResponse";
    /**
     * <p>The identifier for the unsafe content analysis job. Use <code>JobId</code> to identify the job in
     *       a subsequent call to <code>GetContentModeration</code>.</p>
     */
    JobId?: string;
}
export declare namespace StartContentModerationResponse {
    function isa(o: any): o is StartContentModerationResponse;
}
export interface StartFaceDetectionRequest {
    __type?: "StartFaceDetectionRequest";
    /**
     * <p>Idempotent token used to identify the start request. If you use the same token with multiple
     *       <code>StartFaceDetection</code> requests, the same <code>JobId</code> is returned. Use
     *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
     */
    ClientRequestToken?: string;
    /**
     * <p>The face attributes you want returned.</p>
     *          <p>
     *             <code>DEFAULT</code> - The following subset of facial attributes are returned: BoundingBox, Confidence, Pose, Quality and Landmarks. </p>
     *          <p>
     *             <code>ALL</code> - All facial attributes are returned.</p>
     */
    FaceAttributes?: FaceAttributes | string;
    /**
     * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
     *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
     */
    JobTag?: string;
    /**
     * <p>The ARN of the Amazon SNS topic to which you want Amazon Rekognition Video to publish the completion status of the
     *          face detection operation.</p>
     */
    NotificationChannel?: NotificationChannel;
    /**
     * <p>The video in which you want to detect faces. The video must be stored
     *       in an Amazon S3 bucket.</p>
     */
    Video: Video | undefined;
}
export declare namespace StartFaceDetectionRequest {
    function isa(o: any): o is StartFaceDetectionRequest;
}
export interface StartFaceDetectionResponse {
    __type?: "StartFaceDetectionResponse";
    /**
     * <p>The identifier for the face detection job. Use <code>JobId</code> to identify the job in
     *     a subsequent call to <code>GetFaceDetection</code>.</p>
     */
    JobId?: string;
}
export declare namespace StartFaceDetectionResponse {
    function isa(o: any): o is StartFaceDetectionResponse;
}
export interface StartFaceSearchRequest {
    __type?: "StartFaceSearchRequest";
    /**
     * <p>Idempotent token used to identify the start request. If you use the same token with multiple
     *       <code>StartFaceSearch</code> requests, the same <code>JobId</code> is returned. Use
     *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
     */
    ClientRequestToken?: string;
    /**
     * <p>ID of the collection that contains the faces you want to search for.</p>
     */
    CollectionId: string | undefined;
    /**
     * <p>The minimum confidence in the person match to return. For example, don't return any matches where confidence in matches is less than 70%.
     *       The default value is 80%.</p>
     */
    FaceMatchThreshold?: number;
    /**
     * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
     *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
     */
    JobTag?: string;
    /**
     * <p>The ARN of the Amazon SNS topic to which you want Amazon Rekognition Video to publish the completion status of the search. </p>
     */
    NotificationChannel?: NotificationChannel;
    /**
     * <p>The video you want to search. The video must be stored in an Amazon S3 bucket. </p>
     */
    Video: Video | undefined;
}
export declare namespace StartFaceSearchRequest {
    function isa(o: any): o is StartFaceSearchRequest;
}
export interface StartFaceSearchResponse {
    __type?: "StartFaceSearchResponse";
    /**
     * <p>The identifier for the search job. Use <code>JobId</code> to identify the job in a subsequent call to <code>GetFaceSearch</code>. </p>
     */
    JobId?: string;
}
export declare namespace StartFaceSearchResponse {
    function isa(o: any): o is StartFaceSearchResponse;
}
export interface StartLabelDetectionRequest {
    __type?: "StartLabelDetectionRequest";
    /**
     * <p>Idempotent token used to identify the start request. If you use the same token with multiple
     *       <code>StartLabelDetection</code> requests, the same <code>JobId</code> is returned. Use
     *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
     */
    ClientRequestToken?: string;
    /**
     * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
     *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
     */
    JobTag?: string;
    /**
     * <p>Specifies the minimum confidence that Amazon Rekognition Video must have in order to return a detected label. Confidence
     *        represents how certain Amazon Rekognition is that a label is correctly identified.0 is the lowest confidence.
     *        100 is the highest confidence.  Amazon Rekognition Video doesn't return any labels with a confidence level
     *        lower than this specified value.</p>
     *          <p>If you don't specify <code>MinConfidence</code>, the operation returns labels with confidence
     *      values greater than or equal to 50 percent.</p>
     */
    MinConfidence?: number;
    /**
     * <p>The Amazon SNS topic ARN you want Amazon Rekognition Video to publish the completion status of the label detection
     *         operation to. </p>
     */
    NotificationChannel?: NotificationChannel;
    /**
     * <p>The video in which you want to detect labels. The video must be stored
     *       in an Amazon S3 bucket.</p>
     */
    Video: Video | undefined;
}
export declare namespace StartLabelDetectionRequest {
    function isa(o: any): o is StartLabelDetectionRequest;
}
export interface StartLabelDetectionResponse {
    __type?: "StartLabelDetectionResponse";
    /**
     * <p>The identifier for the label detection job. Use <code>JobId</code> to identify the job in
     *     a subsequent call to <code>GetLabelDetection</code>. </p>
     */
    JobId?: string;
}
export declare namespace StartLabelDetectionResponse {
    function isa(o: any): o is StartLabelDetectionResponse;
}
export interface StartPersonTrackingRequest {
    __type?: "StartPersonTrackingRequest";
    /**
     * <p>Idempotent token used to identify the start request. If you use the same token with multiple
     *       <code>StartPersonTracking</code> requests, the same <code>JobId</code> is returned. Use
     *       <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
     */
    ClientRequestToken?: string;
    /**
     * <p>An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic.
     *       For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.</p>
     */
    JobTag?: string;
    /**
     * <p>The Amazon SNS topic ARN you want Amazon Rekognition Video to publish the completion status of the people detection
     *         operation to.</p>
     */
    NotificationChannel?: NotificationChannel;
    /**
     * <p>The video in which you want to detect people. The video must be stored
     *       in an Amazon S3 bucket.</p>
     */
    Video: Video | undefined;
}
export declare namespace StartPersonTrackingRequest {
    function isa(o: any): o is StartPersonTrackingRequest;
}
export interface StartPersonTrackingResponse {
    __type?: "StartPersonTrackingResponse";
    /**
     * <p>The identifier for the person detection job. Use <code>JobId</code> to identify the job in
     *     a subsequent call to <code>GetPersonTracking</code>.</p>
     */
    JobId?: string;
}
export declare namespace StartPersonTrackingResponse {
    function isa(o: any): o is StartPersonTrackingResponse;
}
export interface StartProjectVersionRequest {
    __type?: "StartProjectVersionRequest";
    /**
     * <p>The minimum number of inference units to use. A single
     *       inference unit represents 1 hour of processing and can support up to 5 Transaction Pers Second (TPS).
     *       Use a higher number to increase the TPS throughput of your model. You are charged for the number
     *       of inference units that you use.
     *     </p>
     */
    MinInferenceUnits: number | undefined;
    /**
     * <p>The Amazon Resource Name(ARN) of the model version that you want to start.</p>
     */
    ProjectVersionArn: string | undefined;
}
export declare namespace StartProjectVersionRequest {
    function isa(o: any): o is StartProjectVersionRequest;
}
export interface StartProjectVersionResponse {
    __type?: "StartProjectVersionResponse";
    /**
     * <p>The current running status of the model. </p>
     */
    Status?: ProjectVersionStatus | string;
}
export declare namespace StartProjectVersionResponse {
    function isa(o: any): o is StartProjectVersionResponse;
}
export interface StartStreamProcessorRequest {
    __type?: "StartStreamProcessorRequest";
    /**
     * <p>The name of the stream processor to start processing.</p>
     */
    Name: string | undefined;
}
export declare namespace StartStreamProcessorRequest {
    function isa(o: any): o is StartStreamProcessorRequest;
}
export interface StartStreamProcessorResponse {
    __type?: "StartStreamProcessorResponse";
}
export declare namespace StartStreamProcessorResponse {
    function isa(o: any): o is StartStreamProcessorResponse;
}
export interface StopProjectVersionRequest {
    __type?: "StopProjectVersionRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of the model version that you want to delete.</p>
     *          <p>This operation requires permissions to perform the <code>rekognition:StopProjectVersion</code> action.</p>
     */
    ProjectVersionArn: string | undefined;
}
export declare namespace StopProjectVersionRequest {
    function isa(o: any): o is StopProjectVersionRequest;
}
export interface StopProjectVersionResponse {
    __type?: "StopProjectVersionResponse";
    /**
     * <p>The current status of the stop operation. </p>
     */
    Status?: ProjectVersionStatus | string;
}
export declare namespace StopProjectVersionResponse {
    function isa(o: any): o is StopProjectVersionResponse;
}
export interface StopStreamProcessorRequest {
    __type?: "StopStreamProcessorRequest";
    /**
     * <p>The name of a stream processor created by <a>CreateStreamProcessor</a>.</p>
     */
    Name: string | undefined;
}
export declare namespace StopStreamProcessorRequest {
    function isa(o: any): o is StopStreamProcessorRequest;
}
export interface StopStreamProcessorResponse {
    __type?: "StopStreamProcessorResponse";
}
export declare namespace StopStreamProcessorResponse {
    function isa(o: any): o is StopStreamProcessorResponse;
}
/**
 * <p>An object that recognizes faces in a streaming video. An Amazon Rekognition stream processor is created by a call to <a>CreateStreamProcessor</a>.  The request
 *         parameters for <code>CreateStreamProcessor</code> describe the Kinesis video stream source for the streaming video, face recognition parameters, and where to stream the analysis resullts.
 *
 *         </p>
 */
export interface StreamProcessor {
    __type?: "StreamProcessor";
    /**
     * <p>Name of the Amazon Rekognition stream processor. </p>
     */
    Name?: string;
    /**
     * <p>Current status of the Amazon Rekognition stream processor.</p>
     */
    Status?: StreamProcessorStatus | string;
}
export declare namespace StreamProcessor {
    function isa(o: any): o is StreamProcessor;
}
/**
 * <p>Information about the source streaming video. </p>
 */
export interface StreamProcessorInput {
    __type?: "StreamProcessorInput";
    /**
     * <p>The Kinesis video stream input stream for the source streaming video.</p>
     */
    KinesisVideoStream?: KinesisVideoStream;
}
export declare namespace StreamProcessorInput {
    function isa(o: any): o is StreamProcessorInput;
}
/**
 * <p>Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more
 *            information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.</p>
 */
export interface StreamProcessorOutput {
    __type?: "StreamProcessorOutput";
    /**
     * <p>The Amazon Kinesis Data Streams stream to which the Amazon Rekognition stream processor streams the analysis results.</p>
     */
    KinesisDataStream?: KinesisDataStream;
}
export declare namespace StreamProcessorOutput {
    function isa(o: any): o is StreamProcessorOutput;
}
/**
 * <p>Input parameters used to recognize faces in a streaming video analyzed by a Amazon Rekognition stream processor.</p>
 */
export interface StreamProcessorSettings {
    __type?: "StreamProcessorSettings";
    /**
     * <p>Face search settings to use on a streaming video. </p>
     */
    FaceSearch?: FaceSearchSettings;
}
export declare namespace StreamProcessorSettings {
    function isa(o: any): o is StreamProcessorSettings;
}
export declare enum StreamProcessorStatus {
    FAILED = "FAILED",
    RUNNING = "RUNNING",
    STARTING = "STARTING",
    STOPPED = "STOPPED",
    STOPPING = "STOPPING"
}
/**
 * <p>The S3 bucket that contains the training summary. The training summary includes
 *          aggregated evaluation metrics for the entire testing dataset and metrics for each
 *          individual label.  </p>
 *          <p>You get the training summary S3 bucket location by calling <a>DescribeProjectVersions</a>.
 *          </p>
 */
export interface Summary {
    __type?: "Summary";
    /**
     * <p>Provides the S3 bucket name and object name.</p>
     *          <p>The region for the S3 bucket containing the S3 object must match the region you use for
     *       Amazon Rekognition operations.</p>
     *
     *          <p>For Amazon Rekognition to process an S3 object, the user must have permission to
     *       access the S3 object. For more information, see Resource-Based Policies in the Amazon Rekognition
     *       Developer Guide. </p>
     */
    S3Object?: S3Object;
}
export declare namespace Summary {
    function isa(o: any): o is Summary;
}
/**
 * <p>Indicates whether or not the face is wearing sunglasses, and the confidence level in
 *       the determination.</p>
 */
export interface Sunglasses {
    __type?: "Sunglasses";
    /**
     * <p>Level of confidence in the determination.</p>
     */
    Confidence?: number;
    /**
     * <p>Boolean value that indicates whether the face is wearing sunglasses or not.</p>
     */
    Value?: boolean;
}
export declare namespace Sunglasses {
    function isa(o: any): o is Sunglasses;
}
/**
 * <p>The dataset used for testing. Optionally, if <code>AutoCreate</code> is set,  Amazon Rekognition Custom Labels creates a
 *          testing dataset using an 80/20 split of the training dataset.</p>
 */
export interface TestingData {
    __type?: "TestingData";
    /**
     * <p>The assets used for testing.</p>
     */
    Assets?: Array<Asset>;
    /**
     * <p>If specified, Amazon Rekognition Custom Labels creates a testing dataset with an 80/20 split of the training dataset.</p>
     */
    AutoCreate?: boolean;
}
export declare namespace TestingData {
    function isa(o: any): o is TestingData;
}
/**
 * <p>A Sagemaker Groundtruth format manifest file representing the dataset used for testing.</p>
 */
export interface TestingDataResult {
    __type?: "TestingDataResult";
    /**
     * <p>The testing dataset that was supplied for training.</p>
     */
    Input?: TestingData;
    /**
     * <p>The subset of the dataset that was actually tested. Some images (assets) might not be tested due to
     *          file formatting and other issues. </p>
     */
    Output?: TestingData;
}
export declare namespace TestingDataResult {
    function isa(o: any): o is TestingDataResult;
}
/**
 * <p>Information about a word or line of text detected by <a>DetectText</a>.</p>
 *          <p>The <code>DetectedText</code> field contains the text that Amazon Rekognition detected in the
 *       image. </p>
 *          <p>Every word and line has an identifier (<code>Id</code>). Each word belongs to a line
 *       and has a parent identifier (<code>ParentId</code>) that identifies the line of text in which
 *       the word appears. The word <code>Id</code> is also an index for the word within a line of
 *       words. </p>
 *
 *          <p>For more information, see Detecting Text in the Amazon Rekognition Developer Guide.</p>
 */
export interface TextDetection {
    __type?: "TextDetection";
    /**
     * <p>The confidence that Amazon Rekognition has in the accuracy of the detected text and the accuracy
     *       of the geometry points around the detected text.</p>
     */
    Confidence?: number;
    /**
     * <p>The word or line of text recognized by Amazon Rekognition. </p>
     */
    DetectedText?: string;
    /**
     * <p>The location of the detected text on the image. Includes an axis aligned coarse
     *       bounding box surrounding the text and a finer grain polygon for more accurate spatial
     *       information.</p>
     */
    Geometry?: Geometry;
    /**
     * <p>The identifier for the detected text. The identifier is only unique for a single call
     *       to <code>DetectText</code>. </p>
     */
    Id?: number;
    /**
     * <p>The Parent identifier for the detected text identified by the value of <code>ID</code>.
     *       If the type of detected text is <code>LINE</code>, the value of <code>ParentId</code> is
     *         <code>Null</code>. </p>
     */
    ParentId?: number;
    /**
     * <p>The type of text that was detected.</p>
     */
    Type?: TextTypes | string;
}
export declare namespace TextDetection {
    function isa(o: any): o is TextDetection;
}
export declare enum TextTypes {
    LINE = "LINE",
    WORD = "WORD"
}
/**
 * <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
    name: "ThrottlingException";
    $fault: "server";
    Code?: string;
    Logref?: string;
    Message?: string;
}
export declare namespace ThrottlingException {
    function isa(o: any): o is ThrottlingException;
}
/**
 * <p>The dataset used for training.</p>
 */
export interface TrainingData {
    __type?: "TrainingData";
    /**
     * <p>A Sagemaker GroundTruth manifest file that contains the training images (assets).</p>
     */
    Assets?: Array<Asset>;
}
export declare namespace TrainingData {
    function isa(o: any): o is TrainingData;
}
/**
 * <p>A Sagemaker Groundtruth format manifest file that represents the dataset used for training.</p>
 */
export interface TrainingDataResult {
    __type?: "TrainingDataResult";
    /**
     * <p>The training assets that you supplied for training.</p>
     */
    Input?: TrainingData;
    /**
     * <p>The images (assets) that were actually trained by Amazon Rekognition Custom Labels. </p>
     */
    Output?: TrainingData;
}
export declare namespace TrainingDataResult {
    function isa(o: any): o is TrainingDataResult;
}
/**
 * <p>A face that <a>IndexFaces</a> detected, but didn't index. Use the
 *         <code>Reasons</code> response attribute to determine why a face wasn't indexed.</p>
 */
export interface UnindexedFace {
    __type?: "UnindexedFace";
    /**
     * <p>The
     *       structure that contains attributes of a face that
     *       <code>IndexFaces</code>detected, but didn't index. </p>
     */
    FaceDetail?: FaceDetail;
    /**
     * <p>An array of reasons that specify why a face wasn't indexed. </p>
     *          <ul>
     *             <li>
     *                <p>EXTREME_POSE - The face is at a pose that can't be detected. For example, the head is turned
     *           too far away from the camera.</p>
     *             </li>
     *             <li>
     *                <p>EXCEEDS_MAX_FACES - The number of faces detected is already higher than that specified by the
     *       <code>MaxFaces</code> input parameter for <code>IndexFaces</code>.</p>
     *             </li>
     *             <li>
     *                <p>LOW_BRIGHTNESS - The image is too dark.</p>
     *             </li>
     *             <li>
     *                <p>LOW_SHARPNESS - The image is too blurry.</p>
     *             </li>
     *             <li>
     *                <p>LOW_CONFIDENCE - The face was detected with a low confidence.</p>
     *             </li>
     *             <li>
     *                <p>SMALL_BOUNDING_BOX - The bounding box around the face is too small.</p>
     *             </li>
     *          </ul>
     */
    Reasons?: Array<Reason | string>;
}
export declare namespace UnindexedFace {
    function isa(o: any): o is UnindexedFace;
}
/**
 * <p>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to
 *             specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</p>
 */
export interface Video {
    __type?: "Video";
    /**
     * <p>The Amazon S3 bucket name and file name for the video.</p>
     */
    S3Object?: S3Object;
}
export declare namespace Video {
    function isa(o: any): o is Video;
}
export declare enum VideoJobStatus {
    FAILED = "FAILED",
    IN_PROGRESS = "IN_PROGRESS",
    SUCCEEDED = "SUCCEEDED"
}
/**
 * <p>Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in
 *             every page of paginated responses from a Amazon Rekognition video operation.</p>
 */
export interface VideoMetadata {
    __type?: "VideoMetadata";
    /**
     * <p>Type of compression used in the analyzed video. </p>
     */
    Codec?: string;
    /**
     * <p>Length of the video in milliseconds.</p>
     */
    DurationMillis?: number;
    /**
     * <p>Format of the analyzed video. Possible values are MP4, MOV and AVI. </p>
     */
    Format?: string;
    /**
     * <p>Vertical pixel dimension of the video.</p>
     */
    FrameHeight?: number;
    /**
     * <p>Number of frames per second in the video.</p>
     */
    FrameRate?: number;
    /**
     * <p>Horizontal pixel dimension of the video.</p>
     */
    FrameWidth?: number;
}
export declare namespace VideoMetadata {
    function isa(o: any): o is VideoMetadata;
}
/**
 * <p>The file size or duration of the supplied media is too large. The maximum file size is 8GB.
 *         The maximum duration is 2 hours. </p>
 */
export interface VideoTooLargeException extends __SmithyException, $MetadataBearer {
    name: "VideoTooLargeException";
    $fault: "client";
    Code?: string;
    Logref?: string;
    Message?: string;
}
export declare namespace VideoTooLargeException {
    function isa(o: any): o is VideoTooLargeException;
}
