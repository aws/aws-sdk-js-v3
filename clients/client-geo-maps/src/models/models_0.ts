// smithy-typescript generated code
import type {
  Buildings,
  ColorScheme,
  ContourDensity,
  LabelSize,
  MapFeatureMode,
  MapStyle,
  PoiCategory,
  PoiDensity,
  ScaleBarUnit,
  StaticMapStyle,
  Terrain,
  TileAdditionalFeature,
  Traffic,
  TravelMode,
  Variant,
} from "./enums";

/**
 * @public
 */
export interface GetGlyphsRequest {
  /**
   * Name of the `FontStack` to retrieve.
   *
   * Example: `Amazon Ember Bold,Noto Sans Bold`.
   *
   * The supported font stacks are as follows:
   *
   * - Amazon Ember Bold
   * - Amazon Ember Bold Italic
   * - Amazon Ember Bold,Noto Sans Bold
   * - Amazon Ember Bold,Noto Sans Bold,Noto Sans Arabic Bold
   * - Amazon Ember Condensed RC BdItalic
   * - Amazon Ember Condensed RC Bold
   * - Amazon Ember Condensed RC Bold Italic
   * - Amazon Ember Condensed RC Bold,Noto Sans Bold
   * - Amazon Ember Condensed RC Bold,Noto Sans Bold,Noto Sans Arabic Condensed Bold
   * - Amazon Ember Condensed RC Light
   * - Amazon Ember Condensed RC Light Italic
   * - Amazon Ember Condensed RC LtItalic
   * - Amazon Ember Condensed RC Regular
   * - Amazon Ember Condensed RC Regular Italic
   * - Amazon Ember Condensed RC Regular,Noto Sans Regular
   * - Amazon Ember Condensed RC Regular,Noto Sans Regular,Noto Sans Arabic Condensed Regular
   * - Amazon Ember Condensed RC RgItalic
   * - Amazon Ember Condensed RC ThItalic
   * - Amazon Ember Condensed RC Thin
   * - Amazon Ember Condensed RC Thin Italic
   * - Amazon Ember Heavy
   * - Amazon Ember Heavy Italic
   * - Amazon Ember Light
   * - Amazon Ember Light Italic
   * - Amazon Ember Medium
   * - Amazon Ember Medium Italic
   * - Amazon Ember Medium,Noto Sans Medium
   * - Amazon Ember Medium,Noto Sans Medium,Noto Sans Arabic Medium
   * - Amazon Ember Regular
   * - Amazon Ember Regular Italic
   * - Amazon Ember Regular Italic,Noto Sans Italic
   * - Amazon Ember Regular Italic,Noto Sans Italic,Noto Sans Arabic Regular
   * - Amazon Ember Regular,Noto Sans Regular
   * - Amazon Ember Regular,Noto Sans Regular,Noto Sans Arabic Regular
   * - Amazon Ember Thin
   * - Amazon Ember Thin Italic
   * - AmazonEmberCdRC_Bd
   * - AmazonEmberCdRC_BdIt
   * - AmazonEmberCdRC_Lt
   * - AmazonEmberCdRC_LtIt
   * - AmazonEmberCdRC_Rg
   * - AmazonEmberCdRC_RgIt
   * - AmazonEmberCdRC_Th
   * - AmazonEmberCdRC_ThIt
   * - AmazonEmber_Bd
   * - AmazonEmber_BdIt
   * - AmazonEmber_He
   * - AmazonEmber_HeIt
   * - AmazonEmber_Lt
   * - AmazonEmber_LtIt
   * - AmazonEmber_Md
   * - AmazonEmber_MdIt
   * - AmazonEmber_Rg
   * - AmazonEmber_RgIt
   * - AmazonEmber_Th
   * - AmazonEmber_ThIt
   * - Noto Sans Black
   * - Noto Sans Black Italic
   * - Noto Sans Bold
   * - Noto Sans Bold Italic
   * - Noto Sans Extra Bold
   * - Noto Sans Extra Bold Italic
   * - Noto Sans Extra Light
   * - Noto Sans Extra Light Italic
   * - Noto Sans Italic
   * - Noto Sans Light
   * - Noto Sans Light Italic
   * - Noto Sans Medium
   * - Noto Sans Medium Italic
   * - Noto Sans Regular
   * - Noto Sans Semi Bold
   * - Noto Sans Semi Bold Italic
   * - Noto Sans Thin
   * - Noto Sans Thin Italic
   * - NotoSans-Bold
   * - NotoSans-Italic
   * - NotoSans-Medium
   * - NotoSans-Regular
   * - Open Sans Regular,Arial Unicode MS Regular
   *
   * @public
   */
  FontStack: string | undefined;

