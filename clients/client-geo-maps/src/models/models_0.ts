// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { GeoMapsServiceException as __BaseException } from "./GeoMapsServiceException";

/**
 * <p>The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ColorScheme = {
  DARK: "Dark",
  LIGHT: "Light",
} as const;

/**
 * @public
 */
export type ColorScheme = (typeof ColorScheme)[keyof typeof ColorScheme];

/**
 * @public
 */
export interface GetGlyphsRequest {
  /**
   * <p>Name of the <code>FontStack</code> to retrieve. </p>
   *          <p>Example: <code>Amazon Ember Bold,Noto Sans Bold</code>.</p>
   *          <p>The supported font stacks are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Ember Bold</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Bold Italic</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Bold,Noto Sans Bold</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Bold,Noto Sans Bold,Noto Sans Arabic Bold</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Condensed RC BdItalic</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Condensed RC Bold</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Condensed RC Bold Italic</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Condensed RC Bold,Noto Sans Bold</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Condensed RC Bold,Noto Sans Bold,Noto Sans Arabic Condensed Bold</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Condensed RC Light</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Condensed RC Light Italic</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Condensed RC LtItalic</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Condensed RC Regular</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Condensed RC Regular Italic</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Condensed RC Regular,Noto Sans Regular</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Condensed RC Regular,Noto Sans Regular,Noto Sans Arabic Condensed Regular</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Condensed RC RgItalic</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Condensed RC ThItalic</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Condensed RC Thin</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Condensed RC Thin Italic</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Heavy</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Heavy Italic</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Light</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Light Italic</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Medium</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Medium Italic</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Medium,Noto Sans Medium</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Medium,Noto Sans Medium,Noto Sans Arabic Medium</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Regular</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Regular Italic</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Regular Italic,Noto Sans Italic</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Regular Italic,Noto Sans Italic,Noto Sans Arabic Regular</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Regular,Noto Sans Regular</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Regular,Noto Sans Regular,Noto Sans Arabic Regular</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Thin</p>
   *             </li>
   *             <li>
   *                <p>Amazon Ember Thin Italic</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmberCdRC_Bd</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmberCdRC_BdIt</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmberCdRC_Lt</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmberCdRC_LtIt</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmberCdRC_Rg</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmberCdRC_RgIt</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmberCdRC_Th</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmberCdRC_ThIt</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmber_Bd</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmber_BdIt</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmber_He</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmber_HeIt</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmber_Lt</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmber_LtIt</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmber_Md</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmber_MdIt</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmber_Rg</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmber_RgIt</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmber_Th</p>
   *             </li>
   *             <li>
   *                <p>AmazonEmber_ThIt</p>
   *             </li>
   *             <li>
   *                <p>Noto Sans Black</p>
   *             </li>
   *             <li>
   *                <p>Noto Sans Black Italic</p>
   *             </li>
   *             <li>
   *                <p>Noto Sans Bold</p>
   *             </li>
   *             <li>
   *                <p>Noto Sans Bold Italic</p>
   *             </li>
   *             <li>
   *                <p>Noto Sans Extra Bold</p>
   *             </li>
   *             <li>
   *                <p>Noto Sans Extra Bold Italic</p>
   *             </li>
   *             <li>
   *                <p>Noto Sans Extra Light</p>
   *             </li>
   *             <li>
   *                <p>Noto Sans Extra Light Italic</p>
   *             </li>
   *             <li>
   *                <p>Noto Sans Italic</p>
   *             </li>
   *             <li>
   *                <p>Noto Sans Light</p>
   *             </li>
   *             <li>
   *                <p>Noto Sans Light Italic</p>
   *             </li>
   *             <li>
   *                <p>Noto Sans Medium</p>
   *             </li>
   *             <li>
   *                <p>Noto Sans Medium Italic</p>
   *             </li>
   *             <li>
   *                <p>Noto Sans Regular</p>
   *             </li>
   *             <li>
   *                <p>Noto Sans Semi Bold</p>
   *             </li>
   *             <li>
   *                <p>Noto Sans Semi Bold Italic</p>
   *             </li>
   *             <li>
   *                <p>Noto Sans Thin</p>
   *             </li>
   *             <li>
   *                <p>Noto Sans Thin Italic</p>
   *             </li>
   *             <li>
   *                <p>NotoSans-Bold</p>
   *             </li>
   *             <li>
   *                <p>NotoSans-Italic</p>
   *             </li>
   *             <li>
   *                <p>NotoSans-Medium</p>
   *             </li>
   *             <li>
   *                <p>NotoSans-Regular</p>
   *             </li>
   *             <li>
   *                <p>Open Sans Regular,Arial Unicode MS Regular</p>
   *             </li>
   *          </ul>
   * @public
   */
  FontStack: string | undefined;

