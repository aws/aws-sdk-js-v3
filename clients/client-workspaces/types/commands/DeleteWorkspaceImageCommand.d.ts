import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DeleteWorkspaceImageRequest, DeleteWorkspaceImageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteWorkspaceImageCommandInput = DeleteWorkspaceImageRequest;
export declare type DeleteWorkspaceImageCommandOutput = DeleteWorkspaceImageResult & __MetadataBearer;
export declare class DeleteWorkspaceImageCommand extends $Command<DeleteWorkspaceImageCommandInput, DeleteWorkspaceImageCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DeleteWorkspaceImageCommandInput;
    constructor(input: DeleteWorkspaceImageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWorkspaceImageCommandInput, DeleteWorkspaceImageCommandOutput>;
    private serialize;
    private deserialize;
}
