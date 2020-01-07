import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DeleteResourcePolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteResourcePolicyCommandInput = DeleteResourcePolicyRequest;
export declare type DeleteResourcePolicyCommandOutput = __MetadataBearer;
export declare class DeleteResourcePolicyCommand extends $Command<DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DeleteResourcePolicyCommandInput;
    constructor(input: DeleteResourcePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
