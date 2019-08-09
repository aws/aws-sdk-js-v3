import {
  _LoadPermission,
  _UnmarshalledLoadPermission
} from "./_LoadPermission";
import { _ProductCode, _UnmarshalledProductCode } from "./_ProductCode";

/**
 * <p>Describes an Amazon FPGA image (AFI) attribute.</p>
 */
export interface _FpgaImageAttribute {
  /**
   * <p>The ID of the AFI.</p>
   */
  FpgaImageId?: string;

  /**
   * <p>The name of the AFI.</p>
   */
  Name?: string;

  /**
   * <p>The description of the AFI.</p>
   */
  Description?: string;

  /**
   * <p>The load permissions.</p>
   */
  LoadPermissions?: Array<_LoadPermission> | Iterable<_LoadPermission>;

  /**
   * <p>The product codes.</p>
   */
  ProductCodes?: Array<_ProductCode> | Iterable<_ProductCode>;
}

export interface _UnmarshalledFpgaImageAttribute extends _FpgaImageAttribute {
  /**
   * <p>The load permissions.</p>
   */
  LoadPermissions?: Array<_UnmarshalledLoadPermission>;

  /**
   * <p>The product codes.</p>
   */
  ProductCodes?: Array<_UnmarshalledProductCode>;
}