  /**
   * <p>A Unicode range of characters to download glyphs for. This must be aligned to multiples
   *          of 256. </p>
   *          <p>Example: <code>0-255.pdf</code>
   *          </p>
   * @public
   */
  FontUnicodeRange: string | undefined;
}

/**
 * @public
 */
export interface GetGlyphsResponse {
  /**
   * <p>The Glyph, as a binary blob.</p>
   * @public
   */
  Blob?: Uint8Array | undefined;

  /**
   * <p>Header that represents the format of the response. The response returns the following as the HTTP body.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>Header that instructs caching configuration for the client.</p>
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * <p>The glyph's Etag.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MapStyle = {
  HYBRID: "Hybrid",
  MONOCHROME: "Monochrome",
  SATELLITE: "Satellite",
  STANDARD: "Standard",
} as const;

/**
 * @public
 */
export type MapStyle = (typeof MapStyle)[keyof typeof MapStyle];

/**
 * @public
 * @enum
 */
export const Variant = {
  DEFAULT: "Default",
} as const;

/**
 * @public
 */
export type Variant = (typeof Variant)[keyof typeof Variant];

/**
 * @public
 */
export interface GetSpritesRequest {
  /**
   * <p>
   *             <code>Sprites</code> API: The name of the sprite ﬁle to retrieve, following pattern
   *             <code>sprites(@2x)?\.(png|json)</code>.</p>
   *          <p>Example: <code>sprites.png</code>
   *          </p>
   * @public
   */
  FileName: string | undefined;

  /**
   * <p>Style specifies the desired map style for the <code>Sprites</code> APIs.</p>
   * @public
   */
  Style: MapStyle | undefined;

  /**
   * <p>Sets color tone for map such as dark and light for specific map styles. It applies to only vector map styles such as Standard and Monochrome.</p>
   *          <p>Example: <code>Light</code>
   *          </p>
   *          <p>Default value: <code>Light</code>
   *          </p>
   *          <note>
   *             <p>Valid values for ColorScheme are case sensitive.</p>
   *          </note>
   * @public
   */
  ColorScheme: ColorScheme | undefined;

  /**
   * <p>Optimizes map styles for specific use case or industry. You can choose allowed variant only with Standard map style.</p>
   *          <p>Example: <code>Default</code>
   *          </p>
   *          <note>
   *             <p>Valid values for Variant are case sensitive.</p>
   *          </note>
   * @public
   */
  Variant: Variant | undefined;
}

/**
 * @public
 */
export interface GetSpritesResponse {
  /**
   * <p>The body of the sprite sheet or JSON offset file (image/png or application/json,
   *          depending on input).</p>
   * @public
   */
  Blob?: Uint8Array | undefined;

  /**
   * <p>Header that represents the format of the response. The response returns the following as the HTTP body.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>Header that instructs caching configuration for the client.</p>
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * <p>The sprite's Etag.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ScaleBarUnit = {
  KILOMETERS: "Kilometers",
  KILOMETERS_MILES: "KilometersMiles",
  MILES: "Miles",
  MILES_KILOMETERS: "MilesKilometers",
} as const;

/**
 * @public
 */
export type ScaleBarUnit = (typeof ScaleBarUnit)[keyof typeof ScaleBarUnit];

/**
 * @public
 * @enum
 */
export const StaticMapStyle = {
  SATELLITE: "Satellite",
} as const;

/**
 * @public
 */
export type StaticMapStyle = (typeof StaticMapStyle)[keyof typeof StaticMapStyle];

/**
 * @public
 */
export interface GetStaticMapRequest {
  /**
   * <p>Takes in two pairs of coordinates, [Lon, Lat], denoting south-westerly and
   *          north-easterly edges of the image. The underlying area becomes the view of the image. </p>
   *          <p>Example: -123.17075,49.26959,-123.08125,49.31429</p>
   * @public
   */
  BoundingBox?: string | undefined;

  /**
   * <p>Takes in two or more pair of coordinates, [Lon, Lat], with each coordinate separated by
   *          a comma. The API will generate an image to encompass all of the provided coordinates. </p>
   *          <note>
   *             <p>Cannot be used with <code>Zoom</code> and or <code>Radius</code>
   *             </p>
   *          </note>
   *          <p>Example: 97.170451,78.039098,99.045536,27.176178</p>
   * @public
   */
  BoundedPositions?: string | undefined;

  /**
   * <p>Takes in a pair of coordinates, [Lon, Lat], which becomes the center point of the image.
   *          This parameter requires that either zoom or radius is set.</p>
   *          <note>
   *             <p>Cannot be used with <code>Zoom</code> and or <code>Radius</code>
   *             </p>
   *          </note>
   *          <p>Example: 49.295,-123.108</p>
   * @public
   */
  Center?: string | undefined;

