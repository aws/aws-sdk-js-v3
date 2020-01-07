import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBProxiesRequest, DescribeDBProxiesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBProxiesCommandInput = DescribeDBProxiesRequest;
export declare type DescribeDBProxiesCommandOutput = DescribeDBProxiesResponse & __MetadataBearer;
export declare class DescribeDBProxiesCommand extends $Command<DescribeDBProxiesCommandInput, DescribeDBProxiesCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBProxiesCommandInput;
    constructor(input: DescribeDBProxiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBProxiesCommandInput, DescribeDBProxiesCommandOutput>;
    private serialize;
    private deserialize;
}
