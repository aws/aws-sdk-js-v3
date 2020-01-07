import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ModifyWorkspaceAccessPropertiesRequest, ModifyWorkspaceAccessPropertiesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyWorkspaceAccessPropertiesCommandInput = ModifyWorkspaceAccessPropertiesRequest;
export declare type ModifyWorkspaceAccessPropertiesCommandOutput = ModifyWorkspaceAccessPropertiesResult & __MetadataBearer;
export declare class ModifyWorkspaceAccessPropertiesCommand extends $Command<ModifyWorkspaceAccessPropertiesCommandInput, ModifyWorkspaceAccessPropertiesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: ModifyWorkspaceAccessPropertiesCommandInput;
    constructor(input: ModifyWorkspaceAccessPropertiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyWorkspaceAccessPropertiesCommandInput, ModifyWorkspaceAccessPropertiesCommandOutput>;
    private serialize;
    private deserialize;
}
