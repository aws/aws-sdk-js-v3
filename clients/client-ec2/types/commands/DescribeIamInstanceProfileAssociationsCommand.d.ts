import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeIamInstanceProfileAssociationsRequest, DescribeIamInstanceProfileAssociationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeIamInstanceProfileAssociationsCommandInput = DescribeIamInstanceProfileAssociationsRequest;
export declare type DescribeIamInstanceProfileAssociationsCommandOutput = DescribeIamInstanceProfileAssociationsResult & __MetadataBearer;
export declare class DescribeIamInstanceProfileAssociationsCommand extends $Command<DescribeIamInstanceProfileAssociationsCommandInput, DescribeIamInstanceProfileAssociationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeIamInstanceProfileAssociationsCommandInput;
    constructor(input: DescribeIamInstanceProfileAssociationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIamInstanceProfileAssociationsCommandInput, DescribeIamInstanceProfileAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
