import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateMLTransformRequest, CreateMLTransformResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateMLTransformCommandInput = CreateMLTransformRequest;
export declare type CreateMLTransformCommandOutput = CreateMLTransformResponse & __MetadataBearer;
export declare class CreateMLTransformCommand extends $Command<CreateMLTransformCommandInput, CreateMLTransformCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateMLTransformCommandInput;
    constructor(input: CreateMLTransformCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMLTransformCommandInput, CreateMLTransformCommandOutput>;
    private serialize;
    private deserialize;
}
