import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { StopWorkspacesRequest, StopWorkspacesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopWorkspacesCommandInput = StopWorkspacesRequest;
export declare type StopWorkspacesCommandOutput = StopWorkspacesResult & __MetadataBearer;
export declare class StopWorkspacesCommand extends $Command<StopWorkspacesCommandInput, StopWorkspacesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: StopWorkspacesCommandInput;
    constructor(input: StopWorkspacesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopWorkspacesCommandInput, StopWorkspacesCommandOutput>;
    private serialize;
    private deserialize;
}
