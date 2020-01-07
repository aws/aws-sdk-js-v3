import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CancelBundleTaskRequest, CancelBundleTaskResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelBundleTaskCommandInput = CancelBundleTaskRequest;
export declare type CancelBundleTaskCommandOutput = CancelBundleTaskResult & __MetadataBearer;
export declare class CancelBundleTaskCommand extends $Command<CancelBundleTaskCommandInput, CancelBundleTaskCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CancelBundleTaskCommandInput;
    constructor(input: CancelBundleTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelBundleTaskCommandInput, CancelBundleTaskCommandOutput>;
    private serialize;
    private deserialize;
}
