// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>The AWS Migration Hub home region APIs are available specifically for working with your
 *       Migration Hub home region. You can use these APIs to determine a home region, as well as to
 *       create and work with controls that describe the home region.</p>
 *
 *          <ul>
 *             <li>
 *                <p>You must make API calls for write actions (create, notify, associate, disassociate,
 *           import, or put) while in your home region, or a <code>HomeRegionNotSetException</code>
 *           error is returned.</p>
 *             </li>
 *             <li>
 *                <p>API calls for read actions (list, describe, stop, and delete) are permitted outside of
 *           your home region.</p>
 *             </li>
 *             <li>
 *                <p>If you call a write API outside the home region, an <code>InvalidInputException</code>
 *           is returned.</p>
 *             </li>
 *             <li>
 *                <p>You can call <code>GetHomeRegion</code> action to obtain the account's Migration Hub
 *           home region.</p>
 *             </li>
 *          </ul>
 *
 *          <p>For specific API usage, see the sections that follow in this AWS Migration Hub Home Region
 *       API reference. </p>
 *
 * @packageDocumentation
 */
export * from "./MigrationHubConfigClient";
export * from "./MigrationHubConfig";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { MigrationHubConfigServiceException } from "./models/MigrationHubConfigServiceException";
