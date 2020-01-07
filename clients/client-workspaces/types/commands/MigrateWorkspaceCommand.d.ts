import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { MigrateWorkspaceRequest, MigrateWorkspaceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type MigrateWorkspaceCommandInput = MigrateWorkspaceRequest;
export declare type MigrateWorkspaceCommandOutput = MigrateWorkspaceResult & __MetadataBearer;
export declare class MigrateWorkspaceCommand extends $Command<MigrateWorkspaceCommandInput, MigrateWorkspaceCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: MigrateWorkspaceCommandInput;
    constructor(input: MigrateWorkspaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MigrateWorkspaceCommandInput, MigrateWorkspaceCommandOutput>;
    private serialize;
    private deserialize;
}
