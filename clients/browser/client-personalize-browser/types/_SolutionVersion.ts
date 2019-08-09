import {
  _SolutionConfig,
  _UnmarshalledSolutionConfig
} from "./_SolutionConfig";

/**
 * <p>An object that provides information about a specific version of a <a>Solution</a>.</p>
 */
export interface _SolutionVersion {
  /**
   * <p>The ARN of the solution version.</p>
   */
  solutionVersionArn?: string;

  /**
   * <p>The ARN of the solution.</p>
   */
  solutionArn?: string;

  /**
   * <p>Whether to perform hyperparameter optimization (HPO) on the chosen recipe. The default is <code>false</code>.</p>
   */
  performHPO?: boolean;

  /**
   * <p>When true, Amazon Personalize performs a search for the most optimal recipe according to the solution configuration. When false (the default), Amazon Personalize uses <code>recipeArn</code>.</p>
   */
  performAutoML?: boolean;

  /**
   * <p>The ARN of the recipe used in the solution.</p>
   */
  recipeArn?: string;

  /**
   * <p>The event type (for example, 'click' or 'like') that is used for training the model.</p>
   */
  eventType?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group providing the training data.</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>Describes the configuration properties for the solution.</p>
   */
  solutionConfig?: _SolutionConfig;

  /**
   * <p>The status of the solution version.</p> <p>A solution version can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>
   */
  status?: string;

  /**
   * <p>If training a solution version fails, the reason behind the failure.</p>
   */
  failureReason?: string;

  /**
   * <p>The date and time (in Unix time) that this version of the solution was created.</p>
   */
  creationDateTime?: Date | string | number;

  /**
   * <p>The date and time (in Unix time) that the solution was last updated.</p>
   */
  lastUpdatedDateTime?: Date | string | number;
}

export interface _UnmarshalledSolutionVersion extends _SolutionVersion {
  /**
   * <p>Describes the configuration properties for the solution.</p>
   */
  solutionConfig?: _UnmarshalledSolutionConfig;

  /**
   * <p>The date and time (in Unix time) that this version of the solution was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the solution was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}
