import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DBClusterParameterGroupDetails, DescribeDBClusterParametersMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBClusterParametersCommandInput = DescribeDBClusterParametersMessage;
export declare type DescribeDBClusterParametersCommandOutput = DBClusterParameterGroupDetails & __MetadataBearer;
export declare class DescribeDBClusterParametersCommand extends $Command<DescribeDBClusterParametersCommandInput, DescribeDBClusterParametersCommandOutput, DocDBClientResolvedConfig> {
    readonly input: DescribeDBClusterParametersCommandInput;
    constructor(input: DescribeDBClusterParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBClusterParametersCommandInput, DescribeDBClusterParametersCommandOutput>;
    private serialize;
    private deserialize;
}
