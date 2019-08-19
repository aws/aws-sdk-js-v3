/**
 * <p>Provides summary information about an algorithm.</p>
 */
export interface _AlgorithmSummary {
  /**
   * <p>The name of the algorithm that is described by the summary.</p>
   */
  AlgorithmName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm.</p>
   */
  AlgorithmArn: string;

  /**
   * <p>A brief description of the algorithm.</p>
   */
  AlgorithmDescription?: string;

  /**
   * <p>A timestamp that shows when the algorithm was created.</p>
   */
  CreationTime: Date | string | number;

  /**
   * <p>The overall status of the algorithm.</p>
   */
  AlgorithmStatus:
    | "Pending"
    | "InProgress"
    | "Completed"
    | "Failed"
    | "Deleting"
    | string;
}

export interface _UnmarshalledAlgorithmSummary extends _AlgorithmSummary {
  /**
   * <p>A timestamp that shows when the algorithm was created.</p>
   */
  CreationTime: Date;
}
