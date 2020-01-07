import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CreateStreamingURLRequest, CreateStreamingURLResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateStreamingURLCommandInput = CreateStreamingURLRequest;
export declare type CreateStreamingURLCommandOutput = CreateStreamingURLResult & __MetadataBearer;
export declare class CreateStreamingURLCommand extends $Command<CreateStreamingURLCommandInput, CreateStreamingURLCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: CreateStreamingURLCommandInput;
    constructor(input: CreateStreamingURLCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateStreamingURLCommandInput, CreateStreamingURLCommandOutput>;
    private serialize;
    private deserialize;
}
