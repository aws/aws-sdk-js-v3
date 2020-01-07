import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeDefaultClusterParametersMessage, DescribeDefaultClusterParametersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDefaultClusterParametersCommandInput = DescribeDefaultClusterParametersMessage;
export declare type DescribeDefaultClusterParametersCommandOutput = DescribeDefaultClusterParametersResult & __MetadataBearer;
export declare class DescribeDefaultClusterParametersCommand extends $Command<DescribeDefaultClusterParametersCommandInput, DescribeDefaultClusterParametersCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeDefaultClusterParametersCommandInput;
    constructor(input: DescribeDefaultClusterParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDefaultClusterParametersCommandInput, DescribeDefaultClusterParametersCommandOutput>;
    private serialize;
    private deserialize;
}
