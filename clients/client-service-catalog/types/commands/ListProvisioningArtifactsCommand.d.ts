import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListProvisioningArtifactsInput, ListProvisioningArtifactsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListProvisioningArtifactsCommandInput = ListProvisioningArtifactsInput;
export declare type ListProvisioningArtifactsCommandOutput = ListProvisioningArtifactsOutput & __MetadataBearer;
export declare class ListProvisioningArtifactsCommand extends $Command<ListProvisioningArtifactsCommandInput, ListProvisioningArtifactsCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListProvisioningArtifactsCommandInput;
    constructor(input: ListProvisioningArtifactsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProvisioningArtifactsCommandInput, ListProvisioningArtifactsCommandOutput>;
    private serialize;
    private deserialize;
}
