import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { CreateTagsRequest, CreateTagsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTagsCommandInput = CreateTagsRequest;
export declare type CreateTagsCommandOutput = CreateTagsResult & __MetadataBearer;
export declare class CreateTagsCommand extends $Command<CreateTagsCommandInput, CreateTagsCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: CreateTagsCommandInput;
    constructor(input: CreateTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTagsCommandInput, CreateTagsCommandOutput>;
    private serialize;
    private deserialize;
}
