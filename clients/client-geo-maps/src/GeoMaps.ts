// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { GetGlyphsCommand, GetGlyphsCommandInput, GetGlyphsCommandOutput } from "./commands/GetGlyphsCommand";
import { GetSpritesCommand, GetSpritesCommandInput, GetSpritesCommandOutput } from "./commands/GetSpritesCommand";
import {
  GetStaticMapCommand,
  GetStaticMapCommandInput,
  GetStaticMapCommandOutput,
} from "./commands/GetStaticMapCommand";
import {
  GetStyleDescriptorCommand,
  GetStyleDescriptorCommandInput,
  GetStyleDescriptorCommandOutput,
} from "./commands/GetStyleDescriptorCommand";
import { GetTileCommand, GetTileCommandInput, GetTileCommandOutput } from "./commands/GetTileCommand";
import { GeoMapsClient } from "./GeoMapsClient";

const commands = {
  GetGlyphsCommand,
  GetSpritesCommand,
  GetStaticMapCommand,
  GetStyleDescriptorCommand,
  GetTileCommand,
};

export interface GeoMaps {
  /**
   * @see {@link GetGlyphsCommand}
   */
  getGlyphs(args: GetGlyphsCommandInput, options?: __HttpHandlerOptions): Promise<GetGlyphsCommandOutput>;
  getGlyphs(args: GetGlyphsCommandInput, cb: (err: any, data?: GetGlyphsCommandOutput) => void): void;
  getGlyphs(
    args: GetGlyphsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGlyphsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSpritesCommand}
   */
  getSprites(args: GetSpritesCommandInput, options?: __HttpHandlerOptions): Promise<GetSpritesCommandOutput>;
  getSprites(args: GetSpritesCommandInput, cb: (err: any, data?: GetSpritesCommandOutput) => void): void;
  getSprites(
    args: GetSpritesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSpritesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStaticMapCommand}
   */
  getStaticMap(args: GetStaticMapCommandInput, options?: __HttpHandlerOptions): Promise<GetStaticMapCommandOutput>;
  getStaticMap(args: GetStaticMapCommandInput, cb: (err: any, data?: GetStaticMapCommandOutput) => void): void;
  getStaticMap(
    args: GetStaticMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStaticMapCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStyleDescriptorCommand}
   */
  getStyleDescriptor(
    args: GetStyleDescriptorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStyleDescriptorCommandOutput>;
  getStyleDescriptor(
    args: GetStyleDescriptorCommandInput,
    cb: (err: any, data?: GetStyleDescriptorCommandOutput) => void
  ): void;
  getStyleDescriptor(
    args: GetStyleDescriptorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStyleDescriptorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTileCommand}
   */
  getTile(args: GetTileCommandInput, options?: __HttpHandlerOptions): Promise<GetTileCommandOutput>;
  getTile(args: GetTileCommandInput, cb: (err: any, data?: GetTileCommandOutput) => void): void;
  getTile(
    args: GetTileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTileCommandOutput) => void
  ): void;
}

/**
 * <p> Integrate high-quality base map data into your applications using <a href="https://maplibre.org">MapLibre</a>. Capabilities include: </p> <ul> <li> <p>Access to comprehensive base map data, allowing you to tailor the map display to your specific needs.</p> </li> <li> <p>Multiple pre-designed map styles suited for various application types, such as navigation, logistics, or data visualization.</p> </li> <li> <p>Generation of static map images for scenarios where interactive maps aren't suitable, such as:</p> <ul> <li> <p>Embedding in emails or documents</p> </li> <li> <p>Displaying in low-bandwidth environments</p> </li> <li> <p>Creating printable maps</p> </li> <li> <p>Enhancing application performance by reducing client-side rendering</p> </li> </ul> </li> </ul>
 * @public
 */
export class GeoMaps extends GeoMapsClient implements GeoMaps {}
createAggregatedClient(commands, GeoMaps);
