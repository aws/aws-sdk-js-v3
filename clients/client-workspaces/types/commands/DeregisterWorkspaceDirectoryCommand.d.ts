import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DeregisterWorkspaceDirectoryRequest, DeregisterWorkspaceDirectoryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterWorkspaceDirectoryCommandInput = DeregisterWorkspaceDirectoryRequest;
export declare type DeregisterWorkspaceDirectoryCommandOutput = DeregisterWorkspaceDirectoryResult & __MetadataBearer;
export declare class DeregisterWorkspaceDirectoryCommand extends $Command<DeregisterWorkspaceDirectoryCommandInput, DeregisterWorkspaceDirectoryCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DeregisterWorkspaceDirectoryCommandInput;
    constructor(input: DeregisterWorkspaceDirectoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterWorkspaceDirectoryCommandInput, DeregisterWorkspaceDirectoryCommandOutput>;
    private serialize;
    private deserialize;
}
