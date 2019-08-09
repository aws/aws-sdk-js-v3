/**
 * <p>Describes a filter.</p>
 */
export interface _DocumentFilter {
  /**
   * <p>The name of the filter.</p>
   */
  key: "Name" | "Owner" | "PlatformTypes" | "DocumentType" | string;

  /**
   * <p>The value of the filter.</p>
   */
  value: string;
}

export type _UnmarshalledDocumentFilter = _DocumentFilter;
