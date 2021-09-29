import { CustomerProfilesClient } from "./CustomerProfilesClient";
import {
  AddProfileKeyCommand,
  AddProfileKeyCommandInput,
  AddProfileKeyCommandOutput,
} from "./commands/AddProfileKeyCommand";
import {
  CreateDomainCommand,
  CreateDomainCommandInput,
  CreateDomainCommandOutput,
} from "./commands/CreateDomainCommand";
import {
  CreateProfileCommand,
  CreateProfileCommandInput,
  CreateProfileCommandOutput,
} from "./commands/CreateProfileCommand";
import {
  DeleteDomainCommand,
  DeleteDomainCommandInput,
  DeleteDomainCommandOutput,
} from "./commands/DeleteDomainCommand";
import {
  DeleteIntegrationCommand,
  DeleteIntegrationCommandInput,
  DeleteIntegrationCommandOutput,
} from "./commands/DeleteIntegrationCommand";
import {
  DeleteProfileCommand,
  DeleteProfileCommandInput,
  DeleteProfileCommandOutput,
} from "./commands/DeleteProfileCommand";
import {
  DeleteProfileKeyCommand,
  DeleteProfileKeyCommandInput,
  DeleteProfileKeyCommandOutput,
} from "./commands/DeleteProfileKeyCommand";
import {
  DeleteProfileObjectCommand,
  DeleteProfileObjectCommandInput,
  DeleteProfileObjectCommandOutput,
} from "./commands/DeleteProfileObjectCommand";
import {
  DeleteProfileObjectTypeCommand,
  DeleteProfileObjectTypeCommandInput,
  DeleteProfileObjectTypeCommandOutput,
} from "./commands/DeleteProfileObjectTypeCommand";
import { GetDomainCommand, GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand";
import {
  GetIntegrationCommand,
  GetIntegrationCommandInput,
  GetIntegrationCommandOutput,
} from "./commands/GetIntegrationCommand";
import { GetMatchesCommand, GetMatchesCommandInput, GetMatchesCommandOutput } from "./commands/GetMatchesCommand";
import {
  GetProfileObjectTypeCommand,
  GetProfileObjectTypeCommandInput,
  GetProfileObjectTypeCommandOutput,
} from "./commands/GetProfileObjectTypeCommand";
import {
  GetProfileObjectTypeTemplateCommand,
  GetProfileObjectTypeTemplateCommandInput,
  GetProfileObjectTypeTemplateCommandOutput,
} from "./commands/GetProfileObjectTypeTemplateCommand";
import {
  ListAccountIntegrationsCommand,
  ListAccountIntegrationsCommandInput,
  ListAccountIntegrationsCommandOutput,
} from "./commands/ListAccountIntegrationsCommand";
import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import {
  ListIntegrationsCommand,
  ListIntegrationsCommandInput,
  ListIntegrationsCommandOutput,
} from "./commands/ListIntegrationsCommand";
import {
  ListProfileObjectTypeTemplatesCommand,
  ListProfileObjectTypeTemplatesCommandInput,
  ListProfileObjectTypeTemplatesCommandOutput,
} from "./commands/ListProfileObjectTypeTemplatesCommand";
import {
  ListProfileObjectTypesCommand,
  ListProfileObjectTypesCommandInput,
  ListProfileObjectTypesCommandOutput,
} from "./commands/ListProfileObjectTypesCommand";
import {
  ListProfileObjectsCommand,
  ListProfileObjectsCommandInput,
  ListProfileObjectsCommandOutput,
} from "./commands/ListProfileObjectsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  MergeProfilesCommand,
  MergeProfilesCommandInput,
  MergeProfilesCommandOutput,
} from "./commands/MergeProfilesCommand";
import {
  PutIntegrationCommand,
  PutIntegrationCommandInput,
  PutIntegrationCommandOutput,
} from "./commands/PutIntegrationCommand";
import {
  PutProfileObjectCommand,
  PutProfileObjectCommandInput,
  PutProfileObjectCommandOutput,
} from "./commands/PutProfileObjectCommand";
import {
  PutProfileObjectTypeCommand,
  PutProfileObjectTypeCommandInput,
  PutProfileObjectTypeCommandOutput,
} from "./commands/PutProfileObjectTypeCommand";
import {
  SearchProfilesCommand,
  SearchProfilesCommandInput,
  SearchProfilesCommandOutput,
} from "./commands/SearchProfilesCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDomainCommand,
  UpdateDomainCommandInput,
  UpdateDomainCommandOutput,
} from "./commands/UpdateDomainCommand";
import {
  UpdateProfileCommand,
  UpdateProfileCommandInput,
  UpdateProfileCommandOutput,
} from "./commands/UpdateProfileCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>Amazon Connect Customer Profiles</fullname>
 *          <p>Welcome to the Amazon Connect Customer Profiles API Reference. This guide provides information
 *          about the Amazon Connect Customer Profiles API, including supported operations, data types,
 *          parameters, and schemas.</p>
 *          <p>Amazon Connect Customer Profiles is a unified customer profile for your contact center that has
 *          pre-built connectors powered by AppFlow that make it easy to combine customer information
 *          from third party applications, such as Salesforce (CRM), ServiceNow (ITSM), and your
 *          enterprise resource planning (ERP), with contact history from your Amazon Connect contact
 *          center.</p>
 *          <p>If you're new to Amazon Connect , you might find it helpful to also review the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html">Amazon Connect Administrator Guide</a>.</p>
 */
