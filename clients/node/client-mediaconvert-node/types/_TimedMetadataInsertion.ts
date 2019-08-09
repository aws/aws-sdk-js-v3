import { _Id3Insertion, _UnmarshalledId3Insertion } from "./_Id3Insertion";

/**
 * Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in your job. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects.
 */
export interface _TimedMetadataInsertion {
  /**
   * Id3Insertions contains the array of Id3Insertion instances.
   */
  Id3Insertions?: Array<_Id3Insertion> | Iterable<_Id3Insertion>;
}

export interface _UnmarshalledTimedMetadataInsertion
  extends _TimedMetadataInsertion {
  /**
   * Id3Insertions contains the array of Id3Insertion instances.
   */
  Id3Insertions?: Array<_UnmarshalledId3Insertion>;
}
