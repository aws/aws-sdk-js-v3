import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { RegisterWorkspaceDirectoryRequest, RegisterWorkspaceDirectoryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterWorkspaceDirectoryCommandInput = RegisterWorkspaceDirectoryRequest;
export declare type RegisterWorkspaceDirectoryCommandOutput = RegisterWorkspaceDirectoryResult & __MetadataBearer;
export declare class RegisterWorkspaceDirectoryCommand extends $Command<RegisterWorkspaceDirectoryCommandInput, RegisterWorkspaceDirectoryCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: RegisterWorkspaceDirectoryCommandInput;
    constructor(input: RegisterWorkspaceDirectoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterWorkspaceDirectoryCommandInput, RegisterWorkspaceDirectoryCommandOutput>;
    private serialize;
    private deserialize;
}
