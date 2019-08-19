/**
 * <p>Describes a product code.</p>
 */
export interface _ProductCode {
  /**
   * <p>The product code.</p>
   */
  ProductCodeId?: string;

  /**
   * <p>The type of product code.</p>
   */
  ProductCodeType?: "devpay" | "marketplace" | string;
}

export type _UnmarshalledProductCode = _ProductCode;
