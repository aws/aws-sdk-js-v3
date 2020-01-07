import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { BatchAssociateServiceActionWithProvisioningArtifactInput, BatchAssociateServiceActionWithProvisioningArtifactOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchAssociateServiceActionWithProvisioningArtifactCommandInput = BatchAssociateServiceActionWithProvisioningArtifactInput;
export declare type BatchAssociateServiceActionWithProvisioningArtifactCommandOutput = BatchAssociateServiceActionWithProvisioningArtifactOutput & __MetadataBearer;
export declare class BatchAssociateServiceActionWithProvisioningArtifactCommand extends $Command<BatchAssociateServiceActionWithProvisioningArtifactCommandInput, BatchAssociateServiceActionWithProvisioningArtifactCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: BatchAssociateServiceActionWithProvisioningArtifactCommandInput;
    constructor(input: BatchAssociateServiceActionWithProvisioningArtifactCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchAssociateServiceActionWithProvisioningArtifactCommandInput, BatchAssociateServiceActionWithProvisioningArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
