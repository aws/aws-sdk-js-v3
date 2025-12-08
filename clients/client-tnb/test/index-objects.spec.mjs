import {
  AccessDeniedException,
  CancelSolNetworkOperationCommand,
  CreateSolFunctionPackageCommand,
  CreateSolNetworkInstanceCommand,
  CreateSolNetworkPackageCommand,
  DeleteSolFunctionPackageCommand,
  DeleteSolNetworkInstanceCommand,
  DeleteSolNetworkPackageCommand,
  DescriptorContentType,
  GetSolFunctionInstanceCommand,
  GetSolFunctionPackageCommand,
  GetSolFunctionPackageContentCommand,
  GetSolFunctionPackageDescriptorCommand,
  GetSolNetworkInstanceCommand,
  GetSolNetworkOperationCommand,
  GetSolNetworkPackageCommand,
  GetSolNetworkPackageContentCommand,
  GetSolNetworkPackageDescriptorCommand,
  InstantiateSolNetworkInstanceCommand,
  InternalServerException,
  LcmOperationType,
  ListSolFunctionInstancesCommand,
  ListSolFunctionPackagesCommand,
  ListSolNetworkInstancesCommand,
  ListSolNetworkOperationsCommand,
  ListSolNetworkPackagesCommand,
  ListTagsForResourceCommand,
  NsLcmOperationState,
  NsState,
  NsdOnboardingState,
  NsdOperationalState,
  NsdUsageState,
  OnboardingState,
  OperationalState,
  PackageContentType,
  PutSolFunctionPackageContentCommand,
  PutSolNetworkPackageContentCommand,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  TagResourceCommand,
  TaskStatus,
  TerminateSolNetworkInstanceCommand,
  ThrottlingException,
  Tnb,
  TnbClient,
  TnbServiceException,
  UntagResourceCommand,
  UpdateSolFunctionPackageCommand,
  UpdateSolNetworkInstanceCommand,
  UpdateSolNetworkPackageCommand,
  UpdateSolNetworkType,
  UsageState,
  ValidateSolFunctionPackageContentCommand,
  ValidateSolNetworkPackageContentCommand,
  ValidationException,
  VnfInstantiationState,
  VnfOperationalState,
  paginateListSolFunctionInstances,
  paginateListSolFunctionPackages,
  paginateListSolNetworkInstances,
  paginateListSolNetworkOperations,
  paginateListSolNetworkPackages,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof TnbClient === "function");
assert(typeof Tnb === "function");
// commands
assert(typeof CancelSolNetworkOperationCommand === "function");
assert(typeof CreateSolFunctionPackageCommand === "function");
assert(typeof CreateSolNetworkInstanceCommand === "function");
assert(typeof CreateSolNetworkPackageCommand === "function");
assert(typeof DeleteSolFunctionPackageCommand === "function");
assert(typeof DeleteSolNetworkInstanceCommand === "function");
assert(typeof DeleteSolNetworkPackageCommand === "function");
assert(typeof GetSolFunctionInstanceCommand === "function");
assert(typeof GetSolFunctionPackageCommand === "function");
assert(typeof GetSolFunctionPackageContentCommand === "function");
assert(typeof GetSolFunctionPackageDescriptorCommand === "function");
assert(typeof GetSolNetworkInstanceCommand === "function");
assert(typeof GetSolNetworkOperationCommand === "function");
assert(typeof GetSolNetworkPackageCommand === "function");
assert(typeof GetSolNetworkPackageContentCommand === "function");
assert(typeof GetSolNetworkPackageDescriptorCommand === "function");
assert(typeof InstantiateSolNetworkInstanceCommand === "function");
assert(typeof ListSolFunctionInstancesCommand === "function");
assert(typeof ListSolFunctionPackagesCommand === "function");
assert(typeof ListSolNetworkInstancesCommand === "function");
assert(typeof ListSolNetworkOperationsCommand === "function");
assert(typeof ListSolNetworkPackagesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutSolFunctionPackageContentCommand === "function");
assert(typeof PutSolNetworkPackageContentCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TerminateSolNetworkInstanceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateSolFunctionPackageCommand === "function");
assert(typeof UpdateSolNetworkInstanceCommand === "function");
assert(typeof UpdateSolNetworkPackageCommand === "function");
assert(typeof ValidateSolFunctionPackageContentCommand === "function");
assert(typeof ValidateSolNetworkPackageContentCommand === "function");
// enums
assert(typeof DescriptorContentType === "object");
assert(typeof LcmOperationType === "object");
assert(typeof NsdOnboardingState === "object");
assert(typeof NsdOperationalState === "object");
assert(typeof NsdUsageState === "object");
assert(typeof NsLcmOperationState === "object");
assert(typeof NsState === "object");
assert(typeof OnboardingState === "object");
assert(typeof OperationalState === "object");
assert(typeof PackageContentType === "object");
assert(typeof TaskStatus === "object");
assert(typeof UpdateSolNetworkType === "object");
assert(typeof UsageState === "object");
assert(typeof VnfInstantiationState === "object");
assert(typeof VnfOperationalState === "object");
// errors
assert(AccessDeniedException.prototype instanceof TnbServiceException);
assert(InternalServerException.prototype instanceof TnbServiceException);
assert(ResourceNotFoundException.prototype instanceof TnbServiceException);
assert(ServiceQuotaExceededException.prototype instanceof TnbServiceException);
assert(ThrottlingException.prototype instanceof TnbServiceException);
assert(ValidationException.prototype instanceof TnbServiceException);
assert(TnbServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListSolFunctionInstances === "function");
assert(typeof paginateListSolFunctionPackages === "function");
assert(typeof paginateListSolNetworkInstances === "function");
assert(typeof paginateListSolNetworkOperations === "function");
assert(typeof paginateListSolNetworkPackages === "function");
console.log(`Tnb index test passed.`);
