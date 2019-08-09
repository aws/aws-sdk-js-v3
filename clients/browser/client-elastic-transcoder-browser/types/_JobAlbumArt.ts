import { _Artwork, _UnmarshalledArtwork } from "./_Artwork";

/**
 * <p>The .jpg or .png file associated with an audio file.</p>
 */
export interface _JobAlbumArt {
  /**
   * <p>A policy that determines how Elastic Transcoder handles the existence of multiple album artwork files.</p> <ul> <li> <p> <code>Replace:</code> The specified album art replaces any existing album art.</p> </li> <li> <p> <code>Prepend:</code> The specified album art is placed in front of any existing album art.</p> </li> <li> <p> <code>Append:</code> The specified album art is placed after any existing album art.</p> </li> <li> <p> <code>Fallback:</code> If the original input file contains artwork, Elastic Transcoder uses that artwork for the output. If the original input does not contain artwork, Elastic Transcoder uses the specified album art file.</p> </li> </ul>
   */
  MergePolicy?: string;

  /**
   * <p>The file to be used as album art. There can be multiple artworks associated with an audio file, to a maximum of 20. Valid formats are <code>.jpg</code> and <code>.png</code> </p>
   */
  Artwork?: Array<_Artwork> | Iterable<_Artwork>;
}

export interface _UnmarshalledJobAlbumArt extends _JobAlbumArt {
  /**
   * <p>The file to be used as album art. There can be multiple artworks associated with an audio file, to a maximum of 20. Valid formats are <code>.jpg</code> and <code>.png</code> </p>
   */
  Artwork?: Array<_UnmarshalledArtwork>;
}
