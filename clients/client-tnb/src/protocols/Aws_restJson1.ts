// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  CancelSolNetworkOperationCommandInput,
  CancelSolNetworkOperationCommandOutput,
} from "../commands/CancelSolNetworkOperationCommand";
import {
  CreateSolFunctionPackageCommandInput,
  CreateSolFunctionPackageCommandOutput,
} from "../commands/CreateSolFunctionPackageCommand";
import {
  CreateSolNetworkInstanceCommandInput,
  CreateSolNetworkInstanceCommandOutput,
} from "../commands/CreateSolNetworkInstanceCommand";
import {
  CreateSolNetworkPackageCommandInput,
  CreateSolNetworkPackageCommandOutput,
} from "../commands/CreateSolNetworkPackageCommand";
import {
  DeleteSolFunctionPackageCommandInput,
  DeleteSolFunctionPackageCommandOutput,
} from "../commands/DeleteSolFunctionPackageCommand";
import {
  DeleteSolNetworkInstanceCommandInput,
  DeleteSolNetworkInstanceCommandOutput,
} from "../commands/DeleteSolNetworkInstanceCommand";
import {
  DeleteSolNetworkPackageCommandInput,
  DeleteSolNetworkPackageCommandOutput,
} from "../commands/DeleteSolNetworkPackageCommand";
import {
  GetSolFunctionInstanceCommandInput,
  GetSolFunctionInstanceCommandOutput,
} from "../commands/GetSolFunctionInstanceCommand";
import {
  GetSolFunctionPackageCommandInput,
  GetSolFunctionPackageCommandOutput,
} from "../commands/GetSolFunctionPackageCommand";
import {
  GetSolFunctionPackageContentCommandInput,
  GetSolFunctionPackageContentCommandOutput,
} from "../commands/GetSolFunctionPackageContentCommand";
import {
  GetSolFunctionPackageDescriptorCommandInput,
  GetSolFunctionPackageDescriptorCommandOutput,
} from "../commands/GetSolFunctionPackageDescriptorCommand";
import {
  GetSolNetworkInstanceCommandInput,
  GetSolNetworkInstanceCommandOutput,
} from "../commands/GetSolNetworkInstanceCommand";
import {
  GetSolNetworkOperationCommandInput,
  GetSolNetworkOperationCommandOutput,
} from "../commands/GetSolNetworkOperationCommand";
import {
  GetSolNetworkPackageCommandInput,
  GetSolNetworkPackageCommandOutput,
} from "../commands/GetSolNetworkPackageCommand";
import {
  GetSolNetworkPackageContentCommandInput,
  GetSolNetworkPackageContentCommandOutput,
} from "../commands/GetSolNetworkPackageContentCommand";
import {
  GetSolNetworkPackageDescriptorCommandInput,
  GetSolNetworkPackageDescriptorCommandOutput,
} from "../commands/GetSolNetworkPackageDescriptorCommand";
import {
  InstantiateSolNetworkInstanceCommandInput,
  InstantiateSolNetworkInstanceCommandOutput,
} from "../commands/InstantiateSolNetworkInstanceCommand";
import {
  ListSolFunctionInstancesCommandInput,
  ListSolFunctionInstancesCommandOutput,
} from "../commands/ListSolFunctionInstancesCommand";
import {
  ListSolFunctionPackagesCommandInput,
  ListSolFunctionPackagesCommandOutput,
} from "../commands/ListSolFunctionPackagesCommand";
import {
  ListSolNetworkInstancesCommandInput,
  ListSolNetworkInstancesCommandOutput,
} from "../commands/ListSolNetworkInstancesCommand";
import {
  ListSolNetworkOperationsCommandInput,
  ListSolNetworkOperationsCommandOutput,
} from "../commands/ListSolNetworkOperationsCommand";
import {
  ListSolNetworkPackagesCommandInput,
  ListSolNetworkPackagesCommandOutput,
} from "../commands/ListSolNetworkPackagesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutSolFunctionPackageContentCommandInput,
  PutSolFunctionPackageContentCommandOutput,
} from "../commands/PutSolFunctionPackageContentCommand";
import {
  PutSolNetworkPackageContentCommandInput,
  PutSolNetworkPackageContentCommandOutput,
} from "../commands/PutSolNetworkPackageContentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  TerminateSolNetworkInstanceCommandInput,
  TerminateSolNetworkInstanceCommandOutput,
} from "../commands/TerminateSolNetworkInstanceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateSolFunctionPackageCommandInput,
  UpdateSolFunctionPackageCommandOutput,
} from "../commands/UpdateSolFunctionPackageCommand";
import {
  UpdateSolNetworkInstanceCommandInput,
  UpdateSolNetworkInstanceCommandOutput,
} from "../commands/UpdateSolNetworkInstanceCommand";
import {
  UpdateSolNetworkPackageCommandInput,
  UpdateSolNetworkPackageCommandOutput,
} from "../commands/UpdateSolNetworkPackageCommand";
import {
  ValidateSolFunctionPackageContentCommandInput,
  ValidateSolFunctionPackageContentCommandOutput,
} from "../commands/ValidateSolFunctionPackageContentCommand";
import {
  ValidateSolNetworkPackageContentCommandInput,
  ValidateSolNetworkPackageContentCommandOutput,
} from "../commands/ValidateSolNetworkPackageContentCommand";
import {
  AccessDeniedException,
  GetSolFunctionInstanceMetadata,
  GetSolFunctionPackageMetadata,
  GetSolNetworkInstanceMetadata,
  GetSolNetworkOperationMetadata,
  GetSolNetworkOperationTaskDetails,
  GetSolNetworkPackageMetadata,
  InstantiateMetadata,
  InternalServerException,
  ListSolFunctionInstanceInfo,
  ListSolFunctionInstanceMetadata,
  ListSolFunctionPackageInfo,
  ListSolFunctionPackageMetadata,
  ListSolNetworkInstanceInfo,
  ListSolNetworkInstanceMetadata,
  ListSolNetworkOperationsInfo,
  ListSolNetworkOperationsMetadata,
  ListSolNetworkPackageInfo,
  ListSolNetworkPackageMetadata,
  ModifyVnfInfoMetadata,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  UpdateNsMetadata,
  UpdateSolNetworkModify,
  UpdateSolNetworkServiceData,
  ValidationException,
} from "../models/models_0";
import { TnbServiceException as __BaseException } from "../models/TnbServiceException";

