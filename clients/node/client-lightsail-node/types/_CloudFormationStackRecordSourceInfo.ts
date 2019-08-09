/**
 * <p>Describes the source of a CloudFormation stack record (i.e., the export snapshot record).</p>
 */
export interface _CloudFormationStackRecordSourceInfo {
  /**
   * <p>The Lightsail resource type (e.g., <code>ExportSnapshotRecord</code>).</p>
   */
  resourceType?: "ExportSnapshotRecord" | string;

  /**
   * <p>The name of the record.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the export snapshot record.</p>
   */
  arn?: string;
}

export type _UnmarshalledCloudFormationStackRecordSourceInfo = _CloudFormationStackRecordSourceInfo;
