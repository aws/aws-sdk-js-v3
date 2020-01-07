import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { StartWorkspacesRequest, StartWorkspacesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartWorkspacesCommandInput = StartWorkspacesRequest;
export declare type StartWorkspacesCommandOutput = StartWorkspacesResult & __MetadataBearer;
export declare class StartWorkspacesCommand extends $Command<StartWorkspacesCommandInput, StartWorkspacesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: StartWorkspacesCommandInput;
    constructor(input: StartWorkspacesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartWorkspacesCommandInput, StartWorkspacesCommandOutput>;
    private serialize;
    private deserialize;
}
