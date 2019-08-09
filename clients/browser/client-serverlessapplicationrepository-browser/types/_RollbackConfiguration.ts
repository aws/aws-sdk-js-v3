import {
  _RollbackTrigger,
  _UnmarshalledRollbackTrigger
} from "./_RollbackTrigger";

/**
 * <p>This property corresponds to the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>
 *  </i> Data Type.</p>
 */
export interface _RollbackConfiguration {
  /**
   * <p>This property corresponds to the content of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>
   *  </i> Data Type.</p>
   */
  MonitoringTimeInMinutes?: number;

  /**
   * <p>This property corresponds to the content of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>
   *  </i> Data Type.</p>
   */
  RollbackTriggers?: Array<_RollbackTrigger> | Iterable<_RollbackTrigger>;
}

export interface _UnmarshalledRollbackConfiguration
  extends _RollbackConfiguration {
  /**
   * <p>This property corresponds to the content of the same name for the <i>AWS CloudFormation <a href="https://docs.aws.amazon.com/goto/WebAPI/cloudformation-2010-05-15/RollbackConfiguration">RollbackConfiguration</a>
   *  </i> Data Type.</p>
   */
  RollbackTriggers?: Array<_UnmarshalledRollbackTrigger>;
}
