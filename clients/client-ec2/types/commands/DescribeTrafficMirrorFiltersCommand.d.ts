import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeTrafficMirrorFiltersRequest, DescribeTrafficMirrorFiltersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTrafficMirrorFiltersCommandInput = DescribeTrafficMirrorFiltersRequest;
export declare type DescribeTrafficMirrorFiltersCommandOutput = DescribeTrafficMirrorFiltersResult & __MetadataBearer;
export declare class DescribeTrafficMirrorFiltersCommand extends $Command<DescribeTrafficMirrorFiltersCommandInput, DescribeTrafficMirrorFiltersCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeTrafficMirrorFiltersCommandInput;
    constructor(input: DescribeTrafficMirrorFiltersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTrafficMirrorFiltersCommandInput, DescribeTrafficMirrorFiltersCommandOutput>;
    private serialize;
    private deserialize;
}
