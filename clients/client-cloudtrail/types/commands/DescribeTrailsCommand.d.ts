import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { DescribeTrailsRequest, DescribeTrailsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTrailsCommandInput = DescribeTrailsRequest;
export declare type DescribeTrailsCommandOutput = DescribeTrailsResponse & __MetadataBearer;
export declare class DescribeTrailsCommand extends $Command<DescribeTrailsCommandInput, DescribeTrailsCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: DescribeTrailsCommandInput;
    constructor(input: DescribeTrailsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTrailsCommandInput, DescribeTrailsCommandOutput>;
    private serialize;
    private deserialize;
}
