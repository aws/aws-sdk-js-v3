// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type AcceptLinkCommandInput,
  type AcceptLinkCommandOutput,
  AcceptLinkCommand,
} from "./commands/AcceptLinkCommand";
import {
  type AssociateCertificateCommandInput,
  type AssociateCertificateCommandOutput,
  AssociateCertificateCommand,
} from "./commands/AssociateCertificateCommand";
import {
  type CreateInboundExternalLinkCommandInput,
  type CreateInboundExternalLinkCommandOutput,
  CreateInboundExternalLinkCommand,
} from "./commands/CreateInboundExternalLinkCommand";
import {
  type CreateLinkCommandInput,
  type CreateLinkCommandOutput,
  CreateLinkCommand,
} from "./commands/CreateLinkCommand";
import {
  type CreateLinkRoutingRuleCommandInput,
  type CreateLinkRoutingRuleCommandOutput,
  CreateLinkRoutingRuleCommand,
} from "./commands/CreateLinkRoutingRuleCommand";
import {
  type CreateOutboundExternalLinkCommandInput,
  type CreateOutboundExternalLinkCommandOutput,
  CreateOutboundExternalLinkCommand,
} from "./commands/CreateOutboundExternalLinkCommand";
import {
  type CreateRequesterGatewayCommandInput,
  type CreateRequesterGatewayCommandOutput,
  CreateRequesterGatewayCommand,
} from "./commands/CreateRequesterGatewayCommand";
import {
  type CreateResponderGatewayCommandInput,
  type CreateResponderGatewayCommandOutput,
  CreateResponderGatewayCommand,
} from "./commands/CreateResponderGatewayCommand";
import {
  type DeleteInboundExternalLinkCommandInput,
  type DeleteInboundExternalLinkCommandOutput,
  DeleteInboundExternalLinkCommand,
} from "./commands/DeleteInboundExternalLinkCommand";
import {
  type DeleteLinkCommandInput,
  type DeleteLinkCommandOutput,
  DeleteLinkCommand,
} from "./commands/DeleteLinkCommand";
import {
  type DeleteLinkRoutingRuleCommandInput,
  type DeleteLinkRoutingRuleCommandOutput,
  DeleteLinkRoutingRuleCommand,
} from "./commands/DeleteLinkRoutingRuleCommand";
import {
  type DeleteOutboundExternalLinkCommandInput,
  type DeleteOutboundExternalLinkCommandOutput,
  DeleteOutboundExternalLinkCommand,
} from "./commands/DeleteOutboundExternalLinkCommand";
import {
  type DeleteRequesterGatewayCommandInput,
  type DeleteRequesterGatewayCommandOutput,
  DeleteRequesterGatewayCommand,
} from "./commands/DeleteRequesterGatewayCommand";
import {
  type DeleteResponderGatewayCommandInput,
  type DeleteResponderGatewayCommandOutput,
  DeleteResponderGatewayCommand,
} from "./commands/DeleteResponderGatewayCommand";
import {
  type DisassociateCertificateCommandInput,
  type DisassociateCertificateCommandOutput,
  DisassociateCertificateCommand,
} from "./commands/DisassociateCertificateCommand";
import {
  type GetCertificateAssociationCommandInput,
  type GetCertificateAssociationCommandOutput,
  GetCertificateAssociationCommand,
} from "./commands/GetCertificateAssociationCommand";
import {
  type GetInboundExternalLinkCommandInput,
  type GetInboundExternalLinkCommandOutput,
  GetInboundExternalLinkCommand,
} from "./commands/GetInboundExternalLinkCommand";
import { type GetLinkCommandInput, type GetLinkCommandOutput, GetLinkCommand } from "./commands/GetLinkCommand";
import {
  type GetLinkRoutingRuleCommandInput,
  type GetLinkRoutingRuleCommandOutput,
  GetLinkRoutingRuleCommand,
} from "./commands/GetLinkRoutingRuleCommand";
import {
  type GetOutboundExternalLinkCommandInput,
  type GetOutboundExternalLinkCommandOutput,
  GetOutboundExternalLinkCommand,
} from "./commands/GetOutboundExternalLinkCommand";
import {
  type GetRequesterGatewayCommandInput,
  type GetRequesterGatewayCommandOutput,
  GetRequesterGatewayCommand,
} from "./commands/GetRequesterGatewayCommand";
import {
  type GetResponderGatewayCommandInput,
  type GetResponderGatewayCommandOutput,
  GetResponderGatewayCommand,
} from "./commands/GetResponderGatewayCommand";
import {
  type ListCertificateAssociationsCommandInput,
  type ListCertificateAssociationsCommandOutput,
  ListCertificateAssociationsCommand,
} from "./commands/ListCertificateAssociationsCommand";
import {
  type ListLinkRoutingRulesCommandInput,
  type ListLinkRoutingRulesCommandOutput,
  ListLinkRoutingRulesCommand,
} from "./commands/ListLinkRoutingRulesCommand";
import { type ListLinksCommandInput, type ListLinksCommandOutput, ListLinksCommand } from "./commands/ListLinksCommand";
import {
  type ListRequesterGatewaysCommandInput,
  type ListRequesterGatewaysCommandOutput,
  ListRequesterGatewaysCommand,
} from "./commands/ListRequesterGatewaysCommand";
import {
  type ListResponderGatewaysCommandInput,
  type ListResponderGatewaysCommandOutput,
  ListResponderGatewaysCommand,
} from "./commands/ListResponderGatewaysCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type RejectLinkCommandInput,
  type RejectLinkCommandOutput,
  RejectLinkCommand,
} from "./commands/RejectLinkCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateLinkCommandInput,
  type UpdateLinkCommandOutput,
  UpdateLinkCommand,
} from "./commands/UpdateLinkCommand";
import {
  type UpdateLinkModuleFlowCommandInput,
  type UpdateLinkModuleFlowCommandOutput,
  UpdateLinkModuleFlowCommand,
} from "./commands/UpdateLinkModuleFlowCommand";
import {
  type UpdateLinkRoutingRuleCommandInput,
  type UpdateLinkRoutingRuleCommandOutput,
  UpdateLinkRoutingRuleCommand,
} from "./commands/UpdateLinkRoutingRuleCommand";
import {
  type UpdateRequesterGatewayCommandInput,
  type UpdateRequesterGatewayCommandOutput,
  UpdateRequesterGatewayCommand,
} from "./commands/UpdateRequesterGatewayCommand";
import {
  type UpdateResponderGatewayCommandInput,
  type UpdateResponderGatewayCommandOutput,
  UpdateResponderGatewayCommand,
} from "./commands/UpdateResponderGatewayCommand";
import type { ResourceNotFoundException } from "./models/errors";
import type { RTBFabricServiceException } from "./models/RTBFabricServiceException";
import { paginateListCertificateAssociations } from "./pagination/ListCertificateAssociationsPaginator";
import { paginateListLinkRoutingRules } from "./pagination/ListLinkRoutingRulesPaginator";
import { paginateListLinks } from "./pagination/ListLinksPaginator";
import { paginateListRequesterGateways } from "./pagination/ListRequesterGatewaysPaginator";
import { paginateListResponderGateways } from "./pagination/ListResponderGatewaysPaginator";
import { RTBFabricClient } from "./RTBFabricClient";
import { waitUntilCertificateAssociated } from "./waiters/waitForCertificateAssociated";
import { waitUntilCertificateDisassociated } from "./waiters/waitForCertificateDisassociated";
import { waitUntilInboundExternalLinkActive } from "./waiters/waitForInboundExternalLinkActive";
import { waitUntilInboundExternalLinkDeleted } from "./waiters/waitForInboundExternalLinkDeleted";
import { waitUntilLinkAccepted } from "./waiters/waitForLinkAccepted";
import { waitUntilLinkActive } from "./waiters/waitForLinkActive";
import { waitUntilLinkDeleted } from "./waiters/waitForLinkDeleted";
import { waitUntilLinkRoutingRuleActive } from "./waiters/waitForLinkRoutingRuleActive";
import { waitUntilLinkRoutingRuleDeleted } from "./waiters/waitForLinkRoutingRuleDeleted";
import { waitUntilOutboundExternalLinkActive } from "./waiters/waitForOutboundExternalLinkActive";
import { waitUntilOutboundExternalLinkDeleted } from "./waiters/waitForOutboundExternalLinkDeleted";
import { waitUntilRequesterGatewayActive } from "./waiters/waitForRequesterGatewayActive";
import { waitUntilRequesterGatewayDeleted } from "./waiters/waitForRequesterGatewayDeleted";
import { waitUntilResponderGatewayActive } from "./waiters/waitForResponderGatewayActive";
import { waitUntilResponderGatewayDeleted } from "./waiters/waitForResponderGatewayDeleted";

