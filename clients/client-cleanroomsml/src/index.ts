// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Welcome to the <i>Amazon Web Services Clean Rooms ML API Reference</i>.</p> <p>Amazon Web Services Clean Rooms ML provides a privacy-enhancing method for two parties to identify similar users in their data without the need to share their data with each other. The first party brings the training data to Clean Rooms so that they can create and configure an audience model (lookalike model) and associate it with a collaboration. The second party then brings their seed data to Clean Rooms and generates an audience (lookalike segment) that resembles the training data.</p> <p>To learn more about Amazon Web Services Clean Rooms ML concepts, procedures, and best practices, see the <a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/machine-learning.html">Clean Rooms User Guide</a>.</p> <p>To learn more about SQL commands, functions, and conditions supported in Clean Rooms, see the <a href="https://docs.aws.amazon.com/clean-rooms/latest/sql-reference/sql-reference.html">Clean Rooms SQL Reference</a>.</p> <p/>
 *
 * @packageDocumentation
 */
export * from "./CleanRoomsMLClient";
export * from "./CleanRoomsML";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { CleanRoomsMLExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { CleanRoomsMLServiceException } from "./models/CleanRoomsMLServiceException";
