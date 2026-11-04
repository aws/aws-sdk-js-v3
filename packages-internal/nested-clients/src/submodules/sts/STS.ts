// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type AssumeRoleCommandInput,
  type AssumeRoleCommandOutput,
  AssumeRoleCommand,
} from "./commands/AssumeRoleCommand";
import {
  type AssumeRoleWithWebIdentityCommandInput,
  type AssumeRoleWithWebIdentityCommandOutput,
  AssumeRoleWithWebIdentityCommand,
} from "./commands/AssumeRoleWithWebIdentityCommand";
import { STSClient } from "./STSClient";

const commands = {
  AssumeRoleCommand,
  AssumeRoleWithWebIdentityCommand,
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
}

/**
 * Security Token Service
 *
 * Amazon Web Services provides Security Token Service (STS) as a web service that enables you to request temporary, limited-privilege credentials for users. This guide describes the STS API. For more information, see [Temporary Security Credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html) in the *IAM User Guide*.
 *
 * > **Note:** As an alternative to using the API, you can use one of the Amazon Web Services SDKs, which consist of libraries and sample code for various programming languages and platforms such as Java, Ruby, .NET, iOS, Android, and others. The SDKs provide a convenient way to create programmatic access to STS. For example, the SDKs can cryptographically sign requests, manage errors, and retry requests automatically. For information about the Amazon Web Services SDKs, see [Tools to Build on Amazon Web Services](http://aws.amazon.com/tools/).
 *
 * For information about setting up signatures and authorization through the API, see [Signing Amazon Web Services API Requests](https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html) in the *Amazon Web Services General Reference*. For general information about the Query API, see [Making Query Requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html) in the *IAM User Guide*. For information about using security tokens with other Amazon Web Services products, see [Amazon Web Services Services That Work with IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html) in the *IAM User Guide*.
 *
 * For information about STS endpoints, see [STS Regions and endpoints](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_region-endpoints.html) in the *IAM User Guide*. For information about logging STS API calls, see [Logging IAM and STS API calls with CloudTrail](https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html) in the *IAM User Guide*.
 *
 * @public
 */
export class STS extends STSClient implements STS {}
createAggregatedClient(commands, STS);
