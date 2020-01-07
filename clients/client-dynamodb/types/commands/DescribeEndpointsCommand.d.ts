import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeEndpointsRequest, DescribeEndpointsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEndpointsCommandInput = DescribeEndpointsRequest;
export declare type DescribeEndpointsCommandOutput = DescribeEndpointsResponse & __MetadataBearer;
export declare class DescribeEndpointsCommand extends $Command<DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DescribeEndpointsCommandInput;
    constructor(input: DescribeEndpointsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
