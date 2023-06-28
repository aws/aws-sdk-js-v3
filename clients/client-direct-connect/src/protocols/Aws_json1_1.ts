// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  AllocateConnectionOnInterconnectRequest,
  AllocateHostedConnectionRequest,
  AllocatePrivateVirtualInterfaceRequest,
  AllocatePublicVirtualInterfaceRequest,
  AllocateTransitVirtualInterfaceRequest,
  AssociateConnectionWithLagRequest,
  AssociateHostedConnectionRequest,
  AssociateMacSecKeyRequest,
  AssociateVirtualInterfaceRequest,
  ConfirmConnectionRequest,
  ConfirmCustomerAgreementRequest,
  ConfirmPrivateVirtualInterfaceRequest,
  ConfirmPublicVirtualInterfaceRequest,
  ConfirmTransitVirtualInterfaceRequest,
  Connection,
  Connections,
  CreateBGPPeerRequest,
  CreateConnectionRequest,
  CreateDirectConnectGatewayAssociationProposalRequest,
  CreateDirectConnectGatewayAssociationRequest,
  CreateDirectConnectGatewayRequest,
  CreateInterconnectRequest,
  CreateLagRequest,
  CreatePrivateVirtualInterfaceRequest,
  CreatePublicVirtualInterfaceRequest,
  CreateTransitVirtualInterfaceRequest,
  DeleteBGPPeerRequest,
  DeleteConnectionRequest,
  DeleteDirectConnectGatewayAssociationProposalRequest,
  DeleteDirectConnectGatewayAssociationRequest,
  DeleteDirectConnectGatewayRequest,
  DeleteInterconnectRequest,
  DeleteLagRequest,
  DeleteVirtualInterfaceRequest,
  DescribeConnectionLoaRequest,
  DescribeConnectionLoaResponse,
  DescribeConnectionsOnInterconnectRequest,
  DescribeConnectionsRequest,
  DescribeDirectConnectGatewayAssociationProposalsRequest,
  DescribeDirectConnectGatewayAssociationsRequest,
  DescribeDirectConnectGatewayAttachmentsRequest,
  DescribeDirectConnectGatewaysRequest,
  DescribeHostedConnectionsRequest,
  DescribeInterconnectLoaRequest,
  DescribeInterconnectLoaResponse,
  DescribeInterconnectsRequest,
  DescribeLagsRequest,
  DescribeLoaRequest,
  DescribeRouterConfigurationRequest,
  DescribeTagsRequest,
  DescribeVirtualInterfacesRequest,
  DirectConnectClientException,
  DirectConnectServerException,
  DisassociateConnectionFromLagRequest,
  DisassociateMacSecKeyRequest,
  DuplicateTagKeysException,
  Interconnect,
  Interconnects,
  Lag,
  Lags,
  ListVirtualInterfaceTestHistoryRequest,
  ListVirtualInterfaceTestHistoryResponse,
  Loa,
  NewBGPPeer,
  NewPrivateVirtualInterface,
  NewPrivateVirtualInterfaceAllocation,
  NewPublicVirtualInterface,
  NewPublicVirtualInterfaceAllocation,
  NewTransitVirtualInterface,
  NewTransitVirtualInterfaceAllocation,
  RouteFilterPrefix,
  StartBgpFailoverTestRequest,
  StartBgpFailoverTestResponse,
  StopBgpFailoverTestRequest,
  StopBgpFailoverTestResponse,
  Tag,
  TagResourceRequest,
  TooManyTagsException,
  UntagResourceRequest,
  UpdateConnectionRequest,
  UpdateDirectConnectGatewayAssociationRequest,
  UpdateDirectConnectGatewayRequest,
  UpdateLagRequest,
  UpdateVirtualInterfaceAttributesRequest,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: AcceptDirectConnectGatewayAssociationProposalCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AllocatePrivateVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AllocatePublicVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AllocateTransitVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociateMacSecKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociateVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ConfirmConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ConfirmCustomerAgreementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ConfirmPrivateVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ConfirmPublicVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ConfirmTransitVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateBGPPeerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDirectConnectGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDirectConnectGatewayAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDirectConnectGatewayAssociationProposalCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreatePrivateVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreatePublicVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateTransitVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteBGPPeerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteDirectConnectGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteDirectConnectGatewayAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteDirectConnectGatewayAssociationProposalCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteInterconnectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeCustomerMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeDirectConnectGatewayAssociationProposalsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeDirectConnectGatewayAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeDirectConnectGatewayAttachmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeDirectConnectGatewaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeRouterConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeVirtualGatewaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeVirtualInterfacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateMacSecKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateDirectConnectGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateDirectConnectGatewayAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateVirtualInterfaceAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AcceptDirectConnectGatewayAssociationProposalRequest omitted.