export class CustomerProfiles extends CustomerProfilesClient {
  /**
   * <p>Associates a new key value with a specific profile, such as a Contact Trace Record (CTR)
   *          ContactId.</p>
   *          <p>A profile object can have a single unique key and any number of additional keys that can
   *          be used to identify the profile that it belongs to.</p>
   */
  public addProfileKey(
    args: AddProfileKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddProfileKeyCommandOutput>;
  public addProfileKey(
    args: AddProfileKeyCommandInput,
    cb: (err: any, data?: AddProfileKeyCommandOutput) => void
  ): void;
  public addProfileKey(
    args: AddProfileKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddProfileKeyCommandOutput) => void
  ): void;
  public addProfileKey(
    args: AddProfileKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddProfileKeyCommandOutput) => void),
    cb?: (err: any, data?: AddProfileKeyCommandOutput) => void
  ): Promise<AddProfileKeyCommandOutput> | void {
    const command = new AddProfileKeyCommand(args);
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
   * <p>Creates a domain, which is a container for all customer data, such as customer profile
   *          attributes, object types, profile keys, and encryption keys. You can create multiple
   *          domains, and each domain can have multiple third-party integrations.</p>
   *          <p>Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can
   *          be associated with one domain.</p>
   *          <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to
   *          enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity
   *             resolution</a>: set <code>Matching</code> to true. </p>
   */
  public createDomain(
    args: CreateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainCommandOutput>;
  public createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
  public createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;
  public createDomain(
    args: CreateDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDomainCommandOutput) => void),
    cb?: (err: any, data?: CreateDomainCommandOutput) => void
  ): Promise<CreateDomainCommandOutput> | void {
    const command = new CreateDomainCommand(args);
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
   * <p>Creates a standard profile.</p>
   *          <p>A standard profile represents the following attributes for a customer profile in a
   *          domain.</p>
   */
  public createProfile(
    args: CreateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProfileCommandOutput>;
  public createProfile(
    args: CreateProfileCommandInput,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;
  public createProfile(
    args: CreateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;
  public createProfile(
    args: CreateProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateProfileCommandOutput) => void
  ): Promise<CreateProfileCommandOutput> | void {
    const command = new CreateProfileCommand(args);
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
   * <p>Deletes a specific domain and all of its customer data, such as customer profile
   *          attributes and their related objects.</p>
   */
  public deleteDomain(
    args: DeleteDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainCommandOutput>;
  public deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
  public deleteDomain(
    args: DeleteDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;
  public deleteDomain(
    args: DeleteDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDomainCommandOutput) => void),
    cb?: (err: any, data?: DeleteDomainCommandOutput) => void
  ): Promise<DeleteDomainCommandOutput> | void {
    const command = new DeleteDomainCommand(args);
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
   * <p>Removes an integration from a specific domain.</p>
   */
  public deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntegrationCommandOutput>;
  public deleteIntegration(
    args: DeleteIntegrationCommandInput,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  public deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  public deleteIntegration(
    args: DeleteIntegrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteIntegrationCommandOutput) => void),
    cb?: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): Promise<DeleteIntegrationCommandOutput> | void {
    const command = new DeleteIntegrationCommand(args);
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
   * <p>Deletes the standard customer profile and all data pertaining to the profile.</p>
   */
  public deleteProfile(
    args: DeleteProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfileCommandOutput>;
  public deleteProfile(
    args: DeleteProfileCommandInput,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;
  public deleteProfile(
    args: DeleteProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;
  public deleteProfile(
    args: DeleteProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteProfileCommandOutput) => void
  ): Promise<DeleteProfileCommandOutput> | void {
    const command = new DeleteProfileCommand(args);
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
   * <p>Removes a searchable key from a customer profile.</p>
   */
  public deleteProfileKey(
    args: DeleteProfileKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfileKeyCommandOutput>;
  public deleteProfileKey(
    args: DeleteProfileKeyCommandInput,
    cb: (err: any, data?: DeleteProfileKeyCommandOutput) => void
  ): void;
  public deleteProfileKey(
    args: DeleteProfileKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileKeyCommandOutput) => void
  ): void;
  public deleteProfileKey(
    args: DeleteProfileKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProfileKeyCommandOutput) => void),
    cb?: (err: any, data?: DeleteProfileKeyCommandOutput) => void
  ): Promise<DeleteProfileKeyCommandOutput> | void {
    const command = new DeleteProfileKeyCommand(args);
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
   * <p>Removes an object associated with a profile of a given ProfileObjectType.</p>
   */
  public deleteProfileObject(
    args: DeleteProfileObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfileObjectCommandOutput>;
  public deleteProfileObject(
    args: DeleteProfileObjectCommandInput,
    cb: (err: any, data?: DeleteProfileObjectCommandOutput) => void
  ): void;
  public deleteProfileObject(
    args: DeleteProfileObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileObjectCommandOutput) => void
  ): void;
  public deleteProfileObject(
    args: DeleteProfileObjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProfileObjectCommandOutput) => void),
    cb?: (err: any, data?: DeleteProfileObjectCommandOutput) => void
  ): Promise<DeleteProfileObjectCommandOutput> | void {
    const command = new DeleteProfileObjectCommand(args);
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
   * <p>Removes a ProfileObjectType from a specific domain as well as removes all the
   *          ProfileObjects of that type. It also disables integrations from this specific
   *          ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that
   *          were populated from this ProfileObjectType.</p>
   */
  public deleteProfileObjectType(
    args: DeleteProfileObjectTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfileObjectTypeCommandOutput>;
  public deleteProfileObjectType(
    args: DeleteProfileObjectTypeCommandInput,
    cb: (err: any, data?: DeleteProfileObjectTypeCommandOutput) => void
  ): void;
  public deleteProfileObjectType(
    args: DeleteProfileObjectTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileObjectTypeCommandOutput) => void
  ): void;
  public deleteProfileObjectType(
    args: DeleteProfileObjectTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProfileObjectTypeCommandOutput) => void),
    cb?: (err: any, data?: DeleteProfileObjectTypeCommandOutput) => void
  ): Promise<DeleteProfileObjectTypeCommandOutput> | void {
    const command = new DeleteProfileObjectTypeCommand(args);
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
   * <p>Returns information about a specific domain.</p>
   */
  public getDomain(args: GetDomainCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainCommandOutput>;
  public getDomain(args: GetDomainCommandInput, cb: (err: any, data?: GetDomainCommandOutput) => void): void;
  public getDomain(
    args: GetDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;
  public getDomain(
    args: GetDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDomainCommandOutput) => void),
    cb?: (err: any, data?: GetDomainCommandOutput) => void
  ): Promise<GetDomainCommandOutput> | void {
    const command = new GetDomainCommand(args);
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
   * <p>Returns an integration for a domain.</p>
   */
  public getIntegration(
    args: GetIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationCommandOutput>;
  public getIntegration(
    args: GetIntegrationCommandInput,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;
  public getIntegration(
    args: GetIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;
  public getIntegration(
    args: GetIntegrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIntegrationCommandOutput) => void),
    cb?: (err: any, data?: GetIntegrationCommandOutput) => void
  ): Promise<GetIntegrationCommandOutput> | void {
    const command = new GetIntegrationCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and subject to change.</p>
   *          <p>Before calling this API, use <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or
   *             <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to
   *          enable identity resolution: set <code>Matching</code> to true.</p>
   *          <p>GetMatches returns potentially matching profiles, based on the results of the latest run
   *          of a machine learning process. </p>
   *          <important>
   *             <p>Amazon Connect starts a batch process every Saturday at 12AM UTC to identify matching profiles.
   *             The results are returned up to seven days after the Saturday run.</p>
   *          </important>
   *
   *          <p>Amazon Connect uses the following profile attributes to identify matches:</p>
   *          <ul>
   *             <li>
   *                <p>PhoneNumber</p>
   *             </li>
   *             <li>
   *                <p>HomePhoneNumber</p>
   *             </li>
   *             <li>
   *                <p>BusinessPhoneNumber</p>
   *             </li>
   *             <li>
   *                <p>MobilePhoneNumber</p>
   *             </li>
   *             <li>
   *                <p>EmailAddress</p>
   *             </li>
   *             <li>
   *                <p>PersonalEmailAddress</p>
   *             </li>
   *             <li>
   *                <p>BusinessEmailAddress</p>
   *             </li>
   *             <li>
   *                <p>FullName</p>
   *             </li>
   *             <li>
   *                <p>BusinessName</p>
   *             </li>
   *          </ul>
   *          <p>For example, two or more profiles—with spelling mistakes such as <b>John Doe</b> and <b>Jhn Doe</b>, or different casing
   *          email addresses such as <b>JOHN_DOE@ANYCOMPANY.COM</b> and
   *             <b>johndoe@anycompany.com</b>, or different phone number
   *          formats such as <b>555-010-0000</b> and <b>+1-555-010-0000</b>—can be detected as belonging to the same customer <b>John Doe</b> and merged into a unified profile.</p>
   */
  public getMatches(args: GetMatchesCommandInput, options?: __HttpHandlerOptions): Promise<GetMatchesCommandOutput>;
  public getMatches(args: GetMatchesCommandInput, cb: (err: any, data?: GetMatchesCommandOutput) => void): void;
  public getMatches(
    args: GetMatchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMatchesCommandOutput) => void
  ): void;
  public getMatches(
    args: GetMatchesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMatchesCommandOutput) => void),
    cb?: (err: any, data?: GetMatchesCommandOutput) => void
  ): Promise<GetMatchesCommandOutput> | void {
    const command = new GetMatchesCommand(args);
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
   * <p>Returns the object types for a specific domain.</p>
   */
  public getProfileObjectType(
    args: GetProfileObjectTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProfileObjectTypeCommandOutput>;
  public getProfileObjectType(
    args: GetProfileObjectTypeCommandInput,
    cb: (err: any, data?: GetProfileObjectTypeCommandOutput) => void
  ): void;
  public getProfileObjectType(
    args: GetProfileObjectTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileObjectTypeCommandOutput) => void
  ): void;
  public getProfileObjectType(
    args: GetProfileObjectTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetProfileObjectTypeCommandOutput) => void),
    cb?: (err: any, data?: GetProfileObjectTypeCommandOutput) => void
  ): Promise<GetProfileObjectTypeCommandOutput> | void {
    const command = new GetProfileObjectTypeCommand(args);
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
   * <p>Returns the template information for a specific object type.</p>
   *          <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or
   *          “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API,
   *          with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the
   *          template.</p>
   */
  public getProfileObjectTypeTemplate(
    args: GetProfileObjectTypeTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProfileObjectTypeTemplateCommandOutput>;
  public getProfileObjectTypeTemplate(
    args: GetProfileObjectTypeTemplateCommandInput,
    cb: (err: any, data?: GetProfileObjectTypeTemplateCommandOutput) => void
  ): void;
  public getProfileObjectTypeTemplate(
    args: GetProfileObjectTypeTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileObjectTypeTemplateCommandOutput) => void
  ): void;
  public getProfileObjectTypeTemplate(
    args: GetProfileObjectTypeTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetProfileObjectTypeTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetProfileObjectTypeTemplateCommandOutput) => void
  ): Promise<GetProfileObjectTypeTemplateCommandOutput> | void {
    const command = new GetProfileObjectTypeTemplateCommand(args);
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
   * <p>Lists all of the integrations associated to a specific URI in the AWS account.</p>
   */
  public listAccountIntegrations(
    args: ListAccountIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountIntegrationsCommandOutput>;
  public listAccountIntegrations(
    args: ListAccountIntegrationsCommandInput,
    cb: (err: any, data?: ListAccountIntegrationsCommandOutput) => void
  ): void;
  public listAccountIntegrations(
    args: ListAccountIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountIntegrationsCommandOutput) => void
  ): void;
  public listAccountIntegrations(
    args: ListAccountIntegrationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccountIntegrationsCommandOutput) => void),
    cb?: (err: any, data?: ListAccountIntegrationsCommandOutput) => void
  ): Promise<ListAccountIntegrationsCommandOutput> | void {
    const command = new ListAccountIntegrationsCommand(args);
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
   * <p>Returns a list of all the domains for an AWS account that have been created.</p>
   */
  public listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
  public listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
  public listDomains(
    args: ListDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;
  public listDomains(
    args: ListDomainsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDomainsCommandOutput) => void),
    cb?: (err: any, data?: ListDomainsCommandOutput) => void
  ): Promise<ListDomainsCommandOutput> | void {
    const command = new ListDomainsCommand(args);
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
   * <p>Lists all of the integrations in your domain.</p>
   */
  public listIntegrations(
    args: ListIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIntegrationsCommandOutput>;
  public listIntegrations(
    args: ListIntegrationsCommandInput,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;
  public listIntegrations(
    args: ListIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;
  public listIntegrations(
    args: ListIntegrationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIntegrationsCommandOutput) => void),
    cb?: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): Promise<ListIntegrationsCommandOutput> | void {
    const command = new ListIntegrationsCommand(args);
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
   * <p>Returns a list of objects associated with a profile of a given ProfileObjectType.</p>
   */
  public listProfileObjects(
    args: ListProfileObjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileObjectsCommandOutput>;
  public listProfileObjects(
    args: ListProfileObjectsCommandInput,
    cb: (err: any, data?: ListProfileObjectsCommandOutput) => void
  ): void;
  public listProfileObjects(
    args: ListProfileObjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileObjectsCommandOutput) => void
  ): void;
  public listProfileObjects(
    args: ListProfileObjectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProfileObjectsCommandOutput) => void),
    cb?: (err: any, data?: ListProfileObjectsCommandOutput) => void
  ): Promise<ListProfileObjectsCommandOutput> | void {
    const command = new ListProfileObjectsCommand(args);
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
   * <p>Lists all of the templates available within the service.</p>
   */
  public listProfileObjectTypes(
    args: ListProfileObjectTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileObjectTypesCommandOutput>;
  public listProfileObjectTypes(
    args: ListProfileObjectTypesCommandInput,
    cb: (err: any, data?: ListProfileObjectTypesCommandOutput) => void
  ): void;
  public listProfileObjectTypes(
    args: ListProfileObjectTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileObjectTypesCommandOutput) => void
  ): void;
  public listProfileObjectTypes(
    args: ListProfileObjectTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProfileObjectTypesCommandOutput) => void),
    cb?: (err: any, data?: ListProfileObjectTypesCommandOutput) => void
  ): Promise<ListProfileObjectTypesCommandOutput> | void {
    const command = new ListProfileObjectTypesCommand(args);
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
   * <p>Lists all of the template information for object types.</p>
   */
  public listProfileObjectTypeTemplates(
    args: ListProfileObjectTypeTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileObjectTypeTemplatesCommandOutput>;
  public listProfileObjectTypeTemplates(
    args: ListProfileObjectTypeTemplatesCommandInput,
    cb: (err: any, data?: ListProfileObjectTypeTemplatesCommandOutput) => void
  ): void;
  public listProfileObjectTypeTemplates(
    args: ListProfileObjectTypeTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileObjectTypeTemplatesCommandOutput) => void
  ): void;
  public listProfileObjectTypeTemplates(
    args: ListProfileObjectTypeTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProfileObjectTypeTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListProfileObjectTypeTemplatesCommandOutput) => void
  ): Promise<ListProfileObjectTypeTemplatesCommandOutput> | void {
    const command = new ListProfileObjectTypeTemplatesCommand(args);
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
   * <p>Displays the tags associated with an Amazon Connect Customer Profiles resource. In Connect
   *          Customer Profiles, domains, profile object types, and integrations can be tagged.</p>
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
   * <p>This API is in preview release for Amazon Connect and subject to change.</p>
   *          <p>Runs an AWS Lambda job that does the following:</p>
   *          <ol>
   *             <li>
   *                <p>All the profileKeys in the <code>ProfileToBeMerged</code> will be moved to the
   *                main profile.</p>
   *             </li>
   *             <li>
   *                <p>All the objects in the <code>ProfileToBeMerged</code> will be moved to the main
   *                profile.</p>
   *             </li>
   *             <li>
   *                <p>All the <code>ProfileToBeMerged</code> will be deleted at the end.</p>
   *             </li>
   *             <li>
   *                <p>All the profileKeys in the <code>ProfileIdsToBeMerged</code> will be moved to the
   *                main profile.</p>
   *             </li>
   *             <li>
   *                <p>Standard fields are merged as follows:</p>
   *                <ol>
   *                   <li>
   *                      <p>Fields are always "union"-ed if there are no conflicts in standard fields or
   *                      attributeKeys.</p>
   *                   </li>
   *                   <li>
   *                      <p>When there are conflicting fields:</p>
   *
   *                      <ol>
   *                         <li>
   *                            <p>If no <code>SourceProfileIds</code> entry is specified, the main
   *                            Profile value is always taken. </p>
   *                         </li>
   *                         <li>
   *                            <p>If a <code>SourceProfileIds</code> entry is specified, the specified
   *                            profileId is always taken, even if it is a NULL value.</p>
   *                         </li>
   *                      </ol>
   *                   </li>
   *                </ol>
   *             </li>
   *          </ol>
   *          <p>You can use MergeProfiles together with <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>, which
   *          returns potentially matching profiles, or use it with the results of another matching
   *          system. After profiles have been merged, they cannot be separated (unmerged).</p>
   */
  public mergeProfiles(
    args: MergeProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MergeProfilesCommandOutput>;
  public mergeProfiles(
    args: MergeProfilesCommandInput,
    cb: (err: any, data?: MergeProfilesCommandOutput) => void
  ): void;
  public mergeProfiles(
    args: MergeProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MergeProfilesCommandOutput) => void
  ): void;
  public mergeProfiles(
    args: MergeProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MergeProfilesCommandOutput) => void),
    cb?: (err: any, data?: MergeProfilesCommandOutput) => void
  ): Promise<MergeProfilesCommandOutput> | void {
    const command = new MergeProfilesCommand(args);
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
   * <p>Adds an integration between the service and a third-party service, which includes
   *          Amazon AppFlow and Amazon Connect.</p>
   *          <p>An integration can belong to only one domain.</p>
   */
  public putIntegration(
    args: PutIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutIntegrationCommandOutput>;
  public putIntegration(
    args: PutIntegrationCommandInput,
    cb: (err: any, data?: PutIntegrationCommandOutput) => void
  ): void;
  public putIntegration(
    args: PutIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutIntegrationCommandOutput) => void
  ): void;
  public putIntegration(
    args: PutIntegrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutIntegrationCommandOutput) => void),
    cb?: (err: any, data?: PutIntegrationCommandOutput) => void
  ): Promise<PutIntegrationCommandOutput> | void {
    const command = new PutIntegrationCommand(args);
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
   * <p>Adds additional objects to customer profiles of a given ObjectType.</p>
   *          <p>When adding a specific profile object, like a Contact Trace Record (CTR), an inferred
   *          profile can get created if it is not mapped to an existing profile. The resulting profile
   *          will only have a phone number populated in the standard ProfileObject. Any additional CTRs
   *          with the same phone number will be mapped to the same inferred profile.</p>
   *          <p>When a ProfileObject is created and if a ProfileObjectType already exists for the
   *          ProfileObject, it will provide data to a standard profile depending on the
   *          ProfileObjectType definition.</p>
   *          <p>PutProfileObject needs an ObjectType, which can be created using
   *          PutProfileObjectType.</p>
   */
  public putProfileObject(
    args: PutProfileObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutProfileObjectCommandOutput>;
  public putProfileObject(
    args: PutProfileObjectCommandInput,
    cb: (err: any, data?: PutProfileObjectCommandOutput) => void
  ): void;
  public putProfileObject(
    args: PutProfileObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutProfileObjectCommandOutput) => void
  ): void;
  public putProfileObject(
    args: PutProfileObjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutProfileObjectCommandOutput) => void),
    cb?: (err: any, data?: PutProfileObjectCommandOutput) => void
  ): Promise<PutProfileObjectCommandOutput> | void {
    const command = new PutProfileObjectCommand(args);
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
   * <p>Defines a ProfileObjectType.</p>
   */
  public putProfileObjectType(
    args: PutProfileObjectTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutProfileObjectTypeCommandOutput>;
  public putProfileObjectType(
    args: PutProfileObjectTypeCommandInput,
    cb: (err: any, data?: PutProfileObjectTypeCommandOutput) => void
  ): void;
  public putProfileObjectType(
    args: PutProfileObjectTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutProfileObjectTypeCommandOutput) => void
  ): void;
  public putProfileObjectType(
    args: PutProfileObjectTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutProfileObjectTypeCommandOutput) => void),
    cb?: (err: any, data?: PutProfileObjectTypeCommandOutput) => void
  ): Promise<PutProfileObjectTypeCommandOutput> | void {
    const command = new PutProfileObjectTypeCommand(args);
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
   * <p>Searches for profiles within a specific domain name using name, phone number, email
   *          address, account number, or a custom defined index.</p>
   */
  public searchProfiles(
    args: SearchProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchProfilesCommandOutput>;
  public searchProfiles(
    args: SearchProfilesCommandInput,
    cb: (err: any, data?: SearchProfilesCommandOutput) => void
  ): void;
  public searchProfiles(
    args: SearchProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchProfilesCommandOutput) => void
  ): void;
  public searchProfiles(
    args: SearchProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchProfilesCommandOutput) => void),
    cb?: (err: any, data?: SearchProfilesCommandOutput) => void
  ): Promise<SearchProfilesCommandOutput> | void {
    const command = new SearchProfilesCommand(args);
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
   * <p>Assigns one or more tags (key-value pairs) to the specified Amazon Connect Customer Profiles
   *          resource. Tags can help you organize and categorize your resources. You can also use them
   *          to scope user permissions by granting a user permission to access or change only resources
   *          with certain tag values. In Connect Customer Profiles, domains, profile object types, and
   *          integrations can be tagged.</p>
   *          <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of
   *          characters.</p>
   *          <p>You can use the TagResource action with a resource that already has tags. If you specify
   *          a new tag key, this tag is appended to the list of tags associated with the resource. If
   *          you specify a tag key that is already associated with the resource, the new tag value that
   *          you specify replaces the previous value for that tag.</p>
   *          <p>You can associate as many as 50 tags with a resource.</p>
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
   * <p>Removes one or more tags from the specified Amazon Connect Customer Profiles resource. In Connect
   *          Customer Profiles, domains, profile object types, and integrations can be tagged.</p>
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
   * <p>Updates the properties of a domain, including creating or selecting a dead letter queue
   *          or an encryption key.</p>
   *          <p>After a domain is created, the name can’t be changed.</p>
   *          <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> to
   *          enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity
   *             resolution</a>: set <code>Matching</code> to true. </p>
   */
  public updateDomain(
    args: UpdateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainCommandOutput>;
  public updateDomain(args: UpdateDomainCommandInput, cb: (err: any, data?: UpdateDomainCommandOutput) => void): void;
  public updateDomain(
    args: UpdateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainCommandOutput) => void
  ): void;
  public updateDomain(
    args: UpdateDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDomainCommandOutput) => void),
    cb?: (err: any, data?: UpdateDomainCommandOutput) => void
  ): Promise<UpdateDomainCommandOutput> | void {
    const command = new UpdateDomainCommand(args);
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
   * <p>Updates the properties of a profile. The ProfileId is required for updating a customer
   *          profile.</p>
   *          <p>When calling the UpdateProfile API, specifying an empty string value means that any
   *          existing value will be removed. Not specifying a string value means that any value already
   *          there will be kept.</p>
   */
  public updateProfile(
    args: UpdateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProfileCommandOutput>;
  public updateProfile(
    args: UpdateProfileCommandInput,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;
  public updateProfile(
    args: UpdateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;
  public updateProfile(
    args: UpdateProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateProfileCommandOutput) => void
  ): Promise<UpdateProfileCommandOutput> | void {
    const command = new UpdateProfileCommand(args);
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
