/**
 * <p>Describes the client-specific data.</p>
 */
export interface _ClientData {
  /**
   * <p>A user-defined comment about the disk upload.</p>
   */
  Comment?: string;

  /**
   * <p>The time that the disk upload ends.</p>
   */
  UploadEnd?: Date | string | number;

  /**
   * <p>The size of the uploaded disk image, in GiB.</p>
   */
  UploadSize?: number;

  /**
   * <p>The time that the disk upload starts.</p>
   */
  UploadStart?: Date | string | number;
}

export interface _UnmarshalledClientData extends _ClientData {
  /**
   * <p>The time that the disk upload ends.</p>
   */
  UploadEnd?: Date;

  /**
   * <p>The time that the disk upload starts.</p>
   */
  UploadStart?: Date;
}
