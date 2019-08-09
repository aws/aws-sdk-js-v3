/**
 * <p>The constraints that you want all returned products to match.</p>
 */
export interface _Filter {
  /**
   * <p>The type of filter that you want to use.</p> <p>Valid values are: <code>TERM_MATCH</code>. <code>TERM_MATCH</code> returns only products that match both the given filter field and the given value.</p>
   */
  Type: "TERM_MATCH" | string;

  /**
   * <p>The product metadata field that you want to filter on. You can filter by just the service code to see all products for a specific service, filter by just the attribute name to see a specific attribute for multiple services, or use both a service code and an attribute name to retrieve only products that match both fields.</p> <p>Valid values include: <code>ServiceCode</code>, and all attribute names</p> <p>For example, you can filter by the <code>AmazonEC2</code> service code and the <code>volumeType</code> attribute name to get the prices for only Amazon EC2 volumes.</p>
   */
  Field: string;

  /**
   * <p>The service code or attribute value that you want to filter by. If you are filtering by service code this is the actual service code, such as <code>AmazonEC2</code>. If you are filtering by attribute name, this is the attribute value that you want the returned products to match, such as a <code>Provisioned IOPS</code> volume.</p>
   */
  Value: string;
}

export type _UnmarshalledFilter = _Filter;
