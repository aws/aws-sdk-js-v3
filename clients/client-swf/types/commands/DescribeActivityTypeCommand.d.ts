import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { ActivityTypeDetail, DescribeActivityTypeInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeActivityTypeCommandInput = DescribeActivityTypeInput;
export declare type DescribeActivityTypeCommandOutput = ActivityTypeDetail & __MetadataBearer;
export declare class DescribeActivityTypeCommand extends $Command<DescribeActivityTypeCommandInput, DescribeActivityTypeCommandOutput, SWFClientResolvedConfig> {
    readonly input: DescribeActivityTypeCommandInput;
    constructor(input: DescribeActivityTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeActivityTypeCommandInput, DescribeActivityTypeCommandOutput>;
    private serialize;
    private deserialize;
}
