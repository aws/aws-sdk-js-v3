import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeRulesPackagesRequest, DescribeRulesPackagesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeRulesPackagesCommandInput = DescribeRulesPackagesRequest;
export declare type DescribeRulesPackagesCommandOutput = DescribeRulesPackagesResponse & __MetadataBearer;
export declare class DescribeRulesPackagesCommand extends $Command<DescribeRulesPackagesCommandInput, DescribeRulesPackagesCommandOutput, InspectorClientResolvedConfig> {
    readonly input: DescribeRulesPackagesCommandInput;
    constructor(input: DescribeRulesPackagesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRulesPackagesCommandInput, DescribeRulesPackagesCommandOutput>;
    private serialize;
    private deserialize;
}
