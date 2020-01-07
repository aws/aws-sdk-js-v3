import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeElasticIpsRequest, DescribeElasticIpsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeElasticIpsCommandInput = DescribeElasticIpsRequest;
export declare type DescribeElasticIpsCommandOutput = DescribeElasticIpsResult & __MetadataBearer;
export declare class DescribeElasticIpsCommand extends $Command<DescribeElasticIpsCommandInput, DescribeElasticIpsCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeElasticIpsCommandInput;
    constructor(input: DescribeElasticIpsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeElasticIpsCommandInput, DescribeElasticIpsCommandOutput>;
    private serialize;
    private deserialize;
}