  /**
   * <p>Takes in a string to draw geometries on the image. The input is a comma separated format as follows format:
   *          <code>[Lon, Lat]</code>
   *          </p>
   *          <p>Example:
   *          <code>line:-122.407653,37.798557,-122.413291,37.802443;color=%23DD0000;width=7;outline-color=#00DD00;outline-width=5yd|point:-122.40572,37.80004;label=Fog Hill Market;size=large;text-color=%23DD0000;color=#EE4B2B</code>
   *          </p>
   *          <note>
   *             <p>Currently it supports the following geometry types: point, line and polygon. It does not support multiPoint , multiLine and multiPolgyon.</p>
   *          </note>
   * @public
   */
  CompactOverlay?: string | undefined;

  /**
   * <p>Takes in a string to draw geometries on the image. The input is a valid GeoJSON
   *          collection object. </p>
   *          <p>Example:
   *             <code>\{"type":"FeatureCollection","features": [\{"type":"Feature","geometry":\{"type":"MultiPoint","coordinates": [[-90.076345,51.504107],[-0.074451,51.506892]]\},"properties": \{"color":"#00DD00"\}\}]\}</code>
   *          </p>
   * @public
   */
  GeoJsonOverlay?: string | undefined;

  /**
   * <p>Specifies the height of the map image.</p>
   * @public
   */
  Height: number | undefined;

  /**
   * <p>Optional: The API key to be used for authorization. Either an API key or valid SigV4
   *          signature must be provided when making a request. </p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>Applies additional space (in pixels) around overlay feature to prevent them from being
   *          cut or obscured.</p>
   *          <note>
   *             <p>Value for max and min is determined by:</p>
   *             <p>Min: <code>1</code>
   *             </p>
   *             <p>Max: <code>min(height, width)/4</code>
   *             </p>
   *          </note>
   *          <p>Example: <code>100</code>
   *          </p>
   * @public
   */
  Padding?: number | undefined;

  /**
   * <p>Used with center parameter, it specifies the zoom of the image where you can control it
   *          on a granular level. Takes in any value <code>&gt;= 1</code>. </p>
   *          <p>Example: <code>1500</code>
   *          </p>
   *          <note>
   *             <p>Cannot be used with <code>Zoom</code>.</p>
   *          </note>
   *          <p>
   *             <b>Unit</b>: <code>Meters</code>
   *          </p>
   *          <p/>
   * @public
   */
  Radius?: number | undefined;

  /**
   * <p>The map scaling parameter to size the image, icons, and labels. It follows the pattern
   *          of <code>^map(@2x)?$</code>.</p>
   *          <p>Example: <code>map, map@2x</code>
   *          </p>
   * @public
   */
  FileName: string | undefined;

  /**
   * <p>Displays a scale on the bottom right of the map image with the unit specified in the
   *          input. </p>
   *          <p>Example: <code>KilometersMiles, Miles, Kilometers, MilesKilometers</code>
   *          </p>
   * @public
   */
  ScaleBarUnit?: ScaleBarUnit | undefined;

  /**
   * <p>Style specifies the desired map style for the <code>Style</code> APIs.</p>
   * @public
   */
  Style?: StaticMapStyle | undefined;

  /**
   * <p>Specifies the width of the map image.</p>
   * @public
   */
  Width: number | undefined;

  /**
   * <p>Specifies the zoom level of the map image.</p>
   *          <note>
   *             <p>Cannot be used with <code>Radius</code>.</p>
   *          </note>
   * @public
   */
  Zoom?: number | undefined;
}

/**
 * @public
 */
export interface GetStaticMapResponse {
  /**
   * <p>The blob represents a map image as a <code>jpeg</code> for
   *          the <code>GetStaticMap</code> API.</p>
   * @public
   */
  Blob?: Uint8Array | undefined;

  /**
   * <p>Header that represents the format of the response. The response returns the following as the HTTP body.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>Header that instructs caching configuration for the client.</p>
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * <p>The static map's Etag.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The pricing bucket for which the request is charged at.</p>
   * @public
   */
  PricingBucket: string | undefined;
}

/**
 * <p>The request processing has failed because of an unknown error, exception or failure.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by the Amazon Location service.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the resource.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  /**
   *     The input cannot be parsed. For example a required JSON document, ARN identifier,
   *     date value, or numeric field cannot be parsed.
   *
   */
  CANNOT_PARSE: "CannotParse",
  /**
   *     The input is present and parsable, but it is otherwise invalid. For example, a
   *     required numeric argument is outside the allowed range.
   *
   */
  FIELD_VALIDATION_FAILED: "FieldValidationFailed",
  /**
   * The required input is missing.
   */
  MISSING: "Missing",
  /**
   * The input is invalid but no more specific reason is applicable.
   */
  OTHER: "Other",
  /**
   * No such field is supported.
   */
  UNKNOWN_FIELD: "UnknownField",
  /**
   * No such operation is supported.
   */
  UNKNOWN_OPERATION: "UnknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The field where thebb invalid entry was detected.</p>
   * @public
   */
  Reason: ValidationExceptionReason | undefined;

