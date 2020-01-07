import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeOptionGroupsMessage, OptionGroups } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeOptionGroupsCommandInput = DescribeOptionGroupsMessage;
export declare type DescribeOptionGroupsCommandOutput = OptionGroups & __MetadataBearer;
export declare class DescribeOptionGroupsCommand extends $Command<DescribeOptionGroupsCommandInput, DescribeOptionGroupsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeOptionGroupsCommandInput;
    constructor(input: DescribeOptionGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOptionGroupsCommandInput, DescribeOptionGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
