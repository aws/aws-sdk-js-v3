import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { RestoreWorkspaceRequest, RestoreWorkspaceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RestoreWorkspaceCommandInput = RestoreWorkspaceRequest;
export declare type RestoreWorkspaceCommandOutput = RestoreWorkspaceResult & __MetadataBearer;
export declare class RestoreWorkspaceCommand extends $Command<RestoreWorkspaceCommandInput, RestoreWorkspaceCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: RestoreWorkspaceCommandInput;
    constructor(input: RestoreWorkspaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreWorkspaceCommandInput, RestoreWorkspaceCommandOutput>;
    private serialize;
    private deserialize;
}
