// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateProfileCommand,
  CreateProfileCommandInput,
  CreateProfileCommandOutput,
} from "./commands/CreateProfileCommand";
import {
  CreateTrustAnchorCommand,
  CreateTrustAnchorCommandInput,
  CreateTrustAnchorCommandOutput,
} from "./commands/CreateTrustAnchorCommand";
import { DeleteCrlCommand, DeleteCrlCommandInput, DeleteCrlCommandOutput } from "./commands/DeleteCrlCommand";
import {
  DeleteProfileCommand,
  DeleteProfileCommandInput,
  DeleteProfileCommandOutput,
} from "./commands/DeleteProfileCommand";
import {
  DeleteTrustAnchorCommand,
  DeleteTrustAnchorCommandInput,
  DeleteTrustAnchorCommandOutput,
} from "./commands/DeleteTrustAnchorCommand";
import { DisableCrlCommand, DisableCrlCommandInput, DisableCrlCommandOutput } from "./commands/DisableCrlCommand";
import {
  DisableProfileCommand,
  DisableProfileCommandInput,
  DisableProfileCommandOutput,
} from "./commands/DisableProfileCommand";
import {
  DisableTrustAnchorCommand,
  DisableTrustAnchorCommandInput,
  DisableTrustAnchorCommandOutput,
} from "./commands/DisableTrustAnchorCommand";
import { EnableCrlCommand, EnableCrlCommandInput, EnableCrlCommandOutput } from "./commands/EnableCrlCommand";
import {
  EnableProfileCommand,
  EnableProfileCommandInput,
  EnableProfileCommandOutput,
} from "./commands/EnableProfileCommand";
import {
  EnableTrustAnchorCommand,
  EnableTrustAnchorCommandInput,
  EnableTrustAnchorCommandOutput,
} from "./commands/EnableTrustAnchorCommand";
import { GetCrlCommand, GetCrlCommandInput, GetCrlCommandOutput } from "./commands/GetCrlCommand";
import { GetProfileCommand, GetProfileCommandInput, GetProfileCommandOutput } from "./commands/GetProfileCommand";
import { GetSubjectCommand, GetSubjectCommandInput, GetSubjectCommandOutput } from "./commands/GetSubjectCommand";
import {
  GetTrustAnchorCommand,
  GetTrustAnchorCommandInput,
  GetTrustAnchorCommandOutput,
} from "./commands/GetTrustAnchorCommand";
import { ImportCrlCommand, ImportCrlCommandInput, ImportCrlCommandOutput } from "./commands/ImportCrlCommand";
import { ListCrlsCommand, ListCrlsCommandInput, ListCrlsCommandOutput } from "./commands/ListCrlsCommand";
import {
  ListProfilesCommand,
  ListProfilesCommandInput,
  ListProfilesCommandOutput,
} from "./commands/ListProfilesCommand";
import {
  ListSubjectsCommand,
  ListSubjectsCommandInput,
  ListSubjectsCommandOutput,
} from "./commands/ListSubjectsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTrustAnchorsCommand,
  ListTrustAnchorsCommandInput,
  ListTrustAnchorsCommandOutput,
} from "./commands/ListTrustAnchorsCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateCrlCommand, UpdateCrlCommandInput, UpdateCrlCommandOutput } from "./commands/UpdateCrlCommand";
import {
  UpdateProfileCommand,
  UpdateProfileCommandInput,
  UpdateProfileCommandOutput,
} from "./commands/UpdateProfileCommand";
import {
  UpdateTrustAnchorCommand,
  UpdateTrustAnchorCommandInput,
  UpdateTrustAnchorCommandOutput,
} from "./commands/UpdateTrustAnchorCommand";
import { RolesAnywhereClient } from "./RolesAnywhereClient";

/**
 * <p>AWS Identity and Access Management Roles Anywhere provides a secure way for your workloads such as servers, containers, and applications running outside of AWS to obtain Temporary AWS credentials. Your workloads can use the same IAM policies and roles that you have configured with native AWS applications to access AWS resources. Using IAM Roles Anywhere will eliminate the need to manage long term credentials for workloads running outside of AWS.</p>
 *          <p>To use IAM Roles Anywhere customer workloads will need to use X.509 certificates issued by their Certificate Authority (CA) . The Certificate Authority (CA) needs to be registered with IAM Roles Anywhere as a trust anchor to establish trust between customer PKI and IAM Roles Anywhere. Customers who do not manage their own PKI system can use AWS Certificate Manager Private Certificate Authority (ACM PCA) to create a Certificate Authority and use that to establish trust with IAM Roles Anywhere</p>
 *          <p>This guide describes the IAM rolesanywhere operations that you can call programmatically. For general information about IAM Roles Anywhere see <a href="https://docs.aws.amazon.com/">https://docs.aws.amazon.com/</a>
 *          </p>
 */
