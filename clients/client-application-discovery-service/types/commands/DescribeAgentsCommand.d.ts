import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { DescribeAgentsRequest, DescribeAgentsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAgentsCommandInput = DescribeAgentsRequest;
export declare type DescribeAgentsCommandOutput = DescribeAgentsResponse & __MetadataBearer;
export declare class DescribeAgentsCommand extends $Command<DescribeAgentsCommandInput, DescribeAgentsCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: DescribeAgentsCommandInput;
    constructor(input: DescribeAgentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAgentsCommandInput, DescribeAgentsCommandOutput>;
    private serialize;
    private deserialize;
}
