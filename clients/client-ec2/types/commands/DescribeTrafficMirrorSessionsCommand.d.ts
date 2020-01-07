import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeTrafficMirrorSessionsRequest, DescribeTrafficMirrorSessionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTrafficMirrorSessionsCommandInput = DescribeTrafficMirrorSessionsRequest;
export declare type DescribeTrafficMirrorSessionsCommandOutput = DescribeTrafficMirrorSessionsResult & __MetadataBearer;
export declare class DescribeTrafficMirrorSessionsCommand extends $Command<DescribeTrafficMirrorSessionsCommandInput, DescribeTrafficMirrorSessionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeTrafficMirrorSessionsCommandInput;
    constructor(input: DescribeTrafficMirrorSessionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTrafficMirrorSessionsCommandInput, DescribeTrafficMirrorSessionsCommandOutput>;
    private serialize;
    private deserialize;
}
