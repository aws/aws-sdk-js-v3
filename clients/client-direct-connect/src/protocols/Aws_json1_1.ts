// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AcceptDirectConnectGatewayAssociationProposalCommandInput,
  AcceptDirectConnectGatewayAssociationProposalCommandOutput,
} from "../commands/AcceptDirectConnectGatewayAssociationProposalCommand";
import {
  AllocateConnectionOnInterconnectCommandInput,
  AllocateConnectionOnInterconnectCommandOutput,
} from "../commands/AllocateConnectionOnInterconnectCommand";
import {
  AllocateHostedConnectionCommandInput,
  AllocateHostedConnectionCommandOutput,
} from "../commands/AllocateHostedConnectionCommand";
import {
  AllocatePrivateVirtualInterfaceCommandInput,
  AllocatePrivateVirtualInterfaceCommandOutput,
} from "../commands/AllocatePrivateVirtualInterfaceCommand";
import {
  AllocatePublicVirtualInterfaceCommandInput,
  AllocatePublicVirtualInterfaceCommandOutput,
} from "../commands/AllocatePublicVirtualInterfaceCommand";
import {
  AllocateTransitVirtualInterfaceCommandInput,
  AllocateTransitVirtualInterfaceCommandOutput,
} from "../commands/AllocateTransitVirtualInterfaceCommand";
import {
  AssociateConnectionWithLagCommandInput,
  AssociateConnectionWithLagCommandOutput,
} from "../commands/AssociateConnectionWithLagCommand";
import {
  AssociateHostedConnectionCommandInput,
  AssociateHostedConnectionCommandOutput,
} from "../commands/AssociateHostedConnectionCommand";
import { AssociateMacSecKeyCommandInput, AssociateMacSecKeyCommandOutput } from "../commands/AssociateMacSecKeyCommand";
import {
  AssociateVirtualInterfaceCommandInput,
  AssociateVirtualInterfaceCommandOutput,
} from "../commands/AssociateVirtualInterfaceCommand";
import { ConfirmConnectionCommandInput, ConfirmConnectionCommandOutput } from "../commands/ConfirmConnectionCommand";
import {
  ConfirmCustomerAgreementCommandInput,
  ConfirmCustomerAgreementCommandOutput,
} from "../commands/ConfirmCustomerAgreementCommand";
import {
  ConfirmPrivateVirtualInterfaceCommandInput,
  ConfirmPrivateVirtualInterfaceCommandOutput,
} from "../commands/ConfirmPrivateVirtualInterfaceCommand";
import {
  ConfirmPublicVirtualInterfaceCommandInput,
  ConfirmPublicVirtualInterfaceCommandOutput,
} from "../commands/ConfirmPublicVirtualInterfaceCommand";
import {
  ConfirmTransitVirtualInterfaceCommandInput,
  ConfirmTransitVirtualInterfaceCommandOutput,
} from "../commands/ConfirmTransitVirtualInterfaceCommand";
import { CreateBGPPeerCommandInput, CreateBGPPeerCommandOutput } from "../commands/CreateBGPPeerCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "../commands/CreateConnectionCommand";
import {
  CreateDirectConnectGatewayAssociationCommandInput,
  CreateDirectConnectGatewayAssociationCommandOutput,
} from "../commands/CreateDirectConnectGatewayAssociationCommand";
import {
  CreateDirectConnectGatewayAssociationProposalCommandInput,
  CreateDirectConnectGatewayAssociationProposalCommandOutput,
} from "../commands/CreateDirectConnectGatewayAssociationProposalCommand";
import {
  CreateDirectConnectGatewayCommandInput,
  CreateDirectConnectGatewayCommandOutput,
} from "../commands/CreateDirectConnectGatewayCommand";
import { CreateInterconnectCommandInput, CreateInterconnectCommandOutput } from "../commands/CreateInterconnectCommand";
import { CreateLagCommandInput, CreateLagCommandOutput } from "../commands/CreateLagCommand";
import {
  CreatePrivateVirtualInterfaceCommandInput,
  CreatePrivateVirtualInterfaceCommandOutput,
} from "../commands/CreatePrivateVirtualInterfaceCommand";
import {
  CreatePublicVirtualInterfaceCommandInput,
  CreatePublicVirtualInterfaceCommandOutput,
} from "../commands/CreatePublicVirtualInterfaceCommand";
import {
  CreateTransitVirtualInterfaceCommandInput,
  CreateTransitVirtualInterfaceCommandOutput,
} from "../commands/CreateTransitVirtualInterfaceCommand";
import { DeleteBGPPeerCommandInput, DeleteBGPPeerCommandOutput } from "../commands/DeleteBGPPeerCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "../commands/DeleteConnectionCommand";
import {
  DeleteDirectConnectGatewayAssociationCommandInput,
  DeleteDirectConnectGatewayAssociationCommandOutput,
} from "../commands/DeleteDirectConnectGatewayAssociationCommand";
import {
  DeleteDirectConnectGatewayAssociationProposalCommandInput,
  DeleteDirectConnectGatewayAssociationProposalCommandOutput,
} from "../commands/DeleteDirectConnectGatewayAssociationProposalCommand";
import {
  DeleteDirectConnectGatewayCommandInput,
  DeleteDirectConnectGatewayCommandOutput,
} from "../commands/DeleteDirectConnectGatewayCommand";
import { DeleteInterconnectCommandInput, DeleteInterconnectCommandOutput } from "../commands/DeleteInterconnectCommand";
import { DeleteLagCommandInput, DeleteLagCommandOutput } from "../commands/DeleteLagCommand";
import {
  DeleteVirtualInterfaceCommandInput,
  DeleteVirtualInterfaceCommandOutput,
} from "../commands/DeleteVirtualInterfaceCommand";
import {
  DescribeConnectionLoaCommandInput,
  DescribeConnectionLoaCommandOutput,
} from "../commands/DescribeConnectionLoaCommand";
import {
  DescribeConnectionsCommandInput,
  DescribeConnectionsCommandOutput,
} from "../commands/DescribeConnectionsCommand";
import {
  DescribeConnectionsOnInterconnectCommandInput,
  DescribeConnectionsOnInterconnectCommandOutput,
} from "../commands/DescribeConnectionsOnInterconnectCommand";
import {
  DescribeCustomerMetadataCommandInput,
  DescribeCustomerMetadataCommandOutput,
} from "../commands/DescribeCustomerMetadataCommand";
import {
  DescribeDirectConnectGatewayAssociationProposalsCommandInput,
  DescribeDirectConnectGatewayAssociationProposalsCommandOutput,
} from "../commands/DescribeDirectConnectGatewayAssociationProposalsCommand";
import {
  DescribeDirectConnectGatewayAssociationsCommandInput,
  DescribeDirectConnectGatewayAssociationsCommandOutput,
} from "../commands/DescribeDirectConnectGatewayAssociationsCommand";
import {
  DescribeDirectConnectGatewayAttachmentsCommandInput,
  DescribeDirectConnectGatewayAttachmentsCommandOutput,
} from "../commands/DescribeDirectConnectGatewayAttachmentsCommand";
import {
  DescribeDirectConnectGatewaysCommandInput,
  DescribeDirectConnectGatewaysCommandOutput,
} from "../commands/DescribeDirectConnectGatewaysCommand";
import {
  DescribeHostedConnectionsCommandInput,
  DescribeHostedConnectionsCommandOutput,
} from "../commands/DescribeHostedConnectionsCommand";
import {
  DescribeInterconnectLoaCommandInput,
  DescribeInterconnectLoaCommandOutput,
} from "../commands/DescribeInterconnectLoaCommand";
import {
  DescribeInterconnectsCommandInput,
  DescribeInterconnectsCommandOutput,
} from "../commands/DescribeInterconnectsCommand";
import { DescribeLagsCommandInput, DescribeLagsCommandOutput } from "../commands/DescribeLagsCommand";
import { DescribeLoaCommandInput, DescribeLoaCommandOutput } from "../commands/DescribeLoaCommand";
import { DescribeLocationsCommandInput, DescribeLocationsCommandOutput } from "../commands/DescribeLocationsCommand";
import {
  DescribeRouterConfigurationCommandInput,
  DescribeRouterConfigurationCommandOutput,
} from "../commands/DescribeRouterConfigurationCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "../commands/DescribeTagsCommand";
import {
  DescribeVirtualGatewaysCommandInput,
  DescribeVirtualGatewaysCommandOutput,
} from "../commands/DescribeVirtualGatewaysCommand";
import {
  DescribeVirtualInterfacesCommandInput,
  DescribeVirtualInterfacesCommandOutput,
} from "../commands/DescribeVirtualInterfacesCommand";
import {
  DisassociateConnectionFromLagCommandInput,
  DisassociateConnectionFromLagCommandOutput,
} from "../commands/DisassociateConnectionFromLagCommand";
import {
  DisassociateMacSecKeyCommandInput,
  DisassociateMacSecKeyCommandOutput,
} from "../commands/DisassociateMacSecKeyCommand";
import {
  ListVirtualInterfaceTestHistoryCommandInput,
  ListVirtualInterfaceTestHistoryCommandOutput,
} from "../commands/ListVirtualInterfaceTestHistoryCommand";
import {
  StartBgpFailoverTestCommandInput,
  StartBgpFailoverTestCommandOutput,
} from "../commands/StartBgpFailoverTestCommand";
import {
  StopBgpFailoverTestCommandInput,
  StopBgpFailoverTestCommandOutput,
} from "../commands/StopBgpFailoverTestCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "../commands/UpdateConnectionCommand";
import {
  UpdateDirectConnectGatewayAssociationCommandInput,
  UpdateDirectConnectGatewayAssociationCommandOutput,
} from "../commands/UpdateDirectConnectGatewayAssociationCommand";
import {
  UpdateDirectConnectGatewayCommandInput,
  UpdateDirectConnectGatewayCommandOutput,
} from "../commands/UpdateDirectConnectGatewayCommand";
import { UpdateLagCommandInput, UpdateLagCommandOutput } from "../commands/UpdateLagCommand";
import {
  UpdateVirtualInterfaceAttributesCommandInput,
  UpdateVirtualInterfaceAttributesCommandOutput,
} from "../commands/UpdateVirtualInterfaceAttributesCommand";
import { DirectConnectServiceException as __BaseException } from "../models/DirectConnectServiceException";
import {
  AcceptDirectConnectGatewayAssociationProposalRequest,
  AcceptDirectConnectGatewayAssociationProposalResult,
  AllocateConnectionOnInterconnectRequest,
  AllocateHostedConnectionRequest,
  AllocatePrivateVirtualInterfaceRequest,
  AllocatePublicVirtualInterfaceRequest,
  AllocateTransitVirtualInterfaceRequest,
  AllocateTransitVirtualInterfaceResult,
  AssociateConnectionWithLagRequest,
  AssociatedGateway,
  AssociateHostedConnectionRequest,
  AssociateMacSecKeyRequest,
  AssociateMacSecKeyResponse,
  AssociateVirtualInterfaceRequest,
  BGPPeer,
  ConfirmConnectionRequest,
  ConfirmConnectionResponse,
  ConfirmCustomerAgreementRequest,
  ConfirmCustomerAgreementResponse,
  ConfirmPrivateVirtualInterfaceRequest,
  ConfirmPrivateVirtualInterfaceResponse,
  ConfirmPublicVirtualInterfaceRequest,
  ConfirmPublicVirtualInterfaceResponse,
  ConfirmTransitVirtualInterfaceRequest,
  ConfirmTransitVirtualInterfaceResponse,
  Connection,
  Connections,
  CreateBGPPeerRequest,
  CreateBGPPeerResponse,
  CreateConnectionRequest,
  CreateDirectConnectGatewayAssociationProposalRequest,
  CreateDirectConnectGatewayAssociationProposalResult,
  CreateDirectConnectGatewayAssociationRequest,
  CreateDirectConnectGatewayAssociationResult,
  CreateDirectConnectGatewayRequest,
  CreateDirectConnectGatewayResult,
  CreateInterconnectRequest,
  CreateLagRequest,
  CreatePrivateVirtualInterfaceRequest,
  CreatePublicVirtualInterfaceRequest,
  CreateTransitVirtualInterfaceRequest,
  CreateTransitVirtualInterfaceResult,
  CustomerAgreement,
  DeleteBGPPeerRequest,
  DeleteBGPPeerResponse,
  DeleteConnectionRequest,
  DeleteDirectConnectGatewayAssociationProposalRequest,
  DeleteDirectConnectGatewayAssociationProposalResult,
  DeleteDirectConnectGatewayAssociationRequest,
  DeleteDirectConnectGatewayAssociationResult,
  DeleteDirectConnectGatewayRequest,
  DeleteDirectConnectGatewayResult,
  DeleteInterconnectRequest,
  DeleteInterconnectResponse,
  DeleteLagRequest,
  DeleteVirtualInterfaceRequest,
  DeleteVirtualInterfaceResponse,
  DescribeConnectionLoaRequest,
  DescribeConnectionLoaResponse,
  DescribeConnectionsOnInterconnectRequest,
  DescribeConnectionsRequest,
  DescribeCustomerMetadataResponse,
  DescribeDirectConnectGatewayAssociationProposalsRequest,
  DescribeDirectConnectGatewayAssociationProposalsResult,
  DescribeDirectConnectGatewayAssociationsRequest,
  DescribeDirectConnectGatewayAssociationsResult,
  DescribeDirectConnectGatewayAttachmentsRequest,
  DescribeDirectConnectGatewayAttachmentsResult,
  DescribeDirectConnectGatewaysRequest,
  DescribeDirectConnectGatewaysResult,
  DescribeHostedConnectionsRequest,
  DescribeInterconnectLoaRequest,
  DescribeInterconnectLoaResponse,
  DescribeInterconnectsRequest,
  DescribeLagsRequest,
  DescribeLoaRequest,
  DescribeRouterConfigurationRequest,
  DescribeRouterConfigurationResponse,
  DescribeTagsRequest,
  DescribeTagsResponse,
  DescribeVirtualInterfacesRequest,
  DirectConnectClientException,
  DirectConnectGateway,
  DirectConnectGatewayAssociation,
  DirectConnectGatewayAssociationProposal,
  DirectConnectGatewayAttachment,
  DirectConnectServerException,
  DisassociateConnectionFromLagRequest,
  DisassociateMacSecKeyRequest,
  DisassociateMacSecKeyResponse,
  DuplicateTagKeysException,
  Interconnect,
  Interconnects,
  Lag,
  Lags,
  ListVirtualInterfaceTestHistoryRequest,
  ListVirtualInterfaceTestHistoryResponse,
  Loa,
  Location,
  Locations,
  MacSecKey,
  NewBGPPeer,
  NewPrivateVirtualInterface,
  NewPrivateVirtualInterfaceAllocation,
  NewPublicVirtualInterface,
  NewPublicVirtualInterfaceAllocation,
  NewTransitVirtualInterface,
  NewTransitVirtualInterfaceAllocation,
  ResourceTag,
  RouteFilterPrefix,
  RouterType,
  StartBgpFailoverTestRequest,
  StartBgpFailoverTestResponse,
  StopBgpFailoverTestRequest,
  StopBgpFailoverTestResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TooManyTagsException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateConnectionRequest,
  UpdateDirectConnectGatewayAssociationRequest,
  UpdateDirectConnectGatewayAssociationResult,
  UpdateDirectConnectGatewayRequest,
  UpdateDirectConnectGatewayResponse,
  UpdateLagRequest,
  UpdateVirtualInterfaceAttributesRequest,
  VirtualGateway,
  VirtualGateways,
  VirtualInterface,
  VirtualInterfaces,
  VirtualInterfaceTestHistory,
} from "../models/models_0";

