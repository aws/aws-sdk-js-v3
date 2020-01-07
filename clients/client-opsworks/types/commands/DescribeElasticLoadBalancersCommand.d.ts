import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeElasticLoadBalancersRequest, DescribeElasticLoadBalancersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeElasticLoadBalancersCommandInput = DescribeElasticLoadBalancersRequest;
export declare type DescribeElasticLoadBalancersCommandOutput = DescribeElasticLoadBalancersResult & __MetadataBearer;
export declare class DescribeElasticLoadBalancersCommand extends $Command<DescribeElasticLoadBalancersCommandInput, DescribeElasticLoadBalancersCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeElasticLoadBalancersCommandInput;
    constructor(input: DescribeElasticLoadBalancersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeElasticLoadBalancersCommandInput, DescribeElasticLoadBalancersCommandOutput>;
    private serialize;
    private deserialize;
}
