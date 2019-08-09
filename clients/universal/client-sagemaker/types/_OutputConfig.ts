/**
 * <p>Contains information about the output location for the compiled model and the device (target) that the model runs on.</p>
 */
export interface _OutputConfig {
  /**
   * <p>Identifies the S3 path where you want Amazon SageMaker to store the model artifacts. For example, s3://bucket-name/key-name-prefix.</p>
   */
  S3OutputLocation: string;

  /**
   * <p>Identifies the device that you want to run your model on after it has been compiled. For example: ml_c5.</p>
   */
  TargetDevice:
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
}

export type _UnmarshalledOutputConfig = _OutputConfig;
