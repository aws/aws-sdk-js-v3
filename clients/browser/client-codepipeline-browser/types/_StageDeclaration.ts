import {
  _BlockerDeclaration,
  _UnmarshalledBlockerDeclaration
} from "./_BlockerDeclaration";
import {
  _ActionDeclaration,
  _UnmarshalledActionDeclaration
} from "./_ActionDeclaration";

/**
 * <p>Represents information about a stage and its definition.</p>
 */
export interface _StageDeclaration {
  /**
   * <p>The name of the stage.</p>
   */
  name: string;

  /**
   * <p>Reserved for future use.</p>
   */
  blockers?: Array<_BlockerDeclaration> | Iterable<_BlockerDeclaration>;

  /**
   * <p>The actions included in a stage.</p>
   */
  actions: Array<_ActionDeclaration> | Iterable<_ActionDeclaration>;
}

export interface _UnmarshalledStageDeclaration extends _StageDeclaration {
  /**
   * <p>Reserved for future use.</p>
   */
  blockers?: Array<_UnmarshalledBlockerDeclaration>;

  /**
   * <p>The actions included in a stage.</p>
   */
  actions: Array<_UnmarshalledActionDeclaration>;
}