  /**
   * A Unicode range of characters to download glyphs for. This must be aligned to multiples of 256.
   *
   * Example: `0-255.pbf`
   *
   * @public
   */
  FontUnicodeRange: string | undefined;
}

/**
 * @public
 */
export interface GetGlyphsResponse {
  /**
   * The Glyph, as a binary blob.
   *
   * @public
   */
  Blob?: Uint8Array | undefined;

  /**
   * Header that represents the format of the response. The response returns the following as the HTTP body.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * Header that instructs caching configuration for the client.
   *
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * The glyph's Etag.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetSpritesRequest {
  /**
   * `Sprites` API: The name of the sprite ﬁle to retrieve, following pattern `sprites(@2x)?\.(png|json)`.
   *
   * Example: `sprites.png`
   *
   * @public
   */
  FileName: string | undefined;

  /**
   * Style specifies the desired map style for the `Sprites` APIs.
   *
   * @public
   */
  Style: MapStyle | undefined;

  /**
   * Sets the color tone for the map sprites, such as dark and light.
   *
   * Example: `Light`
   *
   * Default value: `Light`
   *
   * > **Note:** Valid values for ColorScheme are case sensitive.
   *
   * @public
   */
  ColorScheme: ColorScheme | undefined;

  /**
   * Optimizes map styles for specific use case or industry. You can choose allowed variant only with Standard map style.
   *
   * Example: `Default`
   *
   * > **Note:** Valid values for Variant are case sensitive.
   *
   * @public
   */
  Variant: Variant | undefined;
}

/**
 * @public
 */
export interface GetSpritesResponse {
  /**
   * The body of the sprite sheet or JSON offset file (image/png or application/json, depending on input).
   *
   * @public
   */
  Blob?: Uint8Array | undefined;

  /**
   * Header that represents the format of the response. The response returns the following as the HTTP body.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * Header that instructs caching configuration for the client.
   *
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * The sprite's Etag.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetStaticMapRequest {
  /**
   * Takes in two pairs of coordinates in World Geodetic System (WGS 84) format: [longitude, latitude], denoting south-westerly and north-easterly edges of the image. The underlying area becomes the view of the image.
   *
   * Example: -123.17075,49.26959,-123.08125,49.31429
   *
   * @public
   */
  BoundingBox?: string | undefined;

  /**
   * Takes in two or more pair of coordinates in World Geodetic System (WGS 84) format: [longitude, latitude], with each coordinate separated by a comma. The API will generate an image to encompass all of the provided coordinates.
   *
   * > **Note:** Cannot be used with `Zoom` and or `Radius`
   *
   * Example: 97.170451,78.039098,99.045536,27.176178
   *
   * @public
   */
  BoundedPositions?: string | undefined;

  /**
   * Takes in a pair of coordinates in World Geodetic System (WGS 84) format: [longitude, latitude], which becomes the center point of the image. This parameter requires that either zoom or radius is set.
   *
   * > **Note:** Cannot be used with `Zoom` and or `Radius`
   *
   * Example: 49.295,-123.108
   *
   * @public
   */
  Center?: string | undefined;

  /**
   * Sets the color tone for the map, such as dark and light.
   *
   * Example: `Light`
   *
   * Default value: `Light`
   *
   * > **Note:** Valid values for `ColorScheme` are case sensitive.
   *
   * @public
   */
  ColorScheme?: ColorScheme | undefined;

  /**
   * Takes in a string to draw geometries on the image. The input is a comma separated format as follows format: `[Lon, Lat]`
   *
   * Example: `line:-122.407653,37.798557,-122.413291,37.802443;color=%23DD0000;width=7;outline-color=#00DD00;outline-width=5yd|point:-122.40572,37.80004;label=Fog Hill Market;size=large;text-color=%23DD0000;color=#EE4B2B`
   *
   * > **Note:** Currently it supports the following geometry types: point, line and polygon. It does not support multiPoint , multiLine and multiPolgyon.
   *
   * @public
   */
  CompactOverlay?: string | undefined;

