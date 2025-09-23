// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  CancelImageCreationCommandInput,
  CancelImageCreationCommandOutput,
} from "../commands/CancelImageCreationCommand";
import {
  CancelLifecycleExecutionCommandInput,
  CancelLifecycleExecutionCommandOutput,
} from "../commands/CancelLifecycleExecutionCommand";
import { CreateComponentCommandInput, CreateComponentCommandOutput } from "../commands/CreateComponentCommand";
import {
  CreateContainerRecipeCommandInput,
  CreateContainerRecipeCommandOutput,
} from "../commands/CreateContainerRecipeCommand";
import {
  CreateDistributionConfigurationCommandInput,
  CreateDistributionConfigurationCommandOutput,
} from "../commands/CreateDistributionConfigurationCommand";
import { CreateImageCommandInput, CreateImageCommandOutput } from "../commands/CreateImageCommand";
import {
  CreateImagePipelineCommandInput,
  CreateImagePipelineCommandOutput,
} from "../commands/CreateImagePipelineCommand";
import { CreateImageRecipeCommandInput, CreateImageRecipeCommandOutput } from "../commands/CreateImageRecipeCommand";
import {
  CreateInfrastructureConfigurationCommandInput,
  CreateInfrastructureConfigurationCommandOutput,
} from "../commands/CreateInfrastructureConfigurationCommand";
import {
  CreateLifecyclePolicyCommandInput,
  CreateLifecyclePolicyCommandOutput,
} from "../commands/CreateLifecyclePolicyCommand";
import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "../commands/CreateWorkflowCommand";
import { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "../commands/DeleteComponentCommand";
import {
  DeleteContainerRecipeCommandInput,
  DeleteContainerRecipeCommandOutput,
} from "../commands/DeleteContainerRecipeCommand";
import {
  DeleteDistributionConfigurationCommandInput,
  DeleteDistributionConfigurationCommandOutput,
} from "../commands/DeleteDistributionConfigurationCommand";
import { DeleteImageCommandInput, DeleteImageCommandOutput } from "../commands/DeleteImageCommand";
import {
  DeleteImagePipelineCommandInput,
  DeleteImagePipelineCommandOutput,
} from "../commands/DeleteImagePipelineCommand";
import { DeleteImageRecipeCommandInput, DeleteImageRecipeCommandOutput } from "../commands/DeleteImageRecipeCommand";
import {
  DeleteInfrastructureConfigurationCommandInput,
  DeleteInfrastructureConfigurationCommandOutput,
} from "../commands/DeleteInfrastructureConfigurationCommand";
import {
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput,
} from "../commands/DeleteLifecyclePolicyCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "../commands/DeleteWorkflowCommand";
import { GetComponentCommandInput, GetComponentCommandOutput } from "../commands/GetComponentCommand";
import { GetComponentPolicyCommandInput, GetComponentPolicyCommandOutput } from "../commands/GetComponentPolicyCommand";
import { GetContainerRecipeCommandInput, GetContainerRecipeCommandOutput } from "../commands/GetContainerRecipeCommand";
import {
  GetContainerRecipePolicyCommandInput,
  GetContainerRecipePolicyCommandOutput,
} from "../commands/GetContainerRecipePolicyCommand";
import {
  GetDistributionConfigurationCommandInput,
  GetDistributionConfigurationCommandOutput,
} from "../commands/GetDistributionConfigurationCommand";
import { GetImageCommandInput, GetImageCommandOutput } from "../commands/GetImageCommand";
import { GetImagePipelineCommandInput, GetImagePipelineCommandOutput } from "../commands/GetImagePipelineCommand";
import { GetImagePolicyCommandInput, GetImagePolicyCommandOutput } from "../commands/GetImagePolicyCommand";
import { GetImageRecipeCommandInput, GetImageRecipeCommandOutput } from "../commands/GetImageRecipeCommand";
import {
  GetImageRecipePolicyCommandInput,
  GetImageRecipePolicyCommandOutput,
} from "../commands/GetImageRecipePolicyCommand";
import {
  GetInfrastructureConfigurationCommandInput,
  GetInfrastructureConfigurationCommandOutput,
} from "../commands/GetInfrastructureConfigurationCommand";
import {
  GetLifecycleExecutionCommandInput,
  GetLifecycleExecutionCommandOutput,
} from "../commands/GetLifecycleExecutionCommand";
import { GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput } from "../commands/GetLifecyclePolicyCommand";
import {
  GetMarketplaceResourceCommandInput,
  GetMarketplaceResourceCommandOutput,
} from "../commands/GetMarketplaceResourceCommand";
import { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "../commands/GetWorkflowCommand";
import {
  GetWorkflowExecutionCommandInput,
  GetWorkflowExecutionCommandOutput,
} from "../commands/GetWorkflowExecutionCommand";
import {
  GetWorkflowStepExecutionCommandInput,
  GetWorkflowStepExecutionCommandOutput,
} from "../commands/GetWorkflowStepExecutionCommand";
import { ImportComponentCommandInput, ImportComponentCommandOutput } from "../commands/ImportComponentCommand";
import { ImportDiskImageCommandInput, ImportDiskImageCommandOutput } from "../commands/ImportDiskImageCommand";
import { ImportVmImageCommandInput, ImportVmImageCommandOutput } from "../commands/ImportVmImageCommand";
import {
  ListComponentBuildVersionsCommandInput,
  ListComponentBuildVersionsCommandOutput,
} from "../commands/ListComponentBuildVersionsCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "../commands/ListComponentsCommand";
import {
  ListContainerRecipesCommandInput,
  ListContainerRecipesCommandOutput,
} from "../commands/ListContainerRecipesCommand";
import {
  ListDistributionConfigurationsCommandInput,
  ListDistributionConfigurationsCommandOutput,
} from "../commands/ListDistributionConfigurationsCommand";
import {
  ListImageBuildVersionsCommandInput,
  ListImageBuildVersionsCommandOutput,
} from "../commands/ListImageBuildVersionsCommand";
import { ListImagePackagesCommandInput, ListImagePackagesCommandOutput } from "../commands/ListImagePackagesCommand";
import {
  ListImagePipelineImagesCommandInput,
  ListImagePipelineImagesCommandOutput,
} from "../commands/ListImagePipelineImagesCommand";
import { ListImagePipelinesCommandInput, ListImagePipelinesCommandOutput } from "../commands/ListImagePipelinesCommand";
import { ListImageRecipesCommandInput, ListImageRecipesCommandOutput } from "../commands/ListImageRecipesCommand";
import {
  ListImageScanFindingAggregationsCommandInput,
  ListImageScanFindingAggregationsCommandOutput,
} from "../commands/ListImageScanFindingAggregationsCommand";
import {
  ListImageScanFindingsCommandInput,
  ListImageScanFindingsCommandOutput,
} from "../commands/ListImageScanFindingsCommand";
import { ListImagesCommandInput, ListImagesCommandOutput } from "../commands/ListImagesCommand";
import {
  ListInfrastructureConfigurationsCommandInput,
  ListInfrastructureConfigurationsCommandOutput,
} from "../commands/ListInfrastructureConfigurationsCommand";
import {
  ListLifecycleExecutionResourcesCommandInput,
  ListLifecycleExecutionResourcesCommandOutput,
} from "../commands/ListLifecycleExecutionResourcesCommand";
import {
  ListLifecycleExecutionsCommandInput,
  ListLifecycleExecutionsCommandOutput,
} from "../commands/ListLifecycleExecutionsCommand";
import {
  ListLifecyclePoliciesCommandInput,
  ListLifecyclePoliciesCommandOutput,
} from "../commands/ListLifecyclePoliciesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListWaitingWorkflowStepsCommandInput,
  ListWaitingWorkflowStepsCommandOutput,
} from "../commands/ListWaitingWorkflowStepsCommand";
import {
  ListWorkflowBuildVersionsCommandInput,
  ListWorkflowBuildVersionsCommandOutput,
} from "../commands/ListWorkflowBuildVersionsCommand";
import {
  ListWorkflowExecutionsCommandInput,
  ListWorkflowExecutionsCommandOutput,
} from "../commands/ListWorkflowExecutionsCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "../commands/ListWorkflowsCommand";
import {
  ListWorkflowStepExecutionsCommandInput,
  ListWorkflowStepExecutionsCommandOutput,
} from "../commands/ListWorkflowStepExecutionsCommand";
import { PutComponentPolicyCommandInput, PutComponentPolicyCommandOutput } from "../commands/PutComponentPolicyCommand";
import {
  PutContainerRecipePolicyCommandInput,
  PutContainerRecipePolicyCommandOutput,
} from "../commands/PutContainerRecipePolicyCommand";
import { PutImagePolicyCommandInput, PutImagePolicyCommandOutput } from "../commands/PutImagePolicyCommand";
import {
  PutImageRecipePolicyCommandInput,
  PutImageRecipePolicyCommandOutput,
} from "../commands/PutImageRecipePolicyCommand";
import {
  SendWorkflowStepActionCommandInput,
  SendWorkflowStepActionCommandOutput,
} from "../commands/SendWorkflowStepActionCommand";
import {
  StartImagePipelineExecutionCommandInput,
  StartImagePipelineExecutionCommandOutput,
} from "../commands/StartImagePipelineExecutionCommand";
import {
  StartResourceStateUpdateCommandInput,
  StartResourceStateUpdateCommandOutput,
} from "../commands/StartResourceStateUpdateCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateDistributionConfigurationCommandInput,
  UpdateDistributionConfigurationCommandOutput,
} from "../commands/UpdateDistributionConfigurationCommand";
import {
  UpdateImagePipelineCommandInput,
  UpdateImagePipelineCommandOutput,
} from "../commands/UpdateImagePipelineCommand";
import {
  UpdateInfrastructureConfigurationCommandInput,
  UpdateInfrastructureConfigurationCommandOutput,
} from "../commands/UpdateInfrastructureConfigurationCommand";
import {
  UpdateLifecyclePolicyCommandInput,
  UpdateLifecyclePolicyCommandOutput,
} from "../commands/UpdateLifecyclePolicyCommand";
import { ImagebuilderServiceException as __BaseException } from "../models/ImagebuilderServiceException";
import {
  AdditionalInstanceConfiguration,
  AmiDistributionConfiguration,
  CallRateLimitExceededException,
  ClientException,
  ComponentConfiguration,
  ComponentParameter,
  ContainerDistributionConfiguration,
  CvssScore,
  CvssScoreDetails,
  Distribution,
  EbsInstanceBlockDeviceSpecification,
  EcrConfiguration,
  FastLaunchConfiguration,
  FastLaunchLaunchTemplateSpecification,
  FastLaunchSnapshotConfiguration,
  Filter,
  ForbiddenException,
  IdempotentParameterMismatchException,
  Image,
  ImageScanFinding,
  ImageScanFindingsFilter,
  ImageScanningConfiguration,
  ImageSummary,
  ImageTestsConfiguration,
  InspectorScoreDetails,
  InstanceBlockDeviceMapping,
  InstanceConfiguration,
  InstanceMetadataOptions,
  InvalidPaginationTokenException,
  InvalidParameterCombinationException,
  InvalidParameterException,
  InvalidParameterValueException,
  InvalidRequestException,
  InvalidVersionNumberException,
  LaunchPermissionConfiguration,
  LaunchTemplateConfiguration,
  LifecycleExecution,
  LifecycleExecutionResource,
  LifecyclePolicy,
  LifecyclePolicyDetail,
  LifecyclePolicyDetailAction,
  LifecyclePolicyDetailActionIncludeResources,
  LifecyclePolicyDetailExclusionRules,
  LifecyclePolicyDetailExclusionRulesAmis,
  LifecyclePolicyDetailExclusionRulesAmisLastLaunched,
  LifecyclePolicyDetailFilter,
  LifecyclePolicyResourceSelection,
  LifecyclePolicyResourceSelectionRecipe,
  LifecyclePolicySummary,
  Logging,
  PackageVulnerabilityDetails,
  Placement,
  ResourceAlreadyExistsException,
  ResourceDependencyException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceState,
  ResourceStateUpdateExclusionRules,
  ResourceStateUpdateIncludeResources,
  S3ExportConfiguration,
  S3Logs,
  Schedule,
  ServiceException,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  SsmParameterConfiguration,
  SystemsManagerAgent,
  TargetContainerRepository,
  WorkflowConfiguration,
  WorkflowParameter,
} from "../models/models_0";

