/**
 * <p>Contains input values for a task.</p>
 */
export interface _RenderableTask {
  /**
   * <p>A JSON object that contains values for the variables defined in the template. It is made available to the template under the substitution variable <code>task.input</code>. For example, if you define a variable <code>task.input.text</code> in your template, you can supply the variable in the JSON object as <code>"text": "sample text"</code>.</p>
   */
  Input: string;
}

export type _UnmarshalledRenderableTask = _RenderableTask;
