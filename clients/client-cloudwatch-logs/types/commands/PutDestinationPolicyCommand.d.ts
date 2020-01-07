import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { PutDestinationPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutDestinationPolicyCommandInput = PutDestinationPolicyRequest;
export declare type PutDestinationPolicyCommandOutput = __MetadataBearer;
export declare class PutDestinationPolicyCommand extends $Command<PutDestinationPolicyCommandInput, PutDestinationPolicyCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: PutDestinationPolicyCommandInput;
    constructor(input: PutDestinationPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutDestinationPolicyCommandInput, PutDestinationPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
