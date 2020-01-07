import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { GetTopicAttributesInput, GetTopicAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTopicAttributesCommandInput = GetTopicAttributesInput;
export declare type GetTopicAttributesCommandOutput = GetTopicAttributesResponse & __MetadataBearer;
export declare class GetTopicAttributesCommand extends $Command<GetTopicAttributesCommandInput, GetTopicAttributesCommandOutput, SNSClientResolvedConfig> {
    readonly input: GetTopicAttributesCommandInput;
    constructor(input: GetTopicAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTopicAttributesCommandInput, GetTopicAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
