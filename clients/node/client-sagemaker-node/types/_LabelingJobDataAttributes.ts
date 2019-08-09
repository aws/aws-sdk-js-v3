/**
 * <p>Attributes of the data specified by the customer. Use these to describe the data to be labeled.</p>
 */
export interface _LabelingJobDataAttributes {
  /**
   * <p>Declares that your content is free of personally identifiable information or adult content. Amazon SageMaker may restrict the Amazon Mechanical Turk workers that can view your task based on this information.</p>
   */
  ContentClassifiers?:
    | Array<
        | "FreeOfPersonallyIdentifiableInformation"
        | "FreeOfAdultContent"
        | string
      >
    | Iterable<
        | "FreeOfPersonallyIdentifiableInformation"
        | "FreeOfAdultContent"
        | string
      >;
}

export interface _UnmarshalledLabelingJobDataAttributes
  extends _LabelingJobDataAttributes {
  /**
   * <p>Declares that your content is free of personally identifiable information or adult content. Amazon SageMaker may restrict the Amazon Mechanical Turk workers that can view your task based on this information.</p>
   */
  ContentClassifiers?: Array<
    "FreeOfPersonallyIdentifiableInformation" | "FreeOfAdultContent" | string
  >;
}
