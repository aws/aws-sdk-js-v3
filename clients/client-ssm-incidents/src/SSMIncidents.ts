// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateReplicationSetCommand,
  CreateReplicationSetCommandInput,
  CreateReplicationSetCommandOutput,
} from "./commands/CreateReplicationSetCommand";
import {
  CreateResponsePlanCommand,
  CreateResponsePlanCommandInput,
  CreateResponsePlanCommandOutput,
} from "./commands/CreateResponsePlanCommand";
import {
  CreateTimelineEventCommand,
  CreateTimelineEventCommandInput,
  CreateTimelineEventCommandOutput,
} from "./commands/CreateTimelineEventCommand";
import {
  DeleteIncidentRecordCommand,
  DeleteIncidentRecordCommandInput,
  DeleteIncidentRecordCommandOutput,
} from "./commands/DeleteIncidentRecordCommand";
import {
  DeleteReplicationSetCommand,
  DeleteReplicationSetCommandInput,
  DeleteReplicationSetCommandOutput,
} from "./commands/DeleteReplicationSetCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteResponsePlanCommand,
  DeleteResponsePlanCommandInput,
  DeleteResponsePlanCommandOutput,
} from "./commands/DeleteResponsePlanCommand";
import {
  DeleteTimelineEventCommand,
  DeleteTimelineEventCommandInput,
  DeleteTimelineEventCommandOutput,
} from "./commands/DeleteTimelineEventCommand";
import {
  GetIncidentRecordCommand,
  GetIncidentRecordCommandInput,
  GetIncidentRecordCommandOutput,
} from "./commands/GetIncidentRecordCommand";
import {
  GetReplicationSetCommand,
  GetReplicationSetCommandInput,
  GetReplicationSetCommandOutput,
} from "./commands/GetReplicationSetCommand";
import {
  GetResourcePoliciesCommand,
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "./commands/GetResourcePoliciesCommand";
import {
  GetResponsePlanCommand,
  GetResponsePlanCommandInput,
  GetResponsePlanCommandOutput,
} from "./commands/GetResponsePlanCommand";
import {
  GetTimelineEventCommand,
  GetTimelineEventCommandInput,
  GetTimelineEventCommandOutput,
} from "./commands/GetTimelineEventCommand";
import {
  ListIncidentRecordsCommand,
  ListIncidentRecordsCommandInput,
  ListIncidentRecordsCommandOutput,
} from "./commands/ListIncidentRecordsCommand";
import {
  ListRelatedItemsCommand,
  ListRelatedItemsCommandInput,
  ListRelatedItemsCommandOutput,
} from "./commands/ListRelatedItemsCommand";
import {
  ListReplicationSetsCommand,
  ListReplicationSetsCommandInput,
  ListReplicationSetsCommandOutput,
} from "./commands/ListReplicationSetsCommand";
import {
  ListResponsePlansCommand,
  ListResponsePlansCommandInput,
  ListResponsePlansCommandOutput,
} from "./commands/ListResponsePlansCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTimelineEventsCommand,
  ListTimelineEventsCommandInput,
  ListTimelineEventsCommandOutput,
} from "./commands/ListTimelineEventsCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  StartIncidentCommand,
  StartIncidentCommandInput,
  StartIncidentCommandOutput,
} from "./commands/StartIncidentCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDeletionProtectionCommand,
  UpdateDeletionProtectionCommandInput,
  UpdateDeletionProtectionCommandOutput,
} from "./commands/UpdateDeletionProtectionCommand";
import {
  UpdateIncidentRecordCommand,
  UpdateIncidentRecordCommandInput,
  UpdateIncidentRecordCommandOutput,
} from "./commands/UpdateIncidentRecordCommand";
import {
  UpdateRelatedItemsCommand,
  UpdateRelatedItemsCommandInput,
  UpdateRelatedItemsCommandOutput,
} from "./commands/UpdateRelatedItemsCommand";
import {
  UpdateReplicationSetCommand,
  UpdateReplicationSetCommandInput,
  UpdateReplicationSetCommandOutput,
} from "./commands/UpdateReplicationSetCommand";
import {
  UpdateResponsePlanCommand,
  UpdateResponsePlanCommandInput,
  UpdateResponsePlanCommandOutput,
} from "./commands/UpdateResponsePlanCommand";
import {
  UpdateTimelineEventCommand,
  UpdateTimelineEventCommandInput,
  UpdateTimelineEventCommandOutput,
} from "./commands/UpdateTimelineEventCommand";
import { SSMIncidentsClient } from "./SSMIncidentsClient";

