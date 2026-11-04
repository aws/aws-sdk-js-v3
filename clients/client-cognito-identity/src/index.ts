// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon Cognito Federated Identities
 *
 * Amazon Cognito Federated Identities is a web service that delivers scoped temporary credentials to mobile devices and other untrusted environments. It uniquely identifies a device and supplies the user with a consistent identity over the lifetime of an application.
 *
 * Using Amazon Cognito Federated Identities, you can enable authentication with one or more third-party identity providers (Facebook, Google, or Login with Amazon) or an Amazon Cognito user pool, and you can also choose to support unauthenticated access from your app. Cognito delivers a unique identifier for each user and acts as an OpenID token provider trusted by Security Token Service (STS) to access temporary, limited-privilege Amazon Web Services credentials.
 *
 * For a description of the authentication flow from the Amazon Cognito Developer Guide see [Authentication Flow](https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html).
 *
 * For more information see [Amazon Cognito Federated Identities](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html).
 *
 * @packageDocumentation
 */
export * from "./CognitoIdentityClient";
export * from "./CognitoIdentity";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { CognitoIdentityExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { CognitoIdentityServiceException } from "./models/CognitoIdentityServiceException";
