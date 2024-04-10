// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateBillOfMaterialsImportJobCommand,
  CreateBillOfMaterialsImportJobCommandInput,
  CreateBillOfMaterialsImportJobCommandOutput,
} from "./commands/CreateBillOfMaterialsImportJobCommand";
import {
  GetBillOfMaterialsImportJobCommand,
  GetBillOfMaterialsImportJobCommandInput,
  GetBillOfMaterialsImportJobCommandOutput,
} from "./commands/GetBillOfMaterialsImportJobCommand";
import {
  SendDataIntegrationEventCommand,
  SendDataIntegrationEventCommandInput,
  SendDataIntegrationEventCommandOutput,
} from "./commands/SendDataIntegrationEventCommand";
import { SupplyChainClient, SupplyChainClientConfig } from "./SupplyChainClient";

const commands = {
  CreateBillOfMaterialsImportJobCommand,
  GetBillOfMaterialsImportJobCommand,
  SendDataIntegrationEventCommand,
};

export interface SupplyChain {
  /**
   * @see {@link CreateBillOfMaterialsImportJobCommand}
   */
  createBillOfMaterialsImportJob(
    args: CreateBillOfMaterialsImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBillOfMaterialsImportJobCommandOutput>;
  createBillOfMaterialsImportJob(
    args: CreateBillOfMaterialsImportJobCommandInput,
    cb: (err: any, data?: CreateBillOfMaterialsImportJobCommandOutput) => void
  ): void;
  createBillOfMaterialsImportJob(
    args: CreateBillOfMaterialsImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBillOfMaterialsImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBillOfMaterialsImportJobCommand}
   */
  getBillOfMaterialsImportJob(
    args: GetBillOfMaterialsImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBillOfMaterialsImportJobCommandOutput>;
  getBillOfMaterialsImportJob(
    args: GetBillOfMaterialsImportJobCommandInput,
    cb: (err: any, data?: GetBillOfMaterialsImportJobCommandOutput) => void
  ): void;
  getBillOfMaterialsImportJob(
    args: GetBillOfMaterialsImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBillOfMaterialsImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link SendDataIntegrationEventCommand}
   */
  sendDataIntegrationEvent(
    args: SendDataIntegrationEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendDataIntegrationEventCommandOutput>;
  sendDataIntegrationEvent(
    args: SendDataIntegrationEventCommandInput,
    cb: (err: any, data?: SendDataIntegrationEventCommandOutput) => void
  ): void;
  sendDataIntegrationEvent(
    args: SendDataIntegrationEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendDataIntegrationEventCommandOutput) => void
  ): void;
}

/**
 * <p>
 *             AWS Supply Chain is a cloud-based application that works with your enterprise resource planning (ERP) and supply chain management systems. Using AWS Supply Chain, you can connect and extract your inventory, supply, and demand related data from existing ERP or supply chain systems into a single data model.
 *         </p>
 *          <p>The AWS Supply Chain API supports configuration data import for Supply Planning.</p>
 *          <p>
 *             All AWS Supply chain API operations are Amazon-authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management users and roles to help facilitate access, trust, and permission policies.
 *         </p>
 * @public
 */
export class SupplyChain extends SupplyChainClient implements SupplyChain {}
createAggregatedClient(commands, SupplyChain);
