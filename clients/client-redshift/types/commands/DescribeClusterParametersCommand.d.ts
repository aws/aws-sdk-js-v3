import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClusterParameterGroupDetails, DescribeClusterParametersMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeClusterParametersCommandInput = DescribeClusterParametersMessage;
export declare type DescribeClusterParametersCommandOutput = ClusterParameterGroupDetails & __MetadataBearer;
export declare class DescribeClusterParametersCommand extends $Command<DescribeClusterParametersCommandInput, DescribeClusterParametersCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeClusterParametersCommandInput;
    constructor(input: DescribeClusterParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClusterParametersCommandInput, DescribeClusterParametersCommandOutput>;
    private serialize;
    private deserialize;
}
