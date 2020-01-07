import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { AssociateServiceActionWithProvisioningArtifactInput, AssociateServiceActionWithProvisioningArtifactOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateServiceActionWithProvisioningArtifactCommandInput = AssociateServiceActionWithProvisioningArtifactInput;
export declare type AssociateServiceActionWithProvisioningArtifactCommandOutput = AssociateServiceActionWithProvisioningArtifactOutput & __MetadataBearer;
export declare class AssociateServiceActionWithProvisioningArtifactCommand extends $Command<AssociateServiceActionWithProvisioningArtifactCommandInput, AssociateServiceActionWithProvisioningArtifactCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: AssociateServiceActionWithProvisioningArtifactCommandInput;
    constructor(input: AssociateServiceActionWithProvisioningArtifactCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateServiceActionWithProvisioningArtifactCommandInput, AssociateServiceActionWithProvisioningArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
