import { Application } from "typedoc";

import { SdkTheme } from "./theme";

export function load(app: Application) {
  // Core doc generator theme for the SDK.
  app.renderer.defineTheme("sdk", SdkTheme);
}
