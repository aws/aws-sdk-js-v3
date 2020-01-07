import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { CreateTopicInput, CreateTopicResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTopicCommandInput = CreateTopicInput;
export declare type CreateTopicCommandOutput = CreateTopicResponse & __MetadataBearer;
export declare class CreateTopicCommand extends $Command<CreateTopicCommandInput, CreateTopicCommandOutput, SNSClientResolvedConfig> {
    readonly input: CreateTopicCommandInput;
    constructor(input: CreateTopicCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTopicCommandInput, CreateTopicCommandOutput>;
    private serialize;
    private deserialize;
}