/**
 * serializeAws_restJson1CancelImageCreationCommand
 */
export const se_CancelImageCreationCommand = async (
  input: CancelImageCreationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CancelImageCreation");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      imageBuildVersionArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelLifecycleExecutionCommand
 */
export const se_CancelLifecycleExecutionCommand = async (
  input: CancelLifecycleExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CancelLifecycleExecution");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      lifecycleExecutionId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateComponentCommand
 */
export const se_CreateComponentCommand = async (
  input: CreateComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateComponent");
  let body: any;
  body = JSON.stringify(
    take(input, {
      changeDescription: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      data: [],
      description: [],
      kmsKeyId: [],
      name: [],
      platform: [],
      semanticVersion: [],
      supportedOsVersions: (_) => _json(_),
      tags: (_) => _json(_),
      uri: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateContainerRecipeCommand
 */
export const se_CreateContainerRecipeCommand = async (
  input: CreateContainerRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateContainerRecipe");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      components: (_) => _json(_),
      containerType: [],
      description: [],
      dockerfileTemplateData: [],
      dockerfileTemplateUri: [],
      imageOsVersionOverride: [],
      instanceConfiguration: (_) => _json(_),
      kmsKeyId: [],
      name: [],
      parentImage: [],
      platformOverride: [],
      semanticVersion: [],
      tags: (_) => _json(_),
      targetRepository: (_) => _json(_),
      workingDirectory: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDistributionConfigurationCommand
 */
export const se_CreateDistributionConfigurationCommand = async (
  input: CreateDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateDistributionConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      distributions: (_) => _json(_),
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateImageCommand
 */
export const se_CreateImageCommand = async (
  input: CreateImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateImage");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      containerRecipeArn: [],
      distributionConfigurationArn: [],
      enhancedImageMetadataEnabled: [],
      executionRole: [],
      imageRecipeArn: [],
      imageScanningConfiguration: (_) => _json(_),
      imageTestsConfiguration: (_) => _json(_),
      infrastructureConfigurationArn: [],
      tags: (_) => _json(_),
      workflows: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateImagePipelineCommand
 */
export const se_CreateImagePipelineCommand = async (
  input: CreateImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateImagePipeline");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      containerRecipeArn: [],
      description: [],
      distributionConfigurationArn: [],
      enhancedImageMetadataEnabled: [],
      executionRole: [],
      imageRecipeArn: [],
      imageScanningConfiguration: (_) => _json(_),
      imageTestsConfiguration: (_) => _json(_),
      infrastructureConfigurationArn: [],
      name: [],
      schedule: (_) => _json(_),
      status: [],
      tags: (_) => _json(_),
      workflows: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateImageRecipeCommand
 */
export const se_CreateImageRecipeCommand = async (
  input: CreateImageRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateImageRecipe");
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalInstanceConfiguration: (_) => _json(_),
      blockDeviceMappings: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      components: (_) => _json(_),
      description: [],
      name: [],
      parentImage: [],
      semanticVersion: [],
      tags: (_) => _json(_),
      workingDirectory: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateInfrastructureConfigurationCommand
 */
export const se_CreateInfrastructureConfigurationCommand = async (
  input: CreateInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateInfrastructureConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      instanceMetadataOptions: (_) => _json(_),
      instanceProfileName: [],
      instanceTypes: (_) => _json(_),
      keyPair: [],
      logging: (_) => _json(_),
      name: [],
      placement: (_) => _json(_),
      resourceTags: (_) => _json(_),
      securityGroupIds: (_) => _json(_),
      snsTopicArn: [],
      subnetId: [],
      tags: (_) => _json(_),
      terminateInstanceOnFailure: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateLifecyclePolicyCommand
 */
export const se_CreateLifecyclePolicyCommand = async (
  input: CreateLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateLifecyclePolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      executionRole: [],
      name: [],
      policyDetails: (_) => _json(_),
      resourceSelection: (_) => _json(_),
      resourceType: [],
      status: [],
      tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWorkflowCommand
 */
export const se_CreateWorkflowCommand = async (
  input: CreateWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateWorkflow");
  let body: any;
  body = JSON.stringify(
    take(input, {
      changeDescription: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      data: [],
      description: [],
      kmsKeyId: [],
      name: [],
      semanticVersion: [],
      tags: (_) => _json(_),
      type: [],
      uri: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteComponentCommand
 */
export const se_DeleteComponentCommand = async (
  input: DeleteComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/DeleteComponent");
  const query: any = map({
    [_cBVA]: [, __expectNonNull(input[_cBVA]!, `componentBuildVersionArn`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteContainerRecipeCommand
 */
export const se_DeleteContainerRecipeCommand = async (
  input: DeleteContainerRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/DeleteContainerRecipe");
  const query: any = map({
    [_cRA]: [, __expectNonNull(input[_cRA]!, `containerRecipeArn`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDistributionConfigurationCommand
 */
export const se_DeleteDistributionConfigurationCommand = async (
  input: DeleteDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/DeleteDistributionConfiguration");
  const query: any = map({
    [_dCA]: [, __expectNonNull(input[_dCA]!, `distributionConfigurationArn`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteImageCommand
 */
export const se_DeleteImageCommand = async (
  input: DeleteImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/DeleteImage");
  const query: any = map({
    [_iBVA]: [, __expectNonNull(input[_iBVA]!, `imageBuildVersionArn`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteImagePipelineCommand
 */
export const se_DeleteImagePipelineCommand = async (
  input: DeleteImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/DeleteImagePipeline");
  const query: any = map({
    [_iPA]: [, __expectNonNull(input[_iPA]!, `imagePipelineArn`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteImageRecipeCommand
 */
export const se_DeleteImageRecipeCommand = async (
  input: DeleteImageRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/DeleteImageRecipe");
  const query: any = map({
    [_iRA]: [, __expectNonNull(input[_iRA]!, `imageRecipeArn`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteInfrastructureConfigurationCommand
 */
export const se_DeleteInfrastructureConfigurationCommand = async (
  input: DeleteInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/DeleteInfrastructureConfiguration");
  const query: any = map({
    [_iCA]: [, __expectNonNull(input[_iCA]!, `infrastructureConfigurationArn`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteLifecyclePolicyCommand
 */
export const se_DeleteLifecyclePolicyCommand = async (
  input: DeleteLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/DeleteLifecyclePolicy");
  const query: any = map({
    [_lPA]: [, __expectNonNull(input[_lPA]!, `lifecyclePolicyArn`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWorkflowCommand
 */
export const se_DeleteWorkflowCommand = async (
  input: DeleteWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/DeleteWorkflow");
  const query: any = map({
    [_wBVA]: [, __expectNonNull(input[_wBVA]!, `workflowBuildVersionArn`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetComponentCommand
 */
export const se_GetComponentCommand = async (
  input: GetComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetComponent");
  const query: any = map({
    [_cBVA]: [, __expectNonNull(input[_cBVA]!, `componentBuildVersionArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetComponentPolicyCommand
 */
export const se_GetComponentPolicyCommand = async (
  input: GetComponentPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetComponentPolicy");
  const query: any = map({
    [_cA]: [, __expectNonNull(input[_cA]!, `componentArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetContainerRecipeCommand
 */
export const se_GetContainerRecipeCommand = async (
  input: GetContainerRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetContainerRecipe");
  const query: any = map({
    [_cRA]: [, __expectNonNull(input[_cRA]!, `containerRecipeArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetContainerRecipePolicyCommand
 */
export const se_GetContainerRecipePolicyCommand = async (
  input: GetContainerRecipePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetContainerRecipePolicy");
  const query: any = map({
    [_cRA]: [, __expectNonNull(input[_cRA]!, `containerRecipeArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDistributionConfigurationCommand
 */
export const se_GetDistributionConfigurationCommand = async (
  input: GetDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetDistributionConfiguration");
  const query: any = map({
    [_dCA]: [, __expectNonNull(input[_dCA]!, `distributionConfigurationArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetImageCommand
 */
export const se_GetImageCommand = async (
  input: GetImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetImage");
  const query: any = map({
    [_iBVA]: [, __expectNonNull(input[_iBVA]!, `imageBuildVersionArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetImagePipelineCommand
 */
export const se_GetImagePipelineCommand = async (
  input: GetImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetImagePipeline");
  const query: any = map({
    [_iPA]: [, __expectNonNull(input[_iPA]!, `imagePipelineArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetImagePolicyCommand
 */
export const se_GetImagePolicyCommand = async (
  input: GetImagePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetImagePolicy");
  const query: any = map({
    [_iA]: [, __expectNonNull(input[_iA]!, `imageArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetImageRecipeCommand
 */
export const se_GetImageRecipeCommand = async (
  input: GetImageRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetImageRecipe");
  const query: any = map({
    [_iRA]: [, __expectNonNull(input[_iRA]!, `imageRecipeArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetImageRecipePolicyCommand
 */
export const se_GetImageRecipePolicyCommand = async (
  input: GetImageRecipePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetImageRecipePolicy");
  const query: any = map({
    [_iRA]: [, __expectNonNull(input[_iRA]!, `imageRecipeArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetInfrastructureConfigurationCommand
 */
export const se_GetInfrastructureConfigurationCommand = async (
  input: GetInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetInfrastructureConfiguration");
  const query: any = map({
    [_iCA]: [, __expectNonNull(input[_iCA]!, `infrastructureConfigurationArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLifecycleExecutionCommand
 */
export const se_GetLifecycleExecutionCommand = async (
  input: GetLifecycleExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetLifecycleExecution");
  const query: any = map({
    [_lEI]: [, __expectNonNull(input[_lEI]!, `lifecycleExecutionId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLifecyclePolicyCommand
 */
export const se_GetLifecyclePolicyCommand = async (
  input: GetLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetLifecyclePolicy");
  const query: any = map({
    [_lPA]: [, __expectNonNull(input[_lPA]!, `lifecyclePolicyArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMarketplaceResourceCommand
 */
export const se_GetMarketplaceResourceCommand = async (
  input: GetMarketplaceResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetMarketplaceResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceArn: [],
      resourceLocation: [],
      resourceType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWorkflowCommand
 */
export const se_GetWorkflowCommand = async (
  input: GetWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetWorkflow");
  const query: any = map({
    [_wBVA]: [, __expectNonNull(input[_wBVA]!, `workflowBuildVersionArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWorkflowExecutionCommand
 */
export const se_GetWorkflowExecutionCommand = async (
  input: GetWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetWorkflowExecution");
  const query: any = map({
    [_wEI]: [, __expectNonNull(input[_wEI]!, `workflowExecutionId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWorkflowStepExecutionCommand
 */
export const se_GetWorkflowStepExecutionCommand = async (
  input: GetWorkflowStepExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetWorkflowStepExecution");
  const query: any = map({
    [_sEI]: [, __expectNonNull(input[_sEI]!, `stepExecutionId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ImportComponentCommand
 */
export const se_ImportComponentCommand = async (
  input: ImportComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ImportComponent");
  let body: any;
  body = JSON.stringify(
    take(input, {
      changeDescription: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      data: [],
      description: [],
      format: [],
      kmsKeyId: [],
      name: [],
      platform: [],
      semanticVersion: [],
      tags: (_) => _json(_),
      type: [],
      uri: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ImportDiskImageCommand
 */
export const se_ImportDiskImageCommand = async (
  input: ImportDiskImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ImportDiskImage");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      executionRole: [],
      infrastructureConfigurationArn: [],
      name: [],
      osVersion: [],
      platform: [],
      semanticVersion: [],
      tags: (_) => _json(_),
      uri: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ImportVmImageCommand
 */
export const se_ImportVmImageCommand = async (
  input: ImportVmImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ImportVmImage");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
      osVersion: [],
      platform: [],
      semanticVersion: [],
      tags: (_) => _json(_),
      vmImportTaskId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListComponentBuildVersionsCommand
 */
export const se_ListComponentBuildVersionsCommand = async (
  input: ListComponentBuildVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListComponentBuildVersions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      componentVersionArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListComponentsCommand
 */
export const se_ListComponentsCommand = async (
  input: ListComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListComponents");
  let body: any;
  body = JSON.stringify(
    take(input, {
      byName: [],
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      owner: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListContainerRecipesCommand
 */
export const se_ListContainerRecipesCommand = async (
  input: ListContainerRecipesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListContainerRecipes");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      owner: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDistributionConfigurationsCommand
 */
export const se_ListDistributionConfigurationsCommand = async (
  input: ListDistributionConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListDistributionConfigurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListImageBuildVersionsCommand
 */
export const se_ListImageBuildVersionsCommand = async (
  input: ListImageBuildVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListImageBuildVersions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      imageVersionArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListImagePackagesCommand
 */
export const se_ListImagePackagesCommand = async (
  input: ListImagePackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListImagePackages");
  let body: any;
  body = JSON.stringify(
    take(input, {
      imageBuildVersionArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListImagePipelineImagesCommand
 */
export const se_ListImagePipelineImagesCommand = async (
  input: ListImagePipelineImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListImagePipelineImages");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      imagePipelineArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListImagePipelinesCommand
 */
export const se_ListImagePipelinesCommand = async (
  input: ListImagePipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListImagePipelines");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListImageRecipesCommand
 */
export const se_ListImageRecipesCommand = async (
  input: ListImageRecipesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListImageRecipes");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      owner: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListImagesCommand
 */
export const se_ListImagesCommand = async (
  input: ListImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListImages");
  let body: any;
  body = JSON.stringify(
    take(input, {
      byName: [],
      filters: (_) => _json(_),
      includeDeprecated: [],
      maxResults: [],
      nextToken: [],
      owner: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListImageScanFindingAggregationsCommand
 */
export const se_ListImageScanFindingAggregationsCommand = async (
  input: ListImageScanFindingAggregationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListImageScanFindingAggregations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filter: (_) => _json(_),
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListImageScanFindingsCommand
 */
export const se_ListImageScanFindingsCommand = async (
  input: ListImageScanFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListImageScanFindings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListInfrastructureConfigurationsCommand
 */
export const se_ListInfrastructureConfigurationsCommand = async (
  input: ListInfrastructureConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListInfrastructureConfigurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLifecycleExecutionResourcesCommand
 */
export const se_ListLifecycleExecutionResourcesCommand = async (
  input: ListLifecycleExecutionResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListLifecycleExecutionResources");
  let body: any;
  body = JSON.stringify(
    take(input, {
      lifecycleExecutionId: [],
      maxResults: [],
      nextToken: [],
      parentResourceId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLifecycleExecutionsCommand
 */
export const se_ListLifecycleExecutionsCommand = async (
  input: ListLifecycleExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListLifecycleExecutions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      resourceArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLifecyclePoliciesCommand
 */
export const se_ListLifecyclePoliciesCommand = async (
  input: ListLifecyclePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListLifecyclePolicies");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWaitingWorkflowStepsCommand
 */
export const se_ListWaitingWorkflowStepsCommand = async (
  input: ListWaitingWorkflowStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListWaitingWorkflowSteps");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorkflowBuildVersionsCommand
 */
export const se_ListWorkflowBuildVersionsCommand = async (
  input: ListWorkflowBuildVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListWorkflowBuildVersions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      workflowVersionArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorkflowExecutionsCommand
 */
export const se_ListWorkflowExecutionsCommand = async (
  input: ListWorkflowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListWorkflowExecutions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      imageBuildVersionArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorkflowsCommand
 */
export const se_ListWorkflowsCommand = async (
  input: ListWorkflowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListWorkflows");
  let body: any;
  body = JSON.stringify(
    take(input, {
      byName: [],
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      owner: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorkflowStepExecutionsCommand
 */
export const se_ListWorkflowStepExecutionsCommand = async (
  input: ListWorkflowStepExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListWorkflowStepExecutions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      workflowExecutionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutComponentPolicyCommand
 */
export const se_PutComponentPolicyCommand = async (
  input: PutComponentPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PutComponentPolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      componentArn: [],
      policy: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutContainerRecipePolicyCommand
 */
export const se_PutContainerRecipePolicyCommand = async (
  input: PutContainerRecipePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PutContainerRecipePolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      containerRecipeArn: [],
      policy: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutImagePolicyCommand
 */
export const se_PutImagePolicyCommand = async (
  input: PutImagePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PutImagePolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      imageArn: [],
      policy: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutImageRecipePolicyCommand
 */
export const se_PutImageRecipePolicyCommand = async (
  input: PutImageRecipePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PutImageRecipePolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      imageRecipeArn: [],
      policy: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendWorkflowStepActionCommand
 */
export const se_SendWorkflowStepActionCommand = async (
  input: SendWorkflowStepActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/SendWorkflowStepAction");
  let body: any;
  body = JSON.stringify(
    take(input, {
      action: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      imageBuildVersionArn: [],
      reason: [],
      stepExecutionId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartImagePipelineExecutionCommand
 */
export const se_StartImagePipelineExecutionCommand = async (
  input: StartImagePipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StartImagePipelineExecution");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      imagePipelineArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartResourceStateUpdateCommand
 */
export const se_StartResourceStateUpdateCommand = async (
  input: StartResourceStateUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StartResourceStateUpdate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      exclusionRules: (_) => _json(_),
      executionRole: [],
      includeResources: (_) => _json(_),
      resourceArn: [],
      state: (_) => _json(_),
      updateAt: (_) => _.getTime() / 1_000,
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDistributionConfigurationCommand
 */
export const se_UpdateDistributionConfigurationCommand = async (
  input: UpdateDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateDistributionConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      distributionConfigurationArn: [],
      distributions: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateImagePipelineCommand
 */
export const se_UpdateImagePipelineCommand = async (
  input: UpdateImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateImagePipeline");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      containerRecipeArn: [],
      description: [],
      distributionConfigurationArn: [],
      enhancedImageMetadataEnabled: [],
      executionRole: [],
      imagePipelineArn: [],
      imageRecipeArn: [],
      imageScanningConfiguration: (_) => _json(_),
      imageTestsConfiguration: (_) => _json(_),
      infrastructureConfigurationArn: [],
      schedule: (_) => _json(_),
      status: [],
      workflows: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateInfrastructureConfigurationCommand
 */
export const se_UpdateInfrastructureConfigurationCommand = async (
  input: UpdateInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateInfrastructureConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      infrastructureConfigurationArn: [],
      instanceMetadataOptions: (_) => _json(_),
      instanceProfileName: [],
      instanceTypes: (_) => _json(_),
      keyPair: [],
      logging: (_) => _json(_),
      placement: (_) => _json(_),
      resourceTags: (_) => _json(_),
      securityGroupIds: (_) => _json(_),
      snsTopicArn: [],
      subnetId: [],
      terminateInstanceOnFailure: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateLifecyclePolicyCommand
 */
export const se_UpdateLifecyclePolicyCommand = async (
  input: UpdateLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateLifecyclePolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      executionRole: [],
      lifecyclePolicyArn: [],
      policyDetails: (_) => _json(_),
      resourceSelection: (_) => _json(_),
      resourceType: [],
      status: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CancelImageCreationCommand
 */
export const de_CancelImageCreationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelImageCreationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientToken: __expectString,
    imageBuildVersionArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelLifecycleExecutionCommand
 */
export const de_CancelLifecycleExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelLifecycleExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    lifecycleExecutionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateComponentCommand
 */
export const de_CreateComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientToken: __expectString,
    componentBuildVersionArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateContainerRecipeCommand
 */
export const de_CreateContainerRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientToken: __expectString,
    containerRecipeArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDistributionConfigurationCommand
 */
export const de_CreateDistributionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientToken: __expectString,
    distributionConfigurationArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateImageCommand
 */
export const de_CreateImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientToken: __expectString,
    imageBuildVersionArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateImagePipelineCommand
 */
export const de_CreateImagePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImagePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientToken: __expectString,
    imagePipelineArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateImageRecipeCommand
 */
export const de_CreateImageRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientToken: __expectString,
    imageRecipeArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateInfrastructureConfigurationCommand
 */
export const de_CreateInfrastructureConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInfrastructureConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientToken: __expectString,
    infrastructureConfigurationArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLifecyclePolicyCommand
 */
export const de_CreateLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientToken: __expectString,
    lifecyclePolicyArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkflowCommand
 */
export const de_CreateWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientToken: __expectString,
    workflowBuildVersionArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteComponentCommand
 */
export const de_DeleteComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    componentBuildVersionArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteContainerRecipeCommand
 */
export const de_DeleteContainerRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    containerRecipeArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDistributionConfigurationCommand
 */
export const de_DeleteDistributionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDistributionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    distributionConfigurationArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteImageCommand
 */
export const de_DeleteImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    imageBuildVersionArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteImagePipelineCommand
 */
export const de_DeleteImagePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImagePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    imagePipelineArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteImageRecipeCommand
 */
export const de_DeleteImageRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    imageRecipeArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteInfrastructureConfigurationCommand
 */
export const de_DeleteInfrastructureConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInfrastructureConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    infrastructureConfigurationArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLifecyclePolicyCommand
 */
export const de_DeleteLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    lifecyclePolicyArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorkflowCommand
 */
export const de_DeleteWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    workflowBuildVersionArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetComponentCommand
 */
export const de_GetComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    component: _json,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetComponentPolicyCommand
 */
export const de_GetComponentPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetContainerRecipeCommand
 */
export const de_GetContainerRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    containerRecipe: _json,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetContainerRecipePolicyCommand
 */
export const de_GetContainerRecipePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerRecipePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDistributionConfigurationCommand
 */
export const de_GetDistributionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    distributionConfiguration: _json,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetImageCommand
 */
export const de_GetImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    image: (_) => de_Image(_, context),
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetImagePipelineCommand
 */
export const de_GetImagePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    imagePipeline: _json,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetImagePolicyCommand
 */
export const de_GetImagePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetImageRecipeCommand
 */
export const de_GetImageRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    imageRecipe: _json,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetImageRecipePolicyCommand
 */
export const de_GetImageRecipePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageRecipePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetInfrastructureConfigurationCommand
 */
export const de_GetInfrastructureConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInfrastructureConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    infrastructureConfiguration: _json,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLifecycleExecutionCommand
 */
export const de_GetLifecycleExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecycleExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    lifecycleExecution: (_) => de_LifecycleExecution(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLifecyclePolicyCommand
 */
export const de_GetLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    lifecyclePolicy: (_) => de_LifecyclePolicy(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMarketplaceResourceCommand
 */
export const de_GetMarketplaceResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMarketplaceResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    data: __expectString,
    resourceArn: __expectString,
    url: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkflowCommand
 */
export const de_GetWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    workflow: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkflowExecutionCommand
 */
export const de_GetWorkflowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    endTime: __expectString,
    imageBuildVersionArn: __expectString,
    message: __expectString,
    parallelGroup: __expectString,
    requestId: __expectString,
    startTime: __expectString,
    status: __expectString,
    totalStepCount: __expectInt32,
    totalStepsFailed: __expectInt32,
    totalStepsSkipped: __expectInt32,
    totalStepsSucceeded: __expectInt32,
    type: __expectString,
    workflowBuildVersionArn: __expectString,
    workflowExecutionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkflowStepExecutionCommand
 */
export const de_GetWorkflowStepExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowStepExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    action: __expectString,
    description: __expectString,
    endTime: __expectString,
    imageBuildVersionArn: __expectString,
    inputs: __expectString,
    message: __expectString,
    name: __expectString,
    onFailure: __expectString,
    outputs: __expectString,
    requestId: __expectString,
    rollbackStatus: __expectString,
    startTime: __expectString,
    status: __expectString,
    stepExecutionId: __expectString,
    timeoutSeconds: __expectInt32,
    workflowBuildVersionArn: __expectString,
    workflowExecutionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ImportComponentCommand
 */
export const de_ImportComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientToken: __expectString,
    componentBuildVersionArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ImportDiskImageCommand
 */
export const de_ImportDiskImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportDiskImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientToken: __expectString,
    imageBuildVersionArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ImportVmImageCommand
 */
export const de_ImportVmImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportVmImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientToken: __expectString,
    imageArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListComponentBuildVersionsCommand
 */
export const de_ListComponentBuildVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentBuildVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    componentSummaryList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListComponentsCommand
 */
export const de_ListComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    componentVersionList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListContainerRecipesCommand
 */
export const de_ListContainerRecipesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContainerRecipesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    containerRecipeSummaryList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDistributionConfigurationsCommand
 */
export const de_ListDistributionConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    distributionConfigurationSummaryList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListImageBuildVersionsCommand
 */
export const de_ListImageBuildVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageBuildVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    imageSummaryList: (_) => de_ImageSummaryList(_, context),
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListImagePackagesCommand
 */
export const de_ListImagePackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    imagePackageList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListImagePipelineImagesCommand
 */
export const de_ListImagePipelineImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePipelineImagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    imageSummaryList: (_) => de_ImageSummaryList(_, context),
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListImagePipelinesCommand
 */
export const de_ListImagePipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    imagePipelineList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListImageRecipesCommand
 */
export const de_ListImageRecipesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageRecipesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    imageRecipeSummaryList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListImagesCommand
 */
export const de_ListImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    imageVersionList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListImageScanFindingAggregationsCommand
 */
export const de_ListImageScanFindingAggregationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageScanFindingAggregationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aggregationType: __expectString,
    nextToken: __expectString,
    requestId: __expectString,
    responses: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListImageScanFindingsCommand
 */
export const de_ListImageScanFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageScanFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    findings: (_) => de_ImageScanFindingsList(_, context),
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListInfrastructureConfigurationsCommand
 */
export const de_ListInfrastructureConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInfrastructureConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    infrastructureConfigurationSummaryList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLifecycleExecutionResourcesCommand
 */
export const de_ListLifecycleExecutionResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLifecycleExecutionResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    lifecycleExecutionId: __expectString,
    lifecycleExecutionState: _json,
    nextToken: __expectString,
    resources: (_) => de_LifecycleExecutionResourceList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLifecycleExecutionsCommand
 */
export const de_ListLifecycleExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLifecycleExecutionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    lifecycleExecutions: (_) => de_LifecycleExecutionsList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLifecyclePoliciesCommand
 */
export const de_ListLifecyclePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLifecyclePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    lifecyclePolicySummaryList: (_) => de_LifecyclePolicySummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWaitingWorkflowStepsCommand
 */
export const de_ListWaitingWorkflowStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWaitingWorkflowStepsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    steps: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkflowBuildVersionsCommand
 */
export const de_ListWorkflowBuildVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowBuildVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    workflowSummaryList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkflowExecutionsCommand
 */
export const de_ListWorkflowExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowExecutionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    imageBuildVersionArn: __expectString,
    message: __expectString,
    nextToken: __expectString,
    requestId: __expectString,
    workflowExecutions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkflowsCommand
 */
export const de_ListWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    workflowVersionList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkflowStepExecutionsCommand
 */
export const de_ListWorkflowStepExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowStepExecutionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    imageBuildVersionArn: __expectString,
    message: __expectString,
    nextToken: __expectString,
    requestId: __expectString,
    steps: _json,
    workflowBuildVersionArn: __expectString,
    workflowExecutionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutComponentPolicyCommand
 */
export const de_PutComponentPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutComponentPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    componentArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutContainerRecipePolicyCommand
 */
export const de_PutContainerRecipePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutContainerRecipePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    containerRecipeArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutImagePolicyCommand
 */
export const de_PutImagePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImagePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    imageArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutImageRecipePolicyCommand
 */
export const de_PutImageRecipePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageRecipePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    imageRecipeArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SendWorkflowStepActionCommand
 */
export const de_SendWorkflowStepActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendWorkflowStepActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientToken: __expectString,
    imageBuildVersionArn: __expectString,
    stepExecutionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartImagePipelineExecutionCommand
 */
export const de_StartImagePipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImagePipelineExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientToken: __expectString,
    imageBuildVersionArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartResourceStateUpdateCommand
 */
export const de_StartResourceStateUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartResourceStateUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    lifecycleExecutionId: __expectString,
    resourceArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDistributionConfigurationCommand
 */
export const de_UpdateDistributionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientToken: __expectString,
    distributionConfigurationArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateImagePipelineCommand
 */
export const de_UpdateImagePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImagePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientToken: __expectString,
    imagePipelineArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateInfrastructureConfigurationCommand
 */
export const de_UpdateInfrastructureConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInfrastructureConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientToken: __expectString,
    infrastructureConfigurationArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLifecyclePolicyCommand
 */
export const de_UpdateLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLifecyclePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    lifecyclePolicyArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidVersionNumberException":
    case "com.amazonaws.imagebuilder#InvalidVersionNumberException":
      throw await de_InvalidVersionNumberExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      throw await de_ResourceDependencyExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.imagebuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.imagebuilder#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1CallRateLimitExceededExceptionRes
 */
const de_CallRateLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CallRateLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new CallRateLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ClientExceptionRes
 */
const de_ClientExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1IdempotentParameterMismatchExceptionRes
 */
const de_IdempotentParameterMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidPaginationTokenExceptionRes
 */
const de_InvalidPaginationTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationTokenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidPaginationTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidParameterCombinationExceptionRes
 */
const de_InvalidParameterCombinationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidParameterCombinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidParameterValueExceptionRes
 */
const de_InvalidParameterValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidVersionNumberExceptionRes
 */
const de_InvalidVersionNumberExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidVersionNumberException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidVersionNumberException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceDependencyExceptionRes
 */
const de_ResourceDependencyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceDependencyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceDependencyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceExceptionRes
 */
const de_ServiceExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AccountList omitted.

// se_AdditionalInstanceConfiguration omitted.

// se_AmiDistributionConfiguration omitted.

// se_ComponentConfiguration omitted.

// se_ComponentConfigurationList omitted.

// se_ComponentParameter omitted.

// se_ComponentParameterList omitted.

// se_ComponentParameterValueList omitted.

// se_ContainerDistributionConfiguration omitted.

// se_Distribution omitted.

// se_DistributionList omitted.

// se_EbsInstanceBlockDeviceSpecification omitted.

// se_EcrConfiguration omitted.

// se_FastLaunchConfiguration omitted.

// se_FastLaunchConfigurationList omitted.

// se_FastLaunchLaunchTemplateSpecification omitted.

// se_FastLaunchSnapshotConfiguration omitted.

// se_Filter omitted.

// se_FilterList omitted.

// se_FilterValues omitted.

// se_ImageScanFindingsFilter omitted.

// se_ImageScanFindingsFilterList omitted.

// se_ImageScanFindingsFilterValues omitted.

// se_ImageScanningConfiguration omitted.

// se_ImageTestsConfiguration omitted.

// se_InstanceBlockDeviceMapping omitted.

// se_InstanceBlockDeviceMappings omitted.

// se_InstanceConfiguration omitted.

// se_InstanceMetadataOptions omitted.

// se_InstanceTypeList omitted.

// se_LaunchPermissionConfiguration omitted.

// se_LaunchTemplateConfiguration omitted.

// se_LaunchTemplateConfigurationList omitted.

// se_LicenseConfigurationArnList omitted.

// se_LifecyclePolicyDetail omitted.

// se_LifecyclePolicyDetailAction omitted.

// se_LifecyclePolicyDetailActionIncludeResources omitted.

// se_LifecyclePolicyDetailExclusionRules omitted.

// se_LifecyclePolicyDetailExclusionRulesAmis omitted.

// se_LifecyclePolicyDetailExclusionRulesAmisLastLaunched omitted.

// se_LifecyclePolicyDetailFilter omitted.

// se_LifecyclePolicyDetails omitted.

// se_LifecyclePolicyResourceSelection omitted.

// se_LifecyclePolicyResourceSelectionRecipe omitted.

// se_LifecyclePolicyResourceSelectionRecipes omitted.

// se_Logging omitted.

// se_OrganizationalUnitArnList omitted.

// se_OrganizationArnList omitted.

// se_OsVersionList omitted.

// se_Placement omitted.

// se_ResourceState omitted.

// se_ResourceStateUpdateExclusionRules omitted.

// se_ResourceStateUpdateIncludeResources omitted.

// se_ResourceTagMap omitted.

// se_S3ExportConfiguration omitted.

// se_S3Logs omitted.

// se_Schedule omitted.

// se_SecurityGroupIds omitted.

// se_SsmParameterConfiguration omitted.

// se_SsmParameterConfigurationList omitted.

// se_StringList omitted.

// se_SystemsManagerAgent omitted.

// se_TagMap omitted.

// se_TargetContainerRepository omitted.

// se_WorkflowConfiguration omitted.

// se_WorkflowConfigurationList omitted.

// se_WorkflowParameter omitted.

// se_WorkflowParameterList omitted.

// se_WorkflowParameterValueList omitted.

// de_AccountAggregation omitted.

// de_AccountList omitted.

// de_AdditionalInstanceConfiguration omitted.

// de_Ami omitted.

// de_AmiDistributionConfiguration omitted.

// de_AmiList omitted.

// de_Component omitted.

// de_ComponentConfiguration omitted.

// de_ComponentConfigurationList omitted.

// de_ComponentParameter omitted.

// de_ComponentParameterDetail omitted.

// de_ComponentParameterDetailList omitted.

// de_ComponentParameterList omitted.

// de_ComponentParameterValueList omitted.

// de_ComponentState omitted.

// de_ComponentSummary omitted.

// de_ComponentSummaryList omitted.

// de_ComponentVersion omitted.

// de_ComponentVersionList omitted.

// de_Container omitted.

// de_ContainerDistributionConfiguration omitted.

// de_ContainerList omitted.

// de_ContainerRecipe omitted.

// de_ContainerRecipeSummary omitted.

// de_ContainerRecipeSummaryList omitted.

/**
 * deserializeAws_restJson1CvssScore
 */
const de_CvssScore = (output: any, context: __SerdeContext): CvssScore => {
  return take(output, {
    baseScore: __limitedParseDouble,
    scoringVector: __expectString,
    source: __expectString,
    version: __expectString,
  }) as any;
};

// de_CvssScoreAdjustment omitted.

// de_CvssScoreAdjustmentList omitted.

/**
 * deserializeAws_restJson1CvssScoreDetails
 */
const de_CvssScoreDetails = (output: any, context: __SerdeContext): CvssScoreDetails => {
  return take(output, {
    adjustments: _json,
    cvssSource: __expectString,
    score: __limitedParseDouble,
    scoreSource: __expectString,
    scoringVector: __expectString,
    version: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CvssScoreList
 */
const de_CvssScoreList = (output: any, context: __SerdeContext): CvssScore[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CvssScore(entry, context);
    });
  return retVal;
};

// de_Distribution omitted.

// de_DistributionConfiguration omitted.

// de_DistributionConfigurationSummary omitted.

// de_DistributionConfigurationSummaryList omitted.

// de_DistributionList omitted.

// de_EbsInstanceBlockDeviceSpecification omitted.

// de_EcrConfiguration omitted.

// de_FastLaunchConfiguration omitted.

// de_FastLaunchConfigurationList omitted.

// de_FastLaunchLaunchTemplateSpecification omitted.

// de_FastLaunchSnapshotConfiguration omitted.

/**
 * deserializeAws_restJson1Image
 */
const de_Image = (output: any, context: __SerdeContext): Image => {
  return take(output, {
    arn: __expectString,
    buildType: __expectString,
    containerRecipe: _json,
    dateCreated: __expectString,
    deprecationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    distributionConfiguration: _json,
    enhancedImageMetadataEnabled: __expectBoolean,
    executionRole: __expectString,
    imageRecipe: _json,
    imageScanningConfiguration: _json,
    imageSource: __expectString,
    imageTestsConfiguration: _json,
    infrastructureConfiguration: _json,
    lifecycleExecutionId: __expectString,
    name: __expectString,
    osVersion: __expectString,
    outputResources: _json,
    platform: __expectString,
    scanState: _json,
    sourcePipelineArn: __expectString,
    sourcePipelineName: __expectString,
    state: _json,
    tags: _json,
    type: __expectString,
    version: __expectString,
    workflows: _json,
  }) as any;
};

// de_ImageAggregation omitted.

// de_ImagePackage omitted.

// de_ImagePackageList omitted.

// de_ImagePipeline omitted.

// de_ImagePipelineAggregation omitted.

// de_ImagePipelineList omitted.

// de_ImageRecipe omitted.

// de_ImageRecipeSummary omitted.

// de_ImageRecipeSummaryList omitted.

/**
 * deserializeAws_restJson1ImageScanFinding
 */
const de_ImageScanFinding = (output: any, context: __SerdeContext): ImageScanFinding => {
  return take(output, {
    awsAccountId: __expectString,
    description: __expectString,
    firstObservedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    fixAvailable: __expectString,
    imageBuildVersionArn: __expectString,
    imagePipelineArn: __expectString,
    inspectorScore: __limitedParseDouble,
    inspectorScoreDetails: (_: any) => de_InspectorScoreDetails(_, context),
    packageVulnerabilityDetails: (_: any) => de_PackageVulnerabilityDetails(_, context),
    remediation: _json,
    severity: __expectString,
    title: __expectString,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ImageScanFindingAggregation omitted.

// de_ImageScanFindingAggregationsList omitted.

/**
 * deserializeAws_restJson1ImageScanFindingsList
 */
const de_ImageScanFindingsList = (output: any, context: __SerdeContext): ImageScanFinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImageScanFinding(entry, context);
    });
  return retVal;
};

// de_ImageScanningConfiguration omitted.

// de_ImageScanState omitted.

// de_ImageState omitted.

/**
 * deserializeAws_restJson1ImageSummary
 */
const de_ImageSummary = (output: any, context: __SerdeContext): ImageSummary => {
  return take(output, {
    arn: __expectString,
    buildType: __expectString,
    dateCreated: __expectString,
    deprecationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    imageSource: __expectString,
    lifecycleExecutionId: __expectString,
    name: __expectString,
    osVersion: __expectString,
    outputResources: _json,
    owner: __expectString,
    platform: __expectString,
    state: _json,
    tags: _json,
    type: __expectString,
    version: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ImageSummaryList
 */
const de_ImageSummaryList = (output: any, context: __SerdeContext): ImageSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImageSummary(entry, context);
    });
  return retVal;
};

// de_ImageTestsConfiguration omitted.

// de_ImageVersion omitted.

// de_ImageVersionList omitted.

// de_InfrastructureConfiguration omitted.

// de_InfrastructureConfigurationSummary omitted.

// de_InfrastructureConfigurationSummaryList omitted.

/**
 * deserializeAws_restJson1InspectorScoreDetails
 */
const de_InspectorScoreDetails = (output: any, context: __SerdeContext): InspectorScoreDetails => {
  return take(output, {
    adjustedCvss: (_: any) => de_CvssScoreDetails(_, context),
  }) as any;
};

// de_InstanceBlockDeviceMapping omitted.

// de_InstanceBlockDeviceMappings omitted.

// de_InstanceConfiguration omitted.

// de_InstanceMetadataOptions omitted.

// de_InstanceTypeList omitted.

// de_LaunchPermissionConfiguration omitted.

// de_LaunchTemplateConfiguration omitted.

// de_LaunchTemplateConfigurationList omitted.

// de_LicenseConfigurationArnList omitted.

/**
 * deserializeAws_restJson1LifecycleExecution
 */
const de_LifecycleExecution = (output: any, context: __SerdeContext): LifecycleExecution => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lifecycleExecutionId: __expectString,
    lifecyclePolicyArn: __expectString,
    resourcesImpactedSummary: _json,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    state: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1LifecycleExecutionResource
 */
const de_LifecycleExecutionResource = (output: any, context: __SerdeContext): LifecycleExecutionResource => {
  return take(output, {
    accountId: __expectString,
    action: _json,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    imageUris: _json,
    region: __expectString,
    resourceId: __expectString,
    snapshots: _json,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    state: _json,
  }) as any;
};

// de_LifecycleExecutionResourceAction omitted.

/**
 * deserializeAws_restJson1LifecycleExecutionResourceList
 */
const de_LifecycleExecutionResourceList = (output: any, context: __SerdeContext): LifecycleExecutionResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LifecycleExecutionResource(entry, context);
    });
  return retVal;
};

// de_LifecycleExecutionResourcesImpactedSummary omitted.

// de_LifecycleExecutionResourceState omitted.

/**
 * deserializeAws_restJson1LifecycleExecutionsList
 */
const de_LifecycleExecutionsList = (output: any, context: __SerdeContext): LifecycleExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LifecycleExecution(entry, context);
    });
  return retVal;
};

// de_LifecycleExecutionSnapshotResource omitted.

// de_LifecycleExecutionSnapshotResourceList omitted.

// de_LifecycleExecutionState omitted.

/**
 * deserializeAws_restJson1LifecyclePolicy
 */
const de_LifecyclePolicy = (output: any, context: __SerdeContext): LifecyclePolicy => {
  return take(output, {
    arn: __expectString,
    dateCreated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dateLastRun: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dateUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    executionRole: __expectString,
    name: __expectString,
    policyDetails: _json,
    resourceSelection: _json,
    resourceType: __expectString,
    status: __expectString,
    tags: _json,
  }) as any;
};

// de_LifecyclePolicyDetail omitted.

// de_LifecyclePolicyDetailAction omitted.

// de_LifecyclePolicyDetailActionIncludeResources omitted.

// de_LifecyclePolicyDetailExclusionRules omitted.

// de_LifecyclePolicyDetailExclusionRulesAmis omitted.

// de_LifecyclePolicyDetailExclusionRulesAmisLastLaunched omitted.

// de_LifecyclePolicyDetailFilter omitted.

// de_LifecyclePolicyDetails omitted.

// de_LifecyclePolicyResourceSelection omitted.

// de_LifecyclePolicyResourceSelectionRecipe omitted.

// de_LifecyclePolicyResourceSelectionRecipes omitted.

/**
 * deserializeAws_restJson1LifecyclePolicySummary
 */
const de_LifecyclePolicySummary = (output: any, context: __SerdeContext): LifecyclePolicySummary => {
  return take(output, {
    arn: __expectString,
    dateCreated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dateLastRun: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dateUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    executionRole: __expectString,
    name: __expectString,
    resourceType: __expectString,
    status: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1LifecyclePolicySummaryList
 */
const de_LifecyclePolicySummaryList = (output: any, context: __SerdeContext): LifecyclePolicySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LifecyclePolicySummary(entry, context);
    });
  return retVal;
};

// de_Logging omitted.

// de_NonEmptyStringList omitted.

// de_OrganizationalUnitArnList omitted.

// de_OrganizationArnList omitted.

// de_OsVersionList omitted.

// de_OutputResources omitted.

/**
 * deserializeAws_restJson1PackageVulnerabilityDetails
 */
const de_PackageVulnerabilityDetails = (output: any, context: __SerdeContext): PackageVulnerabilityDetails => {
  return take(output, {
    cvss: (_: any) => de_CvssScoreList(_, context),
    referenceUrls: _json,
    relatedVulnerabilities: _json,
    source: __expectString,
    sourceUrl: __expectString,
    vendorCreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    vendorSeverity: __expectString,
    vendorUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    vulnerabilityId: __expectString,
    vulnerablePackages: _json,
  }) as any;
};

// de_Placement omitted.

// de_ProductCodeList omitted.

// de_ProductCodeListItem omitted.

// de_RegionList omitted.

// de_Remediation omitted.

// de_RemediationRecommendation omitted.

// de_ResourceTagMap omitted.

// de_S3ExportConfiguration omitted.

// de_S3Logs omitted.

// de_Schedule omitted.

// de_SecurityGroupIds omitted.

// de_SeverityCounts omitted.

// de_SsmParameterConfiguration omitted.

// de_SsmParameterConfigurationList omitted.

// de_StringList omitted.

// de_SystemsManagerAgent omitted.

// de_TagMap omitted.

// de_TargetContainerRepository omitted.

// de_VulnerabilityIdAggregation omitted.

// de_VulnerabilityIdList omitted.

// de_VulnerablePackage omitted.

// de_VulnerablePackageList omitted.

// de_Workflow omitted.

// de_WorkflowConfiguration omitted.

// de_WorkflowConfigurationList omitted.

// de_WorkflowExecutionMetadata omitted.

// de_WorkflowExecutionsList omitted.

// de_WorkflowParameter omitted.

// de_WorkflowParameterDetail omitted.

// de_WorkflowParameterDetailList omitted.

// de_WorkflowParameterList omitted.

// de_WorkflowParameterValueList omitted.

// de_WorkflowState omitted.

// de_WorkflowStepExecution omitted.

// de_WorkflowStepExecutionList omitted.

// de_WorkflowStepExecutionsList omitted.

// de_WorkflowStepMetadata omitted.

// de_WorkflowSummary omitted.

// de_WorkflowSummaryList omitted.

// de_WorkflowVersion omitted.

// de_WorkflowVersionList omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _cA = "componentArn";
const _cBVA = "componentBuildVersionArn";
const _cRA = "containerRecipeArn";
const _dCA = "distributionConfigurationArn";
const _iA = "imageArn";
const _iBVA = "imageBuildVersionArn";
const _iCA = "infrastructureConfigurationArn";
const _iPA = "imagePipelineArn";
const _iRA = "imageRecipeArn";
const _lEI = "lifecycleExecutionId";
const _lPA = "lifecyclePolicyArn";
const _sEI = "stepExecutionId";
const _tK = "tagKeys";
const _wBVA = "workflowBuildVersionArn";
const _wEI = "workflowExecutionId";
