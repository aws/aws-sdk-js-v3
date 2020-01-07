import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { TerminateWorkspacesRequest, TerminateWorkspacesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TerminateWorkspacesCommandInput = TerminateWorkspacesRequest;
export declare type TerminateWorkspacesCommandOutput = TerminateWorkspacesResult & __MetadataBearer;
export declare class TerminateWorkspacesCommand extends $Command<TerminateWorkspacesCommandInput, TerminateWorkspacesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: TerminateWorkspacesCommandInput;
    constructor(input: TerminateWorkspacesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TerminateWorkspacesCommandInput, TerminateWorkspacesCommandOutput>;
    private serialize;
    private deserialize;
}
