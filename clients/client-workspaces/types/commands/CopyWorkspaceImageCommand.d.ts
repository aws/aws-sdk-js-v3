import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { CopyWorkspaceImageRequest, CopyWorkspaceImageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CopyWorkspaceImageCommandInput = CopyWorkspaceImageRequest;
export declare type CopyWorkspaceImageCommandOutput = CopyWorkspaceImageResult & __MetadataBearer;
export declare class CopyWorkspaceImageCommand extends $Command<CopyWorkspaceImageCommandInput, CopyWorkspaceImageCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: CopyWorkspaceImageCommandInput;
    constructor(input: CopyWorkspaceImageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyWorkspaceImageCommandInput, CopyWorkspaceImageCommandOutput>;
    private serialize;
    private deserialize;
}