const commands = {
  AcceptLinkCommand,
  AssociateCertificateCommand,
  CreateInboundExternalLinkCommand,
  CreateLinkCommand,
  CreateLinkRoutingRuleCommand,
  CreateOutboundExternalLinkCommand,
  CreateRequesterGatewayCommand,
  CreateResponderGatewayCommand,
  DeleteInboundExternalLinkCommand,
  DeleteLinkCommand,
  DeleteLinkRoutingRuleCommand,
  DeleteOutboundExternalLinkCommand,
  DeleteRequesterGatewayCommand,
  DeleteResponderGatewayCommand,
  DisassociateCertificateCommand,
  GetCertificateAssociationCommand,
  GetInboundExternalLinkCommand,
  GetLinkCommand,
  GetLinkRoutingRuleCommand,
  GetOutboundExternalLinkCommand,
  GetRequesterGatewayCommand,
  GetResponderGatewayCommand,
  ListCertificateAssociationsCommand,
  ListLinkRoutingRulesCommand,
  ListLinksCommand,
  ListRequesterGatewaysCommand,
  ListResponderGatewaysCommand,
  ListTagsForResourceCommand,
  RejectLinkCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateLinkCommand,
  UpdateLinkModuleFlowCommand,
  UpdateLinkRoutingRuleCommand,
  UpdateRequesterGatewayCommand,
  UpdateResponderGatewayCommand,
};
const paginators = {
  paginateListCertificateAssociations,
  paginateListLinkRoutingRules,
  paginateListLinks,
  paginateListRequesterGateways,
  paginateListResponderGateways,
};
const waiters = {
  waitUntilCertificateAssociated,
  waitUntilCertificateDisassociated,
  waitUntilInboundExternalLinkActive,
  waitUntilInboundExternalLinkDeleted,
  waitUntilLinkAccepted,
  waitUntilLinkActive,
  waitUntilLinkDeleted,
  waitUntilLinkRoutingRuleActive,
  waitUntilLinkRoutingRuleDeleted,
  waitUntilOutboundExternalLinkActive,
  waitUntilOutboundExternalLinkDeleted,
  waitUntilRequesterGatewayActive,
  waitUntilRequesterGatewayDeleted,
  waitUntilResponderGatewayActive,
  waitUntilResponderGatewayDeleted,
};

