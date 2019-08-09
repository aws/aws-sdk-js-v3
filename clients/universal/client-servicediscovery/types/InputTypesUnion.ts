import { CreateHttpNamespaceInput } from "./CreateHttpNamespaceInput";
import { CreatePrivateDnsNamespaceInput } from "./CreatePrivateDnsNamespaceInput";
import { CreatePublicDnsNamespaceInput } from "./CreatePublicDnsNamespaceInput";
import { CreateServiceInput } from "./CreateServiceInput";
import { DeleteNamespaceInput } from "./DeleteNamespaceInput";
import { DeleteServiceInput } from "./DeleteServiceInput";
import { DeregisterInstanceInput } from "./DeregisterInstanceInput";
import { DiscoverInstancesInput } from "./DiscoverInstancesInput";
import { GetInstanceInput } from "./GetInstanceInput";
import { GetInstancesHealthStatusInput } from "./GetInstancesHealthStatusInput";
import { GetNamespaceInput } from "./GetNamespaceInput";
import { GetOperationInput } from "./GetOperationInput";
import { GetServiceInput } from "./GetServiceInput";
import { ListInstancesInput } from "./ListInstancesInput";
import { ListNamespacesInput } from "./ListNamespacesInput";
import { ListOperationsInput } from "./ListOperationsInput";
import { ListServicesInput } from "./ListServicesInput";
import { RegisterInstanceInput } from "./RegisterInstanceInput";
import { UpdateInstanceCustomHealthStatusInput } from "./UpdateInstanceCustomHealthStatusInput";
import { UpdateServiceInput } from "./UpdateServiceInput";
export type InputTypesUnion =
  | CreateHttpNamespaceInput
  | CreatePrivateDnsNamespaceInput
  | CreatePublicDnsNamespaceInput
  | CreateServiceInput
  | DeleteNamespaceInput
  | DeleteServiceInput
  | DeregisterInstanceInput
  | DiscoverInstancesInput
  | GetInstanceInput
  | GetInstancesHealthStatusInput
  | GetNamespaceInput
  | GetOperationInput
  | GetServiceInput
  | ListInstancesInput
  | ListNamespacesInput
  | ListOperationsInput
  | ListServicesInput
  | RegisterInstanceInput
  | UpdateInstanceCustomHealthStatusInput
  | UpdateServiceInput;
