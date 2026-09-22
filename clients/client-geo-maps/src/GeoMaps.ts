// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import { type GetGlyphsCommandInput, type GetGlyphsCommandOutput, GetGlyphsCommand } from "./commands/GetGlyphsCommand";
import {
  type GetSpritesCommandInput,
  type GetSpritesCommandOutput,
  GetSpritesCommand,
} from "./commands/GetSpritesCommand";
import {
  type GetStaticMapCommandInput,
  type GetStaticMapCommandOutput,
  GetStaticMapCommand,
} from "./commands/GetStaticMapCommand";
import {
  type GetStyleDescriptorCommandInput,
  type GetStyleDescriptorCommandOutput,
  GetStyleDescriptorCommand,
} from "./commands/GetStyleDescriptorCommand";
import { type GetTileCommandInput, type GetTileCommandOutput, GetTileCommand } from "./commands/GetTileCommand";
import { GeoMapsClient } from "./GeoMapsClient";

const commands = {
  GetGlyphsCommand,
  GetSpritesCommand,
  GetStaticMapCommand,
  GetStyleDescriptorCommand,
  GetTileCommand,
};

/**
 * @public
 */
export interface GeoMapsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface GeoMaps {
  /**
   * @see {@link GetGlyphsCommand}
   */
  getGlyphs(
    args: GetGlyphsCommandInput,
    options?: GeoMapsRequestOptions
  ): Promise<GetGlyphsCommandOutput>;
  getGlyphs(
    args: GetGlyphsCommandInput,
    cb: (err: any, data?: GetGlyphsCommandOutput) => void
  ): void;
  getGlyphs(
    args: GetGlyphsCommandInput,
    options: GeoMapsRequestOptions,
    cb: (err: any, data?: GetGlyphsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSpritesCommand}
   */
  getSprites(
    args: GetSpritesCommandInput,
    options?: GeoMapsRequestOptions
  ): Promise<GetSpritesCommandOutput>;
  getSprites(
    args: GetSpritesCommandInput,
    cb: (err: any, data?: GetSpritesCommandOutput) => void
  ): void;
  getSprites(
    args: GetSpritesCommandInput,
    options: GeoMapsRequestOptions,
    cb: (err: any, data?: GetSpritesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStaticMapCommand}
   */
  getStaticMap(
    args: GetStaticMapCommandInput,
    options?: GeoMapsRequestOptions
  ): Promise<GetStaticMapCommandOutput>;
  getStaticMap(
    args: GetStaticMapCommandInput,
    cb: (err: any, data?: GetStaticMapCommandOutput) => void
  ): void;
  getStaticMap(
    args: GetStaticMapCommandInput,
    options: GeoMapsRequestOptions,
    cb: (err: any, data?: GetStaticMapCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStyleDescriptorCommand}
   */
  getStyleDescriptor(
    args: GetStyleDescriptorCommandInput,
    options?: GeoMapsRequestOptions
  ): Promise<GetStyleDescriptorCommandOutput>;
  getStyleDescriptor(
    args: GetStyleDescriptorCommandInput,
    cb: (err: any, data?: GetStyleDescriptorCommandOutput) => void
  ): void;
  getStyleDescriptor(
    args: GetStyleDescriptorCommandInput,
    options: GeoMapsRequestOptions,
    cb: (err: any, data?: GetStyleDescriptorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTileCommand}
   */
  getTile(
    args: GetTileCommandInput,
    options?: GeoMapsRequestOptions
  ): Promise<GetTileCommandOutput>;
  getTile(
    args: GetTileCommandInput,
    cb: (err: any, data?: GetTileCommandOutput) => void
  ): void;
  getTile(
    args: GetTileCommandInput,
    options: GeoMapsRequestOptions,
    cb: (err: any, data?: GetTileCommandOutput) => void
  ): void;
}

/**
 * <p> Integrate high-quality base map data into your applications using <a href="https://maplibre.org">MapLibre</a>. Capabilities include: </p> <ul> <li> <p>Access to comprehensive base map data, allowing you to tailor the map display to your specific needs. See <a href="https://docs.aws.amazon.com/location/latest/APIReference/API_geomaps_GetTile.html">GetTile</a>.</p> </li> <li> <p>Multiple pre-designed map styles suited for various application types, such as navigation, logistics, or data visualization. See <a href="https://docs.aws.amazon.com/location/latest/APIReference/API_geomaps_GetStyleDescriptor.html">GetStyleDescriptor</a>.</p> </li> <li> <p>Generation of static map images for scenarios where interactive maps aren't suitable. See <a href="https://docs.aws.amazon.com/location/latest/APIReference/API_geomaps_GetStaticMap.html">GetStaticMap</a>. Use cases include:</p> <ul> <li> <p>Embedding in emails or documents</p> </li> <li> <p>Displaying in low-bandwidth environments</p> </li> <li> <p>Creating printable maps</p> </li> <li> <p>Enhancing application performance by reducing client-side rendering</p> </li> </ul> </li> </ul>
 * @public
 */
export class GeoMaps extends GeoMapsClient implements GeoMaps {}
createAggregatedClient(commands, GeoMaps);
