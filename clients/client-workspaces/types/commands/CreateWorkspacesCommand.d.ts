import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { CreateWorkspacesRequest, CreateWorkspacesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateWorkspacesCommandInput = CreateWorkspacesRequest;
export declare type CreateWorkspacesCommandOutput = CreateWorkspacesResult & __MetadataBearer;
export declare class CreateWorkspacesCommand extends $Command<CreateWorkspacesCommandInput, CreateWorkspacesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: CreateWorkspacesCommandInput;
    constructor(input: CreateWorkspacesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWorkspacesCommandInput, CreateWorkspacesCommandOutput>;
    private serialize;
    private deserialize;
}
