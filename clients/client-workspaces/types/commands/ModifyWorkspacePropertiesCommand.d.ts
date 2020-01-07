import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ModifyWorkspacePropertiesRequest, ModifyWorkspacePropertiesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyWorkspacePropertiesCommandInput = ModifyWorkspacePropertiesRequest;
export declare type ModifyWorkspacePropertiesCommandOutput = ModifyWorkspacePropertiesResult & __MetadataBearer;
export declare class ModifyWorkspacePropertiesCommand extends $Command<ModifyWorkspacePropertiesCommandInput, ModifyWorkspacePropertiesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: ModifyWorkspacePropertiesCommandInput;
    constructor(input: ModifyWorkspacePropertiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyWorkspacePropertiesCommandInput, ModifyWorkspacePropertiesCommandOutput>;
    private serialize;
    private deserialize;
}
