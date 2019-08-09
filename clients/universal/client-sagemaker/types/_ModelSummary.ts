/**
 * <p>Provides summary information about a model.</p>
 */
export interface _ModelSummary {
  /**
   * <p>The name of the model that you want a summary for.</p>
   */
  ModelName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelArn: string;

  /**
   * <p>A timestamp that indicates when the model was created.</p>
   */
  CreationTime: Date | string | number;
}

export interface _UnmarshalledModelSummary extends _ModelSummary {
  /**
   * <p>A timestamp that indicates when the model was created.</p>
   */
  CreationTime: Date;
}
