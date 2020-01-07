import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { AddTagsToResourceRequest, AddTagsToResourceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddTagsToResourceCommandInput = AddTagsToResourceRequest;
export declare type AddTagsToResourceCommandOutput = AddTagsToResourceResult & __MetadataBearer;
export declare class AddTagsToResourceCommand extends $Command<AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: AddTagsToResourceCommandInput;
    constructor(input: AddTagsToResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput>;
    private serialize;
    private deserialize;
}