// se_AllocateConnectionOnInterconnectRequest omitted.

// se_AllocateHostedConnectionRequest omitted.

// se_AllocatePrivateVirtualInterfaceRequest omitted.

// se_AllocatePublicVirtualInterfaceRequest omitted.

// se_AllocateTransitVirtualInterfaceRequest omitted.

// se_AssociateConnectionWithLagRequest omitted.

// se_AssociateHostedConnectionRequest omitted.

// se_AssociateMacSecKeyRequest omitted.

// se_AssociateVirtualInterfaceRequest omitted.

// se_BGPPeerIdList omitted.

// se_ConfirmConnectionRequest omitted.

// se_ConfirmCustomerAgreementRequest omitted.

// se_ConfirmPrivateVirtualInterfaceRequest omitted.

// se_ConfirmPublicVirtualInterfaceRequest omitted.

// se_ConfirmTransitVirtualInterfaceRequest omitted.

// se_CreateBGPPeerRequest omitted.

// se_CreateConnectionRequest omitted.

// se_CreateDirectConnectGatewayAssociationProposalRequest omitted.

// se_CreateDirectConnectGatewayAssociationRequest omitted.

// se_CreateDirectConnectGatewayRequest omitted.

// se_CreateInterconnectRequest omitted.

// se_CreateLagRequest omitted.

// se_CreatePrivateVirtualInterfaceRequest omitted.

// se_CreatePublicVirtualInterfaceRequest omitted.

// se_CreateTransitVirtualInterfaceRequest omitted.

// se_DeleteBGPPeerRequest omitted.

// se_DeleteConnectionRequest omitted.

// se_DeleteDirectConnectGatewayAssociationProposalRequest omitted.

// se_DeleteDirectConnectGatewayAssociationRequest omitted.

// se_DeleteDirectConnectGatewayRequest omitted.

// se_DeleteInterconnectRequest omitted.

// se_DeleteLagRequest omitted.

// se_DeleteVirtualInterfaceRequest omitted.

// se_DescribeConnectionLoaRequest omitted.

// se_DescribeConnectionsOnInterconnectRequest omitted.

// se_DescribeConnectionsRequest omitted.

// se_DescribeDirectConnectGatewayAssociationProposalsRequest omitted.

// se_DescribeDirectConnectGatewayAssociationsRequest omitted.

// se_DescribeDirectConnectGatewayAttachmentsRequest omitted.

// se_DescribeDirectConnectGatewaysRequest omitted.

// se_DescribeHostedConnectionsRequest omitted.

// se_DescribeInterconnectLoaRequest omitted.

// se_DescribeInterconnectsRequest omitted.

// se_DescribeLagsRequest omitted.

// se_DescribeLoaRequest omitted.

// se_DescribeRouterConfigurationRequest omitted.

// se_DescribeTagsRequest omitted.

// se_DescribeVirtualInterfacesRequest omitted.

// se_DisassociateConnectionFromLagRequest omitted.

// se_DisassociateMacSecKeyRequest omitted.

// se_ListVirtualInterfaceTestHistoryRequest omitted.

// se_NewBGPPeer omitted.

// se_NewPrivateVirtualInterface omitted.

// se_NewPrivateVirtualInterfaceAllocation omitted.

// se_NewPublicVirtualInterface omitted.

// se_NewPublicVirtualInterfaceAllocation omitted.

// se_NewTransitVirtualInterface omitted.

// se_NewTransitVirtualInterfaceAllocation omitted.

// se_ResourceArnList omitted.

// se_RouteFilterPrefix omitted.

// se_RouteFilterPrefixList omitted.

// se_StartBgpFailoverTestRequest omitted.

// se_StopBgpFailoverTestRequest omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateConnectionRequest omitted.

// se_UpdateDirectConnectGatewayAssociationRequest omitted.

// se_UpdateDirectConnectGatewayRequest omitted.

// se_UpdateLagRequest omitted.

// se_UpdateVirtualInterfaceAttributesRequest omitted.

// de_AcceptDirectConnectGatewayAssociationProposalResult omitted.

// de_AgreementList omitted.

