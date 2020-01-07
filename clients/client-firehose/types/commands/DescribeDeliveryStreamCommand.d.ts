import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { DescribeDeliveryStreamInput, DescribeDeliveryStreamOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDeliveryStreamCommandInput = DescribeDeliveryStreamInput;
export declare type DescribeDeliveryStreamCommandOutput = DescribeDeliveryStreamOutput & __MetadataBearer;
export declare class DescribeDeliveryStreamCommand extends $Command<DescribeDeliveryStreamCommandInput, DescribeDeliveryStreamCommandOutput, FirehoseClientResolvedConfig> {
    readonly input: DescribeDeliveryStreamCommandInput;
    constructor(input: DescribeDeliveryStreamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FirehoseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDeliveryStreamCommandInput, DescribeDeliveryStreamCommandOutput>;
    private serialize;
    private deserialize;
}
