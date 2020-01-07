import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { DescribeSubnetGroupsRequest, DescribeSubnetGroupsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSubnetGroupsCommandInput = DescribeSubnetGroupsRequest;
export declare type DescribeSubnetGroupsCommandOutput = DescribeSubnetGroupsResponse & __MetadataBearer;
export declare class DescribeSubnetGroupsCommand extends $Command<DescribeSubnetGroupsCommandInput, DescribeSubnetGroupsCommandOutput, DAXClientResolvedConfig> {
    readonly input: DescribeSubnetGroupsCommandInput;
    constructor(input: DescribeSubnetGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSubnetGroupsCommandInput, DescribeSubnetGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
