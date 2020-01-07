import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ModifyWorkspaceStateRequest, ModifyWorkspaceStateResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyWorkspaceStateCommandInput = ModifyWorkspaceStateRequest;
export declare type ModifyWorkspaceStateCommandOutput = ModifyWorkspaceStateResult & __MetadataBearer;
export declare class ModifyWorkspaceStateCommand extends $Command<ModifyWorkspaceStateCommandInput, ModifyWorkspaceStateCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: ModifyWorkspaceStateCommandInput;
    constructor(input: ModifyWorkspaceStateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyWorkspaceStateCommandInput, ModifyWorkspaceStateCommandOutput>;
    private serialize;
    private deserialize;
}
