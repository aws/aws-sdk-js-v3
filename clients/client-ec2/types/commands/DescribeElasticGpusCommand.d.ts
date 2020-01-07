import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeElasticGpusRequest, DescribeElasticGpusResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeElasticGpusCommandInput = DescribeElasticGpusRequest;
export declare type DescribeElasticGpusCommandOutput = DescribeElasticGpusResult & __MetadataBearer;
export declare class DescribeElasticGpusCommand extends $Command<DescribeElasticGpusCommandInput, DescribeElasticGpusCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeElasticGpusCommandInput;
    constructor(input: DescribeElasticGpusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeElasticGpusCommandInput, DescribeElasticGpusCommandOutput>;
    private serialize;
    private deserialize;
}
