import {
  _FlowTemplateSummary,
  _UnmarshalledFlowTemplateSummary
} from "./_FlowTemplateSummary";
import {
  _DefinitionDocument,
  _UnmarshalledDefinitionDocument
} from "./_DefinitionDocument";

/**
 * <p>An object that contains a workflow's definition and summary information.</p>
 */
export interface _FlowTemplateDescription {
  /**
   * <p>An object that contains summary information about a workflow.</p>
   */
  summary?: _FlowTemplateSummary;

  /**
   * <p>A workflow's definition document.</p>
   */
  definition?: _DefinitionDocument;

  /**
   * <p>The version of the user's namespace against which the workflow was validated. Use this value in your system instance.</p>
   */
  validatedNamespaceVersion?: number;
}

export interface _UnmarshalledFlowTemplateDescription
  extends _FlowTemplateDescription {
  /**
   * <p>An object that contains summary information about a workflow.</p>
   */
  summary?: _UnmarshalledFlowTemplateSummary;

  /**
   * <p>A workflow's definition document.</p>
   */
  definition?: _UnmarshalledDefinitionDocument;
}
