/**
 * <p>Provides summary information about a model package.</p>
 */
export interface _ModelPackageSummary {
  /**
   * <p>The name of the model package.</p>
   */
  ModelPackageName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn: string;

  /**
   * <p>A brief description of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>A timestamp that shows when the model package was created.</p>
   */
  CreationTime: Date | string | number;

  /**
   * <p>The overall status of the model package.</p>
   */
  ModelPackageStatus:
    | "Pending"
    | "InProgress"
    | "Completed"
    | "Failed"
    | "Deleting"
    | string;
}

export interface _UnmarshalledModelPackageSummary extends _ModelPackageSummary {
  /**
   * <p>A timestamp that shows when the model package was created.</p>
   */
  CreationTime: Date;
}
