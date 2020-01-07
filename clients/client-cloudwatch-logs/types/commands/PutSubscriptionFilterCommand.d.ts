import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { PutSubscriptionFilterRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutSubscriptionFilterCommandInput = PutSubscriptionFilterRequest;
export declare type PutSubscriptionFilterCommandOutput = __MetadataBearer;
export declare class PutSubscriptionFilterCommand extends $Command<PutSubscriptionFilterCommandInput, PutSubscriptionFilterCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: PutSubscriptionFilterCommandInput;
    constructor(input: PutSubscriptionFilterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutSubscriptionFilterCommandInput, PutSubscriptionFilterCommandOutput>;
    private serialize;
    private deserialize;
}
