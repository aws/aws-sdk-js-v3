import { SSMContactsClient } from "./SSMContactsClient";
import { AcceptPageCommand, AcceptPageCommandInput, AcceptPageCommandOutput } from "./commands/AcceptPageCommand";
import {
  ActivateContactChannelCommand,
  ActivateContactChannelCommandInput,
  ActivateContactChannelCommandOutput,
} from "./commands/ActivateContactChannelCommand";
import {
  CreateContactChannelCommand,
  CreateContactChannelCommandInput,
  CreateContactChannelCommandOutput,
} from "./commands/CreateContactChannelCommand";
import {
  CreateContactCommand,
  CreateContactCommandInput,
  CreateContactCommandOutput,
} from "./commands/CreateContactCommand";
import {
  DeactivateContactChannelCommand,
  DeactivateContactChannelCommandInput,
  DeactivateContactChannelCommandOutput,
} from "./commands/DeactivateContactChannelCommand";
import {
  DeleteContactChannelCommand,
  DeleteContactChannelCommandInput,
  DeleteContactChannelCommandOutput,
} from "./commands/DeleteContactChannelCommand";
import {
  DeleteContactCommand,
  DeleteContactCommandInput,
  DeleteContactCommandOutput,
} from "./commands/DeleteContactCommand";
import {
  DescribeEngagementCommand,
  DescribeEngagementCommandInput,
  DescribeEngagementCommandOutput,
} from "./commands/DescribeEngagementCommand";
import {
  DescribePageCommand,
  DescribePageCommandInput,
  DescribePageCommandOutput,
} from "./commands/DescribePageCommand";
import {
  GetContactChannelCommand,
  GetContactChannelCommandInput,
  GetContactChannelCommandOutput,
} from "./commands/GetContactChannelCommand";
import { GetContactCommand, GetContactCommandInput, GetContactCommandOutput } from "./commands/GetContactCommand";
import {
  GetContactPolicyCommand,
  GetContactPolicyCommandInput,
  GetContactPolicyCommandOutput,
} from "./commands/GetContactPolicyCommand";
import {
  ListContactChannelsCommand,
  ListContactChannelsCommandInput,
  ListContactChannelsCommandOutput,
} from "./commands/ListContactChannelsCommand";
import {
  ListContactsCommand,
  ListContactsCommandInput,
  ListContactsCommandOutput,
} from "./commands/ListContactsCommand";
import {
  ListEngagementsCommand,
  ListEngagementsCommandInput,
  ListEngagementsCommandOutput,
} from "./commands/ListEngagementsCommand";
import {
  ListPageReceiptsCommand,
  ListPageReceiptsCommandInput,
  ListPageReceiptsCommandOutput,
} from "./commands/ListPageReceiptsCommand";
import {
  ListPagesByContactCommand,
  ListPagesByContactCommandInput,
  ListPagesByContactCommandOutput,
} from "./commands/ListPagesByContactCommand";
import {
  ListPagesByEngagementCommand,
  ListPagesByEngagementCommandInput,
  ListPagesByEngagementCommandOutput,
} from "./commands/ListPagesByEngagementCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutContactPolicyCommand,
  PutContactPolicyCommandInput,
  PutContactPolicyCommandOutput,
} from "./commands/PutContactPolicyCommand";
import {
  SendActivationCodeCommand,
  SendActivationCodeCommandInput,
  SendActivationCodeCommandOutput,
} from "./commands/SendActivationCodeCommand";
import {
  StartEngagementCommand,
  StartEngagementCommandInput,
  StartEngagementCommandOutput,
} from "./commands/StartEngagementCommand";
import {
  StopEngagementCommand,
  StopEngagementCommandInput,
  StopEngagementCommandOutput,
} from "./commands/StopEngagementCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateContactChannelCommand,
  UpdateContactChannelCommandInput,
  UpdateContactChannelCommandOutput,
} from "./commands/UpdateContactChannelCommand";
import {
  UpdateContactCommand,
  UpdateContactCommandInput,
  UpdateContactCommandOutput,
} from "./commands/UpdateContactCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Systems Manager Incident Manager is an incident management console designed to help users
 *          mitigate and recover from incidents affecting their Amazon Web Services-hosted applications.
 *          An incident is any unplanned interruption or reduction in quality of services. </p>
 *          <p>Incident Manager increases incident resolution by notifying responders of impact,
 *          highlighting relevant troubleshooting data, and providing collaboration tools to get
 *          services back up and running. To achieve the primary goal of reducing the
 *          time-to-resolution of critical incidents, Incident Manager automates response plans
 *          and enables responder team escalation. </p>
 */
