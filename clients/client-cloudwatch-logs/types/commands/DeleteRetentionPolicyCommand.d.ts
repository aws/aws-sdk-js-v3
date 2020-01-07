import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DeleteRetentionPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRetentionPolicyCommandInput = DeleteRetentionPolicyRequest;
export declare type DeleteRetentionPolicyCommandOutput = __MetadataBearer;
export declare class DeleteRetentionPolicyCommand extends $Command<DeleteRetentionPolicyCommandInput, DeleteRetentionPolicyCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DeleteRetentionPolicyCommandInput;
    constructor(input: DeleteRetentionPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRetentionPolicyCommandInput, DeleteRetentionPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
