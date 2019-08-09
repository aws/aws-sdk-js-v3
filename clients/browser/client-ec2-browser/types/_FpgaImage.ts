import { _PciId, _UnmarshalledPciId } from "./_PciId";
import {
  _FpgaImageState,
  _UnmarshalledFpgaImageState
} from "./_FpgaImageState";
import { _ProductCode, _UnmarshalledProductCode } from "./_ProductCode";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes an Amazon FPGA image (AFI).</p>
 */
export interface _FpgaImage {
  /**
   * <p>The FPGA image identifier (AFI ID).</p>
   */
  FpgaImageId?: string;

  /**
   * <p>The global FPGA image identifier (AGFI ID).</p>
   */
  FpgaImageGlobalId?: string;

  /**
   * <p>The name of the AFI.</p>
   */
  Name?: string;

  /**
   * <p>The description of the AFI.</p>
   */
  Description?: string;

  /**
   * <p>The version of the AWS Shell that was used to create the bitstream.</p>
   */
  ShellVersion?: string;

  /**
   * <p>Information about the PCI bus.</p>
   */
  PciId?: _PciId;

  /**
   * <p>Information about the state of the AFI.</p>
   */
  State?: _FpgaImageState;

  /**
   * <p>The date and time the AFI was created.</p>
   */
  CreateTime?: Date | string | number;

  /**
   * <p>The time of the most recent update to the AFI.</p>
   */
  UpdateTime?: Date | string | number;

  /**
   * <p>The AWS account ID of the AFI owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>The alias of the AFI owner. Possible values include <code>self</code>, <code>amazon</code>, and <code>aws-marketplace</code>.</p>
   */
  OwnerAlias?: string;

  /**
   * <p>The product codes for the AFI.</p>
   */
  ProductCodes?: Array<_ProductCode> | Iterable<_ProductCode>;

  /**
   * <p>Any tags assigned to the AFI.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>Indicates whether the AFI is public.</p>
   */
  Public?: boolean;

  /**
   * <p>Indicates whether data retention support is enabled for the AFI.</p>
   */
  DataRetentionSupport?: boolean;
}

export interface _UnmarshalledFpgaImage extends _FpgaImage {
  /**
   * <p>Information about the PCI bus.</p>
   */
  PciId?: _UnmarshalledPciId;

  /**
   * <p>Information about the state of the AFI.</p>
   */
  State?: _UnmarshalledFpgaImageState;

  /**
   * <p>The date and time the AFI was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The time of the most recent update to the AFI.</p>
   */
  UpdateTime?: Date;

  /**
   * <p>The product codes for the AFI.</p>
   */
  ProductCodes?: Array<_UnmarshalledProductCode>;

  /**
   * <p>Any tags assigned to the AFI.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
