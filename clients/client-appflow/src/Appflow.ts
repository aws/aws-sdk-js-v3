// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AppflowClient } from "./AppflowClient";
import {
  CreateConnectorProfileCommand,
  CreateConnectorProfileCommandInput,
  CreateConnectorProfileCommandOutput,
} from "./commands/CreateConnectorProfileCommand";
import { CreateFlowCommand, CreateFlowCommandInput, CreateFlowCommandOutput } from "./commands/CreateFlowCommand";
import {
  DeleteConnectorProfileCommand,
  DeleteConnectorProfileCommandInput,
  DeleteConnectorProfileCommandOutput,
} from "./commands/DeleteConnectorProfileCommand";
import { DeleteFlowCommand, DeleteFlowCommandInput, DeleteFlowCommandOutput } from "./commands/DeleteFlowCommand";
import {
  DescribeConnectorCommand,
  DescribeConnectorCommandInput,
  DescribeConnectorCommandOutput,
} from "./commands/DescribeConnectorCommand";
import {
  DescribeConnectorEntityCommand,
  DescribeConnectorEntityCommandInput,
  DescribeConnectorEntityCommandOutput,
} from "./commands/DescribeConnectorEntityCommand";
import {
  DescribeConnectorProfilesCommand,
  DescribeConnectorProfilesCommandInput,
  DescribeConnectorProfilesCommandOutput,
} from "./commands/DescribeConnectorProfilesCommand";
import {
  DescribeConnectorsCommand,
  DescribeConnectorsCommandInput,
  DescribeConnectorsCommandOutput,
} from "./commands/DescribeConnectorsCommand";
import {
  DescribeFlowCommand,
  DescribeFlowCommandInput,
  DescribeFlowCommandOutput,
} from "./commands/DescribeFlowCommand";
import {
  DescribeFlowExecutionRecordsCommand,
  DescribeFlowExecutionRecordsCommandInput,
  DescribeFlowExecutionRecordsCommandOutput,
} from "./commands/DescribeFlowExecutionRecordsCommand";
import {
  ListConnectorEntitiesCommand,
  ListConnectorEntitiesCommandInput,
  ListConnectorEntitiesCommandOutput,
} from "./commands/ListConnectorEntitiesCommand";
import {
  ListConnectorsCommand,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
} from "./commands/ListConnectorsCommand";
import { ListFlowsCommand, ListFlowsCommandInput, ListFlowsCommandOutput } from "./commands/ListFlowsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterConnectorCommand,
  RegisterConnectorCommandInput,
  RegisterConnectorCommandOutput,
} from "./commands/RegisterConnectorCommand";
import { StartFlowCommand, StartFlowCommandInput, StartFlowCommandOutput } from "./commands/StartFlowCommand";
import { StopFlowCommand, StopFlowCommandInput, StopFlowCommandOutput } from "./commands/StopFlowCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UnregisterConnectorCommand,
  UnregisterConnectorCommandInput,
  UnregisterConnectorCommandOutput,
} from "./commands/UnregisterConnectorCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateConnectorProfileCommand,
  UpdateConnectorProfileCommandInput,
  UpdateConnectorProfileCommandOutput,
} from "./commands/UpdateConnectorProfileCommand";
import {
  UpdateConnectorRegistrationCommand,
  UpdateConnectorRegistrationCommandInput,
  UpdateConnectorRegistrationCommandOutput,
} from "./commands/UpdateConnectorRegistrationCommand";
import { UpdateFlowCommand, UpdateFlowCommandInput, UpdateFlowCommandOutput } from "./commands/UpdateFlowCommand";

/**
 * <p>Welcome to the Amazon AppFlow API reference. This guide is for developers who need
 *       detailed information about the Amazon AppFlow API operations, data types, and errors. </p>
 *          <p>Amazon AppFlow is a fully managed integration service that enables you to securely
 *       transfer data between software as a service (SaaS) applications like Salesforce, Marketo,
 *       Slack, and ServiceNow, and Amazon Web Services like Amazon S3 and Amazon Redshift. </p>
 *          <p>Use the following links to get started on the Amazon AppFlow API:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Amazon AppFlow API
 *           operations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Types.html">Data
 *             types</a>: An alphabetical list of all Amazon AppFlow data types.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all Query operations can use.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonErrors.html">Common
 *             errors</a>: Client and server errors that all operations can return.</p>
 *             </li>
 *          </ul>
 *          <p>If you're new to Amazon AppFlow, we recommend that you review the <a href="https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html">Amazon AppFlow User Guide</a>.</p>
 *          <p>Amazon AppFlow API users can use vendor-specific mechanisms for OAuth, and include
 *       applicable OAuth attributes (such as <code>auth-code</code> and <code>redirecturi</code>) with
 *       the connector-specific <code>ConnectorProfileProperties</code> when creating a new connector
 *       profile using Amazon AppFlow API operations. For example, Salesforce users can refer to
 *       the <a href="https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm">
 *                <i>Authorize Apps with OAuth</i>
 *             </a> documentation.</p>
 */
