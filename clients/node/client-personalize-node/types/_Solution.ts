import {
  _SolutionConfig,
  _UnmarshalledSolutionConfig
} from "./_SolutionConfig";
import { _AutoMLResult, _UnmarshalledAutoMLResult } from "./_AutoMLResult";
import {
  _SolutionVersionSummary,
  _UnmarshalledSolutionVersionSummary
} from "./_SolutionVersionSummary";

/**
 * <p>An object that provides information about a solution. A solution is a trained model that can be deployed as a campaign.</p>
 */
export interface _Solution {
  /**
   * <p>The name of the solution.</p>
   */
  name?: string;

  /**
   * <p>The ARN of the solution.</p>
   */
  solutionArn?: string;

  /**
   * <p>Whether to perform hyperparameter optimization (HPO) on the chosen recipe. The default is <code>false</code>.</p>
   */
  performHPO?: boolean;

  /**
   * <p>When true, Amazon Personalize performs a search for the best USER_PERSONALIZATION recipe from the list specified in the solution configuration (<code>recipeArn</code> must not be specified). When false (the default), Amazon Personalize uses <code>recipeArn</code> for training.</p>
   */
  performAutoML?: boolean;

  /**
   * <p>The ARN of the recipe used to create the solution.</p>
   */
  recipeArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group that provides the training data.</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>The event type (for example, 'click' or 'like') that is used for training the model.</p>
   */
  eventType?: string;

  /**
   * <p>Describes the configuration properties for the solution.</p>
   */
  solutionConfig?: _SolutionConfig;

  /**
   * <p>When <code>performAutoML</code> is true, specifies the best recipe found.</p>
   */
  autoMLResult?: _AutoMLResult;

  /**
   * <p>The status of the solution.</p> <p>A solution can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul>
   */
  status?: string;

  /**
   * <p>The creation date and time (in Unix time) of the solution.</p>
   */
  creationDateTime?: Date | string | number;

  /**
   * <p>The date and time (in Unix time) that the solution was last updated.</p>
   */
  lastUpdatedDateTime?: Date | string | number;

  /**
   * <p>Describes the latest version of the solution, including the status and the ARN.</p>
   */
  latestSolutionVersion?: _SolutionVersionSummary;
}

export interface _UnmarshalledSolution extends _Solution {
  /**
   * <p>Describes the configuration properties for the solution.</p>
   */
  solutionConfig?: _UnmarshalledSolutionConfig;

  /**
   * <p>When <code>performAutoML</code> is true, specifies the best recipe found.</p>
   */
  autoMLResult?: _UnmarshalledAutoMLResult;

  /**
   * <p>The creation date and time (in Unix time) of the solution.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the solution was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>Describes the latest version of the solution, including the status and the ARN.</p>
   */
  latestSolutionVersion?: _UnmarshalledSolutionVersionSummary;
}
