import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { GetQueueUrlRequest, GetQueueUrlResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetQueueUrlCommandInput = GetQueueUrlRequest;
export declare type GetQueueUrlCommandOutput = GetQueueUrlResult & __MetadataBearer;
export declare class GetQueueUrlCommand extends $Command<GetQueueUrlCommandInput, GetQueueUrlCommandOutput, SQSClientResolvedConfig> {
    readonly input: GetQueueUrlCommandInput;
    constructor(input: GetQueueUrlCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetQueueUrlCommandInput, GetQueueUrlCommandOutput>;
    private serialize;
    private deserialize;
}
