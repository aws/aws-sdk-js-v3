import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DescribePlatformVersionRequest, DescribePlatformVersionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePlatformVersionCommandInput = DescribePlatformVersionRequest;
export declare type DescribePlatformVersionCommandOutput = DescribePlatformVersionResult & __MetadataBearer;
export declare class DescribePlatformVersionCommand extends $Command<DescribePlatformVersionCommandInput, DescribePlatformVersionCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DescribePlatformVersionCommandInput;
    constructor(input: DescribePlatformVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePlatformVersionCommandInput, DescribePlatformVersionCommandOutput>;
    private serialize;
    private deserialize;
}
