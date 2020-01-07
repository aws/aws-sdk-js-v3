import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { DescribeActivityInput, DescribeActivityOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeActivityCommandInput = DescribeActivityInput;
export declare type DescribeActivityCommandOutput = DescribeActivityOutput & __MetadataBearer;
export declare class DescribeActivityCommand extends $Command<DescribeActivityCommandInput, DescribeActivityCommandOutput, SFNClientResolvedConfig> {
    readonly input: DescribeActivityCommandInput;
    constructor(input: DescribeActivityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeActivityCommandInput, DescribeActivityCommandOutput>;
    private serialize;
    private deserialize;
}
