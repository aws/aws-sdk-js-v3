import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DeleteProvisioningArtifactInput, DeleteProvisioningArtifactOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteProvisioningArtifactCommandInput = DeleteProvisioningArtifactInput;
export declare type DeleteProvisioningArtifactCommandOutput = DeleteProvisioningArtifactOutput & __MetadataBearer;
export declare class DeleteProvisioningArtifactCommand extends $Command<DeleteProvisioningArtifactCommandInput, DeleteProvisioningArtifactCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DeleteProvisioningArtifactCommandInput;
    constructor(input: DeleteProvisioningArtifactCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProvisioningArtifactCommandInput, DeleteProvisioningArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
