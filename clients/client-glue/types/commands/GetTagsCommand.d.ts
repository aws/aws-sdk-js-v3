import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetTagsRequest, GetTagsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTagsCommandInput = GetTagsRequest;
export declare type GetTagsCommandOutput = GetTagsResponse & __MetadataBearer;
export declare class GetTagsCommand extends $Command<GetTagsCommandInput, GetTagsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetTagsCommandInput;
    constructor(input: GetTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTagsCommandInput, GetTagsCommandOutput>;
    private serialize;
    private deserialize;
}
