import {
  _InputConfiguration,
  _UnmarshalledInputConfiguration
} from "./_InputConfiguration";
import {
  _InputDefinition,
  _UnmarshalledInputDefinition
} from "./_InputDefinition";

/**
 * <p>Information about the input.</p>
 */
export interface _Input {
  /**
   * <p>Information about the configuration of an input.</p>
   */
  inputConfiguration?: _InputConfiguration;

  /**
   * <p>The definition of the input.</p>
   */
  inputDefinition?: _InputDefinition;
}

export interface _UnmarshalledInput extends _Input {
  /**
   * <p>Information about the configuration of an input.</p>
   */
  inputConfiguration?: _UnmarshalledInputConfiguration;

  /**
   * <p>The definition of the input.</p>
   */
  inputDefinition?: _UnmarshalledInputDefinition;
}
