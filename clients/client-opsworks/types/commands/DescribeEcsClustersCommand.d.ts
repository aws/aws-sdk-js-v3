import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeEcsClustersRequest, DescribeEcsClustersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEcsClustersCommandInput = DescribeEcsClustersRequest;
export declare type DescribeEcsClustersCommandOutput = DescribeEcsClustersResult & __MetadataBearer;
export declare class DescribeEcsClustersCommand extends $Command<DescribeEcsClustersCommandInput, DescribeEcsClustersCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeEcsClustersCommandInput;
    constructor(input: DescribeEcsClustersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEcsClustersCommandInput, DescribeEcsClustersCommandOutput>;
    private serialize;
    private deserialize;
}
