import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBClusterParameterGroupDetails, DescribeDBClusterParametersMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBClusterParametersCommandInput = DescribeDBClusterParametersMessage;
export declare type DescribeDBClusterParametersCommandOutput = DBClusterParameterGroupDetails & __MetadataBearer;
export declare class DescribeDBClusterParametersCommand extends $Command<DescribeDBClusterParametersCommandInput, DescribeDBClusterParametersCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBClusterParametersCommandInput;
    constructor(input: DescribeDBClusterParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBClusterParametersCommandInput, DescribeDBClusterParametersCommandOutput>;
    private serialize;
    private deserialize;
}