  /**
   * It is a flag that takes in true or false. It prevents the labels that are on the edge of the image from being cut or obscured.
   *
   * @public
   */
  CropLabels?: boolean | undefined;

  /**
   * Takes in a string to draw geometries on the image. The input is a valid GeoJSON collection object.
   *
   * Example: `\{"type":"FeatureCollection","features": [\{"type":"Feature","geometry":\{"type":"MultiPoint","coordinates": [[-90.076345,51.504107],[-0.074451,51.506892]]\},"properties": \{"color":"#00DD00"\}\}]\}`
   *
   * @public
   */
  GeoJsonOverlay?: string | undefined;

  /**
   * Specifies the height of the map image.
   *
   * @public
   */
  Height: number | undefined;

  /**
   * Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * Overrides the label size auto-calculated by `FileName`. Takes in one of the values - `Small` or `Large`.
   *
   * @public
   */
  LabelSize?: LabelSize | undefined;

  /**
   * Specifies the language on the map labels using the BCP 47 language tag, limited to ISO 639-1 two-letter language codes. If the specified language data isn't available for the map image, the labels will default to the regional primary language.
   *
   * Supported codes:
   *
   * - `ar`
   * - `as`
   * - `az`
   * - `be`
   * - `bg`
   * - `bn`
   * - `bs`
   * - `ca`
   * - `cs`
   * - `cy`
   * - `da`
   * - `de`
   * - `el`
   * - `en`
   * - `es`
   * - `et`
   * - `eu`
   * - `fi`
   * - `fo`
   * - `fr`
   * - `ga`
   * - `gl`
   * - `gn`
   * - `gu`
   * - `he`
   * - `hi`
   * - `hr`
   * - `hu`
   * - `hy`
   * - `id`
   * - `is`
   * - `it`
   * - `ja`
   * - `ka`
   * - `kk`
   * - `km`
   * - `kn`
   * - `ko`
   * - `ky`
   * - `lt`
   * - `lv`
   * - `mk`
   * - `ml`
   * - `mr`
   * - `ms`
   * - `mt`
   * - `my`
   * - `nl`
   * - `no`
   * - `or`
   * - `pa`
   * - `pl`
   * - `pt`
   * - `ro`
   * - `ru`
   * - `sk`
   * - `sl`
   * - `sq`
   * - `sr`
   * - `sv`
   * - `ta`
   * - `te`
   * - `th`
   * - `tr`
   * - `uk`
   * - `uz`
   * - `vi`
   * - `zh`
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * Applies additional space (in pixels) around overlay feature to prevent them from being cut or obscured.
   *
   * > **Note:**
   * >
   * > Value for max and min is determined by:
   * >
   * > Min: `1`
   * >
   * > Max: `min(height, width)/4`
   *
   * Example: `100`
   *
   * @public
   */
  Padding?: number | undefined;

  /**
   * Specifies the political view, using ISO 3166-2 or ISO 3166-3 country code format.
   *
   * The following political views are currently supported:
   *
   * - `ARG`: Argentina's view on the Southern Patagonian Ice Field and Tierra Del Fuego, including the Falkland Islands, South Georgia, and South Sandwich Islands
   * - `EGY`: Egypt's view on Bir Tawil
   * - `IND`: India's view on Gilgit-Baltistan
   * - `KEN`: Kenya's view on the Ilemi Triangle
   * - `MAR`: Morocco's view on Western Sahara
   * - `RUS`: Russia's view on Crimea
   * - `SDN`: Sudan's view on the Halaib Triangle
   * - `SRB`: Serbia's view on Kosovo, Vukovar, and Sarengrad Islands
   * - `SUR`: Suriname's view on the Courantyne Headwaters and Lawa Headwaters
   * - `SYR`: Syria's view on the Golan Heights
   * - `TUR`: Turkey's view on Cyprus and Northern Cyprus
   * - `TZA`: Tanzania's view on Lake Malawi
   * - `URY`: Uruguay's view on Rincon de Artigas
   * - `VNM`: Vietnam's view on the Paracel Islands and Spratly Islands
   *
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * Determines if the result image will display icons representing points of interest on the map.
   *
   * @public
   */
  PointsOfInterests?: MapFeatureMode | undefined;

