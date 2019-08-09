import { _BoundingBox, _UnmarshalledBoundingBox } from "./_BoundingBox";
import { _AgeRange, _UnmarshalledAgeRange } from "./_AgeRange";
import { _Smile, _UnmarshalledSmile } from "./_Smile";
import { _Eyeglasses, _UnmarshalledEyeglasses } from "./_Eyeglasses";
import { _Sunglasses, _UnmarshalledSunglasses } from "./_Sunglasses";
import { _Gender, _UnmarshalledGender } from "./_Gender";
import { _Beard, _UnmarshalledBeard } from "./_Beard";
import { _Mustache, _UnmarshalledMustache } from "./_Mustache";
import { _EyeOpen, _UnmarshalledEyeOpen } from "./_EyeOpen";
import { _MouthOpen, _UnmarshalledMouthOpen } from "./_MouthOpen";
import { _Emotion, _UnmarshalledEmotion } from "./_Emotion";
import { _Landmark, _UnmarshalledLandmark } from "./_Landmark";
import { _Pose, _UnmarshalledPose } from "./_Pose";
import { _ImageQuality, _UnmarshalledImageQuality } from "./_ImageQuality";

/**
 * <p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p>
 */
export interface _FaceDetail {
  /**
   * <p>Bounding box of the face. Default attribute.</p>
   */
  BoundingBox?: _BoundingBox;

  /**
   * <p>The estimated age range, in years, for the face. Low represents the lowest estimated age and High represents the highest estimated age.</p>
   */
  AgeRange?: _AgeRange;

  /**
   * <p>Indicates whether or not the face is smiling, and the confidence level in the determination.</p>
   */
  Smile?: _Smile;

  /**
   * <p>Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination.</p>
   */
  Eyeglasses?: _Eyeglasses;

  /**
   * <p>Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination.</p>
   */
  Sunglasses?: _Sunglasses;

  /**
   * <p>Gender of the face and the confidence level in the determination.</p>
   */
  Gender?: _Gender;

  /**
   * <p>Indicates whether or not the face has a beard, and the confidence level in the determination.</p>
   */
  Beard?: _Beard;

  /**
   * <p>Indicates whether or not the face has a mustache, and the confidence level in the determination.</p>
   */
  Mustache?: _Mustache;

  /**
   * <p>Indicates whether or not the eyes on the face are open, and the confidence level in the determination.</p>
   */
  EyesOpen?: _EyeOpen;

  /**
   * <p>Indicates whether or not the mouth on the face is open, and the confidence level in the determination.</p>
   */
  MouthOpen?: _MouthOpen;

  /**
   * <p>The emotions detected on the face, and the confidence level in the determination. For example, HAPPY, SAD, and ANGRY. </p>
   */
  Emotions?: Array<_Emotion> | Iterable<_Emotion>;

  /**
   * <p>Indicates the location of landmarks on the face. Default attribute.</p>
   */
  Landmarks?: Array<_Landmark> | Iterable<_Landmark>;

  /**
   * <p>Indicates the pose of the face as determined by its pitch, roll, and yaw. Default attribute.</p>
   */
  Pose?: _Pose;

  /**
   * <p>Identifies image brightness and sharpness. Default attribute.</p>
   */
  Quality?: _ImageQuality;

  /**
   * <p>Confidence level that the bounding box contains a face (and not a different object such as a tree). Default attribute.</p>
   */
  Confidence?: number;
}

export interface _UnmarshalledFaceDetail extends _FaceDetail {
  /**
   * <p>Bounding box of the face. Default attribute.</p>
   */
  BoundingBox?: _UnmarshalledBoundingBox;

  /**
   * <p>The estimated age range, in years, for the face. Low represents the lowest estimated age and High represents the highest estimated age.</p>
   */
  AgeRange?: _UnmarshalledAgeRange;

  /**
   * <p>Indicates whether or not the face is smiling, and the confidence level in the determination.</p>
   */
  Smile?: _UnmarshalledSmile;

  /**
   * <p>Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination.</p>
   */
  Eyeglasses?: _UnmarshalledEyeglasses;

  /**
   * <p>Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination.</p>
   */
  Sunglasses?: _UnmarshalledSunglasses;

  /**
   * <p>Gender of the face and the confidence level in the determination.</p>
   */
  Gender?: _UnmarshalledGender;

  /**
   * <p>Indicates whether or not the face has a beard, and the confidence level in the determination.</p>
   */
  Beard?: _UnmarshalledBeard;

  /**
   * <p>Indicates whether or not the face has a mustache, and the confidence level in the determination.</p>
   */
  Mustache?: _UnmarshalledMustache;

  /**
   * <p>Indicates whether or not the eyes on the face are open, and the confidence level in the determination.</p>
   */
  EyesOpen?: _UnmarshalledEyeOpen;

  /**
   * <p>Indicates whether or not the mouth on the face is open, and the confidence level in the determination.</p>
   */
  MouthOpen?: _UnmarshalledMouthOpen;

  /**
   * <p>The emotions detected on the face, and the confidence level in the determination. For example, HAPPY, SAD, and ANGRY. </p>
   */
  Emotions?: Array<_UnmarshalledEmotion>;

  /**
   * <p>Indicates the location of landmarks on the face. Default attribute.</p>
   */
  Landmarks?: Array<_UnmarshalledLandmark>;

  /**
   * <p>Indicates the pose of the face as determined by its pitch, roll, and yaw. Default attribute.</p>
   */
  Pose?: _UnmarshalledPose;

  /**
   * <p>Identifies image brightness and sharpness. Default attribute.</p>
   */
  Quality?: _UnmarshalledImageQuality;
}
