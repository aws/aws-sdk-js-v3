// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon GameLift provides solutions for hosting session-based multiplayer game servers in the
 *             cloud, including tools for deploying, operating, and scaling game servers. Built on
 *             Amazon Web Services global computing infrastructure, GameLift helps you deliver high-performance,
 *             high-reliability, low-cost game servers while dynamically scaling your resource usage to
 *             meet player demand. </p>
 *          <p>
 *             <b>About Amazon GameLift solutions</b>
 *          </p>
 *          <p>Get more information on these Amazon GameLift solutions in the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/">Amazon GameLift Developer Guide</a>.</p>
 *          <ul>
 *             <li>
 *                <p>Amazon GameLift managed hosting -- Amazon GameLift offers a fully managed service to set up
 *                     and maintain computing machines for hosting, manage game session and player
 *                     session life cycle, and handle security, storage, and performance tracking. You
 *                     can use automatic scaling tools to balance player demand and hosting costs,
 *                     configure your game session management to minimize player latency, and add
 *                     FlexMatch for matchmaking.</p>
 *             </li>
 *             <li>
 *                <p>Managed hosting with Realtime Servers -- With Amazon GameLift Realtime Servers, you can quickly configure
 *                     and set up ready-to-go game servers for your game. Realtime Servers provides a game server
 *                     framework with core Amazon GameLift infrastructure already built in. Then use the full
 *                     range of Amazon GameLift managed hosting features, including FlexMatch, for your
 *                     game.</p>
 *             </li>
 *             <li>
 *                <p>Amazon GameLift FleetIQ -- Use Amazon GameLift FleetIQ as a standalone service while hosting your games using EC2
 *                     instances and Auto Scaling groups. Amazon GameLift FleetIQ provides optimizations for game
 *                     hosting, including boosting the viability of low-cost Spot Instances gaming. For
 *                     a complete solution, pair the Amazon GameLift FleetIQ and FlexMatch standalone services.</p>
 *             </li>
 *             <li>
 *                <p>Amazon GameLift FlexMatch -- Add matchmaking to your game hosting solution. FlexMatch is a
 *                     customizable matchmaking service for multiplayer games. Use FlexMatch as
 *                     integrated with Amazon GameLift managed hosting or incorporate FlexMatch as a standalone
 *                     service into your own hosting solution.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>About this API Reference</b>
 *          </p>
 *          <p>This reference guide describes the low-level service API for Amazon GameLift. With each topic
 *             in this guide, you can find links to language-specific SDK guides and the Amazon Web Services CLI
 *             reference. Useful links:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html">Amazon GameLift API
 *                         operations listed by tasks</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-components.html"> Amazon GameLift tools
 *                         and resources</a>
 *                </p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./GameLiftClient";
export * from "./GameLift";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { GameLiftExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { GameLiftServiceException } from "./models/GameLiftServiceException";
