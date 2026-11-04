// smithy-typescript generated code
/* eslint-disable */
/**
 * Database Migration Service
 *
 * Database Migration Service (DMS) can migrate your data to and from the most widely used commercial and open-source databases such as Oracle, PostgreSQL, Microsoft SQL Server, Amazon Redshift, MariaDB, Amazon Aurora, MySQL, and SAP Adaptive Server Enterprise (ASE). The service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle to MySQL or SQL Server to PostgreSQL.
 *
 * For more information about DMS, see [What Is Database Migration Service?](https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html) in the *Database Migration Service User Guide.*
 *
 * @packageDocumentation
 */
export * from "./DatabaseMigrationServiceClient";
export * from "./DatabaseMigrationService";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { DatabaseMigrationServiceExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";
export * from "./models/models_1";

export { DatabaseMigrationServiceServiceException } from "./models/DatabaseMigrationServiceServiceException";
