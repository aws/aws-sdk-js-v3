/**
 * <p>Specifies a custom CSV classifier for <code>CreateClassifier</code> to create.</p>
 */
export interface _CreateCsvClassifierRequest {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string;

  /**
   * <p>A custom symbol to denote what separates each column entry in the row.</p>
   */
  Delimiter?: string;

  /**
   * <p>A custom symbol to denote what combines content into a single column value. Must be different from the column delimiter.</p>
   */
  QuoteSymbol?: string;

  /**
   * <p>Indicates whether the CSV file contains a header.</p>
   */
  ContainsHeader?: "UNKNOWN" | "PRESENT" | "ABSENT" | string;

  /**
   * <p>A list of strings representing column names.</p>
   */
  Header?: Array<string> | Iterable<string>;

  /**
   * <p>Specifies not to trim values before identifying the type of column values. The default value is true.</p>
   */
  DisableValueTrimming?: boolean;

  /**
   * <p>Enables the processing of files that contain only one column.</p>
   */
  AllowSingleColumn?: boolean;
}

export interface _UnmarshalledCreateCsvClassifierRequest
  extends _CreateCsvClassifierRequest {
  /**
   * <p>A list of strings representing column names.</p>
   */
  Header?: Array<string>;
}
