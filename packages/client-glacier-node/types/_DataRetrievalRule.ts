/**
 * <p>Data retrieval policy rule.</p>
 */
export interface _DataRetrievalRule {
  /**
   * <p>The type of data retrieval policy to set.</p> <p>Valid values: BytesPerHour|FreeTier|None</p>
   */
  Strategy?: string;

  /**
   * <p>The maximum number of bytes that can be retrieved in an hour.</p> <p>This field is required only if the value of the Strategy field is <code>BytesPerHour</code>. Your PUT operation will be rejected if the Strategy field is not set to <code>BytesPerHour</code> and you set this field.</p>
   */
  BytesPerHour?: number;
}

export type _UnmarshalledDataRetrievalRule = _DataRetrievalRule;
