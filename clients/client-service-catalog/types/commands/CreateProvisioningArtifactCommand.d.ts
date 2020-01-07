import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { CreateProvisioningArtifactInput, CreateProvisioningArtifactOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateProvisioningArtifactCommandInput = CreateProvisioningArtifactInput;
export declare type CreateProvisioningArtifactCommandOutput = CreateProvisioningArtifactOutput & __MetadataBearer;
export declare class CreateProvisioningArtifactCommand extends $Command<CreateProvisioningArtifactCommandInput, CreateProvisioningArtifactCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: CreateProvisioningArtifactCommandInput;
    constructor(input: CreateProvisioningArtifactCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProvisioningArtifactCommandInput, CreateProvisioningArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