export interface RTBFabric {
  /**
   * @see {@link AcceptLinkCommand}
   */
  acceptLink(
    args: AcceptLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptLinkCommandOutput>;
  acceptLink(
    args: AcceptLinkCommandInput,
    cb: (err: any, data?: AcceptLinkCommandOutput) => void
  ): void;
  acceptLink(
    args: AcceptLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateCertificateCommand}
   */
  associateCertificate(
    args: AssociateCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateCertificateCommandOutput>;
  associateCertificate(
    args: AssociateCertificateCommandInput,
    cb: (err: any, data?: AssociateCertificateCommandOutput) => void
  ): void;
  associateCertificate(
    args: AssociateCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInboundExternalLinkCommand}
   */
  createInboundExternalLink(
    args: CreateInboundExternalLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInboundExternalLinkCommandOutput>;
  createInboundExternalLink(
    args: CreateInboundExternalLinkCommandInput,
    cb: (err: any, data?: CreateInboundExternalLinkCommandOutput) => void
  ): void;
  createInboundExternalLink(
    args: CreateInboundExternalLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInboundExternalLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLinkCommand}
   */
  createLink(
    args: CreateLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLinkCommandOutput>;
  createLink(
    args: CreateLinkCommandInput,
    cb: (err: any, data?: CreateLinkCommandOutput) => void
  ): void;
  createLink(
    args: CreateLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLinkRoutingRuleCommand}
   */
  createLinkRoutingRule(
    args: CreateLinkRoutingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLinkRoutingRuleCommandOutput>;
  createLinkRoutingRule(
    args: CreateLinkRoutingRuleCommandInput,
    cb: (err: any, data?: CreateLinkRoutingRuleCommandOutput) => void
  ): void;
  createLinkRoutingRule(
    args: CreateLinkRoutingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLinkRoutingRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOutboundExternalLinkCommand}
   */
  createOutboundExternalLink(
    args: CreateOutboundExternalLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOutboundExternalLinkCommandOutput>;
  createOutboundExternalLink(
    args: CreateOutboundExternalLinkCommandInput,
    cb: (err: any, data?: CreateOutboundExternalLinkCommandOutput) => void
  ): void;
  createOutboundExternalLink(
    args: CreateOutboundExternalLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOutboundExternalLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRequesterGatewayCommand}
   */
  createRequesterGateway(
    args: CreateRequesterGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRequesterGatewayCommandOutput>;
  createRequesterGateway(
    args: CreateRequesterGatewayCommandInput,
    cb: (err: any, data?: CreateRequesterGatewayCommandOutput) => void
  ): void;
  createRequesterGateway(
    args: CreateRequesterGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRequesterGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResponderGatewayCommand}
   */
  createResponderGateway(
    args: CreateResponderGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResponderGatewayCommandOutput>;
  createResponderGateway(
    args: CreateResponderGatewayCommandInput,
    cb: (err: any, data?: CreateResponderGatewayCommandOutput) => void
  ): void;
  createResponderGateway(
    args: CreateResponderGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResponderGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInboundExternalLinkCommand}
   */
  deleteInboundExternalLink(
    args: DeleteInboundExternalLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInboundExternalLinkCommandOutput>;
  deleteInboundExternalLink(
    args: DeleteInboundExternalLinkCommandInput,
    cb: (err: any, data?: DeleteInboundExternalLinkCommandOutput) => void
  ): void;
  deleteInboundExternalLink(
    args: DeleteInboundExternalLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInboundExternalLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLinkCommand}
   */
  deleteLink(
    args: DeleteLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLinkCommandOutput>;
  deleteLink(
    args: DeleteLinkCommandInput,
    cb: (err: any, data?: DeleteLinkCommandOutput) => void
  ): void;
  deleteLink(
    args: DeleteLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLinkRoutingRuleCommand}
   */
  deleteLinkRoutingRule(
    args: DeleteLinkRoutingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLinkRoutingRuleCommandOutput>;
  deleteLinkRoutingRule(
    args: DeleteLinkRoutingRuleCommandInput,
    cb: (err: any, data?: DeleteLinkRoutingRuleCommandOutput) => void
  ): void;
  deleteLinkRoutingRule(
    args: DeleteLinkRoutingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLinkRoutingRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOutboundExternalLinkCommand}
   */
  deleteOutboundExternalLink(
    args: DeleteOutboundExternalLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOutboundExternalLinkCommandOutput>;
  deleteOutboundExternalLink(
    args: DeleteOutboundExternalLinkCommandInput,
    cb: (err: any, data?: DeleteOutboundExternalLinkCommandOutput) => void
  ): void;
  deleteOutboundExternalLink(
    args: DeleteOutboundExternalLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOutboundExternalLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRequesterGatewayCommand}
   */
  deleteRequesterGateway(
    args: DeleteRequesterGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRequesterGatewayCommandOutput>;
  deleteRequesterGateway(
    args: DeleteRequesterGatewayCommandInput,
    cb: (err: any, data?: DeleteRequesterGatewayCommandOutput) => void
  ): void;
  deleteRequesterGateway(
    args: DeleteRequesterGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRequesterGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResponderGatewayCommand}
   */
  deleteResponderGateway(
    args: DeleteResponderGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResponderGatewayCommandOutput>;
  deleteResponderGateway(
    args: DeleteResponderGatewayCommandInput,
    cb: (err: any, data?: DeleteResponderGatewayCommandOutput) => void
  ): void;
  deleteResponderGateway(
    args: DeleteResponderGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResponderGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateCertificateCommand}
   */
  disassociateCertificate(
    args: DisassociateCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateCertificateCommandOutput>;
  disassociateCertificate(
    args: DisassociateCertificateCommandInput,
    cb: (err: any, data?: DisassociateCertificateCommandOutput) => void
  ): void;
  disassociateCertificate(
    args: DisassociateCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCertificateAssociationCommand}
   */
  getCertificateAssociation(
    args: GetCertificateAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCertificateAssociationCommandOutput>;
  getCertificateAssociation(
    args: GetCertificateAssociationCommandInput,
    cb: (err: any, data?: GetCertificateAssociationCommandOutput) => void
  ): void;
  getCertificateAssociation(
    args: GetCertificateAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCertificateAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInboundExternalLinkCommand}
   */
  getInboundExternalLink(
    args: GetInboundExternalLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInboundExternalLinkCommandOutput>;
  getInboundExternalLink(
    args: GetInboundExternalLinkCommandInput,
    cb: (err: any, data?: GetInboundExternalLinkCommandOutput) => void
  ): void;
  getInboundExternalLink(
    args: GetInboundExternalLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInboundExternalLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLinkCommand}
   */
  getLink(
    args: GetLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLinkCommandOutput>;
  getLink(
    args: GetLinkCommandInput,
    cb: (err: any, data?: GetLinkCommandOutput) => void
  ): void;
  getLink(
    args: GetLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLinkRoutingRuleCommand}
   */
  getLinkRoutingRule(
    args: GetLinkRoutingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLinkRoutingRuleCommandOutput>;
  getLinkRoutingRule(
    args: GetLinkRoutingRuleCommandInput,
    cb: (err: any, data?: GetLinkRoutingRuleCommandOutput) => void
  ): void;
  getLinkRoutingRule(
    args: GetLinkRoutingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLinkRoutingRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOutboundExternalLinkCommand}
   */
  getOutboundExternalLink(
    args: GetOutboundExternalLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOutboundExternalLinkCommandOutput>;
  getOutboundExternalLink(
    args: GetOutboundExternalLinkCommandInput,
    cb: (err: any, data?: GetOutboundExternalLinkCommandOutput) => void
  ): void;
  getOutboundExternalLink(
    args: GetOutboundExternalLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOutboundExternalLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRequesterGatewayCommand}
   */
  getRequesterGateway(
    args: GetRequesterGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRequesterGatewayCommandOutput>;
  getRequesterGateway(
    args: GetRequesterGatewayCommandInput,
    cb: (err: any, data?: GetRequesterGatewayCommandOutput) => void
  ): void;
  getRequesterGateway(
    args: GetRequesterGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRequesterGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResponderGatewayCommand}
   */
  getResponderGateway(
    args: GetResponderGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResponderGatewayCommandOutput>;
  getResponderGateway(
    args: GetResponderGatewayCommandInput,
    cb: (err: any, data?: GetResponderGatewayCommandOutput) => void
  ): void;
  getResponderGateway(
    args: GetResponderGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResponderGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCertificateAssociationsCommand}
   */
  listCertificateAssociations(
    args: ListCertificateAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCertificateAssociationsCommandOutput>;
  listCertificateAssociations(
    args: ListCertificateAssociationsCommandInput,
    cb: (err: any, data?: ListCertificateAssociationsCommandOutput) => void
  ): void;
  listCertificateAssociations(
    args: ListCertificateAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCertificateAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLinkRoutingRulesCommand}
   */
  listLinkRoutingRules(
    args: ListLinkRoutingRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLinkRoutingRulesCommandOutput>;
  listLinkRoutingRules(
    args: ListLinkRoutingRulesCommandInput,
    cb: (err: any, data?: ListLinkRoutingRulesCommandOutput) => void
  ): void;
  listLinkRoutingRules(
    args: ListLinkRoutingRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLinkRoutingRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLinksCommand}
   */
  listLinks(
    args: ListLinksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLinksCommandOutput>;
  listLinks(
    args: ListLinksCommandInput,
    cb: (err: any, data?: ListLinksCommandOutput) => void
  ): void;
  listLinks(
    args: ListLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLinksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRequesterGatewaysCommand}
   */
  listRequesterGateways(): Promise<ListRequesterGatewaysCommandOutput>;
  listRequesterGateways(
    args: ListRequesterGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRequesterGatewaysCommandOutput>;
  listRequesterGateways(
    args: ListRequesterGatewaysCommandInput,
    cb: (err: any, data?: ListRequesterGatewaysCommandOutput) => void
  ): void;
  listRequesterGateways(
    args: ListRequesterGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRequesterGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResponderGatewaysCommand}
   */
  listResponderGateways(): Promise<ListResponderGatewaysCommandOutput>;
  listResponderGateways(
    args: ListResponderGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResponderGatewaysCommandOutput>;
  listResponderGateways(
    args: ListResponderGatewaysCommandInput,
    cb: (err: any, data?: ListResponderGatewaysCommandOutput) => void
  ): void;
  listResponderGateways(
    args: ListResponderGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResponderGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectLinkCommand}
   */
  rejectLink(
    args: RejectLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectLinkCommandOutput>;
  rejectLink(
    args: RejectLinkCommandInput,
    cb: (err: any, data?: RejectLinkCommandOutput) => void
  ): void;
  rejectLink(
    args: RejectLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLinkCommand}
   */
  updateLink(
    args: UpdateLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLinkCommandOutput>;
  updateLink(
    args: UpdateLinkCommandInput,
    cb: (err: any, data?: UpdateLinkCommandOutput) => void
  ): void;
  updateLink(
    args: UpdateLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLinkModuleFlowCommand}
   */
  updateLinkModuleFlow(
    args: UpdateLinkModuleFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLinkModuleFlowCommandOutput>;
  updateLinkModuleFlow(
    args: UpdateLinkModuleFlowCommandInput,
    cb: (err: any, data?: UpdateLinkModuleFlowCommandOutput) => void
  ): void;
  updateLinkModuleFlow(
    args: UpdateLinkModuleFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLinkModuleFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLinkRoutingRuleCommand}
   */
  updateLinkRoutingRule(
    args: UpdateLinkRoutingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLinkRoutingRuleCommandOutput>;
  updateLinkRoutingRule(
    args: UpdateLinkRoutingRuleCommandInput,
    cb: (err: any, data?: UpdateLinkRoutingRuleCommandOutput) => void
  ): void;
  updateLinkRoutingRule(
    args: UpdateLinkRoutingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLinkRoutingRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRequesterGatewayCommand}
   */
  updateRequesterGateway(
    args: UpdateRequesterGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRequesterGatewayCommandOutput>;
  updateRequesterGateway(
    args: UpdateRequesterGatewayCommandInput,
    cb: (err: any, data?: UpdateRequesterGatewayCommandOutput) => void
  ): void;
  updateRequesterGateway(
    args: UpdateRequesterGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRequesterGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResponderGatewayCommand}
   */
  updateResponderGateway(
    args: UpdateResponderGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResponderGatewayCommandOutput>;
  updateResponderGateway(
    args: UpdateResponderGatewayCommandInput,
    cb: (err: any, data?: UpdateResponderGatewayCommandOutput) => void
  ): void;
  updateResponderGateway(
    args: UpdateResponderGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResponderGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCertificateAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCertificateAssociationsCommandOutput}.
   */
  paginateListCertificateAssociations(
    args: ListCertificateAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCertificateAssociationsCommandOutput>;

  /**
   * @see {@link ListLinkRoutingRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLinkRoutingRulesCommandOutput}.
   */
  paginateListLinkRoutingRules(
    args: ListLinkRoutingRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLinkRoutingRulesCommandOutput>;

  /**
   * @see {@link ListLinksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLinksCommandOutput}.
   */
  paginateListLinks(
    args: ListLinksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLinksCommandOutput>;

  /**
   * @see {@link ListRequesterGatewaysCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRequesterGatewaysCommandOutput}.
   */
  paginateListRequesterGateways(
    args?: ListRequesterGatewaysCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRequesterGatewaysCommandOutput>;

  /**
   * @see {@link ListResponderGatewaysCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResponderGatewaysCommandOutput}.
   */
  paginateListResponderGateways(
    args?: ListResponderGatewaysCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResponderGatewaysCommandOutput>;

  /**
   * @see {@link GetCertificateAssociationCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilCertificateAssociated(
    args: GetCertificateAssociationCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RTBFabric>, "client">
  ): Promise<WaiterResult<GetCertificateAssociationCommandOutput>>;

  /**
   * @see {@link GetCertificateAssociationCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilCertificateDisassociated(
    args: GetCertificateAssociationCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RTBFabric>, "client">
  ): Promise<WaiterResult<GetCertificateAssociationCommandOutput | ResourceNotFoundException>>;

  /**
   * @see {@link GetInboundExternalLinkCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilInboundExternalLinkActive(
    args: GetInboundExternalLinkCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RTBFabric>, "client">
  ): Promise<WaiterResult<GetInboundExternalLinkCommandOutput>>;

  /**
   * @see {@link GetInboundExternalLinkCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilInboundExternalLinkDeleted(
    args: GetInboundExternalLinkCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RTBFabric>, "client">
  ): Promise<WaiterResult<GetInboundExternalLinkCommandOutput>>;

  /**
   * @see {@link GetLinkCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilLinkAccepted(
    args: GetLinkCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RTBFabric>, "client">
  ): Promise<WaiterResult<GetLinkCommandOutput>>;

  /**
   * @see {@link GetLinkCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilLinkActive(
    args: GetLinkCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RTBFabric>, "client">
  ): Promise<WaiterResult<GetLinkCommandOutput>>;

  /**
   * @see {@link GetLinkCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilLinkDeleted(
    args: GetLinkCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RTBFabric>, "client">
  ): Promise<WaiterResult<GetLinkCommandOutput>>;

  /**
   * @see {@link GetLinkRoutingRuleCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilLinkRoutingRuleActive(
    args: GetLinkRoutingRuleCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RTBFabric>, "client">
  ): Promise<WaiterResult<GetLinkRoutingRuleCommandOutput>>;

  /**
   * @see {@link GetLinkRoutingRuleCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilLinkRoutingRuleDeleted(
    args: GetLinkRoutingRuleCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RTBFabric>, "client">
  ): Promise<WaiterResult<GetLinkRoutingRuleCommandOutput | ResourceNotFoundException>>;

  /**
   * @see {@link GetOutboundExternalLinkCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilOutboundExternalLinkActive(
    args: GetOutboundExternalLinkCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RTBFabric>, "client">
  ): Promise<WaiterResult<GetOutboundExternalLinkCommandOutput>>;

  /**
   * @see {@link GetOutboundExternalLinkCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilOutboundExternalLinkDeleted(
    args: GetOutboundExternalLinkCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RTBFabric>, "client">
  ): Promise<WaiterResult<GetOutboundExternalLinkCommandOutput>>;

  /**
   * @see {@link GetRequesterGatewayCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilRequesterGatewayActive(
    args: GetRequesterGatewayCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RTBFabric>, "client">
  ): Promise<WaiterResult<GetRequesterGatewayCommandOutput>>;

  /**
   * @see {@link GetRequesterGatewayCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilRequesterGatewayDeleted(
    args: GetRequesterGatewayCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RTBFabric>, "client">
  ): Promise<WaiterResult<GetRequesterGatewayCommandOutput | ResourceNotFoundException>>;

  /**
   * @see {@link GetResponderGatewayCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilResponderGatewayActive(
    args: GetResponderGatewayCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RTBFabric>, "client">
  ): Promise<WaiterResult<GetResponderGatewayCommandOutput>>;

  /**
   * @see {@link GetResponderGatewayCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilResponderGatewayDeleted(
    args: GetResponderGatewayCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<RTBFabric>, "client">
  ): Promise<WaiterResult<GetResponderGatewayCommandOutput | ResourceNotFoundException>>;
}

/**
 * <p>Amazon Web Services RTB Fabric provides secure, low-latency infrastructure for connecting real-time bidding (RTB) applications. Rather than hosting applications directly, RTB Fabric acts as the connecting fabric that enables your applications to communicate efficiently over private networks instead of the public internet. You maintain complete control over your applications, data, and bidding decisions, while RTB Fabric provides the underlying infrastructure for secure, reliable connectivity.</p> <p>You can use these APIs to complete RTB Fabric tasks, such as setting up audit log ingestions or viewing user access. For more information about RTB Fabric, including the required permissions to use the service, see the <a href="https://docs.aws.amazon.com/rtb-fabric/latest/userguide/">Amazon Web Services RTB Fabric User Guide</a>.</p>
 * @public
 */
export class RTBFabric extends RTBFabricClient implements RTBFabric {}
createAggregatedClient(commands, RTBFabric, { paginators, waiters });
