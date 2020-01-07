import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DBSubnetGroupMessage, DescribeDBSubnetGroupsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBSubnetGroupsCommandInput = DescribeDBSubnetGroupsMessage;
export declare type DescribeDBSubnetGroupsCommandOutput = DBSubnetGroupMessage & __MetadataBearer;
export declare class DescribeDBSubnetGroupsCommand extends $Command<DescribeDBSubnetGroupsCommandInput, DescribeDBSubnetGroupsCommandOutput, DocDBClientResolvedConfig> {
    readonly input: DescribeDBSubnetGroupsCommandInput;
    constructor(input: DescribeDBSubnetGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBSubnetGroupsCommandInput, DescribeDBSubnetGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
