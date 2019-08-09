import {
  _SegmentDimensions,
  _UnmarshalledSegmentDimensions
} from "./_SegmentDimensions";
import {
  _SegmentImportResource,
  _UnmarshalledSegmentImportResource
} from "./_SegmentImportResource";
import {
  _SegmentGroupList,
  _UnmarshalledSegmentGroupList
} from "./_SegmentGroupList";

/**
 * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
 */
export interface _SegmentResponse {
  /**
   * <p>The unique identifier for the application that the segment is associated with.</p>
   */
  ApplicationId: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the segment.</p>
   */
  Arn: string;

  /**
   * <p>The date and time when the segment was created.</p>
   */
  CreationDate: string;

  /**
   * <p>The dimension settings for the segment.</p>
   */
  Dimensions?: _SegmentDimensions;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  Id: string;

  /**
   * <p>The settings for the import job that's associated with the segment.</p>
   */
  ImportDefinition?: _SegmentImportResource;

  /**
   * <p>The date and time when the segment was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The name of the segment.</p>
   */
  Name?: string;

  /**
   * <p>A list of one or more segment groups that apply to the segment. Each segment group consists of zero or more base segments and the dimensions that are applied to those base segments.</p>
   */
  SegmentGroups?: _SegmentGroupList;

  /**
   * <p>The segment type. Valid values are:</p> <ul><li><p>DIMENSIONAL - A dynamic segment, which is a segment that uses selection criteria that you specify and is based on endpoint data that's reported by your app. Dynamic segments can change over time.</p></li> <li><p>IMPORT - A static segment, which is a segment that uses selection criteria that you specify and is based on endpoint definitions that you import from a file. Imported segments are static; they don't change over time.</p></li></ul>
   */
  SegmentType: "DIMENSIONAL" | "IMPORT" | string;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the segment. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The version number of the segment.</p>
   */
  Version?: number;
}

export interface _UnmarshalledSegmentResponse extends _SegmentResponse {
  /**
   * <p>The dimension settings for the segment.</p>
   */
  Dimensions?: _UnmarshalledSegmentDimensions;

  /**
   * <p>The settings for the import job that's associated with the segment.</p>
   */
  ImportDefinition?: _UnmarshalledSegmentImportResource;

  /**
   * <p>A list of one or more segment groups that apply to the segment. Each segment group consists of zero or more base segments and the dimensions that are applied to those base segments.</p>
   */
  SegmentGroups?: _UnmarshalledSegmentGroupList;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the segment. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}
