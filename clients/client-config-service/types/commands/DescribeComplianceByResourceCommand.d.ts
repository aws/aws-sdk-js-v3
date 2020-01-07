import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeComplianceByResourceRequest, DescribeComplianceByResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeComplianceByResourceCommandInput = DescribeComplianceByResourceRequest;
export declare type DescribeComplianceByResourceCommandOutput = DescribeComplianceByResourceResponse & __MetadataBearer;
export declare class DescribeComplianceByResourceCommand extends $Command<DescribeComplianceByResourceCommandInput, DescribeComplianceByResourceCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeComplianceByResourceCommandInput;
    constructor(input: DescribeComplianceByResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeComplianceByResourceCommandInput, DescribeComplianceByResourceCommandOutput>;
    private serialize;
    private deserialize;
}
