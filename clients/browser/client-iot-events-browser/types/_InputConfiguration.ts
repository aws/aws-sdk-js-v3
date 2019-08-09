/**
 * <p>Information about the configuration of an input.</p>
 */
export interface _InputConfiguration {
  /**
   * <p>The name of the input.</p>
   */
  inputName: string;

  /**
   * <p>A brief description of the input.</p>
   */
  inputDescription?: string;

  /**
   * <p>The ARN of the input.</p>
   */
  inputArn: string;

  /**
   * <p>The time the input was created.</p>
   */
  creationTime: Date | string | number;

  /**
   * <p>The last time the input was updated.</p>
   */
  lastUpdateTime: Date | string | number;

  /**
   * <p>The status of the input.</p>
   */
  status: "CREATING" | "UPDATING" | "ACTIVE" | "DELETING" | string;
}

export interface _UnmarshalledInputConfiguration extends _InputConfiguration {
  /**
   * <p>The time the input was created.</p>
   */
  creationTime: Date;

  /**
   * <p>The last time the input was updated.</p>
   */
  lastUpdateTime: Date;
}
