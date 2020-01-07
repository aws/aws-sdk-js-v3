import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListServiceActionsForProvisioningArtifactInput, ListServiceActionsForProvisioningArtifactOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListServiceActionsForProvisioningArtifactCommandInput = ListServiceActionsForProvisioningArtifactInput;
export declare type ListServiceActionsForProvisioningArtifactCommandOutput = ListServiceActionsForProvisioningArtifactOutput & __MetadataBearer;
export declare class ListServiceActionsForProvisioningArtifactCommand extends $Command<ListServiceActionsForProvisioningArtifactCommandInput, ListServiceActionsForProvisioningArtifactCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListServiceActionsForProvisioningArtifactCommandInput;
    constructor(input: ListServiceActionsForProvisioningArtifactCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListServiceActionsForProvisioningArtifactCommandInput, ListServiceActionsForProvisioningArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
