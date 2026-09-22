// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { CloudWatchOmniClient } from "./CloudWatchOmniClient";
import {
  type CreateAccessGrantCommandInput,
  type CreateAccessGrantCommandOutput,
  CreateAccessGrantCommand,
} from "./commands/CreateAccessGrantCommand";
import {
  type CreateAccessProfileCommandInput,
  type CreateAccessProfileCommandOutput,
  CreateAccessProfileCommand,
} from "./commands/CreateAccessProfileCommand";
import {
  type CreateAlertCommandInput,
  type CreateAlertCommandOutput,
  CreateAlertCommand,
} from "./commands/CreateAlertCommand";
import {
  type CreateDomainAccessGrantForOrganizationCommandInput,
  type CreateDomainAccessGrantForOrganizationCommandOutput,
  CreateDomainAccessGrantForOrganizationCommand,
} from "./commands/CreateDomainAccessGrantForOrganizationCommand";
import {
  type CreateDomainCommandInput,
  type CreateDomainCommandOutput,
  CreateDomainCommand,
} from "./commands/CreateDomainCommand";
import {
  type CreateDomainForOrganizationCommandInput,
  type CreateDomainForOrganizationCommandOutput,
  CreateDomainForOrganizationCommand,
} from "./commands/CreateDomainForOrganizationCommand";
import {
  type CreateIntegrationCommandInput,
  type CreateIntegrationCommandOutput,
  CreateIntegrationCommand,
} from "./commands/CreateIntegrationCommand";
import {
  type CreateOmniDashboardCommandInput,
  type CreateOmniDashboardCommandOutput,
  CreateOmniDashboardCommand,
} from "./commands/CreateOmniDashboardCommand";
import {
  type CreateOneTimeDeepLinkCodeCommandInput,
  type CreateOneTimeDeepLinkCodeCommandOutput,
  CreateOneTimeDeepLinkCodeCommand,
} from "./commands/CreateOneTimeDeepLinkCodeCommand";
import {
  type CreateSpaceCommandInput,
  type CreateSpaceCommandOutput,
  CreateSpaceCommand,
} from "./commands/CreateSpaceCommand";
import {
  type CreateViewCommandInput,
  type CreateViewCommandOutput,
  CreateViewCommand,
} from "./commands/CreateViewCommand";
import {
  type DeleteAccessGrantCommandInput,
  type DeleteAccessGrantCommandOutput,
  DeleteAccessGrantCommand,
} from "./commands/DeleteAccessGrantCommand";
import {
  type DeleteAccessProfileCommandInput,
  type DeleteAccessProfileCommandOutput,
  DeleteAccessProfileCommand,
} from "./commands/DeleteAccessProfileCommand";
import {
  type DeleteAlertCommandInput,
  type DeleteAlertCommandOutput,
  DeleteAlertCommand,
} from "./commands/DeleteAlertCommand";
import {
  type DeleteDomainAccessGrantForOrganizationCommandInput,
  type DeleteDomainAccessGrantForOrganizationCommandOutput,
  DeleteDomainAccessGrantForOrganizationCommand,
} from "./commands/DeleteDomainAccessGrantForOrganizationCommand";
import {
  type DeleteDomainCommandInput,
  type DeleteDomainCommandOutput,
  DeleteDomainCommand,
} from "./commands/DeleteDomainCommand";
import {
  type DeleteDomainForOrganizationCommandInput,
  type DeleteDomainForOrganizationCommandOutput,
  DeleteDomainForOrganizationCommand,
} from "./commands/DeleteDomainForOrganizationCommand";
import {
  type DeleteIntegrationCommandInput,
  type DeleteIntegrationCommandOutput,
  DeleteIntegrationCommand,
} from "./commands/DeleteIntegrationCommand";
import {
  type DeleteOmniDashboardCommandInput,
  type DeleteOmniDashboardCommandOutput,
  DeleteOmniDashboardCommand,
} from "./commands/DeleteOmniDashboardCommand";
import {
  type DeleteSpaceCommandInput,
  type DeleteSpaceCommandOutput,
  DeleteSpaceCommand,
} from "./commands/DeleteSpaceCommand";
import {
  type DeleteViewCommandInput,
  type DeleteViewCommandOutput,
  DeleteViewCommand,
} from "./commands/DeleteViewCommand";
import {
  type GetAccessGrantCommandInput,
  type GetAccessGrantCommandOutput,
  GetAccessGrantCommand,
} from "./commands/GetAccessGrantCommand";
import {
  type GetAccessProfileCommandInput,
  type GetAccessProfileCommandOutput,
  GetAccessProfileCommand,
} from "./commands/GetAccessProfileCommand";
import { type GetAlertCommandInput, type GetAlertCommandOutput, GetAlertCommand } from "./commands/GetAlertCommand";
import {
  type GetContextGraphCommandInput,
  type GetContextGraphCommandOutput,
  GetContextGraphCommand,
} from "./commands/GetContextGraphCommand";
import {
  type GetDomainAccessGrantForOrganizationCommandInput,
  type GetDomainAccessGrantForOrganizationCommandOutput,
  GetDomainAccessGrantForOrganizationCommand,
} from "./commands/GetDomainAccessGrantForOrganizationCommand";
import { type GetDomainCommandInput, type GetDomainCommandOutput, GetDomainCommand } from "./commands/GetDomainCommand";
import {
  type GetDomainForOrganizationCommandInput,
  type GetDomainForOrganizationCommandOutput,
  GetDomainForOrganizationCommand,
} from "./commands/GetDomainForOrganizationCommand";
import {
  type GetIntegrationCommandInput,
  type GetIntegrationCommandOutput,
  GetIntegrationCommand,
} from "./commands/GetIntegrationCommand";
import {
  type GetIntelligenceConfigurationCommandInput,
  type GetIntelligenceConfigurationCommandOutput,
  GetIntelligenceConfigurationCommand,
} from "./commands/GetIntelligenceConfigurationCommand";
import {
  type GetOmniDashboardCommandInput,
  type GetOmniDashboardCommandOutput,
  GetOmniDashboardCommand,
} from "./commands/GetOmniDashboardCommand";
import { type GetSpaceCommandInput, type GetSpaceCommandOutput, GetSpaceCommand } from "./commands/GetSpaceCommand";
import {
  type GetSpaceCredentialsForOrganizationCommandInput,
  type GetSpaceCredentialsForOrganizationCommandOutput,
  GetSpaceCredentialsForOrganizationCommand,
} from "./commands/GetSpaceCredentialsForOrganizationCommand";
import {
  type GetTelemetryQueryResultsCommandInput,
  type GetTelemetryQueryResultsCommandOutput,
  GetTelemetryQueryResultsCommand,
} from "./commands/GetTelemetryQueryResultsCommand";
import { type GetViewCommandInput, type GetViewCommandOutput, GetViewCommand } from "./commands/GetViewCommand";
import {
  type ListAccessGrantsCommandInput,
  type ListAccessGrantsCommandOutput,
  ListAccessGrantsCommand,
} from "./commands/ListAccessGrantsCommand";
import {
  type ListAccessProfilesCommandInput,
  type ListAccessProfilesCommandOutput,
  ListAccessProfilesCommand,
} from "./commands/ListAccessProfilesCommand";
import {
  type ListAlertsCommandInput,
  type ListAlertsCommandOutput,
  ListAlertsCommand,
} from "./commands/ListAlertsCommand";
import {
  type ListDomainAccessGrantsForOrganizationCommandInput,
  type ListDomainAccessGrantsForOrganizationCommandOutput,
  ListDomainAccessGrantsForOrganizationCommand,
} from "./commands/ListDomainAccessGrantsForOrganizationCommand";
import {
  type ListDomainsCommandInput,
  type ListDomainsCommandOutput,
  ListDomainsCommand,
} from "./commands/ListDomainsCommand";
import {
  type ListIntegrationsCommandInput,
  type ListIntegrationsCommandOutput,
  ListIntegrationsCommand,
} from "./commands/ListIntegrationsCommand";
import {
  type ListOmniDashboardsCommandInput,
  type ListOmniDashboardsCommandOutput,
  ListOmniDashboardsCommand,
} from "./commands/ListOmniDashboardsCommand";
import {
  type ListSpacesCommandInput,
  type ListSpacesCommandOutput,
  ListSpacesCommand,
} from "./commands/ListSpacesCommand";
import {
  type ListSpacesForOrganizationCommandInput,
  type ListSpacesForOrganizationCommandOutput,
  ListSpacesForOrganizationCommand,
} from "./commands/ListSpacesForOrganizationCommand";
import {
  type ListTelemetryFieldsCommandInput,
  type ListTelemetryFieldsCommandOutput,
  ListTelemetryFieldsCommand,
} from "./commands/ListTelemetryFieldsCommand";
import {
  type ListTelemetryQuerySessionsCommandInput,
  type ListTelemetryQuerySessionsCommandOutput,
  ListTelemetryQuerySessionsCommand,
} from "./commands/ListTelemetryQuerySessionsCommand";
import { type ListViewsCommandInput, type ListViewsCommandOutput, ListViewsCommand } from "./commands/ListViewsCommand";
import {
  type PutIntelligenceConfigurationCommandInput,
  type PutIntelligenceConfigurationCommandOutput,
  PutIntelligenceConfigurationCommand,
} from "./commands/PutIntelligenceConfigurationCommand";
import {
  type SearchPrincipalsCommandInput,
  type SearchPrincipalsCommandOutput,
  SearchPrincipalsCommand,
} from "./commands/SearchPrincipalsCommand";
import {
  type StartTelemetryQueryCommandInput,
  type StartTelemetryQueryCommandOutput,
  StartTelemetryQueryCommand,
} from "./commands/StartTelemetryQueryCommand";
import {
  type StartTelemetryQuerySessionCommandInput,
  type StartTelemetryQuerySessionCommandOutput,
  StartTelemetryQuerySessionCommand,
} from "./commands/StartTelemetryQuerySessionCommand";
import {
  type StopTelemetryQueryCommandInput,
  type StopTelemetryQueryCommandOutput,
  StopTelemetryQueryCommand,
} from "./commands/StopTelemetryQueryCommand";
import {
  type StopTelemetryQuerySessionCommandInput,
  type StopTelemetryQuerySessionCommandOutput,
  StopTelemetryQuerySessionCommand,
} from "./commands/StopTelemetryQuerySessionCommand";
import {
  type UpdateAccessProfileCommandInput,
  type UpdateAccessProfileCommandOutput,
  UpdateAccessProfileCommand,
} from "./commands/UpdateAccessProfileCommand";
import {
  type UpdateAlertCommandInput,
  type UpdateAlertCommandOutput,
  UpdateAlertCommand,
} from "./commands/UpdateAlertCommand";
import {
  type UpdateDomainCommandInput,
  type UpdateDomainCommandOutput,
  UpdateDomainCommand,
} from "./commands/UpdateDomainCommand";
import {
  type UpdateDomainForOrganizationCommandInput,
  type UpdateDomainForOrganizationCommandOutput,
  UpdateDomainForOrganizationCommand,
} from "./commands/UpdateDomainForOrganizationCommand";
import {
  type UpdateIntegrationCommandInput,
  type UpdateIntegrationCommandOutput,
  UpdateIntegrationCommand,
} from "./commands/UpdateIntegrationCommand";
import {
  type UpdateOmniDashboardCommandInput,
  type UpdateOmniDashboardCommandOutput,
  UpdateOmniDashboardCommand,
} from "./commands/UpdateOmniDashboardCommand";
import {
  type UpdateSpaceCommandInput,
  type UpdateSpaceCommandOutput,
  UpdateSpaceCommand,
} from "./commands/UpdateSpaceCommand";
import {
  type UpdateViewCommandInput,
  type UpdateViewCommandOutput,
  UpdateViewCommand,
} from "./commands/UpdateViewCommand";
import { paginateGetContextGraph } from "./pagination/GetContextGraphPaginator";
import { paginateGetTelemetryQueryResults } from "./pagination/GetTelemetryQueryResultsPaginator";
import { paginateListAccessGrants } from "./pagination/ListAccessGrantsPaginator";
import { paginateListAccessProfiles } from "./pagination/ListAccessProfilesPaginator";
import { paginateListAlerts } from "./pagination/ListAlertsPaginator";
import {
  paginateListDomainAccessGrantsForOrganization,
} from "./pagination/ListDomainAccessGrantsForOrganizationPaginator";
import { paginateListDomains } from "./pagination/ListDomainsPaginator";
import { paginateListIntegrations } from "./pagination/ListIntegrationsPaginator";
import { paginateListOmniDashboards } from "./pagination/ListOmniDashboardsPaginator";
import { paginateListSpacesForOrganization } from "./pagination/ListSpacesForOrganizationPaginator";
import { paginateListSpaces } from "./pagination/ListSpacesPaginator";
import { paginateListTelemetryFields } from "./pagination/ListTelemetryFieldsPaginator";
import { paginateListTelemetryQuerySessions } from "./pagination/ListTelemetryQuerySessionsPaginator";
import { paginateListViews } from "./pagination/ListViewsPaginator";
import { paginateSearchPrincipals } from "./pagination/SearchPrincipalsPaginator";

