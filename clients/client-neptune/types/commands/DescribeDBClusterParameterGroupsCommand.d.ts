import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DBClusterParameterGroupsMessage, DescribeDBClusterParameterGroupsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBClusterParameterGroupsCommandInput = DescribeDBClusterParameterGroupsMessage;
export declare type DescribeDBClusterParameterGroupsCommandOutput = DBClusterParameterGroupsMessage & __MetadataBearer;
export declare class DescribeDBClusterParameterGroupsCommand extends $Command<DescribeDBClusterParameterGroupsCommandInput, DescribeDBClusterParameterGroupsCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: DescribeDBClusterParameterGroupsCommandInput;
    constructor(input: DescribeDBClusterParameterGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBClusterParameterGroupsCommandInput, DescribeDBClusterParameterGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
