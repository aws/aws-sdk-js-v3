import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { RebuildWorkspacesRequest, RebuildWorkspacesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RebuildWorkspacesCommandInput = RebuildWorkspacesRequest;
export declare type RebuildWorkspacesCommandOutput = RebuildWorkspacesResult & __MetadataBearer;
export declare class RebuildWorkspacesCommand extends $Command<RebuildWorkspacesCommandInput, RebuildWorkspacesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: RebuildWorkspacesCommandInput;
    constructor(input: RebuildWorkspacesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebuildWorkspacesCommandInput, RebuildWorkspacesCommandOutput>;
    private serialize;
    private deserialize;
}
