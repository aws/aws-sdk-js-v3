import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBSecurityGroupMessage, DescribeDBSecurityGroupsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBSecurityGroupsCommandInput = DescribeDBSecurityGroupsMessage;
export declare type DescribeDBSecurityGroupsCommandOutput = DBSecurityGroupMessage & __MetadataBearer;
export declare class DescribeDBSecurityGroupsCommand extends $Command<DescribeDBSecurityGroupsCommandInput, DescribeDBSecurityGroupsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBSecurityGroupsCommandInput;
    constructor(input: DescribeDBSecurityGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBSecurityGroupsCommandInput, DescribeDBSecurityGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
