import { _Task, _UnmarshalledTask } from "./_Task";
import {
  _ResourceAttribute,
  _UnmarshalledResourceAttribute
} from "./_ResourceAttribute";

/**
 * <p>Represents a migration task in a migration tool.</p>
 */
export interface _MigrationTask {
  /**
   * <p>A name that identifies the vendor of the migration tool being used.</p>
   */
  ProgressUpdateStream?: string;

  /**
   * <p>Unique identifier that references the migration task.</p>
   */
  MigrationTaskName?: string;

  /**
   * <p>Task object encapsulating task information.</p>
   */
  Task?: _Task;

  /**
   * <p>The timestamp when the task was gathered.</p>
   */
  UpdateDateTime?: Date | string | number;

  /**
   * <p/>
   */
  ResourceAttributeList?:
    | Array<_ResourceAttribute>
    | Iterable<_ResourceAttribute>;
}

export interface _UnmarshalledMigrationTask extends _MigrationTask {
  /**
   * <p>Task object encapsulating task information.</p>
   */
  Task?: _UnmarshalledTask;

  /**
   * <p>The timestamp when the task was gathered.</p>
   */
  UpdateDateTime?: Date;

  /**
   * <p/>
   */
  ResourceAttributeList?: Array<_UnmarshalledResourceAttribute>;
}
