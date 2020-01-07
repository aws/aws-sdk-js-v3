import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CreateImageBuilderStreamingURLRequest, CreateImageBuilderStreamingURLResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateImageBuilderStreamingURLCommandInput = CreateImageBuilderStreamingURLRequest;
export declare type CreateImageBuilderStreamingURLCommandOutput = CreateImageBuilderStreamingURLResult & __MetadataBearer;
export declare class CreateImageBuilderStreamingURLCommand extends $Command<CreateImageBuilderStreamingURLCommandInput, CreateImageBuilderStreamingURLCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: CreateImageBuilderStreamingURLCommandInput;
    constructor(input: CreateImageBuilderStreamingURLCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateImageBuilderStreamingURLCommandInput, CreateImageBuilderStreamingURLCommandOutput>;
    private serialize;
    private deserialize;
}
