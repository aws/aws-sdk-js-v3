/**
 * <p>Represents metadata about a patch.</p>
 */
export interface _Patch {
  /**
   * <p>The ID of the patch (this is different than the Microsoft Knowledge Base ID).</p>
   */
  Id?: string;

  /**
   * <p>The date the patch was released.</p>
   */
  ReleaseDate?: Date | string | number;

  /**
   * <p>The title of the patch.</p>
   */
  Title?: string;

  /**
   * <p>The description of the patch.</p>
   */
  Description?: string;

  /**
   * <p>The URL where more information can be obtained about the patch.</p>
   */
  ContentUrl?: string;

  /**
   * <p>The name of the vendor providing the patch.</p>
   */
  Vendor?: string;

  /**
   * <p>The product family the patch is applicable for (for example, Windows).</p>
   */
  ProductFamily?: string;

  /**
   * <p>The specific product the patch is applicable for (for example, WindowsServer2016).</p>
   */
  Product?: string;

  /**
   * <p>The classification of the patch (for example, SecurityUpdates, Updates, CriticalUpdates).</p>
   */
  Classification?: string;

  /**
   * <p>The severity of the patch (for example Critical, Important, Moderate).</p>
   */
  MsrcSeverity?: string;

  /**
   * <p>The Microsoft Knowledge Base ID of the patch.</p>
   */
  KbNumber?: string;

  /**
   * <p>The ID of the MSRC bulletin the patch is related to.</p>
   */
  MsrcNumber?: string;

  /**
   * <p>The language of the patch if it's language-specific.</p>
   */
  Language?: string;
}

export interface _UnmarshalledPatch extends _Patch {
  /**
   * <p>The date the patch was released.</p>
   */
  ReleaseDate?: Date;
}
