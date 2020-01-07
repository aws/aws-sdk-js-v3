import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeMovingAddressesRequest, DescribeMovingAddressesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMovingAddressesCommandInput = DescribeMovingAddressesRequest;
export declare type DescribeMovingAddressesCommandOutput = DescribeMovingAddressesResult & __MetadataBearer;
export declare class DescribeMovingAddressesCommand extends $Command<DescribeMovingAddressesCommandInput, DescribeMovingAddressesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeMovingAddressesCommandInput;
    constructor(input: DescribeMovingAddressesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMovingAddressesCommandInput, DescribeMovingAddressesCommandOutput>;
    private serialize;
    private deserialize;
}
