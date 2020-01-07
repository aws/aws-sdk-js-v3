import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ModifyWorkspaceCreationPropertiesRequest, ModifyWorkspaceCreationPropertiesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyWorkspaceCreationPropertiesCommandInput = ModifyWorkspaceCreationPropertiesRequest;
export declare type ModifyWorkspaceCreationPropertiesCommandOutput = ModifyWorkspaceCreationPropertiesResult & __MetadataBearer;
export declare class ModifyWorkspaceCreationPropertiesCommand extends $Command<ModifyWorkspaceCreationPropertiesCommandInput, ModifyWorkspaceCreationPropertiesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: ModifyWorkspaceCreationPropertiesCommandInput;
    constructor(input: ModifyWorkspaceCreationPropertiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyWorkspaceCreationPropertiesCommandInput, ModifyWorkspaceCreationPropertiesCommandOutput>;
    private serialize;
    private deserialize;
}
