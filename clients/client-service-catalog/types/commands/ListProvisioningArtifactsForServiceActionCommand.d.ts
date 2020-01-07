import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListProvisioningArtifactsForServiceActionInput, ListProvisioningArtifactsForServiceActionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListProvisioningArtifactsForServiceActionCommandInput = ListProvisioningArtifactsForServiceActionInput;
export declare type ListProvisioningArtifactsForServiceActionCommandOutput = ListProvisioningArtifactsForServiceActionOutput & __MetadataBearer;
export declare class ListProvisioningArtifactsForServiceActionCommand extends $Command<ListProvisioningArtifactsForServiceActionCommandInput, ListProvisioningArtifactsForServiceActionCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListProvisioningArtifactsForServiceActionCommandInput;
    constructor(input: ListProvisioningArtifactsForServiceActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProvisioningArtifactsForServiceActionCommandInput, ListProvisioningArtifactsForServiceActionCommandOutput>;
    private serialize;
    private deserialize;
}