// de_AllocateTransitVirtualInterfaceResult omitted.

// de_AssociatedGateway omitted.

// de_AssociateMacSecKeyResponse omitted.

// de_AvailableMacSecPortSpeeds omitted.

// de_AvailablePortSpeeds omitted.

// de_BGPPeer omitted.

// de_BGPPeerIdList omitted.

// de_BGPPeerList omitted.

// de_ConfirmConnectionResponse omitted.

// de_ConfirmCustomerAgreementResponse omitted.

// de_ConfirmPrivateVirtualInterfaceResponse omitted.

// de_ConfirmPublicVirtualInterfaceResponse omitted.

// de_ConfirmTransitVirtualInterfaceResponse omitted.

/**
 * deserializeAws_json1_1Connection
 */
const de_Connection = (output: any, context: __SerdeContext): Connection => {
  return take(output, {
    awsDevice: __expectString,
    awsDeviceV2: __expectString,
    awsLogicalDeviceId: __expectString,
    bandwidth: __expectString,
    connectionId: __expectString,
    connectionName: __expectString,
    connectionState: __expectString,
    encryptionMode: __expectString,
    hasLogicalRedundancy: __expectString,
    jumboFrameCapable: __expectBoolean,
    lagId: __expectString,
    loaIssueTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    location: __expectString,
    macSecCapable: __expectBoolean,
    macSecKeys: _json,
    ownerAccount: __expectString,
    partnerName: __expectString,
    portEncryptionStatus: __expectString,
    providerName: __expectString,
    region: __expectString,
    tags: _json,
    vlan: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ConnectionList
 */
const de_ConnectionList = (output: any, context: __SerdeContext): Connection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Connection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Connections
 */
const de_Connections = (output: any, context: __SerdeContext): Connections => {
  return take(output, {
    connections: (_: any) => de_ConnectionList(_, context),
  }) as any;
};

// de_CreateBGPPeerResponse omitted.

// de_CreateDirectConnectGatewayAssociationProposalResult omitted.

// de_CreateDirectConnectGatewayAssociationResult omitted.

// de_CreateDirectConnectGatewayResult omitted.

// de_CreateTransitVirtualInterfaceResult omitted.

// de_CustomerAgreement omitted.

// de_DeleteBGPPeerResponse omitted.

// de_DeleteDirectConnectGatewayAssociationProposalResult omitted.

// de_DeleteDirectConnectGatewayAssociationResult omitted.

// de_DeleteDirectConnectGatewayResult omitted.

// de_DeleteInterconnectResponse omitted.

// de_DeleteVirtualInterfaceResponse omitted.

/**
 * deserializeAws_json1_1DescribeConnectionLoaResponse
 */
const de_DescribeConnectionLoaResponse = (output: any, context: __SerdeContext): DescribeConnectionLoaResponse => {
  return take(output, {
    loa: (_: any) => de_Loa(_, context),
  }) as any;
};

// de_DescribeCustomerMetadataResponse omitted.

// de_DescribeDirectConnectGatewayAssociationProposalsResult omitted.

// de_DescribeDirectConnectGatewayAssociationsResult omitted.

// de_DescribeDirectConnectGatewayAttachmentsResult omitted.

// de_DescribeDirectConnectGatewaysResult omitted.

/**
 * deserializeAws_json1_1DescribeInterconnectLoaResponse
 */
const de_DescribeInterconnectLoaResponse = (output: any, context: __SerdeContext): DescribeInterconnectLoaResponse => {
  return take(output, {
    loa: (_: any) => de_Loa(_, context),
  }) as any;
};

// de_DescribeRouterConfigurationResponse omitted.

// de_DescribeTagsResponse omitted.

// de_DirectConnectClientException omitted.

// de_DirectConnectGateway omitted.

// de_DirectConnectGatewayAssociation omitted.

// de_DirectConnectGatewayAssociationList omitted.

// de_DirectConnectGatewayAssociationProposal omitted.

// de_DirectConnectGatewayAssociationProposalList omitted.

// de_DirectConnectGatewayAttachment omitted.

// de_DirectConnectGatewayAttachmentList omitted.

// de_DirectConnectGatewayList omitted.

// de_DirectConnectServerException omitted.

// de_DisassociateMacSecKeyResponse omitted.

// de_DuplicateTagKeysException omitted.

/**
 * deserializeAws_json1_1Interconnect
 */
const de_Interconnect = (output: any, context: __SerdeContext): Interconnect => {
  return take(output, {
    awsDevice: __expectString,
    awsDeviceV2: __expectString,
    awsLogicalDeviceId: __expectString,
    bandwidth: __expectString,
    hasLogicalRedundancy: __expectString,
    interconnectId: __expectString,
    interconnectName: __expectString,
    interconnectState: __expectString,
    jumboFrameCapable: __expectBoolean,
    lagId: __expectString,
    loaIssueTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    location: __expectString,
    providerName: __expectString,
    region: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1InterconnectList
 */
const de_InterconnectList = (output: any, context: __SerdeContext): Interconnect[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Interconnect(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Interconnects
 */
const de_Interconnects = (output: any, context: __SerdeContext): Interconnects => {
  return take(output, {
    interconnects: (_: any) => de_InterconnectList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Lag
 */
const de_Lag = (output: any, context: __SerdeContext): Lag => {
  return take(output, {
    allowsHostedConnections: __expectBoolean,
    awsDevice: __expectString,
    awsDeviceV2: __expectString,
    awsLogicalDeviceId: __expectString,
    connections: (_: any) => de_ConnectionList(_, context),
    connectionsBandwidth: __expectString,
    encryptionMode: __expectString,
    hasLogicalRedundancy: __expectString,
    jumboFrameCapable: __expectBoolean,
    lagId: __expectString,
    lagName: __expectString,
    lagState: __expectString,
    location: __expectString,
    macSecCapable: __expectBoolean,
    macSecKeys: _json,
    minimumLinks: __expectInt32,
    numberOfConnections: __expectInt32,
    ownerAccount: __expectString,
    providerName: __expectString,
    region: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1LagList
 */
const de_LagList = (output: any, context: __SerdeContext): Lag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Lag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Lags
 */
const de_Lags = (output: any, context: __SerdeContext): Lags => {
  return take(output, {
    lags: (_: any) => de_LagList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListVirtualInterfaceTestHistoryResponse
 */
const de_ListVirtualInterfaceTestHistoryResponse = (
  output: any,
  context: __SerdeContext
): ListVirtualInterfaceTestHistoryResponse => {
  return take(output, {
    nextToken: __expectString,
    virtualInterfaceTestHistory: (_: any) => de_VirtualInterfaceTestHistoryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Loa
 */
const de_Loa = (output: any, context: __SerdeContext): Loa => {
  return take(output, {
    loaContent: context.base64Decoder,
    loaContentType: __expectString,
  }) as any;
};

// de_Location omitted.

// de_LocationList omitted.

// de_Locations omitted.

// de_MacSecKey omitted.

// de_MacSecKeyList omitted.

// de_ProviderList omitted.

// de_ResourceTag omitted.

// de_ResourceTagList omitted.

// de_RouteFilterPrefix omitted.

// de_RouteFilterPrefixList omitted.

// de_RouterType omitted.

/**
 * deserializeAws_json1_1StartBgpFailoverTestResponse
 */
const de_StartBgpFailoverTestResponse = (output: any, context: __SerdeContext): StartBgpFailoverTestResponse => {
  return take(output, {
    virtualInterfaceTest: (_: any) => de_VirtualInterfaceTestHistory(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StopBgpFailoverTestResponse
 */
const de_StopBgpFailoverTestResponse = (output: any, context: __SerdeContext): StopBgpFailoverTestResponse => {
  return take(output, {
    virtualInterfaceTest: (_: any) => de_VirtualInterfaceTestHistory(_, context),
  }) as any;
};

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_TooManyTagsException omitted.

// de_UntagResourceResponse omitted.

// de_UpdateDirectConnectGatewayAssociationResult omitted.

// de_UpdateDirectConnectGatewayResponse omitted.

// de_VirtualGateway omitted.

// de_VirtualGatewayList omitted.

// de_VirtualGateways omitted.

// de_VirtualInterface omitted.

// de_VirtualInterfaceList omitted.

// de_VirtualInterfaces omitted.

/**
 * deserializeAws_json1_1VirtualInterfaceTestHistory
 */
const de_VirtualInterfaceTestHistory = (output: any, context: __SerdeContext): VirtualInterfaceTestHistory => {
  return take(output, {
    bgpPeers: _json,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ownerAccount: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    testDurationInMinutes: __expectInt32,
    testId: __expectString,
    virtualInterfaceId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1VirtualInterfaceTestHistoryList
 */
const de_VirtualInterfaceTestHistoryList = (output: any, context: __SerdeContext): VirtualInterfaceTestHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
