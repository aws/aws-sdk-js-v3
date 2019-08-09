import {
  _InsertableImage,
  _UnmarshalledInsertableImage
} from "./_InsertableImage";

/**
 * Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input or output individually. This setting is disabled by default.
 */
export interface _ImageInserter {
  /**
   * Specify the images that you want to overlay on your video. The images must be PNG or TGA files.
   */
  InsertableImages?: Array<_InsertableImage> | Iterable<_InsertableImage>;
}

export interface _UnmarshalledImageInserter extends _ImageInserter {
  /**
   * Specify the images that you want to overlay on your video. The images must be PNG or TGA files.
   */
  InsertableImages?: Array<_UnmarshalledInsertableImage>;
}
