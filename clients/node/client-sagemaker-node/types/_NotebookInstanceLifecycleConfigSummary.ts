/**
 * <p>Provides a summary of a notebook instance lifecycle configuration.</p>
 */
export interface _NotebookInstanceLifecycleConfigSummary {
  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigArn: string;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was created.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was last modified.</p>
   */
  LastModifiedTime?: Date | string | number;
}

export interface _UnmarshalledNotebookInstanceLifecycleConfigSummary
  extends _NotebookInstanceLifecycleConfigSummary {
  /**
   * <p>A timestamp that tells when the lifecycle configuration was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was last modified.</p>
   */
  LastModifiedTime?: Date;
}
