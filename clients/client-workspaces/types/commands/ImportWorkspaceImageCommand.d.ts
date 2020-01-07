import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ImportWorkspaceImageRequest, ImportWorkspaceImageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ImportWorkspaceImageCommandInput = ImportWorkspaceImageRequest;
export declare type ImportWorkspaceImageCommandOutput = ImportWorkspaceImageResult & __MetadataBearer;
export declare class ImportWorkspaceImageCommand extends $Command<ImportWorkspaceImageCommandInput, ImportWorkspaceImageCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: ImportWorkspaceImageCommandInput;
    constructor(input: ImportWorkspaceImageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportWorkspaceImageCommandInput, ImportWorkspaceImageCommandOutput>;
    private serialize;
    private deserialize;
}
