// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon SES Mail Manager API
 *
 * The Amazon SES Mail Manager API contains operations and data types that comprise the Mail Manager feature of [Amazon Simple Email Service (SES)](http://aws.amazon.com/ses).
 *
 * Mail Manager is a set of Amazon SES email gateway features designed to help you strengthen your organization's email infrastructure, simplify email workflow management, and streamline email compliance control. To learn more, see the [Mail Manager chapter](https://docs.aws.amazon.com/ses/latest/dg/eb.html) in the *Amazon SES Developer Guide*.
 *
 * @packageDocumentation
 */
export * from "./MailManagerClient";
export * from "./MailManager";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { MailManagerExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { MailManagerServiceException } from "./models/MailManagerServiceException";
