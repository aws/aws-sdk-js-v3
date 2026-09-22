// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type AssumeRoleCommandInput,
  type AssumeRoleCommandOutput,
  AssumeRoleCommand,
} from "./commands/AssumeRoleCommand";
import {
  type AssumeRoleWithSAMLCommandInput,
  type AssumeRoleWithSAMLCommandOutput,
  AssumeRoleWithSAMLCommand,
} from "./commands/AssumeRoleWithSAMLCommand";
import {
  type AssumeRoleWithWebIdentityCommandInput,
  type AssumeRoleWithWebIdentityCommandOutput,
  AssumeRoleWithWebIdentityCommand,
} from "./commands/AssumeRoleWithWebIdentityCommand";
import {
  type AssumeRootCommandInput,
  type AssumeRootCommandOutput,
  AssumeRootCommand,
} from "./commands/AssumeRootCommand";
import {
  type DecodeAuthorizationMessageCommandInput,
  type DecodeAuthorizationMessageCommandOutput,
  DecodeAuthorizationMessageCommand,
} from "./commands/DecodeAuthorizationMessageCommand";
import {
  type GetAccessKeyInfoCommandInput,
  type GetAccessKeyInfoCommandOutput,
  GetAccessKeyInfoCommand,
} from "./commands/GetAccessKeyInfoCommand";
import {
  type GetCallerIdentityCommandInput,
  type GetCallerIdentityCommandOutput,
  GetCallerIdentityCommand,
} from "./commands/GetCallerIdentityCommand";
import {
  type GetDelegatedAccessTokenCommandInput,
  type GetDelegatedAccessTokenCommandOutput,
  GetDelegatedAccessTokenCommand,
} from "./commands/GetDelegatedAccessTokenCommand";
import {
  type GetFederationTokenCommandInput,
  type GetFederationTokenCommandOutput,
  GetFederationTokenCommand,
} from "./commands/GetFederationTokenCommand";
import {
  type GetSessionTokenCommandInput,
  type GetSessionTokenCommandOutput,
  GetSessionTokenCommand,
} from "./commands/GetSessionTokenCommand";
import {
  type GetWebIdentityTokenCommandInput,
  type GetWebIdentityTokenCommandOutput,
  GetWebIdentityTokenCommand,
} from "./commands/GetWebIdentityTokenCommand";
import { STSClient } from "./STSClient";

const commands = {
  AssumeRoleCommand,
  AssumeRoleWithSAMLCommand,
  AssumeRoleWithWebIdentityCommand,
  AssumeRootCommand,
  DecodeAuthorizationMessageCommand,
  GetAccessKeyInfoCommand,
  GetCallerIdentityCommand,
  GetDelegatedAccessTokenCommand,
  GetFederationTokenCommand,
  GetSessionTokenCommand,
  GetWebIdentityTokenCommand,
};

/**
 * @public
 */