  /**
   * Used with center parameter, it specifies the zoom of the image where you can control it on a granular level. Takes in any value `>= 1`.
   *
   * Example: `1500`
   *
   * > **Note:** Cannot be used with `Zoom`.
   *
   * **Unit**: `Meters`
   *
   * @public
   */
  Radius?: number | undefined;

  /**
   * The map scaling parameter to size the image, icons, and labels. It follows the pattern of `^map(@2x)?$`.
   *
   * Example: `map, map@2x`
   *
   * @public
   */
  FileName: string | undefined;

  /**
   * Displays a scale on the bottom right of the map image with the unit specified in the input.
   *
   * Example: `KilometersMiles, Miles, Kilometers, MilesKilometers`
   *
   * @public
   */
  ScaleBarUnit?: ScaleBarUnit | undefined;

  /**
   * `Style` specifies the desired map style.
   *
   * @public
   */
  Style?: StaticMapStyle | undefined;

  /**
   * Specifies the width of the map image.
   *
   * @public
   */
  Width: number | undefined;

  /**
   * Specifies the zoom level of the map image.
   *
   * > **Note:** Cannot be used with `Radius`.
   *
   * @public
   */
  Zoom?: number | undefined;
}

/**
 * @public
 */
export interface GetStaticMapResponse {
  /**
   * The blob represents a map image as a `jpeg` for the `GetStaticMap` API.
   *
   * @public
   */
  Blob?: Uint8Array | undefined;

  /**
   * Header that represents the format of the response. The response returns the following as the HTTP body.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * Header that instructs caching configuration for the client.
   *
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * The static map's Etag.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The pricing bucket for which the request is charged at.
   *
   * @public
   */
  PricingBucket: string | undefined;
}

