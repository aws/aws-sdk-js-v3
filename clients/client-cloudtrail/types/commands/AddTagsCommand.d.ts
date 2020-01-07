import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { AddTagsRequest, AddTagsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddTagsCommandInput = AddTagsRequest;
export declare type AddTagsCommandOutput = AddTagsResponse & __MetadataBearer;
export declare class AddTagsCommand extends $Command<AddTagsCommandInput, AddTagsCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: AddTagsCommandInput;
    constructor(input: AddTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddTagsCommandInput, AddTagsCommandOutput>;
    private serialize;
    private deserialize;
}
