import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { PurgeQueueRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PurgeQueueCommandInput = PurgeQueueRequest;
export declare type PurgeQueueCommandOutput = __MetadataBearer;
export declare class PurgeQueueCommand extends $Command<PurgeQueueCommandInput, PurgeQueueCommandOutput, SQSClientResolvedConfig> {
    readonly input: PurgeQueueCommandInput;
    constructor(input: PurgeQueueCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PurgeQueueCommandInput, PurgeQueueCommandOutput>;
    private serialize;
    private deserialize;
}
