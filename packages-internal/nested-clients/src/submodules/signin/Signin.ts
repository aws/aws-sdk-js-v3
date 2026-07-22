// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  type CreateOAuth2TokenCommandInput,
  type CreateOAuth2TokenCommandOutput,
  CreateOAuth2TokenCommand,
} from "./commands/CreateOAuth2TokenCommand";
import {
  type CreateOAuth2TokenWithIAMCommandInput,
  type CreateOAuth2TokenWithIAMCommandOutput,
  CreateOAuth2TokenWithIAMCommand,
} from "./commands/CreateOAuth2TokenWithIAMCommand";
import { SigninClient } from "./SigninClient";

const commands = {
  CreateOAuth2TokenCommand,
  CreateOAuth2TokenWithIAMCommand,
};

export interface Signin {
  /**
   * @see {@link CreateOAuth2TokenCommand}
   */
  createOAuth2Token(
    args: CreateOAuth2TokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOAuth2TokenCommandOutput>;
  createOAuth2Token(
    args: CreateOAuth2TokenCommandInput,
    cb: (err: any, data?: CreateOAuth2TokenCommandOutput) => void
  ): void;
  createOAuth2Token(
    args: CreateOAuth2TokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOAuth2TokenCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOAuth2TokenWithIAMCommand}
   */
  createOAuth2TokenWithIAM(
    args: CreateOAuth2TokenWithIAMCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOAuth2TokenWithIAMCommandOutput>;
  createOAuth2TokenWithIAM(
    args: CreateOAuth2TokenWithIAMCommandInput,
    cb: (err: any, data?: CreateOAuth2TokenWithIAMCommandOutput) => void
  ): void;
  createOAuth2TokenWithIAM(
    args: CreateOAuth2TokenWithIAMCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOAuth2TokenWithIAMCommandOutput) => void
  ): void;
}

/**
 * AWS Sign-In manages authentication for AWS services. This service provides
 * secure authentication flows for accessing AWS resources from the console and developer tools.
 * @public
 */
export class Signin extends SigninClient implements Signin {}
createAggregatedClient(commands, Signin);
