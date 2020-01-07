import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeDeploymentsRequest, DescribeDeploymentsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDeploymentsCommandInput = DescribeDeploymentsRequest;
export declare type DescribeDeploymentsCommandOutput = DescribeDeploymentsResult & __MetadataBearer;
export declare class DescribeDeploymentsCommand extends $Command<DescribeDeploymentsCommandInput, DescribeDeploymentsCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeDeploymentsCommandInput;
    constructor(input: DescribeDeploymentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDeploymentsCommandInput, DescribeDeploymentsCommandOutput>;
    private serialize;
    private deserialize;
}
