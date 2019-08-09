/**
 * <p>A classifier for custom <code>CSV</code> content.</p>
 */
export interface _CsvClassifier {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string;

  /**
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date | string | number;

  /**
   * <p>The version of this classifier.</p>
   */
  Version?: number;

  /**
   * <p>A custom symbol to denote what separates each column entry in the row.</p>
   */
  Delimiter?: string;

  /**
   * <p>A custom symbol to denote what combines content into a single column value. It must be different from the column delimiter.</p>
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
   * <p>Specifies not to trim values before identifying the type of column values. The default value is <code>true</code>.</p>
   */
  DisableValueTrimming?: boolean;

  /**
   * <p>Enables the processing of files that contain only one column.</p>
   */
  AllowSingleColumn?: boolean;
}

export interface _UnmarshalledCsvClassifier extends _CsvClassifier {
  /**
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>A list of strings representing column names.</p>
   */
  Header?: Array<string>;
}
