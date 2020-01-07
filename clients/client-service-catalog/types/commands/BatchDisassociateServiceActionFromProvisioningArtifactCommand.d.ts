import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { BatchDisassociateServiceActionFromProvisioningArtifactInput, BatchDisassociateServiceActionFromProvisioningArtifactOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchDisassociateServiceActionFromProvisioningArtifactCommandInput = BatchDisassociateServiceActionFromProvisioningArtifactInput;
export declare type BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput = BatchDisassociateServiceActionFromProvisioningArtifactOutput & __MetadataBearer;
export declare class BatchDisassociateServiceActionFromProvisioningArtifactCommand extends $Command<BatchDisassociateServiceActionFromProvisioningArtifactCommandInput, BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput;
    constructor(input: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDisassociateServiceActionFromProvisioningArtifactCommandInput, BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