export class Appflow extends AppflowClient {
  /**
   * <p> Creates a new connector profile associated with your Amazon Web Services account. There
   *       is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more
   *       connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you
   *       create, you can provide the credentials and properties for only one connector.</p>
   */
  public createConnectorProfile(
    args: CreateConnectorProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectorProfileCommandOutput>;
  public createConnectorProfile(
    args: CreateConnectorProfileCommandInput,
    cb: (err: any, data?: CreateConnectorProfileCommandOutput) => void
  ): void;
  public createConnectorProfile(
    args: CreateConnectorProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectorProfileCommandOutput) => void
  ): void;
  public createConnectorProfile(
    args: CreateConnectorProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConnectorProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateConnectorProfileCommandOutput) => void
  ): Promise<CreateConnectorProfileCommandOutput> | void {
    const command = new CreateConnectorProfileCommand(args);
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
   * <p> Enables your application to create a new flow using Amazon AppFlow. You must create
   *       a connector profile before calling this API. Please note that the Request Syntax below shows
   *       syntax for multiple destinations, however, you can only transfer data to one item in this list
   *       at a time. Amazon AppFlow does not currently support flows to multiple destinations at
   *       once. </p>
   */
  public createFlow(args: CreateFlowCommandInput, options?: __HttpHandlerOptions): Promise<CreateFlowCommandOutput>;
  public createFlow(args: CreateFlowCommandInput, cb: (err: any, data?: CreateFlowCommandOutput) => void): void;
  public createFlow(
    args: CreateFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFlowCommandOutput) => void
  ): void;
  public createFlow(
    args: CreateFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFlowCommandOutput) => void),
    cb?: (err: any, data?: CreateFlowCommandOutput) => void
  ): Promise<CreateFlowCommandOutput> | void {
    const command = new CreateFlowCommand(args);
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
   * <p> Enables you to delete an existing connector profile. </p>
   */
  public deleteConnectorProfile(
    args: DeleteConnectorProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectorProfileCommandOutput>;
  public deleteConnectorProfile(
    args: DeleteConnectorProfileCommandInput,
    cb: (err: any, data?: DeleteConnectorProfileCommandOutput) => void
  ): void;
  public deleteConnectorProfile(
    args: DeleteConnectorProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectorProfileCommandOutput) => void
  ): void;
  public deleteConnectorProfile(
    args: DeleteConnectorProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConnectorProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteConnectorProfileCommandOutput) => void
  ): Promise<DeleteConnectorProfileCommandOutput> | void {
    const command = new DeleteConnectorProfileCommand(args);
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
   * <p> Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can
   *       delete flows one at a time. </p>
   */
  public deleteFlow(args: DeleteFlowCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFlowCommandOutput>;
  public deleteFlow(args: DeleteFlowCommandInput, cb: (err: any, data?: DeleteFlowCommandOutput) => void): void;
  public deleteFlow(
    args: DeleteFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFlowCommandOutput) => void
  ): void;
  public deleteFlow(
    args: DeleteFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFlowCommandOutput) => void),
    cb?: (err: any, data?: DeleteFlowCommandOutput) => void
  ): Promise<DeleteFlowCommandOutput> | void {
    const command = new DeleteFlowCommand(args);
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
   * <p>Describes the given custom connector registered in your Amazon Web Services account. This
   *       API can be used for custom connectors that are registered in your account and also for Amazon
   *       authored connectors.</p>
   */
  public describeConnector(
    args: DescribeConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectorCommandOutput>;
  public describeConnector(
    args: DescribeConnectorCommandInput,
    cb: (err: any, data?: DescribeConnectorCommandOutput) => void
  ): void;
  public describeConnector(
    args: DescribeConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectorCommandOutput) => void
  ): void;
  public describeConnector(
    args: DescribeConnectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConnectorCommandOutput) => void),
    cb?: (err: any, data?: DescribeConnectorCommandOutput) => void
  ): Promise<DescribeConnectorCommandOutput> | void {
    const command = new DescribeConnectorCommand(args);
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
   * <p> Provides details regarding the entity used with the connector, with a description of the
   *       data model for each field in that entity. </p>
   */
  public describeConnectorEntity(
    args: DescribeConnectorEntityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectorEntityCommandOutput>;
  public describeConnectorEntity(
    args: DescribeConnectorEntityCommandInput,
    cb: (err: any, data?: DescribeConnectorEntityCommandOutput) => void
  ): void;
  public describeConnectorEntity(
    args: DescribeConnectorEntityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectorEntityCommandOutput) => void
  ): void;
  public describeConnectorEntity(
    args: DescribeConnectorEntityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConnectorEntityCommandOutput) => void),
    cb?: (err: any, data?: DescribeConnectorEntityCommandOutput) => void
  ): Promise<DescribeConnectorEntityCommandOutput> | void {
    const command = new DescribeConnectorEntityCommand(args);
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
   * <p> Returns a list of <code>connector-profile</code> details matching the provided
   *         <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are
   *       optional, and you can use them to filter the result. </p>
   *          <p>If no names or <code>connector-types</code> are provided, returns all connector profiles
   *       in a paginated form. If there is no match, this operation returns an empty list.</p>
   */
  public describeConnectorProfiles(
    args: DescribeConnectorProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectorProfilesCommandOutput>;
  public describeConnectorProfiles(
    args: DescribeConnectorProfilesCommandInput,
    cb: (err: any, data?: DescribeConnectorProfilesCommandOutput) => void
  ): void;
  public describeConnectorProfiles(
    args: DescribeConnectorProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectorProfilesCommandOutput) => void
  ): void;
  public describeConnectorProfiles(
    args: DescribeConnectorProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConnectorProfilesCommandOutput) => void),
    cb?: (err: any, data?: DescribeConnectorProfilesCommandOutput) => void
  ): Promise<DescribeConnectorProfilesCommandOutput> | void {
    const command = new DescribeConnectorProfilesCommand(args);
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
   * <p> Describes the connectors vended by Amazon AppFlow for specified connector types. If
   *       you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response
   *       contains a <code>nextToken</code> object, which can be be passed in to the next call to the
   *         <code>DescribeConnectors</code> API operation to retrieve the next page. </p>
   */
  public describeConnectors(
    args: DescribeConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectorsCommandOutput>;
  public describeConnectors(
    args: DescribeConnectorsCommandInput,
    cb: (err: any, data?: DescribeConnectorsCommandOutput) => void
  ): void;
  public describeConnectors(
    args: DescribeConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectorsCommandOutput) => void
  ): void;
  public describeConnectors(
    args: DescribeConnectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConnectorsCommandOutput) => void),
    cb?: (err: any, data?: DescribeConnectorsCommandOutput) => void
  ): Promise<DescribeConnectorsCommandOutput> | void {
    const command = new DescribeConnectorsCommand(args);
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
   * <p> Provides a description of the specified flow. </p>
   */
  public describeFlow(
    args: DescribeFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFlowCommandOutput>;
  public describeFlow(args: DescribeFlowCommandInput, cb: (err: any, data?: DescribeFlowCommandOutput) => void): void;
  public describeFlow(
    args: DescribeFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFlowCommandOutput) => void
  ): void;
  public describeFlow(
    args: DescribeFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFlowCommandOutput) => void),
    cb?: (err: any, data?: DescribeFlowCommandOutput) => void
  ): Promise<DescribeFlowCommandOutput> | void {
    const command = new DescribeFlowCommand(args);
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
   * <p> Fetches the execution history of the flow. </p>
   */
  public describeFlowExecutionRecords(
    args: DescribeFlowExecutionRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFlowExecutionRecordsCommandOutput>;
  public describeFlowExecutionRecords(
    args: DescribeFlowExecutionRecordsCommandInput,
    cb: (err: any, data?: DescribeFlowExecutionRecordsCommandOutput) => void
  ): void;
  public describeFlowExecutionRecords(
    args: DescribeFlowExecutionRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFlowExecutionRecordsCommandOutput) => void
  ): void;
  public describeFlowExecutionRecords(
    args: DescribeFlowExecutionRecordsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFlowExecutionRecordsCommandOutput) => void),
    cb?: (err: any, data?: DescribeFlowExecutionRecordsCommandOutput) => void
  ): Promise<DescribeFlowExecutionRecordsCommandOutput> | void {
    const command = new DescribeFlowExecutionRecordsCommand(args);
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
   * <p> Returns the list of available connector entities supported by Amazon AppFlow. For
   *       example, you can query Salesforce for <i>Account</i> and
   *         <i>Opportunity</i> entities, or query ServiceNow for the
   *         <i>Incident</i> entity. </p>
   */
  public listConnectorEntities(
    args: ListConnectorEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorEntitiesCommandOutput>;
  public listConnectorEntities(
    args: ListConnectorEntitiesCommandInput,
    cb: (err: any, data?: ListConnectorEntitiesCommandOutput) => void
  ): void;
  public listConnectorEntities(
    args: ListConnectorEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectorEntitiesCommandOutput) => void
  ): void;
  public listConnectorEntities(
    args: ListConnectorEntitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConnectorEntitiesCommandOutput) => void),
    cb?: (err: any, data?: ListConnectorEntitiesCommandOutput) => void
  ): Promise<ListConnectorEntitiesCommandOutput> | void {
    const command = new ListConnectorEntitiesCommand(args);
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
   * <p>Returns the list of all registered custom connectors in your Amazon Web Services account.
   *       This API lists only custom connectors registered in this account, not the Amazon Web Services
   *       authored connectors. </p>
   */
  public listConnectors(
    args: ListConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorsCommandOutput>;
  public listConnectors(
    args: ListConnectorsCommandInput,
    cb: (err: any, data?: ListConnectorsCommandOutput) => void
  ): void;
  public listConnectors(
    args: ListConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectorsCommandOutput) => void
  ): void;
  public listConnectors(
    args: ListConnectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConnectorsCommandOutput) => void),
    cb?: (err: any, data?: ListConnectorsCommandOutput) => void
  ): Promise<ListConnectorsCommandOutput> | void {
    const command = new ListConnectorsCommand(args);
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
   * <p> Lists all of the flows associated with your account. </p>
   */
  public listFlows(args: ListFlowsCommandInput, options?: __HttpHandlerOptions): Promise<ListFlowsCommandOutput>;
  public listFlows(args: ListFlowsCommandInput, cb: (err: any, data?: ListFlowsCommandOutput) => void): void;
  public listFlows(
    args: ListFlowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowsCommandOutput) => void
  ): void;
  public listFlows(
    args: ListFlowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFlowsCommandOutput) => void),
    cb?: (err: any, data?: ListFlowsCommandOutput) => void
  ): Promise<ListFlowsCommandOutput> | void {
    const command = new ListFlowsCommand(args);
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
   * <p> Retrieves the tags that are associated with a specified flow. </p>
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
   * <p>Registers a new custom connector with your Amazon Web Services account. Before you can
   *       register the connector, you must deploy the associated AWS lambda function in your
   *       account.</p>
   */
  public registerConnector(
    args: RegisterConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterConnectorCommandOutput>;
  public registerConnector(
    args: RegisterConnectorCommandInput,
    cb: (err: any, data?: RegisterConnectorCommandOutput) => void
  ): void;
  public registerConnector(
    args: RegisterConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterConnectorCommandOutput) => void
  ): void;
  public registerConnector(
    args: RegisterConnectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterConnectorCommandOutput) => void),
    cb?: (err: any, data?: RegisterConnectorCommandOutput) => void
  ): Promise<RegisterConnectorCommandOutput> | void {
    const command = new RegisterConnectorCommand(args);
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
   * <p> Activates an existing flow. For on-demand flows, this operation runs the flow
   *       immediately. For schedule and event-triggered flows, this operation activates the flow. </p>
   */
  public startFlow(args: StartFlowCommandInput, options?: __HttpHandlerOptions): Promise<StartFlowCommandOutput>;
  public startFlow(args: StartFlowCommandInput, cb: (err: any, data?: StartFlowCommandOutput) => void): void;
  public startFlow(
    args: StartFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFlowCommandOutput) => void
  ): void;
  public startFlow(
    args: StartFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartFlowCommandOutput) => void),
    cb?: (err: any, data?: StartFlowCommandOutput) => void
  ): Promise<StartFlowCommandOutput> | void {
    const command = new StartFlowCommand(args);
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
   * <p> Deactivates the existing flow. For on-demand flows, this operation returns an
   *         <code>unsupportedOperationException</code> error message. For schedule and event-triggered
   *       flows, this operation deactivates the flow. </p>
   */
  public stopFlow(args: StopFlowCommandInput, options?: __HttpHandlerOptions): Promise<StopFlowCommandOutput>;
  public stopFlow(args: StopFlowCommandInput, cb: (err: any, data?: StopFlowCommandOutput) => void): void;
  public stopFlow(
    args: StopFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopFlowCommandOutput) => void
  ): void;
  public stopFlow(
    args: StopFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopFlowCommandOutput) => void),
    cb?: (err: any, data?: StopFlowCommandOutput) => void
  ): Promise<StopFlowCommandOutput> | void {
    const command = new StopFlowCommand(args);
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
   * <p> Applies a tag to the specified flow. </p>
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
   * <p>Unregisters the custom connector registered in your account that matches the connector
   *       label provided in the request.</p>
   */
  public unregisterConnector(
    args: UnregisterConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnregisterConnectorCommandOutput>;
  public unregisterConnector(
    args: UnregisterConnectorCommandInput,
    cb: (err: any, data?: UnregisterConnectorCommandOutput) => void
  ): void;
  public unregisterConnector(
    args: UnregisterConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnregisterConnectorCommandOutput) => void
  ): void;
  public unregisterConnector(
    args: UnregisterConnectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UnregisterConnectorCommandOutput) => void),
    cb?: (err: any, data?: UnregisterConnectorCommandOutput) => void
  ): Promise<UnregisterConnectorCommandOutput> | void {
    const command = new UnregisterConnectorCommand(args);
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
   * <p> Removes a tag from the specified flow. </p>
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
   * <p> Updates a given connector profile associated with your account. </p>
   */
  public updateConnectorProfile(
    args: UpdateConnectorProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectorProfileCommandOutput>;
  public updateConnectorProfile(
    args: UpdateConnectorProfileCommandInput,
    cb: (err: any, data?: UpdateConnectorProfileCommandOutput) => void
  ): void;
  public updateConnectorProfile(
    args: UpdateConnectorProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectorProfileCommandOutput) => void
  ): void;
  public updateConnectorProfile(
    args: UpdateConnectorProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConnectorProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateConnectorProfileCommandOutput) => void
  ): Promise<UpdateConnectorProfileCommandOutput> | void {
    const command = new UpdateConnectorProfileCommand(args);
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
   * <p>Updates a custom connector that you've previously registered. This operation updates the
   *       connector with one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>The latest version of the AWS Lambda function that's assigned to the connector</p>
   *             </li>
   *             <li>
   *                <p>A new AWS Lambda function that you specify</p>
   *             </li>
   *          </ul>
   */
  public updateConnectorRegistration(
    args: UpdateConnectorRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectorRegistrationCommandOutput>;
  public updateConnectorRegistration(
    args: UpdateConnectorRegistrationCommandInput,
    cb: (err: any, data?: UpdateConnectorRegistrationCommandOutput) => void
  ): void;
  public updateConnectorRegistration(
    args: UpdateConnectorRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectorRegistrationCommandOutput) => void
  ): void;
  public updateConnectorRegistration(
    args: UpdateConnectorRegistrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConnectorRegistrationCommandOutput) => void),
    cb?: (err: any, data?: UpdateConnectorRegistrationCommandOutput) => void
  ): Promise<UpdateConnectorRegistrationCommandOutput> | void {
    const command = new UpdateConnectorRegistrationCommand(args);
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
   * <p> Updates an existing flow. </p>
   */
  public updateFlow(args: UpdateFlowCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFlowCommandOutput>;
  public updateFlow(args: UpdateFlowCommandInput, cb: (err: any, data?: UpdateFlowCommandOutput) => void): void;
  public updateFlow(
    args: UpdateFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowCommandOutput) => void
  ): void;
  public updateFlow(
    args: UpdateFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFlowCommandOutput) => void),
    cb?: (err: any, data?: UpdateFlowCommandOutput) => void
  ): Promise<UpdateFlowCommandOutput> | void {
    const command = new UpdateFlowCommand(args);
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