export interface STSRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface STS {
  /**
   * @see {@link AssumeRoleCommand}
   */
  assumeRole(
    args: AssumeRoleCommandInput,
    options?: STSRequestOptions
  ): Promise<AssumeRoleCommandOutput>;
  assumeRole(
    args: AssumeRoleCommandInput,
    cb: (err: any, data?: AssumeRoleCommandOutput) => void
  ): void;
  assumeRole(
    args: AssumeRoleCommandInput,
    options: STSRequestOptions,
    cb: (err: any, data?: AssumeRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link AssumeRoleWithSAMLCommand}
   */
  assumeRoleWithSAML(
    args: AssumeRoleWithSAMLCommandInput,
    options?: STSRequestOptions
  ): Promise<AssumeRoleWithSAMLCommandOutput>;
  assumeRoleWithSAML(
    args: AssumeRoleWithSAMLCommandInput,
    cb: (err: any, data?: AssumeRoleWithSAMLCommandOutput) => void
  ): void;
  assumeRoleWithSAML(
    args: AssumeRoleWithSAMLCommandInput,
    options: STSRequestOptions,
    cb: (err: any, data?: AssumeRoleWithSAMLCommandOutput) => void
  ): void;

  /**
   * @see {@link AssumeRoleWithWebIdentityCommand}
   */
  assumeRoleWithWebIdentity(
    args: AssumeRoleWithWebIdentityCommandInput,
    options?: STSRequestOptions
  ): Promise<AssumeRoleWithWebIdentityCommandOutput>;
  assumeRoleWithWebIdentity(
    args: AssumeRoleWithWebIdentityCommandInput,
    cb: (err: any, data?: AssumeRoleWithWebIdentityCommandOutput) => void
  ): void;
  assumeRoleWithWebIdentity(
    args: AssumeRoleWithWebIdentityCommandInput,
    options: STSRequestOptions,
    cb: (err: any, data?: AssumeRoleWithWebIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link AssumeRootCommand}
   */
  assumeRoot(
    args: AssumeRootCommandInput,
    options?: STSRequestOptions
  ): Promise<AssumeRootCommandOutput>;
  assumeRoot(
    args: AssumeRootCommandInput,
    cb: (err: any, data?: AssumeRootCommandOutput) => void
  ): void;
  assumeRoot(
    args: AssumeRootCommandInput,
    options: STSRequestOptions,
    cb: (err: any, data?: AssumeRootCommandOutput) => void
  ): void;

  /**
   * @see {@link DecodeAuthorizationMessageCommand}
   */
  decodeAuthorizationMessage(
    args: DecodeAuthorizationMessageCommandInput,
    options?: STSRequestOptions
  ): Promise<DecodeAuthorizationMessageCommandOutput>;
  decodeAuthorizationMessage(
    args: DecodeAuthorizationMessageCommandInput,
    cb: (err: any, data?: DecodeAuthorizationMessageCommandOutput) => void
  ): void;
  decodeAuthorizationMessage(
    args: DecodeAuthorizationMessageCommandInput,
    options: STSRequestOptions,
    cb: (err: any, data?: DecodeAuthorizationMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessKeyInfoCommand}
   */
  getAccessKeyInfo(
    args: GetAccessKeyInfoCommandInput,
    options?: STSRequestOptions
  ): Promise<GetAccessKeyInfoCommandOutput>;
  getAccessKeyInfo(
    args: GetAccessKeyInfoCommandInput,
    cb: (err: any, data?: GetAccessKeyInfoCommandOutput) => void
  ): void;
  getAccessKeyInfo(
    args: GetAccessKeyInfoCommandInput,
    options: STSRequestOptions,
    cb: (err: any, data?: GetAccessKeyInfoCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCallerIdentityCommand}
   */
  getCallerIdentity(): Promise<GetCallerIdentityCommandOutput>;
  getCallerIdentity(
    args: GetCallerIdentityCommandInput,
    options?: STSRequestOptions
  ): Promise<GetCallerIdentityCommandOutput>;
  getCallerIdentity(
    args: GetCallerIdentityCommandInput,
    cb: (err: any, data?: GetCallerIdentityCommandOutput) => void
  ): void;
  getCallerIdentity(
    args: GetCallerIdentityCommandInput,
    options: STSRequestOptions,
    cb: (err: any, data?: GetCallerIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDelegatedAccessTokenCommand}
   */
  getDelegatedAccessToken(
    args: GetDelegatedAccessTokenCommandInput,
    options?: STSRequestOptions
  ): Promise<GetDelegatedAccessTokenCommandOutput>;
  getDelegatedAccessToken(
    args: GetDelegatedAccessTokenCommandInput,
    cb: (err: any, data?: GetDelegatedAccessTokenCommandOutput) => void
  ): void;
  getDelegatedAccessToken(
    args: GetDelegatedAccessTokenCommandInput,
    options: STSRequestOptions,
    cb: (err: any, data?: GetDelegatedAccessTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFederationTokenCommand}
   */
  getFederationToken(
    args: GetFederationTokenCommandInput,
    options?: STSRequestOptions
  ): Promise<GetFederationTokenCommandOutput>;
  getFederationToken(
    args: GetFederationTokenCommandInput,
    cb: (err: any, data?: GetFederationTokenCommandOutput) => void
  ): void;
  getFederationToken(
    args: GetFederationTokenCommandInput,
    options: STSRequestOptions,
    cb: (err: any, data?: GetFederationTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionTokenCommand}
   */
  getSessionToken(): Promise<GetSessionTokenCommandOutput>;
  getSessionToken(
    args: GetSessionTokenCommandInput,
    options?: STSRequestOptions
  ): Promise<GetSessionTokenCommandOutput>;
  getSessionToken(
    args: GetSessionTokenCommandInput,
    cb: (err: any, data?: GetSessionTokenCommandOutput) => void
  ): void;
  getSessionToken(
    args: GetSessionTokenCommandInput,
    options: STSRequestOptions,
    cb: (err: any, data?: GetSessionTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWebIdentityTokenCommand}
   */
  getWebIdentityToken(
    args: GetWebIdentityTokenCommandInput,
    options?: STSRequestOptions
  ): Promise<GetWebIdentityTokenCommandOutput>;
  getWebIdentityToken(
    args: GetWebIdentityTokenCommandInput,
    cb: (err: any, data?: GetWebIdentityTokenCommandOutput) => void
  ): void;
  getWebIdentityToken(
    args: GetWebIdentityTokenCommandInput,
    options: STSRequestOptions,
    cb: (err: any, data?: GetWebIdentityTokenCommandOutput) => void
  ): void;
}

/**
 * <fullname>Security Token Service</fullname>
 *          <p>Amazon Web Services provides Security Token Service (STS) as a web service that enables you to request temporary,
 *          limited-privilege credentials for users. This guide describes the STS API. For more
 *          information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html">Temporary Security Credentials</a>
 *          in the <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>As an alternative to using the API, you can use one of the Amazon Web Services SDKs, which consist of
 *             libraries and sample code for various programming languages and platforms such as Java,
 *             Ruby, .NET, iOS, Android, and others. The SDKs provide a convenient way to create
 *             programmatic access to STS. For example, the SDKs can cryptographically sign requests,
 *             manage errors, and retry requests automatically. For information about the Amazon Web Services SDKs, see
 *                <a href="http://aws.amazon.com/tools/">Tools to Build on Amazon Web Services</a>.</p>
 *          </note>
 *          <p>For information about setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing Amazon Web Services
 *             API Requests</a> in the <i>Amazon Web Services General Reference</i>. For general information
 *          about the Query API, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the
 *             <i>IAM User Guide</i>. For information about using security tokens with
 *          other Amazon Web Services products, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html">Amazon Web Services Services
 *             That Work with IAM</a> in the <i>IAM User Guide</i>.</p>
 *          <p>For information about STS endpoints, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_region-endpoints.html">STS Regions and
 *             endpoints</a> in the <i>IAM User Guide</i>. For information about
 *          logging STS API calls, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM and STS API calls
 *             with CloudTrail</a> in the <i>IAM User Guide</i>.</p>
 * @public
 */
export class STS extends STSClient implements STS {}
createAggregatedClient(commands, STS);