const commands = {
  CreateAccessGrantCommand,
  CreateAccessProfileCommand,
  CreateAlertCommand,
  CreateDomainCommand,
  CreateDomainAccessGrantForOrganizationCommand,
  CreateDomainForOrganizationCommand,
  CreateIntegrationCommand,
  CreateOmniDashboardCommand,
  CreateOneTimeDeepLinkCodeCommand,
  CreateSpaceCommand,
  CreateViewCommand,
  DeleteAccessGrantCommand,
  DeleteAccessProfileCommand,
  DeleteAlertCommand,
  DeleteDomainCommand,
  DeleteDomainAccessGrantForOrganizationCommand,
  DeleteDomainForOrganizationCommand,
  DeleteIntegrationCommand,
  DeleteOmniDashboardCommand,
  DeleteSpaceCommand,
  DeleteViewCommand,
  GetAccessGrantCommand,
  GetAccessProfileCommand,
  GetAlertCommand,
  GetContextGraphCommand,
  GetDomainCommand,
  GetDomainAccessGrantForOrganizationCommand,
  GetDomainForOrganizationCommand,
  GetIntegrationCommand,
  GetIntelligenceConfigurationCommand,
  GetOmniDashboardCommand,
  GetSpaceCommand,
  GetSpaceCredentialsForOrganizationCommand,
  GetTelemetryQueryResultsCommand,
  GetViewCommand,
  ListAccessGrantsCommand,
  ListAccessProfilesCommand,
  ListAlertsCommand,
  ListDomainAccessGrantsForOrganizationCommand,
  ListDomainsCommand,
  ListIntegrationsCommand,
  ListOmniDashboardsCommand,
  ListSpacesCommand,
  ListSpacesForOrganizationCommand,
  ListTelemetryFieldsCommand,
  ListTelemetryQuerySessionsCommand,
  ListViewsCommand,
  PutIntelligenceConfigurationCommand,
  SearchPrincipalsCommand,
  StartTelemetryQueryCommand,
  StartTelemetryQuerySessionCommand,
  StopTelemetryQueryCommand,
  StopTelemetryQuerySessionCommand,
  UpdateAccessProfileCommand,
  UpdateAlertCommand,
  UpdateDomainCommand,
  UpdateDomainForOrganizationCommand,
  UpdateIntegrationCommand,
  UpdateOmniDashboardCommand,
  UpdateSpaceCommand,
  UpdateViewCommand,
};
const paginators = {
  paginateGetContextGraph,
  paginateGetTelemetryQueryResults,
  paginateListAccessGrants,
  paginateListAccessProfiles,
  paginateListAlerts,
  paginateListDomainAccessGrantsForOrganization,
  paginateListDomains,
  paginateListIntegrations,
  paginateListOmniDashboards,
  paginateListSpaces,
  paginateListSpacesForOrganization,
  paginateListTelemetryFields,
  paginateListTelemetryQuerySessions,
  paginateListViews,
  paginateSearchPrincipals,
};

