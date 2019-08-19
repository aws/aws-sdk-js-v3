/**
 * <p>An object representing an Amazon ECR image layer.</p>
 */
export interface _Layer {
  /**
   * <p>The <code>sha256</code> digest of the image layer.</p>
   */
  layerDigest?: string;

  /**
   * <p>The availability status of the image layer.</p>
   */
  layerAvailability?: "AVAILABLE" | "UNAVAILABLE" | string;

  /**
   * <p>The size, in bytes, of the image layer.</p>
   */
  layerSize?: number;

  /**
   * <p>The media type of the layer, such as <code>application/vnd.docker.image.rootfs.diff.tar.gzip</code> or <code>application/vnd.oci.image.layer.v1.tar+gzip</code>.</p>
   */
  mediaType?: string;
}

export type _UnmarshalledLayer = _Layer;
