/**
 * <p>Provided configuration information for the worker UI for a labeling job. </p>
 */
export interface _UiConfig {
  /**
   * <p>The Amazon S3 bucket location of the UI template. For more information about the contents of a UI template, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates-step2.html"> Creating Your Custom Labeling Task Template</a>.</p>
   */
  UiTemplateS3Uri: string;
}

export type _UnmarshalledUiConfig = _UiConfig;