/**
 * serializeAws_restJson1CancelSolNetworkOperationCommand
 */
export const se_CancelSolNetworkOperationCommand = async (
  input: CancelSolNetworkOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sol/nslcm/v1/ns_lcm_op_occs/{nsLcmOpOccId}/cancel");
  b.p("nsLcmOpOccId", () => input.nsLcmOpOccId!, "{nsLcmOpOccId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSolFunctionPackageCommand
 */
export const se_CreateSolFunctionPackageCommand = async (
  input: CreateSolFunctionPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sol/vnfpkgm/v1/vnf_packages");
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
 * serializeAws_restJson1CreateSolNetworkInstanceCommand
 */
export const se_CreateSolNetworkInstanceCommand = async (
  input: CreateSolNetworkInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sol/nslcm/v1/ns_instances");
  let body: any;
  body = JSON.stringify(
    take(input, {
      nsDescription: [],
      nsName: [],
      nsdInfoId: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSolNetworkPackageCommand
 */
export const se_CreateSolNetworkPackageCommand = async (
  input: CreateSolNetworkPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sol/nsd/v1/ns_descriptors");
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
 * serializeAws_restJson1DeleteSolFunctionPackageCommand
 */
export const se_DeleteSolFunctionPackageCommand = async (
  input: DeleteSolFunctionPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}");
  b.p("vnfPkgId", () => input.vnfPkgId!, "{vnfPkgId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSolNetworkInstanceCommand
 */
export const se_DeleteSolNetworkInstanceCommand = async (
  input: DeleteSolNetworkInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sol/nslcm/v1/ns_instances/{nsInstanceId}");
  b.p("nsInstanceId", () => input.nsInstanceId!, "{nsInstanceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSolNetworkPackageCommand
 */
export const se_DeleteSolNetworkPackageCommand = async (
  input: DeleteSolNetworkPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sol/nsd/v1/ns_descriptors/{nsdInfoId}");
  b.p("nsdInfoId", () => input.nsdInfoId!, "{nsdInfoId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSolFunctionInstanceCommand
 */
export const se_GetSolFunctionInstanceCommand = async (
  input: GetSolFunctionInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sol/vnflcm/v1/vnf_instances/{vnfInstanceId}");
  b.p("vnfInstanceId", () => input.vnfInstanceId!, "{vnfInstanceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSolFunctionPackageCommand
 */
export const se_GetSolFunctionPackageCommand = async (
  input: GetSolFunctionPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}");
  b.p("vnfPkgId", () => input.vnfPkgId!, "{vnfPkgId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSolFunctionPackageContentCommand
 */
export const se_GetSolFunctionPackageContentCommand = async (
  input: GetSolFunctionPackageContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_a]!,
  });
  b.bp("/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content");
  b.p("vnfPkgId", () => input.vnfPkgId!, "{vnfPkgId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSolFunctionPackageDescriptorCommand
 */
export const se_GetSolFunctionPackageDescriptorCommand = async (
  input: GetSolFunctionPackageDescriptorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_a]!,
  });
  b.bp("/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/vnfd");
  b.p("vnfPkgId", () => input.vnfPkgId!, "{vnfPkgId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSolNetworkInstanceCommand
 */
export const se_GetSolNetworkInstanceCommand = async (
  input: GetSolNetworkInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sol/nslcm/v1/ns_instances/{nsInstanceId}");
  b.p("nsInstanceId", () => input.nsInstanceId!, "{nsInstanceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSolNetworkOperationCommand
 */
export const se_GetSolNetworkOperationCommand = async (
  input: GetSolNetworkOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sol/nslcm/v1/ns_lcm_op_occs/{nsLcmOpOccId}");
  b.p("nsLcmOpOccId", () => input.nsLcmOpOccId!, "{nsLcmOpOccId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSolNetworkPackageCommand
 */
export const se_GetSolNetworkPackageCommand = async (
  input: GetSolNetworkPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sol/nsd/v1/ns_descriptors/{nsdInfoId}");
  b.p("nsdInfoId", () => input.nsdInfoId!, "{nsdInfoId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSolNetworkPackageContentCommand
 */
export const se_GetSolNetworkPackageContentCommand = async (
  input: GetSolNetworkPackageContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_a]!,
  });
  b.bp("/sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content");
  b.p("nsdInfoId", () => input.nsdInfoId!, "{nsdInfoId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSolNetworkPackageDescriptorCommand
 */
export const se_GetSolNetworkPackageDescriptorCommand = async (
  input: GetSolNetworkPackageDescriptorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd");
  b.p("nsdInfoId", () => input.nsdInfoId!, "{nsdInfoId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InstantiateSolNetworkInstanceCommand
 */
export const se_InstantiateSolNetworkInstanceCommand = async (
  input: InstantiateSolNetworkInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sol/nslcm/v1/ns_instances/{nsInstanceId}/instantiate");
  b.p("nsInstanceId", () => input.nsInstanceId!, "{nsInstanceId}", false);
  const query: any = map({
    [_dr]: [() => input.dryRun !== void 0, () => input[_dR]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalParamsForNs: (_) => se_Document(_, context),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSolFunctionInstancesCommand
 */
export const se_ListSolFunctionInstancesCommand = async (
  input: ListSolFunctionInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sol/vnflcm/v1/vnf_instances");
  const query: any = map({
    [_mr]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nom]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSolFunctionPackagesCommand
 */
export const se_ListSolFunctionPackagesCommand = async (
  input: ListSolFunctionPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sol/vnfpkgm/v1/vnf_packages");
  const query: any = map({
    [_mr]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nom]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSolNetworkInstancesCommand
 */
export const se_ListSolNetworkInstancesCommand = async (
  input: ListSolNetworkInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sol/nslcm/v1/ns_instances");
  const query: any = map({
    [_mr]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nom]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSolNetworkOperationsCommand
 */
export const se_ListSolNetworkOperationsCommand = async (
  input: ListSolNetworkOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sol/nslcm/v1/ns_lcm_op_occs");
  const query: any = map({
    [_nII]: [, input[_nII]!],
    [_mr]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nom]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSolNetworkPackagesCommand
 */
export const se_ListSolNetworkPackagesCommand = async (
  input: ListSolNetworkPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sol/nsd/v1/ns_descriptors");
  const query: any = map({
    [_mr]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nom]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
 * serializeAws_restJson1PutSolFunctionPackageContentCommand
 */
export const se_PutSolFunctionPackageContentCommand = async (
  input: PutSolFunctionPackageContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ct]: input[_cT] || "application/octet-stream",
  });
  b.bp("/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content");
  b.p("vnfPkgId", () => input.vnfPkgId!, "{vnfPkgId}", false);
  let body: any;
  if (input.file !== undefined) {
    body = input.file;
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutSolNetworkPackageContentCommand
 */
export const se_PutSolNetworkPackageContentCommand = async (
  input: PutSolNetworkPackageContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ct]: input[_cT] || "application/octet-stream",
  });
  b.bp("/sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content");
  b.p("nsdInfoId", () => input.nsdInfoId!, "{nsdInfoId}", false);
  let body: any;
  if (input.file !== undefined) {
    body = input.file;
  }
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
 * serializeAws_restJson1TerminateSolNetworkInstanceCommand
 */
export const se_TerminateSolNetworkInstanceCommand = async (
  input: TerminateSolNetworkInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sol/nslcm/v1/ns_instances/{nsInstanceId}/terminate");
  b.p("nsInstanceId", () => input.nsInstanceId!, "{nsInstanceId}", false);
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
 * serializeAws_restJson1UpdateSolFunctionPackageCommand
 */
export const se_UpdateSolFunctionPackageCommand = async (
  input: UpdateSolFunctionPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}");
  b.p("vnfPkgId", () => input.vnfPkgId!, "{vnfPkgId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      operationalState: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSolNetworkInstanceCommand
 */
export const se_UpdateSolNetworkInstanceCommand = async (
  input: UpdateSolNetworkInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sol/nslcm/v1/ns_instances/{nsInstanceId}/update");
  b.p("nsInstanceId", () => input.nsInstanceId!, "{nsInstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      modifyVnfInfoData: (_) => se_UpdateSolNetworkModify(_, context),
      tags: (_) => _json(_),
      updateNs: (_) => se_UpdateSolNetworkServiceData(_, context),
      updateType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSolNetworkPackageCommand
 */
export const se_UpdateSolNetworkPackageCommand = async (
  input: UpdateSolNetworkPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sol/nsd/v1/ns_descriptors/{nsdInfoId}");
  b.p("nsdInfoId", () => input.nsdInfoId!, "{nsdInfoId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      nsdOperationalState: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ValidateSolFunctionPackageContentCommand
 */
export const se_ValidateSolFunctionPackageContentCommand = async (
  input: ValidateSolFunctionPackageContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ct]: input[_cT] || "application/octet-stream",
  });
  b.bp("/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content/validate");
  b.p("vnfPkgId", () => input.vnfPkgId!, "{vnfPkgId}", false);
  let body: any;
  if (input.file !== undefined) {
    body = input.file;
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ValidateSolNetworkPackageContentCommand
 */
export const se_ValidateSolNetworkPackageContentCommand = async (
  input: ValidateSolNetworkPackageContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ct]: input[_cT] || "application/octet-stream",
  });
  b.bp("/sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content/validate");
  b.p("nsdInfoId", () => input.nsdInfoId!, "{nsdInfoId}", false);
  let body: any;
  if (input.file !== undefined) {
    body = input.file;
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CancelSolNetworkOperationCommand
 */
export const de_CancelSolNetworkOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSolNetworkOperationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSolFunctionPackageCommand
 */
export const de_CreateSolFunctionPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolFunctionPackageCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    onboardingState: __expectString,
    operationalState: __expectString,
    tags: _json,
    usageState: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSolNetworkInstanceCommand
 */
export const de_CreateSolNetworkInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolNetworkInstanceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    nsInstanceName: __expectString,
    nsdInfoId: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSolNetworkPackageCommand
 */
export const de_CreateSolNetworkPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolNetworkPackageCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    nsdOnboardingState: __expectString,
    nsdOperationalState: __expectString,
    nsdUsageState: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSolFunctionPackageCommand
 */
export const de_DeleteSolFunctionPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSolFunctionPackageCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSolNetworkInstanceCommand
 */
export const de_DeleteSolNetworkInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSolNetworkInstanceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSolNetworkPackageCommand
 */
export const de_DeleteSolNetworkPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSolNetworkPackageCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetSolFunctionInstanceCommand
 */
export const de_GetSolFunctionInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolFunctionInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    instantiatedVnfInfo: _json,
    instantiationState: __expectString,
    metadata: (_) => de_GetSolFunctionInstanceMetadata(_, context),
    nsInstanceId: __expectString,
    tags: _json,
    vnfPkgId: __expectString,
    vnfProductName: __expectString,
    vnfProvider: __expectString,
    vnfdId: __expectString,
    vnfdVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSolFunctionPackageCommand
 */
export const de_GetSolFunctionPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolFunctionPackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    metadata: (_) => de_GetSolFunctionPackageMetadata(_, context),
    onboardingState: __expectString,
    operationalState: __expectString,
    tags: _json,
    usageState: __expectString,
    vnfProductName: __expectString,
    vnfProvider: __expectString,
    vnfdId: __expectString,
    vnfdVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSolFunctionPackageContentCommand
 */
export const de_GetSolFunctionPackageContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolFunctionPackageContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_cT]: [, output.headers[_ct]],
  });
  const data: any = await collectBody(output.body, context);
  contents.packageContent = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetSolFunctionPackageDescriptorCommand
 */
export const de_GetSolFunctionPackageDescriptorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolFunctionPackageDescriptorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_cT]: [, output.headers[_ct]],
  });
  const data: any = await collectBody(output.body, context);
  contents.vnfd = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetSolNetworkInstanceCommand
 */
export const de_GetSolNetworkInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolNetworkInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    lcmOpInfo: _json,
    metadata: (_) => de_GetSolNetworkInstanceMetadata(_, context),
    nsInstanceDescription: __expectString,
    nsInstanceName: __expectString,
    nsState: __expectString,
    nsdId: __expectString,
    nsdInfoId: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSolNetworkOperationCommand
 */
export const de_GetSolNetworkOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolNetworkOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    error: _json,
    id: __expectString,
    lcmOperationType: __expectString,
    metadata: (_) => de_GetSolNetworkOperationMetadata(_, context),
    nsInstanceId: __expectString,
    operationState: __expectString,
    tags: _json,
    tasks: (_) => de_GetSolNetworkOperationTasksList(_, context),
    updateType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSolNetworkPackageCommand
 */
export const de_GetSolNetworkPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolNetworkPackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    metadata: (_) => de_GetSolNetworkPackageMetadata(_, context),
    nsdId: __expectString,
    nsdName: __expectString,
    nsdOnboardingState: __expectString,
    nsdOperationalState: __expectString,
    nsdUsageState: __expectString,
    nsdVersion: __expectString,
    tags: _json,
    vnfPkgIds: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSolNetworkPackageContentCommand
 */
export const de_GetSolNetworkPackageContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolNetworkPackageContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_cT]: [, output.headers[_ct]],
  });
  const data: any = await collectBody(output.body, context);
  contents.nsdContent = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetSolNetworkPackageDescriptorCommand
 */
export const de_GetSolNetworkPackageDescriptorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolNetworkPackageDescriptorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_cT]: [, output.headers[_ct]],
  });
  const data: any = await collectBody(output.body, context);
  contents.nsd = data;
  return contents;
};

/**
 * deserializeAws_restJson1InstantiateSolNetworkInstanceCommand
 */
export const de_InstantiateSolNetworkInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InstantiateSolNetworkInstanceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nsLcmOpOccId: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSolFunctionInstancesCommand
 */
export const de_ListSolFunctionInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolFunctionInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    functionInstances: (_) => de_ListSolFunctionInstanceResources(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSolFunctionPackagesCommand
 */
export const de_ListSolFunctionPackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolFunctionPackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    functionPackages: (_) => de_ListSolFunctionPackageResources(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSolNetworkInstancesCommand
 */
export const de_ListSolNetworkInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolNetworkInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    networkInstances: (_) => de_ListSolNetworkInstanceResources(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSolNetworkOperationsCommand
 */
export const de_ListSolNetworkOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolNetworkOperationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    networkOperations: (_) => de_ListSolNetworkOperationsResources(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSolNetworkPackagesCommand
 */
export const de_ListSolNetworkPackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolNetworkPackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    networkPackages: (_) => de_ListSolNetworkPackageResources(_, context),
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
 * deserializeAws_restJson1PutSolFunctionPackageContentCommand
 */
export const de_PutSolFunctionPackageContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSolFunctionPackageContentCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    metadata: _json,
    vnfProductName: __expectString,
    vnfProvider: __expectString,
    vnfdId: __expectString,
    vnfdVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutSolNetworkPackageContentCommand
 */
export const de_PutSolNetworkPackageContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSolNetworkPackageContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    metadata: _json,
    nsdId: __expectString,
    nsdName: __expectString,
    nsdVersion: __expectString,
    vnfPkgIds: _json,
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
 * deserializeAws_restJson1TerminateSolNetworkInstanceCommand
 */
export const de_TerminateSolNetworkInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateSolNetworkInstanceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nsLcmOpOccId: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1UpdateSolFunctionPackageCommand
 */
export const de_UpdateSolFunctionPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSolFunctionPackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    operationalState: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSolNetworkInstanceCommand
 */
export const de_UpdateSolNetworkInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSolNetworkInstanceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nsLcmOpOccId: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSolNetworkPackageCommand
 */
export const de_UpdateSolNetworkPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSolNetworkPackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nsdOperationalState: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ValidateSolFunctionPackageContentCommand
 */
export const de_ValidateSolFunctionPackageContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateSolFunctionPackageContentCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    metadata: _json,
    vnfProductName: __expectString,
    vnfProvider: __expectString,
    vnfdId: __expectString,
    vnfdVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ValidateSolNetworkPackageContentCommand
 */
export const de_ValidateSolNetworkPackageContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateSolNetworkPackageContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    metadata: _json,
    nsdId: __expectString,
    nsdName: __expectString,
    nsdVersion: __expectString,
    vnfPkgIds: _json,
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
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.tnb#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
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
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_TagMap omitted.

/**
 * serializeAws_restJson1UpdateSolNetworkModify
 */
const se_UpdateSolNetworkModify = (input: UpdateSolNetworkModify, context: __SerdeContext): any => {
  return take(input, {
    vnfConfigurableProperties: (_) => se_Document(_, context),
    vnfInstanceId: [],
  });
};

/**
 * serializeAws_restJson1UpdateSolNetworkServiceData
 */
const se_UpdateSolNetworkServiceData = (input: UpdateSolNetworkServiceData, context: __SerdeContext): any => {
  return take(input, {
    additionalParamsForNs: (_) => se_Document(_, context),
    nsdInfoId: [],
  });
};

/**
 * serializeAws_restJson1Document
 */
const se_Document = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// de_ErrorInfo omitted.

// de_FunctionArtifactMeta omitted.

/**
 * deserializeAws_restJson1GetSolFunctionInstanceMetadata
 */
const de_GetSolFunctionInstanceMetadata = (output: any, context: __SerdeContext): GetSolFunctionInstanceMetadata => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastModified: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1GetSolFunctionPackageMetadata
 */
const de_GetSolFunctionPackageMetadata = (output: any, context: __SerdeContext): GetSolFunctionPackageMetadata => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastModified: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    vnfd: _json,
  }) as any;
};

// de_GetSolInstantiatedVnfInfo omitted.

/**
 * deserializeAws_restJson1GetSolNetworkInstanceMetadata
 */
const de_GetSolNetworkInstanceMetadata = (output: any, context: __SerdeContext): GetSolNetworkInstanceMetadata => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastModified: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1GetSolNetworkOperationMetadata
 */
const de_GetSolNetworkOperationMetadata = (output: any, context: __SerdeContext): GetSolNetworkOperationMetadata => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    instantiateMetadata: (_: any) => de_InstantiateMetadata(_, context),
    lastModified: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    modifyVnfInfoMetadata: (_: any) => de_ModifyVnfInfoMetadata(_, context),
    updateNsMetadata: (_: any) => de_UpdateNsMetadata(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GetSolNetworkOperationTaskDetails
 */
const de_GetSolNetworkOperationTaskDetails = (
  output: any,
  context: __SerdeContext
): GetSolNetworkOperationTaskDetails => {
  return take(output, {
    taskContext: _json,
    taskEndTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    taskErrorDetails: _json,
    taskName: __expectString,
    taskStartTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    taskStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GetSolNetworkOperationTasksList
 */
const de_GetSolNetworkOperationTasksList = (
  output: any,
  context: __SerdeContext
): GetSolNetworkOperationTaskDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GetSolNetworkOperationTaskDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GetSolNetworkPackageMetadata
 */
const de_GetSolNetworkPackageMetadata = (output: any, context: __SerdeContext): GetSolNetworkPackageMetadata => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastModified: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    nsd: _json,
  }) as any;
};

// de_GetSolVnfcResourceInfo omitted.

// de_GetSolVnfcResourceInfoList omitted.

// de_GetSolVnfcResourceInfoMetadata omitted.

// de_GetSolVnfInfo omitted.

/**
 * deserializeAws_restJson1InstantiateMetadata
 */
const de_InstantiateMetadata = (output: any, context: __SerdeContext): InstantiateMetadata => {
  return take(output, {
    additionalParamsForNs: (_: any) => de_Document(_, context),
    nsdInfoId: __expectString,
  }) as any;
};

// de_LcmOperationInfo omitted.

/**
 * deserializeAws_restJson1ListSolFunctionInstanceInfo
 */
const de_ListSolFunctionInstanceInfo = (output: any, context: __SerdeContext): ListSolFunctionInstanceInfo => {
  return take(output, {
    arn: __expectString,
    id: __expectString,
    instantiatedVnfInfo: _json,
    instantiationState: __expectString,
    metadata: (_: any) => de_ListSolFunctionInstanceMetadata(_, context),
    nsInstanceId: __expectString,
    vnfPkgId: __expectString,
    vnfPkgName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ListSolFunctionInstanceMetadata
 */
const de_ListSolFunctionInstanceMetadata = (output: any, context: __SerdeContext): ListSolFunctionInstanceMetadata => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastModified: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ListSolFunctionInstanceResources
 */
const de_ListSolFunctionInstanceResources = (output: any, context: __SerdeContext): ListSolFunctionInstanceInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListSolFunctionInstanceInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListSolFunctionPackageInfo
 */
const de_ListSolFunctionPackageInfo = (output: any, context: __SerdeContext): ListSolFunctionPackageInfo => {
  return take(output, {
    arn: __expectString,
    id: __expectString,
    metadata: (_: any) => de_ListSolFunctionPackageMetadata(_, context),
    onboardingState: __expectString,
    operationalState: __expectString,
    usageState: __expectString,
    vnfProductName: __expectString,
    vnfProvider: __expectString,
    vnfdId: __expectString,
    vnfdVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ListSolFunctionPackageMetadata
 */
const de_ListSolFunctionPackageMetadata = (output: any, context: __SerdeContext): ListSolFunctionPackageMetadata => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastModified: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ListSolFunctionPackageResources
 */
const de_ListSolFunctionPackageResources = (output: any, context: __SerdeContext): ListSolFunctionPackageInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListSolFunctionPackageInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListSolNetworkInstanceInfo
 */
const de_ListSolNetworkInstanceInfo = (output: any, context: __SerdeContext): ListSolNetworkInstanceInfo => {
  return take(output, {
    arn: __expectString,
    id: __expectString,
    metadata: (_: any) => de_ListSolNetworkInstanceMetadata(_, context),
    nsInstanceDescription: __expectString,
    nsInstanceName: __expectString,
    nsState: __expectString,
    nsdId: __expectString,
    nsdInfoId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ListSolNetworkInstanceMetadata
 */
const de_ListSolNetworkInstanceMetadata = (output: any, context: __SerdeContext): ListSolNetworkInstanceMetadata => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastModified: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ListSolNetworkInstanceResources
 */
const de_ListSolNetworkInstanceResources = (output: any, context: __SerdeContext): ListSolNetworkInstanceInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListSolNetworkInstanceInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListSolNetworkOperationsInfo
 */
const de_ListSolNetworkOperationsInfo = (output: any, context: __SerdeContext): ListSolNetworkOperationsInfo => {
  return take(output, {
    arn: __expectString,
    error: _json,
    id: __expectString,
    lcmOperationType: __expectString,
    metadata: (_: any) => de_ListSolNetworkOperationsMetadata(_, context),
    nsInstanceId: __expectString,
    operationState: __expectString,
    updateType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ListSolNetworkOperationsMetadata
 */
const de_ListSolNetworkOperationsMetadata = (
  output: any,
  context: __SerdeContext
): ListSolNetworkOperationsMetadata => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastModified: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    nsdInfoId: __expectString,
    vnfInstanceId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ListSolNetworkOperationsResources
 */
const de_ListSolNetworkOperationsResources = (output: any, context: __SerdeContext): ListSolNetworkOperationsInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListSolNetworkOperationsInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListSolNetworkPackageInfo
 */
const de_ListSolNetworkPackageInfo = (output: any, context: __SerdeContext): ListSolNetworkPackageInfo => {
  return take(output, {
    arn: __expectString,
    id: __expectString,
    metadata: (_: any) => de_ListSolNetworkPackageMetadata(_, context),
    nsdDesigner: __expectString,
    nsdId: __expectString,
    nsdInvariantId: __expectString,
    nsdName: __expectString,
    nsdOnboardingState: __expectString,
    nsdOperationalState: __expectString,
    nsdUsageState: __expectString,
    nsdVersion: __expectString,
    vnfPkgIds: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ListSolNetworkPackageMetadata
 */
const de_ListSolNetworkPackageMetadata = (output: any, context: __SerdeContext): ListSolNetworkPackageMetadata => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastModified: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ListSolNetworkPackageResources
 */
const de_ListSolNetworkPackageResources = (output: any, context: __SerdeContext): ListSolNetworkPackageInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListSolNetworkPackageInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ModifyVnfInfoMetadata
 */
const de_ModifyVnfInfoMetadata = (output: any, context: __SerdeContext): ModifyVnfInfoMetadata => {
  return take(output, {
    vnfConfigurableProperties: (_: any) => de_Document(_, context),
    vnfInstanceId: __expectString,
  }) as any;
};

// de_NetworkArtifactMeta omitted.

// de_OverrideList omitted.

// de_ProblemDetails omitted.

// de_PutSolFunctionPackageContentMetadata omitted.

// de_PutSolNetworkPackageContentMetadata omitted.

// de_StringMap omitted.

// de_TagMap omitted.

// de_ToscaOverride omitted.

/**
 * deserializeAws_restJson1UpdateNsMetadata
 */
const de_UpdateNsMetadata = (output: any, context: __SerdeContext): UpdateNsMetadata => {
  return take(output, {
    additionalParamsForNs: (_: any) => de_Document(_, context),
    nsdInfoId: __expectString,
  }) as any;
};

// de_ValidateSolFunctionPackageContentMetadata omitted.

// de_ValidateSolNetworkPackageContentMetadata omitted.

// de_VnfPkgIdList omitted.

/**
 * deserializeAws_restJson1Document
 */
const de_Document = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

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

const _a = "accept";
const _cT = "contentType";
const _ct = "content-type";
const _dR = "dryRun";
const _dr = "dry_run";
const _mR = "maxResults";
const _mr = "max_results";
const _nII = "nsInstanceId";
const _nT = "nextToken";
const _nom = "nextpage_opaque_marker";
const _tK = "tagKeys";
