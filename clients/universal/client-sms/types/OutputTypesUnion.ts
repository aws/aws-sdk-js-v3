import { CreateAppOutput } from "./CreateAppOutput";
import { CreateReplicationJobOutput } from "./CreateReplicationJobOutput";
import { DeleteAppOutput } from "./DeleteAppOutput";
import { DeleteAppLaunchConfigurationOutput } from "./DeleteAppLaunchConfigurationOutput";
import { DeleteAppReplicationConfigurationOutput } from "./DeleteAppReplicationConfigurationOutput";
import { DeleteReplicationJobOutput } from "./DeleteReplicationJobOutput";
import { DeleteServerCatalogOutput } from "./DeleteServerCatalogOutput";
import { DisassociateConnectorOutput } from "./DisassociateConnectorOutput";
import { GenerateChangeSetOutput } from "./GenerateChangeSetOutput";
import { GenerateTemplateOutput } from "./GenerateTemplateOutput";
import { GetAppOutput } from "./GetAppOutput";
import { GetAppLaunchConfigurationOutput } from "./GetAppLaunchConfigurationOutput";
import { GetAppReplicationConfigurationOutput } from "./GetAppReplicationConfigurationOutput";
import { GetConnectorsOutput } from "./GetConnectorsOutput";
import { GetReplicationJobsOutput } from "./GetReplicationJobsOutput";
import { GetReplicationRunsOutput } from "./GetReplicationRunsOutput";
import { GetServersOutput } from "./GetServersOutput";
import { ImportServerCatalogOutput } from "./ImportServerCatalogOutput";
import { LaunchAppOutput } from "./LaunchAppOutput";
import { ListAppsOutput } from "./ListAppsOutput";
import { PutAppLaunchConfigurationOutput } from "./PutAppLaunchConfigurationOutput";
import { PutAppReplicationConfigurationOutput } from "./PutAppReplicationConfigurationOutput";
import { StartAppReplicationOutput } from "./StartAppReplicationOutput";
import { StartOnDemandReplicationRunOutput } from "./StartOnDemandReplicationRunOutput";
import { StopAppReplicationOutput } from "./StopAppReplicationOutput";
import { TerminateAppOutput } from "./TerminateAppOutput";
import { UpdateAppOutput } from "./UpdateAppOutput";
import { UpdateReplicationJobOutput } from "./UpdateReplicationJobOutput";
export type OutputTypesUnion =
  | CreateAppOutput
  | CreateReplicationJobOutput
  | DeleteAppOutput
  | DeleteAppLaunchConfigurationOutput
  | DeleteAppReplicationConfigurationOutput
  | DeleteReplicationJobOutput
  | DeleteServerCatalogOutput
  | DisassociateConnectorOutput
  | GenerateChangeSetOutput
  | GenerateTemplateOutput
  | GetAppOutput
  | GetAppLaunchConfigurationOutput
  | GetAppReplicationConfigurationOutput
  | GetConnectorsOutput
  | GetReplicationJobsOutput
  | GetReplicationRunsOutput
  | GetServersOutput
  | ImportServerCatalogOutput
  | LaunchAppOutput
  | ListAppsOutput
  | PutAppLaunchConfigurationOutput
  | PutAppReplicationConfigurationOutput
  | StartAppReplicationOutput
  | StartOnDemandReplicationRunOutput
  | StopAppReplicationOutput
  | TerminateAppOutput
  | UpdateAppOutput
  | UpdateReplicationJobOutput;
