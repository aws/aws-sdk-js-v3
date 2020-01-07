import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeStackSummaryRequest, DescribeStackSummaryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStackSummaryCommandInput = DescribeStackSummaryRequest;
export declare type DescribeStackSummaryCommandOutput = DescribeStackSummaryResult & __MetadataBearer;
export declare class DescribeStackSummaryCommand extends $Command<DescribeStackSummaryCommandInput, DescribeStackSummaryCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeStackSummaryCommandInput;
    constructor(input: DescribeStackSummaryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStackSummaryCommandInput, DescribeStackSummaryCommandOutput>;
    private serialize;
    private deserialize;
}
