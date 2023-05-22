// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>You can use Amazon CloudWatch Evidently to safely validate new features by serving
 *       them to a specified percentage
 *       of your users while you roll out the feature. You can monitor the performance of the new feature
 *       to help you decide when to ramp up traffic to your users. This helps you
 *       reduce risk and identify unintended consequences before you fully launch the feature.</p>
 *          <p>You can also conduct A/B experiments to make feature design decisions based on evidence
 *       and data. An experiment can test as many as five variations at once. Evidently collects
 *       experiment data and analyzes it using statistical methods. It also provides clear
 *       recommendations about which variations perform better. You can test both user-facing features
 *       and backend features.</p>
 *
 * @packageDocumentation
 */
export * from "./EvidentlyClient";
export * from "./Evidently";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { EvidentlyServiceException } from "./models/EvidentlyServiceException";
