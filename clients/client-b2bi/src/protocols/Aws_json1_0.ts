// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  limitedParseFloat32 as __limitedParseFloat32,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateCapabilityCommandInput, CreateCapabilityCommandOutput } from "../commands/CreateCapabilityCommand";
import { CreatePartnershipCommandInput, CreatePartnershipCommandOutput } from "../commands/CreatePartnershipCommand";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "../commands/CreateProfileCommand";
import {
  CreateStarterMappingTemplateCommandInput,
  CreateStarterMappingTemplateCommandOutput,
} from "../commands/CreateStarterMappingTemplateCommand";
import { CreateTransformerCommandInput, CreateTransformerCommandOutput } from "../commands/CreateTransformerCommand";
import { DeleteCapabilityCommandInput, DeleteCapabilityCommandOutput } from "../commands/DeleteCapabilityCommand";
import { DeletePartnershipCommandInput, DeletePartnershipCommandOutput } from "../commands/DeletePartnershipCommand";
import { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "../commands/DeleteProfileCommand";
import { DeleteTransformerCommandInput, DeleteTransformerCommandOutput } from "../commands/DeleteTransformerCommand";
import { GenerateMappingCommandInput, GenerateMappingCommandOutput } from "../commands/GenerateMappingCommand";
import { GetCapabilityCommandInput, GetCapabilityCommandOutput } from "../commands/GetCapabilityCommand";
import { GetPartnershipCommandInput, GetPartnershipCommandOutput } from "../commands/GetPartnershipCommand";
import { GetProfileCommandInput, GetProfileCommandOutput } from "../commands/GetProfileCommand";
import { GetTransformerCommandInput, GetTransformerCommandOutput } from "../commands/GetTransformerCommand";
import { GetTransformerJobCommandInput, GetTransformerJobCommandOutput } from "../commands/GetTransformerJobCommand";
import { ListCapabilitiesCommandInput, ListCapabilitiesCommandOutput } from "../commands/ListCapabilitiesCommand";
import { ListPartnershipsCommandInput, ListPartnershipsCommandOutput } from "../commands/ListPartnershipsCommand";
import { ListProfilesCommandInput, ListProfilesCommandOutput } from "../commands/ListProfilesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTransformersCommandInput, ListTransformersCommandOutput } from "../commands/ListTransformersCommand";
import {
  StartTransformerJobCommandInput,
  StartTransformerJobCommandOutput,
} from "../commands/StartTransformerJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TestConversionCommandInput, TestConversionCommandOutput } from "../commands/TestConversionCommand";
import { TestMappingCommandInput, TestMappingCommandOutput } from "../commands/TestMappingCommand";
import { TestParsingCommandInput, TestParsingCommandOutput } from "../commands/TestParsingCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateCapabilityCommandInput, UpdateCapabilityCommandOutput } from "../commands/UpdateCapabilityCommand";
import { UpdatePartnershipCommandInput, UpdatePartnershipCommandOutput } from "../commands/UpdatePartnershipCommand";
import { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "../commands/UpdateProfileCommand";
import { UpdateTransformerCommandInput, UpdateTransformerCommandOutput } from "../commands/UpdateTransformerCommand";
import { B2biServiceException as __BaseException } from "../models/B2biServiceException";
import {
  AccessDeniedException,
  AdvancedOptions,
  CapabilityConfiguration,
  CapabilityOptions,
  CapabilitySummary,
  ConflictException,
  ConversionSource,
  ConversionTarget,
  ConversionTargetFormatDetails,
  CreateCapabilityRequest,
  CreateCapabilityResponse,
  CreatePartnershipRequest,
  CreatePartnershipResponse,
  CreateProfileRequest,
  CreateProfileResponse,
  CreateStarterMappingTemplateRequest,
  CreateTransformerRequest,
  CreateTransformerResponse,
  DeleteCapabilityRequest,
  DeletePartnershipRequest,
  DeleteProfileRequest,
  DeleteTransformerRequest,
  EdiConfiguration,
  EdiType,
  FormatOptions,
  GenerateMappingRequest,
  GenerateMappingResponse,
  GetCapabilityRequest,
  GetCapabilityResponse,
  GetPartnershipRequest,
  GetPartnershipResponse,
  GetProfileRequest,
  GetProfileResponse,
  GetTransformerJobRequest,
  GetTransformerRequest,
  GetTransformerResponse,
  InboundEdiOptions,
  InputConversion,
  InputFileSource,
  InternalServerException,
  ListCapabilitiesRequest,
  ListCapabilitiesResponse,
  ListPartnershipsRequest,
  ListPartnershipsResponse,
  ListProfilesRequest,
  ListProfilesResponse,
  ListTagsForResourceRequest,
  ListTransformersRequest,
  ListTransformersResponse,
  Mapping,
  OutboundEdiOptions,
  OutputConversion,
  OutputSampleFileSource,
  PartnershipSummary,
  ProfileSummary,
  ResourceNotFoundException,
  S3Location,
  SampleDocumentKeys,
  SampleDocuments,
  ServiceQuotaExceededException,
  StartTransformerJobRequest,
  Tag,
  TagResourceRequest,
  TemplateDetails,
  TestConversionRequest,
  TestMappingRequest,
  TestParsingRequest,
  ThrottlingException,
  TransformerSummary,
  UntagResourceRequest,
  UpdateCapabilityRequest,
  UpdateCapabilityResponse,
  UpdatePartnershipRequest,
  UpdatePartnershipResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
  UpdateTransformerRequest,
  UpdateTransformerResponse,
  ValidationException,
  WrapOptions,
  X12AcknowledgmentOptions,
  X12AdvancedOptions,
  X12ControlNumbers,
  X12Delimiters,
  X12Details,
  X12Envelope,
  X12FunctionalGroupHeaders,
  X12InboundEdiOptions,
  X12InterchangeControlHeaders,
  X12OutboundEdiHeaders,
  X12SplitOptions,
} from "../models/models_0";

/**
 * serializeAws_json1_0CreateCapabilityCommand
 */
export const se_CreateCapabilityCommand = async (
  input: CreateCapabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCapability");
  let body: any;
  body = JSON.stringify(se_CreateCapabilityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreatePartnershipCommand
 */
export const se_CreatePartnershipCommand = async (
  input: CreatePartnershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePartnership");
  let body: any;
  body = JSON.stringify(se_CreatePartnershipRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateProfileCommand
 */
export const se_CreateProfileCommand = async (
  input: CreateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateProfile");
  let body: any;
  body = JSON.stringify(se_CreateProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateStarterMappingTemplateCommand
 */
export const se_CreateStarterMappingTemplateCommand = async (
  input: CreateStarterMappingTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateStarterMappingTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateTransformerCommand
 */
export const se_CreateTransformerCommand = async (
  input: CreateTransformerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTransformer");
  let body: any;
  body = JSON.stringify(se_CreateTransformerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteCapabilityCommand
 */
export const se_DeleteCapabilityCommand = async (
  input: DeleteCapabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCapability");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeletePartnershipCommand
 */
export const se_DeletePartnershipCommand = async (
  input: DeletePartnershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePartnership");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteProfileCommand
 */
export const se_DeleteProfileCommand = async (
  input: DeleteProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteTransformerCommand
 */
export const se_DeleteTransformerCommand = async (
  input: DeleteTransformerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTransformer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GenerateMappingCommand
 */
export const se_GenerateMappingCommand = async (
  input: GenerateMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GenerateMapping");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetCapabilityCommand
 */
export const se_GetCapabilityCommand = async (
  input: GetCapabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCapability");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetPartnershipCommand
 */
export const se_GetPartnershipCommand = async (
  input: GetPartnershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPartnership");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetProfileCommand
 */
export const se_GetProfileCommand = async (
  input: GetProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetTransformerCommand
 */
export const se_GetTransformerCommand = async (
  input: GetTransformerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTransformer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetTransformerJobCommand
 */
export const se_GetTransformerJobCommand = async (
  input: GetTransformerJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTransformerJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListCapabilitiesCommand
 */
export const se_ListCapabilitiesCommand = async (
  input: ListCapabilitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCapabilities");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListPartnershipsCommand
 */
export const se_ListPartnershipsCommand = async (
  input: ListPartnershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPartnerships");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListProfilesCommand
 */
export const se_ListProfilesCommand = async (
  input: ListProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListProfiles");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTransformersCommand
 */
export const se_ListTransformersCommand = async (
  input: ListTransformersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTransformers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartTransformerJobCommand
 */
export const se_StartTransformerJobCommand = async (
  input: StartTransformerJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartTransformerJob");
  let body: any;
  body = JSON.stringify(se_StartTransformerJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TestConversionCommand
 */
export const se_TestConversionCommand = async (
  input: TestConversionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TestConversion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TestMappingCommand
 */
export const se_TestMappingCommand = async (
  input: TestMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TestMapping");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TestParsingCommand
 */
export const se_TestParsingCommand = async (
  input: TestParsingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TestParsing");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateCapabilityCommand
 */
export const se_UpdateCapabilityCommand = async (
  input: UpdateCapabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCapability");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdatePartnershipCommand
 */
export const se_UpdatePartnershipCommand = async (
  input: UpdatePartnershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePartnership");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateProfileCommand
 */
export const se_UpdateProfileCommand = async (
  input: UpdateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateTransformerCommand
 */
export const se_UpdateTransformerCommand = async (
  input: UpdateTransformerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTransformer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0CreateCapabilityCommand
 */
export const de_CreateCapabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCapabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCapabilityResponse(data, context);
  const response: CreateCapabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreatePartnershipCommand
 */
export const de_CreatePartnershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartnershipCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePartnershipResponse(data, context);
  const response: CreatePartnershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateProfileCommand
 */
export const de_CreateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateProfileResponse(data, context);
  const response: CreateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateStarterMappingTemplateCommand
 */
export const de_CreateStarterMappingTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStarterMappingTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateStarterMappingTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateTransformerCommand
 */
export const de_CreateTransformerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTransformerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTransformerResponse(data, context);
  const response: CreateTransformerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteCapabilityCommand
 */
export const de_DeleteCapabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCapabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCapabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0DeletePartnershipCommand
 */
export const de_DeletePartnershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartnershipCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePartnershipCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteProfileCommand
 */
export const de_DeleteProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteTransformerCommand
 */
export const de_DeleteTransformerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTransformerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTransformerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0GenerateMappingCommand
 */
export const de_GenerateMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateMappingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GenerateMappingResponse(data, context);
  const response: GenerateMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetCapabilityCommand
 */
export const de_GetCapabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCapabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCapabilityResponse(data, context);
  const response: GetCapabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetPartnershipCommand
 */
export const de_GetPartnershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartnershipCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPartnershipResponse(data, context);
  const response: GetPartnershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetProfileCommand
 */
export const de_GetProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetProfileResponse(data, context);
  const response: GetProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetTransformerCommand
 */
export const de_GetTransformerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransformerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTransformerResponse(data, context);
  const response: GetTransformerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetTransformerJobCommand
 */
export const de_GetTransformerJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransformerJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetTransformerJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListCapabilitiesCommand
 */
export const de_ListCapabilitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCapabilitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCapabilitiesResponse(data, context);
  const response: ListCapabilitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListPartnershipsCommand
 */
export const de_ListPartnershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnershipsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPartnershipsResponse(data, context);
  const response: ListPartnershipsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListProfilesCommand
 */
export const de_ListProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListProfilesResponse(data, context);
  const response: ListProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListTransformersCommand
 */
export const de_ListTransformersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTransformersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTransformersResponse(data, context);
  const response: ListTransformersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StartTransformerJobCommand
 */
export const de_StartTransformerJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTransformerJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartTransformerJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0TestConversionCommand
 */
export const de_TestConversionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestConversionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TestConversionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0TestMappingCommand
 */
export const de_TestMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestMappingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TestMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0TestParsingCommand
 */
export const de_TestParsingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestParsingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TestParsingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateCapabilityCommand
 */
export const de_UpdateCapabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCapabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateCapabilityResponse(data, context);
  const response: UpdateCapabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdatePartnershipCommand
 */
export const de_UpdatePartnershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePartnershipCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePartnershipResponse(data, context);
  const response: UpdatePartnershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateProfileCommand
 */
export const de_UpdateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateProfileResponse(data, context);
  const response: UpdateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateTransformerCommand
 */
export const de_UpdateTransformerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTransformerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTransformerResponse(data, context);
  const response: UpdateTransformerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_0CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.b2bi#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.b2bi#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.b2bi#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.b2bi#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.b2bi#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.b2bi#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.b2bi#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_json1_0AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AdvancedOptions omitted.

// se_CapabilityConfiguration omitted.

// se_CapabilityOptions omitted.

// se_ConversionSource omitted.

// se_ConversionTarget omitted.

// se_ConversionTargetFormatDetails omitted.

/**
 * serializeAws_json1_0CreateCapabilityRequest
 */
const se_CreateCapabilityRequest = (input: CreateCapabilityRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    configuration: _json,
    instructionsDocuments: _json,
    name: [],
    tags: _json,
    type: [],
  });
};

/**
 * serializeAws_json1_0CreatePartnershipRequest
 */
const se_CreatePartnershipRequest = (input: CreatePartnershipRequest, context: __SerdeContext): any => {
  return take(input, {
    capabilities: _json,
    capabilityOptions: _json,
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    email: [],
    name: [],
    phone: [],
    profileId: [],
    tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateProfileRequest
 */
const se_CreateProfileRequest = (input: CreateProfileRequest, context: __SerdeContext): any => {
  return take(input, {
    businessName: [],
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    email: [],
    logging: [],
    name: [],
    phone: [],
    tags: _json,
  });
};

// se_CreateStarterMappingTemplateRequest omitted.

/**
 * serializeAws_json1_0CreateTransformerRequest
 */
const se_CreateTransformerRequest = (input: CreateTransformerRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ediType: _json,
    fileFormat: [],
    inputConversion: _json,
    mapping: _json,
    mappingTemplate: [],
    name: [],
    outputConversion: _json,
    sampleDocument: [],
    sampleDocuments: _json,
    tags: _json,
  });
};

// se_DeleteCapabilityRequest omitted.

// se_DeletePartnershipRequest omitted.

// se_DeleteProfileRequest omitted.

// se_DeleteTransformerRequest omitted.

// se_EdiConfiguration omitted.

// se_EdiType omitted.

// se_FormatOptions omitted.

// se_GenerateMappingRequest omitted.

// se_GetCapabilityRequest omitted.

// se_GetPartnershipRequest omitted.

// se_GetProfileRequest omitted.

// se_GetTransformerJobRequest omitted.

// se_GetTransformerRequest omitted.

// se_InboundEdiOptions omitted.

// se_InputConversion omitted.

// se_InputFileSource omitted.

// se_InstructionsDocuments omitted.

// se_KeyList omitted.

// se_ListCapabilitiesRequest omitted.

// se_ListPartnershipsRequest omitted.

// se_ListProfilesRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListTransformersRequest omitted.

// se_Mapping omitted.

// se_OutboundEdiOptions omitted.

// se_OutputConversion omitted.

// se_OutputSampleFileSource omitted.

// se_PartnershipCapabilities omitted.

// se_S3Location omitted.

// se_SampleDocumentKeys omitted.

// se_SampleDocuments omitted.

/**
 * serializeAws_json1_0StartTransformerJobRequest
 */
const se_StartTransformerJobRequest = (input: StartTransformerJobRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    inputFile: _json,
    outputLocation: _json,
    transformerId: [],
  });
};

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_TemplateDetails omitted.

// se_TestConversionRequest omitted.

// se_TestMappingRequest omitted.

// se_TestParsingRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateCapabilityRequest omitted.

// se_UpdatePartnershipRequest omitted.

// se_UpdateProfileRequest omitted.

// se_UpdateTransformerRequest omitted.

// se_WrapOptions omitted.

// se_X12AcknowledgmentOptions omitted.

// se_X12AdvancedOptions omitted.

// se_X12ControlNumbers omitted.

// se_X12Delimiters omitted.

// se_X12Details omitted.

// se_X12Envelope omitted.

// se_X12FunctionalGroupHeaders omitted.

// se_X12InboundEdiOptions omitted.

// se_X12InterchangeControlHeaders omitted.

// se_X12OutboundEdiHeaders omitted.

// se_X12SplitOptions omitted.

// de_AccessDeniedException omitted.

// de_AdvancedOptions omitted.

// de_CapabilityConfiguration omitted.

/**
 * deserializeAws_json1_0CapabilityList
 */
const de_CapabilityList = (output: any, context: __SerdeContext): CapabilitySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CapabilitySummary(entry, context);
    });
  return retVal;
};

// de_CapabilityOptions omitted.

/**
 * deserializeAws_json1_0CapabilitySummary
 */
const de_CapabilitySummary = (output: any, context: __SerdeContext): CapabilitySummary => {
  return take(output, {
    capabilityId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    type: __expectString,
  }) as any;
};

// de_ConflictException omitted.

/**
 * deserializeAws_json1_0CreateCapabilityResponse
 */
const de_CreateCapabilityResponse = (output: any, context: __SerdeContext): CreateCapabilityResponse => {
  return take(output, {
    capabilityArn: __expectString,
    capabilityId: __expectString,
    configuration: (_: any) => _json(__expectUnion(_)),
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    instructionsDocuments: _json,
    name: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0CreatePartnershipResponse
 */
const de_CreatePartnershipResponse = (output: any, context: __SerdeContext): CreatePartnershipResponse => {
  return take(output, {
    capabilities: _json,
    capabilityOptions: _json,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    email: __expectString,
    name: __expectString,
    partnershipArn: __expectString,
    partnershipId: __expectString,
    phone: __expectString,
    profileId: __expectString,
    tradingPartnerId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0CreateProfileResponse
 */
const de_CreateProfileResponse = (output: any, context: __SerdeContext): CreateProfileResponse => {
  return take(output, {
    businessName: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    email: __expectString,
    logGroupName: __expectString,
    logging: __expectString,
    name: __expectString,
    phone: __expectString,
    profileArn: __expectString,
    profileId: __expectString,
  }) as any;
};

// de_CreateStarterMappingTemplateResponse omitted.

/**
 * deserializeAws_json1_0CreateTransformerResponse
 */
const de_CreateTransformerResponse = (output: any, context: __SerdeContext): CreateTransformerResponse => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ediType: (_: any) => _json(__expectUnion(_)),
    fileFormat: __expectString,
    inputConversion: _json,
    mapping: _json,
    mappingTemplate: __expectString,
    name: __expectString,
    outputConversion: _json,
    sampleDocument: __expectString,
    sampleDocuments: _json,
    status: __expectString,
    transformerArn: __expectString,
    transformerId: __expectString,
  }) as any;
};

// de_EdiConfiguration omitted.

// de_EdiType omitted.

// de_FormatOptions omitted.

/**
 * deserializeAws_json1_0GenerateMappingResponse
 */
const de_GenerateMappingResponse = (output: any, context: __SerdeContext): GenerateMappingResponse => {
  return take(output, {
    mappingAccuracy: __limitedParseFloat32,
    mappingTemplate: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetCapabilityResponse
 */
const de_GetCapabilityResponse = (output: any, context: __SerdeContext): GetCapabilityResponse => {
  return take(output, {
    capabilityArn: __expectString,
    capabilityId: __expectString,
    configuration: (_: any) => _json(__expectUnion(_)),
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    instructionsDocuments: _json,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetPartnershipResponse
 */
const de_GetPartnershipResponse = (output: any, context: __SerdeContext): GetPartnershipResponse => {
  return take(output, {
    capabilities: _json,
    capabilityOptions: _json,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    email: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    partnershipArn: __expectString,
    partnershipId: __expectString,
    phone: __expectString,
    profileId: __expectString,
    tradingPartnerId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetProfileResponse
 */
const de_GetProfileResponse = (output: any, context: __SerdeContext): GetProfileResponse => {
  return take(output, {
    businessName: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    email: __expectString,
    logGroupName: __expectString,
    logging: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    phone: __expectString,
    profileArn: __expectString,
    profileId: __expectString,
  }) as any;
};

// de_GetTransformerJobResponse omitted.

/**
 * deserializeAws_json1_0GetTransformerResponse
 */
const de_GetTransformerResponse = (output: any, context: __SerdeContext): GetTransformerResponse => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ediType: (_: any) => _json(__expectUnion(_)),
    fileFormat: __expectString,
    inputConversion: _json,
    mapping: _json,
    mappingTemplate: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    outputConversion: _json,
    sampleDocument: __expectString,
    sampleDocuments: _json,
    status: __expectString,
    transformerArn: __expectString,
    transformerId: __expectString,
  }) as any;
};

// de_InboundEdiOptions omitted.

// de_InputConversion omitted.

// de_InstructionsDocuments omitted.

// de_InternalServerException omitted.

// de_KeyList omitted.

/**
 * deserializeAws_json1_0ListCapabilitiesResponse
 */
const de_ListCapabilitiesResponse = (output: any, context: __SerdeContext): ListCapabilitiesResponse => {
  return take(output, {
    capabilities: (_: any) => de_CapabilityList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListPartnershipsResponse
 */
const de_ListPartnershipsResponse = (output: any, context: __SerdeContext): ListPartnershipsResponse => {
  return take(output, {
    nextToken: __expectString,
    partnerships: (_: any) => de_PartnershipList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ListProfilesResponse
 */
const de_ListProfilesResponse = (output: any, context: __SerdeContext): ListProfilesResponse => {
  return take(output, {
    nextToken: __expectString,
    profiles: (_: any) => de_ProfileList(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

/**
 * deserializeAws_json1_0ListTransformersResponse
 */
const de_ListTransformersResponse = (output: any, context: __SerdeContext): ListTransformersResponse => {
  return take(output, {
    nextToken: __expectString,
    transformers: (_: any) => de_TransformerList(_, context),
  }) as any;
};

// de_Mapping omitted.

// de_OutboundEdiOptions omitted.

// de_OutputConversion omitted.

// de_ParsedSplitFileContentsList omitted.

// de_PartnershipCapabilities omitted.

/**
 * deserializeAws_json1_0PartnershipList
 */
const de_PartnershipList = (output: any, context: __SerdeContext): PartnershipSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PartnershipSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PartnershipSummary
 */
const de_PartnershipSummary = (output: any, context: __SerdeContext): PartnershipSummary => {
  return take(output, {
    capabilities: _json,
    capabilityOptions: _json,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    partnershipId: __expectString,
    profileId: __expectString,
    tradingPartnerId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ProfileList
 */
const de_ProfileList = (output: any, context: __SerdeContext): ProfileSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProfileSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ProfileSummary
 */
const de_ProfileSummary = (output: any, context: __SerdeContext): ProfileSummary => {
  return take(output, {
    businessName: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    logGroupName: __expectString,
    logging: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    profileId: __expectString,
  }) as any;
};

// de_ResourceNotFoundException omitted.

// de_S3Location omitted.

// de_S3LocationList omitted.

// de_SampleDocumentKeys omitted.

// de_SampleDocuments omitted.

// de_ServiceQuotaExceededException omitted.

// de_StartTransformerJobResponse omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TestConversionResponse omitted.

// de_TestMappingResponse omitted.

// de_TestParsingResponse omitted.

// de_ThrottlingException omitted.

/**
 * deserializeAws_json1_0TransformerList
 */
const de_TransformerList = (output: any, context: __SerdeContext): TransformerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TransformerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0TransformerSummary
 */
const de_TransformerSummary = (output: any, context: __SerdeContext): TransformerSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ediType: (_: any) => _json(__expectUnion(_)),
    fileFormat: __expectString,
    inputConversion: _json,
    mapping: _json,
    mappingTemplate: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    outputConversion: _json,
    sampleDocument: __expectString,
    sampleDocuments: _json,
    status: __expectString,
    transformerId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateCapabilityResponse
 */
const de_UpdateCapabilityResponse = (output: any, context: __SerdeContext): UpdateCapabilityResponse => {
  return take(output, {
    capabilityArn: __expectString,
    capabilityId: __expectString,
    configuration: (_: any) => _json(__expectUnion(_)),
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    instructionsDocuments: _json,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0UpdatePartnershipResponse
 */
const de_UpdatePartnershipResponse = (output: any, context: __SerdeContext): UpdatePartnershipResponse => {
  return take(output, {
    capabilities: _json,
    capabilityOptions: _json,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    email: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    partnershipArn: __expectString,
    partnershipId: __expectString,
    phone: __expectString,
    profileId: __expectString,
    tradingPartnerId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateProfileResponse
 */
const de_UpdateProfileResponse = (output: any, context: __SerdeContext): UpdateProfileResponse => {
  return take(output, {
    businessName: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    email: __expectString,
    logGroupName: __expectString,
    logging: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    phone: __expectString,
    profileArn: __expectString,
    profileId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateTransformerResponse
 */
const de_UpdateTransformerResponse = (output: any, context: __SerdeContext): UpdateTransformerResponse => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ediType: (_: any) => _json(__expectUnion(_)),
    fileFormat: __expectString,
    inputConversion: _json,
    mapping: _json,
    mappingTemplate: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    outputConversion: _json,
    sampleDocument: __expectString,
    sampleDocuments: _json,
    status: __expectString,
    transformerArn: __expectString,
    transformerId: __expectString,
  }) as any;
};

// de_ValidationException omitted.

// de_ValidationMessages omitted.

// de_WrapOptions omitted.

// de_X12AcknowledgmentOptions omitted.

// de_X12AdvancedOptions omitted.

// de_X12ControlNumbers omitted.

// de_X12Delimiters omitted.

// de_X12Details omitted.

// de_X12Envelope omitted.

// de_X12FunctionalGroupHeaders omitted.

// de_X12InboundEdiOptions omitted.

// de_X12InterchangeControlHeaders omitted.

// de_X12OutboundEdiHeaders omitted.

// de_X12SplitOptions omitted.

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

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `B2BI.${operation}`,
  };
}