/**
 * The input fails to satisfy the constraints specified by the Amazon Location service.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the resource.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface GetStyleDescriptorRequest {
  /**
   * Style specifies the desired map style. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only the `Standard` and `Monochrome` values.
   *
   * @public
   */
  Style: MapStyle | undefined;

  /**
   * Sets the color tone for the map, such as dark and light.
   *
   * Example: `Light`
   *
   * Default value: `Light`
   *
   * > **Note:** Valid values for ColorScheme are case sensitive.
   *
   * @public
   */
  ColorScheme?: ColorScheme | undefined;

  /**
   * Specifies the political view using ISO 3166-2 or ISO 3166-3 country code format. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * The following political views are currently supported:
   *
   * - `ARG`: Argentina's view on the Southern Patagonian Ice Field and Tierra Del Fuego, including the Falkland Islands, South Georgia, and South Sandwich Islands
   * - `EGY`: Egypt's view on Bir Tawil
   * - `IND`: India's view on Gilgit-Baltistan
   * - `KEN`: Kenya's view on the Ilemi Triangle
   * - `MAR`: Morocco's view on Western Sahara
   * - `RUS`: Russia's view on Crimea
   * - `SDN`: Sudan's view on the Halaib Triangle
   * - `SRB`: Serbia's view on Kosovo, Vukovar, and Sarengrad Islands
   * - `SUR`: Suriname's view on the Courantyne Headwaters and Lawa Headwaters
   * - `SYR`: Syria's view on the Golan Heights
   * - `TUR`: Turkey's view on Cyprus and Northern Cyprus
   * - `TZA`: Tanzania's view on Lake Malawi
   * - `URY`: Uruguay's view on Rincon de Artigas
   * - `VNM`: Vietnam's view on the Paracel Islands and Spratly Islands
   *
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * Adjusts how physical terrain details are rendered on the map. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * The following terrain styles are currently supported:
   *
   * - `Hillshade`: Displays the physical terrain details through shading and highlighting of elevation change and geographic features.
   * - `Terrain3D`: Displays physical terrain details and elevations as a three-dimensional model.
   *
   * `Hillshade` is valid only for the `Standard` and `Monochrome` map styles.
   *
   * @public
   */
  Terrain?: Terrain | undefined;

  /**
   * Displays the shape and steepness of terrain features using elevation lines. The density value controls how densely the available contour line information is rendered on the map. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * This parameter is valid for all map styles except `Satellite`.
   *
   * @public
   */
  ContourDensity?: ContourDensity | undefined;

  /**
   * Displays real-time traffic information overlay on map, such as incident events and flow events. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * This parameter is valid for all map styles except `Satellite`.
   *
   * @public
   */
  Traffic?: Traffic | undefined;

  /**
   * Renders additional map information relevant to selected travel modes. Information for multiple travel modes can be displayed simultaneously, although this increases the overall information density rendered on the map. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * This parameter is valid for all map styles except `Satellite`.
   *
   * @public
   */
  TravelModes?: TravelMode[] | undefined;

  /**
   * Adjusts how building details are rendered on the map.
   *
   * The following building styles are currently supported:
   *
   * - `Buildings3D`: Displays buildings as three-dimensional extrusions on the map.
   *
   * `Buildings3D` is valid only for the `Standard` and `Monochrome` map styles.
   *
   * @public
   */
  Buildings?: Buildings | undefined;

  /**
   * Controls how densely points of interest are rendered on the map. The density value controls the zoom level at which each category of points of interest appears, and how quickly less prominent points of interest are revealed as you zoom in. Denser values display more points of interest at lower zoom levels.
   *
   * Use `Off` to hide all points of interest. When you omit this parameter, the map renders at `Default` density.
   *
   * > **Note:** The difference between density values is most noticeable at mid-range zoom levels. At high zoom levels, all density values converge on displaying every available point of interest.
   *
   * This parameter is valid only for the `Standard` and `Hybrid` map styles. In `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, this parameter is valid only for the `Standard` map style.
   *
   * @public
   */
  PoiDensity?: PoiDensity | undefined;

  /**
   * Renders only the specified categories of points of interest. When you omit this parameter, the map renders all categories.
   *
   * The following categories are currently supported:
   *
   * - `FoodAndDrink`
   * - `Entertainment`
   * - `SightsAndMuseums`
   * - `Transportation`
   * - `Accommodations`
   * - `LeisureAndOutdoor`
   * - `Shopping`
   * - `BusinessAndServices`
   * - `FacilitiesAndBuildings`
   *
   * Specify each category as a separate `poi-categories` query parameter. Duplicate values are rejected.
   *
   * > **Note:** This parameter has no effect when `poi-density` is set to `Off`, which hides all points of interest regardless of category.
   *
   * This parameter is valid only for the `Standard` and `Hybrid` map styles. In `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, this parameter is valid only for the `Standard` map style.
   *
   * @public
   */
  PoiCategories?: PoiCategory[] | undefined;

  /**
   * Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * @public
 */
export interface GetStyleDescriptorResponse {
  /**
   * This Blob contains the body of the style descriptor which is in application/json format.
   *
   * @public
   */
  Blob?: Uint8Array | undefined;

  /**
   * Header that represents the format of the response. The response returns the following as the HTTP body.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * Header that instructs caching configuration for the client.
   *
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * The style descriptor's Etag.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetTileRequest {
  /**
   * A list of optional additional parameters such as map styles that can be requested for each result. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  AdditionalFeatures?: TileAdditionalFeature[] | undefined;

  /**
   * Specifies the desired tile set. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only the `vector.basemap` value.
   *
   * Valid Values: `raster.satellite | vector.basemap | vector.traffic | raster.dem`
   *
   * @public
   */
  Tileset: string | undefined;

  /**
   * The zoom value for the map tile.
   *
   * @public
   */
  Z: string | undefined;

  /**
   * The X axis value for the map tile.
   *
   * @public
   */
  X: string | undefined;

  /**
   * The Y axis value for the map tile.
   *
   * @public
   */
  Y: string | undefined;

  /**
   * Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * @public
 */
export interface GetTileResponse {
  /**
   * The blob represents a vector tile in `mvt` or a raster tile in an image format.
   *
   * @public
   */
  Blob?: Uint8Array | undefined;

  /**
   * Header that represents the format of the response. The response returns the following as the HTTP body.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * Header that instructs caching configuration for the client.
   *
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * The pricing bucket for which the request is charged at.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The pricing bucket for which the request is charged at.
   *
   * @public
   */
  PricingBucket: string | undefined;
}
