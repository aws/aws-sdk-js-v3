/**
 * <p>Defines a mapping.</p>
 */
export interface _MappingEntry {
  /**
   * <p>The name of the source table.</p>
   */
  SourceTable?: string;

  /**
   * <p>The source path.</p>
   */
  SourcePath?: string;

  /**
   * <p>The source type.</p>
   */
  SourceType?: string;

  /**
   * <p>The target table.</p>
   */
  TargetTable?: string;

  /**
   * <p>The target path.</p>
   */
  TargetPath?: string;

  /**
   * <p>The target type.</p>
   */
  TargetType?: string;
}

export type _UnmarshalledMappingEntry = _MappingEntry;
