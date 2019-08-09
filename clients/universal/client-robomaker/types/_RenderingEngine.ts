/**
 * <p>Information about a rendering engine.</p>
 */
export interface _RenderingEngine {
  /**
   * <p>The name of the rendering engine.</p>
   */
  name?: "OGRE" | string;

  /**
   * <p>The version of the rendering engine.</p>
   */
  version?: string;
}

export type _UnmarshalledRenderingEngine = _RenderingEngine;
