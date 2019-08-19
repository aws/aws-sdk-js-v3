import {
  _SystemTemplateSummary,
  _UnmarshalledSystemTemplateSummary
} from "./_SystemTemplateSummary";
import {
  _DefinitionDocument,
  _UnmarshalledDefinitionDocument
} from "./_DefinitionDocument";

/**
 * <p>An object that contains a system's definition document and summary information.</p>
 */
export interface _SystemTemplateDescription {
  /**
   * <p>An object that contains summary information about a system.</p>
   */
  summary?: _SystemTemplateSummary;

  /**
   * <p>The definition document of a system.</p>
   */
  definition?: _DefinitionDocument;

  /**
   * <p>The namespace version against which the system was validated. Use this value in your system instance.</p>
   */
  validatedNamespaceVersion?: number;
}

export interface _UnmarshalledSystemTemplateDescription
  extends _SystemTemplateDescription {
  /**
   * <p>An object that contains summary information about a system.</p>
   */
  summary?: _UnmarshalledSystemTemplateSummary;

  /**
   * <p>The definition document of a system.</p>
   */
  definition?: _UnmarshalledDefinitionDocument;
}
