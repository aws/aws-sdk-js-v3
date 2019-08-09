/**
 * <p>The statistics for a field calculated in the request.</p>
 */
export interface _FieldStats {
  /**
   * <p>The minimum value found in the specified field in the result set.</p> <p>If the field is numeric (<code>int</code>, <code>int-array</code>, <code>double</code>, or <code>double-array</code>), <code>min</code> is the string representation of a double-precision 64-bit floating point value. If the field is <code>date</code> or <code>date-array</code>, <code>min</code> is the string representation of a date with the format specified in <a href="http://tools.ietf.org/html/rfc3339">IETF RFC3339</a>: yyyy-mm-ddTHH:mm:ss.SSSZ.</p>
   */
  min?: string;

  /**
   * <p>The maximum value found in the specified field in the result set.</p> <p>If the field is numeric (<code>int</code>, <code>int-array</code>, <code>double</code>, or <code>double-array</code>), <code>max</code> is the string representation of a double-precision 64-bit floating point value. If the field is <code>date</code> or <code>date-array</code>, <code>max</code> is the string representation of a date with the format specified in <a href="http://tools.ietf.org/html/rfc3339">IETF RFC3339</a>: yyyy-mm-ddTHH:mm:ss.SSSZ.</p>
   */
  max?: string;

  /**
   * <p>The number of documents that contain a value in the specified field in the result set.</p>
   */
  count?: number;

  /**
   * <p>The number of documents that do not contain a value in the specified field in the result set.</p>
   */
  missing?: number;

  /**
   * <p>The sum of the field values across the documents in the result set. <code>null</code> for date fields.</p>
   */
  sum?: number;

  /**
   * <p>The sum of all field values in the result set squared.</p>
   */
  sumOfSquares?: number;

  /**
   * <p>The average of the values found in the specified field in the result set.</p> <p>If the field is numeric (<code>int</code>, <code>int-array</code>, <code>double</code>, or <code>double-array</code>), <code>mean</code> is the string representation of a double-precision 64-bit floating point value. If the field is <code>date</code> or <code>date-array</code>, <code>mean</code> is the string representation of a date with the format specified in <a href="http://tools.ietf.org/html/rfc3339">IETF RFC3339</a>: yyyy-mm-ddTHH:mm:ss.SSSZ.</p>
   */
  mean?: string;

  /**
   * <p>The standard deviation of the values in the specified field in the result set.</p>
   */
  stddev?: number;
}

export type _UnmarshalledFieldStats = _FieldStats;
