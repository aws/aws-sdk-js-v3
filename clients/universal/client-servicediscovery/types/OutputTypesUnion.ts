import { CreateHttpNamespaceOutput } from "./CreateHttpNamespaceOutput";
import { CreatePrivateDnsNamespaceOutput } from "./CreatePrivateDnsNamespaceOutput";
import { CreatePublicDnsNamespaceOutput } from "./CreatePublicDnsNamespaceOutput";
import { CreateServiceOutput } from "./CreateServiceOutput";
import { DeleteNamespaceOutput } from "./DeleteNamespaceOutput";
import { DeleteServiceOutput } from "./DeleteServiceOutput";
import { DeregisterInstanceOutput } from "./DeregisterInstanceOutput";
import { DiscoverInstancesOutput } from "./DiscoverInstancesOutput";
import { GetInstanceOutput } from "./GetInstanceOutput";
import { GetInstancesHealthStatusOutput } from "./GetInstancesHealthStatusOutput";
import { GetNamespaceOutput } from "./GetNamespaceOutput";
import { GetOperationOutput } from "./GetOperationOutput";
import { GetServiceOutput } from "./GetServiceOutput";
import { ListInstancesOutput } from "./ListInstancesOutput";
import { ListNamespacesOutput } from "./ListNamespacesOutput";
import { ListOperationsOutput } from "./ListOperationsOutput";
import { ListServicesOutput } from "./ListServicesOutput";
import { RegisterInstanceOutput } from "./RegisterInstanceOutput";
import { UpdateInstanceCustomHealthStatusOutput } from "./UpdateInstanceCustomHealthStatusOutput";
import { UpdateServiceOutput } from "./UpdateServiceOutput";
export type OutputTypesUnion =
  | CreateHttpNamespaceOutput
  | CreatePrivateDnsNamespaceOutput
  | CreatePublicDnsNamespaceOutput
  | CreateServiceOutput
  | DeleteNamespaceOutput
  | DeleteServiceOutput
  | DeregisterInstanceOutput
  | DiscoverInstancesOutput
  | GetInstanceOutput
  | GetInstancesHealthStatusOutput
  | GetNamespaceOutput
  | GetOperationOutput
  | GetServiceOutput
  | ListInstancesOutput
  | ListNamespacesOutput
  | ListOperationsOutput
  | ListServicesOutput
  | RegisterInstanceOutput
  | UpdateInstanceCustomHealthStatusOutput
  | UpdateServiceOutput;
