import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeServiceAccessPoliciesRequest, DescribeServiceAccessPoliciesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeServiceAccessPoliciesCommandInput = DescribeServiceAccessPoliciesRequest;
export declare type DescribeServiceAccessPoliciesCommandOutput = DescribeServiceAccessPoliciesResponse & __MetadataBearer;
export declare class DescribeServiceAccessPoliciesCommand extends $Command<DescribeServiceAccessPoliciesCommandInput, DescribeServiceAccessPoliciesCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DescribeServiceAccessPoliciesCommandInput;
    constructor(input: DescribeServiceAccessPoliciesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeServiceAccessPoliciesCommandInput, DescribeServiceAccessPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
