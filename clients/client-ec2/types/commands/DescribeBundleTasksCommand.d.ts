import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeBundleTasksRequest, DescribeBundleTasksResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeBundleTasksCommandInput = DescribeBundleTasksRequest;
export declare type DescribeBundleTasksCommandOutput = DescribeBundleTasksResult & __MetadataBearer;
export declare class DescribeBundleTasksCommand extends $Command<DescribeBundleTasksCommandInput, DescribeBundleTasksCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeBundleTasksCommandInput;
    constructor(input: DescribeBundleTasksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBundleTasksCommandInput, DescribeBundleTasksCommandOutput>;
    private serialize;
    private deserialize;
}
