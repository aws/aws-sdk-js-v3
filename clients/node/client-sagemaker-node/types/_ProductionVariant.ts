/**
 * <p>Identifies a model that you want to host and the resources to deploy for hosting it. If you are deploying multiple models, tell Amazon SageMaker how to distribute traffic among the models by specifying variant weights. </p>
 */
export interface _ProductionVariant {
  /**
   * <p>The name of the production variant.</p>
   */
  VariantName: string;

  /**
   * <p>The name of the model that you want to host. This is the name that you specified when creating the model.</p>
   */
  ModelName: string;

  /**
   * <p>Number of instances to launch initially.</p>
   */
  InitialInstanceCount: number;

  /**
   * <p>The ML compute instance type.</p>
   */
  InstanceType:
    | "ml.t2.medium"
    | "ml.t2.large"
    | "ml.t2.xlarge"
    | "ml.t2.2xlarge"
    | "ml.m4.xlarge"
    | "ml.m4.2xlarge"
    | "ml.m4.4xlarge"
    | "ml.m4.10xlarge"
    | "ml.m4.16xlarge"
    | "ml.m5.large"
    | "ml.m5.xlarge"
    | "ml.m5.2xlarge"
    | "ml.m5.4xlarge"
    | "ml.m5.12xlarge"
    | "ml.m5.24xlarge"
    | "ml.c4.large"
    | "ml.c4.xlarge"
    | "ml.c4.2xlarge"
    | "ml.c4.4xlarge"
    | "ml.c4.8xlarge"
    | "ml.p2.xlarge"
    | "ml.p2.8xlarge"
    | "ml.p2.16xlarge"
    | "ml.p3.2xlarge"
    | "ml.p3.8xlarge"
    | "ml.p3.16xlarge"
    | "ml.c5.large"
    | "ml.c5.xlarge"
    | "ml.c5.2xlarge"
    | "ml.c5.4xlarge"
    | "ml.c5.9xlarge"
    | "ml.c5.18xlarge"
    | string;

  /**
   * <p>Determines initial traffic distribution among all of the models that you specify in the endpoint configuration. The traffic to a production variant is determined by the ratio of the <code>VariantWeight</code> to the sum of all <code>VariantWeight</code> values across all ProductionVariants. If unspecified, it defaults to 1.0. </p>
   */
  InitialVariantWeight?: number;

  /**
   * <p>The size of the Elastic Inference (EI) instance to use for the production variant. EI instances provide on-demand GPU computing for inference. For more information, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in Amazon SageMaker</a>. For more information, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in Amazon SageMaker</a>.</p>
   */
  AcceleratorType?:
    | "ml.eia1.medium"
    | "ml.eia1.large"
    | "ml.eia1.xlarge"
    | string;
}

export type _UnmarshalledProductionVariant = _ProductionVariant;
