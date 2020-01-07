import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DisassociateServiceActionFromProvisioningArtifactInput, DisassociateServiceActionFromProvisioningArtifactOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateServiceActionFromProvisioningArtifactCommandInput = DisassociateServiceActionFromProvisioningArtifactInput;
export declare type DisassociateServiceActionFromProvisioningArtifactCommandOutput = DisassociateServiceActionFromProvisioningArtifactOutput & __MetadataBearer;
export declare class DisassociateServiceActionFromProvisioningArtifactCommand extends $Command<DisassociateServiceActionFromProvisioningArtifactCommandInput, DisassociateServiceActionFromProvisioningArtifactCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DisassociateServiceActionFromProvisioningArtifactCommandInput;
    constructor(input: DisassociateServiceActionFromProvisioningArtifactCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateServiceActionFromProvisioningArtifactCommandInput, DisassociateServiceActionFromProvisioningArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