/**
 * <p>Systems Manager Incident Manager is an incident management console designed to help users
 *       mitigate and recover from incidents affecting their Amazon Web Services-hosted applications. An
 *       incident is any unplanned interruption or reduction in quality of services. </p>
 *          <p>Incident Manager increases incident resolution by notifying responders of impact,
 *       highlighting relevant troubleshooting data, and providing collaboration tools to get services
 *       back up and running. To achieve the primary goal of reducing the time-to-resolution of
 *       critical incidents, Incident Manager automates response plans and enables responder
 *       team escalation. </p>
 */
export class SSMIncidents extends SSMIncidentsClient {
  /**
   * <p>A replication set replicates and encrypts your data to the provided Regions with the
   *             provided KMS key. </p>
   */
  public createReplicationSet(
    args: CreateReplicationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationSetCommandOutput>;
  public createReplicationSet(
    args: CreateReplicationSetCommandInput,
    cb: (err: any, data?: CreateReplicationSetCommandOutput) => void
  ): void;
  public createReplicationSet(
    args: CreateReplicationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationSetCommandOutput) => void
  ): void;
  public createReplicationSet(
    args: CreateReplicationSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateReplicationSetCommandOutput) => void),
    cb?: (err: any, data?: CreateReplicationSetCommandOutput) => void
  ): Promise<CreateReplicationSetCommandOutput> | void {
    const command = new CreateReplicationSetCommand(args);
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
   * <p>Creates a response plan that automates the initial response to incidents. A response
   *             plan engages contacts, starts chat channel collaboration, and initiates runbooks at the
   *             beginning of an incident.</p>
   */
  public createResponsePlan(
    args: CreateResponsePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResponsePlanCommandOutput>;
  public createResponsePlan(
    args: CreateResponsePlanCommandInput,
    cb: (err: any, data?: CreateResponsePlanCommandOutput) => void
  ): void;
  public createResponsePlan(
    args: CreateResponsePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResponsePlanCommandOutput) => void
  ): void;
  public createResponsePlan(
    args: CreateResponsePlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateResponsePlanCommandOutput) => void),
    cb?: (err: any, data?: CreateResponsePlanCommandOutput) => void
  ): Promise<CreateResponsePlanCommandOutput> | void {
    const command = new CreateResponsePlanCommand(args);
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
   * <p>Creates a custom timeline event on the incident details page of an incident record.
   *             Timeline events are automatically created by Incident Manager, marking key moment during an
   *             incident. You can create custom timeline events to mark important events that are
   *             automatically detected by Incident Manager.</p>
   */
  public createTimelineEvent(
    args: CreateTimelineEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTimelineEventCommandOutput>;
  public createTimelineEvent(
    args: CreateTimelineEventCommandInput,
    cb: (err: any, data?: CreateTimelineEventCommandOutput) => void
  ): void;
  public createTimelineEvent(
    args: CreateTimelineEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTimelineEventCommandOutput) => void
  ): void;
  public createTimelineEvent(
    args: CreateTimelineEventCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTimelineEventCommandOutput) => void),
    cb?: (err: any, data?: CreateTimelineEventCommandOutput) => void
  ): Promise<CreateTimelineEventCommandOutput> | void {
    const command = new CreateTimelineEventCommand(args);
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
   * <p>Delete an incident record from Incident Manager. </p>
   */
  public deleteIncidentRecord(
    args: DeleteIncidentRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIncidentRecordCommandOutput>;
  public deleteIncidentRecord(
    args: DeleteIncidentRecordCommandInput,
    cb: (err: any, data?: DeleteIncidentRecordCommandOutput) => void
  ): void;
  public deleteIncidentRecord(
    args: DeleteIncidentRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIncidentRecordCommandOutput) => void
  ): void;
  public deleteIncidentRecord(
    args: DeleteIncidentRecordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteIncidentRecordCommandOutput) => void),
    cb?: (err: any, data?: DeleteIncidentRecordCommandOutput) => void
  ): Promise<DeleteIncidentRecordCommandOutput> | void {
    const command = new DeleteIncidentRecordCommand(args);
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
   * <p>Deletes all Regions in your replication set. Deleting the replication set deletes all
   *             Incident Manager data.</p>
   */
  public deleteReplicationSet(
    args: DeleteReplicationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationSetCommandOutput>;
  public deleteReplicationSet(
    args: DeleteReplicationSetCommandInput,
    cb: (err: any, data?: DeleteReplicationSetCommandOutput) => void
  ): void;
  public deleteReplicationSet(
    args: DeleteReplicationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationSetCommandOutput) => void
  ): void;
  public deleteReplicationSet(
    args: DeleteReplicationSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteReplicationSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteReplicationSetCommandOutput) => void
  ): Promise<DeleteReplicationSetCommandOutput> | void {
    const command = new DeleteReplicationSetCommand(args);
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
   * <p>Deletes the resource policy that Resource Access Manager uses to share your Incident Manager
   *             resource.</p>
   */
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): Promise<DeleteResourcePolicyCommandOutput> | void {
    const command = new DeleteResourcePolicyCommand(args);
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
   * <p>Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this
   *             response plan.</p>
   */
  public deleteResponsePlan(
    args: DeleteResponsePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResponsePlanCommandOutput>;
  public deleteResponsePlan(
    args: DeleteResponsePlanCommandInput,
    cb: (err: any, data?: DeleteResponsePlanCommandOutput) => void
  ): void;
  public deleteResponsePlan(
    args: DeleteResponsePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResponsePlanCommandOutput) => void
  ): void;
  public deleteResponsePlan(
    args: DeleteResponsePlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResponsePlanCommandOutput) => void),
    cb?: (err: any, data?: DeleteResponsePlanCommandOutput) => void
  ): Promise<DeleteResponsePlanCommandOutput> | void {
    const command = new DeleteResponsePlanCommand(args);
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
   * <p>Deletes a timeline event from an incident.</p>
   */
  public deleteTimelineEvent(
    args: DeleteTimelineEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTimelineEventCommandOutput>;
  public deleteTimelineEvent(
    args: DeleteTimelineEventCommandInput,
    cb: (err: any, data?: DeleteTimelineEventCommandOutput) => void
  ): void;
  public deleteTimelineEvent(
    args: DeleteTimelineEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTimelineEventCommandOutput) => void
  ): void;
  public deleteTimelineEvent(
    args: DeleteTimelineEventCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTimelineEventCommandOutput) => void),
    cb?: (err: any, data?: DeleteTimelineEventCommandOutput) => void
  ): Promise<DeleteTimelineEventCommandOutput> | void {
    const command = new DeleteTimelineEventCommand(args);
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
   * <p>Returns the details for the specified incident record.</p>
   */
  public getIncidentRecord(
    args: GetIncidentRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIncidentRecordCommandOutput>;
  public getIncidentRecord(
    args: GetIncidentRecordCommandInput,
    cb: (err: any, data?: GetIncidentRecordCommandOutput) => void
  ): void;
  public getIncidentRecord(
    args: GetIncidentRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIncidentRecordCommandOutput) => void
  ): void;
  public getIncidentRecord(
    args: GetIncidentRecordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIncidentRecordCommandOutput) => void),
    cb?: (err: any, data?: GetIncidentRecordCommandOutput) => void
  ): Promise<GetIncidentRecordCommandOutput> | void {
    const command = new GetIncidentRecordCommand(args);
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
   * <p>Retrieve your Incident Manager replication set.</p>
   */
  public getReplicationSet(
    args: GetReplicationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReplicationSetCommandOutput>;
  public getReplicationSet(
    args: GetReplicationSetCommandInput,
    cb: (err: any, data?: GetReplicationSetCommandOutput) => void
  ): void;
  public getReplicationSet(
    args: GetReplicationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReplicationSetCommandOutput) => void
  ): void;
  public getReplicationSet(
    args: GetReplicationSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReplicationSetCommandOutput) => void),
    cb?: (err: any, data?: GetReplicationSetCommandOutput) => void
  ): Promise<GetReplicationSetCommandOutput> | void {
    const command = new GetReplicationSetCommand(args);
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
   * <p>Retrieves the resource policies attached to the specified response plan.</p>
   */
  public getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePoliciesCommandOutput>;
  public getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;
  public getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;
  public getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourcePoliciesCommandOutput) => void),
    cb?: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): Promise<GetResourcePoliciesCommandOutput> | void {
    const command = new GetResourcePoliciesCommand(args);
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
   * <p>Retrieves the details of the specified response plan.</p>
   */
  public getResponsePlan(
    args: GetResponsePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResponsePlanCommandOutput>;
  public getResponsePlan(
    args: GetResponsePlanCommandInput,
    cb: (err: any, data?: GetResponsePlanCommandOutput) => void
  ): void;
  public getResponsePlan(
    args: GetResponsePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResponsePlanCommandOutput) => void
  ): void;
  public getResponsePlan(
    args: GetResponsePlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResponsePlanCommandOutput) => void),
    cb?: (err: any, data?: GetResponsePlanCommandOutput) => void
  ): Promise<GetResponsePlanCommandOutput> | void {
    const command = new GetResponsePlanCommand(args);
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
   * <p>Retrieves a timeline event based on its ID and incident record.</p>
   */
  public getTimelineEvent(
    args: GetTimelineEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTimelineEventCommandOutput>;
  public getTimelineEvent(
    args: GetTimelineEventCommandInput,
    cb: (err: any, data?: GetTimelineEventCommandOutput) => void
  ): void;
  public getTimelineEvent(
    args: GetTimelineEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTimelineEventCommandOutput) => void
  ): void;
  public getTimelineEvent(
    args: GetTimelineEventCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTimelineEventCommandOutput) => void),
    cb?: (err: any, data?: GetTimelineEventCommandOutput) => void
  ): Promise<GetTimelineEventCommandOutput> | void {
    const command = new GetTimelineEventCommand(args);
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
   * <p>Lists all incident records in your account. Use this command to retrieve the Amazon
   *             Resource Name (ARN) of the incident record you want to update. </p>
   */
  public listIncidentRecords(
    args: ListIncidentRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIncidentRecordsCommandOutput>;
  public listIncidentRecords(
    args: ListIncidentRecordsCommandInput,
    cb: (err: any, data?: ListIncidentRecordsCommandOutput) => void
  ): void;
  public listIncidentRecords(
    args: ListIncidentRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIncidentRecordsCommandOutput) => void
  ): void;
  public listIncidentRecords(
    args: ListIncidentRecordsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIncidentRecordsCommandOutput) => void),
    cb?: (err: any, data?: ListIncidentRecordsCommandOutput) => void
  ): Promise<ListIncidentRecordsCommandOutput> | void {
    const command = new ListIncidentRecordsCommand(args);
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
   * <p>List all related items for an incident record.</p>
   */
  public listRelatedItems(
    args: ListRelatedItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRelatedItemsCommandOutput>;
  public listRelatedItems(
    args: ListRelatedItemsCommandInput,
    cb: (err: any, data?: ListRelatedItemsCommandOutput) => void
  ): void;
  public listRelatedItems(
    args: ListRelatedItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRelatedItemsCommandOutput) => void
  ): void;
  public listRelatedItems(
    args: ListRelatedItemsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRelatedItemsCommandOutput) => void),
    cb?: (err: any, data?: ListRelatedItemsCommandOutput) => void
  ): Promise<ListRelatedItemsCommandOutput> | void {
    const command = new ListRelatedItemsCommand(args);
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
   * <p>Lists details about the replication set configured in your account. </p>
   */
  public listReplicationSets(
    args: ListReplicationSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReplicationSetsCommandOutput>;
  public listReplicationSets(
    args: ListReplicationSetsCommandInput,
    cb: (err: any, data?: ListReplicationSetsCommandOutput) => void
  ): void;
  public listReplicationSets(
    args: ListReplicationSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReplicationSetsCommandOutput) => void
  ): void;
  public listReplicationSets(
    args: ListReplicationSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReplicationSetsCommandOutput) => void),
    cb?: (err: any, data?: ListReplicationSetsCommandOutput) => void
  ): Promise<ListReplicationSetsCommandOutput> | void {
    const command = new ListReplicationSetsCommand(args);
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
   * <p>Lists all response plans in your account.</p>
   */
  public listResponsePlans(
    args: ListResponsePlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResponsePlansCommandOutput>;
  public listResponsePlans(
    args: ListResponsePlansCommandInput,
    cb: (err: any, data?: ListResponsePlansCommandOutput) => void
  ): void;
  public listResponsePlans(
    args: ListResponsePlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResponsePlansCommandOutput) => void
  ): void;
  public listResponsePlans(
    args: ListResponsePlansCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResponsePlansCommandOutput) => void),
    cb?: (err: any, data?: ListResponsePlansCommandOutput) => void
  ): Promise<ListResponsePlansCommandOutput> | void {
    const command = new ListResponsePlansCommand(args);
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
   * <p>Lists the tags that are attached to the specified response plan.</p>
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
   * <p>Lists timeline events for the specified incident record.</p>
   */
  public listTimelineEvents(
    args: ListTimelineEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTimelineEventsCommandOutput>;
  public listTimelineEvents(
    args: ListTimelineEventsCommandInput,
    cb: (err: any, data?: ListTimelineEventsCommandOutput) => void
  ): void;
  public listTimelineEvents(
    args: ListTimelineEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTimelineEventsCommandOutput) => void
  ): void;
  public listTimelineEvents(
    args: ListTimelineEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTimelineEventsCommandOutput) => void),
    cb?: (err: any, data?: ListTimelineEventsCommandOutput) => void
  ): Promise<ListTimelineEventsCommandOutput> | void {
    const command = new ListTimelineEventsCommand(args);
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
   * <p>Adds a resource policy to the specified response plan. The resource policy is used to
   *             share the response plan using Resource Access Manager (RAM). For more
   *             information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-manager-cross-account-cross-region.html">Cross-Region and cross-account incident
   *             management</a>.</p>
   */
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): Promise<PutResourcePolicyCommandOutput> | void {
    const command = new PutResourcePolicyCommand(args);
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
   * <p>Used to start an incident from CloudWatch alarms, EventBridge events, or
   *             manually. </p>
   */
  public startIncident(
    args: StartIncidentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartIncidentCommandOutput>;
  public startIncident(
    args: StartIncidentCommandInput,
    cb: (err: any, data?: StartIncidentCommandOutput) => void
  ): void;
  public startIncident(
    args: StartIncidentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartIncidentCommandOutput) => void
  ): void;
  public startIncident(
    args: StartIncidentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartIncidentCommandOutput) => void),
    cb?: (err: any, data?: StartIncidentCommandOutput) => void
  ): Promise<StartIncidentCommandOutput> | void {
    const command = new StartIncidentCommand(args);
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
   * <p>Adds a tag to a response plan.</p>
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
   * <p>Removes a tag from a resource.</p>
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
   * <p>Update deletion protection to either allow or deny deletion of the final Region in a
   *             replication set.</p>
   */
  public updateDeletionProtection(
    args: UpdateDeletionProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeletionProtectionCommandOutput>;
  public updateDeletionProtection(
    args: UpdateDeletionProtectionCommandInput,
    cb: (err: any, data?: UpdateDeletionProtectionCommandOutput) => void
  ): void;
  public updateDeletionProtection(
    args: UpdateDeletionProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeletionProtectionCommandOutput) => void
  ): void;
  public updateDeletionProtection(
    args: UpdateDeletionProtectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDeletionProtectionCommandOutput) => void),
    cb?: (err: any, data?: UpdateDeletionProtectionCommandOutput) => void
  ): Promise<UpdateDeletionProtectionCommandOutput> | void {
    const command = new UpdateDeletionProtectionCommand(args);
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
   * <p>Update the details of an incident record. You can use this operation to update an
   *             incident record from the defined chat channel. For more information about using actions
   *             in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.</p>
   */
  public updateIncidentRecord(
    args: UpdateIncidentRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIncidentRecordCommandOutput>;
  public updateIncidentRecord(
    args: UpdateIncidentRecordCommandInput,
    cb: (err: any, data?: UpdateIncidentRecordCommandOutput) => void
  ): void;
  public updateIncidentRecord(
    args: UpdateIncidentRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIncidentRecordCommandOutput) => void
  ): void;
  public updateIncidentRecord(
    args: UpdateIncidentRecordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateIncidentRecordCommandOutput) => void),
    cb?: (err: any, data?: UpdateIncidentRecordCommandOutput) => void
  ): Promise<UpdateIncidentRecordCommandOutput> | void {
    const command = new UpdateIncidentRecordCommand(args);
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
   * <p>Add or remove related items from the related items tab of an incident record.</p>
   */
  public updateRelatedItems(
    args: UpdateRelatedItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRelatedItemsCommandOutput>;
  public updateRelatedItems(
    args: UpdateRelatedItemsCommandInput,
    cb: (err: any, data?: UpdateRelatedItemsCommandOutput) => void
  ): void;
  public updateRelatedItems(
    args: UpdateRelatedItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRelatedItemsCommandOutput) => void
  ): void;
  public updateRelatedItems(
    args: UpdateRelatedItemsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRelatedItemsCommandOutput) => void),
    cb?: (err: any, data?: UpdateRelatedItemsCommandOutput) => void
  ): Promise<UpdateRelatedItemsCommandOutput> | void {
    const command = new UpdateRelatedItemsCommand(args);
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
   * <p>Add or delete Regions from your replication set.</p>
   */
  public updateReplicationSet(
    args: UpdateReplicationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReplicationSetCommandOutput>;
  public updateReplicationSet(
    args: UpdateReplicationSetCommandInput,
    cb: (err: any, data?: UpdateReplicationSetCommandOutput) => void
  ): void;
  public updateReplicationSet(
    args: UpdateReplicationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReplicationSetCommandOutput) => void
  ): void;
  public updateReplicationSet(
    args: UpdateReplicationSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateReplicationSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateReplicationSetCommandOutput) => void
  ): Promise<UpdateReplicationSetCommandOutput> | void {
    const command = new UpdateReplicationSetCommand(args);
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
   * <p>Updates the specified response plan.</p>
   */
  public updateResponsePlan(
    args: UpdateResponsePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResponsePlanCommandOutput>;
  public updateResponsePlan(
    args: UpdateResponsePlanCommandInput,
    cb: (err: any, data?: UpdateResponsePlanCommandOutput) => void
  ): void;
  public updateResponsePlan(
    args: UpdateResponsePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResponsePlanCommandOutput) => void
  ): void;
  public updateResponsePlan(
    args: UpdateResponsePlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResponsePlanCommandOutput) => void),
    cb?: (err: any, data?: UpdateResponsePlanCommandOutput) => void
  ): Promise<UpdateResponsePlanCommandOutput> | void {
    const command = new UpdateResponsePlanCommand(args);
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
   * <p>Updates a timeline event. You can update events of type <code>Custom
   *             Event</code>.</p>
   */
  public updateTimelineEvent(
    args: UpdateTimelineEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTimelineEventCommandOutput>;
  public updateTimelineEvent(
    args: UpdateTimelineEventCommandInput,
    cb: (err: any, data?: UpdateTimelineEventCommandOutput) => void
  ): void;
  public updateTimelineEvent(
    args: UpdateTimelineEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTimelineEventCommandOutput) => void
  ): void;
  public updateTimelineEvent(
    args: UpdateTimelineEventCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTimelineEventCommandOutput) => void),
    cb?: (err: any, data?: UpdateTimelineEventCommandOutput) => void
  ): Promise<UpdateTimelineEventCommandOutput> | void {
    const command = new UpdateTimelineEventCommand(args);
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
