import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { UntagQueueRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UntagQueueCommandInput = UntagQueueRequest;
export declare type UntagQueueCommandOutput = __MetadataBearer;
export declare class UntagQueueCommand extends $Command<UntagQueueCommandInput, UntagQueueCommandOutput, SQSClientResolvedConfig> {
    readonly input: UntagQueueCommandInput;
    constructor(input: UntagQueueCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagQueueCommandInput, UntagQueueCommandOutput>;
    private serialize;
    private deserialize;
}
