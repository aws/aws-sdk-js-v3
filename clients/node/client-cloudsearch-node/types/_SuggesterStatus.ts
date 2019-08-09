import { _Suggester, _UnmarshalledSuggester } from "./_Suggester";
import { _OptionStatus, _UnmarshalledOptionStatus } from "./_OptionStatus";

/**
 * <p>The value of a <code>Suggester</code> and its current status.</p>
 */
export interface _SuggesterStatus {
  /**
   * <p>Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. </p>
   */
  Options: _Suggester;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: _OptionStatus;
}

export interface _UnmarshalledSuggesterStatus extends _SuggesterStatus {
  /**
   * <p>Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. </p>
   */
  Options: _UnmarshalledSuggester;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: _UnmarshalledOptionStatus;
}
