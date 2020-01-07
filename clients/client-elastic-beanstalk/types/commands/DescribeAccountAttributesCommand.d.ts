import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DescribeAccountAttributesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAccountAttributesCommandInput = {};
export declare type DescribeAccountAttributesCommandOutput = DescribeAccountAttributesResult & __MetadataBearer;
export declare class DescribeAccountAttributesCommand extends $Command<DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DescribeAccountAttributesCommandInput;
    constructor(input: DescribeAccountAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
