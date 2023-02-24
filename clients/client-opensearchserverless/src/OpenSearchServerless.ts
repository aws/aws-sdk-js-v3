// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  BatchGetCollectionCommand,
  BatchGetCollectionCommandInput,
  BatchGetCollectionCommandOutput,
} from "./commands/BatchGetCollectionCommand";
import {
  BatchGetVpcEndpointCommand,
  BatchGetVpcEndpointCommandInput,
  BatchGetVpcEndpointCommandOutput,
} from "./commands/BatchGetVpcEndpointCommand";
import {
  CreateAccessPolicyCommand,
  CreateAccessPolicyCommandInput,
  CreateAccessPolicyCommandOutput,
} from "./commands/CreateAccessPolicyCommand";
import {
  CreateCollectionCommand,
  CreateCollectionCommandInput,
  CreateCollectionCommandOutput,
} from "./commands/CreateCollectionCommand";
import {
  CreateSecurityConfigCommand,
  CreateSecurityConfigCommandInput,
  CreateSecurityConfigCommandOutput,
} from "./commands/CreateSecurityConfigCommand";
import {
  CreateSecurityPolicyCommand,
  CreateSecurityPolicyCommandInput,
  CreateSecurityPolicyCommandOutput,
} from "./commands/CreateSecurityPolicyCommand";
import {
  CreateVpcEndpointCommand,
  CreateVpcEndpointCommandInput,
  CreateVpcEndpointCommandOutput,
} from "./commands/CreateVpcEndpointCommand";
import {
  DeleteAccessPolicyCommand,
  DeleteAccessPolicyCommandInput,
  DeleteAccessPolicyCommandOutput,
} from "./commands/DeleteAccessPolicyCommand";
import {
  DeleteCollectionCommand,
  DeleteCollectionCommandInput,
  DeleteCollectionCommandOutput,
} from "./commands/DeleteCollectionCommand";
import {
  DeleteSecurityConfigCommand,
  DeleteSecurityConfigCommandInput,
  DeleteSecurityConfigCommandOutput,
} from "./commands/DeleteSecurityConfigCommand";
import {
  DeleteSecurityPolicyCommand,
  DeleteSecurityPolicyCommandInput,
  DeleteSecurityPolicyCommandOutput,
} from "./commands/DeleteSecurityPolicyCommand";
import {
  DeleteVpcEndpointCommand,
  DeleteVpcEndpointCommandInput,
  DeleteVpcEndpointCommandOutput,
} from "./commands/DeleteVpcEndpointCommand";
import {
  GetAccessPolicyCommand,
  GetAccessPolicyCommandInput,
  GetAccessPolicyCommandOutput,
} from "./commands/GetAccessPolicyCommand";
import {
  GetAccountSettingsCommand,
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
} from "./commands/GetAccountSettingsCommand";
import {
  GetPoliciesStatsCommand,
  GetPoliciesStatsCommandInput,
  GetPoliciesStatsCommandOutput,
} from "./commands/GetPoliciesStatsCommand";
import {
  GetSecurityConfigCommand,
  GetSecurityConfigCommandInput,
  GetSecurityConfigCommandOutput,
} from "./commands/GetSecurityConfigCommand";
import {
  GetSecurityPolicyCommand,
  GetSecurityPolicyCommandInput,
  GetSecurityPolicyCommandOutput,
} from "./commands/GetSecurityPolicyCommand";
import {
  ListAccessPoliciesCommand,
  ListAccessPoliciesCommandInput,
  ListAccessPoliciesCommandOutput,
} from "./commands/ListAccessPoliciesCommand";
import {
  ListCollectionsCommand,
  ListCollectionsCommandInput,
  ListCollectionsCommandOutput,
} from "./commands/ListCollectionsCommand";
import {
  ListSecurityConfigsCommand,
  ListSecurityConfigsCommandInput,
  ListSecurityConfigsCommandOutput,
} from "./commands/ListSecurityConfigsCommand";
import {
  ListSecurityPoliciesCommand,
  ListSecurityPoliciesCommandInput,
  ListSecurityPoliciesCommandOutput,
} from "./commands/ListSecurityPoliciesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVpcEndpointsCommand,
  ListVpcEndpointsCommandInput,
  ListVpcEndpointsCommandOutput,
} from "./commands/ListVpcEndpointsCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAccessPolicyCommand,
  UpdateAccessPolicyCommandInput,
  UpdateAccessPolicyCommandOutput,
} from "./commands/UpdateAccessPolicyCommand";
import {
  UpdateAccountSettingsCommand,
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import {
  UpdateCollectionCommand,
  UpdateCollectionCommandInput,
  UpdateCollectionCommandOutput,
} from "./commands/UpdateCollectionCommand";
import {
  UpdateSecurityConfigCommand,
  UpdateSecurityConfigCommandInput,
  UpdateSecurityConfigCommandOutput,
} from "./commands/UpdateSecurityConfigCommand";
import {
  UpdateSecurityPolicyCommand,
  UpdateSecurityPolicyCommandInput,
  UpdateSecurityPolicyCommandOutput,
} from "./commands/UpdateSecurityPolicyCommand";
import {
  UpdateVpcEndpointCommand,
  UpdateVpcEndpointCommandInput,
  UpdateVpcEndpointCommandOutput,
} from "./commands/UpdateVpcEndpointCommand";
import { OpenSearchServerlessClient } from "./OpenSearchServerlessClient";

/**
 * <p>Use the Amazon OpenSearch Serverless API to create, configure, and manage OpenSearch Serverless collections and
 *             security policies.</p>
 *         <p>OpenSearch Serverless is an on-demand, pre-provisioned serverless configuration for
 *             Amazon OpenSearch Service. OpenSearch Serverless removes the operational complexities of provisioning,
 *             configuring, and tuning your OpenSearch clusters. It enables you to easily search and
 *             analyze petabytes of data without having to worry about the underlying infrastructure
 *             and data management.</p>
 *         <p> To learn more about OpenSearch Serverless, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-overview.html">What is
 *                 Amazon OpenSearch Serverless?</a>
 *          </p>
 */
export class OpenSearchServerless extends OpenSearchServerlessClient {
  /**
   * <p>Returns attributes for one or more collections, including the collection endpoint and
   *             the OpenSearch Dashboards endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and
   *                 managing Amazon OpenSearch Serverless collections</a>.</p>
   */
  public batchGetCollection(
    args: BatchGetCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetCollectionCommandOutput>;
  public batchGetCollection(
    args: BatchGetCollectionCommandInput,
    cb: (err: any, data?: BatchGetCollectionCommandOutput) => void
  ): void;
  public batchGetCollection(
    args: BatchGetCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetCollectionCommandOutput) => void
  ): void;
  public batchGetCollection(
    args: BatchGetCollectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetCollectionCommandOutput) => void),
    cb?: (err: any, data?: BatchGetCollectionCommandOutput) => void
  ): Promise<BatchGetCollectionCommandOutput> | void {
    const command = new BatchGetCollectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns attributes for one or more VPC endpoints associated with the current account.
   *             For more information, see
   *             <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.</p>
   */
  public batchGetVpcEndpoint(
    args: BatchGetVpcEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetVpcEndpointCommandOutput>;
  public batchGetVpcEndpoint(
    args: BatchGetVpcEndpointCommandInput,
    cb: (err: any, data?: BatchGetVpcEndpointCommandOutput) => void
  ): void;
  public batchGetVpcEndpoint(
    args: BatchGetVpcEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetVpcEndpointCommandOutput) => void
  ): void;
  public batchGetVpcEndpoint(
    args: BatchGetVpcEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetVpcEndpointCommandOutput) => void),
    cb?: (err: any, data?: BatchGetVpcEndpointCommandOutput) => void
  ): Promise<BatchGetVpcEndpointCommandOutput> | void {
    const command = new BatchGetVpcEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a data access policy for OpenSearch Serverless. Access policies limit access to collections
   *             and the resources within them, and allow a user to access that data irrespective of the
   *             access mechanism or network source. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access
   *                 control for Amazon OpenSearch Serverless</a>.</p>
   */
  public createAccessPolicy(
    args: CreateAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessPolicyCommandOutput>;
  public createAccessPolicy(
    args: CreateAccessPolicyCommandInput,
    cb: (err: any, data?: CreateAccessPolicyCommandOutput) => void
  ): void;
  public createAccessPolicy(
    args: CreateAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessPolicyCommandOutput) => void
  ): void;
  public createAccessPolicy(
    args: CreateAccessPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAccessPolicyCommandOutput) => void),
    cb?: (err: any, data?: CreateAccessPolicyCommandOutput) => void
  ): Promise<CreateAccessPolicyCommandOutput> | void {
    const command = new CreateAccessPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and
   *                 managing Amazon OpenSearch Serverless collections</a>.</p>
   */
  public createCollection(
    args: CreateCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCollectionCommandOutput>;
  public createCollection(
    args: CreateCollectionCommandInput,
    cb: (err: any, data?: CreateCollectionCommandOutput) => void
  ): void;
  public createCollection(
    args: CreateCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCollectionCommandOutput) => void
  ): void;
  public createCollection(
    args: CreateCollectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCollectionCommandOutput) => void),
    cb?: (err: any, data?: CreateCollectionCommandOutput) => void
  ): Promise<CreateCollectionCommandOutput> | void {
    const command = new CreateCollectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Specifies a security configuration for OpenSearch Serverless. For more information, see
   *             <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML
   *                 authentication for Amazon OpenSearch Serverless</a>. </p>
   */
  public createSecurityConfig(
    args: CreateSecurityConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSecurityConfigCommandOutput>;
  public createSecurityConfig(
    args: CreateSecurityConfigCommandInput,
    cb: (err: any, data?: CreateSecurityConfigCommandOutput) => void
  ): void;
  public createSecurityConfig(
    args: CreateSecurityConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSecurityConfigCommandOutput) => void
  ): void;
  public createSecurityConfig(
    args: CreateSecurityConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSecurityConfigCommandOutput) => void),
    cb?: (err: any, data?: CreateSecurityConfigCommandOutput) => void
  ): Promise<CreateSecurityConfigCommandOutput> | void {
    const command = new CreateSecurityConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a security policy to be used by one or more OpenSearch Serverless collections. Security
   *             policies provide access to a collection and its OpenSearch Dashboards endpoint from
   *             public networks or specific VPC endpoints. They also allow you to secure a collection
   *             with a KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access
   *                 for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at
   *                 rest for Amazon OpenSearch Serverless</a>.</p>
   */
  public createSecurityPolicy(
    args: CreateSecurityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSecurityPolicyCommandOutput>;
  public createSecurityPolicy(
    args: CreateSecurityPolicyCommandInput,
    cb: (err: any, data?: CreateSecurityPolicyCommandOutput) => void
  ): void;
  public createSecurityPolicy(
    args: CreateSecurityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSecurityPolicyCommandOutput) => void
  ): void;
  public createSecurityPolicy(
    args: CreateSecurityPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSecurityPolicyCommandOutput) => void),
    cb?: (err: any, data?: CreateSecurityPolicyCommandOutput) => void
  ): Promise<CreateSecurityPolicyCommandOutput> | void {
    const command = new CreateSecurityPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an OpenSearch Serverless-managed interface VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access
   *                 Amazon OpenSearch Serverless using an interface endpoint</a>.</p>
   */
  public createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcEndpointCommandOutput>;
  public createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    cb: (err: any, data?: CreateVpcEndpointCommandOutput) => void
  ): void;
  public createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcEndpointCommandOutput) => void
  ): void;
  public createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVpcEndpointCommandOutput) => void),
    cb?: (err: any, data?: CreateVpcEndpointCommandOutput) => void
  ): Promise<CreateVpcEndpointCommandOutput> | void {
    const command = new CreateVpcEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data
   *                 access control for Amazon OpenSearch Serverless</a>.</p>
   */
  public deleteAccessPolicy(
    args: DeleteAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessPolicyCommandOutput>;
  public deleteAccessPolicy(
    args: DeleteAccessPolicyCommandInput,
    cb: (err: any, data?: DeleteAccessPolicyCommandOutput) => void
  ): void;
  public deleteAccessPolicy(
    args: DeleteAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessPolicyCommandOutput) => void
  ): void;
  public deleteAccessPolicy(
    args: DeleteAccessPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccessPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccessPolicyCommandOutput) => void
  ): Promise<DeleteAccessPolicyCommandOutput> | void {
    const command = new DeleteAccessPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and
   *                 managing Amazon OpenSearch Serverless collections</a>.</p>
   */
  public deleteCollection(
    args: DeleteCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCollectionCommandOutput>;
  public deleteCollection(
    args: DeleteCollectionCommandInput,
    cb: (err: any, data?: DeleteCollectionCommandOutput) => void
  ): void;
  public deleteCollection(
    args: DeleteCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCollectionCommandOutput) => void
  ): void;
  public deleteCollection(
    args: DeleteCollectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCollectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteCollectionCommandOutput) => void
  ): Promise<DeleteCollectionCommandOutput> | void {
    const command = new DeleteCollectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a security configuration for OpenSearch Serverless. For more information, see
   *             <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML
   *                 authentication for Amazon OpenSearch Serverless</a>.</p>
   */
  public deleteSecurityConfig(
    args: DeleteSecurityConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSecurityConfigCommandOutput>;
  public deleteSecurityConfig(
    args: DeleteSecurityConfigCommandInput,
    cb: (err: any, data?: DeleteSecurityConfigCommandOutput) => void
  ): void;
  public deleteSecurityConfig(
    args: DeleteSecurityConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSecurityConfigCommandOutput) => void
  ): void;
  public deleteSecurityConfig(
    args: DeleteSecurityConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSecurityConfigCommandOutput) => void),
    cb?: (err: any, data?: DeleteSecurityConfigCommandOutput) => void
  ): Promise<DeleteSecurityConfigCommandOutput> | void {
    const command = new DeleteSecurityConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an OpenSearch Serverless security policy.</p>
   */
  public deleteSecurityPolicy(
    args: DeleteSecurityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSecurityPolicyCommandOutput>;
  public deleteSecurityPolicy(
    args: DeleteSecurityPolicyCommandInput,
    cb: (err: any, data?: DeleteSecurityPolicyCommandOutput) => void
  ): void;
  public deleteSecurityPolicy(
    args: DeleteSecurityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSecurityPolicyCommandOutput) => void
  ): void;
  public deleteSecurityPolicy(
    args: DeleteSecurityPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSecurityPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteSecurityPolicyCommandOutput) => void
  ): Promise<DeleteSecurityPolicyCommandOutput> | void {
    const command = new DeleteSecurityPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an OpenSearch Serverless-managed interface endpoint. For more information, see
   *             <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.</p>
   */
  public deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcEndpointCommandOutput>;
  public deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    cb: (err: any, data?: DeleteVpcEndpointCommandOutput) => void
  ): void;
  public deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcEndpointCommandOutput) => void
  ): void;
  public deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVpcEndpointCommandOutput) => void),
    cb?: (err: any, data?: DeleteVpcEndpointCommandOutput) => void
  ): Promise<DeleteVpcEndpointCommandOutput> | void {
    const command = new DeleteVpcEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data
   *             access control for Amazon OpenSearch Serverless</a>.</p>
   */
  public getAccessPolicy(
    args: GetAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessPolicyCommandOutput>;
  public getAccessPolicy(
    args: GetAccessPolicyCommandInput,
    cb: (err: any, data?: GetAccessPolicyCommandOutput) => void
  ): void;
  public getAccessPolicy(
    args: GetAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessPolicyCommandOutput) => void
  ): void;
  public getAccessPolicy(
    args: GetAccessPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccessPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetAccessPolicyCommandOutput) => void
  ): Promise<GetAccessPolicyCommandOutput> | void {
    const command = new GetAccessPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns account-level settings related to OpenSearch Serverless.</p>
   */
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountSettingsCommandOutput>;
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccountSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): Promise<GetAccountSettingsCommandOutput> | void {
    const command = new GetAccountSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns statistical information about your OpenSearch Serverless access policies, security
   *             configurations, and security policies.</p>
   */
  public getPoliciesStats(
    args: GetPoliciesStatsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPoliciesStatsCommandOutput>;
  public getPoliciesStats(
    args: GetPoliciesStatsCommandInput,
    cb: (err: any, data?: GetPoliciesStatsCommandOutput) => void
  ): void;
  public getPoliciesStats(
    args: GetPoliciesStatsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPoliciesStatsCommandOutput) => void
  ): void;
  public getPoliciesStats(
    args: GetPoliciesStatsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPoliciesStatsCommandOutput) => void),
    cb?: (err: any, data?: GetPoliciesStatsCommandOutput) => void
  ): Promise<GetPoliciesStatsCommandOutput> | void {
    const command = new GetPoliciesStatsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about an OpenSearch Serverless security configuration. For more information, see
   *                 <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML
   *                 authentication for Amazon OpenSearch Serverless</a>.</p>
   */
  public getSecurityConfig(
    args: GetSecurityConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSecurityConfigCommandOutput>;
  public getSecurityConfig(
    args: GetSecurityConfigCommandInput,
    cb: (err: any, data?: GetSecurityConfigCommandOutput) => void
  ): void;
  public getSecurityConfig(
    args: GetSecurityConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSecurityConfigCommandOutput) => void
  ): void;
  public getSecurityConfig(
    args: GetSecurityConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSecurityConfigCommandOutput) => void),
    cb?: (err: any, data?: GetSecurityConfigCommandOutput) => void
  ): Promise<GetSecurityConfigCommandOutput> | void {
    const command = new GetSecurityConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a configured OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access
   *             for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at
   *                 rest for Amazon OpenSearch Serverless</a>.</p>
   */
  public getSecurityPolicy(
    args: GetSecurityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSecurityPolicyCommandOutput>;
  public getSecurityPolicy(
    args: GetSecurityPolicyCommandInput,
    cb: (err: any, data?: GetSecurityPolicyCommandOutput) => void
  ): void;
  public getSecurityPolicy(
    args: GetSecurityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSecurityPolicyCommandOutput) => void
  ): void;
  public getSecurityPolicy(
    args: GetSecurityPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSecurityPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetSecurityPolicyCommandOutput) => void
  ): Promise<GetSecurityPolicyCommandOutput> | void {
    const command = new GetSecurityPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a list of OpenSearch Serverless access policies.</p>
   */
  public listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessPoliciesCommandOutput>;
  public listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    cb: (err: any, data?: ListAccessPoliciesCommandOutput) => void
  ): void;
  public listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessPoliciesCommandOutput) => void
  ): void;
  public listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccessPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListAccessPoliciesCommandOutput) => void
  ): Promise<ListAccessPoliciesCommandOutput> | void {
    const command = new ListAccessPoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all OpenSearch Serverless collections. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and
   *                 managing Amazon OpenSearch Serverless collections</a>.</p>
   *         <note>
   *             <p>Make sure to include an empty request body {} if you don't include any collection
   *                 filters in the request.</p>
   *         </note>
   */
  public listCollections(
    args: ListCollectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCollectionsCommandOutput>;
  public listCollections(
    args: ListCollectionsCommandInput,
    cb: (err: any, data?: ListCollectionsCommandOutput) => void
  ): void;
  public listCollections(
    args: ListCollectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCollectionsCommandOutput) => void
  ): void;
  public listCollections(
    args: ListCollectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCollectionsCommandOutput) => void),
    cb?: (err: any, data?: ListCollectionsCommandOutput) => void
  ): Promise<ListCollectionsCommandOutput> | void {
    const command = new ListCollectionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about configured OpenSearch Serverless security configurations. For more information, see
   *             <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML
   *                 authentication for Amazon OpenSearch Serverless</a>.</p>
   */
  public listSecurityConfigs(
    args: ListSecurityConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityConfigsCommandOutput>;
  public listSecurityConfigs(
    args: ListSecurityConfigsCommandInput,
    cb: (err: any, data?: ListSecurityConfigsCommandOutput) => void
  ): void;
  public listSecurityConfigs(
    args: ListSecurityConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityConfigsCommandOutput) => void
  ): void;
  public listSecurityConfigs(
    args: ListSecurityConfigsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSecurityConfigsCommandOutput) => void),
    cb?: (err: any, data?: ListSecurityConfigsCommandOutput) => void
  ): Promise<ListSecurityConfigsCommandOutput> | void {
    const command = new ListSecurityConfigsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about configured OpenSearch Serverless security policies.</p>
   */
  public listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityPoliciesCommandOutput>;
  public listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    cb: (err: any, data?: ListSecurityPoliciesCommandOutput) => void
  ): void;
  public listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityPoliciesCommandOutput) => void
  ): void;
  public listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSecurityPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListSecurityPoliciesCommandOutput) => void
  ): Promise<ListSecurityPoliciesCommandOutput> | void {
    const command = new ListSecurityPoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the tags for an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the OpenSearch Serverless-managed interface VPC endpoints associated with the current
   *             account. For more information, see
   *             <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.</p>
   */
  public listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVpcEndpointsCommandOutput>;
  public listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    cb: (err: any, data?: ListVpcEndpointsCommandOutput) => void
  ): void;
  public listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVpcEndpointsCommandOutput) => void
  ): void;
  public listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVpcEndpointsCommandOutput) => void),
    cb?: (err: any, data?: ListVpcEndpointsCommandOutput) => void
  ): Promise<ListVpcEndpointsCommandOutput> | void {
    const command = new ListVpcEndpointsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates tags with an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a tag or set of tags from an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data
   *             access control for Amazon OpenSearch Serverless</a>.</p>
   */
  public updateAccessPolicy(
    args: UpdateAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccessPolicyCommandOutput>;
  public updateAccessPolicy(
    args: UpdateAccessPolicyCommandInput,
    cb: (err: any, data?: UpdateAccessPolicyCommandOutput) => void
  ): void;
  public updateAccessPolicy(
    args: UpdateAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccessPolicyCommandOutput) => void
  ): void;
  public updateAccessPolicy(
    args: UpdateAccessPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAccessPolicyCommandOutput) => void),
    cb?: (err: any, data?: UpdateAccessPolicyCommandOutput) => void
  ): Promise<UpdateAccessPolicyCommandOutput> | void {
    const command = new UpdateAccessPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update the OpenSearch Serverless settings for the current Amazon Web Services account. For more
   *             information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-overview.html#serverless-scaling">Autoscaling</a>.</p>
   */
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountSettingsCommandOutput>;
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAccountSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): Promise<UpdateAccountSettingsCommandOutput> | void {
    const command = new UpdateAccountSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an OpenSearch Serverless collection.</p>
   */
  public updateCollection(
    args: UpdateCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCollectionCommandOutput>;
  public updateCollection(
    args: UpdateCollectionCommandInput,
    cb: (err: any, data?: UpdateCollectionCommandOutput) => void
  ): void;
  public updateCollection(
    args: UpdateCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCollectionCommandOutput) => void
  ): void;
  public updateCollection(
    args: UpdateCollectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCollectionCommandOutput) => void),
    cb?: (err: any, data?: UpdateCollectionCommandOutput) => void
  ): Promise<UpdateCollectionCommandOutput> | void {
    const command = new UpdateCollectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a security configuration for OpenSearch Serverless. For more information, see
   *             <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML
   *                 authentication for Amazon OpenSearch Serverless</a>.</p>
   */
  public updateSecurityConfig(
    args: UpdateSecurityConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecurityConfigCommandOutput>;
  public updateSecurityConfig(
    args: UpdateSecurityConfigCommandInput,
    cb: (err: any, data?: UpdateSecurityConfigCommandOutput) => void
  ): void;
  public updateSecurityConfig(
    args: UpdateSecurityConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecurityConfigCommandOutput) => void
  ): void;
  public updateSecurityConfig(
    args: UpdateSecurityConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSecurityConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateSecurityConfigCommandOutput) => void
  ): Promise<UpdateSecurityConfigCommandOutput> | void {
    const command = new UpdateSecurityConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access
   *             for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at
   *                 rest for Amazon OpenSearch Serverless</a>.</p>
   */
  public updateSecurityPolicy(
    args: UpdateSecurityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecurityPolicyCommandOutput>;
  public updateSecurityPolicy(
    args: UpdateSecurityPolicyCommandInput,
    cb: (err: any, data?: UpdateSecurityPolicyCommandOutput) => void
  ): void;
  public updateSecurityPolicy(
    args: UpdateSecurityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecurityPolicyCommandOutput) => void
  ): void;
  public updateSecurityPolicy(
    args: UpdateSecurityPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSecurityPolicyCommandOutput) => void),
    cb?: (err: any, data?: UpdateSecurityPolicyCommandOutput) => void
  ): Promise<UpdateSecurityPolicyCommandOutput> | void {
    const command = new UpdateSecurityPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an OpenSearch Serverless-managed interface endpoint. For more information, see
   *             <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.</p>
   */
  public updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVpcEndpointCommandOutput>;
  public updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    cb: (err: any, data?: UpdateVpcEndpointCommandOutput) => void
  ): void;
  public updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVpcEndpointCommandOutput) => void
  ): void;
  public updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVpcEndpointCommandOutput) => void),
    cb?: (err: any, data?: UpdateVpcEndpointCommandOutput) => void
  ): Promise<UpdateVpcEndpointCommandOutput> | void {
    const command = new UpdateVpcEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
