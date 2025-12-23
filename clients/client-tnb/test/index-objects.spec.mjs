import {
  AccessDeniedException,
  AccessDeniedException$,
  CancelSolNetworkOperation$,
  CancelSolNetworkOperationCommand,
  CancelSolNetworkOperationInput$,
  CreateSolFunctionPackage$,
  CreateSolFunctionPackageCommand,
  CreateSolFunctionPackageInput$,
  CreateSolFunctionPackageOutput$,
  CreateSolNetworkInstance$,
  CreateSolNetworkInstanceCommand,
  CreateSolNetworkInstanceInput$,
  CreateSolNetworkInstanceOutput$,
  CreateSolNetworkPackage$,
  CreateSolNetworkPackageCommand,
  CreateSolNetworkPackageInput$,
  CreateSolNetworkPackageOutput$,
  DeleteSolFunctionPackage$,
  DeleteSolFunctionPackageCommand,
  DeleteSolFunctionPackageInput$,
  DeleteSolNetworkInstance$,
  DeleteSolNetworkInstanceCommand,
  DeleteSolNetworkInstanceInput$,
  DeleteSolNetworkPackage$,
  DeleteSolNetworkPackageCommand,
  DeleteSolNetworkPackageInput$,
  DescriptorContentType,
  ErrorInfo$,
  FunctionArtifactMeta$,
  GetSolFunctionInstance$,
  GetSolFunctionInstanceCommand,
  GetSolFunctionInstanceInput$,
  GetSolFunctionInstanceMetadata$,
  GetSolFunctionInstanceOutput$,
  GetSolFunctionPackage$,
  GetSolFunctionPackageCommand,
  GetSolFunctionPackageContent$,
  GetSolFunctionPackageContentCommand,
  GetSolFunctionPackageContentInput$,
  GetSolFunctionPackageContentOutput$,
  GetSolFunctionPackageDescriptor$,
  GetSolFunctionPackageDescriptorCommand,
  GetSolFunctionPackageDescriptorInput$,
  GetSolFunctionPackageDescriptorOutput$,
  GetSolFunctionPackageInput$,
  GetSolFunctionPackageMetadata$,
  GetSolFunctionPackageOutput$,
  GetSolInstantiatedVnfInfo$,
  GetSolNetworkInstance$,
  GetSolNetworkInstanceCommand,
  GetSolNetworkInstanceInput$,
  GetSolNetworkInstanceMetadata$,
  GetSolNetworkInstanceOutput$,
  GetSolNetworkOperation$,
  GetSolNetworkOperationCommand,
  GetSolNetworkOperationInput$,
  GetSolNetworkOperationMetadata$,
  GetSolNetworkOperationOutput$,
  GetSolNetworkOperationTaskDetails$,
  GetSolNetworkPackage$,
  GetSolNetworkPackageCommand,
  GetSolNetworkPackageContent$,
  GetSolNetworkPackageContentCommand,
  GetSolNetworkPackageContentInput$,
  GetSolNetworkPackageContentOutput$,
  GetSolNetworkPackageDescriptor$,
  GetSolNetworkPackageDescriptorCommand,
  GetSolNetworkPackageDescriptorInput$,
  GetSolNetworkPackageDescriptorOutput$,
  GetSolNetworkPackageInput$,
  GetSolNetworkPackageMetadata$,
  GetSolNetworkPackageOutput$,
  GetSolVnfcResourceInfo$,
  GetSolVnfcResourceInfoMetadata$,
  GetSolVnfInfo$,
  InstantiateMetadata$,
  InstantiateSolNetworkInstance$,
  InstantiateSolNetworkInstanceCommand,
  InstantiateSolNetworkInstanceInput$,
  InstantiateSolNetworkInstanceOutput$,
  InternalServerException,
  InternalServerException$,
  LcmOperationInfo$,
  LcmOperationType,
  ListSolFunctionInstanceInfo$,
  ListSolFunctionInstanceMetadata$,
  ListSolFunctionInstances$,
  ListSolFunctionInstancesCommand,
  ListSolFunctionInstancesInput$,
  ListSolFunctionInstancesOutput$,
  ListSolFunctionPackageInfo$,
  ListSolFunctionPackageMetadata$,
  ListSolFunctionPackages$,
  ListSolFunctionPackagesCommand,
  ListSolFunctionPackagesInput$,
  ListSolFunctionPackagesOutput$,
  ListSolNetworkInstanceInfo$,
  ListSolNetworkInstanceMetadata$,
  ListSolNetworkInstances$,
  ListSolNetworkInstancesCommand,
  ListSolNetworkInstancesInput$,
  ListSolNetworkInstancesOutput$,
  ListSolNetworkOperations$,
  ListSolNetworkOperationsCommand,
  ListSolNetworkOperationsInfo$,
  ListSolNetworkOperationsInput$,
  ListSolNetworkOperationsMetadata$,
  ListSolNetworkOperationsOutput$,
  ListSolNetworkPackageInfo$,
  ListSolNetworkPackageMetadata$,
  ListSolNetworkPackages$,
  ListSolNetworkPackagesCommand,
  ListSolNetworkPackagesInput$,
  ListSolNetworkPackagesOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ModifyVnfInfoMetadata$,
  NetworkArtifactMeta$,
  NsdOnboardingState,
  NsdOperationalState,
  NsdUsageState,
  NsLcmOperationState,
  NsState,
  OnboardingState,
  OperationalState,
  PackageContentType,
  paginateListSolFunctionInstances,
  paginateListSolFunctionPackages,
  paginateListSolNetworkInstances,
  paginateListSolNetworkOperations,
  paginateListSolNetworkPackages,
  ProblemDetails$,
  PutSolFunctionPackageContent$,
  PutSolFunctionPackageContentCommand,
  PutSolFunctionPackageContentInput$,
  PutSolFunctionPackageContentMetadata$,
  PutSolFunctionPackageContentOutput$,
  PutSolNetworkPackageContent$,
  PutSolNetworkPackageContentCommand,
  PutSolNetworkPackageContentInput$,
  PutSolNetworkPackageContentMetadata$,
  PutSolNetworkPackageContentOutput$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TaskStatus,
  TerminateSolNetworkInstance$,
  TerminateSolNetworkInstanceCommand,
  TerminateSolNetworkInstanceInput$,
  TerminateSolNetworkInstanceOutput$,
  ThrottlingException,
  ThrottlingException$,
  Tnb,
  TnbClient,
  TnbServiceException,
  ToscaOverride$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateNsMetadata$,
  UpdateSolFunctionPackage$,
  UpdateSolFunctionPackageCommand,
  UpdateSolFunctionPackageInput$,
  UpdateSolFunctionPackageOutput$,
  UpdateSolNetworkInstance$,
  UpdateSolNetworkInstanceCommand,
  UpdateSolNetworkInstanceInput$,
  UpdateSolNetworkInstanceOutput$,
  UpdateSolNetworkModify$,
  UpdateSolNetworkPackage$,
  UpdateSolNetworkPackageCommand,
  UpdateSolNetworkPackageInput$,
  UpdateSolNetworkPackageOutput$,
  UpdateSolNetworkServiceData$,
  UpdateSolNetworkType,
  UsageState,
  ValidateSolFunctionPackageContent$,
  ValidateSolFunctionPackageContentCommand,
  ValidateSolFunctionPackageContentInput$,
  ValidateSolFunctionPackageContentMetadata$,
  ValidateSolFunctionPackageContentOutput$,
  ValidateSolNetworkPackageContent$,
  ValidateSolNetworkPackageContentCommand,
  ValidateSolNetworkPackageContentInput$,
  ValidateSolNetworkPackageContentMetadata$,
  ValidateSolNetworkPackageContentOutput$,
  ValidationException,
  ValidationException$,
  VnfInstantiationState,
  VnfOperationalState,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof TnbClient === "function");
