/**
 * Submodules annotated with "deprecated" are legacy from prior to the submodule system.
 * They are exported from the package's root index to preserve backwards compatibility.
 *
 * New development should go in a proper submodule and not be exported from the root index.
 */

/**
 * Deprecated submodule.
 */
export * from "./submodules/client/index";
/**
 * Deprecated submodule.
 */
export * from "./submodules/httpAuthSchemes/index";
/**
 * Deprecated submodule.
 */
export * from "./submodules/protocols/index";