/**
 * @public
 */
export interface CloudWatchOmniRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface CloudWatchOmni {
  /**
   * @see {@link CreateAccessGrantCommand}
   */
  createAccessGrant(
    args: CreateAccessGrantCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<CreateAccessGrantCommandOutput>;
  createAccessGrant(
    args: CreateAccessGrantCommandInput,
    cb: (err: any, data?: CreateAccessGrantCommandOutput) => void
  ): void;
  createAccessGrant(
    args: CreateAccessGrantCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: CreateAccessGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccessProfileCommand}
   */
  createAccessProfile(
    args: CreateAccessProfileCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<CreateAccessProfileCommandOutput>;
  createAccessProfile(
    args: CreateAccessProfileCommandInput,
    cb: (err: any, data?: CreateAccessProfileCommandOutput) => void
  ): void;
  createAccessProfile(
    args: CreateAccessProfileCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: CreateAccessProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAlertCommand}
   */
  createAlert(
    args: CreateAlertCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<CreateAlertCommandOutput>;
  createAlert(
    args: CreateAlertCommandInput,
    cb: (err: any, data?: CreateAlertCommandOutput) => void
  ): void;
  createAlert(
    args: CreateAlertCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: CreateAlertCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainCommand}
   */
  createDomain(
    args: CreateDomainCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<CreateDomainCommandOutput>;
  createDomain(
    args: CreateDomainCommandInput,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;
  createDomain(
    args: CreateDomainCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainAccessGrantForOrganizationCommand}
   */
  createDomainAccessGrantForOrganization(
    args: CreateDomainAccessGrantForOrganizationCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<CreateDomainAccessGrantForOrganizationCommandOutput>;
  createDomainAccessGrantForOrganization(
    args: CreateDomainAccessGrantForOrganizationCommandInput,
    cb: (err: any, data?: CreateDomainAccessGrantForOrganizationCommandOutput) => void
  ): void;
  createDomainAccessGrantForOrganization(
    args: CreateDomainAccessGrantForOrganizationCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: CreateDomainAccessGrantForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainForOrganizationCommand}
   */
  createDomainForOrganization(
    args: CreateDomainForOrganizationCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<CreateDomainForOrganizationCommandOutput>;
  createDomainForOrganization(
    args: CreateDomainForOrganizationCommandInput,
    cb: (err: any, data?: CreateDomainForOrganizationCommandOutput) => void
  ): void;
  createDomainForOrganization(
    args: CreateDomainForOrganizationCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: CreateDomainForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntegrationCommand}
   */
  createIntegration(
    args: CreateIntegrationCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<CreateIntegrationCommandOutput>;
  createIntegration(
    args: CreateIntegrationCommandInput,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;
  createIntegration(
    args: CreateIntegrationCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOmniDashboardCommand}
   */
  createOmniDashboard(
    args: CreateOmniDashboardCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<CreateOmniDashboardCommandOutput>;
  createOmniDashboard(
    args: CreateOmniDashboardCommandInput,
    cb: (err: any, data?: CreateOmniDashboardCommandOutput) => void
  ): void;
  createOmniDashboard(
    args: CreateOmniDashboardCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: CreateOmniDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOneTimeDeepLinkCodeCommand}
   */
  createOneTimeDeepLinkCode(
    args: CreateOneTimeDeepLinkCodeCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<CreateOneTimeDeepLinkCodeCommandOutput>;
  createOneTimeDeepLinkCode(
    args: CreateOneTimeDeepLinkCodeCommandInput,
    cb: (err: any, data?: CreateOneTimeDeepLinkCodeCommandOutput) => void
  ): void;
  createOneTimeDeepLinkCode(
    args: CreateOneTimeDeepLinkCodeCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: CreateOneTimeDeepLinkCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSpaceCommand}
   */
  createSpace(
    args: CreateSpaceCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<CreateSpaceCommandOutput>;
  createSpace(
    args: CreateSpaceCommandInput,
    cb: (err: any, data?: CreateSpaceCommandOutput) => void
  ): void;
  createSpace(
    args: CreateSpaceCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: CreateSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateViewCommand}
   */
  createView(
    args: CreateViewCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<CreateViewCommandOutput>;
  createView(
    args: CreateViewCommandInput,
    cb: (err: any, data?: CreateViewCommandOutput) => void
  ): void;
  createView(
    args: CreateViewCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: CreateViewCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessGrantCommand}
   */
  deleteAccessGrant(
    args: DeleteAccessGrantCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<DeleteAccessGrantCommandOutput>;
  deleteAccessGrant(
    args: DeleteAccessGrantCommandInput,
    cb: (err: any, data?: DeleteAccessGrantCommandOutput) => void
  ): void;
  deleteAccessGrant(
    args: DeleteAccessGrantCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: DeleteAccessGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessProfileCommand}
   */
  deleteAccessProfile(
    args: DeleteAccessProfileCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<DeleteAccessProfileCommandOutput>;
  deleteAccessProfile(
    args: DeleteAccessProfileCommandInput,
    cb: (err: any, data?: DeleteAccessProfileCommandOutput) => void
  ): void;
  deleteAccessProfile(
    args: DeleteAccessProfileCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: DeleteAccessProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAlertCommand}
   */
  deleteAlert(
    args: DeleteAlertCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<DeleteAlertCommandOutput>;
  deleteAlert(
    args: DeleteAlertCommandInput,
    cb: (err: any, data?: DeleteAlertCommandOutput) => void
  ): void;
  deleteAlert(
    args: DeleteAlertCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: DeleteAlertCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainCommand}
   */
  deleteDomain(
    args: DeleteDomainCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<DeleteDomainCommandOutput>;
  deleteDomain(
    args: DeleteDomainCommandInput,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;
  deleteDomain(
    args: DeleteDomainCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainAccessGrantForOrganizationCommand}
   */
  deleteDomainAccessGrantForOrganization(
    args: DeleteDomainAccessGrantForOrganizationCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<DeleteDomainAccessGrantForOrganizationCommandOutput>;
  deleteDomainAccessGrantForOrganization(
    args: DeleteDomainAccessGrantForOrganizationCommandInput,
    cb: (err: any, data?: DeleteDomainAccessGrantForOrganizationCommandOutput) => void
  ): void;
  deleteDomainAccessGrantForOrganization(
    args: DeleteDomainAccessGrantForOrganizationCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: DeleteDomainAccessGrantForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainForOrganizationCommand}
   */
  deleteDomainForOrganization(
    args: DeleteDomainForOrganizationCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<DeleteDomainForOrganizationCommandOutput>;
  deleteDomainForOrganization(
    args: DeleteDomainForOrganizationCommandInput,
    cb: (err: any, data?: DeleteDomainForOrganizationCommandOutput) => void
  ): void;
  deleteDomainForOrganization(
    args: DeleteDomainForOrganizationCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: DeleteDomainForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<DeleteIntegrationCommandOutput>;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOmniDashboardCommand}
   */
  deleteOmniDashboard(
    args: DeleteOmniDashboardCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<DeleteOmniDashboardCommandOutput>;
  deleteOmniDashboard(
    args: DeleteOmniDashboardCommandInput,
    cb: (err: any, data?: DeleteOmniDashboardCommandOutput) => void
  ): void;
  deleteOmniDashboard(
    args: DeleteOmniDashboardCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: DeleteOmniDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSpaceCommand}
   */
  deleteSpace(
    args: DeleteSpaceCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<DeleteSpaceCommandOutput>;
  deleteSpace(
    args: DeleteSpaceCommandInput,
    cb: (err: any, data?: DeleteSpaceCommandOutput) => void
  ): void;
  deleteSpace(
    args: DeleteSpaceCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: DeleteSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteViewCommand}
   */
  deleteView(
    args: DeleteViewCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<DeleteViewCommandOutput>;
  deleteView(
    args: DeleteViewCommandInput,
    cb: (err: any, data?: DeleteViewCommandOutput) => void
  ): void;
  deleteView(
    args: DeleteViewCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: DeleteViewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessGrantCommand}
   */
  getAccessGrant(
    args: GetAccessGrantCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<GetAccessGrantCommandOutput>;
  getAccessGrant(
    args: GetAccessGrantCommandInput,
    cb: (err: any, data?: GetAccessGrantCommandOutput) => void
  ): void;
  getAccessGrant(
    args: GetAccessGrantCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: GetAccessGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessProfileCommand}
   */
  getAccessProfile(
    args: GetAccessProfileCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<GetAccessProfileCommandOutput>;
  getAccessProfile(
    args: GetAccessProfileCommandInput,
    cb: (err: any, data?: GetAccessProfileCommandOutput) => void
  ): void;
  getAccessProfile(
    args: GetAccessProfileCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: GetAccessProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAlertCommand}
   */
  getAlert(
    args: GetAlertCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<GetAlertCommandOutput>;
  getAlert(
    args: GetAlertCommandInput,
    cb: (err: any, data?: GetAlertCommandOutput) => void
  ): void;
  getAlert(
    args: GetAlertCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: GetAlertCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContextGraphCommand}
   */
  getContextGraph(
    args: GetContextGraphCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<GetContextGraphCommandOutput>;
  getContextGraph(
    args: GetContextGraphCommandInput,
    cb: (err: any, data?: GetContextGraphCommandOutput) => void
  ): void;
  getContextGraph(
    args: GetContextGraphCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: GetContextGraphCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainCommand}
   */
  getDomain(
    args: GetDomainCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<GetDomainCommandOutput>;
  getDomain(
    args: GetDomainCommandInput,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;
  getDomain(
    args: GetDomainCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainAccessGrantForOrganizationCommand}
   */
  getDomainAccessGrantForOrganization(
    args: GetDomainAccessGrantForOrganizationCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<GetDomainAccessGrantForOrganizationCommandOutput>;
  getDomainAccessGrantForOrganization(
    args: GetDomainAccessGrantForOrganizationCommandInput,
    cb: (err: any, data?: GetDomainAccessGrantForOrganizationCommandOutput) => void
  ): void;
  getDomainAccessGrantForOrganization(
    args: GetDomainAccessGrantForOrganizationCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: GetDomainAccessGrantForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainForOrganizationCommand}
   */
  getDomainForOrganization(
    args: GetDomainForOrganizationCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<GetDomainForOrganizationCommandOutput>;
  getDomainForOrganization(
    args: GetDomainForOrganizationCommandInput,
    cb: (err: any, data?: GetDomainForOrganizationCommandOutput) => void
  ): void;
  getDomainForOrganization(
    args: GetDomainForOrganizationCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: GetDomainForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntegrationCommand}
   */
  getIntegration(
    args: GetIntegrationCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<GetIntegrationCommandOutput>;
  getIntegration(
    args: GetIntegrationCommandInput,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;
  getIntegration(
    args: GetIntegrationCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntelligenceConfigurationCommand}
   */
  getIntelligenceConfiguration(): Promise<GetIntelligenceConfigurationCommandOutput>;
  getIntelligenceConfiguration(
    args: GetIntelligenceConfigurationCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<GetIntelligenceConfigurationCommandOutput>;
  getIntelligenceConfiguration(
    args: GetIntelligenceConfigurationCommandInput,
    cb: (err: any, data?: GetIntelligenceConfigurationCommandOutput) => void
  ): void;
  getIntelligenceConfiguration(
    args: GetIntelligenceConfigurationCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: GetIntelligenceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOmniDashboardCommand}
   */
  getOmniDashboard(
    args: GetOmniDashboardCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<GetOmniDashboardCommandOutput>;
  getOmniDashboard(
    args: GetOmniDashboardCommandInput,
    cb: (err: any, data?: GetOmniDashboardCommandOutput) => void
  ): void;
  getOmniDashboard(
    args: GetOmniDashboardCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: GetOmniDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSpaceCommand}
   */
  getSpace(
    args: GetSpaceCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<GetSpaceCommandOutput>;
  getSpace(
    args: GetSpaceCommandInput,
    cb: (err: any, data?: GetSpaceCommandOutput) => void
  ): void;
  getSpace(
    args: GetSpaceCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: GetSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSpaceCredentialsForOrganizationCommand}
   */
  getSpaceCredentialsForOrganization(
    args: GetSpaceCredentialsForOrganizationCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<GetSpaceCredentialsForOrganizationCommandOutput>;
  getSpaceCredentialsForOrganization(
    args: GetSpaceCredentialsForOrganizationCommandInput,
    cb: (err: any, data?: GetSpaceCredentialsForOrganizationCommandOutput) => void
  ): void;
  getSpaceCredentialsForOrganization(
    args: GetSpaceCredentialsForOrganizationCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: GetSpaceCredentialsForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTelemetryQueryResultsCommand}
   */
  getTelemetryQueryResults(
    args: GetTelemetryQueryResultsCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<GetTelemetryQueryResultsCommandOutput>;
  getTelemetryQueryResults(
    args: GetTelemetryQueryResultsCommandInput,
    cb: (err: any, data?: GetTelemetryQueryResultsCommandOutput) => void
  ): void;
  getTelemetryQueryResults(
    args: GetTelemetryQueryResultsCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: GetTelemetryQueryResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetViewCommand}
   */
  getView(
    args: GetViewCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<GetViewCommandOutput>;
  getView(
    args: GetViewCommandInput,
    cb: (err: any, data?: GetViewCommandOutput) => void
  ): void;
  getView(
    args: GetViewCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: GetViewCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessGrantsCommand}
   */
  listAccessGrants(): Promise<ListAccessGrantsCommandOutput>;
  listAccessGrants(
    args: ListAccessGrantsCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<ListAccessGrantsCommandOutput>;
  listAccessGrants(
    args: ListAccessGrantsCommandInput,
    cb: (err: any, data?: ListAccessGrantsCommandOutput) => void
  ): void;
  listAccessGrants(
    args: ListAccessGrantsCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: ListAccessGrantsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessProfilesCommand}
   */
  listAccessProfiles(
    args: ListAccessProfilesCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<ListAccessProfilesCommandOutput>;
  listAccessProfiles(
    args: ListAccessProfilesCommandInput,
    cb: (err: any, data?: ListAccessProfilesCommandOutput) => void
  ): void;
  listAccessProfiles(
    args: ListAccessProfilesCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: ListAccessProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAlertsCommand}
   */
  listAlerts(
    args: ListAlertsCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<ListAlertsCommandOutput>;
  listAlerts(
    args: ListAlertsCommandInput,
    cb: (err: any, data?: ListAlertsCommandOutput) => void
  ): void;
  listAlerts(
    args: ListAlertsCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: ListAlertsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainAccessGrantsForOrganizationCommand}
   */
  listDomainAccessGrantsForOrganization(): Promise<ListDomainAccessGrantsForOrganizationCommandOutput>;
  listDomainAccessGrantsForOrganization(
    args: ListDomainAccessGrantsForOrganizationCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<ListDomainAccessGrantsForOrganizationCommandOutput>;
  listDomainAccessGrantsForOrganization(
    args: ListDomainAccessGrantsForOrganizationCommandInput,
    cb: (err: any, data?: ListDomainAccessGrantsForOrganizationCommandOutput) => void
  ): void;
  listDomainAccessGrantsForOrganization(
    args: ListDomainAccessGrantsForOrganizationCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: ListDomainAccessGrantsForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainsCommand}
   */
  listDomains(): Promise<ListDomainsCommandOutput>;
  listDomains(
    args: ListDomainsCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<ListDomainsCommandOutput>;
  listDomains(
    args: ListDomainsCommandInput,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;
  listDomains(
    args: ListDomainsCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntegrationsCommand}
   */
  listIntegrations(): Promise<ListIntegrationsCommandOutput>;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<ListIntegrationsCommandOutput>;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOmniDashboardsCommand}
   */
  listOmniDashboards(
    args: ListOmniDashboardsCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<ListOmniDashboardsCommandOutput>;
  listOmniDashboards(
    args: ListOmniDashboardsCommandInput,
    cb: (err: any, data?: ListOmniDashboardsCommandOutput) => void
  ): void;
  listOmniDashboards(
    args: ListOmniDashboardsCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: ListOmniDashboardsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSpacesCommand}
   */
  listSpaces(): Promise<ListSpacesCommandOutput>;
  listSpaces(
    args: ListSpacesCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<ListSpacesCommandOutput>;
  listSpaces(
    args: ListSpacesCommandInput,
    cb: (err: any, data?: ListSpacesCommandOutput) => void
  ): void;
  listSpaces(
    args: ListSpacesCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: ListSpacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSpacesForOrganizationCommand}
   */
  listSpacesForOrganization(): Promise<ListSpacesForOrganizationCommandOutput>;
  listSpacesForOrganization(
    args: ListSpacesForOrganizationCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<ListSpacesForOrganizationCommandOutput>;
  listSpacesForOrganization(
    args: ListSpacesForOrganizationCommandInput,
    cb: (err: any, data?: ListSpacesForOrganizationCommandOutput) => void
  ): void;
  listSpacesForOrganization(
    args: ListSpacesForOrganizationCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: ListSpacesForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTelemetryFieldsCommand}
   */
  listTelemetryFields(
    args: ListTelemetryFieldsCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<ListTelemetryFieldsCommandOutput>;
  listTelemetryFields(
    args: ListTelemetryFieldsCommandInput,
    cb: (err: any, data?: ListTelemetryFieldsCommandOutput) => void
  ): void;
  listTelemetryFields(
    args: ListTelemetryFieldsCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: ListTelemetryFieldsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTelemetryQuerySessionsCommand}
   */
  listTelemetryQuerySessions(): Promise<ListTelemetryQuerySessionsCommandOutput>;
  listTelemetryQuerySessions(
    args: ListTelemetryQuerySessionsCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<ListTelemetryQuerySessionsCommandOutput>;
  listTelemetryQuerySessions(
    args: ListTelemetryQuerySessionsCommandInput,
    cb: (err: any, data?: ListTelemetryQuerySessionsCommandOutput) => void
  ): void;
  listTelemetryQuerySessions(
    args: ListTelemetryQuerySessionsCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: ListTelemetryQuerySessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListViewsCommand}
   */
  listViews(): Promise<ListViewsCommandOutput>;
  listViews(
    args: ListViewsCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<ListViewsCommandOutput>;
  listViews(
    args: ListViewsCommandInput,
    cb: (err: any, data?: ListViewsCommandOutput) => void
  ): void;
  listViews(
    args: ListViewsCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: ListViewsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutIntelligenceConfigurationCommand}
   */
  putIntelligenceConfiguration(): Promise<PutIntelligenceConfigurationCommandOutput>;
  putIntelligenceConfiguration(
    args: PutIntelligenceConfigurationCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<PutIntelligenceConfigurationCommandOutput>;
  putIntelligenceConfiguration(
    args: PutIntelligenceConfigurationCommandInput,
    cb: (err: any, data?: PutIntelligenceConfigurationCommandOutput) => void
  ): void;
  putIntelligenceConfiguration(
    args: PutIntelligenceConfigurationCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: PutIntelligenceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchPrincipalsCommand}
   */
  searchPrincipals(
    args: SearchPrincipalsCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<SearchPrincipalsCommandOutput>;
  searchPrincipals(
    args: SearchPrincipalsCommandInput,
    cb: (err: any, data?: SearchPrincipalsCommandOutput) => void
  ): void;
  searchPrincipals(
    args: SearchPrincipalsCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: SearchPrincipalsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTelemetryQueryCommand}
   */
  startTelemetryQuery(
    args: StartTelemetryQueryCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<StartTelemetryQueryCommandOutput>;
  startTelemetryQuery(
    args: StartTelemetryQueryCommandInput,
    cb: (err: any, data?: StartTelemetryQueryCommandOutput) => void
  ): void;
  startTelemetryQuery(
    args: StartTelemetryQueryCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: StartTelemetryQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTelemetryQuerySessionCommand}
   */
  startTelemetryQuerySession(): Promise<StartTelemetryQuerySessionCommandOutput>;
  startTelemetryQuerySession(
    args: StartTelemetryQuerySessionCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<StartTelemetryQuerySessionCommandOutput>;
  startTelemetryQuerySession(
    args: StartTelemetryQuerySessionCommandInput,
    cb: (err: any, data?: StartTelemetryQuerySessionCommandOutput) => void
  ): void;
  startTelemetryQuerySession(
    args: StartTelemetryQuerySessionCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: StartTelemetryQuerySessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopTelemetryQueryCommand}
   */
  stopTelemetryQuery(
    args: StopTelemetryQueryCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<StopTelemetryQueryCommandOutput>;
  stopTelemetryQuery(
    args: StopTelemetryQueryCommandInput,
    cb: (err: any, data?: StopTelemetryQueryCommandOutput) => void
  ): void;
  stopTelemetryQuery(
    args: StopTelemetryQueryCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: StopTelemetryQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link StopTelemetryQuerySessionCommand}
   */
  stopTelemetryQuerySession(
    args: StopTelemetryQuerySessionCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<StopTelemetryQuerySessionCommandOutput>;
  stopTelemetryQuerySession(
    args: StopTelemetryQuerySessionCommandInput,
    cb: (err: any, data?: StopTelemetryQuerySessionCommandOutput) => void
  ): void;
  stopTelemetryQuerySession(
    args: StopTelemetryQuerySessionCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: StopTelemetryQuerySessionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccessProfileCommand}
   */
  updateAccessProfile(
    args: UpdateAccessProfileCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<UpdateAccessProfileCommandOutput>;
  updateAccessProfile(
    args: UpdateAccessProfileCommandInput,
    cb: (err: any, data?: UpdateAccessProfileCommandOutput) => void
  ): void;
  updateAccessProfile(
    args: UpdateAccessProfileCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: UpdateAccessProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAlertCommand}
   */
  updateAlert(
    args: UpdateAlertCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<UpdateAlertCommandOutput>;
  updateAlert(
    args: UpdateAlertCommandInput,
    cb: (err: any, data?: UpdateAlertCommandOutput) => void
  ): void;
  updateAlert(
    args: UpdateAlertCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: UpdateAlertCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainCommand}
   */
  updateDomain(
    args: UpdateDomainCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<UpdateDomainCommandOutput>;
  updateDomain(
    args: UpdateDomainCommandInput,
    cb: (err: any, data?: UpdateDomainCommandOutput) => void
  ): void;
  updateDomain(
    args: UpdateDomainCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: UpdateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainForOrganizationCommand}
   */
  updateDomainForOrganization(
    args: UpdateDomainForOrganizationCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<UpdateDomainForOrganizationCommandOutput>;
  updateDomainForOrganization(
    args: UpdateDomainForOrganizationCommandInput,
    cb: (err: any, data?: UpdateDomainForOrganizationCommandOutput) => void
  ): void;
  updateDomainForOrganization(
    args: UpdateDomainForOrganizationCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: UpdateDomainForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIntegrationCommand}
   */
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<UpdateIntegrationCommandOutput>;
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    cb: (err: any, data?: UpdateIntegrationCommandOutput) => void
  ): void;
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: UpdateIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOmniDashboardCommand}
   */
  updateOmniDashboard(
    args: UpdateOmniDashboardCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<UpdateOmniDashboardCommandOutput>;
  updateOmniDashboard(
    args: UpdateOmniDashboardCommandInput,
    cb: (err: any, data?: UpdateOmniDashboardCommandOutput) => void
  ): void;
  updateOmniDashboard(
    args: UpdateOmniDashboardCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: UpdateOmniDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSpaceCommand}
   */
  updateSpace(
    args: UpdateSpaceCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<UpdateSpaceCommandOutput>;
  updateSpace(
    args: UpdateSpaceCommandInput,
    cb: (err: any, data?: UpdateSpaceCommandOutput) => void
  ): void;
  updateSpace(
    args: UpdateSpaceCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: UpdateSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateViewCommand}
   */
  updateView(
    args: UpdateViewCommandInput,
    options?: CloudWatchOmniRequestOptions
  ): Promise<UpdateViewCommandOutput>;
  updateView(
    args: UpdateViewCommandInput,
    cb: (err: any, data?: UpdateViewCommandOutput) => void
  ): void;
  updateView(
    args: UpdateViewCommandInput,
    options: CloudWatchOmniRequestOptions,
    cb: (err: any, data?: UpdateViewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContextGraphCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetContextGraphCommandOutput}.
   */
  paginateGetContextGraph(
    args: GetContextGraphCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetContextGraphCommandOutput>;

  /**
   * @see {@link GetTelemetryQueryResultsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetTelemetryQueryResultsCommandOutput}.
   */
  paginateGetTelemetryQueryResults(
    args: GetTelemetryQueryResultsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetTelemetryQueryResultsCommandOutput>;

  /**
   * @see {@link ListAccessGrantsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccessGrantsCommandOutput}.
   */
  paginateListAccessGrants(
    args?: ListAccessGrantsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccessGrantsCommandOutput>;

  /**
   * @see {@link ListAccessProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccessProfilesCommandOutput}.
   */
  paginateListAccessProfiles(
    args: ListAccessProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccessProfilesCommandOutput>;

  /**
   * @see {@link ListAlertsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAlertsCommandOutput}.
   */
  paginateListAlerts(
    args: ListAlertsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAlertsCommandOutput>;

  /**
   * @see {@link ListDomainAccessGrantsForOrganizationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDomainAccessGrantsForOrganizationCommandOutput}.
   */
  paginateListDomainAccessGrantsForOrganization(
    args?: ListDomainAccessGrantsForOrganizationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDomainAccessGrantsForOrganizationCommandOutput>;

  /**
   * @see {@link ListDomainsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDomainsCommandOutput}.
   */
  paginateListDomains(
    args?: ListDomainsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDomainsCommandOutput>;

  /**
   * @see {@link ListIntegrationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIntegrationsCommandOutput}.
   */
  paginateListIntegrations(
    args?: ListIntegrationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIntegrationsCommandOutput>;

  /**
   * @see {@link ListOmniDashboardsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOmniDashboardsCommandOutput}.
   */
  paginateListOmniDashboards(
    args: ListOmniDashboardsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOmniDashboardsCommandOutput>;

  /**
   * @see {@link ListSpacesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSpacesCommandOutput}.
   */
  paginateListSpaces(
    args?: ListSpacesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSpacesCommandOutput>;

  /**
   * @see {@link ListSpacesForOrganizationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSpacesForOrganizationCommandOutput}.
   */
  paginateListSpacesForOrganization(
    args?: ListSpacesForOrganizationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSpacesForOrganizationCommandOutput>;

  /**
   * @see {@link ListTelemetryFieldsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTelemetryFieldsCommandOutput}.
   */
  paginateListTelemetryFields(
    args: ListTelemetryFieldsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTelemetryFieldsCommandOutput>;

  /**
   * @see {@link ListTelemetryQuerySessionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTelemetryQuerySessionsCommandOutput}.
   */
  paginateListTelemetryQuerySessions(
    args?: ListTelemetryQuerySessionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTelemetryQuerySessionsCommandOutput>;

  /**
   * @see {@link ListViewsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListViewsCommandOutput}.
   */
  paginateListViews(
    args?: ListViewsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListViewsCommandOutput>;

  /**
   * @see {@link SearchPrincipalsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchPrincipalsCommandOutput}.
   */
  paginateSearchPrincipals(
    args: SearchPrincipalsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchPrincipalsCommandOutput>;
}

/**
 * CloudWatch Omni is a unified observability experience built on Amazon
 * CloudWatch. You work in a space, an isolated environment that holds your
 * telemetry and controls who can access it, and your data is stored in the
 * CloudWatch Dataset for correlated analysis of logs, metrics, and traces.
 * @public
 */
export class CloudWatchOmni extends CloudWatchOmniClient implements CloudWatchOmni {}
createAggregatedClient(commands, CloudWatchOmni, { paginators });
