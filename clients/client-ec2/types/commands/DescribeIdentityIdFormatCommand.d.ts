import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeIdentityIdFormatRequest, DescribeIdentityIdFormatResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeIdentityIdFormatCommandInput = DescribeIdentityIdFormatRequest;
export declare type DescribeIdentityIdFormatCommandOutput = DescribeIdentityIdFormatResult & __MetadataBearer;
export declare class DescribeIdentityIdFormatCommand extends $Command<DescribeIdentityIdFormatCommandInput, DescribeIdentityIdFormatCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeIdentityIdFormatCommandInput;
    constructor(input: DescribeIdentityIdFormatCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIdentityIdFormatCommandInput, DescribeIdentityIdFormatCommandOutput>;
    private serialize;
    private deserialize;
}
