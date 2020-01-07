import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { PutRetentionPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutRetentionPolicyCommandInput = PutRetentionPolicyRequest;
export declare type PutRetentionPolicyCommandOutput = __MetadataBearer;
export declare class PutRetentionPolicyCommand extends $Command<PutRetentionPolicyCommandInput, PutRetentionPolicyCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: PutRetentionPolicyCommandInput;
    constructor(input: PutRetentionPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRetentionPolicyCommandInput, PutRetentionPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
