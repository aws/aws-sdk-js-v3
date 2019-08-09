/**
 * <p>A summary of a model compilation job.</p>
 */
export interface _CompilationJobSummary {
  /**
   * <p>The name of the model compilation job that you want a summary for.</p>
   */
  CompilationJobName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the model compilation job.</p>
   */
  CompilationJobArn: string;

  /**
   * <p>The time when the model compilation job was created.</p>
   */
  CreationTime: Date | string | number;

  /**
   * <p>The time when the model compilation job started.</p>
   */
  CompilationStartTime?: Date | string | number;

  /**
   * <p>The time when the model compilation job completed.</p>
   */
  CompilationEndTime?: Date | string | number;

  /**
   * <p>The type of device that the model will run on after compilation has completed.</p>
   */
  CompilationTargetDevice:
    | "lambda"
    | "ml_m4"
    | "ml_m5"
    | "ml_c4"
    | "ml_c5"
    | "ml_p2"
    | "ml_p3"
    | "jetson_tx1"
    | "jetson_tx2"
    | "jetson_nano"
    | "rasp3b"
    | "deeplens"
    | "rk3399"
    | "rk3288"
    | "sbe_c"
    | string;

  /**
   * <p>The time when the model compilation job was last modified.</p>
   */
  LastModifiedTime?: Date | string | number;

  /**
   * <p>The status of the model compilation job.</p>
   */
  CompilationJobStatus:
    | "INPROGRESS"
    | "COMPLETED"
    | "FAILED"
    | "STARTING"
    | "STOPPING"
    | "STOPPED"
    | string;
}

export interface _UnmarshalledCompilationJobSummary
  extends _CompilationJobSummary {
  /**
   * <p>The time when the model compilation job was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>The time when the model compilation job started.</p>
   */
  CompilationStartTime?: Date;

  /**
   * <p>The time when the model compilation job completed.</p>
   */
  CompilationEndTime?: Date;

  /**
   * <p>The time when the model compilation job was last modified.</p>
   */
  LastModifiedTime?: Date;
}