export class RolesAnywhere extends RolesAnywhereClient {
  /**
   * <p>Creates a profile. A profile is configuration resource to list the roles that RolesAnywhere service is trusted to assume. In addition, by applying a profile you can intersect permissions with IAM managed policies.</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:CreateProfile</code>.
   *          </p>
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
   * <p>Creates a trust anchor. You establish trust between IAM Roles Anywhere and your certificate authority (CA) by configuring a trust anchor. A Trust Anchor is defined either as a reference to a AWS Certificate Manager Private Certificate Authority (ACM PCA), or by uploading a Certificate Authority (CA) certificate. Your AWS workloads can authenticate with the trust anchor using certificates issued by the trusted Certificate Authority (CA) in exchange for temporary AWS credentials.</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:CreateTrustAnchor</code>.
   *          </p>
   */
  public createTrustAnchor(
    args: CreateTrustAnchorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrustAnchorCommandOutput>;
  public createTrustAnchor(
    args: CreateTrustAnchorCommandInput,
    cb: (err: any, data?: CreateTrustAnchorCommandOutput) => void
  ): void;
  public createTrustAnchor(
    args: CreateTrustAnchorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrustAnchorCommandOutput) => void
  ): void;
  public createTrustAnchor(
    args: CreateTrustAnchorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTrustAnchorCommandOutput) => void),
    cb?: (err: any, data?: CreateTrustAnchorCommandOutput) => void
  ): Promise<CreateTrustAnchorCommandOutput> | void {
    const command = new CreateTrustAnchorCommand(args);
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
   * <p>Deletes a certificate revocation list (CRL).</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:DeleteCrl</code>.
   *          </p>
   */
  public deleteCrl(args: DeleteCrlCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCrlCommandOutput>;
  public deleteCrl(args: DeleteCrlCommandInput, cb: (err: any, data?: DeleteCrlCommandOutput) => void): void;
  public deleteCrl(
    args: DeleteCrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCrlCommandOutput) => void
  ): void;
  public deleteCrl(
    args: DeleteCrlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCrlCommandOutput) => void),
    cb?: (err: any, data?: DeleteCrlCommandOutput) => void
  ): Promise<DeleteCrlCommandOutput> | void {
    const command = new DeleteCrlCommand(args);
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
   * <p>Deletes a profile.</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:DeleteProfile</code>.
   *          </p>
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
   * <p>Deletes a trust anchor.</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:DeleteTrustAnchor</code>.
   *          </p>
   */
  public deleteTrustAnchor(
    args: DeleteTrustAnchorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrustAnchorCommandOutput>;
  public deleteTrustAnchor(
    args: DeleteTrustAnchorCommandInput,
    cb: (err: any, data?: DeleteTrustAnchorCommandOutput) => void
  ): void;
  public deleteTrustAnchor(
    args: DeleteTrustAnchorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrustAnchorCommandOutput) => void
  ): void;
  public deleteTrustAnchor(
    args: DeleteTrustAnchorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTrustAnchorCommandOutput) => void),
    cb?: (err: any, data?: DeleteTrustAnchorCommandOutput) => void
  ): Promise<DeleteTrustAnchorCommandOutput> | void {
    const command = new DeleteTrustAnchorCommand(args);
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
   * <p>Disables a certificate revocation list (CRL).</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:DisableCrl</code>.
   *          </p>
   */
  public disableCrl(args: DisableCrlCommandInput, options?: __HttpHandlerOptions): Promise<DisableCrlCommandOutput>;
  public disableCrl(args: DisableCrlCommandInput, cb: (err: any, data?: DisableCrlCommandOutput) => void): void;
  public disableCrl(
    args: DisableCrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableCrlCommandOutput) => void
  ): void;
  public disableCrl(
    args: DisableCrlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableCrlCommandOutput) => void),
    cb?: (err: any, data?: DisableCrlCommandOutput) => void
  ): Promise<DisableCrlCommandOutput> | void {
    const command = new DisableCrlCommand(args);
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
   * <p>Disables a profile. When disabled, <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> requests with this profile fail.</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:DisableProfile</code>.
   *          </p>
   */
  public disableProfile(
    args: DisableProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableProfileCommandOutput>;
  public disableProfile(
    args: DisableProfileCommandInput,
    cb: (err: any, data?: DisableProfileCommandOutput) => void
  ): void;
  public disableProfile(
    args: DisableProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableProfileCommandOutput) => void
  ): void;
  public disableProfile(
    args: DisableProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableProfileCommandOutput) => void),
    cb?: (err: any, data?: DisableProfileCommandOutput) => void
  ): Promise<DisableProfileCommandOutput> | void {
    const command = new DisableProfileCommand(args);
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
   * <p>Disables a trust anchor. When disabled, <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> requests specifying this trust anchor are unauthorized.</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:DisableTrustAnchor</code>.
   *          </p>
   */
  public disableTrustAnchor(
    args: DisableTrustAnchorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableTrustAnchorCommandOutput>;
  public disableTrustAnchor(
    args: DisableTrustAnchorCommandInput,
    cb: (err: any, data?: DisableTrustAnchorCommandOutput) => void
  ): void;
  public disableTrustAnchor(
    args: DisableTrustAnchorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableTrustAnchorCommandOutput) => void
  ): void;
  public disableTrustAnchor(
    args: DisableTrustAnchorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableTrustAnchorCommandOutput) => void),
    cb?: (err: any, data?: DisableTrustAnchorCommandOutput) => void
  ): Promise<DisableTrustAnchorCommandOutput> | void {
    const command = new DisableTrustAnchorCommand(args);
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
   * <p>Enables a certificate revocation list (CRL). When enabled, certificates stored in the CRL are unauthorized to receive session credentials.</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:EnableCrl</code>.
   *          </p>
   */
  public enableCrl(args: EnableCrlCommandInput, options?: __HttpHandlerOptions): Promise<EnableCrlCommandOutput>;
  public enableCrl(args: EnableCrlCommandInput, cb: (err: any, data?: EnableCrlCommandOutput) => void): void;
  public enableCrl(
    args: EnableCrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableCrlCommandOutput) => void
  ): void;
  public enableCrl(
    args: EnableCrlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableCrlCommandOutput) => void),
    cb?: (err: any, data?: EnableCrlCommandOutput) => void
  ): Promise<EnableCrlCommandOutput> | void {
    const command = new EnableCrlCommand(args);
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
   * <p>Enables the roles in a profile to receive session credentials in <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a>. </p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:EnableProfile</code>.
   *          </p>
   */
  public enableProfile(
    args: EnableProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableProfileCommandOutput>;
  public enableProfile(
    args: EnableProfileCommandInput,
    cb: (err: any, data?: EnableProfileCommandOutput) => void
  ): void;
  public enableProfile(
    args: EnableProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableProfileCommandOutput) => void
  ): void;
  public enableProfile(
    args: EnableProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableProfileCommandOutput) => void),
    cb?: (err: any, data?: EnableProfileCommandOutput) => void
  ): Promise<EnableProfileCommandOutput> | void {
    const command = new EnableProfileCommand(args);
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
   * <p>Enables a trust anchor. When enabled, certificates in the trust anchor chain are authorized for trust validation. </p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:EnableTrustAnchor</code>.
   *          </p>
   */
  public enableTrustAnchor(
    args: EnableTrustAnchorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableTrustAnchorCommandOutput>;
  public enableTrustAnchor(
    args: EnableTrustAnchorCommandInput,
    cb: (err: any, data?: EnableTrustAnchorCommandOutput) => void
  ): void;
  public enableTrustAnchor(
    args: EnableTrustAnchorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableTrustAnchorCommandOutput) => void
  ): void;
  public enableTrustAnchor(
    args: EnableTrustAnchorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableTrustAnchorCommandOutput) => void),
    cb?: (err: any, data?: EnableTrustAnchorCommandOutput) => void
  ): Promise<EnableTrustAnchorCommandOutput> | void {
    const command = new EnableTrustAnchorCommand(args);
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
   * <p>Gets a certificate revocation list (CRL).</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:GetCrl</code>.
   *          </p>
   */
  public getCrl(args: GetCrlCommandInput, options?: __HttpHandlerOptions): Promise<GetCrlCommandOutput>;
  public getCrl(args: GetCrlCommandInput, cb: (err: any, data?: GetCrlCommandOutput) => void): void;
  public getCrl(
    args: GetCrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCrlCommandOutput) => void
  ): void;
  public getCrl(
    args: GetCrlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCrlCommandOutput) => void),
    cb?: (err: any, data?: GetCrlCommandOutput) => void
  ): Promise<GetCrlCommandOutput> | void {
    const command = new GetCrlCommand(args);
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
   * <p>Gets a profile.</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:GetProfile</code>.
   *          </p>
   */
  public getProfile(args: GetProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetProfileCommandOutput>;
  public getProfile(args: GetProfileCommandInput, cb: (err: any, data?: GetProfileCommandOutput) => void): void;
  public getProfile(
    args: GetProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;
  public getProfile(
    args: GetProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetProfileCommandOutput) => void),
    cb?: (err: any, data?: GetProfileCommandOutput) => void
  ): Promise<GetProfileCommandOutput> | void {
    const command = new GetProfileCommand(args);
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
   * <p>Gets a Subject. A Subject associates a certificate identity with authentication attempts by CreateSession. The Subject resources stores audit information such as status of the last authentication attempt, the certificate data used in the attempt, and the last time the associated identity attempted authentication. </p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:GetSubject</code>.
   *          </p>
   */
  public getSubject(args: GetSubjectCommandInput, options?: __HttpHandlerOptions): Promise<GetSubjectCommandOutput>;
  public getSubject(args: GetSubjectCommandInput, cb: (err: any, data?: GetSubjectCommandOutput) => void): void;
  public getSubject(
    args: GetSubjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubjectCommandOutput) => void
  ): void;
  public getSubject(
    args: GetSubjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSubjectCommandOutput) => void),
    cb?: (err: any, data?: GetSubjectCommandOutput) => void
  ): Promise<GetSubjectCommandOutput> | void {
    const command = new GetSubjectCommand(args);
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
   * <p>Gets a trust anchor.</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:GetTrustAnchor</code>.
   *          </p>
   */
  public getTrustAnchor(
    args: GetTrustAnchorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrustAnchorCommandOutput>;
  public getTrustAnchor(
    args: GetTrustAnchorCommandInput,
    cb: (err: any, data?: GetTrustAnchorCommandOutput) => void
  ): void;
  public getTrustAnchor(
    args: GetTrustAnchorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrustAnchorCommandOutput) => void
  ): void;
  public getTrustAnchor(
    args: GetTrustAnchorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTrustAnchorCommandOutput) => void),
    cb?: (err: any, data?: GetTrustAnchorCommandOutput) => void
  ): Promise<GetTrustAnchorCommandOutput> | void {
    const command = new GetTrustAnchorCommand(args);
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
   * <p>Imports the certificate revocation list (CRL). CRl is a list of certificates that have been revoked by the issuing certificate Authority (CA). IAM Roles Anywhere validates against the crl list before issuing credentials. </p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:ImportCrl</code>.
   *          </p>
   */
  public importCrl(args: ImportCrlCommandInput, options?: __HttpHandlerOptions): Promise<ImportCrlCommandOutput>;
  public importCrl(args: ImportCrlCommandInput, cb: (err: any, data?: ImportCrlCommandOutput) => void): void;
  public importCrl(
    args: ImportCrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportCrlCommandOutput) => void
  ): void;
  public importCrl(
    args: ImportCrlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportCrlCommandOutput) => void),
    cb?: (err: any, data?: ImportCrlCommandOutput) => void
  ): Promise<ImportCrlCommandOutput> | void {
    const command = new ImportCrlCommand(args);
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
   * <p>Lists all Crls in the authenticated account and Amazon Web Services Region.</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:ListCrls</code>.
   *          </p>
   */
  public listCrls(args: ListCrlsCommandInput, options?: __HttpHandlerOptions): Promise<ListCrlsCommandOutput>;
  public listCrls(args: ListCrlsCommandInput, cb: (err: any, data?: ListCrlsCommandOutput) => void): void;
  public listCrls(
    args: ListCrlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCrlsCommandOutput) => void
  ): void;
  public listCrls(
    args: ListCrlsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCrlsCommandOutput) => void),
    cb?: (err: any, data?: ListCrlsCommandOutput) => void
  ): Promise<ListCrlsCommandOutput> | void {
    const command = new ListCrlsCommand(args);
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
   * <p>Lists all profiles in the authenticated account and Amazon Web Services Region.</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:ListProfiles</code>.
   *          </p>
   */
  public listProfiles(
    args: ListProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfilesCommandOutput>;
  public listProfiles(args: ListProfilesCommandInput, cb: (err: any, data?: ListProfilesCommandOutput) => void): void;
  public listProfiles(
    args: ListProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfilesCommandOutput) => void
  ): void;
  public listProfiles(
    args: ListProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListProfilesCommandOutput) => void
  ): Promise<ListProfilesCommandOutput> | void {
    const command = new ListProfilesCommand(args);
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
   * <p>Lists the subjects in the authenticated account and Amazon Web Services Region.</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:ListSubjects</code>.
   *          </p>
   */
  public listSubjects(
    args: ListSubjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubjectsCommandOutput>;
  public listSubjects(args: ListSubjectsCommandInput, cb: (err: any, data?: ListSubjectsCommandOutput) => void): void;
  public listSubjects(
    args: ListSubjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubjectsCommandOutput) => void
  ): void;
  public listSubjects(
    args: ListSubjectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSubjectsCommandOutput) => void),
    cb?: (err: any, data?: ListSubjectsCommandOutput) => void
  ): Promise<ListSubjectsCommandOutput> | void {
    const command = new ListSubjectsCommand(args);
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
   * <p>Lists the tags attached to the resource.</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:ListTagsForResource</code>.
   *          </p>
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
   * <p>Lists the trust anchors in the authenticated account and Amazon Web Services Region.</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:ListTrustAnchors</code>.
   *          </p>
   */
  public listTrustAnchors(
    args: ListTrustAnchorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrustAnchorsCommandOutput>;
  public listTrustAnchors(
    args: ListTrustAnchorsCommandInput,
    cb: (err: any, data?: ListTrustAnchorsCommandOutput) => void
  ): void;
  public listTrustAnchors(
    args: ListTrustAnchorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrustAnchorsCommandOutput) => void
  ): void;
  public listTrustAnchors(
    args: ListTrustAnchorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTrustAnchorsCommandOutput) => void),
    cb?: (err: any, data?: ListTrustAnchorsCommandOutput) => void
  ): Promise<ListTrustAnchorsCommandOutput> | void {
    const command = new ListTrustAnchorsCommand(args);
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
   * <p>Attaches tags to a resource.</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:TagResource</code>.
   *          </p>
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
   * <p>Removes tags from the resource.</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:UntagResource</code>.
   *          </p>
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
   * <p>Updates the certificate revocation list (CRL). CRl is a list of certificates that have been revoked by the issuing certificate Authority (CA). IAM Roles Anywhere validates against the crl list before issuing credentials.</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:UpdateCrl</code>.
   *          </p>
   */
  public updateCrl(args: UpdateCrlCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCrlCommandOutput>;
  public updateCrl(args: UpdateCrlCommandInput, cb: (err: any, data?: UpdateCrlCommandOutput) => void): void;
  public updateCrl(
    args: UpdateCrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCrlCommandOutput) => void
  ): void;
  public updateCrl(
    args: UpdateCrlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCrlCommandOutput) => void),
    cb?: (err: any, data?: UpdateCrlCommandOutput) => void
  ): Promise<UpdateCrlCommandOutput> | void {
    const command = new UpdateCrlCommand(args);
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
   * <p>Updates the profile. A profile is configuration resource to list the roles that RolesAnywhere service is trusted to assume. In addition, by applying a profile you can scope-down permissions with IAM managed policies.</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:UpdateProfile</code>.
   *          </p>
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

  /**
   * <p>Updates the trust anchor.You establish trust between IAM Roles Anywhere and your certificate authority (CA) by configuring a trust anchor. A Trust Anchor is defined either as a reference to a AWS Certificate Manager Private Certificate Authority (ACM PCA), or by uploading a Certificate Authority (CA) certificate. Your AWS workloads can authenticate with the trust anchor using certificates issued by the trusted Certificate Authority (CA) in exchange for temporary AWS credentials.</p>
   *          <p>
   *             <b>Required permissions: </b>
   *             <code>rolesanywhere:UpdateTrustAnchor</code>.
   *          </p>
   */
  public updateTrustAnchor(
    args: UpdateTrustAnchorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTrustAnchorCommandOutput>;
  public updateTrustAnchor(
    args: UpdateTrustAnchorCommandInput,
    cb: (err: any, data?: UpdateTrustAnchorCommandOutput) => void
  ): void;
  public updateTrustAnchor(
    args: UpdateTrustAnchorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrustAnchorCommandOutput) => void
  ): void;
  public updateTrustAnchor(
    args: UpdateTrustAnchorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTrustAnchorCommandOutput) => void),
    cb?: (err: any, data?: UpdateTrustAnchorCommandOutput) => void
  ): Promise<UpdateTrustAnchorCommandOutput> | void {
    const command = new UpdateTrustAnchorCommand(args);
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