/**
 * serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand
 */
export const se_AcceptDirectConnectGatewayAssociationProposalCommand = async (
  input: AcceptDirectConnectGatewayAssociationProposalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AcceptDirectConnectGatewayAssociationProposal");
  let body: any;
  body = JSON.stringify(se_AcceptDirectConnectGatewayAssociationProposalRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AllocateConnectionOnInterconnectCommand
 */
export const se_AllocateConnectionOnInterconnectCommand = async (
  input: AllocateConnectionOnInterconnectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AllocateConnectionOnInterconnect");
  let body: any;
  body = JSON.stringify(se_AllocateConnectionOnInterconnectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AllocateHostedConnectionCommand
 */
export const se_AllocateHostedConnectionCommand = async (
  input: AllocateHostedConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AllocateHostedConnection");
  let body: any;
  body = JSON.stringify(se_AllocateHostedConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AllocatePrivateVirtualInterfaceCommand
 */
export const se_AllocatePrivateVirtualInterfaceCommand = async (
  input: AllocatePrivateVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AllocatePrivateVirtualInterface");
  let body: any;
  body = JSON.stringify(se_AllocatePrivateVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AllocatePublicVirtualInterfaceCommand
 */
export const se_AllocatePublicVirtualInterfaceCommand = async (
  input: AllocatePublicVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AllocatePublicVirtualInterface");
  let body: any;
  body = JSON.stringify(se_AllocatePublicVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AllocateTransitVirtualInterfaceCommand
 */
export const se_AllocateTransitVirtualInterfaceCommand = async (
  input: AllocateTransitVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AllocateTransitVirtualInterface");
  let body: any;
  body = JSON.stringify(se_AllocateTransitVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateConnectionWithLagCommand
 */
export const se_AssociateConnectionWithLagCommand = async (
  input: AssociateConnectionWithLagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateConnectionWithLag");
  let body: any;
  body = JSON.stringify(se_AssociateConnectionWithLagRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateHostedConnectionCommand
 */
export const se_AssociateHostedConnectionCommand = async (
  input: AssociateHostedConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateHostedConnection");
  let body: any;
  body = JSON.stringify(se_AssociateHostedConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateMacSecKeyCommand
 */
export const se_AssociateMacSecKeyCommand = async (
  input: AssociateMacSecKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateMacSecKey");
  let body: any;
  body = JSON.stringify(se_AssociateMacSecKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateVirtualInterfaceCommand
 */
export const se_AssociateVirtualInterfaceCommand = async (
  input: AssociateVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateVirtualInterface");
  let body: any;
  body = JSON.stringify(se_AssociateVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ConfirmConnectionCommand
 */
export const se_ConfirmConnectionCommand = async (
  input: ConfirmConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ConfirmConnection");
  let body: any;
  body = JSON.stringify(se_ConfirmConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ConfirmCustomerAgreementCommand
 */
export const se_ConfirmCustomerAgreementCommand = async (
  input: ConfirmCustomerAgreementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ConfirmCustomerAgreement");
  let body: any;
  body = JSON.stringify(se_ConfirmCustomerAgreementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand
 */
export const se_ConfirmPrivateVirtualInterfaceCommand = async (
  input: ConfirmPrivateVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ConfirmPrivateVirtualInterface");
  let body: any;
  body = JSON.stringify(se_ConfirmPrivateVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ConfirmPublicVirtualInterfaceCommand
 */
export const se_ConfirmPublicVirtualInterfaceCommand = async (
  input: ConfirmPublicVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ConfirmPublicVirtualInterface");
  let body: any;
  body = JSON.stringify(se_ConfirmPublicVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ConfirmTransitVirtualInterfaceCommand
 */
export const se_ConfirmTransitVirtualInterfaceCommand = async (
  input: ConfirmTransitVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ConfirmTransitVirtualInterface");
  let body: any;
  body = JSON.stringify(se_ConfirmTransitVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBGPPeerCommand
 */
export const se_CreateBGPPeerCommand = async (
  input: CreateBGPPeerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBGPPeer");
  let body: any;
  body = JSON.stringify(se_CreateBGPPeerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateConnectionCommand
 */
export const se_CreateConnectionCommand = async (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateConnection");
  let body: any;
  body = JSON.stringify(se_CreateConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDirectConnectGatewayCommand
 */
export const se_CreateDirectConnectGatewayCommand = async (
  input: CreateDirectConnectGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDirectConnectGateway");
  let body: any;
  body = JSON.stringify(se_CreateDirectConnectGatewayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDirectConnectGatewayAssociationCommand
 */
export const se_CreateDirectConnectGatewayAssociationCommand = async (
  input: CreateDirectConnectGatewayAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDirectConnectGatewayAssociation");
  let body: any;
  body = JSON.stringify(se_CreateDirectConnectGatewayAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand
 */
export const se_CreateDirectConnectGatewayAssociationProposalCommand = async (
  input: CreateDirectConnectGatewayAssociationProposalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDirectConnectGatewayAssociationProposal");
  let body: any;
  body = JSON.stringify(se_CreateDirectConnectGatewayAssociationProposalRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateInterconnectCommand
 */
export const se_CreateInterconnectCommand = async (
  input: CreateInterconnectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateInterconnect");
  let body: any;
  body = JSON.stringify(se_CreateInterconnectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLagCommand
 */
export const se_CreateLagCommand = async (
  input: CreateLagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLag");
  let body: any;
  body = JSON.stringify(se_CreateLagRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePrivateVirtualInterfaceCommand
 */
export const se_CreatePrivateVirtualInterfaceCommand = async (
  input: CreatePrivateVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePrivateVirtualInterface");
  let body: any;
  body = JSON.stringify(se_CreatePrivateVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePublicVirtualInterfaceCommand
 */
export const se_CreatePublicVirtualInterfaceCommand = async (
  input: CreatePublicVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePublicVirtualInterface");
  let body: any;
  body = JSON.stringify(se_CreatePublicVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTransitVirtualInterfaceCommand
 */
export const se_CreateTransitVirtualInterfaceCommand = async (
  input: CreateTransitVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTransitVirtualInterface");
  let body: any;
  body = JSON.stringify(se_CreateTransitVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBGPPeerCommand
 */
export const se_DeleteBGPPeerCommand = async (
  input: DeleteBGPPeerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBGPPeer");
  let body: any;
  body = JSON.stringify(se_DeleteBGPPeerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteConnectionCommand
 */
export const se_DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteConnection");
  let body: any;
  body = JSON.stringify(se_DeleteConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDirectConnectGatewayCommand
 */
export const se_DeleteDirectConnectGatewayCommand = async (
  input: DeleteDirectConnectGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDirectConnectGateway");
  let body: any;
  body = JSON.stringify(se_DeleteDirectConnectGatewayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand
 */
export const se_DeleteDirectConnectGatewayAssociationCommand = async (
  input: DeleteDirectConnectGatewayAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDirectConnectGatewayAssociation");
  let body: any;
  body = JSON.stringify(se_DeleteDirectConnectGatewayAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand
 */
export const se_DeleteDirectConnectGatewayAssociationProposalCommand = async (
  input: DeleteDirectConnectGatewayAssociationProposalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDirectConnectGatewayAssociationProposal");
  let body: any;
  body = JSON.stringify(se_DeleteDirectConnectGatewayAssociationProposalRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteInterconnectCommand
 */
export const se_DeleteInterconnectCommand = async (
  input: DeleteInterconnectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteInterconnect");
  let body: any;
  body = JSON.stringify(se_DeleteInterconnectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLagCommand
 */
export const se_DeleteLagCommand = async (
  input: DeleteLagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLag");
  let body: any;
  body = JSON.stringify(se_DeleteLagRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteVirtualInterfaceCommand
 */
export const se_DeleteVirtualInterfaceCommand = async (
  input: DeleteVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteVirtualInterface");
  let body: any;
  body = JSON.stringify(se_DeleteVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConnectionLoaCommand
 */
export const se_DescribeConnectionLoaCommand = async (
  input: DescribeConnectionLoaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConnectionLoa");
  let body: any;
  body = JSON.stringify(se_DescribeConnectionLoaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConnectionsCommand
 */
export const se_DescribeConnectionsCommand = async (
  input: DescribeConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConnections");
  let body: any;
  body = JSON.stringify(se_DescribeConnectionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConnectionsOnInterconnectCommand
 */
export const se_DescribeConnectionsOnInterconnectCommand = async (
  input: DescribeConnectionsOnInterconnectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConnectionsOnInterconnect");
  let body: any;
  body = JSON.stringify(se_DescribeConnectionsOnInterconnectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCustomerMetadataCommand
 */
export const se_DescribeCustomerMetadataCommand = async (
  input: DescribeCustomerMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCustomerMetadata");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand
 */
export const se_DescribeDirectConnectGatewayAssociationProposalsCommand = async (
  input: DescribeDirectConnectGatewayAssociationProposalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDirectConnectGatewayAssociationProposals");
  let body: any;
  body = JSON.stringify(se_DescribeDirectConnectGatewayAssociationProposalsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand
 */
export const se_DescribeDirectConnectGatewayAssociationsCommand = async (
  input: DescribeDirectConnectGatewayAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDirectConnectGatewayAssociations");
  let body: any;
  body = JSON.stringify(se_DescribeDirectConnectGatewayAssociationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand
 */
export const se_DescribeDirectConnectGatewayAttachmentsCommand = async (
  input: DescribeDirectConnectGatewayAttachmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDirectConnectGatewayAttachments");
  let body: any;
  body = JSON.stringify(se_DescribeDirectConnectGatewayAttachmentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDirectConnectGatewaysCommand
 */
export const se_DescribeDirectConnectGatewaysCommand = async (
  input: DescribeDirectConnectGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDirectConnectGateways");
  let body: any;
  body = JSON.stringify(se_DescribeDirectConnectGatewaysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeHostedConnectionsCommand
 */
export const se_DescribeHostedConnectionsCommand = async (
  input: DescribeHostedConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeHostedConnections");
  let body: any;
  body = JSON.stringify(se_DescribeHostedConnectionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInterconnectLoaCommand
 */
export const se_DescribeInterconnectLoaCommand = async (
  input: DescribeInterconnectLoaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeInterconnectLoa");
  let body: any;
  body = JSON.stringify(se_DescribeInterconnectLoaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInterconnectsCommand
 */
export const se_DescribeInterconnectsCommand = async (
  input: DescribeInterconnectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeInterconnects");
  let body: any;
  body = JSON.stringify(se_DescribeInterconnectsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLagsCommand
 */
export const se_DescribeLagsCommand = async (
  input: DescribeLagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLags");
  let body: any;
  body = JSON.stringify(se_DescribeLagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLoaCommand
 */
export const se_DescribeLoaCommand = async (
  input: DescribeLoaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLoa");
  let body: any;
  body = JSON.stringify(se_DescribeLoaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLocationsCommand
 */
export const se_DescribeLocationsCommand = async (
  input: DescribeLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLocations");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRouterConfigurationCommand
 */
export const se_DescribeRouterConfigurationCommand = async (
  input: DescribeRouterConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRouterConfiguration");
  let body: any;
  body = JSON.stringify(se_DescribeRouterConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTagsCommand
 */
export const se_DescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTags");
  let body: any;
  body = JSON.stringify(se_DescribeTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeVirtualGatewaysCommand
 */
export const se_DescribeVirtualGatewaysCommand = async (
  input: DescribeVirtualGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeVirtualGateways");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeVirtualInterfacesCommand
 */
export const se_DescribeVirtualInterfacesCommand = async (
  input: DescribeVirtualInterfacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeVirtualInterfaces");
  let body: any;
  body = JSON.stringify(se_DescribeVirtualInterfacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateConnectionFromLagCommand
 */
export const se_DisassociateConnectionFromLagCommand = async (
  input: DisassociateConnectionFromLagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateConnectionFromLag");
  let body: any;
  body = JSON.stringify(se_DisassociateConnectionFromLagRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateMacSecKeyCommand
 */
export const se_DisassociateMacSecKeyCommand = async (
  input: DisassociateMacSecKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateMacSecKey");
  let body: any;
  body = JSON.stringify(se_DisassociateMacSecKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListVirtualInterfaceTestHistoryCommand
 */
export const se_ListVirtualInterfaceTestHistoryCommand = async (
  input: ListVirtualInterfaceTestHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListVirtualInterfaceTestHistory");
  let body: any;
  body = JSON.stringify(se_ListVirtualInterfaceTestHistoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartBgpFailoverTestCommand
 */
export const se_StartBgpFailoverTestCommand = async (
  input: StartBgpFailoverTestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartBgpFailoverTest");
  let body: any;
  body = JSON.stringify(se_StartBgpFailoverTestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopBgpFailoverTestCommand
 */
export const se_StopBgpFailoverTestCommand = async (
  input: StopBgpFailoverTestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopBgpFailoverTest");
  let body: any;
  body = JSON.stringify(se_StopBgpFailoverTestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateConnectionCommand
 */
export const se_UpdateConnectionCommand = async (
  input: UpdateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateConnection");
  let body: any;
  body = JSON.stringify(se_UpdateConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDirectConnectGatewayCommand
 */
export const se_UpdateDirectConnectGatewayCommand = async (
  input: UpdateDirectConnectGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDirectConnectGateway");
  let body: any;
  body = JSON.stringify(se_UpdateDirectConnectGatewayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand
 */
export const se_UpdateDirectConnectGatewayAssociationCommand = async (
  input: UpdateDirectConnectGatewayAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDirectConnectGatewayAssociation");
  let body: any;
  body = JSON.stringify(se_UpdateDirectConnectGatewayAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLagCommand
 */
export const se_UpdateLagCommand = async (
  input: UpdateLagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLag");
  let body: any;
  body = JSON.stringify(se_UpdateLagRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateVirtualInterfaceAttributesCommand
 */
export const se_UpdateVirtualInterfaceAttributesCommand = async (
  input: UpdateVirtualInterfaceAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateVirtualInterfaceAttributes");
  let body: any;
  body = JSON.stringify(se_UpdateVirtualInterfaceAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand
 */
export const de_AcceptDirectConnectGatewayAssociationProposalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptDirectConnectGatewayAssociationProposalCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AcceptDirectConnectGatewayAssociationProposalCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AcceptDirectConnectGatewayAssociationProposalResult(data, context);
  const response: AcceptDirectConnectGatewayAssociationProposalCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommandError
 */
const de_AcceptDirectConnectGatewayAssociationProposalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptDirectConnectGatewayAssociationProposalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AllocateConnectionOnInterconnectCommand
 */
export const de_AllocateConnectionOnInterconnectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocateConnectionOnInterconnectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AllocateConnectionOnInterconnectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Connection(data, context);
  const response: AllocateConnectionOnInterconnectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AllocateConnectionOnInterconnectCommandError
 */
const de_AllocateConnectionOnInterconnectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocateConnectionOnInterconnectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AllocateHostedConnectionCommand
 */
export const de_AllocateHostedConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocateHostedConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AllocateHostedConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Connection(data, context);
  const response: AllocateHostedConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AllocateHostedConnectionCommandError
 */
const de_AllocateHostedConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocateHostedConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      throw await de_DuplicateTagKeysExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommand
 */
export const de_AllocatePrivateVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocatePrivateVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AllocatePrivateVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_VirtualInterface(data, context);
  const response: AllocatePrivateVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommandError
 */
const de_AllocatePrivateVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocatePrivateVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      throw await de_DuplicateTagKeysExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AllocatePublicVirtualInterfaceCommand
 */
export const de_AllocatePublicVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocatePublicVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AllocatePublicVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_VirtualInterface(data, context);
  const response: AllocatePublicVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AllocatePublicVirtualInterfaceCommandError
 */
const de_AllocatePublicVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocatePublicVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      throw await de_DuplicateTagKeysExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AllocateTransitVirtualInterfaceCommand
 */
export const de_AllocateTransitVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocateTransitVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AllocateTransitVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AllocateTransitVirtualInterfaceResult(data, context);
  const response: AllocateTransitVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AllocateTransitVirtualInterfaceCommandError
 */
const de_AllocateTransitVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocateTransitVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      throw await de_DuplicateTagKeysExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateConnectionWithLagCommand
 */
export const de_AssociateConnectionWithLagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConnectionWithLagCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateConnectionWithLagCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Connection(data, context);
  const response: AssociateConnectionWithLagCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateConnectionWithLagCommandError
 */
const de_AssociateConnectionWithLagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConnectionWithLagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateHostedConnectionCommand
 */
export const de_AssociateHostedConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateHostedConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateHostedConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Connection(data, context);
  const response: AssociateHostedConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateHostedConnectionCommandError
 */
const de_AssociateHostedConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateHostedConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateMacSecKeyCommand
 */
export const de_AssociateMacSecKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMacSecKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateMacSecKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateMacSecKeyResponse(data, context);
  const response: AssociateMacSecKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateMacSecKeyCommandError
 */
const de_AssociateMacSecKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMacSecKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateVirtualInterfaceCommand
 */
export const de_AssociateVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_VirtualInterface(data, context);
  const response: AssociateVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateVirtualInterfaceCommandError
 */
const de_AssociateVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ConfirmConnectionCommand
 */
export const de_ConfirmConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ConfirmConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ConfirmConnectionResponse(data, context);
  const response: ConfirmConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ConfirmConnectionCommandError
 */
const de_ConfirmConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ConfirmCustomerAgreementCommand
 */
export const de_ConfirmCustomerAgreementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmCustomerAgreementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ConfirmCustomerAgreementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ConfirmCustomerAgreementResponse(data, context);
  const response: ConfirmCustomerAgreementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ConfirmCustomerAgreementCommandError
 */
const de_ConfirmCustomerAgreementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmCustomerAgreementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand
 */
export const de_ConfirmPrivateVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmPrivateVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ConfirmPrivateVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ConfirmPrivateVirtualInterfaceResponse(data, context);
  const response: ConfirmPrivateVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommandError
 */
const de_ConfirmPrivateVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmPrivateVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommand
 */
export const de_ConfirmPublicVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmPublicVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ConfirmPublicVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ConfirmPublicVirtualInterfaceResponse(data, context);
  const response: ConfirmPublicVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommandError
 */
const de_ConfirmPublicVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmPublicVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommand
 */
export const de_ConfirmTransitVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmTransitVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ConfirmTransitVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ConfirmTransitVirtualInterfaceResponse(data, context);
  const response: ConfirmTransitVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommandError
 */
const de_ConfirmTransitVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmTransitVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateBGPPeerCommand
 */
export const de_CreateBGPPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBGPPeerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBGPPeerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateBGPPeerResponse(data, context);
  const response: CreateBGPPeerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateBGPPeerCommandError
 */
const de_CreateBGPPeerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBGPPeerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateConnectionCommand
 */
export const de_CreateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Connection(data, context);
  const response: CreateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateConnectionCommandError
 */
const de_CreateConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      throw await de_DuplicateTagKeysExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDirectConnectGatewayCommand
 */
export const de_CreateDirectConnectGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectConnectGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDirectConnectGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDirectConnectGatewayResult(data, context);
  const response: CreateDirectConnectGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDirectConnectGatewayCommandError
 */
const de_CreateDirectConnectGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectConnectGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommand
 */
export const de_CreateDirectConnectGatewayAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectConnectGatewayAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDirectConnectGatewayAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDirectConnectGatewayAssociationResult(data, context);
  const response: CreateDirectConnectGatewayAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommandError
 */
const de_CreateDirectConnectGatewayAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectConnectGatewayAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand
 */
export const de_CreateDirectConnectGatewayAssociationProposalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectConnectGatewayAssociationProposalCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDirectConnectGatewayAssociationProposalCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDirectConnectGatewayAssociationProposalResult(data, context);
  const response: CreateDirectConnectGatewayAssociationProposalCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommandError
 */
const de_CreateDirectConnectGatewayAssociationProposalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectConnectGatewayAssociationProposalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateInterconnectCommand
 */
export const de_CreateInterconnectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInterconnectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateInterconnectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Interconnect(data, context);
  const response: CreateInterconnectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateInterconnectCommandError
 */
const de_CreateInterconnectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInterconnectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      throw await de_DuplicateTagKeysExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateLagCommand
 */
export const de_CreateLagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLagCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLagCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Lag(data, context);
  const response: CreateLagCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLagCommandError
 */
const de_CreateLagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      throw await de_DuplicateTagKeysExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreatePrivateVirtualInterfaceCommand
 */
export const de_CreatePrivateVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePrivateVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePrivateVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_VirtualInterface(data, context);
  const response: CreatePrivateVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreatePrivateVirtualInterfaceCommandError
 */
const de_CreatePrivateVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePrivateVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      throw await de_DuplicateTagKeysExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreatePublicVirtualInterfaceCommand
 */
export const de_CreatePublicVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublicVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePublicVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_VirtualInterface(data, context);
  const response: CreatePublicVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreatePublicVirtualInterfaceCommandError
 */
const de_CreatePublicVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublicVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      throw await de_DuplicateTagKeysExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateTransitVirtualInterfaceCommand
 */
export const de_CreateTransitVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTransitVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTransitVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTransitVirtualInterfaceResult(data, context);
  const response: CreateTransitVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateTransitVirtualInterfaceCommandError
 */
const de_CreateTransitVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTransitVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      throw await de_DuplicateTagKeysExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteBGPPeerCommand
 */
export const de_DeleteBGPPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBGPPeerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBGPPeerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteBGPPeerResponse(data, context);
  const response: DeleteBGPPeerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteBGPPeerCommandError
 */
const de_DeleteBGPPeerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBGPPeerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteConnectionCommand
 */
export const de_DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Connection(data, context);
  const response: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteConnectionCommandError
 */
const de_DeleteConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDirectConnectGatewayCommand
 */
export const de_DeleteDirectConnectGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectConnectGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDirectConnectGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDirectConnectGatewayResult(data, context);
  const response: DeleteDirectConnectGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDirectConnectGatewayCommandError
 */
const de_DeleteDirectConnectGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectConnectGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand
 */
export const de_DeleteDirectConnectGatewayAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectConnectGatewayAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDirectConnectGatewayAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDirectConnectGatewayAssociationResult(data, context);
  const response: DeleteDirectConnectGatewayAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommandError
 */
const de_DeleteDirectConnectGatewayAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectConnectGatewayAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand
 */
export const de_DeleteDirectConnectGatewayAssociationProposalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectConnectGatewayAssociationProposalCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDirectConnectGatewayAssociationProposalCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDirectConnectGatewayAssociationProposalResult(data, context);
  const response: DeleteDirectConnectGatewayAssociationProposalCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommandError
 */
const de_DeleteDirectConnectGatewayAssociationProposalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectConnectGatewayAssociationProposalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteInterconnectCommand
 */
export const de_DeleteInterconnectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInterconnectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteInterconnectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteInterconnectResponse(data, context);
  const response: DeleteInterconnectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteInterconnectCommandError
 */
const de_DeleteInterconnectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInterconnectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteLagCommand
 */
export const de_DeleteLagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLagCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLagCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Lag(data, context);
  const response: DeleteLagCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteLagCommandError
 */
const de_DeleteLagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteVirtualInterfaceCommand
 */
export const de_DeleteVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteVirtualInterfaceResponse(data, context);
  const response: DeleteVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteVirtualInterfaceCommandError
 */
const de_DeleteVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeConnectionLoaCommand
 */
export const de_DescribeConnectionLoaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionLoaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConnectionLoaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConnectionLoaResponse(data, context);
  const response: DescribeConnectionLoaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConnectionLoaCommandError
 */
const de_DescribeConnectionLoaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionLoaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeConnectionsCommand
 */
export const de_DescribeConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Connections(data, context);
  const response: DescribeConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConnectionsCommandError
 */
const de_DescribeConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeConnectionsOnInterconnectCommand
 */
export const de_DescribeConnectionsOnInterconnectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionsOnInterconnectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConnectionsOnInterconnectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Connections(data, context);
  const response: DescribeConnectionsOnInterconnectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConnectionsOnInterconnectCommandError
 */
const de_DescribeConnectionsOnInterconnectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionsOnInterconnectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeCustomerMetadataCommand
 */
export const de_DescribeCustomerMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomerMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCustomerMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCustomerMetadataResponse(data, context);
  const response: DescribeCustomerMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeCustomerMetadataCommandError
 */
const de_DescribeCustomerMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomerMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand
 */
export const de_DescribeDirectConnectGatewayAssociationProposalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectConnectGatewayAssociationProposalsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDirectConnectGatewayAssociationProposalsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDirectConnectGatewayAssociationProposalsResult(data, context);
  const response: DescribeDirectConnectGatewayAssociationProposalsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommandError
 */
const de_DescribeDirectConnectGatewayAssociationProposalsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectConnectGatewayAssociationProposalsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand
 */
export const de_DescribeDirectConnectGatewayAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectConnectGatewayAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDirectConnectGatewayAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDirectConnectGatewayAssociationsResult(data, context);
  const response: DescribeDirectConnectGatewayAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommandError
 */
const de_DescribeDirectConnectGatewayAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectConnectGatewayAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand
 */
export const de_DescribeDirectConnectGatewayAttachmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectConnectGatewayAttachmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDirectConnectGatewayAttachmentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDirectConnectGatewayAttachmentsResult(data, context);
  const response: DescribeDirectConnectGatewayAttachmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommandError
 */
const de_DescribeDirectConnectGatewayAttachmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectConnectGatewayAttachmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDirectConnectGatewaysCommand
 */
export const de_DescribeDirectConnectGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectConnectGatewaysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDirectConnectGatewaysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDirectConnectGatewaysResult(data, context);
  const response: DescribeDirectConnectGatewaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDirectConnectGatewaysCommandError
 */
const de_DescribeDirectConnectGatewaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectConnectGatewaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeHostedConnectionsCommand
 */
export const de_DescribeHostedConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHostedConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeHostedConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Connections(data, context);
  const response: DescribeHostedConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeHostedConnectionsCommandError
 */
const de_DescribeHostedConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHostedConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeInterconnectLoaCommand
 */
export const de_DescribeInterconnectLoaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInterconnectLoaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInterconnectLoaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeInterconnectLoaResponse(data, context);
  const response: DescribeInterconnectLoaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeInterconnectLoaCommandError
 */
const de_DescribeInterconnectLoaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInterconnectLoaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeInterconnectsCommand
 */
export const de_DescribeInterconnectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInterconnectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInterconnectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Interconnects(data, context);
  const response: DescribeInterconnectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeInterconnectsCommandError
 */
const de_DescribeInterconnectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInterconnectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeLagsCommand
 */
export const de_DescribeLagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Lags(data, context);
  const response: DescribeLagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLagsCommandError
 */
const de_DescribeLagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeLoaCommand
 */
export const de_DescribeLoaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLoaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Loa(data, context);
  const response: DescribeLoaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLoaCommandError
 */
const de_DescribeLoaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeLocationsCommand
 */
export const de_DescribeLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLocationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Locations(data, context);
  const response: DescribeLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLocationsCommandError
 */
const de_DescribeLocationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeRouterConfigurationCommand
 */
export const de_DescribeRouterConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRouterConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRouterConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRouterConfigurationResponse(data, context);
  const response: DescribeRouterConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeRouterConfigurationCommandError
 */
const de_DescribeRouterConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRouterConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTagsCommand
 */
export const de_DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTagsResponse(data, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeTagsCommandError
 */
const de_DescribeTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeVirtualGatewaysCommand
 */
export const de_DescribeVirtualGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualGatewaysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeVirtualGatewaysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_VirtualGateways(data, context);
  const response: DescribeVirtualGatewaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeVirtualGatewaysCommandError
 */
const de_DescribeVirtualGatewaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualGatewaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeVirtualInterfacesCommand
 */
export const de_DescribeVirtualInterfacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualInterfacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeVirtualInterfacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_VirtualInterfaces(data, context);
  const response: DescribeVirtualInterfacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeVirtualInterfacesCommandError
 */
const de_DescribeVirtualInterfacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualInterfacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateConnectionFromLagCommand
 */
export const de_DisassociateConnectionFromLagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConnectionFromLagCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateConnectionFromLagCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Connection(data, context);
  const response: DisassociateConnectionFromLagCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateConnectionFromLagCommandError
 */
const de_DisassociateConnectionFromLagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConnectionFromLagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateMacSecKeyCommand
 */
export const de_DisassociateMacSecKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMacSecKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateMacSecKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateMacSecKeyResponse(data, context);
  const response: DisassociateMacSecKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateMacSecKeyCommandError
 */
const de_DisassociateMacSecKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMacSecKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListVirtualInterfaceTestHistoryCommand
 */
export const de_ListVirtualInterfaceTestHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualInterfaceTestHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListVirtualInterfaceTestHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListVirtualInterfaceTestHistoryResponse(data, context);
  const response: ListVirtualInterfaceTestHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListVirtualInterfaceTestHistoryCommandError
 */
const de_ListVirtualInterfaceTestHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualInterfaceTestHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartBgpFailoverTestCommand
 */
export const de_StartBgpFailoverTestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBgpFailoverTestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartBgpFailoverTestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartBgpFailoverTestResponse(data, context);
  const response: StartBgpFailoverTestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartBgpFailoverTestCommandError
 */
const de_StartBgpFailoverTestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBgpFailoverTestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopBgpFailoverTestCommand
 */
export const de_StopBgpFailoverTestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBgpFailoverTestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopBgpFailoverTestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopBgpFailoverTestResponse(data, context);
  const response: StopBgpFailoverTestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopBgpFailoverTestCommandError
 */
const de_StopBgpFailoverTestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBgpFailoverTestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      throw await de_DuplicateTagKeysExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateConnectionCommand
 */
export const de_UpdateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Connection(data, context);
  const response: UpdateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateConnectionCommandError
 */
const de_UpdateConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDirectConnectGatewayCommand
 */
export const de_UpdateDirectConnectGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDirectConnectGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDirectConnectGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDirectConnectGatewayResponse(data, context);
  const response: UpdateDirectConnectGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDirectConnectGatewayCommandError
 */
const de_UpdateDirectConnectGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDirectConnectGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand
 */
export const de_UpdateDirectConnectGatewayAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDirectConnectGatewayAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDirectConnectGatewayAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDirectConnectGatewayAssociationResult(data, context);
  const response: UpdateDirectConnectGatewayAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommandError
 */
const de_UpdateDirectConnectGatewayAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDirectConnectGatewayAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateLagCommand
 */
export const de_UpdateLagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLagCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateLagCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_Lag(data, context);
  const response: UpdateLagCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateLagCommandError
 */
const de_UpdateLagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommand
 */
export const de_UpdateVirtualInterfaceAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualInterfaceAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateVirtualInterfaceAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_VirtualInterface(data, context);
  const response: UpdateVirtualInterfaceAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommandError
 */
const de_UpdateVirtualInterfaceAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualInterfaceAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      throw await de_DirectConnectClientExceptionRes(parsedOutput, context);
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      throw await de_DirectConnectServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DirectConnectClientExceptionRes
 */
const de_DirectConnectClientExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectConnectClientException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DirectConnectClientException(body, context);
  const exception = new DirectConnectClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DirectConnectServerExceptionRes
 */
const de_DirectConnectServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectConnectServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DirectConnectServerException(body, context);
  const exception = new DirectConnectServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DuplicateTagKeysExceptionRes
 */
const de_DuplicateTagKeysExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateTagKeysException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateTagKeysException(body, context);
  const exception = new DuplicateTagKeysException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalRequest
 */
const se_AcceptDirectConnectGatewayAssociationProposalRequest = (
  input: AcceptDirectConnectGatewayAssociationProposalRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.associatedGatewayOwnerAccount != null && {
      associatedGatewayOwnerAccount: input.associatedGatewayOwnerAccount,
    }),
    ...(input.directConnectGatewayId != null && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.overrideAllowedPrefixesToDirectConnectGateway != null && {
      overrideAllowedPrefixesToDirectConnectGateway: se_RouteFilterPrefixList(
        input.overrideAllowedPrefixesToDirectConnectGateway,
        context
      ),
    }),
    ...(input.proposalId != null && { proposalId: input.proposalId }),
  };
};

/**
 * serializeAws_json1_1AllocateConnectionOnInterconnectRequest
 */
const se_AllocateConnectionOnInterconnectRequest = (
  input: AllocateConnectionOnInterconnectRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.bandwidth != null && { bandwidth: input.bandwidth }),
    ...(input.connectionName != null && { connectionName: input.connectionName }),
    ...(input.interconnectId != null && { interconnectId: input.interconnectId }),
    ...(input.ownerAccount != null && { ownerAccount: input.ownerAccount }),
    ...(input.vlan != null && { vlan: input.vlan }),
  };
};

/**
 * serializeAws_json1_1AllocateHostedConnectionRequest
 */
const se_AllocateHostedConnectionRequest = (input: AllocateHostedConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.bandwidth != null && { bandwidth: input.bandwidth }),
    ...(input.connectionId != null && { connectionId: input.connectionId }),
    ...(input.connectionName != null && { connectionName: input.connectionName }),
    ...(input.ownerAccount != null && { ownerAccount: input.ownerAccount }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.vlan != null && { vlan: input.vlan }),
  };
};

/**
 * serializeAws_json1_1AllocatePrivateVirtualInterfaceRequest
 */
const se_AllocatePrivateVirtualInterfaceRequest = (
  input: AllocatePrivateVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId != null && { connectionId: input.connectionId }),
    ...(input.newPrivateVirtualInterfaceAllocation != null && {
      newPrivateVirtualInterfaceAllocation: se_NewPrivateVirtualInterfaceAllocation(
        input.newPrivateVirtualInterfaceAllocation,
        context
      ),
    }),
    ...(input.ownerAccount != null && { ownerAccount: input.ownerAccount }),
  };
};

/**
 * serializeAws_json1_1AllocatePublicVirtualInterfaceRequest
 */
const se_AllocatePublicVirtualInterfaceRequest = (
  input: AllocatePublicVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId != null && { connectionId: input.connectionId }),
    ...(input.newPublicVirtualInterfaceAllocation != null && {
      newPublicVirtualInterfaceAllocation: se_NewPublicVirtualInterfaceAllocation(
        input.newPublicVirtualInterfaceAllocation,
        context
      ),
    }),
    ...(input.ownerAccount != null && { ownerAccount: input.ownerAccount }),
  };
};

/**
 * serializeAws_json1_1AllocateTransitVirtualInterfaceRequest
 */
const se_AllocateTransitVirtualInterfaceRequest = (
  input: AllocateTransitVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId != null && { connectionId: input.connectionId }),
    ...(input.newTransitVirtualInterfaceAllocation != null && {
      newTransitVirtualInterfaceAllocation: se_NewTransitVirtualInterfaceAllocation(
        input.newTransitVirtualInterfaceAllocation,
        context
      ),
    }),
    ...(input.ownerAccount != null && { ownerAccount: input.ownerAccount }),
  };
};

/**
 * serializeAws_json1_1AssociateConnectionWithLagRequest
 */
const se_AssociateConnectionWithLagRequest = (
  input: AssociateConnectionWithLagRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId != null && { connectionId: input.connectionId }),
    ...(input.lagId != null && { lagId: input.lagId }),
  };
};

/**
 * serializeAws_json1_1AssociateHostedConnectionRequest
 */
const se_AssociateHostedConnectionRequest = (input: AssociateHostedConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.connectionId != null && { connectionId: input.connectionId }),
    ...(input.parentConnectionId != null && { parentConnectionId: input.parentConnectionId }),
  };
};

/**
 * serializeAws_json1_1AssociateMacSecKeyRequest
 */
const se_AssociateMacSecKeyRequest = (input: AssociateMacSecKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.cak != null && { cak: input.cak }),
    ...(input.ckn != null && { ckn: input.ckn }),
    ...(input.connectionId != null && { connectionId: input.connectionId }),
    ...(input.secretARN != null && { secretARN: input.secretARN }),
  };
};

/**
 * serializeAws_json1_1AssociateVirtualInterfaceRequest
 */
const se_AssociateVirtualInterfaceRequest = (input: AssociateVirtualInterfaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.connectionId != null && { connectionId: input.connectionId }),
    ...(input.virtualInterfaceId != null && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

/**
 * serializeAws_json1_1BGPPeerIdList
 */
const se_BGPPeerIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ConfirmConnectionRequest
 */
const se_ConfirmConnectionRequest = (input: ConfirmConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.connectionId != null && { connectionId: input.connectionId }),
  };
};

/**
 * serializeAws_json1_1ConfirmCustomerAgreementRequest
 */
const se_ConfirmCustomerAgreementRequest = (input: ConfirmCustomerAgreementRequest, context: __SerdeContext): any => {
  return {
    ...(input.agreementName != null && { agreementName: input.agreementName }),
  };
};

/**
 * serializeAws_json1_1ConfirmPrivateVirtualInterfaceRequest
 */
const se_ConfirmPrivateVirtualInterfaceRequest = (
  input: ConfirmPrivateVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.directConnectGatewayId != null && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.virtualGatewayId != null && { virtualGatewayId: input.virtualGatewayId }),
    ...(input.virtualInterfaceId != null && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

/**
 * serializeAws_json1_1ConfirmPublicVirtualInterfaceRequest
 */
const se_ConfirmPublicVirtualInterfaceRequest = (
  input: ConfirmPublicVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.virtualInterfaceId != null && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

/**
 * serializeAws_json1_1ConfirmTransitVirtualInterfaceRequest
 */
const se_ConfirmTransitVirtualInterfaceRequest = (
  input: ConfirmTransitVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.directConnectGatewayId != null && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.virtualInterfaceId != null && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

/**
 * serializeAws_json1_1CreateBGPPeerRequest
 */
const se_CreateBGPPeerRequest = (input: CreateBGPPeerRequest, context: __SerdeContext): any => {
  return {
    ...(input.newBGPPeer != null && { newBGPPeer: se_NewBGPPeer(input.newBGPPeer, context) }),
    ...(input.virtualInterfaceId != null && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

/**
 * serializeAws_json1_1CreateConnectionRequest
 */
const se_CreateConnectionRequest = (input: CreateConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.bandwidth != null && { bandwidth: input.bandwidth }),
    ...(input.connectionName != null && { connectionName: input.connectionName }),
    ...(input.lagId != null && { lagId: input.lagId }),
    ...(input.location != null && { location: input.location }),
    ...(input.providerName != null && { providerName: input.providerName }),
    ...(input.requestMACSec != null && { requestMACSec: input.requestMACSec }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalRequest
 */
const se_CreateDirectConnectGatewayAssociationProposalRequest = (
  input: CreateDirectConnectGatewayAssociationProposalRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.addAllowedPrefixesToDirectConnectGateway != null && {
      addAllowedPrefixesToDirectConnectGateway: se_RouteFilterPrefixList(
        input.addAllowedPrefixesToDirectConnectGateway,
        context
      ),
    }),
    ...(input.directConnectGatewayId != null && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.directConnectGatewayOwnerAccount != null && {
      directConnectGatewayOwnerAccount: input.directConnectGatewayOwnerAccount,
    }),
    ...(input.gatewayId != null && { gatewayId: input.gatewayId }),
    ...(input.removeAllowedPrefixesToDirectConnectGateway != null && {
      removeAllowedPrefixesToDirectConnectGateway: se_RouteFilterPrefixList(
        input.removeAllowedPrefixesToDirectConnectGateway,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1CreateDirectConnectGatewayAssociationRequest
 */
const se_CreateDirectConnectGatewayAssociationRequest = (
  input: CreateDirectConnectGatewayAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.addAllowedPrefixesToDirectConnectGateway != null && {
      addAllowedPrefixesToDirectConnectGateway: se_RouteFilterPrefixList(
        input.addAllowedPrefixesToDirectConnectGateway,
        context
      ),
    }),
    ...(input.directConnectGatewayId != null && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.gatewayId != null && { gatewayId: input.gatewayId }),
    ...(input.virtualGatewayId != null && { virtualGatewayId: input.virtualGatewayId }),
  };
};

/**
 * serializeAws_json1_1CreateDirectConnectGatewayRequest
 */
const se_CreateDirectConnectGatewayRequest = (
  input: CreateDirectConnectGatewayRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.amazonSideAsn != null && { amazonSideAsn: input.amazonSideAsn }),
    ...(input.directConnectGatewayName != null && { directConnectGatewayName: input.directConnectGatewayName }),
  };
};

/**
 * serializeAws_json1_1CreateInterconnectRequest
 */
const se_CreateInterconnectRequest = (input: CreateInterconnectRequest, context: __SerdeContext): any => {
  return {
    ...(input.bandwidth != null && { bandwidth: input.bandwidth }),
    ...(input.interconnectName != null && { interconnectName: input.interconnectName }),
    ...(input.lagId != null && { lagId: input.lagId }),
    ...(input.location != null && { location: input.location }),
    ...(input.providerName != null && { providerName: input.providerName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateLagRequest
 */
const se_CreateLagRequest = (input: CreateLagRequest, context: __SerdeContext): any => {
  return {
    ...(input.childConnectionTags != null && { childConnectionTags: se_TagList(input.childConnectionTags, context) }),
    ...(input.connectionId != null && { connectionId: input.connectionId }),
    ...(input.connectionsBandwidth != null && { connectionsBandwidth: input.connectionsBandwidth }),
    ...(input.lagName != null && { lagName: input.lagName }),
    ...(input.location != null && { location: input.location }),
    ...(input.numberOfConnections != null && { numberOfConnections: input.numberOfConnections }),
    ...(input.providerName != null && { providerName: input.providerName }),
    ...(input.requestMACSec != null && { requestMACSec: input.requestMACSec }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreatePrivateVirtualInterfaceRequest
 */
const se_CreatePrivateVirtualInterfaceRequest = (
  input: CreatePrivateVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId != null && { connectionId: input.connectionId }),
    ...(input.newPrivateVirtualInterface != null && {
      newPrivateVirtualInterface: se_NewPrivateVirtualInterface(input.newPrivateVirtualInterface, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreatePublicVirtualInterfaceRequest
 */
const se_CreatePublicVirtualInterfaceRequest = (
  input: CreatePublicVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId != null && { connectionId: input.connectionId }),
    ...(input.newPublicVirtualInterface != null && {
      newPublicVirtualInterface: se_NewPublicVirtualInterface(input.newPublicVirtualInterface, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateTransitVirtualInterfaceRequest
 */
const se_CreateTransitVirtualInterfaceRequest = (
  input: CreateTransitVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId != null && { connectionId: input.connectionId }),
    ...(input.newTransitVirtualInterface != null && {
      newTransitVirtualInterface: se_NewTransitVirtualInterface(input.newTransitVirtualInterface, context),
    }),
  };
};

/**
 * serializeAws_json1_1DeleteBGPPeerRequest
 */
const se_DeleteBGPPeerRequest = (input: DeleteBGPPeerRequest, context: __SerdeContext): any => {
  return {
    ...(input.asn != null && { asn: input.asn }),
    ...(input.bgpPeerId != null && { bgpPeerId: input.bgpPeerId }),
    ...(input.customerAddress != null && { customerAddress: input.customerAddress }),
    ...(input.virtualInterfaceId != null && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

/**
 * serializeAws_json1_1DeleteConnectionRequest
 */
const se_DeleteConnectionRequest = (input: DeleteConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.connectionId != null && { connectionId: input.connectionId }),
  };
};

/**
 * serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalRequest
 */
const se_DeleteDirectConnectGatewayAssociationProposalRequest = (
  input: DeleteDirectConnectGatewayAssociationProposalRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.proposalId != null && { proposalId: input.proposalId }),
  };
};

/**
 * serializeAws_json1_1DeleteDirectConnectGatewayAssociationRequest
 */
const se_DeleteDirectConnectGatewayAssociationRequest = (
  input: DeleteDirectConnectGatewayAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.associationId != null && { associationId: input.associationId }),
    ...(input.directConnectGatewayId != null && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.virtualGatewayId != null && { virtualGatewayId: input.virtualGatewayId }),
  };
};

/**
 * serializeAws_json1_1DeleteDirectConnectGatewayRequest
 */
const se_DeleteDirectConnectGatewayRequest = (
  input: DeleteDirectConnectGatewayRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.directConnectGatewayId != null && { directConnectGatewayId: input.directConnectGatewayId }),
  };
};

/**
 * serializeAws_json1_1DeleteInterconnectRequest
 */
const se_DeleteInterconnectRequest = (input: DeleteInterconnectRequest, context: __SerdeContext): any => {
  return {
    ...(input.interconnectId != null && { interconnectId: input.interconnectId }),
  };
};

/**
 * serializeAws_json1_1DeleteLagRequest
 */
const se_DeleteLagRequest = (input: DeleteLagRequest, context: __SerdeContext): any => {
  return {
    ...(input.lagId != null && { lagId: input.lagId }),
  };
};

/**
 * serializeAws_json1_1DeleteVirtualInterfaceRequest
 */
const se_DeleteVirtualInterfaceRequest = (input: DeleteVirtualInterfaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.virtualInterfaceId != null && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

/**
 * serializeAws_json1_1DescribeConnectionLoaRequest
 */
const se_DescribeConnectionLoaRequest = (input: DescribeConnectionLoaRequest, context: __SerdeContext): any => {
  return {
    ...(input.connectionId != null && { connectionId: input.connectionId }),
    ...(input.loaContentType != null && { loaContentType: input.loaContentType }),
    ...(input.providerName != null && { providerName: input.providerName }),
  };
};

/**
 * serializeAws_json1_1DescribeConnectionsOnInterconnectRequest
 */
const se_DescribeConnectionsOnInterconnectRequest = (
  input: DescribeConnectionsOnInterconnectRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.interconnectId != null && { interconnectId: input.interconnectId }),
  };
};

/**
 * serializeAws_json1_1DescribeConnectionsRequest
 */
const se_DescribeConnectionsRequest = (input: DescribeConnectionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.connectionId != null && { connectionId: input.connectionId }),
  };
};

/**
 * serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsRequest
 */
const se_DescribeDirectConnectGatewayAssociationProposalsRequest = (
  input: DescribeDirectConnectGatewayAssociationProposalsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.associatedGatewayId != null && { associatedGatewayId: input.associatedGatewayId }),
    ...(input.directConnectGatewayId != null && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.proposalId != null && { proposalId: input.proposalId }),
  };
};

/**
 * serializeAws_json1_1DescribeDirectConnectGatewayAssociationsRequest
 */
const se_DescribeDirectConnectGatewayAssociationsRequest = (
  input: DescribeDirectConnectGatewayAssociationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.associatedGatewayId != null && { associatedGatewayId: input.associatedGatewayId }),
    ...(input.associationId != null && { associationId: input.associationId }),
    ...(input.directConnectGatewayId != null && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.virtualGatewayId != null && { virtualGatewayId: input.virtualGatewayId }),
  };
};

/**
 * serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsRequest
 */
const se_DescribeDirectConnectGatewayAttachmentsRequest = (
  input: DescribeDirectConnectGatewayAttachmentsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.directConnectGatewayId != null && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.virtualInterfaceId != null && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

/**
 * serializeAws_json1_1DescribeDirectConnectGatewaysRequest
 */
const se_DescribeDirectConnectGatewaysRequest = (
  input: DescribeDirectConnectGatewaysRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.directConnectGatewayId != null && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeHostedConnectionsRequest
 */
const se_DescribeHostedConnectionsRequest = (input: DescribeHostedConnectionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.connectionId != null && { connectionId: input.connectionId }),
  };
};

/**
 * serializeAws_json1_1DescribeInterconnectLoaRequest
 */
const se_DescribeInterconnectLoaRequest = (input: DescribeInterconnectLoaRequest, context: __SerdeContext): any => {
  return {
    ...(input.interconnectId != null && { interconnectId: input.interconnectId }),
    ...(input.loaContentType != null && { loaContentType: input.loaContentType }),
    ...(input.providerName != null && { providerName: input.providerName }),
  };
};

/**
 * serializeAws_json1_1DescribeInterconnectsRequest
 */
const se_DescribeInterconnectsRequest = (input: DescribeInterconnectsRequest, context: __SerdeContext): any => {
  return {
    ...(input.interconnectId != null && { interconnectId: input.interconnectId }),
  };
};

/**
 * serializeAws_json1_1DescribeLagsRequest
 */
const se_DescribeLagsRequest = (input: DescribeLagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.lagId != null && { lagId: input.lagId }),
  };
};

/**
 * serializeAws_json1_1DescribeLoaRequest
 */
const se_DescribeLoaRequest = (input: DescribeLoaRequest, context: __SerdeContext): any => {
  return {
    ...(input.connectionId != null && { connectionId: input.connectionId }),
    ...(input.loaContentType != null && { loaContentType: input.loaContentType }),
    ...(input.providerName != null && { providerName: input.providerName }),
  };
};

/**
 * serializeAws_json1_1DescribeRouterConfigurationRequest
 */
const se_DescribeRouterConfigurationRequest = (
  input: DescribeRouterConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.routerTypeIdentifier != null && { routerTypeIdentifier: input.routerTypeIdentifier }),
    ...(input.virtualInterfaceId != null && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

/**
 * serializeAws_json1_1DescribeTagsRequest
 */
const se_DescribeTagsRequest = (input: DescribeTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArns != null && { resourceArns: se_ResourceArnList(input.resourceArns, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeVirtualInterfacesRequest
 */
const se_DescribeVirtualInterfacesRequest = (input: DescribeVirtualInterfacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.connectionId != null && { connectionId: input.connectionId }),
    ...(input.virtualInterfaceId != null && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

/**
 * serializeAws_json1_1DisassociateConnectionFromLagRequest
 */
const se_DisassociateConnectionFromLagRequest = (
  input: DisassociateConnectionFromLagRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId != null && { connectionId: input.connectionId }),
    ...(input.lagId != null && { lagId: input.lagId }),
  };
};

/**
 * serializeAws_json1_1DisassociateMacSecKeyRequest
 */
const se_DisassociateMacSecKeyRequest = (input: DisassociateMacSecKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.connectionId != null && { connectionId: input.connectionId }),
    ...(input.secretARN != null && { secretARN: input.secretARN }),
  };
};

/**
 * serializeAws_json1_1ListVirtualInterfaceTestHistoryRequest
 */
const se_ListVirtualInterfaceTestHistoryRequest = (
  input: ListVirtualInterfaceTestHistoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.bgpPeers != null && { bgpPeers: se_BGPPeerIdList(input.bgpPeers, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.status != null && { status: input.status }),
    ...(input.testId != null && { testId: input.testId }),
    ...(input.virtualInterfaceId != null && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

/**
 * serializeAws_json1_1NewBGPPeer
 */
const se_NewBGPPeer = (input: NewBGPPeer, context: __SerdeContext): any => {
  return {
    ...(input.addressFamily != null && { addressFamily: input.addressFamily }),
    ...(input.amazonAddress != null && { amazonAddress: input.amazonAddress }),
    ...(input.asn != null && { asn: input.asn }),
    ...(input.authKey != null && { authKey: input.authKey }),
    ...(input.customerAddress != null && { customerAddress: input.customerAddress }),
  };
};

/**
 * serializeAws_json1_1NewPrivateVirtualInterface
 */
const se_NewPrivateVirtualInterface = (input: NewPrivateVirtualInterface, context: __SerdeContext): any => {
  return {
    ...(input.addressFamily != null && { addressFamily: input.addressFamily }),
    ...(input.amazonAddress != null && { amazonAddress: input.amazonAddress }),
    ...(input.asn != null && { asn: input.asn }),
    ...(input.authKey != null && { authKey: input.authKey }),
    ...(input.customerAddress != null && { customerAddress: input.customerAddress }),
    ...(input.directConnectGatewayId != null && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.enableSiteLink != null && { enableSiteLink: input.enableSiteLink }),
    ...(input.mtu != null && { mtu: input.mtu }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.virtualGatewayId != null && { virtualGatewayId: input.virtualGatewayId }),
    ...(input.virtualInterfaceName != null && { virtualInterfaceName: input.virtualInterfaceName }),
    ...(input.vlan != null && { vlan: input.vlan }),
  };
};

/**
 * serializeAws_json1_1NewPrivateVirtualInterfaceAllocation
 */
const se_NewPrivateVirtualInterfaceAllocation = (
  input: NewPrivateVirtualInterfaceAllocation,
  context: __SerdeContext
): any => {
  return {
    ...(input.addressFamily != null && { addressFamily: input.addressFamily }),
    ...(input.amazonAddress != null && { amazonAddress: input.amazonAddress }),
    ...(input.asn != null && { asn: input.asn }),
    ...(input.authKey != null && { authKey: input.authKey }),
    ...(input.customerAddress != null && { customerAddress: input.customerAddress }),
    ...(input.mtu != null && { mtu: input.mtu }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.virtualInterfaceName != null && { virtualInterfaceName: input.virtualInterfaceName }),
    ...(input.vlan != null && { vlan: input.vlan }),
  };
};

/**
 * serializeAws_json1_1NewPublicVirtualInterface
 */
const se_NewPublicVirtualInterface = (input: NewPublicVirtualInterface, context: __SerdeContext): any => {
  return {
    ...(input.addressFamily != null && { addressFamily: input.addressFamily }),
    ...(input.amazonAddress != null && { amazonAddress: input.amazonAddress }),
    ...(input.asn != null && { asn: input.asn }),
    ...(input.authKey != null && { authKey: input.authKey }),
    ...(input.customerAddress != null && { customerAddress: input.customerAddress }),
    ...(input.routeFilterPrefixes != null && {
      routeFilterPrefixes: se_RouteFilterPrefixList(input.routeFilterPrefixes, context),
    }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.virtualInterfaceName != null && { virtualInterfaceName: input.virtualInterfaceName }),
    ...(input.vlan != null && { vlan: input.vlan }),
  };
};

/**
 * serializeAws_json1_1NewPublicVirtualInterfaceAllocation
 */
const se_NewPublicVirtualInterfaceAllocation = (
  input: NewPublicVirtualInterfaceAllocation,
  context: __SerdeContext
): any => {
  return {
    ...(input.addressFamily != null && { addressFamily: input.addressFamily }),
    ...(input.amazonAddress != null && { amazonAddress: input.amazonAddress }),
    ...(input.asn != null && { asn: input.asn }),
    ...(input.authKey != null && { authKey: input.authKey }),
    ...(input.customerAddress != null && { customerAddress: input.customerAddress }),
    ...(input.routeFilterPrefixes != null && {
      routeFilterPrefixes: se_RouteFilterPrefixList(input.routeFilterPrefixes, context),
    }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.virtualInterfaceName != null && { virtualInterfaceName: input.virtualInterfaceName }),
    ...(input.vlan != null && { vlan: input.vlan }),
  };
};

/**
 * serializeAws_json1_1NewTransitVirtualInterface
 */
const se_NewTransitVirtualInterface = (input: NewTransitVirtualInterface, context: __SerdeContext): any => {
  return {
    ...(input.addressFamily != null && { addressFamily: input.addressFamily }),
    ...(input.amazonAddress != null && { amazonAddress: input.amazonAddress }),
    ...(input.asn != null && { asn: input.asn }),
    ...(input.authKey != null && { authKey: input.authKey }),
    ...(input.customerAddress != null && { customerAddress: input.customerAddress }),
    ...(input.directConnectGatewayId != null && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.enableSiteLink != null && { enableSiteLink: input.enableSiteLink }),
    ...(input.mtu != null && { mtu: input.mtu }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.virtualInterfaceName != null && { virtualInterfaceName: input.virtualInterfaceName }),
    ...(input.vlan != null && { vlan: input.vlan }),
  };
};

/**
 * serializeAws_json1_1NewTransitVirtualInterfaceAllocation
 */
const se_NewTransitVirtualInterfaceAllocation = (
  input: NewTransitVirtualInterfaceAllocation,
  context: __SerdeContext
): any => {
  return {
    ...(input.addressFamily != null && { addressFamily: input.addressFamily }),
    ...(input.amazonAddress != null && { amazonAddress: input.amazonAddress }),
    ...(input.asn != null && { asn: input.asn }),
    ...(input.authKey != null && { authKey: input.authKey }),
    ...(input.customerAddress != null && { customerAddress: input.customerAddress }),
    ...(input.mtu != null && { mtu: input.mtu }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.virtualInterfaceName != null && { virtualInterfaceName: input.virtualInterfaceName }),
    ...(input.vlan != null && { vlan: input.vlan }),
  };
};

/**
 * serializeAws_json1_1ResourceArnList
 */
const se_ResourceArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RouteFilterPrefix
 */
const se_RouteFilterPrefix = (input: RouteFilterPrefix, context: __SerdeContext): any => {
  return {
    ...(input.cidr != null && { cidr: input.cidr }),
  };
};

/**
 * serializeAws_json1_1RouteFilterPrefixList
 */
const se_RouteFilterPrefixList = (input: RouteFilterPrefix[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RouteFilterPrefix(entry, context);
    });
};

/**
 * serializeAws_json1_1StartBgpFailoverTestRequest
 */
const se_StartBgpFailoverTestRequest = (input: StartBgpFailoverTestRequest, context: __SerdeContext): any => {
  return {
    ...(input.bgpPeers != null && { bgpPeers: se_BGPPeerIdList(input.bgpPeers, context) }),
    ...(input.testDurationInMinutes != null && { testDurationInMinutes: input.testDurationInMinutes }),
    ...(input.virtualInterfaceId != null && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

/**
 * serializeAws_json1_1StopBgpFailoverTestRequest
 */
const se_StopBgpFailoverTestRequest = (input: StopBgpFailoverTestRequest, context: __SerdeContext): any => {
  return {
    ...(input.virtualInterfaceId != null && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: se_TagKeyList(input.tagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateConnectionRequest
 */
const se_UpdateConnectionRequest = (input: UpdateConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.connectionId != null && { connectionId: input.connectionId }),
    ...(input.connectionName != null && { connectionName: input.connectionName }),
    ...(input.encryptionMode != null && { encryptionMode: input.encryptionMode }),
  };
};

/**
 * serializeAws_json1_1UpdateDirectConnectGatewayAssociationRequest
 */
const se_UpdateDirectConnectGatewayAssociationRequest = (
  input: UpdateDirectConnectGatewayAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.addAllowedPrefixesToDirectConnectGateway != null && {
      addAllowedPrefixesToDirectConnectGateway: se_RouteFilterPrefixList(
        input.addAllowedPrefixesToDirectConnectGateway,
        context
      ),
    }),
    ...(input.associationId != null && { associationId: input.associationId }),
    ...(input.removeAllowedPrefixesToDirectConnectGateway != null && {
      removeAllowedPrefixesToDirectConnectGateway: se_RouteFilterPrefixList(
        input.removeAllowedPrefixesToDirectConnectGateway,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateDirectConnectGatewayRequest
 */
const se_UpdateDirectConnectGatewayRequest = (
  input: UpdateDirectConnectGatewayRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.directConnectGatewayId != null && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.newDirectConnectGatewayName != null && {
      newDirectConnectGatewayName: input.newDirectConnectGatewayName,
    }),
  };
};

/**
 * serializeAws_json1_1UpdateLagRequest
 */
const se_UpdateLagRequest = (input: UpdateLagRequest, context: __SerdeContext): any => {
  return {
    ...(input.encryptionMode != null && { encryptionMode: input.encryptionMode }),
    ...(input.lagId != null && { lagId: input.lagId }),
    ...(input.lagName != null && { lagName: input.lagName }),
    ...(input.minimumLinks != null && { minimumLinks: input.minimumLinks }),
  };
};

/**
 * serializeAws_json1_1UpdateVirtualInterfaceAttributesRequest
 */
const se_UpdateVirtualInterfaceAttributesRequest = (
  input: UpdateVirtualInterfaceAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.enableSiteLink != null && { enableSiteLink: input.enableSiteLink }),
    ...(input.mtu != null && { mtu: input.mtu }),
    ...(input.virtualInterfaceId != null && { virtualInterfaceId: input.virtualInterfaceId }),
    ...(input.virtualInterfaceName != null && { virtualInterfaceName: input.virtualInterfaceName }),
  };
};

/**
 * deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalResult
 */
const de_AcceptDirectConnectGatewayAssociationProposalResult = (
  output: any,
  context: __SerdeContext
): AcceptDirectConnectGatewayAssociationProposalResult => {
  return {
    directConnectGatewayAssociation:
      output.directConnectGatewayAssociation != null
        ? de_DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AgreementList
 */
const de_AgreementList = (output: any, context: __SerdeContext): CustomerAgreement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomerAgreement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AllocateTransitVirtualInterfaceResult
 */
const de_AllocateTransitVirtualInterfaceResult = (
  output: any,
  context: __SerdeContext
): AllocateTransitVirtualInterfaceResult => {
  return {
    virtualInterface:
      output.virtualInterface != null ? de_VirtualInterface(output.virtualInterface, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AssociatedGateway
 */
const de_AssociatedGateway = (output: any, context: __SerdeContext): AssociatedGateway => {
  return {
    id: __expectString(output.id),
    ownerAccount: __expectString(output.ownerAccount),
    region: __expectString(output.region),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1AssociateMacSecKeyResponse
 */
const de_AssociateMacSecKeyResponse = (output: any, context: __SerdeContext): AssociateMacSecKeyResponse => {
  return {
    connectionId: __expectString(output.connectionId),
    macSecKeys: output.macSecKeys != null ? de_MacSecKeyList(output.macSecKeys, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AvailableMacSecPortSpeeds
 */
const de_AvailableMacSecPortSpeeds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AvailablePortSpeeds
 */
const de_AvailablePortSpeeds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BGPPeer
 */
const de_BGPPeer = (output: any, context: __SerdeContext): BGPPeer => {
  return {
    addressFamily: __expectString(output.addressFamily),
    amazonAddress: __expectString(output.amazonAddress),
    asn: __expectInt32(output.asn),
    authKey: __expectString(output.authKey),
    awsDeviceV2: __expectString(output.awsDeviceV2),
    awsLogicalDeviceId: __expectString(output.awsLogicalDeviceId),
    bgpPeerId: __expectString(output.bgpPeerId),
    bgpPeerState: __expectString(output.bgpPeerState),
    bgpStatus: __expectString(output.bgpStatus),
    customerAddress: __expectString(output.customerAddress),
  } as any;
};

/**
 * deserializeAws_json1_1BGPPeerIdList
 */
const de_BGPPeerIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BGPPeerList
 */
const de_BGPPeerList = (output: any, context: __SerdeContext): BGPPeer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BGPPeer(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConfirmConnectionResponse
 */
const de_ConfirmConnectionResponse = (output: any, context: __SerdeContext): ConfirmConnectionResponse => {
  return {
    connectionState: __expectString(output.connectionState),
  } as any;
};

/**
 * deserializeAws_json1_1ConfirmCustomerAgreementResponse
 */
const de_ConfirmCustomerAgreementResponse = (
  output: any,
  context: __SerdeContext
): ConfirmCustomerAgreementResponse => {
  return {
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1ConfirmPrivateVirtualInterfaceResponse
 */
const de_ConfirmPrivateVirtualInterfaceResponse = (
  output: any,
  context: __SerdeContext
): ConfirmPrivateVirtualInterfaceResponse => {
  return {
    virtualInterfaceState: __expectString(output.virtualInterfaceState),
  } as any;
};

/**
 * deserializeAws_json1_1ConfirmPublicVirtualInterfaceResponse
 */
const de_ConfirmPublicVirtualInterfaceResponse = (
  output: any,
  context: __SerdeContext
): ConfirmPublicVirtualInterfaceResponse => {
  return {
    virtualInterfaceState: __expectString(output.virtualInterfaceState),
  } as any;
};

/**
 * deserializeAws_json1_1ConfirmTransitVirtualInterfaceResponse
 */
const de_ConfirmTransitVirtualInterfaceResponse = (
  output: any,
  context: __SerdeContext
): ConfirmTransitVirtualInterfaceResponse => {
  return {
    virtualInterfaceState: __expectString(output.virtualInterfaceState),
  } as any;
};

/**
 * deserializeAws_json1_1Connection
 */
const de_Connection = (output: any, context: __SerdeContext): Connection => {
  return {
    awsDevice: __expectString(output.awsDevice),
    awsDeviceV2: __expectString(output.awsDeviceV2),
    awsLogicalDeviceId: __expectString(output.awsLogicalDeviceId),
    bandwidth: __expectString(output.bandwidth),
    connectionId: __expectString(output.connectionId),
    connectionName: __expectString(output.connectionName),
    connectionState: __expectString(output.connectionState),
    encryptionMode: __expectString(output.encryptionMode),
    hasLogicalRedundancy: __expectString(output.hasLogicalRedundancy),
    jumboFrameCapable: __expectBoolean(output.jumboFrameCapable),
    lagId: __expectString(output.lagId),
    loaIssueTime:
      output.loaIssueTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.loaIssueTime)))
        : undefined,
    location: __expectString(output.location),
    macSecCapable: __expectBoolean(output.macSecCapable),
    macSecKeys: output.macSecKeys != null ? de_MacSecKeyList(output.macSecKeys, context) : undefined,
    ownerAccount: __expectString(output.ownerAccount),
    partnerName: __expectString(output.partnerName),
    portEncryptionStatus: __expectString(output.portEncryptionStatus),
    providerName: __expectString(output.providerName),
    region: __expectString(output.region),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
    vlan: __expectInt32(output.vlan),
  } as any;
};

/**
 * deserializeAws_json1_1ConnectionList
 */
const de_ConnectionList = (output: any, context: __SerdeContext): Connection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Connection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Connections
 */
const de_Connections = (output: any, context: __SerdeContext): Connections => {
  return {
    connections: output.connections != null ? de_ConnectionList(output.connections, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateBGPPeerResponse
 */
const de_CreateBGPPeerResponse = (output: any, context: __SerdeContext): CreateBGPPeerResponse => {
  return {
    virtualInterface:
      output.virtualInterface != null ? de_VirtualInterface(output.virtualInterface, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalResult
 */
const de_CreateDirectConnectGatewayAssociationProposalResult = (
  output: any,
  context: __SerdeContext
): CreateDirectConnectGatewayAssociationProposalResult => {
  return {
    directConnectGatewayAssociationProposal:
      output.directConnectGatewayAssociationProposal != null
        ? de_DirectConnectGatewayAssociationProposal(output.directConnectGatewayAssociationProposal, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateDirectConnectGatewayAssociationResult
 */
const de_CreateDirectConnectGatewayAssociationResult = (
  output: any,
  context: __SerdeContext
): CreateDirectConnectGatewayAssociationResult => {
  return {
    directConnectGatewayAssociation:
      output.directConnectGatewayAssociation != null
        ? de_DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateDirectConnectGatewayResult
 */
const de_CreateDirectConnectGatewayResult = (
  output: any,
  context: __SerdeContext
): CreateDirectConnectGatewayResult => {
  return {
    directConnectGateway:
      output.directConnectGateway != null ? de_DirectConnectGateway(output.directConnectGateway, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateTransitVirtualInterfaceResult
 */
const de_CreateTransitVirtualInterfaceResult = (
  output: any,
  context: __SerdeContext
): CreateTransitVirtualInterfaceResult => {
  return {
    virtualInterface:
      output.virtualInterface != null ? de_VirtualInterface(output.virtualInterface, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CustomerAgreement
 */
const de_CustomerAgreement = (output: any, context: __SerdeContext): CustomerAgreement => {
  return {
    agreementName: __expectString(output.agreementName),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteBGPPeerResponse
 */
const de_DeleteBGPPeerResponse = (output: any, context: __SerdeContext): DeleteBGPPeerResponse => {
  return {
    virtualInterface:
      output.virtualInterface != null ? de_VirtualInterface(output.virtualInterface, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalResult
 */
const de_DeleteDirectConnectGatewayAssociationProposalResult = (
  output: any,
  context: __SerdeContext
): DeleteDirectConnectGatewayAssociationProposalResult => {
  return {
    directConnectGatewayAssociationProposal:
      output.directConnectGatewayAssociationProposal != null
        ? de_DirectConnectGatewayAssociationProposal(output.directConnectGatewayAssociationProposal, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteDirectConnectGatewayAssociationResult
 */
const de_DeleteDirectConnectGatewayAssociationResult = (
  output: any,
  context: __SerdeContext
): DeleteDirectConnectGatewayAssociationResult => {
  return {
    directConnectGatewayAssociation:
      output.directConnectGatewayAssociation != null
        ? de_DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteDirectConnectGatewayResult
 */
const de_DeleteDirectConnectGatewayResult = (
  output: any,
  context: __SerdeContext
): DeleteDirectConnectGatewayResult => {
  return {
    directConnectGateway:
      output.directConnectGateway != null ? de_DirectConnectGateway(output.directConnectGateway, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteInterconnectResponse
 */
const de_DeleteInterconnectResponse = (output: any, context: __SerdeContext): DeleteInterconnectResponse => {
  return {
    interconnectState: __expectString(output.interconnectState),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteVirtualInterfaceResponse
 */
const de_DeleteVirtualInterfaceResponse = (output: any, context: __SerdeContext): DeleteVirtualInterfaceResponse => {
  return {
    virtualInterfaceState: __expectString(output.virtualInterfaceState),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeConnectionLoaResponse
 */
const de_DescribeConnectionLoaResponse = (output: any, context: __SerdeContext): DescribeConnectionLoaResponse => {
  return {
    loa: output.loa != null ? de_Loa(output.loa, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCustomerMetadataResponse
 */
const de_DescribeCustomerMetadataResponse = (
  output: any,
  context: __SerdeContext
): DescribeCustomerMetadataResponse => {
  return {
    agreements: output.agreements != null ? de_AgreementList(output.agreements, context) : undefined,
    nniPartnerType: __expectString(output.nniPartnerType),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsResult
 */
const de_DescribeDirectConnectGatewayAssociationProposalsResult = (
  output: any,
  context: __SerdeContext
): DescribeDirectConnectGatewayAssociationProposalsResult => {
  return {
    directConnectGatewayAssociationProposals:
      output.directConnectGatewayAssociationProposals != null
        ? de_DirectConnectGatewayAssociationProposalList(output.directConnectGatewayAssociationProposals, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsResult
 */
const de_DescribeDirectConnectGatewayAssociationsResult = (
  output: any,
  context: __SerdeContext
): DescribeDirectConnectGatewayAssociationsResult => {
  return {
    directConnectGatewayAssociations:
      output.directConnectGatewayAssociations != null
        ? de_DirectConnectGatewayAssociationList(output.directConnectGatewayAssociations, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsResult
 */
const de_DescribeDirectConnectGatewayAttachmentsResult = (
  output: any,
  context: __SerdeContext
): DescribeDirectConnectGatewayAttachmentsResult => {
  return {
    directConnectGatewayAttachments:
      output.directConnectGatewayAttachments != null
        ? de_DirectConnectGatewayAttachmentList(output.directConnectGatewayAttachments, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDirectConnectGatewaysResult
 */
const de_DescribeDirectConnectGatewaysResult = (
  output: any,
  context: __SerdeContext
): DescribeDirectConnectGatewaysResult => {
  return {
    directConnectGateways:
      output.directConnectGateways != null
        ? de_DirectConnectGatewayList(output.directConnectGateways, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeInterconnectLoaResponse
 */
const de_DescribeInterconnectLoaResponse = (output: any, context: __SerdeContext): DescribeInterconnectLoaResponse => {
  return {
    loa: output.loa != null ? de_Loa(output.loa, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRouterConfigurationResponse
 */
const de_DescribeRouterConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeRouterConfigurationResponse => {
  return {
    customerRouterConfig: __expectString(output.customerRouterConfig),
    router: output.router != null ? de_RouterType(output.router, context) : undefined,
    virtualInterfaceId: __expectString(output.virtualInterfaceId),
    virtualInterfaceName: __expectString(output.virtualInterfaceName),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTagsResponse
 */
const de_DescribeTagsResponse = (output: any, context: __SerdeContext): DescribeTagsResponse => {
  return {
    resourceTags: output.resourceTags != null ? de_ResourceTagList(output.resourceTags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DirectConnectClientException
 */
const de_DirectConnectClientException = (output: any, context: __SerdeContext): DirectConnectClientException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DirectConnectGateway
 */
const de_DirectConnectGateway = (output: any, context: __SerdeContext): DirectConnectGateway => {
  return {
    amazonSideAsn: __expectLong(output.amazonSideAsn),
    directConnectGatewayId: __expectString(output.directConnectGatewayId),
    directConnectGatewayName: __expectString(output.directConnectGatewayName),
    directConnectGatewayState: __expectString(output.directConnectGatewayState),
    ownerAccount: __expectString(output.ownerAccount),
    stateChangeError: __expectString(output.stateChangeError),
  } as any;
};

/**
 * deserializeAws_json1_1DirectConnectGatewayAssociation
 */
const de_DirectConnectGatewayAssociation = (output: any, context: __SerdeContext): DirectConnectGatewayAssociation => {
  return {
    allowedPrefixesToDirectConnectGateway:
      output.allowedPrefixesToDirectConnectGateway != null
        ? de_RouteFilterPrefixList(output.allowedPrefixesToDirectConnectGateway, context)
        : undefined,
    associatedGateway:
      output.associatedGateway != null ? de_AssociatedGateway(output.associatedGateway, context) : undefined,
    associationId: __expectString(output.associationId),
    associationState: __expectString(output.associationState),
    directConnectGatewayId: __expectString(output.directConnectGatewayId),
    directConnectGatewayOwnerAccount: __expectString(output.directConnectGatewayOwnerAccount),
    stateChangeError: __expectString(output.stateChangeError),
    virtualGatewayId: __expectString(output.virtualGatewayId),
    virtualGatewayOwnerAccount: __expectString(output.virtualGatewayOwnerAccount),
    virtualGatewayRegion: __expectString(output.virtualGatewayRegion),
  } as any;
};

/**
 * deserializeAws_json1_1DirectConnectGatewayAssociationList
 */
const de_DirectConnectGatewayAssociationList = (
  output: any,
  context: __SerdeContext
): DirectConnectGatewayAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DirectConnectGatewayAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DirectConnectGatewayAssociationProposal
 */
const de_DirectConnectGatewayAssociationProposal = (
  output: any,
  context: __SerdeContext
): DirectConnectGatewayAssociationProposal => {
  return {
    associatedGateway:
      output.associatedGateway != null ? de_AssociatedGateway(output.associatedGateway, context) : undefined,
    directConnectGatewayId: __expectString(output.directConnectGatewayId),
    directConnectGatewayOwnerAccount: __expectString(output.directConnectGatewayOwnerAccount),
    existingAllowedPrefixesToDirectConnectGateway:
      output.existingAllowedPrefixesToDirectConnectGateway != null
        ? de_RouteFilterPrefixList(output.existingAllowedPrefixesToDirectConnectGateway, context)
        : undefined,
    proposalId: __expectString(output.proposalId),
    proposalState: __expectString(output.proposalState),
    requestedAllowedPrefixesToDirectConnectGateway:
      output.requestedAllowedPrefixesToDirectConnectGateway != null
        ? de_RouteFilterPrefixList(output.requestedAllowedPrefixesToDirectConnectGateway, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DirectConnectGatewayAssociationProposalList
 */
const de_DirectConnectGatewayAssociationProposalList = (
  output: any,
  context: __SerdeContext
): DirectConnectGatewayAssociationProposal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DirectConnectGatewayAssociationProposal(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DirectConnectGatewayAttachment
 */
const de_DirectConnectGatewayAttachment = (output: any, context: __SerdeContext): DirectConnectGatewayAttachment => {
  return {
    attachmentState: __expectString(output.attachmentState),
    attachmentType: __expectString(output.attachmentType),
    directConnectGatewayId: __expectString(output.directConnectGatewayId),
    stateChangeError: __expectString(output.stateChangeError),
    virtualInterfaceId: __expectString(output.virtualInterfaceId),
    virtualInterfaceOwnerAccount: __expectString(output.virtualInterfaceOwnerAccount),
    virtualInterfaceRegion: __expectString(output.virtualInterfaceRegion),
  } as any;
};

/**
 * deserializeAws_json1_1DirectConnectGatewayAttachmentList
 */
const de_DirectConnectGatewayAttachmentList = (
  output: any,
  context: __SerdeContext
): DirectConnectGatewayAttachment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DirectConnectGatewayAttachment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DirectConnectGatewayList
 */
const de_DirectConnectGatewayList = (output: any, context: __SerdeContext): DirectConnectGateway[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DirectConnectGateway(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DirectConnectServerException
 */
const de_DirectConnectServerException = (output: any, context: __SerdeContext): DirectConnectServerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DisassociateMacSecKeyResponse
 */
const de_DisassociateMacSecKeyResponse = (output: any, context: __SerdeContext): DisassociateMacSecKeyResponse => {
  return {
    connectionId: __expectString(output.connectionId),
    macSecKeys: output.macSecKeys != null ? de_MacSecKeyList(output.macSecKeys, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DuplicateTagKeysException
 */
const de_DuplicateTagKeysException = (output: any, context: __SerdeContext): DuplicateTagKeysException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Interconnect
 */
const de_Interconnect = (output: any, context: __SerdeContext): Interconnect => {
  return {
    awsDevice: __expectString(output.awsDevice),
    awsDeviceV2: __expectString(output.awsDeviceV2),
    awsLogicalDeviceId: __expectString(output.awsLogicalDeviceId),
    bandwidth: __expectString(output.bandwidth),
    hasLogicalRedundancy: __expectString(output.hasLogicalRedundancy),
    interconnectId: __expectString(output.interconnectId),
    interconnectName: __expectString(output.interconnectName),
    interconnectState: __expectString(output.interconnectState),
    jumboFrameCapable: __expectBoolean(output.jumboFrameCapable),
    lagId: __expectString(output.lagId),
    loaIssueTime:
      output.loaIssueTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.loaIssueTime)))
        : undefined,
    location: __expectString(output.location),
    providerName: __expectString(output.providerName),
    region: __expectString(output.region),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InterconnectList
 */
const de_InterconnectList = (output: any, context: __SerdeContext): Interconnect[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Interconnect(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Interconnects
 */
const de_Interconnects = (output: any, context: __SerdeContext): Interconnects => {
  return {
    interconnects: output.interconnects != null ? de_InterconnectList(output.interconnects, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Lag
 */
const de_Lag = (output: any, context: __SerdeContext): Lag => {
  return {
    allowsHostedConnections: __expectBoolean(output.allowsHostedConnections),
    awsDevice: __expectString(output.awsDevice),
    awsDeviceV2: __expectString(output.awsDeviceV2),
    awsLogicalDeviceId: __expectString(output.awsLogicalDeviceId),
    connections: output.connections != null ? de_ConnectionList(output.connections, context) : undefined,
    connectionsBandwidth: __expectString(output.connectionsBandwidth),
    encryptionMode: __expectString(output.encryptionMode),
    hasLogicalRedundancy: __expectString(output.hasLogicalRedundancy),
    jumboFrameCapable: __expectBoolean(output.jumboFrameCapable),
    lagId: __expectString(output.lagId),
    lagName: __expectString(output.lagName),
    lagState: __expectString(output.lagState),
    location: __expectString(output.location),
    macSecCapable: __expectBoolean(output.macSecCapable),
    macSecKeys: output.macSecKeys != null ? de_MacSecKeyList(output.macSecKeys, context) : undefined,
    minimumLinks: __expectInt32(output.minimumLinks),
    numberOfConnections: __expectInt32(output.numberOfConnections),
    ownerAccount: __expectString(output.ownerAccount),
    providerName: __expectString(output.providerName),
    region: __expectString(output.region),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LagList
 */
const de_LagList = (output: any, context: __SerdeContext): Lag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Lag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Lags
 */
const de_Lags = (output: any, context: __SerdeContext): Lags => {
  return {
    lags: output.lags != null ? de_LagList(output.lags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListVirtualInterfaceTestHistoryResponse
 */
const de_ListVirtualInterfaceTestHistoryResponse = (
  output: any,
  context: __SerdeContext
): ListVirtualInterfaceTestHistoryResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    virtualInterfaceTestHistory:
      output.virtualInterfaceTestHistory != null
        ? de_VirtualInterfaceTestHistoryList(output.virtualInterfaceTestHistory, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Loa
 */
const de_Loa = (output: any, context: __SerdeContext): Loa => {
  return {
    loaContent: output.loaContent != null ? context.base64Decoder(output.loaContent) : undefined,
    loaContentType: __expectString(output.loaContentType),
  } as any;
};

/**
 * deserializeAws_json1_1Location
 */
const de_Location = (output: any, context: __SerdeContext): Location => {
  return {
    availableMacSecPortSpeeds:
      output.availableMacSecPortSpeeds != null
        ? de_AvailableMacSecPortSpeeds(output.availableMacSecPortSpeeds, context)
        : undefined,
    availablePortSpeeds:
      output.availablePortSpeeds != null ? de_AvailablePortSpeeds(output.availablePortSpeeds, context) : undefined,
    availableProviders:
      output.availableProviders != null ? de_ProviderList(output.availableProviders, context) : undefined,
    locationCode: __expectString(output.locationCode),
    locationName: __expectString(output.locationName),
    region: __expectString(output.region),
  } as any;
};

/**
 * deserializeAws_json1_1LocationList
 */
const de_LocationList = (output: any, context: __SerdeContext): Location[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Location(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Locations
 */
const de_Locations = (output: any, context: __SerdeContext): Locations => {
  return {
    locations: output.locations != null ? de_LocationList(output.locations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MacSecKey
 */
const de_MacSecKey = (output: any, context: __SerdeContext): MacSecKey => {
  return {
    ckn: __expectString(output.ckn),
    secretARN: __expectString(output.secretARN),
    startOn: __expectString(output.startOn),
    state: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_json1_1MacSecKeyList
 */
const de_MacSecKeyList = (output: any, context: __SerdeContext): MacSecKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MacSecKey(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProviderList
 */
const de_ProviderList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceTag
 */
const de_ResourceTag = (output: any, context: __SerdeContext): ResourceTag => {
  return {
    resourceArn: __expectString(output.resourceArn),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceTagList
 */
const de_ResourceTagList = (output: any, context: __SerdeContext): ResourceTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceTag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RouteFilterPrefix
 */
const de_RouteFilterPrefix = (output: any, context: __SerdeContext): RouteFilterPrefix => {
  return {
    cidr: __expectString(output.cidr),
  } as any;
};

/**
 * deserializeAws_json1_1RouteFilterPrefixList
 */
const de_RouteFilterPrefixList = (output: any, context: __SerdeContext): RouteFilterPrefix[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RouteFilterPrefix(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RouterType
 */
const de_RouterType = (output: any, context: __SerdeContext): RouterType => {
  return {
    platform: __expectString(output.platform),
    routerTypeIdentifier: __expectString(output.routerTypeIdentifier),
    software: __expectString(output.software),
    vendor: __expectString(output.vendor),
    xsltTemplateName: __expectString(output.xsltTemplateName),
    xsltTemplateNameForMacSec: __expectString(output.xsltTemplateNameForMacSec),
  } as any;
};

/**
 * deserializeAws_json1_1StartBgpFailoverTestResponse
 */
const de_StartBgpFailoverTestResponse = (output: any, context: __SerdeContext): StartBgpFailoverTestResponse => {
  return {
    virtualInterfaceTest:
      output.virtualInterfaceTest != null
        ? de_VirtualInterfaceTestHistory(output.virtualInterfaceTest, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StopBgpFailoverTestResponse
 */
const de_StopBgpFailoverTestResponse = (output: any, context: __SerdeContext): StopBgpFailoverTestResponse => {
  return {
    virtualInterfaceTest:
      output.virtualInterfaceTest != null
        ? de_VirtualInterfaceTestHistory(output.virtualInterfaceTest, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateDirectConnectGatewayAssociationResult
 */
const de_UpdateDirectConnectGatewayAssociationResult = (
  output: any,
  context: __SerdeContext
): UpdateDirectConnectGatewayAssociationResult => {
  return {
    directConnectGatewayAssociation:
      output.directConnectGatewayAssociation != null
        ? de_DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateDirectConnectGatewayResponse
 */
const de_UpdateDirectConnectGatewayResponse = (
  output: any,
  context: __SerdeContext
): UpdateDirectConnectGatewayResponse => {
  return {
    directConnectGateway:
      output.directConnectGateway != null ? de_DirectConnectGateway(output.directConnectGateway, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1VirtualGateway
 */
const de_VirtualGateway = (output: any, context: __SerdeContext): VirtualGateway => {
  return {
    virtualGatewayId: __expectString(output.virtualGatewayId),
    virtualGatewayState: __expectString(output.virtualGatewayState),
  } as any;
};

/**
 * deserializeAws_json1_1VirtualGatewayList
 */
const de_VirtualGatewayList = (output: any, context: __SerdeContext): VirtualGateway[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VirtualGateway(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VirtualGateways
 */
const de_VirtualGateways = (output: any, context: __SerdeContext): VirtualGateways => {
  return {
    virtualGateways:
      output.virtualGateways != null ? de_VirtualGatewayList(output.virtualGateways, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1VirtualInterface
 */
const de_VirtualInterface = (output: any, context: __SerdeContext): VirtualInterface => {
  return {
    addressFamily: __expectString(output.addressFamily),
    amazonAddress: __expectString(output.amazonAddress),
    amazonSideAsn: __expectLong(output.amazonSideAsn),
    asn: __expectInt32(output.asn),
    authKey: __expectString(output.authKey),
    awsDeviceV2: __expectString(output.awsDeviceV2),
    awsLogicalDeviceId: __expectString(output.awsLogicalDeviceId),
    bgpPeers: output.bgpPeers != null ? de_BGPPeerList(output.bgpPeers, context) : undefined,
    connectionId: __expectString(output.connectionId),
    customerAddress: __expectString(output.customerAddress),
    customerRouterConfig: __expectString(output.customerRouterConfig),
    directConnectGatewayId: __expectString(output.directConnectGatewayId),
    jumboFrameCapable: __expectBoolean(output.jumboFrameCapable),
    location: __expectString(output.location),
    mtu: __expectInt32(output.mtu),
    ownerAccount: __expectString(output.ownerAccount),
    region: __expectString(output.region),
    routeFilterPrefixes:
      output.routeFilterPrefixes != null ? de_RouteFilterPrefixList(output.routeFilterPrefixes, context) : undefined,
    siteLinkEnabled: __expectBoolean(output.siteLinkEnabled),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
    virtualGatewayId: __expectString(output.virtualGatewayId),
    virtualInterfaceId: __expectString(output.virtualInterfaceId),
    virtualInterfaceName: __expectString(output.virtualInterfaceName),
    virtualInterfaceState: __expectString(output.virtualInterfaceState),
    virtualInterfaceType: __expectString(output.virtualInterfaceType),
    vlan: __expectInt32(output.vlan),
  } as any;
};

/**
 * deserializeAws_json1_1VirtualInterfaceList
 */
const de_VirtualInterfaceList = (output: any, context: __SerdeContext): VirtualInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VirtualInterface(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VirtualInterfaces
 */
const de_VirtualInterfaces = (output: any, context: __SerdeContext): VirtualInterfaces => {
  return {
    virtualInterfaces:
      output.virtualInterfaces != null ? de_VirtualInterfaceList(output.virtualInterfaces, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1VirtualInterfaceTestHistory
 */
const de_VirtualInterfaceTestHistory = (output: any, context: __SerdeContext): VirtualInterfaceTestHistory => {
  return {
    bgpPeers: output.bgpPeers != null ? de_BGPPeerIdList(output.bgpPeers, context) : undefined,
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    ownerAccount: __expectString(output.ownerAccount),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
    testDurationInMinutes: __expectInt32(output.testDurationInMinutes),
    testId: __expectString(output.testId),
    virtualInterfaceId: __expectString(output.virtualInterfaceId),
  } as any;
};

/**
 * deserializeAws_json1_1VirtualInterfaceTestHistoryList
 */
const de_VirtualInterfaceTestHistoryList = (output: any, context: __SerdeContext): VirtualInterfaceTestHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VirtualInterfaceTestHistory(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `OvertureService.${operation}`,
  };
}

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
