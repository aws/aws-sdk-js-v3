/**
 * <p>AWS OpsWorks Stacks supports five lifecycle events: <b>setup</b>, <b>configuration</b>, <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>. For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. In addition, you can provide custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a particular layer to be run in response to each of the five events. </p> <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the .rb extension. For example: phpapp2::dbsetup specifies the dbsetup.rb recipe in the repository's phpapp2 folder.</p>
 */
export interface _Recipes {
  /**
   * <p>An array of custom recipe names to be run following a <code>setup</code> event.</p>
   */
  Setup?: Array<string> | Iterable<string>;

  /**
   * <p>An array of custom recipe names to be run following a <code>configure</code> event.</p>
   */
  Configure?: Array<string> | Iterable<string>;

  /**
   * <p>An array of custom recipe names to be run following a <code>deploy</code> event.</p>
   */
  Deploy?: Array<string> | Iterable<string>;

  /**
   * <p>An array of custom recipe names to be run following a <code>undeploy</code> event.</p>
   */
  Undeploy?: Array<string> | Iterable<string>;

  /**
   * <p>An array of custom recipe names to be run following a <code>shutdown</code> event.</p>
   */
  Shutdown?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledRecipes extends _Recipes {
  /**
   * <p>An array of custom recipe names to be run following a <code>setup</code> event.</p>
   */
  Setup?: Array<string>;

  /**
   * <p>An array of custom recipe names to be run following a <code>configure</code> event.</p>
   */
  Configure?: Array<string>;

  /**
   * <p>An array of custom recipe names to be run following a <code>deploy</code> event.</p>
   */
  Deploy?: Array<string>;

  /**
   * <p>An array of custom recipe names to be run following a <code>undeploy</code> event.</p>
   */
  Undeploy?: Array<string>;

  /**
   * <p>An array of custom recipe names to be run following a <code>shutdown</code> event.</p>
   */
  Shutdown?: Array<string>;
}
