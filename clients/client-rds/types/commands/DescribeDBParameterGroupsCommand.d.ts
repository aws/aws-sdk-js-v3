import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBParameterGroupsMessage, DescribeDBParameterGroupsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBParameterGroupsCommandInput = DescribeDBParameterGroupsMessage;
export declare type DescribeDBParameterGroupsCommandOutput = DBParameterGroupsMessage & __MetadataBearer;
export declare class DescribeDBParameterGroupsCommand extends $Command<DescribeDBParameterGroupsCommandInput, DescribeDBParameterGroupsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBParameterGroupsCommandInput;
    constructor(input: DescribeDBParameterGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBParameterGroupsCommandInput, DescribeDBParameterGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
