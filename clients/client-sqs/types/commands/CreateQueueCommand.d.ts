import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { CreateQueueRequest, CreateQueueResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateQueueCommandInput = CreateQueueRequest;
export declare type CreateQueueCommandOutput = CreateQueueResult & __MetadataBearer;
export declare class CreateQueueCommand extends $Command<CreateQueueCommandInput, CreateQueueCommandOutput, SQSClientResolvedConfig> {
    readonly input: CreateQueueCommandInput;
    constructor(input: CreateQueueCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateQueueCommandInput, CreateQueueCommandOutput>;
    private serialize;
    private deserialize;
}