assert(typeof Tnb === "function");
// commands
assert(typeof CancelSolNetworkOperationCommand === "function");
assert(typeof CancelSolNetworkOperation$ === "object");
assert(typeof CreateSolFunctionPackageCommand === "function");
assert(typeof CreateSolFunctionPackage$ === "object");
assert(typeof CreateSolNetworkInstanceCommand === "function");
assert(typeof CreateSolNetworkInstance$ === "object");
assert(typeof CreateSolNetworkPackageCommand === "function");
assert(typeof CreateSolNetworkPackage$ === "object");
assert(typeof DeleteSolFunctionPackageCommand === "function");
assert(typeof DeleteSolFunctionPackage$ === "object");
assert(typeof DeleteSolNetworkInstanceCommand === "function");
assert(typeof DeleteSolNetworkInstance$ === "object");
assert(typeof DeleteSolNetworkPackageCommand === "function");
assert(typeof DeleteSolNetworkPackage$ === "object");
assert(typeof GetSolFunctionInstanceCommand === "function");
assert(typeof GetSolFunctionInstance$ === "object");
assert(typeof GetSolFunctionPackageCommand === "function");
assert(typeof GetSolFunctionPackage$ === "object");
assert(typeof GetSolFunctionPackageContentCommand === "function");
assert(typeof GetSolFunctionPackageContent$ === "object");
assert(typeof GetSolFunctionPackageDescriptorCommand === "function");
assert(typeof GetSolFunctionPackageDescriptor$ === "object");
assert(typeof GetSolNetworkInstanceCommand === "function");
assert(typeof GetSolNetworkInstance$ === "object");
assert(typeof GetSolNetworkOperationCommand === "function");
assert(typeof GetSolNetworkOperation$ === "object");
assert(typeof GetSolNetworkPackageCommand === "function");
assert(typeof GetSolNetworkPackage$ === "object");
assert(typeof GetSolNetworkPackageContentCommand === "function");
assert(typeof GetSolNetworkPackageContent$ === "object");
assert(typeof GetSolNetworkPackageDescriptorCommand === "function");
assert(typeof GetSolNetworkPackageDescriptor$ === "object");
assert(typeof InstantiateSolNetworkInstanceCommand === "function");
assert(typeof InstantiateSolNetworkInstance$ === "object");
assert(typeof ListSolFunctionInstancesCommand === "function");
assert(typeof ListSolFunctionInstances$ === "object");
assert(typeof ListSolFunctionPackagesCommand === "function");
assert(typeof ListSolFunctionPackages$ === "object");
assert(typeof ListSolNetworkInstancesCommand === "function");
assert(typeof ListSolNetworkInstances$ === "object");
assert(typeof ListSolNetworkOperationsCommand === "function");
assert(typeof ListSolNetworkOperations$ === "object");
assert(typeof ListSolNetworkPackagesCommand === "function");
assert(typeof ListSolNetworkPackages$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutSolFunctionPackageContentCommand === "function");
assert(typeof PutSolFunctionPackageContent$ === "object");
assert(typeof PutSolNetworkPackageContentCommand === "function");
assert(typeof PutSolNetworkPackageContent$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TerminateSolNetworkInstanceCommand === "function");
assert(typeof TerminateSolNetworkInstance$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateSolFunctionPackageCommand === "function");
assert(typeof UpdateSolFunctionPackage$ === "object");
assert(typeof UpdateSolNetworkInstanceCommand === "function");
assert(typeof UpdateSolNetworkInstance$ === "object");
assert(typeof UpdateSolNetworkPackageCommand === "function");
assert(typeof UpdateSolNetworkPackage$ === "object");
assert(typeof ValidateSolFunctionPackageContentCommand === "function");
assert(typeof ValidateSolFunctionPackageContent$ === "object");
assert(typeof ValidateSolNetworkPackageContentCommand === "function");
assert(typeof ValidateSolNetworkPackageContent$ === "object");
// structural schemas
assert(typeof CancelSolNetworkOperationInput$ === "object");
assert(typeof CreateSolFunctionPackageInput$ === "object");
assert(typeof CreateSolFunctionPackageOutput$ === "object");
assert(typeof CreateSolNetworkInstanceInput$ === "object");
assert(typeof CreateSolNetworkInstanceOutput$ === "object");
assert(typeof CreateSolNetworkPackageInput$ === "object");
assert(typeof CreateSolNetworkPackageOutput$ === "object");
assert(typeof DeleteSolFunctionPackageInput$ === "object");
assert(typeof DeleteSolNetworkInstanceInput$ === "object");
assert(typeof DeleteSolNetworkPackageInput$ === "object");
assert(typeof ErrorInfo$ === "object");
assert(typeof FunctionArtifactMeta$ === "object");
assert(typeof GetSolFunctionInstanceInput$ === "object");
assert(typeof GetSolFunctionInstanceMetadata$ === "object");
assert(typeof GetSolFunctionInstanceOutput$ === "object");
assert(typeof GetSolFunctionPackageContentInput$ === "object");
assert(typeof GetSolFunctionPackageContentOutput$ === "object");
assert(typeof GetSolFunctionPackageDescriptorInput$ === "object");
assert(typeof GetSolFunctionPackageDescriptorOutput$ === "object");
assert(typeof GetSolFunctionPackageInput$ === "object");
assert(typeof GetSolFunctionPackageMetadata$ === "object");
assert(typeof GetSolFunctionPackageOutput$ === "object");
assert(typeof GetSolInstantiatedVnfInfo$ === "object");
assert(typeof GetSolNetworkInstanceInput$ === "object");
assert(typeof GetSolNetworkInstanceMetadata$ === "object");
assert(typeof GetSolNetworkInstanceOutput$ === "object");
assert(typeof GetSolNetworkOperationInput$ === "object");
assert(typeof GetSolNetworkOperationMetadata$ === "object");
assert(typeof GetSolNetworkOperationOutput$ === "object");
assert(typeof GetSolNetworkOperationTaskDetails$ === "object");
assert(typeof GetSolNetworkPackageContentInput$ === "object");
assert(typeof GetSolNetworkPackageContentOutput$ === "object");
assert(typeof GetSolNetworkPackageDescriptorInput$ === "object");
assert(typeof GetSolNetworkPackageDescriptorOutput$ === "object");
assert(typeof GetSolNetworkPackageInput$ === "object");
assert(typeof GetSolNetworkPackageMetadata$ === "object");
assert(typeof GetSolNetworkPackageOutput$ === "object");
assert(typeof GetSolVnfcResourceInfo$ === "object");
assert(typeof GetSolVnfcResourceInfoMetadata$ === "object");
assert(typeof GetSolVnfInfo$ === "object");
assert(typeof InstantiateMetadata$ === "object");
assert(typeof InstantiateSolNetworkInstanceInput$ === "object");
assert(typeof InstantiateSolNetworkInstanceOutput$ === "object");
assert(typeof LcmOperationInfo$ === "object");
assert(typeof ListSolFunctionInstanceInfo$ === "object");
assert(typeof ListSolFunctionInstanceMetadata$ === "object");
assert(typeof ListSolFunctionInstancesInput$ === "object");
assert(typeof ListSolFunctionInstancesOutput$ === "object");
assert(typeof ListSolFunctionPackageInfo$ === "object");
assert(typeof ListSolFunctionPackageMetadata$ === "object");
assert(typeof ListSolFunctionPackagesInput$ === "object");
assert(typeof ListSolFunctionPackagesOutput$ === "object");
assert(typeof ListSolNetworkInstanceInfo$ === "object");
assert(typeof ListSolNetworkInstanceMetadata$ === "object");
assert(typeof ListSolNetworkInstancesInput$ === "object");
assert(typeof ListSolNetworkInstancesOutput$ === "object");
assert(typeof ListSolNetworkOperationsInfo$ === "object");
assert(typeof ListSolNetworkOperationsInput$ === "object");
assert(typeof ListSolNetworkOperationsMetadata$ === "object");
assert(typeof ListSolNetworkOperationsOutput$ === "object");
assert(typeof ListSolNetworkPackageInfo$ === "object");
assert(typeof ListSolNetworkPackageMetadata$ === "object");
assert(typeof ListSolNetworkPackagesInput$ === "object");
assert(typeof ListSolNetworkPackagesOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ModifyVnfInfoMetadata$ === "object");
assert(typeof NetworkArtifactMeta$ === "object");
assert(typeof ProblemDetails$ === "object");
assert(typeof PutSolFunctionPackageContentInput$ === "object");
assert(typeof PutSolFunctionPackageContentMetadata$ === "object");
assert(typeof PutSolFunctionPackageContentOutput$ === "object");
assert(typeof PutSolNetworkPackageContentInput$ === "object");
assert(typeof PutSolNetworkPackageContentMetadata$ === "object");
assert(typeof PutSolNetworkPackageContentOutput$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof TerminateSolNetworkInstanceInput$ === "object");
assert(typeof TerminateSolNetworkInstanceOutput$ === "object");
assert(typeof ToscaOverride$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateNsMetadata$ === "object");
assert(typeof UpdateSolFunctionPackageInput$ === "object");
assert(typeof UpdateSolFunctionPackageOutput$ === "object");
assert(typeof UpdateSolNetworkInstanceInput$ === "object");
assert(typeof UpdateSolNetworkInstanceOutput$ === "object");
assert(typeof UpdateSolNetworkModify$ === "object");
assert(typeof UpdateSolNetworkPackageInput$ === "object");
assert(typeof UpdateSolNetworkPackageOutput$ === "object");
assert(typeof UpdateSolNetworkServiceData$ === "object");
assert(typeof ValidateSolFunctionPackageContentInput$ === "object");
assert(typeof ValidateSolFunctionPackageContentMetadata$ === "object");
assert(typeof ValidateSolFunctionPackageContentOutput$ === "object");
assert(typeof ValidateSolNetworkPackageContentInput$ === "object");
assert(typeof ValidateSolNetworkPackageContentMetadata$ === "object");
assert(typeof ValidateSolNetworkPackageContentOutput$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof TnbServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof TnbServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof TnbServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof TnbServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof TnbServiceException);
assert(typeof ValidationException$ === "object");
assert(TnbServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListSolFunctionInstances === "function");
assert(typeof paginateListSolFunctionPackages === "function");
assert(typeof paginateListSolNetworkInstances === "function");
assert(typeof paginateListSolNetworkOperations === "function");
assert(typeof paginateListSolNetworkPackages === "function");
console.log(`Tnb index test passed.`);
