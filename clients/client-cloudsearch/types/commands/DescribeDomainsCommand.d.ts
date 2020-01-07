import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeDomainsRequest, DescribeDomainsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDomainsCommandInput = DescribeDomainsRequest;
export declare type DescribeDomainsCommandOutput = DescribeDomainsResponse & __MetadataBearer;
export declare class DescribeDomainsCommand extends $Command<DescribeDomainsCommandInput, DescribeDomainsCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DescribeDomainsCommandInput;
    constructor(input: DescribeDomainsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDomainsCommandInput, DescribeDomainsCommandOutput>;
    private serialize;
    private deserialize;
}