export class SSMContacts extends SSMContactsClient {
  /**
   * <p>Used to acknowledge an engagement to a contact channel during an incident.</p>
   */
  public acceptPage(args: AcceptPageCommandInput, options?: __HttpHandlerOptions): Promise<AcceptPageCommandOutput>;
  public acceptPage(args: AcceptPageCommandInput, cb: (err: any, data?: AcceptPageCommandOutput) => void): void;
  public acceptPage(
    args: AcceptPageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptPageCommandOutput) => void
  ): void;
  public acceptPage(
    args: AcceptPageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptPageCommandOutput) => void),
    cb?: (err: any, data?: AcceptPageCommandOutput) => void
  ): Promise<AcceptPageCommandOutput> | void {
    const command = new AcceptPageCommand(args);
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
   * <p>Activates a contact's contact channel. Incident Manager can't engage a contact until the
   *          contact channel has been activated.</p>
   */
  public activateContactChannel(
    args: ActivateContactChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateContactChannelCommandOutput>;
  public activateContactChannel(
    args: ActivateContactChannelCommandInput,
    cb: (err: any, data?: ActivateContactChannelCommandOutput) => void
  ): void;
  public activateContactChannel(
    args: ActivateContactChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateContactChannelCommandOutput) => void
  ): void;
  public activateContactChannel(
    args: ActivateContactChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ActivateContactChannelCommandOutput) => void),
    cb?: (err: any, data?: ActivateContactChannelCommandOutput) => void
  ): Promise<ActivateContactChannelCommandOutput> | void {
    const command = new ActivateContactChannelCommand(args);
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
   * <p>Contacts are either the contacts that Incident Manager engages during an incident or the
   *          escalation plans that Incident Manager uses to engage contacts in phases during an
   *          incident. </p>
   */
  public createContact(
    args: CreateContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContactCommandOutput>;
  public createContact(
    args: CreateContactCommandInput,
    cb: (err: any, data?: CreateContactCommandOutput) => void
  ): void;
  public createContact(
    args: CreateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContactCommandOutput) => void
  ): void;
  public createContact(
    args: CreateContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateContactCommandOutput) => void),
    cb?: (err: any, data?: CreateContactCommandOutput) => void
  ): Promise<CreateContactCommandOutput> | void {
    const command = new CreateContactCommand(args);
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
   * <p>A contact channel is the method that Incident Manager uses to engage your contact.</p>
   */
  public createContactChannel(
    args: CreateContactChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContactChannelCommandOutput>;
  public createContactChannel(
    args: CreateContactChannelCommandInput,
    cb: (err: any, data?: CreateContactChannelCommandOutput) => void
  ): void;
  public createContactChannel(
    args: CreateContactChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContactChannelCommandOutput) => void
  ): void;
  public createContactChannel(
    args: CreateContactChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateContactChannelCommandOutput) => void),
    cb?: (err: any, data?: CreateContactChannelCommandOutput) => void
  ): Promise<CreateContactChannelCommandOutput> | void {
    const command = new CreateContactChannelCommand(args);
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
   * <p>To no longer receive Incident Manager engagements to a contact channel, you can deactivate
   *          the channel.</p>
   */
  public deactivateContactChannel(
    args: DeactivateContactChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateContactChannelCommandOutput>;
  public deactivateContactChannel(
    args: DeactivateContactChannelCommandInput,
    cb: (err: any, data?: DeactivateContactChannelCommandOutput) => void
  ): void;
  public deactivateContactChannel(
    args: DeactivateContactChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateContactChannelCommandOutput) => void
  ): void;
  public deactivateContactChannel(
    args: DeactivateContactChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeactivateContactChannelCommandOutput) => void),
    cb?: (err: any, data?: DeactivateContactChannelCommandOutput) => void
  ): Promise<DeactivateContactChannelCommandOutput> | void {
    const command = new DeactivateContactChannelCommand(args);
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
   * <p>To remove a contact from Incident Manager, you can delete the contact. Deleting a contact
   *          removes them from all escalation plans and related response plans. Deleting an escalation
   *          plan removes it from all related response plans. You will have to recreate the contact and
   *          its contact channels before you can use it again.</p>
   */
  public deleteContact(
    args: DeleteContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContactCommandOutput>;
  public deleteContact(
    args: DeleteContactCommandInput,
    cb: (err: any, data?: DeleteContactCommandOutput) => void
  ): void;
  public deleteContact(
    args: DeleteContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContactCommandOutput) => void
  ): void;
  public deleteContact(
    args: DeleteContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteContactCommandOutput) => void),
    cb?: (err: any, data?: DeleteContactCommandOutput) => void
  ): Promise<DeleteContactCommandOutput> | void {
    const command = new DeleteContactCommand(args);
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
   * <p>To no longer receive engagements on a contact channel, you can delete the channel from a
   *          contact. Deleting the contact channel removes it from the contact's engagement plan. If you
   *          delete the only contact channel for a contact, you won't be able to engage that contact
   *          during an incident.</p>
   */
  public deleteContactChannel(
    args: DeleteContactChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContactChannelCommandOutput>;
  public deleteContactChannel(
    args: DeleteContactChannelCommandInput,
    cb: (err: any, data?: DeleteContactChannelCommandOutput) => void
  ): void;
  public deleteContactChannel(
    args: DeleteContactChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContactChannelCommandOutput) => void
  ): void;
  public deleteContactChannel(
    args: DeleteContactChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteContactChannelCommandOutput) => void),
    cb?: (err: any, data?: DeleteContactChannelCommandOutput) => void
  ): Promise<DeleteContactChannelCommandOutput> | void {
    const command = new DeleteContactChannelCommand(args);
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
   * <p>Incident Manager uses engagements to engage contacts and escalation plans during an incident.
   *          Use this command to describe the engagement that occurred during an incident.</p>
   */
  public describeEngagement(
    args: DescribeEngagementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEngagementCommandOutput>;
  public describeEngagement(
    args: DescribeEngagementCommandInput,
    cb: (err: any, data?: DescribeEngagementCommandOutput) => void
  ): void;
  public describeEngagement(
    args: DescribeEngagementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEngagementCommandOutput) => void
  ): void;
  public describeEngagement(
    args: DescribeEngagementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEngagementCommandOutput) => void),
    cb?: (err: any, data?: DescribeEngagementCommandOutput) => void
  ): Promise<DescribeEngagementCommandOutput> | void {
    const command = new DescribeEngagementCommand(args);
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
   * <p>Lists details of the engagement to a contact channel.</p>
   */
  public describePage(
    args: DescribePageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePageCommandOutput>;
  public describePage(args: DescribePageCommandInput, cb: (err: any, data?: DescribePageCommandOutput) => void): void;
  public describePage(
    args: DescribePageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePageCommandOutput) => void
  ): void;
  public describePage(
    args: DescribePageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePageCommandOutput) => void),
    cb?: (err: any, data?: DescribePageCommandOutput) => void
  ): Promise<DescribePageCommandOutput> | void {
    const command = new DescribePageCommand(args);
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
   * <p>Retrieves information about the specified contact or escalation plan.</p>
   */
  public getContact(args: GetContactCommandInput, options?: __HttpHandlerOptions): Promise<GetContactCommandOutput>;
  public getContact(args: GetContactCommandInput, cb: (err: any, data?: GetContactCommandOutput) => void): void;
  public getContact(
    args: GetContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContactCommandOutput) => void
  ): void;
  public getContact(
    args: GetContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetContactCommandOutput) => void),
    cb?: (err: any, data?: GetContactCommandOutput) => void
  ): Promise<GetContactCommandOutput> | void {
    const command = new GetContactCommand(args);
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
   * <p>List details about a specific contact channel.</p>
   */
  public getContactChannel(
    args: GetContactChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContactChannelCommandOutput>;
  public getContactChannel(
    args: GetContactChannelCommandInput,
    cb: (err: any, data?: GetContactChannelCommandOutput) => void
  ): void;
  public getContactChannel(
    args: GetContactChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContactChannelCommandOutput) => void
  ): void;
  public getContactChannel(
    args: GetContactChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetContactChannelCommandOutput) => void),
    cb?: (err: any, data?: GetContactChannelCommandOutput) => void
  ): Promise<GetContactChannelCommandOutput> | void {
    const command = new GetContactChannelCommand(args);
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
   * <p>Retrieves the resource policies attached to the specified contact or escalation
   *          plan.</p>
   */
  public getContactPolicy(
    args: GetContactPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContactPolicyCommandOutput>;
  public getContactPolicy(
    args: GetContactPolicyCommandInput,
    cb: (err: any, data?: GetContactPolicyCommandOutput) => void
  ): void;
  public getContactPolicy(
    args: GetContactPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContactPolicyCommandOutput) => void
  ): void;
  public getContactPolicy(
    args: GetContactPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetContactPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetContactPolicyCommandOutput) => void
  ): Promise<GetContactPolicyCommandOutput> | void {
    const command = new GetContactPolicyCommand(args);
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
   * <p>Lists all contact channels for the specified contact.</p>
   */
  public listContactChannels(
    args: ListContactChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContactChannelsCommandOutput>;
  public listContactChannels(
    args: ListContactChannelsCommandInput,
    cb: (err: any, data?: ListContactChannelsCommandOutput) => void
  ): void;
  public listContactChannels(
    args: ListContactChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContactChannelsCommandOutput) => void
  ): void;
  public listContactChannels(
    args: ListContactChannelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListContactChannelsCommandOutput) => void),
    cb?: (err: any, data?: ListContactChannelsCommandOutput) => void
  ): Promise<ListContactChannelsCommandOutput> | void {
    const command = new ListContactChannelsCommand(args);
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
   * <p>Lists all contacts and escalation plans in Incident Manager.</p>
   */
  public listContacts(
    args: ListContactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContactsCommandOutput>;
  public listContacts(args: ListContactsCommandInput, cb: (err: any, data?: ListContactsCommandOutput) => void): void;
  public listContacts(
    args: ListContactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContactsCommandOutput) => void
  ): void;
  public listContacts(
    args: ListContactsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListContactsCommandOutput) => void),
    cb?: (err: any, data?: ListContactsCommandOutput) => void
  ): Promise<ListContactsCommandOutput> | void {
    const command = new ListContactsCommand(args);
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
   * <p>Lists all engagements that have happened in an incident.</p>
   */
  public listEngagements(
    args: ListEngagementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEngagementsCommandOutput>;
  public listEngagements(
    args: ListEngagementsCommandInput,
    cb: (err: any, data?: ListEngagementsCommandOutput) => void
  ): void;
  public listEngagements(
    args: ListEngagementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEngagementsCommandOutput) => void
  ): void;
  public listEngagements(
    args: ListEngagementsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEngagementsCommandOutput) => void),
    cb?: (err: any, data?: ListEngagementsCommandOutput) => void
  ): Promise<ListEngagementsCommandOutput> | void {
    const command = new ListEngagementsCommand(args);
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
   * <p>Lists all of the engagements to contact channels that have been acknowledged. </p>
   */
  public listPageReceipts(
    args: ListPageReceiptsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPageReceiptsCommandOutput>;
  public listPageReceipts(
    args: ListPageReceiptsCommandInput,
    cb: (err: any, data?: ListPageReceiptsCommandOutput) => void
  ): void;
  public listPageReceipts(
    args: ListPageReceiptsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPageReceiptsCommandOutput) => void
  ): void;
  public listPageReceipts(
    args: ListPageReceiptsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPageReceiptsCommandOutput) => void),
    cb?: (err: any, data?: ListPageReceiptsCommandOutput) => void
  ): Promise<ListPageReceiptsCommandOutput> | void {
    const command = new ListPageReceiptsCommand(args);
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
   * <p>Lists the engagements to a contact's contact channels.</p>
   */
  public listPagesByContact(
    args: ListPagesByContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPagesByContactCommandOutput>;
  public listPagesByContact(
    args: ListPagesByContactCommandInput,
    cb: (err: any, data?: ListPagesByContactCommandOutput) => void
  ): void;
  public listPagesByContact(
    args: ListPagesByContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPagesByContactCommandOutput) => void
  ): void;
  public listPagesByContact(
    args: ListPagesByContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPagesByContactCommandOutput) => void),
    cb?: (err: any, data?: ListPagesByContactCommandOutput) => void
  ): Promise<ListPagesByContactCommandOutput> | void {
    const command = new ListPagesByContactCommand(args);
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
   * <p>Lists the engagements to contact channels that occurred by engaging a contact.</p>
   */
  public listPagesByEngagement(
    args: ListPagesByEngagementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPagesByEngagementCommandOutput>;
  public listPagesByEngagement(
    args: ListPagesByEngagementCommandInput,
    cb: (err: any, data?: ListPagesByEngagementCommandOutput) => void
  ): void;
  public listPagesByEngagement(
    args: ListPagesByEngagementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPagesByEngagementCommandOutput) => void
  ): void;
  public listPagesByEngagement(
    args: ListPagesByEngagementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPagesByEngagementCommandOutput) => void),
    cb?: (err: any, data?: ListPagesByEngagementCommandOutput) => void
  ): Promise<ListPagesByEngagementCommandOutput> | void {
    const command = new ListPagesByEngagementCommand(args);
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
   * <p>Lists the tags of an escalation plan or contact.</p>
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
   * <p>Adds a resource to the specified contact or escalation plan.</p>
   */
  public putContactPolicy(
    args: PutContactPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutContactPolicyCommandOutput>;
  public putContactPolicy(
    args: PutContactPolicyCommandInput,
    cb: (err: any, data?: PutContactPolicyCommandOutput) => void
  ): void;
  public putContactPolicy(
    args: PutContactPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutContactPolicyCommandOutput) => void
  ): void;
  public putContactPolicy(
    args: PutContactPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutContactPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutContactPolicyCommandOutput) => void
  ): Promise<PutContactPolicyCommandOutput> | void {
    const command = new PutContactPolicyCommand(args);
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
   * <p>Sends an activation code to a contact channel. The contact can use this code to activate
   *          the contact channel in the console or with the <code>ActivateChannel</code> operation.
   *          Incident Manager can't engage a contact channel until it has been activated.</p>
   */
  public sendActivationCode(
    args: SendActivationCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendActivationCodeCommandOutput>;
  public sendActivationCode(
    args: SendActivationCodeCommandInput,
    cb: (err: any, data?: SendActivationCodeCommandOutput) => void
  ): void;
  public sendActivationCode(
    args: SendActivationCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendActivationCodeCommandOutput) => void
  ): void;
  public sendActivationCode(
    args: SendActivationCodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendActivationCodeCommandOutput) => void),
    cb?: (err: any, data?: SendActivationCodeCommandOutput) => void
  ): Promise<SendActivationCodeCommandOutput> | void {
    const command = new SendActivationCodeCommand(args);
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
   * <p>Starts an engagement to a contact or escalation plan. The engagement engages each
   *          contact specified in the incident.</p>
   */
  public startEngagement(
    args: StartEngagementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartEngagementCommandOutput>;
  public startEngagement(
    args: StartEngagementCommandInput,
    cb: (err: any, data?: StartEngagementCommandOutput) => void
  ): void;
  public startEngagement(
    args: StartEngagementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartEngagementCommandOutput) => void
  ): void;
  public startEngagement(
    args: StartEngagementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartEngagementCommandOutput) => void),
    cb?: (err: any, data?: StartEngagementCommandOutput) => void
  ): Promise<StartEngagementCommandOutput> | void {
    const command = new StartEngagementCommand(args);
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
   * <p>Stops an engagement before it finishes the final stage of the escalation plan or
   *          engagement plan. Further contacts aren't engaged.</p>
   */
  public stopEngagement(
    args: StopEngagementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopEngagementCommandOutput>;
  public stopEngagement(
    args: StopEngagementCommandInput,
    cb: (err: any, data?: StopEngagementCommandOutput) => void
  ): void;
  public stopEngagement(
    args: StopEngagementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopEngagementCommandOutput) => void
  ): void;
  public stopEngagement(
    args: StopEngagementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopEngagementCommandOutput) => void),
    cb?: (err: any, data?: StopEngagementCommandOutput) => void
  ): Promise<StopEngagementCommandOutput> | void {
    const command = new StopEngagementCommand(args);
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
   * <p>Tags a contact or escalation plan. You can tag only contacts and escalation plans in the
   *          first region of your replication set. </p>
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
   * <p>Removes tags from the specified resource. </p>
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
   * <p>Updates the contact or escalation plan specified. </p>
   */
  public updateContact(
    args: UpdateContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactCommandOutput>;
  public updateContact(
    args: UpdateContactCommandInput,
    cb: (err: any, data?: UpdateContactCommandOutput) => void
  ): void;
  public updateContact(
    args: UpdateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactCommandOutput) => void
  ): void;
  public updateContact(
    args: UpdateContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateContactCommandOutput) => void),
    cb?: (err: any, data?: UpdateContactCommandOutput) => void
  ): Promise<UpdateContactCommandOutput> | void {
    const command = new UpdateContactCommand(args);
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
   * <p>Updates a contact's contact channel.</p>
   */
  public updateContactChannel(
    args: UpdateContactChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactChannelCommandOutput>;
  public updateContactChannel(
    args: UpdateContactChannelCommandInput,
    cb: (err: any, data?: UpdateContactChannelCommandOutput) => void
  ): void;
  public updateContactChannel(
    args: UpdateContactChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactChannelCommandOutput) => void
  ): void;
  public updateContactChannel(
    args: UpdateContactChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateContactChannelCommandOutput) => void),
    cb?: (err: any, data?: UpdateContactChannelCommandOutput) => void
  ): Promise<UpdateContactChannelCommandOutput> | void {
    const command = new UpdateContactChannelCommand(args);
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
