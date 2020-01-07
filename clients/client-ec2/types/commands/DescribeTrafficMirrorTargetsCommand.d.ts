import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeTrafficMirrorTargetsRequest, DescribeTrafficMirrorTargetsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTrafficMirrorTargetsCommandInput = DescribeTrafficMirrorTargetsRequest;
export declare type DescribeTrafficMirrorTargetsCommandOutput = DescribeTrafficMirrorTargetsResult & __MetadataBearer;
export declare class DescribeTrafficMirrorTargetsCommand extends $Command<DescribeTrafficMirrorTargetsCommandInput, DescribeTrafficMirrorTargetsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeTrafficMirrorTargetsCommandInput;
    constructor(input: DescribeTrafficMirrorTargetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTrafficMirrorTargetsCommandInput, DescribeTrafficMirrorTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
