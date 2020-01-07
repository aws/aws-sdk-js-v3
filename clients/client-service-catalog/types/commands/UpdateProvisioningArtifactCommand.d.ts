import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { UpdateProvisioningArtifactInput, UpdateProvisioningArtifactOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateProvisioningArtifactCommandInput = UpdateProvisioningArtifactInput;
export declare type UpdateProvisioningArtifactCommandOutput = UpdateProvisioningArtifactOutput & __MetadataBearer;
export declare class UpdateProvisioningArtifactCommand extends $Command<UpdateProvisioningArtifactCommandInput, UpdateProvisioningArtifactCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: UpdateProvisioningArtifactCommandInput;
    constructor(input: UpdateProvisioningArtifactCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateProvisioningArtifactCommandInput, UpdateProvisioningArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
