/**
 * Submodules annotated with "Legacy" are from prior to the submodule system.
 * They are exported from the package's root index to preserve backwards compatibility.
 *
 * New development should go in a proper submodule and not be exported from the root index.
 * There is an eslint rule banning imports from `@aws-sdk/core` without a submodule e.g. `@aws-sdk/core/protocols`.
 */

/**
 * Legacy submodule.
 */
export * from "./submodules/client/index";
/**
 * Legacy submodule.
 */
export * from "./submodules/httpAuthSchemes/index";
/**
 * Legacy submodule.
 */
export * from "./submodules/protocols/index";

/**
 * Warning: do not export any additional submodules from the root of this package. See readme.md for
 * guide on developing submodules.
 */
