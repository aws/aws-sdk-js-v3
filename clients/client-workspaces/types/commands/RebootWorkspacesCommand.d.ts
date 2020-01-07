import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { RebootWorkspacesRequest, RebootWorkspacesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RebootWorkspacesCommandInput = RebootWorkspacesRequest;
export declare type RebootWorkspacesCommandOutput = RebootWorkspacesResult & __MetadataBearer;
export declare class RebootWorkspacesCommand extends $Command<RebootWorkspacesCommandInput, RebootWorkspacesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: RebootWorkspacesCommandInput;
    constructor(input: RebootWorkspacesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebootWorkspacesCommandInput, RebootWorkspacesCommandOutput>;
    private serialize;
    private deserialize;
}