  /**
   * <p>A message with the reason for the validation exception error.</p>
   * @public
   */
  FieldList: ValidationExceptionField[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
    this.FieldList = opts.FieldList;
  }
}

/**
 * @public
 */
export interface GetStyleDescriptorRequest {
  /**
   * <p>Style specifies the desired map style.</p>
   * @public
   */
  Style: MapStyle | undefined;

  /**
   * <p>Sets color tone for map such as dark and light for specific map styles. It applies to only vector map styles such as Standard and Monochrome.</p>
   *          <p>Example: <code>Light</code>
   *          </p>
   *          <p>Default value: <code>Light</code>
   *          </p>
   *          <note>
   *             <p>Valid values for ColorScheme are case sensitive.</p>
   *          </note>
   * @public
   */
  ColorScheme?: ColorScheme | undefined;

  /**
   * <p>Specifies the political view using ISO 3166-2 or ISO 3166-3 country code format.</p>
   *          <p>The following political views are currently supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ARG</code>: Argentina's view on the Southern Patagonian Ice Field and Tierra Del Fuego, including the Falkland Islands, South Georgia, and South Sandwich Islands</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EGY</code>: Egypt's view on Bir Tawil</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IND</code>: India's view on Gilgit-Baltistan</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KEN</code>: Kenya's view on the Ilemi Triangle</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MAR</code>: Morocco's view on Western Sahara</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PAK</code>: Pakistan's view on Jammu and Kashmir and the Junagadh Area</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUS</code>: Russia's view on Crimea</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SDN</code>: Sudan's view on the Halaib Triangle</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SRB</code>: Serbia's view on Kosovo, Vukovar, and Sarengrad Islands</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUR</code>: Suriname's view on the Courantyne Headwaters and Lawa Headwaters</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SYR</code>: Syria's view on the Golan Heights</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TUR</code>: Turkey's view on Cyprus and Northern Cyprus</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TZA</code>: Tanzania's view on Lake Malawi</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>URY</code>: Uruguay's view on Rincon de Artigas</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VNM</code>: Vietnam's view on the Paracel Islands and Spratly Islands</p>
   *             </li>
   *          </ul>
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * <p>Optional: The API key to be used for authorization. Either an API key or valid SigV4
   *          signature must be provided when making a request. </p>
   * @public
   */
  Key?: string | undefined;
}

/**
 * @public
 */
export interface GetStyleDescriptorResponse {
  /**
   * <p>This Blob contains the body of the style descriptor which is in application/json format.</p>
   * @public
   */
  Blob?: Uint8Array | undefined;

  /**
   * <p>Header that represents the format of the response. The response returns the following as the HTTP body.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>Header that instructs caching configuration for the client.</p>
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * <p>The style descriptor's Etag.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetTileRequest {
  /**
   * <p>Specifies the desired tile set.</p>
   *          <p>Valid Values: <code>raster.satellite | vector.basemap</code>
   *          </p>
   * @public
   */
  Tileset: string | undefined;

  /**
   * <p>The zoom value for the map tile.</p>
   * @public
   */
  Z: string | undefined;

  /**
   * <p>The X axis value for the map tile. Must be between 0 and 19.</p>
   * @public
   */
  X: string | undefined;

  /**
   * <p>The Y axis value for the map tile.</p>
   * @public
   */
  Y: string | undefined;

  /**
   * <p>Optional: The API key to be used for authorization. Either an API key or valid SigV4
   *          signature must be provided when making a request. </p>
   * @public
   */
  Key?: string | undefined;
}

/**
 * @public
 */
export interface GetTileResponse {
  /**
   * <p>The blob represents a vector tile in <code>mvt</code> format for the
   *             <code>GetTile</code> API.</p>
   * @public
   */
  Blob?: Uint8Array | undefined;

  /**
   * <p>Header that represents the format of the response. The response returns the following as the HTTP body.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>Header that instructs caching configuration for the client.</p>
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * <p>The pricing bucket for which the request is charged at.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The pricing bucket for which the request is charged at.</p>
   * @public
   */
  PricingBucket: string | undefined;
}

/**
 * @internal
 */
export const GetStaticMapRequestFilterSensitiveLog = (obj: GetStaticMapRequest): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetStyleDescriptorRequestFilterSensitiveLog = (obj: GetStyleDescriptorRequest): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetTileRequestFilterSensitiveLog = (obj: GetTileRequest): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
});
