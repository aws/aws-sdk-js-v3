// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";

import { SigninClient, SigninClientConfig } from "./SigninClient";

const commands = {};

export interface Signin {}

/**
 * AWS Sign-In Data Plane Service
 *
 * This service implements OAuth 2.0 flows for AWS CLI authentication,
 * providing secure token exchange and refresh capabilities.
 * @public
 */
export class Signin extends SigninClient implements Signin {}
createAggregatedClient(commands, Signin);
