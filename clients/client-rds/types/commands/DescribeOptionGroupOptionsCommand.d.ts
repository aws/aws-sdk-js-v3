import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeOptionGroupOptionsMessage, OptionGroupOptionsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeOptionGroupOptionsCommandInput = DescribeOptionGroupOptionsMessage;
export declare type DescribeOptionGroupOptionsCommandOutput = OptionGroupOptionsMessage & __MetadataBearer;
export declare class DescribeOptionGroupOptionsCommand extends $Command<DescribeOptionGroupOptionsCommandInput, DescribeOptionGroupOptionsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeOptionGroupOptionsCommandInput;
    constructor(input: DescribeOptionGroupOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOptionGroupOptionsCommandInput, DescribeOptionGroupOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
